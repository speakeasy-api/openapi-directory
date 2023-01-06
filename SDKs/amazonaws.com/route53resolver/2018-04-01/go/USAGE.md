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
            XAmzAlgorithm: "molestiae",
            XAmzContentSha256: "soluta",
            XAmzCredential: "qui",
            XAmzDate: "aut",
            XAmzSecurityToken: "et",
            XAmzSignature: "omnis",
            XAmzSignedHeaders: "et",
            XAmzTarget: "Route53Resolver.AssociateFirewallRuleGroup",
        },
        Request: shared.AssociateFirewallRuleGroupRequest{
            CreatorRequestID: "ab",
            FirewallRuleGroupID: "dolorem",
            MutationProtection: "DISABLED",
            Name: "dolorum",
            Priority: 6858010906439498044,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ea",
                    Value: "ut",
                },
            },
            VpcID: "tempore",
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