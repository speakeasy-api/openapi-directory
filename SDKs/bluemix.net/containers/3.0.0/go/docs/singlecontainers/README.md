# SingleContainers

### Available Operations

* [DeleteContainersNameOrID](#deletecontainersnameorid) - Remove a single container
* [GetContainersJSON](#getcontainersjson) - List single containers in a space.
* [GetContainersIDStatus](#getcontainersidstatus) - List the current state of a container.
* [GetContainersNameOrIDJSON](#getcontainersnameoridjson) - Inspect a single container
* [PostContainersCreate](#postcontainerscreate) - Create and start a single container
* [PostContainersNameOrIDPause](#postcontainersnameoridpause) - Pause a single container
* [PostContainersNameOrIDRename](#postcontainersnameoridrename) - Rename a single container
* [PostContainersNameOrIDRestart](#postcontainersnameoridrestart) - Restart a single container
* [PostContainersNameOrIDStart](#postcontainersnameoridstart) - Start a single container
* [PostContainersNameOrIDStop](#postcontainersnameoridstop) - Stop a single container
* [PostContainersNameOrIDUnpause](#postcontainersnameoridunpause) - Unpause a single container

## DeleteContainersNameOrID

Remove a single container that is identified by container ID or name from a space (corresponding IBM Containers command: `cf ic delete <container>`). The container must be stopped before it can be deleted, unless the `force` query parameter is set to true.

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
    res, err := s.SingleContainers.DeleteContainersNameOrID(ctx, operations.DeleteContainersNameOrIDRequest{
        XAuthProjectID: "enim",
        XAuthToken: "accusamus",
        Force: sdk.Bool(false),
        NameOrID: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetContainersJSON

This endpoint returns a list of all single containers in a space that are currently in a running state (corresponding IBM Containers command: `cf ic ps`). To list all single containers independent of their current state, set the `all` query parameter to true.

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
    res, err := s.SingleContainers.GetContainersJSON(ctx, operations.GetContainersJSONRequest{
        XAuthProjectID: "repudiandae",
        XAuthToken: "quae",
        All: sdk.String("ipsum"),
        Filters: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Containers != nil {
        // handle response
    }
}
```

## GetContainersIDStatus

This endpoint returns the current state of a container. This state can either be a transient state, such as BUILDING and NETWORKING, or a non-transient state, such as RUNNING, SHUTDOWN, CRASHED, or SUSPENDED.

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
    res, err := s.SingleContainers.GetContainersIDStatus(ctx, operations.GetContainersIDStatusRequest{
        XAuthProjectID: "molestias",
        XAuthToken: "excepturi",
        ID: "d488e1e9-1e45-40ad-aabd-44269802d502",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContainerStatus != nil {
        // handle response
    }
}
```

## GetContainersNameOrIDJSON

This endpoint retrieves detailed information about a single container (corresponding IBM Containers command: `cf ic inspect <container>`).

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
    res, err := s.SingleContainers.GetContainersNameOrIDJSON(ctx, operations.GetContainersNameOrIDJSONRequest{
        XAuthProjectID: "dolorum",
        XAuthToken: "excepturi",
        NameOrID: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContainerInfo != nil {
        // handle response
    }
}
```

## PostContainersCreate

This endpoint creates and starts a single container in your space based on the Docker image that is specified in the Image field of the request json. A single container in IBM Containers is similar to a container that you create in your local Docker environment. Single containers are a good way to start with IBM Containers and to learn about how containers work in the IBM Cloud and the features that IBM Containers provides. They are also recommended when you want to run simple app tests or during the development process of an app. 

 In the Docker API there are two separate APIs to create and start a container. However in IBM Containers a container is created and started in a single API call. Therefore, this API merges parameters from the Docker API to create and start container. 

 To create a container with IBM Containers, you must at least define the image that the container is based on.

- Image: You must include the full path to the image in your private Bluemix registry in the format: `registry.ng.bluemix.net/<namespace>/<image>`.

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
    res, err := s.SingleContainers.PostContainersCreate(ctx, operations.PostContainersCreateRequest{
        CreateContainer: shared.CreateContainer{
            BluemixApp: sdk.String("facilis"),
            Cmd: []string{
                "labore",
                "delectus",
                "eum",
            },
            Cpuset: sdk.String("non"),
            Env: []string{
                "sint",
                "aliquid",
                "provident",
                "necessitatibus",
            },
            ExposedPorts: []string{
                "officia",
                "dolor",
                "debitis",
            },
            HostConfig: &shared.HostConfig{
                Binds: []string{
                    "dolorum",
                    "in",
                    "in",
                    "illum",
                },
                ExtraHosts: []string{
                    "rerum",
                    "dicta",
                    "magnam",
                    "cumque",
                },
                Links: []string{
                    "ea",
                    "aliquid",
                    "laborum",
                    "accusamus",
                },
                PortBindings: []string{
                    "occaecati",
                },
            },
            Image: "enim",
            Memory: sdk.Int(881736),
            NumberCpus: sdk.Int(965417),
            Volumes: sdk.String("quidem"),
        },
        XAuthProjectID: "provident",
        XAuthToken: "nam",
        Name: sdk.String("Nelson Lesch"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContainerID != nil {
        // handle response
    }
}
```

## PostContainersNameOrIDPause

Pause all processes in a running single container with a given container ID or name (corresponding IBM Containers command: `cf ic pause <container>`).

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
    res, err := s.SingleContainers.PostContainersNameOrIDPause(ctx, operations.PostContainersNameOrIDPauseRequest{
        XAuthProjectID: "deserunt",
        XAuthToken: "nisi",
        NameOrID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostContainersNameOrIDRename

Change the current name of an existing single container that is identified by the container ID or name (corresponding IBM Containers command: `cf ic rename <old_name> <new_name>`). 

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
    res, err := s.SingleContainers.PostContainersNameOrIDRename(ctx, operations.PostContainersNameOrIDRenameRequest{
        XAuthProjectID: "natus",
        XAuthToken: "omnis",
        Name: "Dorothy Kovacek",
        NameOrID: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostContainersNameOrIDRestart

Restart a container with a given container ID or name (corresponding IBM Containers command: `cf ic restart <container>`).

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
    res, err := s.SingleContainers.PostContainersNameOrIDRestart(ctx, operations.PostContainersNameOrIDRestartRequest{
        XAuthProjectID: "labore",
        XAuthToken: "labore",
        NameOrID: "suscipit",
        T: sdk.Int64(618016),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostContainersNameOrIDStart

Start a single container with a given container name or ID (corresponding IBM Containers command: `cf ic start <container>`).

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
    res, err := s.SingleContainers.PostContainersNameOrIDStart(ctx, operations.PostContainersNameOrIDStartRequest{
        XAuthProjectID: "nobis",
        XAuthToken: "eum",
        NameOrID: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostContainersNameOrIDStop

Stop a single container with a given container name or ID (corresponding IBM Containers command: `cf ic stop <container>`).

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
    res, err := s.SingleContainers.PostContainersNameOrIDStop(ctx, operations.PostContainersNameOrIDStopRequest{
        XAuthProjectID: "aspernatur",
        XAuthToken: "architecto",
        NameOrID: "magnam",
        T: sdk.Int64(92373),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostContainersNameOrIDUnpause

Unpause all processes that are currently stopped inside a single containers with a given container ID or name (corresponding IBM Containers command: `cf ic unpause <container>`).

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
    res, err := s.SingleContainers.PostContainersNameOrIDUnpause(ctx, operations.PostContainersNameOrIDUnpauseRequest{
        XAuthProjectID: "excepturi",
        XAuthToken: "ullam",
        NameOrID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
