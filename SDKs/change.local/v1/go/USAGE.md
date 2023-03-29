<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetAPIV1DonationsCarbonCalculateRequest{
        Security: operations.GetAPIV1DonationsCarbonCalculateSecurity{
            BasicAuth: shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        QueryParams: operations.GetAPIV1DonationsCarbonCalculateQueryParams{
            DestinationAddress: 5488.14,
            DistanceMi: 5928.45,
            OriginAddress: 7151.9,
            TransportationMethod: "sea",
            WeightLb: 6027.63,
        },
    }

    ctx := context.Background()
    res, err := s.GetAPIV1DonationsCarbonCalculate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->