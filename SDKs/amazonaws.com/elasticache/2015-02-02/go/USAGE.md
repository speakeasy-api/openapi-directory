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

    req := operations.GETAuthorizeCacheSecurityGroupIngressRequest{
        QueryParams: operations.GETAuthorizeCacheSecurityGroupIngressQueryParams{
            Action: "AuthorizeCacheSecurityGroupIngress",
            CacheSecurityGroupName: "deserunt",
            Ec2SecurityGroupName: "porro",
            Ec2SecurityGroupOwnerID: "nulla",
            Version: "2015-02-02",
        },
        Headers: operations.GETAuthorizeCacheSecurityGroupIngressHeaders{
            XAmzAlgorithm: "vero",
            XAmzContentSha256: "perspiciatis",
            XAmzCredential: "nulla",
            XAmzDate: "nihil",
            XAmzSecurityToken: "fuga",
            XAmzSignature: "facilis",
            XAmzSignedHeaders: "eum",
        },
    }

    ctx := context.Background()
    res, err := s.GETAuthorizeCacheSecurityGroupIngress(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->