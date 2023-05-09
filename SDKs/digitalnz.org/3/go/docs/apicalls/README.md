# APICalls

### Available Operations

* [GetRecordsFormat](#getrecordsformat) - Run queries against DigitalNZ metadata search service.
* [GetRecordsRecordIDFormat](#getrecordsrecordidformat) - View metadata associated with a single record.
* [GetRecordsRecordIDMoreLikeThisFormat](#getrecordsrecordidmorelikethisformat) - The "More Like This" call returns similar records to the specified ID.


## GetRecordsFormat

This is the main search endpoint allowing queries against the records database.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.APICalls.GetRecordsFormat(ctx, operations.GetRecordsFormatRequest{
        AuthenticationToken: sdk.String("deserunt"),
        AndCategory: operations.GetRecordsFormatAndCategoryEnumNewspapers.ToPointer(),
        AndCentury: sdk.String("ipsam"),
        AndCollection: sdk.String("repellendus"),
        AndContentPartner: sdk.String("sapiente"),
        AndCreator: sdk.String("quo"),
        AndDate: sdk.String("odit"),
        AndDcType: sdk.String("at"),
        AndDecade: sdk.String("at"),
        AndFormat: sdk.String("maiores"),
        AndHasLargeThumbnailURL: operations.GetRecordsFormatAndHasLargeThumbnailURLEnumY.ToPointer(),
        AndHasLatLng: sdk.Bool(false),
        AndIsCommercialUse: sdk.Bool(false),
        AndOrFilterField: sdk.String("molestiae"),
        AndPlacename: sdk.String("quod"),
        AndPrimaryCollection: sdk.String("quod"),
        AndSubject: sdk.String("esse"),
        AndTitle: sdk.String("totam"),
        AndUsage: operations.GetRecordsFormatAndUsageEnumAllRightsReserved.ToPointer(),
        AndYear: sdk.String("dolorum"),
        Direction: operations.GetRecordsFormatDirectionEnumAsc.ToPointer(),
        ExcludeFiltersFromFacets: sdk.Bool(false),
        Facets: []GetRecordsFormatFacetsEnum{
            operations.GetRecordsFormatFacetsEnumLanguage,
            operations.GetRecordsFormatFacetsEnumCentury,
            operations.GetRecordsFormatFacetsEnumDisplayCollection,
        },
        FacetsPage: sdk.Int64(537373),
        FacetsPerPage: sdk.Int64(944669),
        Fields: sdk.String("optio"),
        Format: shared.FormatEnumXML,
        GeoBbox: sdk.String("beatae"),
        Page: sdk.Int64(414662),
        PerPage: sdk.Int64(473600),
        Sort: operations.GetRecordsFormatSortEnumSyndicationDate.ToPointer(),
        Text: sdk.String("qui"),
        WithoutFilterField: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRecordsFormat200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetRecordsRecordIDFormat

If you know its `record_id` you can use this endpoint to view all metadata associated with that specific record.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.APICalls.GetRecordsRecordIDFormat(ctx, operations.GetRecordsRecordIDFormatRequest{
        AuthenticationToken: sdk.String("cum"),
        Fields: sdk.String("esse"),
        Format: shared.FormatEnumJSON,
        RecordID: 568434,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Record != nil {
        // handle response
    }
}
```

## GetRecordsRecordIDMoreLikeThisFormat

This feature returns a set of search results that are similar (ie have similar metadata) to a specific record.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.APICalls.GetRecordsRecordIDMoreLikeThisFormat(ctx, operations.GetRecordsRecordIDMoreLikeThisFormatRequest{
        AuthenticationToken: sdk.String("aspernatur"),
        Fields: sdk.String("perferendis"),
        Filtering: sdk.String("ad"),
        Format: shared.FormatEnumXML,
        MltFields: sdk.String("sed"),
        RecordID: 612096,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRecordsRecordIDMoreLikeThisFormat200ApplicationJSONObject != nil {
        // handle response
    }
}
```
