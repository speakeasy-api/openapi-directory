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
                "consequatur",
            },
            IsCountry: "laboriosam",
            PageNumber: 773736624494728175,
            PageSize: 1546546415388482117,
            Q: "placeat",
            Sort: []GetClassificationsSortEnum{
                "value",
                "updated_at",
            },
            Type: "AlternateFeedType",
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