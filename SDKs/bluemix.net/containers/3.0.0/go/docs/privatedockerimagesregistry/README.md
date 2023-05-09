# PrivateDockerImagesRegistry

### Available Operations

* [GetRegistryNamespaces](#getregistrynamespaces) - Retrieve the namespace of an organization.
* [GetRegistryNamespacesNamespace](#getregistrynamespacesnamespace) - Check the availability of a namespace
* [PutRegistryNamespacesNamespace](#putregistrynamespacesnamespace) - Set a namespace for your private Bluemix registry.

## GetRegistryNamespaces

This endpoint retrieves the namespace that was set for the organization that owns the current space (corresponding IBM Containers command: `cf ic namespace get`).

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
    res, err := s.PrivateDockerImagesRegistry.GetRegistryNamespaces(ctx, operations.GetRegistryNamespacesRequest{
        XAuthProjectID: "tenetur",
        XAuthToken: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Namespace != nil {
        // handle response
    }
}
```

## GetRegistryNamespacesNamespace

This endpoint checks whether a namespace is available in Bluemix and can be used to set up the private Docker images registry for an organization. When a HTTP code `201 Ok` is returned, the namespace is already assigned to another organization in Bluemix and cannot be used. When a HTTP code `404 Not found` is returned, the namespace can be used for your organization. 

 Consider the following rules when choosing a namespace for your organization: 

- Every organization can have one namespace at a time only 
- The namespace must be unique in Bluemix. 
- The namespace can be 4-30 characters long. 
- The namespace must start with at least one letter or number. 
- The namespace can only contain lowercase letters, numbers or underscores (_). 

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
    res, err := s.PrivateDockerImagesRegistry.GetRegistryNamespacesNamespace(ctx, operations.GetRegistryNamespacesNamespaceRequest{
        XAuthProjectID: "id",
        XAuthToken: "possimus",
        Namespace: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Namespace != nil {
        // handle response
    }
}
```

## PutRegistryNamespacesNamespace

Set up your own Docker images registry in Bluemix by defining a namespace for your organization (corresponding IBM Containers command: `cf ic namespace set <namespace>`). The namespace is used to generate a unique URL to your private Bluemix registry. In your private registry you store all Docker images that you want to share across your organization. To create a container from an image, you must first push the image to your registry. 

 The namespace cannot be changed after is has been set. Consider the following rules to choose a namespace for your organization: 

- Every organization can have one namespace at a time only 
- The namespace must be unique in Bluemix. 
- The namespace can be 4-30 characters long. 
- The namespace must start with at least one letter or number. 
- The namespace can only contain lowercase letters, numbers or underscores (_).

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
    res, err := s.PrivateDockerImagesRegistry.PutRegistryNamespacesNamespace(ctx, operations.PutRegistryNamespacesNamespaceRequest{
        XAuthProjectID: "quasi",
        XAuthToken: "error",
        Namespace: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Namespace != nil {
        // handle response
    }
}
```
