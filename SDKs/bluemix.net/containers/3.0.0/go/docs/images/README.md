# Images

### Available Operations

* [DeleteImagesID](#deleteimagesid) - Remove a Docker image.
* [GetImagesJSON](#getimagesjson) - List all Docker images that are available in your private Bluemix registry.
* [GetImagesNameOrIDJSON](#getimagesnameoridjson) - Inspect a Docker image in private Bluemix registry
* [PostBuild](#postbuild) - Build a Docker image from a Dockerfile

## DeleteImagesID

Remove a Docker image from the private Bluemix registry that is identified by the image ID (corresponding IBM Containers command: `cf ic rmi <image>`).

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
    res, err := s.Images.DeleteImagesID(ctx, operations.DeleteImagesIDRequest{
        XAuthProjectID: "reiciendis",
        XAuthToken: "est",
        ID: "aa2352c5-9559-407a-bf1a-3a2fa9467739",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetImagesJSON

This endpoint returns a list of all available Docker images in a private Bluemix registry (corresponding IBM Containers command: `cf ic images`.

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
    res, err := s.Images.GetImagesJSON(ctx, operations.GetImagesJSONRequest{
        XAuthProjectID: "quia",
        XAuthToken: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageInfo != nil {
        // handle response
    }
}
```

## GetImagesNameOrIDJSON

This endpoint returns detailed information about a Docker image that is stored in the private Bluemix registry of an organization (corresponding IBM Containers command: `cf ic inspect <image_name_or_id>`).

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
    res, err := s.Images.GetImagesNameOrIDJSON(ctx, operations.GetImagesNameOrIDJSONRequest{
        XAuthProjectID: "vitae",
        XAuthToken: "laborum",
        NameOrID: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageDetail != nil {
        // handle response
    }
}
```

## PostBuild

This API builds a new container image from a Dockerfile that is stored on your local machine and pushes the image to the private Bluemix registry (corresponding IBM Containers command: `cf ic build`).

 To push an image to your Bluemix registry, a namespace must be set for the organization. Run `cf ic namespace get` or call the `GET /registry/namespaces` API to check if a namespace is already set. If not, run `cf ic namespace set NAMESPACE` or call the `PUT /registry/namespaces/{namespace}` API to set a namespace for your organization.

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
    res, err := s.Images.PostBuild(ctx, operations.PostBuildRequest{
        RequestBody: []byte("enim"),
        XAuthProjectID: "odit",
        XAuthToken: "quo",
        Nocache: sdk.Bool(false),
        Pull: sdk.Bool(false),
        Q: sdk.Bool(false),
        T: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
