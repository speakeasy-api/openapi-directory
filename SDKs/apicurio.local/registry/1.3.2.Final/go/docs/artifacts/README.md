# Artifacts

## Overview

The primary way to interact with the Apicurio Registry API is to add, update, 
or delete artifacts. This section includes all of these primary operations.

### Available Operations

* [CreateArtifact](#createartifact) - Create artifact
* [DeleteArtifact](#deleteartifact) - Delete artifact
* [GetArtifactByGlobalID](#getartifactbyglobalid) - Get artifact by global ID
* [GetLatestArtifact](#getlatestartifact) - Get latest artifact
* [ListArtifacts](#listartifacts) - List all artifact IDs
* [SearchArtifacts](#searchartifacts) - Search for artifacts
* [UpdateArtifact](#updateartifact) - Update artifact
* [UpdateArtifactState](#updateartifactstate) - Update artifact state

## CreateArtifact

Creates a new artifact by posting the artifact content.  The body of the request should
be the raw content of the artifact.  This is typically in JSON format for *most* of the 
supported types, but may be in another format for a few (for example, `PROTOBUF`).

The registry attempts to figure out what kind of artifact is being added from the
following supported list:

* Avro (`AVRO`)
* Protobuf (`PROTOBUF`)
* Protobuf File Descriptor (`PROTOBUF_FD`)
* JSON Schema (`JSON`)
* Kafka Connect (`KCONNECT`)
* OpenAPI (`OPENAPI`)
* AsyncAPI (`ASYNCAPI`)
* GraphQL (`GRAPHQL`)
* Web Services Description Language (`WSDL`)
* XML Schema (`XSD`)

Alternatively, you can specify the artifact type using the `X-Registry-ArtifactType` 
HTTP request header, or include a hint in the request's `Content-Type`.  For example:

```
Content-Type: application/json; artifactType=AVRO
```

An artifact is created using the content provided in the body of the request.  This
content is created under a unique artifact ID that can be provided in the request
using the `X-Registry-ArtifactId` request header.  If not provided in the request,
the server generates a unique ID for the artifact.  It is typically recommended
that callers provide the ID, because this is typically a meaningful identifier, 
and for most use cases should be supplied by the caller.

If an artifact with the provided artifact ID already exists, the default behavior
is for the server to reject the content with a 409 error.  However, the caller can
supply the `ifExists` query parameter to alter this default behavior. The `ifExists`
query parameter can have one of the following values:

* `FAIL` (*default*) - server rejects the content with a 409 error
* `UPDATE` - server updates the existing artifact and returns the new metadata
* `RETURN` - server does not create or add content to the server, but instead 
returns the metadata for the existing artifact
* `RETURN_OR_UPDATE` - server returns an existing **version** that matches the 
provided content if such a version exists, otherwise a new version is created

This operation may fail for one of the following reasons:

* An invalid `ArtifactType` was indicated (HTTP error `400`)
* No `ArtifactType` was indicated and the server could not determine one from the content (HTTP error `400`)
* Provided content (request body) was empty (HTTP error `400`)
* An artifact with the provided ID already exists (HTTP error `409`)
* The content violates one of the configured global rules (HTTP error `409`)
* A server error occurred (HTTP error `500`)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Artifacts.CreateArtifact(ctx, operations.CreateArtifactRequest{
        RequestBody: []byte("delectus"),
        XRegistryArtifactID: sdk.String("tempora"),
        XRegistryArtifactType: operations.CreateArtifactXRegistryArtifactTypeEnumOpenapi.ToPointer(),
        IfExists: operations.CreateArtifactIfExistsEnumUpdate.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArtifactMetaData != nil {
        // handle response
    }
}
```

## DeleteArtifact

Deletes an artifact completely, resulting in all versions of the artifact also being
deleted.  This may fail for one of the following reasons:

* No artifact with the `artifactId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Artifacts.DeleteArtifact(ctx, operations.DeleteArtifactRequest{
        ArtifactID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetArtifactByGlobalID

Gets the content for an artifact version in the registry using its globally unique
identifier.

This operation may fail for one of the following reasons:

* No artifact version with this `globalId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Artifacts.GetArtifactByGlobalID(ctx, operations.GetArtifactByGlobalIDRequest{
        GlobalID: 812169,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetLatestArtifact

Returns the latest version of the artifact in its raw form.  The `Content-Type` of the response depends on the artifact type.  In most cases, this is `application/json`, but for some types it may be different (for example, `PROTOBUF`). If the latest version of the artifact is marked as `DISABLED`, the next available non-disabled version will be used.

This operation may fail for one of the following reasons:

* No artifact with this `artifactId` exists or all versions are `DISABLED` (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Artifacts.GetLatestArtifact(ctx, operations.GetLatestArtifactRequest{
        ArtifactID: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ListArtifacts

Returns a list of IDs of all artifacts in the registry as a flat list.  Typically the
server is configured to limit the number of artifact IDs returned when a large number 
of artifacts exist. In this case, the result of this call may be non-deterministic. The 
default limit is typically 1000 artifacts.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Artifacts.ListArtifacts(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListArtifacts200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## SearchArtifacts

Returns a paginated list of all artifacts that match the provided search criteria.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Artifacts.SearchArtifacts(ctx, operations.SearchArtifactsRequest{
        Limit: 479977,
        Offset: 568045,
        Order: operations.SearchArtifactsOrderEnumAsc.ToPointer(),
        Over: operations.SearchArtifactsOverEnumLabels.ToPointer(),
        Search: sdk.String("temporibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArtifactSearchResults != nil {
        // handle response
    }
}
```

## UpdateArtifact

Updates an artifact by uploading new content.  The body of the request should
be the raw content of the artifact.  This is typically in JSON format for *most*
of the supported types, but may be in another format for a few (for example, `PROTOBUF`).

The registry attempts to figure out what kind of artifact is being added from the
following supported list:

* Avro (`AVRO`)
* Protobuf (`PROTOBUF`)
* Protobuf File Descriptor (`PROTOBUF_FD`)
* JSON Schema (`JSON`)
* Kafka Connect (`KCONNECT`)
* OpenAPI (`OPENAPI`)
* AsyncAPI (`ASYNCAPI`)
* GraphQL (`GRAPHQL`)
* Web Services Description Language (`WSDL`)
* XML Schema (`XSD`)

Alternatively, you can specify the artifact type using the `X-Registry-ArtifactType` 
HTTP request header, or include a hint in the request's `Content-Type`.  For example:

```
Content-Type: application/json; artifactType=AVRO
```

The update could fail for a number of reasons including:

* Provided content (request body) was empty (HTTP error `400`)
* No artifact with the `artifactId` exists (HTTP error `404`)
* The new content violates one of the rules configured for the artifact (HTTP error `409`)
* The provided artifact type is not recognized (HTTP error `404`)
* A server error occurred (HTTP error `500`)

When successful, this creates a new version of the artifact, making it the most recent
(and therefore official) version of the artifact.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Artifacts.UpdateArtifact(ctx, operations.UpdateArtifactRequest{
        RequestBody: []byte("ab"),
        XRegistryArtifactType: operations.UpdateArtifactXRegistryArtifactTypeEnumJSON.ToPointer(),
        ArtifactID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArtifactMetaData != nil {
        // handle response
    }
}
```

## UpdateArtifactState

Updates the state of the artifact. For example, you can use this to mark the latest version of an artifact as `DEPRECATED`. The operation changes the state of the latest version of the artifact, even if this version is `DISABLED`. If multiple versions exist, only the most recent is changed.

The following state changes are supported:

* Enabled -> Disabled
* Enabled -> Deprecated
* Enabled -> Deleted
* Disabled -> Enabled
* Disabled -> Deleted
* Disabled -> Deprecated
* Deprecated -> Deleted

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* Artifact cannot transition to the given state (HTTP error `400`)
* A server error occurred (HTTP error `500`)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Artifacts.UpdateArtifactState(ctx, operations.UpdateArtifactStateRequest{
        UpdateState: shared.UpdateState{
            State: shared.ArtifactStateEnumDeprecated,
        },
        ArtifactID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
