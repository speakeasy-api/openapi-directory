<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AssociateFirewallRuleGroup(ctx, operations.AssociateFirewallRuleGroupRequest{
        AssociateFirewallRuleGroupRequest: shared.AssociateFirewallRuleGroupRequest{
            CreatorRequestID: "corrupti",
            FirewallRuleGroupID: "provident",
            MutationProtection: shared.MutationProtectionStatusEnumDisabled.ToPointer(),
            Name: "Stuart Stiedemann",
            Priority: 423655,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "deserunt",
                    Value: "suscipit",
                },
                shared.Tag{
                    Key: "iure",
                    Value: "magnam",
                },
                shared.Tag{
                    Key: "debitis",
                    Value: "ipsa",
                },
            },
            VpcID: "delectus",
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("iusto"),
        XAmzTarget: operations.AssociateFirewallRuleGroupXAmzTargetEnumRoute53ResolverAssociateFirewallRuleGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateFirewallRuleGroupResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->