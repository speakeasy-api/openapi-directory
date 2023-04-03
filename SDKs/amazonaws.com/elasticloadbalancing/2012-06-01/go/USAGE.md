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

    req := operations.GETApplySecurityGroupsToLoadBalancerRequest{
        Action: "ApplySecurityGroupsToLoadBalancer",
        LoadBalancerName: "corrupti",
        SecurityGroups: []string{
            "distinctio",
            "quibusdam",
            "unde",
        },
        Version: "2012-06-01",
        XAmzAlgorithm: "nulla",
        XAmzContentSha256: "corrupti",
        XAmzCredential: "illum",
        XAmzDate: "vel",
        XAmzSecurityToken: "error",
        XAmzSignature: "deserunt",
        XAmzSignedHeaders: "suscipit",
    }

    ctx := context.Background()
    res, err := s.GETApplySecurityGroupsToLoadBalancer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->