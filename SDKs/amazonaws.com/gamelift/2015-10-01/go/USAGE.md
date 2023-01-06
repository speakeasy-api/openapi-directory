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
            XAmzAlgorithm: "odit",
            XAmzContentSha256: "dolorem",
            XAmzCredential: "voluptate",
            XAmzDate: "ut",
            XAmzSecurityToken: "inventore",
            XAmzSignature: "et",
            XAmzSignedHeaders: "enim",
            XAmzTarget: "GameLift.AcceptMatch",
        },
        Request: shared.AcceptMatchInput{
            AcceptanceType: "ACCEPT",
            PlayerIds: []string{
                "quia",
                "quasi",
            },
            TicketID: "inventore",
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