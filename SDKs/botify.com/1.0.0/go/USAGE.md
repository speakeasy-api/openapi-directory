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
            AnalysisSlug: "error",
            ProjectSlug: "minus",
            Username: "animi",
        },
        QueryParams: operations.CreateUrlsExportQueryParams{
            Area: "disappeared",
        },
        Request: &shared.UrlsQuery{
            Fields: []string{
                "vitae",
            },
            Filters: map[string]interface{}{
                "non": "reiciendis",
                "id": "aut",
            },
            Sort: []map[string]interface{}{
                map[string]interface{}{
                    "quaerat": "exercitationem",
                },
                map[string]interface{}{
                    "ipsum": "rerum",
                    "assumenda": "porro",
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