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

    req := operations.DescribeReportCreationRequest{
        Headers: operations.DescribeReportCreationHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "ResourceGroupsTaggingAPI_20170126.DescribeReportCreation",
        },
        Request: map[string]interface{}{
            "fuga": "facilis",
            "eum": "iusto",
        },
    }

    ctx := context.Background()
    res, err := s.DescribeReportCreation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeReportCreationOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->