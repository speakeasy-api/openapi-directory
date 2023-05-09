<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DjangoRestToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Analysis.CreateUrlsExport(ctx, operations.CreateUrlsExportRequest{
        UrlsQuery: &shared.UrlsQuery{
            Fields: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            Filters: map[string]interface{}{
                "nulla": "corrupti",
                "illum": "vel",
                "error": "deserunt",
            },
            Sort: []map[string]interface{}{
                map[string]interface{}{
                    "magnam": "debitis",
                    "ipsa": "delectus",
                },
                map[string]interface{}{
                    "suscipit": "molestiae",
                    "minus": "placeat",
                },
            },
        },
        AnalysisSlug: "voluptatum",
        Area: operations.CreateUrlsExportAreaEnumDisappeared.ToPointer(),
        ProjectSlug: "excepturi",
        Username: "Glen.Walsh33",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CsvExportStatus != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->