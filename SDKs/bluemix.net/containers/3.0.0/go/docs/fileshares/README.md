# FileShares

### Available Operations

* [DeleteVolumesFsName](#deletevolumesfsname) - Delete a file share
* [GetVolumesFsFlavorsJSON](#getvolumesfsflavorsjson) - List available file share sizes
* [GetVolumesFsJSON](#getvolumesfsjson) - List available file shares in a space
* [GetVolumesFsNameJSON](#getvolumesfsnamejson) - Inspect a file share
* [PostVolumesFsCreate](#postvolumesfscreate) - Create a file share in a space

## DeleteVolumesFsName

This endpoint deletes a file share from a space (corresponding IBM Containers command: `cf ic volume fs-rm FSNAME`).

 Before you can delete a file share, all mounted volumes must be deleted first. To delete a volume, run `cf ic volume rm VOLNAME` or call the `DELETE /volumes/{name}` API endpoint. 

 **Note:** To delete a file share you must have been granted organization developer rights.

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
    res, err := s.FileShares.DeleteVolumesFsName(ctx, operations.DeleteVolumesFsNameRequest{
        XAuthProjectID: "cum",
        XAuthToken: "esse",
        Name: "Mrs. Miriam Collier",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetVolumesFsFlavorsJSON

This endpoint returns a list of available file shares in gigabyte (corresponding IBM Containers command: `cf ic volume fs-flavor-list`).

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
    res, err := s.FileShares.GetVolumesFsFlavorsJSON(ctx, operations.GetVolumesFsFlavorsJSONRequest{
        XAuthProjectID: "sed",
        XAuthToken: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetVolumesFsFlavorsJSON200ApplicationJSONIntegers != nil {
        // handle response
    }
}
```

## GetVolumesFsJSON

This endpoint returns a list of all file shares that are availble in a space (corresponding IBM Containers command: `cf ic volume fs-list`).

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
    res, err := s.FileShares.GetVolumesFsJSON(ctx, operations.GetVolumesFsJSONRequest{
        XAuthProjectID: "dolor",
        XAuthToken: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Fileshares != nil {
        // handle response
    }
}
```

## GetVolumesFsNameJSON

This endpoint returns detailed information about a file share (corresponding IBM Containers command: `cf ic volume fs-inspect FSNAME`).

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
    res, err := s.FileShares.GetVolumesFsNameJSON(ctx, operations.GetVolumesFsNameJSONRequest{
        XAuthProjectID: "laboriosam",
        XAuthToken: "hic",
        Name: "Wilbur Kirlin",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFileshareDetails != nil {
        // handle response
    }
}
```

## PostVolumesFsCreate

This endpoint creates a new file share in a space (corresponding IBM Containers command: `cf ic volume fs-create FSNAME FSSIZE FSIOPS`). 

 A file share is a persistent NFS-based (Network File System) storage system that hosts Docker volumes in a Bluemix space and allows a user to store and access container and app-related files. To store files in a file share, you must create a container volume and save the data into this volume.

 As soon as you create your first volume in a space with the `cf ic volume create VOLNAME` command or the `POST /volumes/create` API endpoint, a default file share with 20 GB at 4 IOPS (Input Output operations Per Second) is created at no cost. 

The organization manager can create file shares with specific storage size and IOPS to meet the storage needs of the space. File shares can be provisioned in sizes from 20 GB to 12 TB and at IOPS per GB of 0.25, 2 or 4. Run `cf ic volume fs-flavor-list` or call the `GET /volumes/fs/flavors/json` API endpoint to retrieve a list of available file share sizes. The file share size in relation to the number of IOPS impacts the speed that data can be read and written from and to the container volume.

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
    res, err := s.FileShares.PostVolumesFsCreate(ctx, operations.PostVolumesFsCreateRequest{
        FileshareParam: shared.FileshareParam{
            FsIOPS: 4370.32,
            FsName: "saepe",
            FsSize: 697631,
        },
        XAuthProjectID: "architecto",
        XAuthToken: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
