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
            XAmzAlgorithm: "tempora",
            XAmzContentSha256: "quas",
            XAmzCredential: "exercitationem",
            XAmzDate: "tempore",
            XAmzSecurityToken: "et",
            XAmzSignature: "qui",
            XAmzSignedHeaders: "magnam",
            XAmzTarget: "AWSShield_20160616.AssociateDRTLogBucket",
        },
        Request: shared.AssociateDrtLogBucketRequest{
            LogBucket: "sequi",
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