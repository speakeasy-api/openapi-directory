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
    
    req := operations.AssociateDrtLogBucketRequest{
        Headers: operations.AssociateDrtLogBucketHeaders{
            XAmzAlgorithm: "delectus",
            XAmzContentSha256: "suscipit",
            XAmzCredential: "architecto",
            XAmzDate: "dolor",
            XAmzSecurityToken: "ipsa",
            XAmzSignature: "quos",
            XAmzSignedHeaders: "voluptas",
            XAmzTarget: "AWSShield_20160616.AssociateDRTLogBucket",
        },
        Request: shared.AssociateDrtLogBucketRequest{
            LogBucket: "a",
        },
    }
    
    res, err := s.AssociateDrtLogBucket(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateDRTLogBucketResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->