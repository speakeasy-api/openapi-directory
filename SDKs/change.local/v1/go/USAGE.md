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
            DestinationAddress: 90.199997,
            DistanceMi: 69.199997,
            OriginAddress: 7.100000,
            TransportationMethod: "air",
            WeightLb: 88.199997,
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