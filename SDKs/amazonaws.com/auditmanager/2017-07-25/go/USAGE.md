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
    
    req := operations.AssociateAssessmentReportEvidenceFolderRequest{
        PathParams: operations.AssociateAssessmentReportEvidenceFolderPathParams{
            AssessmentID: "cum",
        },
        Headers: operations.AssociateAssessmentReportEvidenceFolderHeaders{
            XAmzAlgorithm: "hic",
            XAmzContentSha256: "qui",
            XAmzCredential: "cum",
            XAmzDate: "facilis",
            XAmzSecurityToken: "consequatur",
            XAmzSignature: "molestiae",
            XAmzSignedHeaders: "laudantium",
        },
        Request: operations.AssociateAssessmentReportEvidenceFolderRequestBody{
            EvidenceFolderID: "tempore",
        },
    }
    
    res, err := s.AssociateAssessmentReportEvidenceFolder(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateAssessmentReportEvidenceFolderResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->