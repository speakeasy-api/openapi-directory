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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GETAcceptReservedNodeExchangeRequest{
        QueryParams: operations.GETAcceptReservedNodeExchangeQueryParams{
            Action: "AcceptReservedNodeExchange",
            ReservedNodeID: "deserunt",
            TargetReservedNodeOfferingID: "porro",
            Version: "2012-12-01",
        },
        Headers: operations.GETAcceptReservedNodeExchangeHeaders{
            XAmzAlgorithm: "id",
            XAmzContentSha256: "vero",
            XAmzCredential: "perspiciatis",
            XAmzDate: "nulla",
            XAmzSecurityToken: "nihil",
            XAmzSignature: "fuga",
            XAmzSignedHeaders: "facilis",
        },
    }

    ctx := context.Background()
    res, err := s.GETAcceptReservedNodeExchange(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->