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

    req := operations.DescribeServicesRequest{
        QueryParams: operations.DescribeServicesQueryParams{
            MaxResults: "corrupti",
            NextToken: "provident",
        },
        Headers: operations.DescribeServicesHeaders{
            XAmzAlgorithm: "distinctio",
            XAmzContentSha256: "quibusdam",
            XAmzCredential: "unde",
            XAmzDate: "nulla",
            XAmzSecurityToken: "corrupti",
            XAmzSignature: "illum",
            XAmzSignedHeaders: "vel",
            XAmzTarget: "AWSPriceListService.DescribeServices",
        },
        Request: shared.DescribeServicesRequest{
            FormatVersion: "error",
            MaxResults: 645894,
            NextToken: "suscipit",
            ServiceCode: "iure",
        },
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