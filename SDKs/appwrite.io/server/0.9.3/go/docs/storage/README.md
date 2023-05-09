# Storage

## Overview

The Storage service allows you to manage your project files.

### Available Operations

* [StorageCreateFile](#storagecreatefile) - Create File
* [StorageDeleteFile](#storagedeletefile) - Delete File
* [StorageGetFile](#storagegetfile) - Get File
* [StorageGetFileDownload](#storagegetfiledownload) - Get File for Download
* [StorageGetFilePreview](#storagegetfilepreview) - Get File Preview
* [StorageGetFileView](#storagegetfileview) - Get File for View
* [StorageListFiles](#storagelistfiles) - List Files
* [StorageUpdateFile](#storageupdatefile) - Update File

## StorageCreateFile

Create a new file. The user who creates the file will automatically be assigned to read and write access unless he has passed custom values for read and write arguments.

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
    res, err := s.Storage.StorageCreateFile(ctx, operations.StorageCreateFileRequestBody{
        File: "sint",
        Read: []string{
            "dolor",
            "debitis",
            "a",
        },
        Write: []string{
            "in",
            "in",
            "illum",
        },
    }, operations.StorageCreateFileSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.File != nil {
        // handle response
    }
}
```

## StorageDeleteFile

Delete a file by its unique ID. Only users with write permissions have access to delete this resource.

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
    res, err := s.Storage.StorageDeleteFile(ctx, operations.StorageDeleteFileRequest{
        FileID: "maiores",
    }, operations.StorageDeleteFileSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StorageGetFile

Get a file by its unique ID. This endpoint response returns a JSON object with the file metadata.

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
    res, err := s.Storage.StorageGetFile(ctx, operations.StorageGetFileRequest{
        FileID: "rerum",
    }, operations.StorageGetFileSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.File != nil {
        // handle response
    }
}
```

## StorageGetFileDownload

Get a file content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.

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
    res, err := s.Storage.StorageGetFileDownload(ctx, operations.StorageGetFileDownloadRequest{
        FileID: "dicta",
    }, operations.StorageGetFileDownloadSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StorageGetFilePreview

Get a file preview image. Currently, this method supports preview for image files (jpg, png, and gif), other supported formats, like pdf, docs, slides, and spreadsheets, will return the file icon image. You can also pass query string arguments for cutting and resizing your preview image.

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
    res, err := s.Storage.StorageGetFilePreview(ctx, operations.StorageGetFilePreviewRequest{
        Background: sdk.String("magnam"),
        BorderColor: sdk.String("cumque"),
        BorderRadius: sdk.Int(813798),
        BorderWidth: sdk.Int(411820),
        FileID: "aliquid",
        Gravity: sdk.String("laborum"),
        Height: sdk.Int(881104),
        Opacity: sdk.Float32(2497.96),
        Output: sdk.String("occaecati"),
        Quality: sdk.Int(313218),
        Rotation: sdk.Int(881736),
        Width: sdk.Int(965417),
    }, operations.StorageGetFilePreviewSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StorageGetFileView

Get a file content by its unique ID. This endpoint is similar to the download method but returns with no  'Content-Disposition: attachment' header.

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
    res, err := s.Storage.StorageGetFileView(ctx, operations.StorageGetFileViewRequest{
        FileID: "quidem",
    }, operations.StorageGetFileViewSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StorageListFiles

Get a list of all the user files. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's files. [Learn more about different API modes](/docs/admin).

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
    res, err := s.Storage.StorageListFiles(ctx, operations.StorageListFilesRequest{
        Limit: sdk.Int(588465),
        Offset: sdk.Int(725255),
        OrderType: sdk.String("id"),
        Search: sdk.String("blanditiis"),
    }, operations.StorageListFilesSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileList != nil {
        // handle response
    }
}
```

## StorageUpdateFile

Update a file by its unique ID. Only users with write permissions have access to update this resource.

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
    res, err := s.Storage.StorageUpdateFile(ctx, operations.StorageUpdateFileRequest{
        RequestBody: &operations.StorageUpdateFileRequestBody{
            Read: []string{
                "sapiente",
                "amet",
                "deserunt",
            },
            Write: []string{
                "vel",
                "natus",
            },
        },
        FileID: "omnis",
    }, operations.StorageUpdateFileSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.File != nil {
        // handle response
    }
}
```
