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

    req := operations.AssociateFirewallRuleGroupRequest{
        AssociateFirewallRuleGroupRequest: shared.AssociateFirewallRuleGroupRequest{
            CreatorRequestID: "corrupti",
            FirewallRuleGroupID: "provident",
            MutationProtection: "DISABLED",
            Name: "quibusdam",
            Priority: 602763,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "corrupti",
                    Value: "illum",
                },
                shared.Tag{
                    Key: "vel",
                    Value: "error",
                },
                shared.Tag{
                    Key: "deserunt",
                    Value: "suscipit",
                },
                shared.Tag{
                    Key: "iure",
                    Value: "magnam",
                },
            },
            VpcID: "debitis",
        },
        XAmzAlgorithm: "ipsa",
        XAmzContentSha256: "delectus",
        XAmzCredential: "tempora",
        XAmzDate: "suscipit",
        XAmzSecurityToken: "molestiae",
        XAmzSignature: "minus",
        XAmzSignedHeaders: "placeat",
        XAmzTarget: "Route53Resolver.AssociateFirewallRuleGroup",
    }

    ctx := context.Background()
    res, err := s.AssociateFirewallRuleGroup(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateFirewallRuleGroupResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->