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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "NetworkFirewall_20201112.AssociateFirewallPolicy",
        },
        Request: shared.AssociateFirewallPolicyRequest{
            FirewallArn: "illum",
            FirewallName: "vel",
            FirewallPolicyArn: "error",
            UpdateToken: "deserunt",
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