# ClassificationInclusion

### Available Operations

* [GetClassificationInclusions](#getclassificationinclusions) - Get ClassificationInclusion records
* [GetClassificationInclusionsID](#getclassificationinclusionsid) - Get a specific classification inclusion

## GetClassificationInclusions

Classification Inclusions connect classifications with entities like series, episodes, or campaigns, amongst others.

In order to retrieve a set of classification inclusions, at least one of the following filter parameters must
be provided. Failing to do so renders a `400 Bad Request` response.

- `ids[]`
- `classified_id` and `classified_type`
- `classified_id` and `classification_type`
- `classification_id` and `classified_type`


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
    res, err := s.ClassificationInclusion.GetClassificationInclusions(ctx, operations.GetClassificationInclusionsRequest{
        ClassificationID: sdk.String("f63c969e-9a3e-4fa7-bdfb-14cd66ae395e"),
        ClassificationType: operations.GetClassificationInclusionsClassificationTypeEnumMediaRating.ToPointer(),
        ClassifiedID: sdk.String("b9ba88f3-a669-4970-b4ba-4469b6e21419"),
        ClassifiedType: operations.GetClassificationInclusionsClassifiedTypeEnumSeason.ToPointer(),
        Ids: []string{
            "890afa56-3e25-416f-a4c8-b711e5b7fd2e",
            "d028921c-ddc6-4926-81fb-576b0d5f0d30",
            "c5fbb258-7053-4202-873d-5fe9b90c2890",
        },
        PageNumber: sdk.Int64(577229),
        PageSize: sdk.Int64(699098),
        Q: sdk.String("adipisci"),
        Sort: []GetClassificationInclusionsSortEnum{
            operations.GetClassificationInclusionsSortEnumPosition,
            operations.GetClassificationInclusionsSortEnumClassificationValue,
            operations.GetClassificationInclusionsSortEnumCreatedAt,
            operations.GetClassificationInclusionsSortEnumPosition,
        },
    }, operations.GetClassificationInclusionsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetClassificationInclusions200ApplicationVndAPIPlusJSONObject != nil {
        // handle response
    }
}
```

## GetClassificationInclusionsID

Get a specific classification inclusion

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
    res, err := s.ClassificationInclusion.GetClassificationInclusionsID(ctx, operations.GetClassificationInclusionsIDRequest{
        ID: "8d9cbf48-6333-423f-9b77-f3a4100674eb",
    }, operations.GetClassificationInclusionsIDSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetClassificationInclusionsID200ApplicationVndAPIPlusJSONObject != nil {
        // handle response
    }
}
```
