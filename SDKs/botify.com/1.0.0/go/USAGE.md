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
            AnalysisSlug: "sit",
            ProjectSlug: "voluptas",
            Username: "culpa",
        },
        QueryParams: operations.CreateUrlsExportQueryParams{
            Area: "new",
        },
        Request: &shared.UrlsQuery{
            Fields: []string{
                "dolor",
                "expedita",
                "voluptas",
            },
            Filters: map[string]interface{}{
                "et": "nihil",
            },
            Sort: []map[string]interface{}{
                map[string]interface{}{
                    "debitis": "voluptatum",
                    "et": "ut",
                    "dolorem": "et",
                },
                map[string]interface{}{
                    "iste": "vitae",
                },
                map[string]interface{}{
                    "dolores": "illum",
                    "debitis": "vel",
                    "odio": "dolore",
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