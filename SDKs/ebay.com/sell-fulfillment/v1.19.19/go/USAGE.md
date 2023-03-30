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
        Security: operations.GetOrderSecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.GetOrderPathParams{
            OrderID: "unde",
        },
        QueryParams: operations.GetOrderQueryParams{
            FieldGroups: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.Order.GetOrder(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Order != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->