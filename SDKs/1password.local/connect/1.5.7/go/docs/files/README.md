# Files

### Available Operations

* [DownloadFileByID](#downloadfilebyid) - Get the content of a File
* [GetDetailsOfFileByID](#getdetailsoffilebyid) - Get the details of a File
* [GetItemFiles](#getitemfiles) - Get all the files inside an Item

## DownloadFileByID

Get the content of a File

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
    res, err := s.Files.DownloadFileByID(ctx, operations.DownloadFileByIDRequest{
        FileUUID: "corrupti",
        ItemUUID: "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
        VaultUUID: "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
    }, operations.DownloadFileByIDSecurity{
        ConnectToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadFileByID200ApplicationOctetStreamBinaryString != nil {
        // handle response
    }
}
```

## GetDetailsOfFileByID

Get the details of a File

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
    res, err := s.Files.GetDetailsOfFileByID(ctx, operations.GetDetailsOfFileByIDRequest{
        FileUUID: "b7392059-2939-46fe-a759-6eb10faaa235",
        InlineFiles: sdk.Bool(true),
        ItemUUID: "2c595590-7aff-41a3-a2fa-9467739251aa",
        VaultUUID: "52c3f5ad-019d-4a1f-be78-f097b0074f15",
    }, operations.GetDetailsOfFileByIDSecurity{
        ConnectToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.File != nil {
        // handle response
    }
}
```

## GetItemFiles

Get all the files inside an Item

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
    res, err := s.Files.GetItemFiles(ctx, operations.GetItemFilesRequest{
        InlineFiles: sdk.Bool(true),
        ItemUUID: "471b5e6e-13b9-49d4-88e1-e91e450ad2ab",
        VaultUUID: "d4426980-2d50-42a9-8bb4-f63c969e9a3e",
    }, operations.GetItemFilesSecurity{
        ConnectToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Files != nil {
        // handle response
    }
}
```
