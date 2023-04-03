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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.AssociateFirewallPolicyRequest{
        AssociateFirewallPolicyRequest: shared.AssociateFirewallPolicyRequest{
            FirewallArn: "corrupti",
            FirewallName: "provident",
            FirewallPolicyArn: "distinctio",
            UpdateToken: "quibusdam",
        },
        XAmzAlgorithm: "unde",
        XAmzContentSha256: "nulla",
        XAmzCredential: "corrupti",
        XAmzDate: "illum",
        XAmzSecurityToken: "vel",
        XAmzSignature: "error",
        XAmzSignedHeaders: "deserunt",
        XAmzTarget: "NetworkFirewall_20201112.AssociateFirewallPolicy",
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