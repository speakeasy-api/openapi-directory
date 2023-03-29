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
            MaxResults: "unde",
            NextToken: "deserunt",
        },
        Headers: operations.DescribeServicesHeaders{
            XAmzAlgorithm: "porro",
            XAmzContentSha256: "nulla",
            XAmzCredential: "id",
            XAmzDate: "vero",
            XAmzSecurityToken: "perspiciatis",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "nihil",
            XAmzTarget: "AWSPriceListService.DescribeServices",
        },
        Request: shared.DescribeServicesRequest{
            FormatVersion: "facilis",
            MaxResults: 384382,
            NextToken: "iusto",
            ServiceCode: "ullam",
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