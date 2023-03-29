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

    req := operations.DeleteAddressRequest{
        Headers: operations.DeleteAddressHeaders{
            Authorization: "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
        },
        Request: shared.DeleteAddressRequest{
            Ethereumaddress: "unde",
            Password: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.AddressRequests.DeleteAddress(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAddress != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->