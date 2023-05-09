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
        File: "corporis",
        Read: []string{
            "iusto",
            "dicta",
        },
        Write: []string{
            "enim",
            "accusamus",
            "commodi",
        },
    }, operations.StorageCreateFileSecurity{
        Jwt: "YOUR_API_KEY_HERE",
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
        FileID: "repudiandae",
    }, operations.StorageDeleteFileSecurity{
        Jwt: "YOUR_API_KEY_HERE",
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
        FileID: "quae",
    }, operations.StorageGetFileSecurity{
        Jwt: "YOUR_API_KEY_HERE",
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
        FileID: "ipsum",
    }, operations.StorageGetFileDownloadSecurity{
        Jwt: "YOUR_API_KEY_HERE",
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
        Background: sdk.String("quidem"),
        BorderColor: sdk.String("molestias"),
        BorderRadius: sdk.Int(566602),
        BorderWidth: sdk.Int(865103),
        FileID: "modi",
        Gravity: sdk.String("praesentium"),
        Height: sdk.Int(523248),
        Opacity: sdk.Float32(9167.23),
        Output: sdk.String("quasi"),
        Quality: sdk.Int(921158),
        Rotation: sdk.Int(575947),
        Width: sdk.Int(83112),
    }, operations.StorageGetFilePreviewSecurity{
        Jwt: "YOUR_API_KEY_HERE",
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
        FileID: "itaque",
    }, operations.StorageGetFileViewSecurity{
        Jwt: "YOUR_API_KEY_HERE",
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
        Limit: sdk.Int(277718),
        Offset: sdk.Int(318569),
        OrderType: sdk.String("consequatur"),
        Search: sdk.String("est"),
    }, operations.StorageListFilesSecurity{
        Jwt: "YOUR_API_KEY_HERE",
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
                "explicabo",
                "deserunt",
                "distinctio",
                "quibusdam",
            },
            Write: []string{
                "modi",
                "qui",
            },
        },
        FileID: "aliquid",
    }, operations.StorageUpdateFileSecurity{
        Jwt: "YOUR_API_KEY_HERE",
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
