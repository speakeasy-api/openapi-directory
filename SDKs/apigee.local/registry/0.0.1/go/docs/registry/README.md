# Registry

### Available Operations

* [RegistryCreateAPI](#registrycreateapi) - CreateApi creates a specified API.
* [RegistryCreateAPIDeployment](#registrycreateapideployment) - CreateApiDeployment creates a specified deployment.
* [RegistryCreateAPISpec](#registrycreateapispec) - CreateApiSpec creates a specified spec.
* [RegistryCreateAPIVersion](#registrycreateapiversion) - CreateApiVersion creates a specified version.
* [RegistryCreateArtifact](#registrycreateartifact) - CreateArtifact creates a specified artifact.
* [RegistryDeleteAPI](#registrydeleteapi) - DeleteApi removes a specified API and all of the resources that it
 owns.
* [RegistryDeleteAPIDeployment](#registrydeleteapideployment) - DeleteApiDeployment removes a specified deployment, all revisions, and all
 child resources (e.g. artifacts).
* [RegistryDeleteAPIDeploymentRevision](#registrydeleteapideploymentrevision) - DeleteApiDeploymentRevision deletes a revision of a deployment.
* [RegistryDeleteAPISpec](#registrydeleteapispec) - DeleteApiSpec removes a specified spec, all revisions, and all child
 resources (e.g. artifacts).
* [RegistryDeleteAPISpecRevision](#registrydeleteapispecrevision) - DeleteApiSpecRevision deletes a revision of a spec.
* [RegistryDeleteAPIVersion](#registrydeleteapiversion) - DeleteApiVersion removes a specified version and all of the resources that
 it owns.
* [RegistryDeleteArtifact](#registrydeleteartifact) - DeleteArtifact removes a specified artifact.
* [RegistryGetAPI](#registrygetapi) - GetApi returns a specified API.
* [RegistryGetAPIDeployment](#registrygetapideployment) - GetApiDeployment returns a specified deployment.
* [RegistryGetAPISpec](#registrygetapispec) - GetApiSpec returns a specified spec.
* [RegistryGetAPISpecContents](#registrygetapispeccontents) - GetApiSpecContents returns the contents of a specified spec.
 If specs are stored with GZip compression, the default behavior
 is to return the spec uncompressed (the mime_type response field
 indicates the exact format returned).
* [RegistryGetAPIVersion](#registrygetapiversion) - GetApiVersion returns a specified version.
* [RegistryGetArtifact](#registrygetartifact) - GetArtifact returns a specified artifact.
* [RegistryGetArtifactContents](#registrygetartifactcontents) - GetArtifactContents returns the contents of a specified artifact.
 If artifacts are stored with GZip compression, the default behavior
 is to return the artifact uncompressed (the mime_type response field
 indicates the exact format returned).
* [RegistryListAPIDeploymentRevisions](#registrylistapideploymentrevisions) - ListApiDeploymentRevisions lists all revisions of a deployment.
 Revisions are returned in descending order of revision creation time.
* [RegistryListAPIDeployments](#registrylistapideployments) - ListApiDeployments returns matching deployments.
* [RegistryListAPISpecRevisions](#registrylistapispecrevisions) - ListApiSpecRevisions lists all revisions of a spec.
 Revisions are returned in descending order of revision creation time.
* [RegistryListAPISpecs](#registrylistapispecs) - ListApiSpecs returns matching specs.
* [RegistryListAPIVersions](#registrylistapiversions) - ListApiVersions returns matching versions.
* [RegistryListApis](#registrylistapis) - ListApis returns matching APIs.
* [RegistryListArtifacts](#registrylistartifacts) - ListArtifacts returns matching artifacts.
* [RegistryReplaceArtifact](#registryreplaceartifact) - ReplaceArtifact can be used to replace a specified artifact.
* [RegistryRollbackAPIDeployment](#registryrollbackapideployment) - RollbackApiDeployment sets the current revision to a specified prior
 revision. Note that this creates a new revision with a new revision ID.
* [RegistryRollbackAPISpec](#registryrollbackapispec) - RollbackApiSpec sets the current revision to a specified prior revision.
 Note that this creates a new revision with a new revision ID.
* [RegistryTagAPIDeploymentRevision](#registrytagapideploymentrevision) - TagApiDeploymentRevision adds a tag to a specified revision of a
 deployment.
* [RegistryTagAPISpecRevision](#registrytagapispecrevision) - TagApiSpecRevision adds a tag to a specified revision of a spec.
* [RegistryUpdateAPI](#registryupdateapi) - UpdateApi can be used to modify a specified API.
* [RegistryUpdateAPIDeployment](#registryupdateapideployment) - UpdateApiDeployment can be used to modify a specified deployment.
* [RegistryUpdateAPISpec](#registryupdateapispec) - UpdateApiSpec can be used to modify a specified spec.
* [RegistryUpdateAPIVersion](#registryupdateapiversion) - UpdateApiVersion can be used to modify a specified version.

## RegistryCreateAPI

CreateApi creates a specified API.

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
    res, err := s.Registry.RegistryCreateAPI(ctx, operations.RegistryCreateAPIRequest{
        APIInput: shared.APIInput{
            Annotations: map[string]string{
                "ab": "quis",
                "veritatis": "deserunt",
                "perferendis": "ipsam",
                "repellendus": "sapiente",
            },
            Availability: sdk.String("quo"),
            Description: sdk.String("odit"),
            DisplayName: sdk.String("at"),
            Labels: map[string]string{
                "maiores": "molestiae",
                "quod": "quod",
                "esse": "totam",
                "porro": "dolorum",
            },
            Name: sdk.String("Antoinette Nikolaus"),
            RecommendedDeployment: sdk.String("deleniti"),
            RecommendedVersion: sdk.String("hic"),
        },
        APIID: sdk.String("optio"),
        Location: "totam",
        Project: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.API != nil {
        // handle response
    }
}
```

## RegistryCreateAPIDeployment

CreateApiDeployment creates a specified deployment.

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
    res, err := s.Registry.RegistryCreateAPIDeployment(ctx, operations.RegistryCreateAPIDeploymentRequest{
        APIDeploymentInput: shared.APIDeploymentInput{
            AccessGuidance: sdk.String("commodi"),
            Annotations: map[string]string{
                "modi": "qui",
                "impedit": "cum",
            },
            APISpecRevision: sdk.String("esse"),
            Description: sdk.String("ipsum"),
            DisplayName: sdk.String("excepturi"),
            EndpointURI: sdk.String("aspernatur"),
            ExternalChannelURI: sdk.String("perferendis"),
            IntendedAudience: sdk.String("ad"),
            Labels: map[string]string{
                "sed": "iste",
                "dolor": "natus",
                "laboriosam": "hic",
            },
            Name: sdk.String("Wilbur Kirlin"),
        },
        API: "iure",
        APIDeploymentID: sdk.String("saepe"),
        Location: "quidem",
        Project: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIDeployment != nil {
        // handle response
    }
}
```

## RegistryCreateAPISpec

CreateApiSpec creates a specified spec.

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
    res, err := s.Registry.RegistryCreateAPISpec(ctx, operations.RegistryCreateAPISpecRequest{
        APISpecInput: shared.APISpecInput{
            Annotations: map[string]string{
                "reiciendis": "est",
            },
            Contents: sdk.String("mollitia"),
            Description: sdk.String("laborum"),
            Filename: sdk.String("dolores"),
            Labels: map[string]string{
                "corporis": "explicabo",
            },
            MimeType: sdk.String("nobis"),
            Name: sdk.String("Guadalupe Hickle"),
            SourceURI: sdk.String("accusantium"),
        },
        API: "iure",
        APISpecID: sdk.String("culpa"),
        Location: "doloribus",
        Project: "sapiente",
        Version: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APISpec != nil {
        // handle response
    }
}
```

## RegistryCreateAPIVersion

CreateApiVersion creates a specified version.

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
    res, err := s.Registry.RegistryCreateAPIVersion(ctx, operations.RegistryCreateAPIVersionRequest{
        APIVersionInput: shared.APIVersionInput{
            Annotations: map[string]string{
                "dolorem": "culpa",
                "consequuntur": "repellat",
                "mollitia": "occaecati",
            },
            Description: sdk.String("numquam"),
            DisplayName: sdk.String("commodi"),
            Labels: map[string]string{
                "molestiae": "velit",
                "error": "quia",
            },
            Name: sdk.String("Gloria Padberg"),
            State: sdk.String("odit"),
        },
        API: "quo",
        APIVersionID: sdk.String("sequi"),
        Location: "tenetur",
        Project: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIVersion != nil {
        // handle response
    }
}
```

## RegistryCreateArtifact

CreateArtifact creates a specified artifact.

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
    res, err := s.Registry.RegistryCreateArtifact(ctx, operations.RegistryCreateArtifactRequest{
        ArtifactInput: shared.ArtifactInput{
            Contents: sdk.String("id"),
            MimeType: sdk.String("possimus"),
            Name: sdk.String("Joyce Mueller"),
        },
        ArtifactID: sdk.String("quasi"),
        Location: "reiciendis",
        Project: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Artifact != nil {
        // handle response
    }
}
```

## RegistryDeleteAPI

DeleteApi removes a specified API and all of the resources that it
 owns.

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
    res, err := s.Registry.RegistryDeleteAPI(ctx, operations.RegistryDeleteAPIRequest{
        API: "vero",
        Force: sdk.Bool(false),
        Location: "nihil",
        Project: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RegistryDeleteAPIDeployment

DeleteApiDeployment removes a specified deployment, all revisions, and all
 child resources (e.g. artifacts).

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
    res, err := s.Registry.RegistryDeleteAPIDeployment(ctx, operations.RegistryDeleteAPIDeploymentRequest{
        API: "voluptatibus",
        Deployment: "ipsa",
        Force: sdk.Bool(false),
        Location: "omnis",
        Project: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RegistryDeleteAPIDeploymentRevision

DeleteApiDeploymentRevision deletes a revision of a deployment.

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
    res, err := s.Registry.RegistryDeleteAPIDeploymentRevision(ctx, operations.RegistryDeleteAPIDeploymentRevisionRequest{
        API: "cum",
        Deployment: "perferendis",
        Location: "doloremque",
        Project: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIDeployment != nil {
        // handle response
    }
}
```

## RegistryDeleteAPISpec

DeleteApiSpec removes a specified spec, all revisions, and all child
 resources (e.g. artifacts).

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
    res, err := s.Registry.RegistryDeleteAPISpec(ctx, operations.RegistryDeleteAPISpecRequest{
        API: "ut",
        Force: sdk.Bool(false),
        Location: "maiores",
        Project: "dicta",
        Spec: "corporis",
        Version: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RegistryDeleteAPISpecRevision

DeleteApiSpecRevision deletes a revision of a spec.

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
    res, err := s.Registry.RegistryDeleteAPISpecRevision(ctx, operations.RegistryDeleteAPISpecRevisionRequest{
        API: "iusto",
        Location: "dicta",
        Project: "harum",
        Spec: "enim",
        Version: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APISpec != nil {
        // handle response
    }
}
```

## RegistryDeleteAPIVersion

DeleteApiVersion removes a specified version and all of the resources that
 it owns.

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
    res, err := s.Registry.RegistryDeleteAPIVersion(ctx, operations.RegistryDeleteAPIVersionRequest{
        API: "commodi",
        Force: sdk.Bool(false),
        Location: "repudiandae",
        Project: "quae",
        Version: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RegistryDeleteArtifact

DeleteArtifact removes a specified artifact.

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
    res, err := s.Registry.RegistryDeleteArtifact(ctx, operations.RegistryDeleteArtifactRequest{
        Artifact: "quidem",
        Location: "molestias",
        Project: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RegistryGetAPI

GetApi returns a specified API.

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
    res, err := s.Registry.RegistryGetAPI(ctx, operations.RegistryGetAPIRequest{
        API: "pariatur",
        Location: "modi",
        Project: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.API != nil {
        // handle response
    }
}
```

## RegistryGetAPIDeployment

GetApiDeployment returns a specified deployment.

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
    res, err := s.Registry.RegistryGetAPIDeployment(ctx, operations.RegistryGetAPIDeploymentRequest{
        API: "rem",
        Deployment: "voluptates",
        Location: "quasi",
        Project: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIDeployment != nil {
        // handle response
    }
}
```

## RegistryGetAPISpec

GetApiSpec returns a specified spec.

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
    res, err := s.Registry.RegistryGetAPISpec(ctx, operations.RegistryGetAPISpecRequest{
        API: "sint",
        Location: "veritatis",
        Project: "itaque",
        Spec: "incidunt",
        Version: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APISpec != nil {
        // handle response
    }
}
```

## RegistryGetAPISpecContents

GetApiSpecContents returns the contents of a specified spec.
 If specs are stored with GZip compression, the default behavior
 is to return the spec uncompressed (the mime_type response field
 indicates the exact format returned).

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
    res, err := s.Registry.RegistryGetAPISpecContents(ctx, operations.RegistryGetAPISpecContentsRequest{
        API: "consequatur",
        Location: "est",
        Project: "quibusdam",
        Spec: "explicabo",
        Version: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RegistryGetAPIVersion

GetApiVersion returns a specified version.

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
    res, err := s.Registry.RegistryGetAPIVersion(ctx, operations.RegistryGetAPIVersionRequest{
        API: "distinctio",
        Location: "quibusdam",
        Project: "labore",
        Version: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIVersion != nil {
        // handle response
    }
}
```

## RegistryGetArtifact

GetArtifact returns a specified artifact.

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
    res, err := s.Registry.RegistryGetArtifact(ctx, operations.RegistryGetArtifactRequest{
        Artifact: "qui",
        Location: "aliquid",
        Project: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Artifact != nil {
        // handle response
    }
}
```

## RegistryGetArtifactContents

GetArtifactContents returns the contents of a specified artifact.
 If artifacts are stored with GZip compression, the default behavior
 is to return the artifact uncompressed (the mime_type response field
 indicates the exact format returned).

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
    res, err := s.Registry.RegistryGetArtifactContents(ctx, operations.RegistryGetArtifactContentsRequest{
        Artifact: "quos",
        Location: "perferendis",
        Project: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RegistryListAPIDeploymentRevisions

ListApiDeploymentRevisions lists all revisions of a deployment.
 Revisions are returned in descending order of revision creation time.

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
    res, err := s.Registry.RegistryListAPIDeploymentRevisions(ctx, operations.RegistryListAPIDeploymentRevisionsRequest{
        API: "assumenda",
        Deployment: "ipsam",
        Location: "alias",
        PageSize: sdk.Int(146441),
        PageToken: sdk.String("dolorum"),
        Project: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAPIDeploymentRevisionsResponse != nil {
        // handle response
    }
}
```

## RegistryListAPIDeployments

ListApiDeployments returns matching deployments.

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
    res, err := s.Registry.RegistryListAPIDeployments(ctx, operations.RegistryListAPIDeploymentsRequest{
        API: "tempora",
        Filter: sdk.String("facilis"),
        Location: "tempore",
        PageSize: sdk.Int(288476),
        PageToken: sdk.String("delectus"),
        Project: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAPIDeploymentsResponse != nil {
        // handle response
    }
}
```

## RegistryListAPISpecRevisions

ListApiSpecRevisions lists all revisions of a spec.
 Revisions are returned in descending order of revision creation time.

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
    res, err := s.Registry.RegistryListAPISpecRevisions(ctx, operations.RegistryListAPISpecRevisionsRequest{
        API: "non",
        Location: "eligendi",
        PageSize: sdk.Int(576157),
        PageToken: sdk.String("aliquid"),
        Project: "provident",
        Spec: "necessitatibus",
        Version: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAPISpecRevisionsResponse != nil {
        // handle response
    }
}
```

## RegistryListAPISpecs

ListApiSpecs returns matching specs.

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
    res, err := s.Registry.RegistryListAPISpecs(ctx, operations.RegistryListAPISpecsRequest{
        API: "officia",
        Filter: sdk.String("dolor"),
        Location: "debitis",
        PageSize: sdk.Int(952749),
        PageToken: sdk.String("dolorum"),
        Project: "in",
        Version: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAPISpecsResponse != nil {
        // handle response
    }
}
```

## RegistryListAPIVersions

ListApiVersions returns matching versions.

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
    res, err := s.Registry.RegistryListAPIVersions(ctx, operations.RegistryListAPIVersionsRequest{
        API: "illum",
        Filter: sdk.String("maiores"),
        Location: "rerum",
        PageSize: sdk.Int(116202),
        PageToken: sdk.String("magnam"),
        Project: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAPIVersionsResponse != nil {
        // handle response
    }
}
```

## RegistryListApis

ListApis returns matching APIs.

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
    res, err := s.Registry.RegistryListApis(ctx, operations.RegistryListApisRequest{
        Filter: sdk.String("facere"),
        Location: "ea",
        PageSize: sdk.Int(396506),
        PageToken: sdk.String("laborum"),
        Project: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListApisResponse != nil {
        // handle response
    }
}
```

## RegistryListArtifacts

ListArtifacts returns matching artifacts.

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
    res, err := s.Registry.RegistryListArtifacts(ctx, operations.RegistryListArtifactsRequest{
        Filter: sdk.String("non"),
        Location: "occaecati",
        PageSize: sdk.Int(313218),
        PageToken: sdk.String("accusamus"),
        Project: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListArtifactsResponse != nil {
        // handle response
    }
}
```

## RegistryReplaceArtifact

ReplaceArtifact can be used to replace a specified artifact.

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
    res, err := s.Registry.RegistryReplaceArtifact(ctx, operations.RegistryReplaceArtifactRequest{
        ArtifactInput: shared.ArtifactInput{
            Contents: sdk.String("quidem"),
            MimeType: sdk.String("provident"),
            Name: sdk.String("Lynn Kuvalis"),
        },
        Artifact: "amet",
        Location: "deserunt",
        Project: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Artifact != nil {
        // handle response
    }
}
```

## RegistryRollbackAPIDeployment

RollbackApiDeployment sets the current revision to a specified prior
 revision. Note that this creates a new revision with a new revision ID.

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
    res, err := s.Registry.RegistryRollbackAPIDeployment(ctx, operations.RegistryRollbackAPIDeploymentRequest{
        RollbackAPIDeploymentRequest: shared.RollbackAPIDeploymentRequest{
            Name: "Ada Moen IV",
            RevisionID: "magnam",
        },
        API: "distinctio",
        Deployment: "id",
        Location: "labore",
        Project: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIDeployment != nil {
        // handle response
    }
}
```

## RegistryRollbackAPISpec

RollbackApiSpec sets the current revision to a specified prior revision.
 Note that this creates a new revision with a new revision ID.

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
    res, err := s.Registry.RegistryRollbackAPISpec(ctx, operations.RegistryRollbackAPISpecRequest{
        RollbackAPISpecRequest: shared.RollbackAPISpecRequest{
            Name: "Ada Rohan",
            RevisionID: "aspernatur",
        },
        API: "architecto",
        Location: "magnam",
        Project: "et",
        Spec: "excepturi",
        Version: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APISpec != nil {
        // handle response
    }
}
```

## RegistryTagAPIDeploymentRevision

TagApiDeploymentRevision adds a tag to a specified revision of a
 deployment.

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
    res, err := s.Registry.RegistryTagAPIDeploymentRevision(ctx, operations.RegistryTagAPIDeploymentRevisionRequest{
        TagAPIDeploymentRevisionRequest: shared.TagAPIDeploymentRevisionRequest{
            Name: "Miss Julian Marvin",
            Tag: "mollitia",
        },
        API: "ad",
        Deployment: "eum",
        Location: "dolor",
        Project: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIDeployment != nil {
        // handle response
    }
}
```

## RegistryTagAPISpecRevision

TagApiSpecRevision adds a tag to a specified revision of a spec.

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
    res, err := s.Registry.RegistryTagAPISpecRevision(ctx, operations.RegistryTagAPISpecRevisionRequest{
        TagAPISpecRevisionRequest: shared.TagAPISpecRevisionRequest{
            Name: "Vivian Boyle",
            Tag: "debitis",
        },
        API: "eius",
        Location: "maxime",
        Project: "deleniti",
        Spec: "facilis",
        Version: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APISpec != nil {
        // handle response
    }
}
```

## RegistryUpdateAPI

UpdateApi can be used to modify a specified API.

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
    res, err := s.Registry.RegistryUpdateAPI(ctx, operations.RegistryUpdateAPIRequest{
        APIInput: shared.APIInput{
            Annotations: map[string]string{
                "architecto": "repudiandae",
            },
            Availability: sdk.String("ullam"),
            Description: sdk.String("expedita"),
            DisplayName: sdk.String("nihil"),
            Labels: map[string]string{
                "quibusdam": "sed",
                "saepe": "pariatur",
                "accusantium": "consequuntur",
                "praesentium": "natus",
            },
            Name: sdk.String("Joan Satterfield"),
            RecommendedDeployment: sdk.String("maxime"),
            RecommendedVersion: sdk.String("ea"),
        },
        AllowMissing: sdk.Bool(false),
        API: "excepturi",
        Location: "odit",
        Project: "ea",
        UpdateMask: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.API != nil {
        // handle response
    }
}
```

## RegistryUpdateAPIDeployment

UpdateApiDeployment can be used to modify a specified deployment.

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
    res, err := s.Registry.RegistryUpdateAPIDeployment(ctx, operations.RegistryUpdateAPIDeploymentRequest{
        APIDeploymentInput: shared.APIDeploymentInput{
            AccessGuidance: sdk.String("ab"),
            Annotations: map[string]string{
                "quidem": "ipsam",
                "voluptate": "autem",
                "nam": "eaque",
                "pariatur": "nemo",
            },
            APISpecRevision: sdk.String("voluptatibus"),
            Description: sdk.String("perferendis"),
            DisplayName: sdk.String("fugiat"),
            EndpointURI: sdk.String("amet"),
            ExternalChannelURI: sdk.String("aut"),
            IntendedAudience: sdk.String("cumque"),
            Labels: map[string]string{
                "hic": "libero",
                "nobis": "dolores",
            },
            Name: sdk.String("Mrs. Deanna Kuhn"),
        },
        AllowMissing: sdk.Bool(false),
        API: "eos",
        Deployment: "perferendis",
        Location: "dolores",
        Project: "minus",
        UpdateMask: sdk.String("quam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIDeployment != nil {
        // handle response
    }
}
```

## RegistryUpdateAPISpec

UpdateApiSpec can be used to modify a specified spec.

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
    res, err := s.Registry.RegistryUpdateAPISpec(ctx, operations.RegistryUpdateAPISpecRequest{
        APISpecInput: shared.APISpecInput{
            Annotations: map[string]string{
                "vero": "nostrum",
            },
            Contents: sdk.String("hic"),
            Description: sdk.String("recusandae"),
            Filename: sdk.String("omnis"),
            Labels: map[string]string{
                "perspiciatis": "voluptatem",
                "porro": "consequuntur",
                "blanditiis": "error",
            },
            MimeType: sdk.String("eaque"),
            Name: sdk.String("Jean Ferry"),
            SourceURI: sdk.String("modi"),
        },
        AllowMissing: sdk.Bool(false),
        API: "iste",
        Location: "dolorum",
        Project: "deleniti",
        Spec: "pariatur",
        UpdateMask: sdk.String("provident"),
        Version: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APISpec != nil {
        // handle response
    }
}
```

## RegistryUpdateAPIVersion

UpdateApiVersion can be used to modify a specified version.

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
    res, err := s.Registry.RegistryUpdateAPIVersion(ctx, operations.RegistryUpdateAPIVersionRequest{
        APIVersionInput: shared.APIVersionInput{
            Annotations: map[string]string{
                "delectus": "quaerat",
                "quos": "aliquid",
                "dolorem": "dolorem",
            },
            Description: sdk.String("dolor"),
            DisplayName: sdk.String("qui"),
            Labels: map[string]string{
                "hic": "excepturi",
            },
            Name: sdk.String("Adrian Kuhn"),
            State: sdk.String("dolorum"),
        },
        AllowMissing: sdk.Bool(false),
        API: "numquam",
        Location: "veritatis",
        Project: "ipsa",
        UpdateMask: sdk.String("ipsa"),
        Version: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIVersion != nil {
        // handle response
    }
}
```
