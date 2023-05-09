# Classification

### Available Operations

* [GetClassifications](#getclassifications) - Get a list of classifications
* [GetClassificationsID](#getclassificationsid) - Get a specific classification

## GetClassifications

Get a list of classifications

### Example Usage

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
            "aff1a3a2-fa94-4677-b925-1aa52c3f5ad0",
            "19da1ffe-78f0-497b-8074-f15471b5e6e1",
        },
        IsCountry: sdk.String("ipsum"),
        PageNumber: sdk.Int64(692472),
        PageSize: sdk.Int64(565189),
        Q: sdk.String("excepturi"),
        Sort: []GetClassificationsSortEnum{
            operations.GetClassificationsSortEnumCreatedAt,
            operations.GetClassificationsSortEnumUpdatedAt,
            operations.GetClassificationsSortEnumUpdatedAt,
            operations.GetClassificationsSortEnumValue,
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

## GetClassificationsID

Get a specific classification

### Example Usage

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
    res, err := s.Classification.GetClassificationsID(ctx, operations.GetClassificationsIDRequest{
        ID: "e91e450a-d2ab-4d44-a698-02d502a94bb4",
    }, operations.GetClassificationsIDSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetClassificationsID200ApplicationVndAPIPlusJSONObject != nil {
        // handle response
    }
}
```
