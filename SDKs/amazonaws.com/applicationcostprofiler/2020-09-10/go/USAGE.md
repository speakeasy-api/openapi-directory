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
    
    req := operations.DeleteReportDefinitionRequest{
        PathParams: operations.DeleteReportDefinitionPathParams{
            ReportID: "itaque",
        },
        Headers: operations.DeleteReportDefinitionHeaders{
            XAmzAlgorithm: "provident",
            XAmzContentSha256: "voluptatem",
            XAmzCredential: "qui",
            XAmzDate: "modi",
            XAmzSecurityToken: "omnis",
            XAmzSignature: "corporis",
            XAmzSignedHeaders: "quasi",
        },
    }
    
    res, err := s.DeleteReportDefinition(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteReportDefinitionResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->