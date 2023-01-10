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
            XAmzAlgorithm: "est",
            XAmzContentSha256: "et",
            XAmzCredential: "et",
            XAmzDate: "a",
            XAmzSecurityToken: "quis",
            XAmzSignature: "est",
            XAmzSignedHeaders: "dolorum",
            XAmzTarget: "NetworkFirewall_20201112.AssociateFirewallPolicy",
        },
        Request: shared.AssociateFirewallPolicyRequest{
            FirewallArn: "veniam",
            FirewallName: "est",
            FirewallPolicyArn: "blanditiis",
            UpdateToken: "aliquid",
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