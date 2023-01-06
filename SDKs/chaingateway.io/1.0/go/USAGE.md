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
    
    req := operations.DeleteAddressRequest{
        Headers: operations.DeleteAddressHeaders{
            Authorization: "enim",
        },
        Request: shared.DeleteAddressRequest{
            Ethereumaddress: "natus",
            Password: "nesciunt",
        },
    }
    
    res, err := s.AddressRequests.DeleteAddress(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAddress != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->