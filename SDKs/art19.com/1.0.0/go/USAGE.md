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
    s := sdk.New()

    req := operations.GetClassificationsRequest{
        Security: operations.GetClassificationsSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.GetClassificationsQueryParams{
            Ids: []string{
                "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
                "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
                "b7392059-2939-46fe-a759-6eb10faaa235",
            },
            IsCountry: "magni",
            PageNumber: 750686,
            PageSize: 315428,
            Q: "est",
            Sort: []GetClassificationsSortEnum{
                "created_at",
                "updated_at",
            },
            Type: "AlternateFeedType",
        },
    }

    ctx := context.Background()
    res, err := s.Classification.GetClassifications(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetClassifications200ApplicationVndAPIPlusJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->