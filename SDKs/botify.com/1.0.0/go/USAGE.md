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
            DjangoRestToken: shared.SchemeDjangoRestToken{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateUrlsExportRequest{
        PathParams: operations.CreateUrlsExportPathParams{
            AnalysisSlug: "corrupti",
            ProjectSlug: "provident",
            Username: "Micheal_Sporer",
        },
        QueryParams: operations.CreateUrlsExportQueryParams{
            Area: "new",
        },
        Request: &shared.UrlsQuery{
            Fields: []string{
                "vel",
                "error",
                "deserunt",
                "suscipit",
            },
            Filters: map[string]interface{}{
                "magnam": "debitis",
                "ipsa": "delectus",
            },
            Sort: []map[string]interface{}{
                map[string]interface{}{
                    "molestiae": "minus",
                    "placeat": "voluptatum",
                },
                map[string]interface{}{
                    "excepturi": "nisi",
                    "recusandae": "temporibus",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Analysis.CreateUrlsExport(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CsvExportStatus != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->