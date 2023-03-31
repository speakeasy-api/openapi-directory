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
    s := sdk.New()

    req := operations.AccountArticleReportRequest{
        GroupID: 548814,
    }

    ctx := context.Background()
    res, err := s.Articles.AccountArticleReport(ctx, req, operations.AccountArticleReportSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountReports != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->