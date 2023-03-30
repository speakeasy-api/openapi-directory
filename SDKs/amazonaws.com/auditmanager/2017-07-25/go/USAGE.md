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
            AssessmentID: "corrupti",
        },
        Headers: operations.AssociateAssessmentReportEvidenceFolderHeaders{
            XAmzAlgorithm: "provident",
            XAmzContentSha256: "distinctio",
            XAmzCredential: "quibusdam",
            XAmzDate: "unde",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "corrupti",
            XAmzSignedHeaders: "illum",
        },
        Request: operations.AssociateAssessmentReportEvidenceFolderRequestBody{
            EvidenceFolderID: "vel",
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