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
    res, err := s.GetAPIV1DonationsCarbonCalculate(ctx, operations.GetAPIV1DonationsCarbonCalculateRequest{
        DestinationAddress: sdk.Float64(5488.14),
        DistanceMi: sdk.Float64(5928.45),
        OriginAddress: sdk.Float64(7151.9),
        TransportationMethod: operations.GetAPIV1DonationsCarbonCalculateTransportationMethodEnumSea.ToPointer(),
        WeightLb: 6027.63,
    }, operations.GetAPIV1DonationsCarbonCalculateSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->