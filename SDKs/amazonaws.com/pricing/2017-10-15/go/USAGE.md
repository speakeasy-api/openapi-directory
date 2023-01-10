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
            MaxResults: "maiores",
            NextToken: "nobis",
        },
        Headers: operations.DescribeServicesHeaders{
            XAmzAlgorithm: "quos",
            XAmzContentSha256: "facilis",
            XAmzCredential: "qui",
            XAmzDate: "quis",
            XAmzSecurityToken: "aut",
            XAmzSignature: "est",
            XAmzSignedHeaders: "ipsa",
            XAmzTarget: "AWSPriceListService.DescribeServices",
        },
        Request: shared.DescribeServicesRequest{
            FormatVersion: "eveniet",
            MaxResults: 1787359646289181114,
            NextToken: "vitae",
            ServiceCode: "quos",
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