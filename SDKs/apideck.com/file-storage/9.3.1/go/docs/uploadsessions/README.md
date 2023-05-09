# UploadSessions

## Overview

Upload sessions resource represents the sessions used for uploading files to the cloud storage service. It provides methods for managing and accessing the upload sessions, such as creating and resuming upload sessions. An upload session allows for efficient uploading of large files by breaking them into smaller chunks and uploading each chunk individually.

### Available Operations

* [UploadSessionsAdd](#uploadsessionsadd) - Start Upload Session
* [UploadSessionsDelete](#uploadsessionsdelete) - Abort Upload Session
* [UploadSessionsFinish](#uploadsessionsfinish) - Finish Upload Session
* [UploadSessionsOne](#uploadsessionsone) - Get Upload Session
* [UploadSessionsUpload](#uploadsessionsupload) - Upload part of File to Upload Session

## UploadSessionsAdd

Start an Upload Session. Upload sessions are used to upload large files, use the [Upload File](#operation/filesUpload) endpoint to upload smaller files (up to 100MB). Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).

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
    res, err := s.UploadSessions.UploadSessionsAdd(ctx, operations.UploadSessionsAddRequest{
        CreateUploadSessionRequest: shared.CreateUploadSessionRequest{
            DriveID: sdk.String("1234"),
            Name: "Documents",
            ParentFolderID: "1234",
            Size: 1810673,
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "explicabo",
        XApideckConsumerID: "provident",
        XApideckServiceID: sdk.String("ipsa"),
    }, operations.UploadSessionsAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUploadSessionResponse != nil {
        // handle response
    }
}
```

## UploadSessionsDelete

Abort Upload Session. Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).

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
    res, err := s.UploadSessions.UploadSessionsDelete(ctx, operations.UploadSessionsDeleteRequest{
        ID: "7474778a-7bd4-466d-a8c1-0ab3cdca4251",
        Raw: sdk.Bool(false),
        XApideckAppID: "cupiditate",
        XApideckConsumerID: "consequatur",
        XApideckServiceID: sdk.String("tempora"),
    }, operations.UploadSessionsDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteUploadSessionResponse != nil {
        // handle response
    }
}
```

## UploadSessionsFinish

Finish Upload Session. Only call this endpoint after all File parts have been uploaded to [Upload part of File](#operation/uploadSessionsUpload). Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).

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
    res, err := s.UploadSessions.UploadSessionsFinish(ctx, operations.UploadSessionsFinishRequest{
        RequestBody: map[string]interface{}{
            "ipsam": "aspernatur",
            "sequi": "quo",
            "esse": "recusandae",
            "aperiam": "distinctio",
        },
        Digest: sdk.String("sha=fpRyg5eVQletdZqEKaFlqwBXJzM="),
        ID: "c7178e47-96f2-4a70-8688-282aa482562f",
        Raw: sdk.Bool(false),
        XApideckAppID: "consequuntur",
        XApideckConsumerID: "ratione",
        XApideckServiceID: sdk.String("explicabo"),
    }, operations.UploadSessionsFinishSecurity{
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

## UploadSessionsOne

Get Upload Session. Use the `part_size` to split your file into parts. Upload the parts to the [Upload part of File](#operation/uploadSessionsUpload) endpoint. Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).

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
    res, err := s.UploadSessions.UploadSessionsOne(ctx, operations.UploadSessionsOneRequest{
        Fields: sdk.String("saepe"),
        ID: "9817ee17-cbe6-41e6-b7b9-5bc0ab3c20c4",
        Raw: sdk.Bool(false),
        XApideckAppID: "sapiente",
        XApideckConsumerID: "consectetur",
        XApideckServiceID: sdk.String("esse"),
    }, operations.UploadSessionsOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUploadSessionResponse != nil {
        // handle response
    }
}
```

## UploadSessionsUpload

Upload part of File to Upload Session (max 100MB). Get `part_size` from [Get Upload Session](#operation/uploadSessionsOne) first. Every File part (except the last one) uploaded to this endpoint should have Content-Length equal to `part_size`. Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).

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
    res, err := s.UploadSessions.UploadSessionsUpload(ctx, operations.UploadSessionsUploadRequest{
        RequestBody: []byte("blanditiis"),
        Digest: sdk.String("sha=fpRyg5eVQletdZqEKaFlqwBXJzM="),
        ID: "9fd871f9-9dd2-4efd-921a-a6f1e674bdb0",
        PartNumber: 3069.86,
        Raw: sdk.Bool(false),
        XApideckAppID: "sapiente",
        XApideckConsumerID: "dicta",
        XApideckServiceID: sdk.String("ullam"),
    }, operations.UploadSessionsUploadSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateUploadSessionResponse != nil {
        // handle response
    }
}
```
