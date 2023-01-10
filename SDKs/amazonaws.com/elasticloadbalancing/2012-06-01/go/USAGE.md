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
            LoadBalancerName: "molestias",
            SecurityGroups: []string{
                "fugiat",
                "cumque",
                "ad",
            },
            Version: "2012-06-01",
        },
        Headers: operations.GetApplySecurityGroupsToLoadBalancerHeaders{
            XAmzAlgorithm: "officiis",
            XAmzContentSha256: "sit",
            XAmzCredential: "atque",
            XAmzDate: "ad",
            XAmzSecurityToken: "ab",
            XAmzSignature: "dolores",
            XAmzSignedHeaders: "delectus",
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