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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.AccountArticleReport(ctx, operations.AccountArticleReportRequest{
        GroupID: sdk.Int64(548814),
    }, operations.AccountArticleReportSecurity{
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