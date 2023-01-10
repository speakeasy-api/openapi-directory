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
    
    req := operations.AcceptMatchRequest{
        Headers: operations.AcceptMatchHeaders{
            XAmzAlgorithm: "et",
            XAmzContentSha256: "ea",
            XAmzCredential: "quia",
            XAmzDate: "sed",
            XAmzSecurityToken: "dolorem",
            XAmzSignature: "accusamus",
            XAmzSignedHeaders: "ut",
            XAmzTarget: "GameLift.AcceptMatch",
        },
        Request: shared.AcceptMatchInput{
            AcceptanceType: "REJECT",
            PlayerIds: []string{
                "accusamus",
            },
            TicketID: "quisquam",
        },
    }
    
    res, err := s.AcceptMatch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptMatchOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->