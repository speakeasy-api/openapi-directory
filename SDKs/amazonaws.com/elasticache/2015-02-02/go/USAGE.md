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
            CacheSecurityGroupName: "voluptas",
            Ec2SecurityGroupName: "culpa",
            Ec2SecurityGroupOwnerID: "expedita",
            Version: "2015-02-02",
        },
        Headers: operations.GetAuthorizeCacheSecurityGroupIngressHeaders{
            XAmzAlgorithm: "dolor",
            XAmzContentSha256: "expedita",
            XAmzCredential: "voluptas",
            XAmzDate: "fugit",
            XAmzSecurityToken: "et",
            XAmzSignature: "nihil",
            XAmzSignedHeaders: "rerum",
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