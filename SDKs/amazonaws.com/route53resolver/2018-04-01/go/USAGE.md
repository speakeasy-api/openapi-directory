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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "Route53Resolver.AssociateFirewallRuleGroup",
        },
        Request: shared.AssociateFirewallRuleGroupRequest{
            CreatorRequestID: "nihil",
            FirewallRuleGroupID: "fuga",
            MutationProtection: "DISABLED",
            Name: "eum",
            Priority: 437587,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "saepe",
                    Value: "inventore",
                },
                shared.Tag{
                    Key: "sapiente",
                    Value: "enim",
                },
            },
            VpcID: "eum",
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