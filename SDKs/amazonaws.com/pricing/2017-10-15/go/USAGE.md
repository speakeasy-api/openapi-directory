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
            MaxResults: "sit",
            NextToken: "voluptas",
        },
        Headers: operations.DescribeServicesHeaders{
            XAmzAlgorithm: "culpa",
            XAmzContentSha256: "expedita",
            XAmzCredential: "consequuntur",
            XAmzDate: "dolor",
            XAmzSecurityToken: "expedita",
            XAmzSignature: "voluptas",
            XAmzSignedHeaders: "fugit",
            XAmzTarget: "AWSPriceListService.DescribeServices",
        },
        Request: shared.DescribeServicesRequest{
            FormatVersion: "nihil",
            MaxResults: 8325060299420976708,
            NextToken: "dicta",
            ServiceCode: "debitis",
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