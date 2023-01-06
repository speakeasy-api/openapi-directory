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
    
    req := operations.GetApplySecurityGroupsToLoadBalancerRequest{
        QueryParams: operations.GetApplySecurityGroupsToLoadBalancerQueryParams{
            Action: "ApplySecurityGroupsToLoadBalancer",
            LoadBalancerName: "culpa",
            SecurityGroups: []string{
                "voluptas",
            },
            Version: "2012-06-01",
        },
        Headers: operations.GetApplySecurityGroupsToLoadBalancerHeaders{
            XAmzAlgorithm: "veniam",
            XAmzContentSha256: "architecto",
            XAmzCredential: "molestias",
            XAmzDate: "rerum",
            XAmzSecurityToken: "quo",
            XAmzSignature: "et",
            XAmzSignedHeaders: "saepe",
        },
    }
    
    res, err := s.GetApplySecurityGroupsToLoadBalancer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->