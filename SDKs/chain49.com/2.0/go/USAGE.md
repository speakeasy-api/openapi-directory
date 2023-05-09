<!-- Start SDK Example Usage -->
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Option1: &shared.SecurityOption1{
                XAPIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Addresses.GetAddressV2(ctx, operations.GetAddressV2Request{
        Address: "321x69Cb9HZLWwAWGiUBT1U81r1zPLnEjL",
        Blockchain: "bitcoin",
        Contract: sdk.String("0xdAC17F958D2ee523a2206206994597C13D831ec7"),
        Details: shared.DetailsEnumBasic.ToPointer(),
        FromBlock: sdk.Int64(10),
        Page: sdk.Int64(1),
        PageSize: sdk.Int64(1000),
        Secondary: sdk.String("usd"),
        ToBlock: sdk.Int64(100),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAddressV2200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->