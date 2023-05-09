# Shopping

### Available Operations

* [GetFlightOffers](#getflightoffers) - Return list of Flight Offers based on searching criteria.
* [SearchFlightOffers](#searchflightoffers) - Return list of Flight Offers based on posted searching criteria.

## GetFlightOffers

Return list of Flight Offers based on searching criteria.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Shopping.GetFlightOffers(ctx, operations.GetFlightOffersRequest{
        Adults: 56713,
        Children: sdk.Int64(963663),
        CurrencyCode: sdk.String("tempora"),
        DepartureDate: types.MustDateFromString("2022-07-10"),
        DestinationLocationCode: "minus",
        ExcludedAirlineCodes: sdk.String("placeat"),
        IncludedAirlineCodes: sdk.String("voluptatum"),
        Infants: sdk.Int64(479977),
        Max: sdk.Int64(568045),
        MaxPrice: sdk.Int64(392785),
        NonStop: sdk.Bool(false),
        OriginLocationCode: "recusandae",
        ReturnDate: types.MustDateFromString("2022-10-15"),
        TravelClass: operations.GetFlightOffersTravelClassEnumPremiumEconomy.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Success != nil {
        // handle response
    }
}
```

## SearchFlightOffers

Return list of Flight Offers based on posted searching criteria.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Shopping.SearchFlightOffers(ctx, operations.SearchFlightOffersRequest{
        GetFlightOffersQuery: shared.GetFlightOffersQuery{
            CurrencyCode: sdk.String("EUR"),
            OriginDestinations: []shared.OriginDestination{
                shared.OriginDestination{
                    AlternativeDestinationsCodes: []string{
                        "perferendis",
                        "ipsam",
                        "repellendus",
                    },
                    AlternativeOriginsCodes: []string{
                        "quo",
                        "odit",
                        "at",
                        "at",
                    },
                    ArrivalDateTimeRange: &shared.DateTimeRange{
                        Date: types.MustDateFromString("2018-09-22"),
                        DateWindow: sdk.String("I3D"),
                        Time: sdk.String("10:30:00"),
                        TimeWindow: sdk.String("2H"),
                    },
                    DepartureDateTimeRange: &shared.DateTimeRange{
                        Date: types.MustDateFromString("2018-09-22"),
                        DateWindow: sdk.String("I3D"),
                        Time: sdk.String("10:30:00"),
                        TimeWindow: sdk.String("2H"),
                    },
                    DestinationLocationCode: sdk.String("NYC"),
                    DestinationRadius: sdk.Float64(200),
                    ExcludedConnectionPoints: []string{
                        "molestiae",
                        "quod",
                        "quod",
                        "esse",
                    },
                    ID: sdk.String("1"),
                    IncludedConnectionPoints: []string{
                        "porro",
                        "dolorum",
                        "dicta",
                    },
                    OriginLocationCode: sdk.String("PAR"),
                    OriginRadius: sdk.Float64(200),
                },
            },
            SearchCriteria: &shared.SearchCriteria{
                AddOneWayOffers: sdk.Bool(true),
                AdditionalInformation: &shared.SearchCriteriaAdditionalInformation{
                    BrandedFares: sdk.Bool(true),
                    ChargeableCheckedBags: sdk.Bool(true),
                },
                AllowAlternativeFareOptions: sdk.Bool(true),
                ExcludeAllotments: sdk.Bool(false),
                FlightFilters: &shared.SearchCriteriaFlightFilters{
                    BusSegmentAllowed: sdk.Bool(true),
                    CabinRestrictions: []shared.SearchCriteriaFlightFiltersCabinRestriction{
                        shared.SearchCriteriaFlightFiltersCabinRestriction{
                            Cabin: shared.TravelClassEnumPremiumEconomy.ToPointer(),
                            Coverage: shared.CoverageEnumMostSegments.ToPointer(),
                            OriginDestinationIds: []string{
                                "occaecati",
                                "fugit",
                                "deleniti",
                            },
                        },
                        shared.SearchCriteriaFlightFiltersCabinRestriction{
                            Cabin: shared.TravelClassEnumPremiumEconomy.ToPointer(),
                            Coverage: shared.CoverageEnumMostSegments.ToPointer(),
                            OriginDestinationIds: []string{
                                "optio",
                                "totam",
                                "beatae",
                                "commodi",
                            },
                        },
                        shared.SearchCriteriaFlightFiltersCabinRestriction{
                            Cabin: shared.TravelClassEnumPremiumEconomy.ToPointer(),
                            Coverage: shared.CoverageEnumMostSegments.ToPointer(),
                            OriginDestinationIds: []string{
                                "modi",
                                "qui",
                            },
                        },
                    },
                    CarrierRestrictions: &shared.SearchCriteriaFlightFiltersCarrierRestrictions{
                        BlacklistedInEUAllowed: sdk.Bool(false),
                        ExcludedCarrierCodes: []string{
                            "cum",
                            "esse",
                            "ipsum",
                            "excepturi",
                        },
                        IncludedCarrierCodes: []string{
                            "perferendis",
                        },
                    },
                    ConnectionRestriction: &shared.SearchCriteriaFlightFiltersConnectionRestriction{
                        AirportChangeAllowed: sdk.Bool(false),
                        MaxNumberOfConnections: sdk.Float64(2),
                        TechnicalStopsAllowed: sdk.Bool(true),
                    },
                    CrossBorderAllowed: sdk.Bool(false),
                    MaxFlightTime: sdk.Float64(200),
                    MoreOvernightsAllowed: sdk.Bool(false),
                    RailSegmentAllowed: sdk.Bool(true),
                    ReturnToDepartureAirport: sdk.Bool(false),
                },
                MaxFlightOffers: sdk.Float64(250),
                MaxPrice: sdk.Int64(100),
                OneFlightOfferPerDay: sdk.Bool(true),
                PricingOptions: &shared.ExtendedPricingOptions{
                    IncludedCheckedBagsOnly: sdk.Bool(true),
                },
            },
            Sources: []shared.FlightOfferSourceEnum{
                shared.FlightOfferSourceEnumGds,
                shared.FlightOfferSourceEnumGds,
            },
            Travelers: []shared.Traveler{
                shared.Traveler{
                    AssociatedAdultID: sdk.String("sed"),
                    ID: "1",
                    TravelerType: shared.TravelerTypeEnumAdult,
                },
                shared.Traveler{
                    AssociatedAdultID: sdk.String("iste"),
                    ID: "1",
                    TravelerType: shared.TravelerTypeEnumAdult,
                },
                shared.Traveler{
                    AssociatedAdultID: sdk.String("dolor"),
                    ID: "1",
                    TravelerType: shared.TravelerTypeEnumAdult,
                },
            },
        },
        XHTTPMethodOverride: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Success != nil {
        // handle response
    }
}
```
