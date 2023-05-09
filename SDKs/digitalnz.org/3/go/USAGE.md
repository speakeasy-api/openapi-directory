<!-- Start SDK Example Usage -->
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
        AuthenticationToken: sdk.String("corrupti"),
        AndCategory: operations.GetRecordsFormatAndCategoryEnumResearchPapers.ToPointer(),
        AndCentury: sdk.String("distinctio"),
        AndCollection: sdk.String("quibusdam"),
        AndContentPartner: sdk.String("unde"),
        AndCreator: sdk.String("nulla"),
        AndDate: sdk.String("corrupti"),
        AndDcType: sdk.String("illum"),
        AndDecade: sdk.String("vel"),
        AndFormat: sdk.String("error"),
        AndHasLargeThumbnailURL: operations.GetRecordsFormatAndHasLargeThumbnailURLEnumY.ToPointer(),
        AndHasLatLng: sdk.Bool(false),
        AndIsCommercialUse: sdk.Bool(false),
        AndOrFilterField: sdk.String("deserunt"),
        AndPlacename: sdk.String("suscipit"),
        AndPrimaryCollection: sdk.String("iure"),
        AndSubject: sdk.String("magnam"),
        AndTitle: sdk.String("debitis"),
        AndUsage: operations.GetRecordsFormatAndUsageEnumShare.ToPointer(),
        AndYear: sdk.String("delectus"),
        Direction: operations.GetRecordsFormatDirectionEnumAsc.ToPointer(),
        ExcludeFiltersFromFacets: sdk.Bool(false),
        Facets: []GetRecordsFormatFacetsEnum{
            operations.GetRecordsFormatFacetsEnumDecade,
            operations.GetRecordsFormatFacetsEnumCopyright,
        },
        FacetsPage: sdk.Int64(812169),
        FacetsPerPage: sdk.Int64(528895),
        Fields: sdk.String("iusto"),
        Format: shared.FormatEnumXML,
        GeoBbox: sdk.String("nisi"),
        Page: sdk.Int64(925597),
        PerPage: sdk.Int64(836079),
        Sort: operations.GetRecordsFormatSortEnumSyndicationDate.ToPointer(),
        Text: sdk.String("quis"),
        WithoutFilterField: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRecordsFormat200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->