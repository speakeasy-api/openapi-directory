# Versions

## Overview

Whenever an artifact's content is updated, the old versions of the artifact's content
are not lost.  All versions can be listed and accessed if necessary.  This section 
describes the operations used to list and access all versions of an artifact's content
and metadata.

### Available Operations

* [CreateArtifactVersion](#createartifactversion) - Create artifact version
* [GetArtifactVersion](#getartifactversion) - Get artifact version
* [ListArtifactVersions](#listartifactversions) - List artifact versions
* [SearchVersions](#searchversions) - Search artifact versions
* [UpdateArtifactVersionState](#updateartifactversionstate) - Update artifact version state

## CreateArtifactVersion

Creates a new version of the artifact by uploading new content.  The configured rules for
the artifact are applied, and if they all pass, the new content is added as the most recent 
version of the artifact.  If any of the rules fail, an error is returned.

The body of the request should be the raw content of the new artifact version.  This 
is typically in JSON format for *most* of the supported types, but may be in another 
format for a few (for example, `PROTOBUF`).

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

Alternatively, you can explicitly specify the artifact type using the `X-Registry-ArtifactType` 
HTTP request header, or by including a hint in the request's `Content-Type`.

For example:

```
Content-Type: application/json; artifactType=AVRO
```

This operation can fail for the following reasons:

* Provided content (request body) was empty (HTTP error `400`)
* No artifact with this `artifactId` exists (HTTP error `404`)
* The new content violates one of the rules configured for the artifact (HTTP error `409`)
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
    res, err := s.Versions.CreateArtifactVersion(ctx, operations.CreateArtifactVersionRequest{
        RequestBody: []byte("natus"),
        XRegistryArtifactType: operations.CreateArtifactVersionXRegistryArtifactTypeEnumOpenapi.ToPointer(),
        ArtifactID: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VersionMetaData != nil {
        // handle response
    }
}
```

## GetArtifactVersion

Retrieves a single version of the artifact content.  Both the `artifactId` and the
unique `version` number must be provided.  The `Content-Type` of the response depends 
on the artifact type.  In most cases, this is `application/json`, but for some types 
it may be different (for example, `PROTOBUF`).

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No version with this `version` exists (HTTP error `404`)
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
    res, err := s.Versions.GetArtifactVersion(ctx, operations.GetArtifactVersionRequest{
        ArtifactID: "saepe",
        Version: 681820,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ListArtifactVersions

Returns a list of all version numbers for the artifact.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
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
    res, err := s.Versions.ListArtifactVersions(ctx, operations.ListArtifactVersionsRequest{
        ArtifactID: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListArtifactVersions200ApplicationJSONInt64Integers != nil {
        // handle response
    }
}
```

## SearchVersions

Searches for versions of a specific artifact.  This is typically used to get a listing
of all versions of an artifact (for example, in a user interface).

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
    res, err := s.Versions.SearchVersions(ctx, operations.SearchVersionsRequest{
        ArtifactID: "corporis",
        Limit: 613064,
        Offset: 437032,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VersionSearchResults != nil {
        // handle response
    }
}
```

## UpdateArtifactVersionState

Updates the state of a specific version of an artifact.  For example, you can use 
this operation to disable a specific version.

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
* No version with this `version` exists (HTTP error `404`)
* Artifact version cannot transition to the given state (HTTP error `400`)
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
    res, err := s.Versions.UpdateArtifactVersionState(ctx, operations.UpdateArtifactVersionStateRequest{
        UpdateState: shared.UpdateState{
            State: shared.ArtifactStateEnumDeleted,
        },
        ArtifactID: "quidem",
        Version: 99280,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
