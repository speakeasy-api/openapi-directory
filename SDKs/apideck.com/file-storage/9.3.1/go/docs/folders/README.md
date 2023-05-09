# Folders

## Overview

Folders resource represents the folders within a drive in the cloud storage service. It provides methods for managing and accessing the folders, such as creating, deleting, and listing files & folders in a given folder.

### Available Operations

* [FoldersAdd](#foldersadd) - Create Folder
* [FoldersCopy](#folderscopy) - Copy Folder
* [FoldersDelete](#foldersdelete) - Delete Folder
* [FoldersOne](#foldersone) - Get Folder
* [FoldersUpdate](#foldersupdate) - Rename or move Folder

## FoldersAdd

Create Folder

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
    res, err := s.Folders.FoldersAdd(ctx, operations.FoldersAddRequest{
        CreateFolderRequestInput: shared.CreateFolderRequestInput{
            Description: sdk.String("My Personal Documents"),
            DriveID: sdk.String("1234"),
            Name: "Documents",
            ParentFolderID: "1234",
        },
        Fields: sdk.String("qui"),
        Raw: sdk.Bool(false),
        XApideckAppID: "ipsum",
        XApideckConsumerID: "hic",
        XApideckServiceID: sdk.String("excepturi"),
    }, operations.FoldersAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFolderResponse != nil {
        // handle response
    }
}
```

## FoldersCopy

Copy Folder

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
    res, err := s.Folders.FoldersCopy(ctx, operations.FoldersCopyRequest{
        CopyFolderRequestInput: shared.CopyFolderRequestInput{
            Name: sdk.String("Documents"),
            ParentFolderID: "1234",
        },
        Fields: sdk.String("cum"),
        ID: "77f3a410-0674-4ebf-a928-0d1ba77a89eb",
        Raw: sdk.Bool(false),
        XApideckAppID: "asperiores",
        XApideckConsumerID: "nihil",
        XApideckServiceID: sdk.String("ipsum"),
    }, operations.FoldersCopySecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFolderResponse != nil {
        // handle response
    }
}
```

## FoldersDelete

Delete Folder

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
    res, err := s.Folders.FoldersDelete(ctx, operations.FoldersDeleteRequest{
        ID: "7ae4203c-e5e6-4a95-98a0-d446ce2af7a7",
        Raw: sdk.Bool(false),
        XApideckAppID: "ipsum",
        XApideckConsumerID: "quisquam",
        XApideckServiceID: sdk.String("tenetur"),
    }, operations.FoldersDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFolderResponse != nil {
        // handle response
    }
}
```

## FoldersOne

Get Folder

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
    res, err := s.Folders.FoldersOne(ctx, operations.FoldersOneRequest{
        Fields: sdk.String("amet"),
        ID: "be453f87-0b32-46b5-a734-29cdb1a8422b",
        Raw: sdk.Bool(false),
        XApideckAppID: "facilis",
        XApideckConsumerID: "aliquid",
        XApideckServiceID: sdk.String("quam"),
    }, operations.FoldersOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFolderResponse != nil {
        // handle response
    }
}
```

## FoldersUpdate

Rename or move Folder

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
    res, err := s.Folders.FoldersUpdate(ctx, operations.FoldersUpdateRequest{
        UpdateFolderRequestInput: shared.UpdateFolderRequestInput{
            Description: sdk.String("My Personal Documents"),
            Name: sdk.String("Documents"),
            ParentFolderID: sdk.String("1234"),
        },
        ID: "9d232271-5bf0-4cbb-9e31-b8b90f3443a1",
        Raw: sdk.Bool(false),
        XApideckAppID: "quae",
        XApideckConsumerID: "aut",
        XApideckServiceID: sdk.String("quas"),
    }, operations.FoldersUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFolderResponse != nil {
        // handle response
    }
}
```
