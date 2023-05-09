<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Classification.GetClassifications(ctx, operations.GetClassificationsRequest{
        Ids: []string{
            "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
            "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
            "b7392059-2939-46fe-a759-6eb10faaa235",
        },
        IsCountry: sdk.String("explicabo"),
        PageNumber: sdk.Int64(750686),
        PageSize: sdk.Int64(315428),
        Q: sdk.String("omnis"),
        Sort: []GetClassificationsSortEnum{
            operations.GetClassificationsSortEnumCreatedAt,
            operations.GetClassificationsSortEnumUpdatedAt,
        },
        Type: operations.GetClassificationsTypeEnumAlternateFeedType.ToPointer(),
    }, operations.GetClassificationsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetClassifications200ApplicationVndAPIPlusJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->