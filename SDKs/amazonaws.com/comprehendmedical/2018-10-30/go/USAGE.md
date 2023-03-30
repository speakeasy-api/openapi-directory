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

    req := operations.DescribeEntitiesDetectionV2JobRequest{
        Headers: operations.DescribeEntitiesDetectionV2JobHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job",
        },
        Request: shared.DescribeEntitiesDetectionV2JobRequest{
            JobID: "illum",
        },
    }

    ctx := context.Background()
    res, err := s.DescribeEntitiesDetectionV2Job(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEntitiesDetectionV2JobResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->