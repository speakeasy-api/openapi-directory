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
            XAmzAlgorithm: "quisquam",
            XAmzContentSha256: "expedita",
            XAmzCredential: "et",
            XAmzDate: "voluptate",
            XAmzSecurityToken: "omnis",
            XAmzSignature: "dolores",
            XAmzSignedHeaders: "natus",
        },
        Request: operations.CreateOrderRequestBody{
            LineItems: []shared.LineItemRequest{
                shared.LineItemRequest{
                    CatalogItemID: "vitae",
                    Quantity: 2009801317382749508,
                },
                shared.LineItemRequest{
                    CatalogItemID: "voluptatem",
                    Quantity: 866732565720837069,
                },
            },
            OutpostIdentifier: "expedita",
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