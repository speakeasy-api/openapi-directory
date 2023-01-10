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
    
    req := operations.GetAcceptReservedNodeExchangeRequest{
        QueryParams: operations.GetAcceptReservedNodeExchangeQueryParams{
            Action: "AcceptReservedNodeExchange",
            ReservedNodeID: "maxime",
            TargetReservedNodeOfferingID: "ipsa",
            Version: "2012-12-01",
        },
        Headers: operations.GetAcceptReservedNodeExchangeHeaders{
            XAmzAlgorithm: "autem",
            XAmzContentSha256: "magni",
            XAmzCredential: "recusandae",
            XAmzDate: "et",
            XAmzSecurityToken: "dolorem",
            XAmzSignature: "saepe",
            XAmzSignedHeaders: "minus",
        },
    }
    
    res, err := s.GetAcceptReservedNodeExchange(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->