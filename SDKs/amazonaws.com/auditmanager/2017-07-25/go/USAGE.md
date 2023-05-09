<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AssociateAssessmentReportEvidenceFolder(ctx, operations.AssociateAssessmentReportEvidenceFolderRequest{
        RequestBody: operations.AssociateAssessmentReportEvidenceFolderRequestBody{
            EvidenceFolderID: "corrupti",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("unde"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("illum"),
        AssessmentID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateAssessmentReportEvidenceFolderResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->