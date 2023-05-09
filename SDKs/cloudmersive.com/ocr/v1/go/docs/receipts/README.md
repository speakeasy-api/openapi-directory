# Receipts

### Available Operations

* [~~ReceiptsPhotoToCSV~~](#receiptsphototocsv) - Convert a photo of a receipt into a CSV file containing structured information from the receipt :warning: **Deprecated**

## ~~ReceiptsPhotoToCSV~~

Leverage Deep Learning to automatically turn a photo of a receipt into a CSV file containing the structured information from the receipt.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Receipts.ReceiptsPhotoToCSV(ctx, operations.ReceiptsPhotoToCSVRequestBody{
        ImageFile: operations.ReceiptsPhotoToCSVRequestBodyImageFile{
            Content: []byte("aspernatur"),
            ImageFile: "perferendis",
        },
    }, operations.ReceiptsPhotoToCSVSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReceiptsPhotoToCSV200ApplicationJSONObject != nil {
        // handle response
    }
}
```
