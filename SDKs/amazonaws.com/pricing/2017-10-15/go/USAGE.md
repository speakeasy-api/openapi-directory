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

    req := operations.DescribeServicesRequest{
        DescribeServicesRequest: shared.DescribeServicesRequest{
            FormatVersion: "corrupti",
            MaxResults: 592845,
            NextToken: "distinctio",
            ServiceCode: "quibusdam",
        },
        MaxResults: "unde",
        NextToken: "nulla",
        XAmzAlgorithm: "corrupti",
        XAmzContentSha256: "illum",
        XAmzCredential: "vel",
        XAmzDate: "error",
        XAmzSecurityToken: "deserunt",
        XAmzSignature: "suscipit",
        XAmzSignedHeaders: "iure",
        XAmzTarget: "AWSPriceListService.DescribeServices",
    }

    ctx := context.Background()
    res, err := s.DescribeServices(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeServicesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->