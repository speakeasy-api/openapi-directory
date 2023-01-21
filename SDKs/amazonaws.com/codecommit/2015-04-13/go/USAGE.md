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
    
    req := operations.AssociateApprovalRuleTemplateWithRepositoryRequest{
        Headers: operations.AssociateApprovalRuleTemplateWithRepositoryHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository",
        },
        Request: shared.AssociateApprovalRuleTemplateWithRepositoryInput{
            ApprovalRuleTemplateName: "fugit",
            RepositoryName: "et",
        },
    }
    
    res, err := s.AssociateApprovalRuleTemplateWithRepository(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->