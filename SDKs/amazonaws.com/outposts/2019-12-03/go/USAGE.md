<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateOrderRequest{
        Headers: operations.CreateOrderHeaders{
            XAmzAlgorithm: "adipisci",
            XAmzContentSha256: "ipsum",
            XAmzCredential: "placeat",
            XAmzDate: "ut",
            XAmzSecurityToken: "voluptas",
            XAmzSignature: "sed",
            XAmzSignedHeaders: "reprehenderit",
        },
        Request: operations.CreateOrderRequestBody{
            LineItems: []shared.LineItemRequest{
                shared.LineItemRequest{
                    CatalogItemID: "atque",
                    Quantity: 8567863616121245583,
                },
                shared.LineItemRequest{
                    CatalogItemID: "quo",
                    Quantity: 6900483483283279297,
                },
                shared.LineItemRequest{
                    CatalogItemID: "perferendis",
                    Quantity: 4098291302621142390,
                },
            },
            OutpostIdentifier: "assumenda",
            PaymentOption: "NO_UPFRONT",
            PaymentTerm: "THREE_YEARS",
        },
    }
    
    res, err := s.CreateOrder(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrderOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->