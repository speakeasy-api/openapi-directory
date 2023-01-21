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
    
    req := operations.AssociateFirewallRuleGroupRequest{
        Headers: operations.AssociateFirewallRuleGroupHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "Route53Resolver.AssociateFirewallRuleGroup",
        },
        Request: shared.AssociateFirewallRuleGroupRequest{
            CreatorRequestID: "fugit",
            FirewallRuleGroupID: "et",
            MutationProtection: "ENABLED",
            Name: "rerum",
            Priority: 7837839688282259259,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "voluptatum",
                    Value: "et",
                },
            },
            VpcID: "ut",
        },
    }
    
    res, err := s.AssociateFirewallRuleGroup(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateFirewallRuleGroupResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->