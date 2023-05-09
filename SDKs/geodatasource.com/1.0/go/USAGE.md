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
    res, err := s.GetCity(ctx, operations.GetCityRequest{
        Format: operations.GetCityFormatEnumXML.ToPointer(),
        Key: "provident",
        Lat: 7151.9,
        Lng: 8442.66,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCity200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->