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
    
    req := operations.DescribeReportCreationRequest{
        Headers: operations.DescribeReportCreationHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "ResourceGroupsTaggingAPI_20170126.DescribeReportCreation",
        },
        Request: map[string]interface{}{
            "et": "nihil",
        },
    }
    
    res, err := s.DescribeReportCreation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeReportCreationOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->