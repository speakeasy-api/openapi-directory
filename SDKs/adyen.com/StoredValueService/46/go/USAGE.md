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

    req := operations.PostChangeStatusRequest{
        Security: operations.PostChangeStatusSecurity{
            APIKeyAuth: &shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &shared.StoredValueStatusChangeRequest{
            Amount: &shared.Amount{
                Currency: "unde",
                Value: 592845,
            },
            MerchantAccount: "porro",
            PaymentMethod: map[string]string{
                "id": "vero",
                "perspiciatis": "nulla",
                "nihil": "fuga",
                "facilis": "eum",
            },
            RecurringDetailReference: "iusto",
            Reference: "ullam",
            ShopperInteraction: "POS",
            ShopperReference: "inventore",
            Status: "inactive",
            Store: "enim",
        },
    }

    ctx := context.Background()
    res, err := s.General.PostChangeStatus(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StoredValueStatusChangeResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->