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
            XAmzAlgorithm: "autem",
            XAmzContentSha256: "sed",
            XAmzCredential: "voluptas",
            XAmzDate: "adipisci",
            XAmzSecurityToken: "exercitationem",
            XAmzSignature: "deserunt",
            XAmzSignedHeaders: "ex",
            XAmzTarget: "NetworkFirewall_20201112.AssociateFirewallPolicy",
        },
        Request: shared.AssociateFirewallPolicyRequest{
            FirewallArn: "at",
            FirewallName: "harum",
            FirewallPolicyArn: "magnam",
            UpdateToken: "earum",
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