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

    req := operations.DescribeEntitiesDetectionV2JobRequest{
        DescribeEntitiesDetectionV2JobRequest: shared.DescribeEntitiesDetectionV2JobRequest{
            JobID: "corrupti",
        },
        XAmzAlgorithm: "provident",
        XAmzContentSha256: "distinctio",
        XAmzCredential: "quibusdam",
        XAmzDate: "unde",
        XAmzSecurityToken: "nulla",
        XAmzSignature: "corrupti",
        XAmzSignedHeaders: "illum",
        XAmzTarget: "ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job",
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