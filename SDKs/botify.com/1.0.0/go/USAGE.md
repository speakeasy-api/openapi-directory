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
            AnalysisSlug: "unde",
            ProjectSlug: "deserunt",
            Username: "Michale_Sporer",
        },
        QueryParams: operations.CreateUrlsExportQueryParams{
            Area: "new",
        },
        Request: &shared.UrlsQuery{
            Fields: []string{
                "nihil",
                "fuga",
                "facilis",
                "eum",
            },
            Filters: map[string]interface{}{
                "ullam": "saepe",
                "inventore": "sapiente",
            },
            Sort: []map[string]interface{}{
                map[string]interface{}{
                    "voluptatum": "autem",
                    "vel": "non",
                },
                map[string]interface{}{
                    "similique": "reprehenderit",
                    "molestiae": "quo",
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