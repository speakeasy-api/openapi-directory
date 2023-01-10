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
    
    req := operations.GetAuthorizeCacheSecurityGroupIngressRequest{
        QueryParams: operations.GetAuthorizeCacheSecurityGroupIngressQueryParams{
            Action: "AuthorizeCacheSecurityGroupIngress",
            CacheSecurityGroupName: "labore",
            Ec2SecurityGroupName: "id",
            Ec2SecurityGroupOwnerID: "libero",
            Version: "2015-02-02",
        },
        Headers: operations.GetAuthorizeCacheSecurityGroupIngressHeaders{
            XAmzAlgorithm: "amet",
            XAmzContentSha256: "sint",
            XAmzCredential: "nostrum",
            XAmzDate: "voluptatem",
            XAmzSecurityToken: "tempore",
            XAmzSignature: "est",
            XAmzSignedHeaders: "molestias",
        },
    }
    
    res, err := s.GetAuthorizeCacheSecurityGroupIngress(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->