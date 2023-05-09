# Volumes

### Available Operations

* [DeleteVolumesName](#deletevolumesname) - Delete a volume
* [GetVolumesJSON](#getvolumesjson) - List all volumes for a space
* [GetVolumesNameJSON](#getvolumesnamejson) - Retrieve detailed information about a volume. 
* [PostVolumesCreate](#postvolumescreate) - Create a volume in a space
* [PostVolumesName](#postvolumesname) - Share a volume with another space

## DeleteVolumesName

Delete a volume with a given name from a space (corresponding IBM Containers command: `cf ic volume rm VOLNAME`). To delete a volume, all mounted containers must be unmounted first. After the volume is deleted, the data that are stored in the volume are lost. 

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
    res, err := s.Volumes.DeleteVolumesName(ctx, operations.DeleteVolumesNameRequest{
        XAuthProjectID: "quos",
        XAuthToken: "sint",
        Name: "Angie Wisozk",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetVolumesJSON

This endpoint returns a list of all volumes that are available in the given space (corresponding IBM Containers command: `cf ic volume list`).

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
    res, err := s.Volumes.GetVolumesJSON(ctx, operations.GetVolumesJSONRequest{
        XAuthProjectID: "eum",
        XAuthToken: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Volumes != nil {
        // handle response
    }
}
```

## GetVolumesNameJSON

Retrieve a detailed list of information about a volume that is identified by the volume name (corresponding IBM Containers command: `cf ic volume inspect VOLNAME`).

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
    res, err := s.Volumes.GetVolumesNameJSON(ctx, operations.GetVolumesNameJSONRequest{
        XAuthProjectID: "necessitatibus",
        XAuthToken: "odit",
        Name: "Joyce Kertzmann",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Volume != nil {
        // handle response
    }
}
```

## PostVolumesCreate

This endpoints creates a new volume in your space (corresponding IBM Containers command: `cf ic volume create VOLNAME`). A volume is used to persist and access app data between container restarts. Volumes are hosted on file shares that define the available actual storage in Bluemix and the number of input and output transactions per second (IOPS). 

 After you have created a volume, you must mount it to a container by using the `--volume` option in the `cf ic run` (single containers) or `cf ic group create` (container groups) command. You can also define the volume as part of the HTTP body and send a request to the `POST /containers/create` (single containers) or `POST /containers/groups` (container groups) endpoints. 

 Note: If you mount multiple containers in a space to the same volume, they share the data in the volume and can access them anytime. When a container is deleted, the associated volume is not removed.

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
    res, err := s.Volumes.PostVolumesCreate(ctx, operations.PostVolumesCreateRequest{
        XAuthProjectID: "eius",
        XAuthToken: "maxime",
        FsName: sdk.String("deleniti"),
        Name: "Dr. Arnold Bradtke",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Volume != nil {
        // handle response
    }
}
```

## PostVolumesName

This endpoint provisions an existing volume that was created in one space to another space within the same organization. Single containers and container groups in each space can read and write to the shared volume. The volume remains owned by the original space it was created in, including management and billing. For example, the volume can be deleted from the original space only.

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
    res, err := s.Volumes.PostVolumesName(ctx, operations.PostVolumesNameRequest{
        UpdateVolume: shared.UpdateVolume{
            AddSpaces: []string{
                "nihil",
                "repellat",
                "quibusdam",
            },
            RemoveSpaces: []string{
                "saepe",
            },
        },
        XAuthProjectID: "pariatur",
        XAuthToken: "accusantium",
        Name: "Irma Morissette DDS",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Volume != nil {
        // handle response
    }
}
```
