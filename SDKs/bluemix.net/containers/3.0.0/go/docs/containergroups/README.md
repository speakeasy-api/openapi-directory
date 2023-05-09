# ContainerGroups

### Available Operations

* [DeleteContainersGroupsNameOrID](#deletecontainersgroupsnameorid) - Stop and delete all container instances in a container group.
* [GetContainersGroups](#getcontainersgroups) - List all container groups in a space
* [GetContainersGroupsNameOrID](#getcontainersgroupsnameorid) - Inspect a container group.
* [PatchContainersGroupsNameOrID](#patchcontainersgroupsnameorid) - Update a container group.
* [PostContainersGroups](#postcontainersgroups) - Create and start a container group.
* [PostContainersGroupsNameOrIDMaproute](#postcontainersgroupsnameoridmaproute) - Map a public route to a container group.
* [PostContainersGroupsNameOrIDUnmaproute](#postcontainersgroupsnameoridunmaproute) - Unmap a public route from a container group

## DeleteContainersGroupsNameOrID

Stops and deletes the container instances that run in a container group (corresponding IBM Containers command: `cf ic group rm <group_name>`). When you delete a container group, all floating private IP addresses are released.

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
    res, err := s.ContainerGroups.DeleteContainersGroupsNameOrID(ctx, operations.DeleteContainersGroupsNameOrIDRequest{
        XAuthProjectID: "vel",
        XAuthToken: "error",
        Force: sdk.String("deserunt"),
        NameOrID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetContainersGroups

This endpoint returns a list of all container groups in a space independent of their current state. (corresponding IBM Containers command: `cf ic group list`).

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
    res, err := s.ContainerGroups.GetContainersGroups(ctx, operations.GetContainersGroupsRequest{
        XAuthProjectID: "iure",
        XAuthToken: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContainersGroupsGetListItems != nil {
        // handle response
    }
}
```

## GetContainersGroupsNameOrID

This endpoint retrieves detailed information about a container group with a given name (corresponding IBM Containers command: `cf ic group inspect GROUP`).

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
    res, err := s.ContainerGroups.GetContainersGroupsNameOrID(ctx, operations.GetContainersGroupsNameOrIDRequest{
        XAuthProjectID: "debitis",
        XAuthToken: "ipsa",
        NameOrID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContainersGroupsNameOrIDGetDetails != nil {
        // handle response
    }
}
```

## PatchContainersGroupsNameOrID

Update the number of container instances that run in a container group (corresponding IBM Containers command: `cf ic group update <option> <group>`). 

Note: You can run only one update at a time.  

 The desired number is the number of container instances that you require. It must be within the current limits of Max and Min. To increase the number of desired container instances above the Max value, you must first execute an update on the Max value. Once this update is completed, you can increase the desired number of container instances. 

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
    res, err := s.ContainerGroups.PatchContainersGroupsNameOrID(ctx, operations.PatchContainersGroupsNameOrIDRequest{
        ContainersGroupsNameOrIDPatchUpdatedInfo: shared.ContainersGroupsNameOrIDPatchUpdatedInfo{
            Autorecovery: sdk.String("tempora"),
            Environment: []string{
                "molestiae",
                "minus",
            },
            NumberInstances: &shared.ContainersGroupsNameOrIDPatchUpdatedInfoNumberInstances{
                Desired: sdk.Int(812169),
                Max: sdk.Int(528895),
                Min: sdk.Int(479977),
            },
        },
        XAuthProjectID: "excepturi",
        XAuthToken: "nisi",
        NameOrID: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostContainersGroups

This endpoint creates and starts a new container group in your space. A container group consists of two or more single containers that are all created from the same container image and as a consequence are configured in the same way. Container groups offer different options at no cost to make your app highly available, such as in-built load balancing, auto-recovery of unhealthy container instances, and auto-scaling of container instances based on CPU and memory usage.

To create a container group with IBM Containers, you must at least define a container group name and the image that the container group is based on. Required attributes:
















- Name: The container group name must start with a letter and then can include uppercase letters, lowercase letters, numbers, periods (.), underscores (_), or hyphens (-). 
- Image: You must include the full path to the image in your private Bluemix registry in the format:`registry.ng.bluemix.net/<namespace>/<image>`.

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
    res, err := s.ContainerGroups.PostContainersGroups(ctx, operations.PostContainersGroupsRequest{
        ContainersGroupsPostRequiredAttributes: shared.ContainersGroupsPostRequiredAttributes{
            Autorecovery: sdk.String("temporibus"),
            BluemixApp: sdk.String("ab"),
            Cmd: []string{
                "veritatis",
                "deserunt",
            },
            Env: []string{
                "ipsam",
            },
            Image: "repellendus",
            Memory: sdk.Int(957156),
            Name: "Fred Strosin",
            NumberInstances: &shared.ContainersGroupsPostRequiredAttributesNumberInstances{
                Desired: sdk.Int(473608),
                Max: sdk.Int(799159),
                Min: sdk.Int(800911),
            },
            Port: sdk.Int(461479),
            Route: &shared.ContainersGroupsPostRequiredAttributesRoute{
                Domain: sdk.String("totam"),
                Host: sdk.String("porro"),
            },
            Volumes: []string{
                "dicta",
                "nam",
                "officia",
            },
        },
        XAuthProjectID: "occaecati",
        XAuthToken: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContainersGroupsPostCreatedInfo != nil {
        // handle response
    }
}
```

## PostContainersGroupsNameOrIDMaproute

If you want your container group to be accessible from the Internet, you need to expose a public port and map a public route to it (corresponding IBM Containers command: `cf ic route map -n <host> -d <domain> <group>`). Every route consists of the host name and domain.

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
    res, err := s.ContainerGroups.PostContainersGroupsNameOrIDMaproute(ctx, operations.PostContainersGroupsNameOrIDMaprouteRequest{
        Route: shared.Route{
            Domain: sdk.String("deleniti"),
            Host: sdk.String("hic"),
        },
        XAuthProjectID: "optio",
        XAuthToken: "totam",
        NameOrID: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContainersGroupsNameOrIDMaproutePostInfo != nil {
        // handle response
    }
}
```

## PostContainersGroupsNameOrIDUnmaproute

This endpoint unmaps a public route from a container group (corresponding IBM Containers command: `cf ic route unmap -n <host> -d <domain> <group>`). If no other public route is mapped to the container group, then the container group is no longer available from the internet. 

 When you unmap a route from a container group, the route is not deleted and can be mapped to other container groups. 

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
    res, err := s.ContainerGroups.PostContainersGroupsNameOrIDUnmaproute(ctx, operations.PostContainersGroupsNameOrIDUnmaprouteRequest{
        Route: shared.Route{
            Domain: sdk.String("commodi"),
            Host: sdk.String("molestiae"),
        },
        XAuthProjectID: "modi",
        XAuthToken: "qui",
        NameOrID: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContainersGroupsNameOrIDMaproutePostInfo != nil {
        // handle response
    }
}
```
