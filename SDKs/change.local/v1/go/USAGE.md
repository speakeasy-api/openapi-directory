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
            DestinationAddress: 7.200000,
            DistanceMi: 45.200001,
            OriginAddress: 50.200001,
            TransportationMethod: "truck",
            WeightLb: 2.100000,
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