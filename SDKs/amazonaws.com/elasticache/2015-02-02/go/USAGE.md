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
            CacheSecurityGroupName: "dicta",
            Ec2SecurityGroupName: "rem",
            Ec2SecurityGroupOwnerID: "doloremque",
            Version: "2015-02-02",
        },
        Headers: operations.GetAuthorizeCacheSecurityGroupIngressHeaders{
            XAmzAlgorithm: "nisi",
            XAmzContentSha256: "recusandae",
            XAmzCredential: "qui",
            XAmzDate: "minus",
            XAmzSecurityToken: "et",
            XAmzSignature: "rerum",
            XAmzSignedHeaders: "ut",
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