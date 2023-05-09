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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AddressRequests.DeleteAddress(ctx, operations.DeleteAddressRequest{
        Authorization: "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
        DeleteAddressRequest: shared.DeleteAddressRequest{
            Ethereumaddress: "corrupti",
            Password: "provident",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAddress != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->