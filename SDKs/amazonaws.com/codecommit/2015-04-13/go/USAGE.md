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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.AssociateApprovalRuleTemplateWithRepositoryRequest{
        AssociateApprovalRuleTemplateWithRepositoryInput: shared.AssociateApprovalRuleTemplateWithRepositoryInput{
            ApprovalRuleTemplateName: "corrupti",
            RepositoryName: "provident",
        },
        XAmzAlgorithm: "distinctio",
        XAmzContentSha256: "quibusdam",
        XAmzCredential: "unde",
        XAmzDate: "nulla",
        XAmzSecurityToken: "corrupti",
        XAmzSignature: "illum",
        XAmzSignedHeaders: "vel",
        XAmzTarget: "CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository",
    }

    ctx := context.Background()
    res, err := s.AssociateApprovalRuleTemplateWithRepository(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->