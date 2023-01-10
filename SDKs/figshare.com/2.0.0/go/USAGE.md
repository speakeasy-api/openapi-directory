<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.AccountArticleReportRequest{
        Security: operations.AccountArticleReportSecurity{
            OAuth2: shared.SchemeOAuth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.AccountArticleReportQueryParams{
            GroupID: 6497618476403101202,
        },
    }
    
    res, err := s.Articles.AccountArticleReport(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountReports != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->