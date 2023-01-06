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
                "ducimus",
                "repellendus",
            },
            IsCountry: "officia",
            PageNumber: 4185144460247541412,
            PageSize: 2557612462472925101,
            Q: "sit",
            Sort: []GetClassificationsSortEnum{
                "created_at",
                "created_at",
            },
            Type: "Genre",
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