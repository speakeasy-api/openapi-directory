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
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetClassificationsRequest{
        QueryParams: operations.GetClassificationsQueryParams{
            Ids: []string{
                "voluptas",
            },
            IsCountry: "culpa",
            PageNumber: 501233450539197794,
            PageSize: 3390393562759376202,
            Q: "dolor",
            Sort: []GetClassificationsSortEnum{
                "value",
                "created_at",
            },
            Type: "Language",
        },
    }
    
    res, err := s.Classification.GetClassifications(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetClassifications200ApplicationVndAPIPlusJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->