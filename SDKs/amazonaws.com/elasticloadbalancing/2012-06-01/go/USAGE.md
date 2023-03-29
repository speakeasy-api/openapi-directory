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

    req := operations.GETApplySecurityGroupsToLoadBalancerRequest{
        QueryParams: operations.GETApplySecurityGroupsToLoadBalancerQueryParams{
            Action: "ApplySecurityGroupsToLoadBalancer",
            LoadBalancerName: "deserunt",
            SecurityGroups: []string{
                "nulla",
                "id",
                "vero",
            },
            Version: "2012-06-01",
        },
        Headers: operations.GETApplySecurityGroupsToLoadBalancerHeaders{
            XAmzAlgorithm: "nulla",
            XAmzContentSha256: "nihil",
            XAmzCredential: "fuga",
            XAmzDate: "facilis",
            XAmzSecurityToken: "eum",
            XAmzSignature: "iusto",
            XAmzSignedHeaders: "ullam",
        },
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