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

    req := operations.AssociateApprovalRuleTemplateWithRepositoryRequest{
        Headers: operations.AssociateApprovalRuleTemplateWithRepositoryHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository",
        },
        Request: shared.AssociateApprovalRuleTemplateWithRepositoryInput{
            ApprovalRuleTemplateName: "nihil",
            RepositoryName: "fuga",
        },
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