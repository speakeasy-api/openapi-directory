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
    res, err := s.AddressRequests.Deleteaddress(ctx, operations.DeleteaddressRequest{
        RequestBody: &operations.DeleteaddressRequestBody{
            Ethereumaddress: sdk.String("0xfa343ee01667869cfb409b24ae33f7ce8b110eb0"),
            Password: sdk.String("test123"),
        },
        Address: "0xfa343ee01667869cfb409b24ae33f7ce8b110eb0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deleteaddress200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->