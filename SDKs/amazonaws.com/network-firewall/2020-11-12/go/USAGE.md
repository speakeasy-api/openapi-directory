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
    res, err := s.AssociateFirewallPolicy(ctx, operations.AssociateFirewallPolicyRequest{
        AssociateFirewallPolicyRequest: shared.AssociateFirewallPolicyRequest{
            FirewallArn: sdk.String("corrupti"),
            FirewallName: sdk.String("provident"),
            FirewallPolicyArn: "distinctio",
            UpdateToken: sdk.String("quibusdam"),
        },
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.AssociateFirewallPolicyXAmzTargetEnumNetworkFirewall20201112AssociateFirewallPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateFirewallPolicyResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->