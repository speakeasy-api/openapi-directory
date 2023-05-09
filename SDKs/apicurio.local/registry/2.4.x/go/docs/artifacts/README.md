# Artifacts

## Overview

The primary way to interact with the Apicurio Registry API is to add, update, 
or delete artifacts. This section includes all of these primary operations.

### Available Operations

* [CreateArtifactJSON](#createartifactjson) - Create artifact
* [CreateArtifactRaw](#createartifactraw) - Create artifact
* [DeleteArtifact](#deleteartifact) - Delete artifact
* [DeleteArtifactsInGroup](#deleteartifactsingroup) - Delete artifacts in group
* [GetContentByGlobalID](#getcontentbyglobalid) - Get artifact by global ID
* [GetContentByHash](#getcontentbyhash) - Get artifact content by SHA-256 hash
* [GetContentByID](#getcontentbyid) - Get artifact content by ID
* [GetLatestArtifact](#getlatestartifact) - Get latest artifact
* [ListArtifactsInGroup](#listartifactsingroup) - List artifacts in group
* [ReferencesByContentHash](#referencesbycontenthash) - List artifact references by hash
* [ReferencesByContentID](#referencesbycontentid) - List artifact references by content ID
* [ReferencesByGlobalID](#referencesbyglobalid) - List artifact references by global ID
* [SearchArtifacts](#searchartifacts) - Search for artifacts
* [SearchArtifactsByContent](#searchartifactsbycontent) - Search for artifacts by content
* [UpdateArtifactState](#updateartifactstate) - Update artifact state
* [UpdateArtifactJSON](#updateartifactjson) - Update artifact
* [UpdateArtifactRaw](#updateartifactraw) - Update artifact

## CreateArtifactJSON

Creates a new artifact by posting the artifact content.  The body of the request should
be the raw content of the artifact.  This is typically in JSON format for *most* of the 
supported types, but may be in another format for a few (for example, `PROTOBUF`).

The registry attempts to figure out what kind of artifact is being added from the
following supported list:

* Avro (`AVRO`)
* Protobuf (`PROTOBUF`)
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Artifacts.CreateArtifactJSON(ctx, operations.CreateArtifactJSONRequest{
        ArtifactContent: shared.ArtifactContent{
            Content: "nisi",
            References: []shared.ArtifactReference{
                shared.ArtifactReference{
                    ArtifactID: "temporibus",
                    GroupID: "ab",
                    Name: "Mrs. Marie O'Connell",
                    Version: sdk.String("sapiente"),
                },
                shared.ArtifactReference{
                    ArtifactID: "quo",
                    GroupID: "odit",
                    Name: "Wilfred Wolff",
                    Version: sdk.String("quod"),
                },
                shared.ArtifactReference{
                    ArtifactID: "esse",
                    GroupID: "totam",
                    Name: "Omar Carroll",
                    Version: sdk.String("occaecati"),
                },
                shared.ArtifactReference{
                    ArtifactID: "fugit",
                    GroupID: "deleniti",
                    Name: "Ms. Earnest Lebsack",
                    Version: sdk.String("modi"),
                },
            },
        },
        XRegistryArtifactID: sdk.String("qui"),
        XRegistryArtifactType: sdk.String("AVRO"),
        XRegistryContentHash: sdk.String("impedit"),
        XRegistryDescription: sdk.String(""Artifact description""),
        XRegistryDescriptionEncoded: sdk.String(""QXJ0aWZhY3QgZGVzY3JpcHRpb24K""),
        XRegistryHashAlgorithm: operations.CreateArtifactJSONXRegistryHashAlgorithmEnumMd5.ToPointer(),
        XRegistryName: sdk.String(""Artifact name""),
        XRegistryNameEncoded: sdk.String(""QXJ0aWZhY3QgbmFtZQo=""),
        XRegistryVersion: sdk.String(""3.1.6""),
        Canonical: sdk.Bool(false),
        GroupID: ""my-group"",
        IfExists: shared.IfExistsEnumUpdate.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArtifactMetaData != nil {
        // handle response
    }
}
```

## CreateArtifactRaw

Creates a new artifact by posting the artifact content.  The body of the request should
be the raw content of the artifact.  This is typically in JSON format for *most* of the 
supported types, but may be in another format for a few (for example, `PROTOBUF`).

The registry attempts to figure out what kind of artifact is being added from the
following supported list:

* Avro (`AVRO`)
* Protobuf (`PROTOBUF`)
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Artifacts.CreateArtifactRaw(ctx, operations.CreateArtifactRawRequest{
        RequestBody: []byte("ipsum"),
        XRegistryArtifactID: sdk.String("excepturi"),
        XRegistryArtifactType: sdk.String("AVRO"),
        XRegistryContentHash: sdk.String("aspernatur"),
        XRegistryDescription: sdk.String(""Artifact description""),
        XRegistryDescriptionEncoded: sdk.String(""QXJ0aWZhY3QgZGVzY3JpcHRpb24K""),
        XRegistryHashAlgorithm: operations.CreateArtifactRawXRegistryHashAlgorithmEnumSha256.ToPointer(),
        XRegistryName: sdk.String(""Artifact name""),
        XRegistryNameEncoded: sdk.String(""QXJ0aWZhY3QgbmFtZQo=""),
        XRegistryVersion: sdk.String(""3.1.6""),
        Canonical: sdk.Bool(false),
        GroupID: ""my-group"",
        IfExists: shared.IfExistsEnumUpdate.ToPointer(),
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
        ArtifactID: ""example-artifact"",
        GroupID: ""my-group"",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteArtifactsInGroup

Deletes all of the artifacts that exist in a given group.

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
    res, err := s.Artifacts.DeleteArtifactsInGroup(ctx, operations.DeleteArtifactsInGroupRequest{
        GroupID: ""my-group"",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetContentByGlobalID

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
    res, err := s.Artifacts.GetContentByGlobalID(ctx, operations.GetContentByGlobalIDRequest{
        Dereference: sdk.Bool(false),
        GlobalID: 617636,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileContent != nil {
        // handle response
    }
}
```

## GetContentByHash

Gets the content for an artifact version in the registry using the 
SHA-256 hash of the content.  This content hash may be shared by multiple artifact
versions in the case where the artifact versions have identical content.

This operation may fail for one of the following reasons:

* No content with this `contentHash` exists (HTTP error `404`)
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
    res, err := s.Artifacts.GetContentByHash(ctx, operations.GetContentByHashRequest{
        ContentHash: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileContent != nil {
        // handle response
    }
}
```

## GetContentByID

Gets the content for an artifact version in the registry using the unique content
identifier for that content.  This content ID may be shared by multiple artifact
versions in the case where the artifact versions are identical.

This operation may fail for one of the following reasons:

* No content with this `contentId` exists (HTTP error `404`)
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
    res, err := s.Artifacts.GetContentByID(ctx, operations.GetContentByIDRequest{
        ContentID: 612096,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileContent != nil {
        // handle response
    }
}
```

## GetLatestArtifact

Returns the latest version of the artifact in its raw form.  The `Content-Type` of the
response depends on the artifact type.  In most cases, this is `application/json`, but 
for some types it may be different (for example, `PROTOBUF`).
If the latest version of the artifact is marked as `DISABLED`, the next available non-disabled version will be used.

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
        ArtifactID: ""example-artifact"",
        Dereference: sdk.Bool(false),
        GroupID: ""my-group"",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileContent != nil {
        // handle response
    }
}
```

## ListArtifactsInGroup

Returns a list of all artifacts in the group.  This list is paged.

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
    res, err := s.Artifacts.ListArtifactsInGroup(ctx, operations.ListArtifactsInGroupRequest{
        GroupID: ""my-group"",
        Limit: sdk.Int64(222321),
        Offset: sdk.Int64(616934),
        Order: shared.SortOrderEnumAsc.ToPointer(),
        Orderby: shared.SortByEnumCreatedOn.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArtifactSearchResults != nil {
        // handle response
    }
}
```

## ReferencesByContentHash

Returns a list containing all the artifact references using the artifact content hash.

This operation may fail for one of the following reasons:

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
    res, err := s.Artifacts.ReferencesByContentHash(ctx, operations.ReferencesByContentHashRequest{
        ContentHash: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArtifactReferences != nil {
        // handle response
    }
}
```

## ReferencesByContentID

Returns a list containing all the artifact references using the artifact content ID.

This operation may fail for one of the following reasons:

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
    res, err := s.Artifacts.ReferencesByContentID(ctx, operations.ReferencesByContentIDRequest{
        ContentID: 681820,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArtifactReferences != nil {
        // handle response
    }
}
```

## ReferencesByGlobalID

Returns a list containing all the artifact references using the artifact global ID.

This operation may fail for one of the following reasons:

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
    res, err := s.Artifacts.ReferencesByGlobalID(ctx, operations.ReferencesByGlobalIDRequest{
        GlobalID: 449950,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArtifactReferences != nil {
        // handle response
    }
}
```

## SearchArtifacts

Returns a paginated list of all artifacts that match the provided filter criteria.


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
    res, err := s.Artifacts.SearchArtifacts(ctx, operations.SearchArtifactsRequest{
        ContentID: sdk.Int64(359508),
        Description: sdk.String("iste"),
        GlobalID: sdk.Int64(437032),
        Group: sdk.String("saepe"),
        Labels: []string{
            "architecto",
            "ipsa",
            "reiciendis",
        },
        Limit: sdk.Int64(666767),
        Name: sdk.String("Cameron Dach"),
        Offset: sdk.Int64(128926),
        Order: shared.SortOrderEnumDesc.ToPointer(),
        Orderby: shared.SortByEnumName.ToPointer(),
        Properties: []string{
            "nemo",
            "minima",
            "excepturi",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArtifactSearchResults != nil {
        // handle response
    }
}
```

## SearchArtifactsByContent

Returns a paginated list of all artifacts with at least one version that matches the
posted content.


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
    res, err := s.Artifacts.SearchArtifactsByContent(ctx, operations.SearchArtifactsByContentRequest{
        RequestBody: []byte("accusantium"),
        ArtifactType: sdk.String("AVRO"),
        Canonical: sdk.Bool(false),
        Limit: sdk.Int64(438601),
        Offset: sdk.Int64(634274),
        Order: operations.SearchArtifactsByContentOrderEnumDesc.ToPointer(),
        Orderby: operations.SearchArtifactsByContentOrderbyEnumCreatedOn.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArtifactSearchResults != nil {
        // handle response
    }
}
```

## UpdateArtifactState

Updates the state of the artifact.  For example, you can use this to mark the latest version of an artifact as `DEPRECATED`. The operation changes the state of the latest version of the artifact, even if this version is `DISABLED`. If multiple versions exist, only the most recent is changed.

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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Artifacts.UpdateArtifactState(ctx, operations.UpdateArtifactStateRequest{
        UpdateState: shared.UpdateState{
            State: shared.ArtifactStateEnumEnabled,
        },
        ArtifactID: ""example-artifact"",
        GroupID: ""my-group"",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateArtifactJSON

Updates an artifact by uploading new content.  The body of the request can
be the raw content of the artifact or a JSON object containing both the raw content and
a set of references to other artifacts..  This is typically in JSON format for *most*
of the supported types, but may be in another format for a few (for example, `PROTOBUF`).
The type of the content should be compatible with the artifact's type (it would be
an error to update an `AVRO` artifact with new `OPENAPI` content, for example).

The update could fail for a number of reasons including:

* Provided content (request body) was empty (HTTP error `400`)
* No artifact with the `artifactId` exists (HTTP error `404`)
* The new content violates one of the rules configured for the artifact (HTTP error `409`)
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Artifacts.UpdateArtifactJSON(ctx, operations.UpdateArtifactJSONRequest{
        ArtifactContent: shared.ArtifactContent{
            Content: "mollitia",
            References: []shared.ArtifactReference{
                shared.ArtifactReference{
                    ArtifactID: "culpa",
                    GroupID: "consequuntur",
                    Name: "Shaun McCullough",
                    Version: sdk.String("quam"),
                },
            },
        },
        XRegistryDescription: sdk.String(""Artifact description""),
        XRegistryDescriptionEncoded: sdk.String(""QXJ0aWZhY3QgZGVzY3JpcHRpb24K""),
        XRegistryName: sdk.String(""Artifact name""),
        XRegistryNameEncoded: sdk.String(""QXJ0aWZhY3QgbmFtZQo=""),
        XRegistryVersion: sdk.String(""3.1.6""),
        ArtifactID: ""example-artifact"",
        GroupID: ""my-group"",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArtifactMetaData != nil {
        // handle response
    }
}
```

## UpdateArtifactRaw

Updates an artifact by uploading new content.  The body of the request can
be the raw content of the artifact or a JSON object containing both the raw content and
a set of references to other artifacts..  This is typically in JSON format for *most*
of the supported types, but may be in another format for a few (for example, `PROTOBUF`).
The type of the content should be compatible with the artifact's type (it would be
an error to update an `AVRO` artifact with new `OPENAPI` content, for example).

The update could fail for a number of reasons including:

* Provided content (request body) was empty (HTTP error `400`)
* No artifact with the `artifactId` exists (HTTP error `404`)
* The new content violates one of the rules configured for the artifact (HTTP error `409`)
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
    res, err := s.Artifacts.UpdateArtifactRaw(ctx, operations.UpdateArtifactRawRequest{
        RequestBody: []byte("molestiae"),
        XRegistryDescription: sdk.String(""Artifact description""),
        XRegistryDescriptionEncoded: sdk.String(""QXJ0aWZhY3QgZGVzY3JpcHRpb24K""),
        XRegistryName: sdk.String(""Artifact name""),
        XRegistryNameEncoded: sdk.String(""QXJ0aWZhY3QgbmFtZQo=""),
        XRegistryVersion: sdk.String(""3.1.6""),
        ArtifactID: ""example-artifact"",
        GroupID: ""my-group"",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArtifactMetaData != nil {
        // handle response
    }
}
```
