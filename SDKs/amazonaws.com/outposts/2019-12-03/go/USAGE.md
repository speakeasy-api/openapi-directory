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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.CreateOrderRequestBody{
            LineItems: []shared.LineItemRequest{
                shared.LineItemRequest{
                    CatalogItemID: "fugit",
                    Quantity: 1543572285742637646,
                },
                shared.LineItemRequest{
                    CatalogItemID: "nihil",
                    Quantity: 8325060299420976708,
                },
                shared.LineItemRequest{
                    CatalogItemID: "dicta",
                    Quantity: 2518412263346885298,
                },
            },
            OutpostIdentifier: "voluptatum",
            PaymentOption: "ALL_UPFRONT",
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