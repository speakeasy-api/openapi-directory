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
        Headers: operations.DeleteReportDefinitionHeaders{
            XAmzAlgorithm: "dolor",
            XAmzContentSha256: "nulla",
            XAmzCredential: "ipsa",
            XAmzDate: "ipsum",
            XAmzSecurityToken: "ab",
            XAmzSignature: "dolores",
            XAmzSignedHeaders: "sunt",
            XAmzTarget: "AWSOrigamiServiceGatewayService.DeleteReportDefinition",
        },
        Request: shared.DeleteReportDefinitionRequest{
            ReportName: "quas",
        },
    }
    
    res, err := s.DeleteReportDefinition(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteReportDefinitionResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->