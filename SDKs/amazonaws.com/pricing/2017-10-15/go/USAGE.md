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
    
    req := operations.DescribeServicesRequest{
        QueryParams: operations.DescribeServicesQueryParams{
            MaxResults: "non",
            NextToken: "repudiandae",
        },
        Headers: operations.DescribeServicesHeaders{
            XAmzAlgorithm: "et",
            XAmzContentSha256: "pariatur",
            XAmzCredential: "est",
            XAmzDate: "commodi",
            XAmzSecurityToken: "ipsa",
            XAmzSignature: "aut",
            XAmzSignedHeaders: "quisquam",
            XAmzTarget: "AWSPriceListService.DescribeServices",
        },
        Request: shared.DescribeServicesRequest{
            FormatVersion: "quia",
            MaxResults: 2982585429028804684,
            NextToken: "laboriosam",
            ServiceCode: "hic",
        },
    }
    
    res, err := s.DescribeServices(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeServicesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->