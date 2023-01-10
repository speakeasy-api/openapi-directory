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
            XAmzAlgorithm: "ut",
            XAmzContentSha256: "non",
            XAmzCredential: "nulla",
            XAmzDate: "numquam",
            XAmzSecurityToken: "quia",
            XAmzSignature: "fugiat",
            XAmzSignedHeaders: "laboriosam",
            XAmzTarget: "Route53Resolver.AssociateFirewallRuleGroup",
        },
        Request: shared.AssociateFirewallRuleGroupRequest{
            CreatorRequestID: "nam",
            FirewallRuleGroupID: "delectus",
            MutationProtection: "ENABLED",
            Name: "incidunt",
            Priority: 7383927136453695366,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "iste",
                    Value: "fuga",
                },
            },
            VpcID: "at",
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