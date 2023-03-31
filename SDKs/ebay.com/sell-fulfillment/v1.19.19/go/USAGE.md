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

    req := operations.GetOrderRequest{
        FieldGroups: "corrupti",
        OrderID: "provident",
    }

    ctx := context.Background()
    res, err := s.Order.GetOrder(ctx, req, operations.GetOrderSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Order != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->