<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.GETApplySecurityGroupsToLoadBalancer(ctx, operations.GETApplySecurityGroupsToLoadBalancerRequest{
        Action: operations.GETApplySecurityGroupsToLoadBalancerActionEnumApplySecurityGroupsToLoadBalancer,
        LoadBalancerName: "corrupti",
        SecurityGroups: []string{
            "distinctio",
            "quibusdam",
            "unde",
        },
        Version: operations.GETApplySecurityGroupsToLoadBalancerVersionEnumTwoThousandAndTwelve0601,
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->