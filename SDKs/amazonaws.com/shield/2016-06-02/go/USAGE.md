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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.AssociateDRTLogBucketRequest{
        AssociateDRTLogBucketRequest: shared.AssociateDRTLogBucketRequest{
            LogBucket: "corrupti",
        },
        XAmzAlgorithm: "provident",
        XAmzContentSha256: "distinctio",
        XAmzCredential: "quibusdam",
        XAmzDate: "unde",
        XAmzSecurityToken: "nulla",
        XAmzSignature: "corrupti",
        XAmzSignedHeaders: "illum",
        XAmzTarget: "AWSShield_20160616.AssociateDRTLogBucket",
    }

    ctx := context.Background()
    res, err := s.AssociateDRTLogBucket(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateDRTLogBucketResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->