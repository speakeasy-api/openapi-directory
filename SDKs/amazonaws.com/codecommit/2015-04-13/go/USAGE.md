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
            XAmzAlgorithm: "est",
            XAmzContentSha256: "aut",
            XAmzCredential: "dignissimos",
            XAmzDate: "et",
            XAmzSecurityToken: "alias",
            XAmzSignature: "vitae",
            XAmzSignedHeaders: "ipsum",
            XAmzTarget: "CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository",
        },
        Request: shared.AssociateApprovalRuleTemplateWithRepositoryInput{
            ApprovalRuleTemplateName: "magni",
            RepositoryName: "expedita",
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