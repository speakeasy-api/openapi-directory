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
                DjangoRestToken: shared.SchemeDjangoRestToken{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateUrlsExportRequest{
        PathParams: operations.CreateUrlsExportPathParams{
            AnalysisSlug: "praesentium",
            ProjectSlug: "omnis",
            Username: "qui",
        },
        QueryParams: operations.CreateUrlsExportQueryParams{
            Area: "disappeared",
        },
        Request: &shared.UrlsQuery{
            Fields: []string{
                "aliquid",
                "nam",
                "quia",
            },
            Filters: map[string]interface{}{
                "molestias": "autem",
            },
            Sort: []map[string]interface{}{
                map[string]interface{}{
                    "nesciunt": "eaque",
                    "corrupti": "nihil",
                },
            },
        },
    }
    
    res, err := s.Analysis.CreateUrlsExport(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CsvExportStatus != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->