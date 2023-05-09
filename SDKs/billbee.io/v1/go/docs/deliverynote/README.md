# DeliveryNote

### Available Operations

* [OrderAPICreateDeliveryNote](#orderapicreatedeliverynote) - Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.

## OrderAPICreateDeliveryNote

Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.

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
    res, err := s.DeliveryNote.OrderAPICreateDeliveryNote(ctx, operations.OrderAPICreateDeliveryNoteRequest{
        ID: 206594,
        IncludePdf: sdk.Bool(false),
        SendToCloudID: sdk.Int64(778696),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPICreateDeliveryNote200ApplicationJSONObject != nil {
        // handle response
    }
}
```
