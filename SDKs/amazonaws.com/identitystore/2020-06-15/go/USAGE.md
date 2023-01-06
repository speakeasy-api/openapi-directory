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
    
    req := operations.DescribeGroupRequest{
        Headers: operations.DescribeGroupHeaders{
            XAmzAlgorithm: "velit",
            XAmzContentSha256: "distinctio",
            XAmzCredential: "mollitia",
            XAmzDate: "ad",
            XAmzSecurityToken: "error",
            XAmzSignature: "enim",
            XAmzSignedHeaders: "necessitatibus",
            XAmzTarget: "AWSIdentityStore.DescribeGroup",
        },
        Request: shared.DescribeGroupRequest{
            GroupID: "nam",
            IdentityStoreID: "in",
        },
    }
    
    res, err := s.DescribeGroup(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeGroupResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->