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

    req := operations.AssociateFirewallRuleGroupRequest{
        Headers: operations.AssociateFirewallRuleGroupHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "Route53Resolver.AssociateFirewallRuleGroup",
        },
        Request: shared.AssociateFirewallRuleGroupRequest{
            CreatorRequestID: "illum",
            FirewallRuleGroupID: "vel",
            MutationProtection: "DISABLED",
            Name: "deserunt",
            Priority: 384382,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "magnam",
                    Value: "debitis",
                },
                shared.Tag{
                    Key: "ipsa",
                    Value: "delectus",
                },
            },
            VpcID: "tempora",
        },
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