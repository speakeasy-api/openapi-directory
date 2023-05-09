# Files

## Overview

Files resource represents files stored in the cloud storage services. It provides methods for managing and accessing the files, such as uploading, downloading, and deleting files. For more information on uploads, refer to the [file upload guide](/guides/file-upload).

### Available Operations

* [FilesAll](#filesall) - List Files
* [FilesDelete](#filesdelete) - Delete File
* [FilesDownload](#filesdownload) - Download File
* [FilesOne](#filesone) - Get File
* [FilesSearch](#filessearch) - Search Files
* [FilesUpdate](#filesupdate) - Rename or move File

## FilesAll

List Files

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
    res, err := s.Files.FilesAll(ctx, operations.FilesAllRequest{
        Cursor: sdk.String("cumque"),
        Fields: sdk.String("facere"),
        Filter: &shared.FilesFilter{
            DriveID: sdk.String("1234"),
            FolderID: sdk.String("root"),
            Shared: sdk.Bool(false),
        },
        Limit: sdk.Int64(411820),
        PassThrough: map[string]interface{}{
            "laborum": "accusamus",
            "non": "occaecati",
        },
        Raw: sdk.Bool(false),
        Sort: &shared.FilesSort{
            By: shared.FilesSortByEnumUpdatedAt.ToPointer(),
            Direction: shared.SortDirectionEnumAsc.ToPointer(),
        },
        XApideckAppID: "accusamus",
        XApideckConsumerID: "delectus",
        XApideckServiceID: sdk.String("quidem"),
    }, operations.FilesAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFilesResponse != nil {
        // handle response
    }
}
```

## FilesDelete

Delete File

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
    res, err := s.Files.FilesDelete(ctx, operations.FilesDeleteRequest{
        ID: "9ba88f3a-6699-4707-8ba4-469b6e214195",
        Raw: sdk.Bool(false),
        XApideckAppID: "provident",
        XApideckConsumerID: "quos",
        XApideckServiceID: sdk.String("sint"),
    }, operations.FilesDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFileResponse != nil {
        // handle response
    }
}
```

## FilesDownload

Download File

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
    res, err := s.Files.FilesDownload(ctx, operations.FilesDownloadRequest{
        Fields: sdk.String("accusantium"),
        ID: "afa563e2-516f-4e4c-8b71-1e5b7fd2ed02",
        XApideckAppID: "praesentium",
        XApideckConsumerID: "natus",
        XApideckServiceID: sdk.String("magni"),
    }, operations.FilesDownloadSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FilesDownload200WildcardBinaryString != nil {
        // handle response
    }
}
```

## FilesOne

Get File

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
    res, err := s.Files.FilesOne(ctx, operations.FilesOneRequest{
        Fields: sdk.String("sunt"),
        ID: "cddc6926-01fb-4576-b0d5-f0d30c5fbb25",
        Raw: sdk.Bool(false),
        XApideckAppID: "totam",
        XApideckConsumerID: "dignissimos",
        XApideckServiceID: sdk.String("eaque"),
    }, operations.FilesOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFileResponse != nil {
        // handle response
    }
}
```

## FilesSearch

Search Files

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
    res, err := s.Files.FilesSearch(ctx, operations.FilesSearchRequest{
        FilesSearch: shared.FilesSearch{
            DriveID: sdk.String("1234"),
            Query: "logo jpg",
        },
        Fields: sdk.String("quis"),
        PassThrough: map[string]interface{}{
            "eos": "perferendis",
        },
        XApideckAppID: "dolores",
        XApideckConsumerID: "minus",
        XApideckServiceID: sdk.String("quam"),
    }, operations.FilesSearchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFilesResponse != nil {
        // handle response
    }
}
```

## FilesUpdate

Rename or move File

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
    res, err := s.Files.FilesUpdate(ctx, operations.FilesUpdateRequest{
        UpdateFileRequest: shared.UpdateFileRequest{
            Description: sdk.String("Renamed PDF Document"),
            Name: sdk.String("New Name.pdf"),
            ParentFolderID: sdk.String("1234"),
        },
        ID: "3d5fe9b9-0c28-4909-b3fe-49a8d9cbf486",
        Raw: sdk.Bool(false),
        XApideckAppID: "dolorem",
        XApideckConsumerID: "dolorem",
        XApideckServiceID: sdk.String("dolor"),
    }, operations.FilesUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFileResponse != nil {
        // handle response
    }
}
```
