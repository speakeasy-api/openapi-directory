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
            XAmzAlgorithm: "nostrum",
            XAmzContentSha256: "aut",
            XAmzCredential: "error",
            XAmzDate: "excepturi",
            XAmzSecurityToken: "et",
            XAmzSignature: "quia",
            XAmzSignedHeaders: "eveniet",
            XAmzTarget: "ResourceGroupsTaggingAPI_20170126.DescribeReportCreation",
        },
        Request: map[string]interface{}{
            "sit": "nulla",
            "veritatis": "inventore",
            "quibusdam": "iure",
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