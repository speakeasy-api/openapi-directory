<!-- Start SDK Example Usage -->
```go
package main

import (
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
            DestinationAddress: 74.099998,
            DistanceMi: 53.099998,
            OriginAddress: 15.100000,
            TransportationMethod: "sea",
            WeightLb: 77.099998,
        },
    }
    
    res, err := s.GetAPIV1DonationsCarbonCalculate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->