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

    req := operations.AssociateAssessmentReportEvidenceFolderRequest{
        PathParams: operations.AssociateAssessmentReportEvidenceFolderPathParams{
            AssessmentID: "unde",
        },
        Headers: operations.AssociateAssessmentReportEvidenceFolderHeaders{
            XAmzAlgorithm: "deserunt",
            XAmzContentSha256: "porro",
            XAmzCredential: "nulla",
            XAmzDate: "id",
            XAmzSecurityToken: "vero",
            XAmzSignature: "perspiciatis",
            XAmzSignedHeaders: "nulla",
        },
        Request: operations.AssociateAssessmentReportEvidenceFolderRequestBody{
            EvidenceFolderID: "nihil",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateAssessmentReportEvidenceFolder(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateAssessmentReportEvidenceFolderResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->