# Versions

## Overview

When artifact content is updated, old versions of the artifact content are not lost.  All versions can be listed and accessed if necessary. This section describes the operations used to list and access all versions of an artifact's content and metadata.

### Available Operations

* [CreateArtifactVersionJSON](#createartifactversionjson) - Create artifact version
* [CreateArtifactVersionRaw](#createartifactversionraw) - Create artifact version
* [DeleteArtifactVersion](#deleteartifactversion) - Delete artifact version
* [GetArtifactVersion](#getartifactversion) - Get artifact version
* [GetArtifactVersionReferences](#getartifactversionreferences) - Get artifact version
* [ListArtifactVersions](#listartifactversions) - List artifact versions
* [UpdateArtifactVersionState](#updateartifactversionstate) - Update artifact version state

## CreateArtifactVersionJSON

Creates a new version of the artifact by uploading new content.  The configured rules for
the artifact are applied, and if they all pass, the new content is added as the most recent 
version of the artifact.  If any of the rules fail, an error is returned.

The body of the request can be the raw content of the new artifact version, or the raw content 
and a set of references pointing to other artifacts, and the type
of that content should match the artifact's type (for example if the artifact type is `AVRO`
then the content of the request should be an Apache Avro document).

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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Versions.CreateArtifactVersionJSON(ctx, operations.CreateArtifactVersionJSONRequest{
        ArtifactContent: shared.ArtifactContent{
            Content: "delectus",
            References: []shared.ArtifactReference{
                shared.ArtifactReference{
                    ArtifactID: "provident",
                    GroupID: "nam",
                    Name: "Nelson Lesch",
                    Version: sdk.String("deserunt"),
                },
                shared.ArtifactReference{
                    ArtifactID: "nisi",
                    GroupID: "vel",
                    Name: "Ms. Arturo Krajcik",
                    Version: sdk.String("distinctio"),
                },
                shared.ArtifactReference{
                    ArtifactID: "id",
                    GroupID: "labore",
                    Name: "Laurie Mosciski",
                    Version: sdk.String("vero"),
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

    if res.VersionMetaData != nil {
        // handle response
    }
}
```

## CreateArtifactVersionRaw

Creates a new version of the artifact by uploading new content.  The configured rules for
the artifact are applied, and if they all pass, the new content is added as the most recent 
version of the artifact.  If any of the rules fail, an error is returned.

The body of the request can be the raw content of the new artifact version, or the raw content 
and a set of references pointing to other artifacts, and the type
of that content should match the artifact's type (for example if the artifact type is `AVRO`
then the content of the request should be an Apache Avro document).

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
    res, err := s.Versions.CreateArtifactVersionRaw(ctx, operations.CreateArtifactVersionRawRequest{
        RequestBody: []byte("aspernatur"),
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

    if res.VersionMetaData != nil {
        // handle response
    }
}
```

## DeleteArtifactVersion

Deletes a single version of the artifact. Parameters `groupId`, `artifactId` and the unique `version`
are needed. If this is the only version of the artifact, this operation is the same as 
deleting the entire artifact.

This feature is disabled by default and it's discouraged for normal usage. To enable it, set the `registry.rest.artifact.deletion.enabled` property to true. This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No version with this `version` exists (HTTP error `404`)
 * Feature is disabled (HTTP error `405`)
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
    res, err := s.Versions.DeleteArtifactVersion(ctx, operations.DeleteArtifactVersionRequest{
        ArtifactID: ""example-artifact"",
        GroupID: ""my-group"",
        Version: ""3.1.6"",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
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
        ArtifactID: ""example-artifact"",
        Dereference: sdk.Bool(false),
        GroupID: ""my-group"",
        Version: ""3.1.6"",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileContent != nil {
        // handle response
    }
}
```

## GetArtifactVersionReferences

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
    res, err := s.Versions.GetArtifactVersionReferences(ctx, operations.GetArtifactVersionReferencesRequest{
        ArtifactID: ""example-artifact"",
        GroupID: ""my-group"",
        Version: ""3.1.6"",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArtifactReferences != nil {
        // handle response
    }
}
```

## ListArtifactVersions

Returns a list of all versions of the artifact.  The result set is paged.

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
        ArtifactID: ""example-artifact"",
        GroupID: ""my-group"",
        Limit: sdk.Int64(102863),
        Offset: sdk.Int64(298282),
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Versions.UpdateArtifactVersionState(ctx, operations.UpdateArtifactVersionStateRequest{
        UpdateState: shared.UpdateState{
            State: shared.ArtifactStateEnumEnabled,
        },
        ArtifactID: ""example-artifact"",
        GroupID: ""my-group"",
        Version: ""3.1.6"",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
