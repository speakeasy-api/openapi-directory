<!-- Start SDK Example Usage -->
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
    res, err := s.ConvertAPI(ctx, operations.ConvertAPIRequest{
        RequestBody: &operations.ConvertAPIRequestBody{
            URL: sdk.String("corrupti"),
        },
        Format: operations.ConvertAPIFormatEnumWadl2009,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConvertAPI200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->