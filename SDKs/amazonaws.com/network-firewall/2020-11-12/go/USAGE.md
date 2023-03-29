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

    req := operations.AssociateFirewallPolicyRequest{
        Headers: operations.AssociateFirewallPolicyHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "NetworkFirewall_20201112.AssociateFirewallPolicy",
        },
        Request: shared.AssociateFirewallPolicyRequest{
            FirewallArn: "nihil",
            FirewallName: "fuga",
            FirewallPolicyArn: "facilis",
            UpdateToken: "eum",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateFirewallPolicy(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateFirewallPolicyResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->