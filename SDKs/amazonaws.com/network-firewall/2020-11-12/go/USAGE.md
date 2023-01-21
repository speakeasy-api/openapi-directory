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
    
    req := operations.AssociateFirewallPolicyRequest{
        Headers: operations.AssociateFirewallPolicyHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "NetworkFirewall_20201112.AssociateFirewallPolicy",
        },
        Request: shared.AssociateFirewallPolicyRequest{
            FirewallArn: "fugit",
            FirewallName: "et",
            FirewallPolicyArn: "nihil",
            UpdateToken: "rerum",
        },
    }
    
    res, err := s.AssociateFirewallPolicy(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateFirewallPolicyResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->