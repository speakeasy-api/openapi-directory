# DataPoints

### Available Operations

* [DataPointsBatchDelete](#datapointsbatchdelete) - Delete multiple datapoints
* [DataPointsBatchPost](#datapointsbatchpost) - Update multiple datapoints
* [DataPointsBatchPut](#datapointsbatchput) - Create multiple datapoints
* [DataPointsCount](#datapointscount) - Count the datapoints associated to the user
* [DataPointsDelete](#datapointsdelete) - Delete a datapoint
* [DataPointsGet](#datapointsget) - List of all the datapoints associated to the user
* [DataPointsGetHits](#datapointsgethits) - Retrieve the list of events related to this datapoint.
* [DataPointsGetStatisticsAggregatedSingle](#datapointsgetstatisticsaggregatedsingle) - Retrieve statistics about this customer for a timeframe by groups
* [DataPointsGetStatisticsAllList](#datapointsgetstatisticsalllist) - Retrieve statistics about all datapoints of this customer for a timeframe grouped by some temporal entity (day/week/month)
* [DataPointsGetStatisticsList](#datapointsgetstatisticslist) - Retrieve statistics about this datapoint for a timeframe grouped by some temporal entity (day/week/month)
* [DataPointsGetStatisticsSingle](#datapointsgetstatisticssingle) - Retrieve statistics about this datapoint for a timeframe
* [DataPointsPatchFavourite](#datapointspatchfavourite) - Fast switch the "favourite" field of a datapoint
* [DataPointsPatchNotesForm](#datapointspatchnotesform) - Fast patch the "notes" field of a datapoint
* [DataPointsPatchNotesJSON](#datapointspatchnotesjson) - Fast patch the "notes" field of a datapoint
* [DataPointsPatchNotesRaw](#datapointspatchnotesraw) - Fast patch the "notes" field of a datapoint
* [DataPointsPost](#datapointspost) - Update a datapoint
* [DataPointsPut](#datapointsput) - Create a datapoint
* [GetDatapointsID](#getdatapointsid) - Get a datapoint

## DataPointsBatchDelete

Delete multiple datapoints

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DataPoints.DataPointsBatchDelete(ctx, shared.APICoreRequestsDeleteBatch{
        Entities: []shared.APICoreDtoEntityURILong{
            shared.APICoreDtoEntityURILong{
                ID: sdk.Int64(410492),
                URI: sdk.String("http://incomplete-socks.biz"),
            },
            shared.APICoreDtoEntityURILong{
                ID: sdk.Int64(189848),
                URI: sdk.String("http://mad-caboose.biz"),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesModifyBatchItemResponceAPICoreDtoDatapointsDatapointSystemInt64 != nil {
        // handle response
    }
}
```

## DataPointsBatchPost

Update multiple datapoints

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DataPoints.DataPointsBatchPost(ctx, shared.APICoreRequestsDatapointsBatch{
        List: []shared.APICoreDtoDatapointsDatapoint{
            shared.APICoreDtoDatapointsDatapoint{
                CreationDate: sdk.String("20120203120530"),
                EncodeIP: sdk.Bool(false),
                FifthConversionID: sdk.Int64(97844),
                FifthConversionName: sdk.String("ex"),
                FirstConversionID: sdk.Int64(862192),
                FirstConversionName: sdk.String("excepturi"),
                FourthConversionID: sdk.Int64(972920),
                FourthConversionName: sdk.String("nostrum"),
                GroupID: sdk.Int64(960835),
                GroupName: sdk.String("quisquam"),
                ID: sdk.Int64(906556),
                IsPublic: sdk.Bool(false),
                IsSecured: sdk.Bool(false),
                LightTracking: sdk.Bool(false),
                Name: sdk.String("Krista Herzog"),
                Notes: sdk.String("inventore"),
                Preferred: sdk.Bool(false),
                RedirectOnly: sdk.Bool(false),
                SecondConversionID: sdk.Int64(301831),
                SecondConversionName: sdk.String("ea"),
                Status: shared.APICoreDtoDatapointsDatapointStatusEnumDeleted.ToPointer(),
                Tags: []shared.APICoreDtoTagsTag{
                    shared.APICoreDtoTagsTag{
                        Datapoints: []int64{
                            132487,
                            325310,
                            53427,
                            952871,
                        },
                        Groups: []int64{
                            13948,
                            11427,
                            533466,
                        },
                        ID: sdk.Int64(770581),
                        Name: sdk.String("Mrs. Denise Tillman MD"),
                    },
                },
                ThirdConversionID: sdk.Int64(672048),
                ThirdConversionName: sdk.String("placeat"),
                Title: sdk.String("Mrs."),
                TrackingCode: sdk.String("eum"),
                Type: shared.APICoreDtoDatapointsDatapointTypeEnumTrackingLink.ToPointer(),
                TypeTL: &shared.APICoreDtoDatapointsTrackingLinkSpecifics{
                    AppendQuery: sdk.Bool(false),
                    BrowserDestinationItem: &shared.APICoreDtoDatapointsBrowserBaseDestinationItem{
                        EmailDestinationURL: sdk.String("nobis"),
                        MobileDestinationURL: sdk.String("quas"),
                        SpidersDestinationURL: sdk.String("assumenda"),
                    },
                    DestinationMode: shared.APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnumSequentialDestination.ToPointer(),
                    DomainID: sdk.Int(379034),
                    EncodeURL: sdk.Bool(false),
                    ExpirationClicks: sdk.Int64(727044),
                    ExpirationDate: sdk.String("20120203120530"),
                    FirstURL: sdk.String("quasi"),
                    GoDomainID: sdk.Int(270328),
                    HideURL: sdk.Bool(false),
                    HideURLTitle: sdk.String("numquam"),
                    IsABTest: sdk.Bool(false),
                    Password: sdk.String("explicabo"),
                    PauseAfterClicksExpiration: sdk.Bool(false),
                    PauseAfterDateExpiration: sdk.Bool(false),
                    RandomDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("ipsa"),
                        },
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("molestiae"),
                        },
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("magnam"),
                        },
                    },
                    RedirectType: shared.APICoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnumPermanentRedirect.ToPointer(),
                    ReferrerClean: shared.APICoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnumNone.ToPointer(),
                    Scripts: []shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                        shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                            ID: sdk.Int64(456141),
                            Name: sdk.String("Blake Kihn"),
                        },
                        shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                            ID: sdk.Int64(283519),
                            Name: sdk.String("Yolanda Shields"),
                        },
                    },
                    SequentialDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("veritatis"),
                        },
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("ipsa"),
                        },
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("id"),
                        },
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("quidem"),
                        },
                    },
                    SpilloverDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("quo"),
                        },
                    },
                    UniqueDestinationItem: &shared.APICoreDtoDatapointsUniqueDestinationItem{
                        FirstDestinationURL: sdk.String("illum"),
                    },
                    URL: sdk.String("quo"),
                    URLAfterClicksExpiration: sdk.String("fuga"),
                    URLAfterDateExpiration: sdk.String("eius"),
                    UrlsByLanguage: []shared.APICoreDtoDatapointsURLByLanguageItem{
                        shared.APICoreDtoDatapointsURLByLanguageItem{
                            LanguageCode: sdk.String("voluptas"),
                            URL: sdk.String("ab"),
                        },
                    },
                    UrlsByNation: []shared.APICoreDtoDatapointsURLByNationItem{
                        shared.APICoreDtoDatapointsURLByNationItem{
                            Nation: sdk.String("consequatur"),
                            URL: sdk.String("tempora"),
                        },
                        shared.APICoreDtoDatapointsURLByNationItem{
                            Nation: sdk.String("debitis"),
                            URL: sdk.String("ipsam"),
                        },
                        shared.APICoreDtoDatapointsURLByNationItem{
                            Nation: sdk.String("aspernatur"),
                            URL: sdk.String("sequi"),
                        },
                    },
                    WeightedDestinationItems: []shared.APICoreDtoDatapointsWeightedDestinationItem{
                        shared.APICoreDtoDatapointsWeightedDestinationItem{
                            URL: sdk.String("esse"),
                            Weight: sdk.Int(925164),
                        },
                        shared.APICoreDtoDatapointsWeightedDestinationItem{
                            URL: sdk.String("aperiam"),
                            Weight: sdk.Int(715179),
                        },
                        shared.APICoreDtoDatapointsWeightedDestinationItem{
                            URL: sdk.String("quod"),
                            Weight: sdk.Int(490819),
                        },
                        shared.APICoreDtoDatapointsWeightedDestinationItem{
                            URL: sdk.String("inventore"),
                            Weight: sdk.Int(469498),
                        },
                    },
                },
                TypeTP: &shared.APICoreDtoDatapointsTrackingPixelSpecifics{
                    ParameterNote: sdk.String("totam"),
                },
                WritePermited: sdk.Bool(false),
            },
            shared.APICoreDtoDatapointsDatapoint{
                CreationDate: sdk.String("20120203120530"),
                EncodeIP: sdk.Bool(false),
                FifthConversionID: sdk.Int64(882710),
                FifthConversionName: sdk.String("aliquam"),
                FirstConversionID: sdk.Int64(488410),
                FirstConversionName: sdk.String("occaecati"),
                FourthConversionID: sdk.Int64(414567),
                FourthConversionName: sdk.String("sapiente"),
                GroupID: sdk.Int64(174112),
                GroupName: sdk.String("deserunt"),
                ID: sdk.Int64(475289),
                IsPublic: sdk.Bool(false),
                IsSecured: sdk.Bool(false),
                LightTracking: sdk.Bool(false),
                Name: sdk.String("Robyn Keeling"),
                Notes: sdk.String("consequuntur"),
                Preferred: sdk.Bool(false),
                RedirectOnly: sdk.Bool(false),
                SecondConversionID: sdk.Int64(536178),
                SecondConversionName: sdk.String("fugit"),
                Status: shared.APICoreDtoDatapointsDatapointStatusEnumAbuse.ToPointer(),
                Tags: []shared.APICoreDtoTagsTag{
                    shared.APICoreDtoTagsTag{
                        Datapoints: []int64{
                            539224,
                            128860,
                        },
                        Groups: []int64{
                            392676,
                            147014,
                        },
                        ID: sdk.Int64(956406),
                        Name: sdk.String("Norma Christiansen"),
                    },
                    shared.APICoreDtoTagsTag{
                        Datapoints: []int64{
                            92260,
                            456911,
                            910545,
                        },
                        Groups: []int64{
                            82971,
                            458604,
                            800379,
                            724168,
                        },
                        ID: sdk.Int64(877131),
                        Name: sdk.String("Frances Turner"),
                    },
                    shared.APICoreDtoTagsTag{
                        Datapoints: []int64{
                            699622,
                            580197,
                        },
                        Groups: []int64{
                            716244,
                            756779,
                        },
                        ID: sdk.Int64(27069),
                        Name: sdk.String("Randolph Fisher"),
                    },
                },
                ThirdConversionID: sdk.Int64(9766),
                ThirdConversionName: sdk.String("minus"),
                Title: sdk.String("Mrs."),
                TrackingCode: sdk.String("sapiente"),
                Type: shared.APICoreDtoDatapointsDatapointTypeEnumTrackingLink.ToPointer(),
                TypeTL: &shared.APICoreDtoDatapointsTrackingLinkSpecifics{
                    AppendQuery: sdk.Bool(false),
                    BrowserDestinationItem: &shared.APICoreDtoDatapointsBrowserBaseDestinationItem{
                        EmailDestinationURL: sdk.String("esse"),
                        MobileDestinationURL: sdk.String("blanditiis"),
                        SpidersDestinationURL: sdk.String("provident"),
                    },
                    DestinationMode: shared.APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnumWeightedDestination.ToPointer(),
                    DomainID: sdk.Int(857723),
                    EncodeURL: sdk.Bool(false),
                    ExpirationClicks: sdk.Int64(557811),
                    ExpirationDate: sdk.String("20120203120530"),
                    FirstURL: sdk.String("esse"),
                    GoDomainID: sdk.Int(97468),
                    HideURL: sdk.Bool(false),
                    HideURLTitle: sdk.String("a"),
                    IsABTest: sdk.Bool(false),
                    Password: sdk.String("error"),
                    PauseAfterClicksExpiration: sdk.Bool(false),
                    PauseAfterDateExpiration: sdk.Bool(false),
                    RandomDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("pariatur"),
                        },
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("possimus"),
                        },
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("quia"),
                        },
                    },
                    RedirectType: shared.APICoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnumTemporaryRedirect.ToPointer(),
                    ReferrerClean: shared.APICoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnumMyself.ToPointer(),
                    Scripts: []shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                        shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                            ID: sdk.Int64(85001),
                            Name: sdk.String("Ann Murphy"),
                        },
                        shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                            ID: sdk.Int64(949298),
                            Name: sdk.String("Lila Kassulke"),
                        },
                        shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                            ID: sdk.Int64(727697),
                            Name: sdk.String("Gerardo Bartoletti"),
                        },
                        shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                            ID: sdk.Int64(119771),
                            Name: sdk.String("Delores Hermiston IV"),
                        },
                    },
                    SequentialDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("quibusdam"),
                        },
                    },
                    SpilloverDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("deleniti"),
                        },
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("itaque"),
                        },
                    },
                    UniqueDestinationItem: &shared.APICoreDtoDatapointsUniqueDestinationItem{
                        FirstDestinationURL: sdk.String("dolorum"),
                    },
                    URL: sdk.String("architecto"),
                    URLAfterClicksExpiration: sdk.String("omnis"),
                    URLAfterDateExpiration: sdk.String("tenetur"),
                    UrlsByLanguage: []shared.APICoreDtoDatapointsURLByLanguageItem{
                        shared.APICoreDtoDatapointsURLByLanguageItem{
                            LanguageCode: sdk.String("at"),
                            URL: sdk.String("et"),
                        },
                    },
                    UrlsByNation: []shared.APICoreDtoDatapointsURLByNationItem{
                        shared.APICoreDtoDatapointsURLByNationItem{
                            Nation: sdk.String("ipsa"),
                            URL: sdk.String("minima"),
                        },
                        shared.APICoreDtoDatapointsURLByNationItem{
                            Nation: sdk.String("veritatis"),
                            URL: sdk.String("consectetur"),
                        },
                    },
                    WeightedDestinationItems: []shared.APICoreDtoDatapointsWeightedDestinationItem{
                        shared.APICoreDtoDatapointsWeightedDestinationItem{
                            URL: sdk.String("iste"),
                            Weight: sdk.Int(839513),
                        },
                    },
                },
                TypeTP: &shared.APICoreDtoDatapointsTrackingPixelSpecifics{
                    ParameterNote: sdk.String("accusantium"),
                },
                WritePermited: sdk.Bool(false),
            },
            shared.APICoreDtoDatapointsDatapoint{
                CreationDate: sdk.String("20120203120530"),
                EncodeIP: sdk.Bool(false),
                FifthConversionID: sdk.Int64(522371),
                FifthConversionName: sdk.String("aut"),
                FirstConversionID: sdk.Int64(513075),
                FirstConversionName: sdk.String("eum"),
                FourthConversionID: sdk.Int64(649832),
                FourthConversionName: sdk.String("ab"),
                GroupID: sdk.Int64(544591),
                GroupName: sdk.String("non"),
                ID: sdk.Int64(32465),
                IsPublic: sdk.Bool(false),
                IsSecured: sdk.Bool(false),
                LightTracking: sdk.Bool(false),
                Name: sdk.String("Toni Fritsch"),
                Notes: sdk.String("voluptas"),
                Preferred: sdk.Bool(false),
                RedirectOnly: sdk.Bool(false),
                SecondConversionID: sdk.Int64(12036),
                SecondConversionName: sdk.String("dignissimos"),
                Status: shared.APICoreDtoDatapointsDatapointStatusEnumActive.ToPointer(),
                Tags: []shared.APICoreDtoTagsTag{
                    shared.APICoreDtoTagsTag{
                        Datapoints: []int64{
                            244651,
                            974257,
                            374323,
                        },
                        Groups: []int64{
                            45659,
                            409054,
                            310067,
                            162954,
                        },
                        ID: sdk.Int64(831520),
                        Name: sdk.String("Simon Kuhn"),
                    },
                    shared.APICoreDtoTagsTag{
                        Datapoints: []int64{
                            65304,
                            312753,
                        },
                        Groups: []int64{
                            801836,
                            288398,
                            70447,
                            241418,
                        },
                        ID: sdk.Int64(683573),
                        Name: sdk.String("Ricardo Franecki"),
                    },
                    shared.APICoreDtoTagsTag{
                        Datapoints: []int64{
                            517309,
                            853940,
                            424089,
                            497678,
                        },
                        Groups: []int64{
                            427834,
                            287051,
                            822560,
                        },
                        ID: sdk.Int64(706575),
                        Name: sdk.String("Leslie King"),
                    },
                    shared.APICoreDtoTagsTag{
                        Datapoints: []int64{
                            363161,
                            924967,
                            397533,
                            46007,
                        },
                        Groups: []int64{
                            232627,
                            449083,
                            348519,
                        },
                        ID: sdk.Int64(937285),
                        Name: sdk.String("Jesus Yost"),
                    },
                },
                ThirdConversionID: sdk.Int64(697142),
                ThirdConversionName: sdk.String("saepe"),
                Title: sdk.String("Dr."),
                TrackingCode: sdk.String("dolore"),
                Type: shared.APICoreDtoDatapointsDatapointTypeEnumTrackingLink.ToPointer(),
                TypeTL: &shared.APICoreDtoDatapointsTrackingLinkSpecifics{
                    AppendQuery: sdk.Bool(false),
                    BrowserDestinationItem: &shared.APICoreDtoDatapointsBrowserBaseDestinationItem{
                        EmailDestinationURL: sdk.String("asperiores"),
                        MobileDestinationURL: sdk.String("adipisci"),
                        SpidersDestinationURL: sdk.String("non"),
                    },
                    DestinationMode: shared.APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnumDestinationByLanguage.ToPointer(),
                    DomainID: sdk.Int(105906),
                    EncodeURL: sdk.Bool(false),
                    ExpirationClicks: sdk.Int64(489509),
                    ExpirationDate: sdk.String("20120203120530"),
                    FirstURL: sdk.String("a"),
                    GoDomainID: sdk.Int(891523),
                    HideURL: sdk.Bool(false),
                    HideURLTitle: sdk.String("consectetur"),
                    IsABTest: sdk.Bool(false),
                    Password: sdk.String("corporis"),
                    PauseAfterClicksExpiration: sdk.Bool(false),
                    PauseAfterDateExpiration: sdk.Bool(false),
                    RandomDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("laboriosam"),
                        },
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("ipsa"),
                        },
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("voluptates"),
                        },
                    },
                    RedirectType: shared.APICoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnumTemporaryRedirect.ToPointer(),
                    ReferrerClean: shared.APICoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnumNone.ToPointer(),
                    Scripts: []shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                        shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                            ID: sdk.Int64(631126),
                            Name: sdk.String("Kelly Hoeger"),
                        },
                        shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                            ID: sdk.Int64(324405),
                            Name: sdk.String("Wilbur Ferry"),
                        },
                        shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                            ID: sdk.Int64(503934),
                            Name: sdk.String("Valerie Haag"),
                        },
                        shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                            ID: sdk.Int64(351870),
                            Name: sdk.String("Karla Kuvalis"),
                        },
                    },
                    SequentialDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("culpa"),
                        },
                    },
                    SpilloverDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("pariatur"),
                        },
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("totam"),
                        },
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("hic"),
                        },
                    },
                    UniqueDestinationItem: &shared.APICoreDtoDatapointsUniqueDestinationItem{
                        FirstDestinationURL: sdk.String("exercitationem"),
                    },
                    URL: sdk.String("nobis"),
                    URLAfterClicksExpiration: sdk.String("sit"),
                    URLAfterDateExpiration: sdk.String("rerum"),
                    UrlsByLanguage: []shared.APICoreDtoDatapointsURLByLanguageItem{
                        shared.APICoreDtoDatapointsURLByLanguageItem{
                            LanguageCode: sdk.String("reiciendis"),
                            URL: sdk.String("explicabo"),
                        },
                    },
                    UrlsByNation: []shared.APICoreDtoDatapointsURLByNationItem{
                        shared.APICoreDtoDatapointsURLByNationItem{
                            Nation: sdk.String("facilis"),
                            URL: sdk.String("voluptate"),
                        },
                        shared.APICoreDtoDatapointsURLByNationItem{
                            Nation: sdk.String("expedita"),
                            URL: sdk.String("ab"),
                        },
                        shared.APICoreDtoDatapointsURLByNationItem{
                            Nation: sdk.String("iste"),
                            URL: sdk.String("dolore"),
                        },
                        shared.APICoreDtoDatapointsURLByNationItem{
                            Nation: sdk.String("laborum"),
                            URL: sdk.String("sed"),
                        },
                    },
                    WeightedDestinationItems: []shared.APICoreDtoDatapointsWeightedDestinationItem{
                        shared.APICoreDtoDatapointsWeightedDestinationItem{
                            URL: sdk.String("commodi"),
                            Weight: sdk.Int(696077),
                        },
                        shared.APICoreDtoDatapointsWeightedDestinationItem{
                            URL: sdk.String("explicabo"),
                            Weight: sdk.Int(378326),
                        },
                    },
                },
                TypeTP: &shared.APICoreDtoDatapointsTrackingPixelSpecifics{
                    ParameterNote: sdk.String("unde"),
                },
                WritePermited: sdk.Bool(false),
            },
            shared.APICoreDtoDatapointsDatapoint{
                CreationDate: sdk.String("20120203120530"),
                EncodeIP: sdk.Bool(false),
                FifthConversionID: sdk.Int64(100032),
                FifthConversionName: sdk.String("suscipit"),
                FirstConversionID: sdk.Int64(960257),
                FirstConversionName: sdk.String("debitis"),
                FourthConversionID: sdk.Int64(72434),
                FourthConversionName: sdk.String("reiciendis"),
                GroupID: sdk.Int64(19300),
                GroupName: sdk.String("corrupti"),
                ID: sdk.Int64(979574),
                IsPublic: sdk.Bool(false),
                IsSecured: sdk.Bool(false),
                LightTracking: sdk.Bool(false),
                Name: sdk.String("Tammy Medhurst"),
                Notes: sdk.String("ipsum"),
                Preferred: sdk.Bool(false),
                RedirectOnly: sdk.Bool(false),
                SecondConversionID: sdk.Int64(406733),
                SecondConversionName: sdk.String("occaecati"),
                Status: shared.APICoreDtoDatapointsDatapointStatusEnumAbuse.ToPointer(),
                Tags: []shared.APICoreDtoTagsTag{
                    shared.APICoreDtoTagsTag{
                        Datapoints: []int64{
                            273009,
                            455444,
                        },
                        Groups: []int64{
                            401713,
                            25497,
                            248413,
                            888044,
                        },
                        ID: sdk.Int64(505866),
                        Name: sdk.String("Alex Gottlieb"),
                    },
                    shared.APICoreDtoTagsTag{
                        Datapoints: []int64{
                            26522,
                            750595,
                            625637,
                        },
                        Groups: []int64{
                            329543,
                            924159,
                        },
                        ID: sdk.Int64(967122),
                        Name: sdk.String("Martin Beatty"),
                    },
                    shared.APICoreDtoTagsTag{
                        Datapoints: []int64{
                            446135,
                            889234,
                        },
                        Groups: []int64{
                            512452,
                        },
                        ID: sdk.Int64(348476),
                        Name: sdk.String("Bennie Howe"),
                    },
                    shared.APICoreDtoTagsTag{
                        Datapoints: []int64{
                            944708,
                            710529,
                            892863,
                        },
                        Groups: []int64{
                            677115,
                        },
                        ID: sdk.Int64(341698),
                        Name: sdk.String("Lorenzo Lowe"),
                    },
                },
                ThirdConversionID: sdk.Int64(543678),
                ThirdConversionName: sdk.String("fugit"),
                Title: sdk.String("Mrs."),
                TrackingCode: sdk.String("fugiat"),
                Type: shared.APICoreDtoDatapointsDatapointTypeEnumTrackingLink.ToPointer(),
                TypeTL: &shared.APICoreDtoDatapointsTrackingLinkSpecifics{
                    AppendQuery: sdk.Bool(false),
                    BrowserDestinationItem: &shared.APICoreDtoDatapointsBrowserBaseDestinationItem{
                        EmailDestinationURL: sdk.String("culpa"),
                        MobileDestinationURL: sdk.String("expedita"),
                        SpidersDestinationURL: sdk.String("magnam"),
                    },
                    DestinationMode: shared.APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnumSimple.ToPointer(),
                    DomainID: sdk.Int(460220),
                    EncodeURL: sdk.Bool(false),
                    ExpirationClicks: sdk.Int64(372679),
                    ExpirationDate: sdk.String("20120203120530"),
                    FirstURL: sdk.String("sit"),
                    GoDomainID: sdk.Int(530537),
                    HideURL: sdk.Bool(false),
                    HideURLTitle: sdk.String("quas"),
                    IsABTest: sdk.Bool(false),
                    Password: sdk.String("repudiandae"),
                    PauseAfterClicksExpiration: sdk.Bool(false),
                    PauseAfterDateExpiration: sdk.Bool(false),
                    RandomDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("et"),
                        },
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("blanditiis"),
                        },
                    },
                    RedirectType: shared.APICoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnumPermanentRedirect.ToPointer(),
                    ReferrerClean: shared.APICoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnumNone.ToPointer(),
                    Scripts: []shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                        shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                            ID: sdk.Int64(425508),
                            Name: sdk.String("Mrs. Tricia Mueller"),
                        },
                    },
                    SequentialDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("harum"),
                        },
                    },
                    SpilloverDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("architecto"),
                        },
                    },
                    UniqueDestinationItem: &shared.APICoreDtoDatapointsUniqueDestinationItem{
                        FirstDestinationURL: sdk.String("occaecati"),
                    },
                    URL: sdk.String("labore"),
                    URLAfterClicksExpiration: sdk.String("quidem"),
                    URLAfterDateExpiration: sdk.String("atque"),
                    UrlsByLanguage: []shared.APICoreDtoDatapointsURLByLanguageItem{
                        shared.APICoreDtoDatapointsURLByLanguageItem{
                            LanguageCode: sdk.String("nam"),
                            URL: sdk.String("tenetur"),
                        },
                        shared.APICoreDtoDatapointsURLByLanguageItem{
                            LanguageCode: sdk.String("laboriosam"),
                            URL: sdk.String("alias"),
                        },
                        shared.APICoreDtoDatapointsURLByLanguageItem{
                            LanguageCode: sdk.String("amet"),
                            URL: sdk.String("deserunt"),
                        },
                    },
                    UrlsByNation: []shared.APICoreDtoDatapointsURLByNationItem{
                        shared.APICoreDtoDatapointsURLByNationItem{
                            Nation: sdk.String("unde"),
                            URL: sdk.String("reiciendis"),
                        },
                        shared.APICoreDtoDatapointsURLByNationItem{
                            Nation: sdk.String("provident"),
                            URL: sdk.String("repellendus"),
                        },
                    },
                    WeightedDestinationItems: []shared.APICoreDtoDatapointsWeightedDestinationItem{
                        shared.APICoreDtoDatapointsWeightedDestinationItem{
                            URL: sdk.String("voluptates"),
                            Weight: sdk.Int(16871),
                        },
                        shared.APICoreDtoDatapointsWeightedDestinationItem{
                            URL: sdk.String("est"),
                            Weight: sdk.Int(696483),
                        },
                        shared.APICoreDtoDatapointsWeightedDestinationItem{
                            URL: sdk.String("reprehenderit"),
                            Weight: sdk.Int(813679),
                        },
                        shared.APICoreDtoDatapointsWeightedDestinationItem{
                            URL: sdk.String("fuga"),
                            Weight: sdk.Int(509807),
                        },
                    },
                },
                TypeTP: &shared.APICoreDtoDatapointsTrackingPixelSpecifics{
                    ParameterNote: sdk.String("mollitia"),
                },
                WritePermited: sdk.Bool(false),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesModifyBatchItemResponceAPICoreDtoDatapointsDatapointSystemInt64 != nil {
        // handle response
    }
}
```

## DataPointsBatchPut

Create multiple datapoints

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DataPoints.DataPointsBatchPut(ctx, shared.APICoreRequestsDatapointsBatch{
        List: []shared.APICoreDtoDatapointsDatapoint{
            shared.APICoreDtoDatapointsDatapoint{
                CreationDate: sdk.String("20120203120530"),
                EncodeIP: sdk.Bool(false),
                FifthConversionID: sdk.Int64(29100),
                FifthConversionName: sdk.String("quisquam"),
                FirstConversionID: sdk.Int64(919532),
                FirstConversionName: sdk.String("quasi"),
                FourthConversionID: sdk.Int64(542457),
                FourthConversionName: sdk.String("reprehenderit"),
                GroupID: sdk.Int64(991142),
                GroupName: sdk.String("totam"),
                ID: sdk.Int64(383103),
                IsPublic: sdk.Bool(false),
                IsSecured: sdk.Bool(false),
                LightTracking: sdk.Bool(false),
                Name: sdk.String("Simon Borer"),
                Notes: sdk.String("assumenda"),
                Preferred: sdk.Bool(false),
                RedirectOnly: sdk.Bool(false),
                SecondConversionID: sdk.Int64(410301),
                SecondConversionName: sdk.String("atque"),
                Status: shared.APICoreDtoDatapointsDatapointStatusEnumAbuse.ToPointer(),
                Tags: []shared.APICoreDtoTagsTag{
                    shared.APICoreDtoTagsTag{
                        Datapoints: []int64{
                            880107,
                            618826,
                            328303,
                            133461,
                        },
                        Groups: []int64{
                            980581,
                            544647,
                        },
                        ID: sdk.Int64(871786),
                        Name: sdk.String("Guy Hoeger"),
                    },
                    shared.APICoreDtoTagsTag{
                        Datapoints: []int64{
                            120919,
                            923306,
                            680697,
                        },
                        Groups: []int64{
                            287119,
                            968287,
                            42976,
                            919783,
                        },
                        ID: sdk.Int64(116098),
                        Name: sdk.String("Teresa Daniel"),
                    },
                    shared.APICoreDtoTagsTag{
                        Datapoints: []int64{
                            952143,
                        },
                        Groups: []int64{
                            300029,
                            906355,
                            160467,
                        },
                        ID: sdk.Int64(580107),
                        Name: sdk.String("Freddie King"),
                    },
                    shared.APICoreDtoTagsTag{
                        Datapoints: []int64{
                            160230,
                            145870,
                            661118,
                        },
                        Groups: []int64{
                            440264,
                            625528,
                        },
                        ID: sdk.Int64(76486),
                        Name: sdk.String("Melody Vandervort"),
                    },
                },
                ThirdConversionID: sdk.Int64(39615),
                ThirdConversionName: sdk.String("iure"),
                Title: sdk.String("Mr."),
                TrackingCode: sdk.String("totam"),
                Type: shared.APICoreDtoDatapointsDatapointTypeEnumTrackingLink.ToPointer(),
                TypeTL: &shared.APICoreDtoDatapointsTrackingLinkSpecifics{
                    AppendQuery: sdk.Bool(false),
                    BrowserDestinationItem: &shared.APICoreDtoDatapointsBrowserBaseDestinationItem{
                        EmailDestinationURL: sdk.String("molestiae"),
                        MobileDestinationURL: sdk.String("eveniet"),
                        SpidersDestinationURL: sdk.String("qui"),
                    },
                    DestinationMode: shared.APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnumUniqueDestination.ToPointer(),
                    DomainID: sdk.Int(434761),
                    EncodeURL: sdk.Bool(false),
                    ExpirationClicks: sdk.Int64(898063),
                    ExpirationDate: sdk.String("20120203120530"),
                    FirstURL: sdk.String("ratione"),
                    GoDomainID: sdk.Int(672582),
                    HideURL: sdk.Bool(false),
                    HideURLTitle: sdk.String("distinctio"),
                    IsABTest: sdk.Bool(false),
                    Password: sdk.String("voluptatum"),
                    PauseAfterClicksExpiration: sdk.Bool(false),
                    PauseAfterDateExpiration: sdk.Bool(false),
                    RandomDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("aliquam"),
                        },
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("ad"),
                        },
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("repellat"),
                        },
                    },
                    RedirectType: shared.APICoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnumPermanentRedirect.ToPointer(),
                    ReferrerClean: shared.APICoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnumClean.ToPointer(),
                    Scripts: []shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                        shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                            ID: sdk.Int64(470649),
                            Name: sdk.String("Shane Abshire"),
                        },
                        shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                            ID: sdk.Int64(174658),
                            Name: sdk.String("Warren Greenholt"),
                        },
                        shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                            ID: sdk.Int64(63207),
                            Name: sdk.String("Arturo Hagenes"),
                        },
                    },
                    SequentialDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("culpa"),
                        },
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("adipisci"),
                        },
                    },
                    SpilloverDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("laudantium"),
                        },
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("eum"),
                        },
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("nemo"),
                        },
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("recusandae"),
                        },
                    },
                    UniqueDestinationItem: &shared.APICoreDtoDatapointsUniqueDestinationItem{
                        FirstDestinationURL: sdk.String("esse"),
                    },
                    URL: sdk.String("provident"),
                    URLAfterClicksExpiration: sdk.String("quis"),
                    URLAfterDateExpiration: sdk.String("eum"),
                    UrlsByLanguage: []shared.APICoreDtoDatapointsURLByLanguageItem{
                        shared.APICoreDtoDatapointsURLByLanguageItem{
                            LanguageCode: sdk.String("provident"),
                            URL: sdk.String("aspernatur"),
                        },
                        shared.APICoreDtoDatapointsURLByLanguageItem{
                            LanguageCode: sdk.String("ullam"),
                            URL: sdk.String("quasi"),
                        },
                        shared.APICoreDtoDatapointsURLByLanguageItem{
                            LanguageCode: sdk.String("animi"),
                            URL: sdk.String("nostrum"),
                        },
                        shared.APICoreDtoDatapointsURLByLanguageItem{
                            LanguageCode: sdk.String("mollitia"),
                            URL: sdk.String("provident"),
                        },
                    },
                    UrlsByNation: []shared.APICoreDtoDatapointsURLByNationItem{
                        shared.APICoreDtoDatapointsURLByNationItem{
                            Nation: sdk.String("animi"),
                            URL: sdk.String("ex"),
                        },
                        shared.APICoreDtoDatapointsURLByNationItem{
                            Nation: sdk.String("aliquid"),
                            URL: sdk.String("accusantium"),
                        },
                        shared.APICoreDtoDatapointsURLByNationItem{
                            Nation: sdk.String("repellat"),
                            URL: sdk.String("doloribus"),
                        },
                        shared.APICoreDtoDatapointsURLByNationItem{
                            Nation: sdk.String("ullam"),
                            URL: sdk.String("in"),
                        },
                    },
                    WeightedDestinationItems: []shared.APICoreDtoDatapointsWeightedDestinationItem{
                        shared.APICoreDtoDatapointsWeightedDestinationItem{
                            URL: sdk.String("earum"),
                            Weight: sdk.Int(637583),
                        },
                        shared.APICoreDtoDatapointsWeightedDestinationItem{
                            URL: sdk.String("laborum"),
                            Weight: sdk.Int(813054),
                        },
                        shared.APICoreDtoDatapointsWeightedDestinationItem{
                            URL: sdk.String("modi"),
                            Weight: sdk.Int(976226),
                        },
                    },
                },
                TypeTP: &shared.APICoreDtoDatapointsTrackingPixelSpecifics{
                    ParameterNote: sdk.String("molestias"),
                },
                WritePermited: sdk.Bool(false),
            },
            shared.APICoreDtoDatapointsDatapoint{
                CreationDate: sdk.String("20120203120530"),
                EncodeIP: sdk.Bool(false),
                FifthConversionID: sdk.Int64(889794),
                FifthConversionName: sdk.String("sapiente"),
                FirstConversionID: sdk.Int64(764562),
                FirstConversionName: sdk.String("vitae"),
                FourthConversionID: sdk.Int64(698249),
                FourthConversionName: sdk.String("tempora"),
                GroupID: sdk.Int64(335498),
                GroupName: sdk.String("inventore"),
                ID: sdk.Int64(147685),
                IsPublic: sdk.Bool(false),
                IsSecured: sdk.Bool(false),
                LightTracking: sdk.Bool(false),
                Name: sdk.String("Scott Bahringer"),
                Notes: sdk.String("eum"),
                Preferred: sdk.Bool(false),
                RedirectOnly: sdk.Bool(false),
                SecondConversionID: sdk.Int64(260628),
                SecondConversionName: sdk.String("rem"),
                Status: shared.APICoreDtoDatapointsDatapointStatusEnumDeleted.ToPointer(),
                Tags: []shared.APICoreDtoTagsTag{
                    shared.APICoreDtoTagsTag{
                        Datapoints: []int64{
                            958741,
                        },
                        Groups: []int64{
                            117320,
                            325118,
                        },
                        ID: sdk.Int64(107004),
                        Name: sdk.String("Rene Weber"),
                    },
                    shared.APICoreDtoTagsTag{
                        Datapoints: []int64{
                            52508,
                            935833,
                            596211,
                            983427,
                        },
                        Groups: []int64{
                            399802,
                            780931,
                            380335,
                            211534,
                        },
                        ID: sdk.Int64(147808),
                        Name: sdk.String("Grant Dickens"),
                    },
                    shared.APICoreDtoTagsTag{
                        Datapoints: []int64{
                            8931,
                            97258,
                            90233,
                            497777,
                        },
                        Groups: []int64{
                            581082,
                            382440,
                            241557,
                        },
                        ID: sdk.Int64(96562),
                        Name: sdk.String("Melba Stokes I"),
                    },
                    shared.APICoreDtoTagsTag{
                        Datapoints: []int64{
                            473190,
                            115834,
                        },
                        Groups: []int64{
                            457059,
                            508390,
                        },
                        ID: sdk.Int64(979963),
                        Name: sdk.String("Ben Bradtke Sr."),
                    },
                },
                ThirdConversionID: sdk.Int64(483706),
                ThirdConversionName: sdk.String("tempora"),
                Title: sdk.String("Ms."),
                TrackingCode: sdk.String("ex"),
                Type: shared.APICoreDtoDatapointsDatapointTypeEnumTrackingLink.ToPointer(),
                TypeTL: &shared.APICoreDtoDatapointsTrackingLinkSpecifics{
                    AppendQuery: sdk.Bool(false),
                    BrowserDestinationItem: &shared.APICoreDtoDatapointsBrowserBaseDestinationItem{
                        EmailDestinationURL: sdk.String("aliquid"),
                        MobileDestinationURL: sdk.String("ipsa"),
                        SpidersDestinationURL: sdk.String("laborum"),
                    },
                    DestinationMode: shared.APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnumRandomDestination.ToPointer(),
                    DomainID: sdk.Int(344718),
                    EncodeURL: sdk.Bool(false),
                    ExpirationClicks: sdk.Int64(856756),
                    ExpirationDate: sdk.String("20120203120530"),
                    FirstURL: sdk.String("expedita"),
                    GoDomainID: sdk.Int(399667),
                    HideURL: sdk.Bool(false),
                    HideURLTitle: sdk.String("officia"),
                    IsABTest: sdk.Bool(false),
                    Password: sdk.String("suscipit"),
                    PauseAfterClicksExpiration: sdk.Bool(false),
                    PauseAfterDateExpiration: sdk.Bool(false),
                    RandomDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("perferendis"),
                        },
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("eum"),
                        },
                    },
                    RedirectType: shared.APICoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnumPermanentRedirect.ToPointer(),
                    ReferrerClean: shared.APICoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnumClean.ToPointer(),
                    Scripts: []shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                        shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                            ID: sdk.Int64(70042),
                            Name: sdk.String("Woodrow Volkman"),
                        },
                        shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                            ID: sdk.Int64(726343),
                            Name: sdk.String("Dr. Cassandra Halvorson"),
                        },
                        shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                            ID: sdk.Int64(775803),
                            Name: sdk.String("Debbie Hammes V"),
                        },
                    },
                    SequentialDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("aliquid"),
                        },
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("beatae"),
                        },
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("voluptatum"),
                        },
                    },
                    SpilloverDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("veritatis"),
                        },
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("rerum"),
                        },
                        shared.APICoreDtoDatapointsMultipleDestinationItem{
                            URL: sdk.String("est"),
                        },
                    },
                    UniqueDestinationItem: &shared.APICoreDtoDatapointsUniqueDestinationItem{
                        FirstDestinationURL: sdk.String("culpa"),
                    },
                    URL: sdk.String("voluptatem"),
                    URLAfterClicksExpiration: sdk.String("sapiente"),
                    URLAfterDateExpiration: sdk.String("officiis"),
                    UrlsByLanguage: []shared.APICoreDtoDatapointsURLByLanguageItem{
                        shared.APICoreDtoDatapointsURLByLanguageItem{
                            LanguageCode: sdk.String("fuga"),
                            URL: sdk.String("pariatur"),
                        },
                    },
                    UrlsByNation: []shared.APICoreDtoDatapointsURLByNationItem{
                        shared.APICoreDtoDatapointsURLByNationItem{
                            Nation: sdk.String("voluptatem"),
                            URL: sdk.String("alias"),
                        },
                        shared.APICoreDtoDatapointsURLByNationItem{
                            Nation: sdk.String("deleniti"),
                            URL: sdk.String("earum"),
                        },
                        shared.APICoreDtoDatapointsURLByNationItem{
                            Nation: sdk.String("ex"),
                            URL: sdk.String("sapiente"),
                        },
                        shared.APICoreDtoDatapointsURLByNationItem{
                            Nation: sdk.String("rem"),
                            URL: sdk.String("minus"),
                        },
                    },
                    WeightedDestinationItems: []shared.APICoreDtoDatapointsWeightedDestinationItem{
                        shared.APICoreDtoDatapointsWeightedDestinationItem{
                            URL: sdk.String("asperiores"),
                            Weight: sdk.Int(190567),
                        },
                        shared.APICoreDtoDatapointsWeightedDestinationItem{
                            URL: sdk.String("ullam"),
                            Weight: sdk.Int(19122),
                        },
                    },
                },
                TypeTP: &shared.APICoreDtoDatapointsTrackingPixelSpecifics{
                    ParameterNote: sdk.String("illum"),
                },
                WritePermited: sdk.Bool(false),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesModifyBatchItemResponceAPICoreDtoDatapointsDatapointSystemInt64 != nil {
        // handle response
    }
}
```

## DataPointsCount

Count the datapoints associated to the user

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DataPoints.DataPointsCount(ctx, operations.DataPointsCountRequest{
        CreatedAfter: sdk.String("totam"),
        CreatedBefore: sdk.String("impedit"),
        OnlyFavorites: sdk.Bool(false),
        Status: operations.DataPointsCountStatusEnumSpam.ToPointer(),
        Tags: sdk.String("nam"),
        TextSearch: sdk.String("ipsam"),
        Type: operations.DataPointsCountTypeEnumTl.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesCountResponce != nil {
        // handle response
    }
}
```

## DataPointsDelete

Delete a datapoint

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DataPoints.DataPointsDelete(ctx, operations.DataPointsDeleteRequest{
        ID: 222864,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## DataPointsGet

List of all the datapoints associated to the user

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DataPoints.DataPointsGet(ctx, operations.DataPointsGetRequest{
        CreatedAfter: sdk.String("aliquam"),
        CreatedBefore: sdk.String("inventore"),
        Limit: sdk.Int(537279),
        Offset: sdk.Int(85311),
        OnlyFavorites: sdk.Bool(false),
        SortBy: sdk.String("tempora"),
        SortDirection: operations.DataPointsGetSortDirectionEnumAsc.ToPointer(),
        Status: operations.DataPointsGetStatusEnumDeleted.ToPointer(),
        Tags: sdk.String("architecto"),
        TextSearch: sdk.String("sit"),
        Type: operations.DataPointsGetTypeEnumTp.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## DataPointsGetHits

Retrieve the list of events related to this datapoint.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DataPoints.DataPointsGetHits(ctx, operations.DataPointsGetHitsRequest{
        Filter: operations.DataPointsGetHitsFilterEnumSpiders.ToPointer(),
        FromDay: sdk.String("ab"),
        ID: 513760,
        Limit: sdk.Int(65604),
        Offset: sdk.String("dolor"),
        Timeframe: operations.DataPointsGetHitsTimeframeEnumLast180,
        ToDay: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoClickStreamHitListPage != nil {
        // handle response
    }
}
```

## DataPointsGetStatisticsAggregatedSingle

Retrieve statistics about this customer for a timeframe by groups

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DataPoints.DataPointsGetStatisticsAggregatedSingle(ctx, operations.DataPointsGetStatisticsAggregatedSingleRequest{
        Favourite: sdk.Bool(false),
        FromDay: sdk.String("consequuntur"),
        Hourly: sdk.Bool(false),
        Status: operations.DataPointsGetStatisticsAggregatedSingleStatusEnumDeleted.ToPointer(),
        Tag: sdk.String("quas"),
        TimeFrame: operations.DataPointsGetStatisticsAggregatedSingleTimeFrameEnumBeginning,
        ToDay: sdk.String("impedit"),
        Type: operations.DataPointsGetStatisticsAggregatedSingleTypeEnumTl.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAggregatedAggregatedResult != nil {
        // handle response
    }
}
```

## DataPointsGetStatisticsAllList

Retrieve statistics about all datapoints of this customer for a timeframe grouped by some temporal entity (day/week/month)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DataPoints.DataPointsGetStatisticsAllList(ctx, operations.DataPointsGetStatisticsAllListRequest{
        Favourite: sdk.Bool(false),
        FromDay: sdk.String("esse"),
        GroupBy: operations.DataPointsGetStatisticsAllListGroupByEnumMonth.ToPointer(),
        Status: operations.DataPointsGetStatisticsAllListStatusEnumDeleted.ToPointer(),
        Tag: sdk.String("veniam"),
        TimeFrame: operations.DataPointsGetStatisticsAllListTimeFrameEnumLast7,
        ToDay: sdk.String("expedita"),
        Type: operations.DataPointsGetStatisticsAllListTypeEnumTp,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult != nil {
        // handle response
    }
}
```

## DataPointsGetStatisticsList

Retrieve statistics about this datapoint for a timeframe grouped by some temporal entity (day/week/month)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DataPoints.DataPointsGetStatisticsList(ctx, operations.DataPointsGetStatisticsListRequest{
        FromDay: sdk.String("vel"),
        GroupBy: operations.DataPointsGetStatisticsListGroupByEnumMonth.ToPointer(),
        ID: 301692,
        TimeFrame: operations.DataPointsGetStatisticsListTimeFrameEnumCurrentmonth,
        ToDay: sdk.String("ab"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult != nil {
        // handle response
    }
}
```

## DataPointsGetStatisticsSingle

Retrieve statistics about this datapoint for a timeframe

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DataPoints.DataPointsGetStatisticsSingle(ctx, operations.DataPointsGetStatisticsSingleRequest{
        FromDay: sdk.String("porro"),
        Hourly: sdk.Bool(false),
        ID: 421844,
        TimeFrame: operations.DataPointsGetStatisticsSingleTimeFrameEnumLastyear,
        ToDay: sdk.String("laboriosam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAggregatedAggregatedResult != nil {
        // handle response
    }
}
```

## DataPointsPatchFavourite

Fast switch the "favourite" field of a datapoint

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DataPoints.DataPointsPatchFavourite(ctx, operations.DataPointsPatchFavouriteRequest{
        ID: 927212,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## DataPointsPatchNotesForm

Fast patch the "notes" field of a datapoint

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DataPoints.DataPointsPatchNotesForm(ctx, operations.DataPointsPatchNotesFormRequest{
        APICoreRequestsGenericTextPatch: shared.APICoreRequestsGenericTextPatch{
            Text: sdk.String("consequuntur"),
        },
        ID: 28952,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## DataPointsPatchNotesJSON

Fast patch the "notes" field of a datapoint

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DataPoints.DataPointsPatchNotesJSON(ctx, operations.DataPointsPatchNotesJSONRequest{
        APICoreRequestsGenericTextPatch: shared.APICoreRequestsGenericTextPatch{
            Text: sdk.String("exercitationem"),
        },
        ID: 895692,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## DataPointsPatchNotesRaw

Fast patch the "notes" field of a datapoint

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DataPoints.DataPointsPatchNotesRaw(ctx, operations.DataPointsPatchNotesRawRequest{
        RequestBody: []byte("quasi"),
        ID: 392569,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## DataPointsPost

Update a datapoint

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DataPoints.DataPointsPost(ctx, operations.DataPointsPostRequest{
        APICoreDtoDatapointsDatapoint: shared.APICoreDtoDatapointsDatapoint{
            CreationDate: sdk.String("20120203120530"),
            EncodeIP: sdk.Bool(false),
            FifthConversionID: sdk.Int64(871103),
            FifthConversionName: sdk.String("vero"),
            FirstConversionID: sdk.Int64(667593),
            FirstConversionName: sdk.String("harum"),
            FourthConversionID: sdk.Int64(192718),
            FourthConversionName: sdk.String("doloribus"),
            GroupID: sdk.Int64(918092),
            GroupName: sdk.String("optio"),
            ID: sdk.Int64(579681),
            IsPublic: sdk.Bool(false),
            IsSecured: sdk.Bool(false),
            LightTracking: sdk.Bool(false),
            Name: sdk.String("Allison Kuvalis"),
            Notes: sdk.String("numquam"),
            Preferred: sdk.Bool(false),
            RedirectOnly: sdk.Bool(false),
            SecondConversionID: sdk.Int64(364912),
            SecondConversionName: sdk.String("quos"),
            Status: shared.APICoreDtoDatapointsDatapointStatusEnumPaused.ToPointer(),
            Tags: []shared.APICoreDtoTagsTag{
                shared.APICoreDtoTagsTag{
                    Datapoints: []int64{
                        200516,
                        681740,
                    },
                    Groups: []int64{
                        277340,
                        97493,
                        524380,
                    },
                    ID: sdk.Int64(851854),
                    Name: sdk.String("Elsie Cronin V"),
                },
            },
            ThirdConversionID: sdk.Int64(970732),
            ThirdConversionName: sdk.String("soluta"),
            Title: sdk.String("Mr."),
            TrackingCode: sdk.String("omnis"),
            Type: shared.APICoreDtoDatapointsDatapointTypeEnumTrackingLink.ToPointer(),
            TypeTL: &shared.APICoreDtoDatapointsTrackingLinkSpecifics{
                AppendQuery: sdk.Bool(false),
                BrowserDestinationItem: &shared.APICoreDtoDatapointsBrowserBaseDestinationItem{
                    EmailDestinationURL: sdk.String("occaecati"),
                    MobileDestinationURL: sdk.String("iste"),
                    SpidersDestinationURL: sdk.String("magni"),
                },
                DestinationMode: shared.APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnumSimple.ToPointer(),
                DomainID: sdk.Int(686362),
                EncodeURL: sdk.Bool(false),
                ExpirationClicks: sdk.Int64(881897),
                ExpirationDate: sdk.String("20120203120530"),
                FirstURL: sdk.String("voluptatibus"),
                GoDomainID: sdk.Int(719620),
                HideURL: sdk.Bool(false),
                HideURLTitle: sdk.String("omnis"),
                IsABTest: sdk.Bool(false),
                Password: sdk.String("delectus"),
                PauseAfterClicksExpiration: sdk.Bool(false),
                PauseAfterDateExpiration: sdk.Bool(false),
                RandomDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                    shared.APICoreDtoDatapointsMultipleDestinationItem{
                        URL: sdk.String("praesentium"),
                    },
                    shared.APICoreDtoDatapointsMultipleDestinationItem{
                        URL: sdk.String("maxime"),
                    },
                },
                RedirectType: shared.APICoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnumPermanentRedirect.ToPointer(),
                ReferrerClean: shared.APICoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnumMyself.ToPointer(),
                Scripts: []shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                    shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                        ID: sdk.Int64(415280),
                        Name: sdk.String("Leslie Lebsack"),
                    },
                    shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                        ID: sdk.Int64(722184),
                        Name: sdk.String("Kenneth Hilpert Sr."),
                    },
                    shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                        ID: sdk.Int64(247685),
                        Name: sdk.String("Lloyd Mayer"),
                    },
                },
                SequentialDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                    shared.APICoreDtoDatapointsMultipleDestinationItem{
                        URL: sdk.String("nemo"),
                    },
                    shared.APICoreDtoDatapointsMultipleDestinationItem{
                        URL: sdk.String("reprehenderit"),
                    },
                },
                SpilloverDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                    shared.APICoreDtoDatapointsMultipleDestinationItem{
                        URL: sdk.String("quis"),
                    },
                    shared.APICoreDtoDatapointsMultipleDestinationItem{
                        URL: sdk.String("sint"),
                    },
                    shared.APICoreDtoDatapointsMultipleDestinationItem{
                        URL: sdk.String("accusamus"),
                    },
                },
                UniqueDestinationItem: &shared.APICoreDtoDatapointsUniqueDestinationItem{
                    FirstDestinationURL: sdk.String("impedit"),
                },
                URL: sdk.String("hic"),
                URLAfterClicksExpiration: sdk.String("necessitatibus"),
                URLAfterDateExpiration: sdk.String("asperiores"),
                UrlsByLanguage: []shared.APICoreDtoDatapointsURLByLanguageItem{
                    shared.APICoreDtoDatapointsURLByLanguageItem{
                        LanguageCode: sdk.String("voluptas"),
                        URL: sdk.String("debitis"),
                    },
                    shared.APICoreDtoDatapointsURLByLanguageItem{
                        LanguageCode: sdk.String("delectus"),
                        URL: sdk.String("quae"),
                    },
                },
                UrlsByNation: []shared.APICoreDtoDatapointsURLByNationItem{
                    shared.APICoreDtoDatapointsURLByNationItem{
                        Nation: sdk.String("fuga"),
                        URL: sdk.String("laborum"),
                    },
                    shared.APICoreDtoDatapointsURLByNationItem{
                        Nation: sdk.String("consectetur"),
                        URL: sdk.String("velit"),
                    },
                    shared.APICoreDtoDatapointsURLByNationItem{
                        Nation: sdk.String("atque"),
                        URL: sdk.String("ipsum"),
                    },
                    shared.APICoreDtoDatapointsURLByNationItem{
                        Nation: sdk.String("impedit"),
                        URL: sdk.String("magni"),
                    },
                },
                WeightedDestinationItems: []shared.APICoreDtoDatapointsWeightedDestinationItem{
                    shared.APICoreDtoDatapointsWeightedDestinationItem{
                        URL: sdk.String("repudiandae"),
                        Weight: sdk.Int(721430),
                    },
                    shared.APICoreDtoDatapointsWeightedDestinationItem{
                        URL: sdk.String("dolore"),
                        Weight: sdk.Int(482892),
                    },
                    shared.APICoreDtoDatapointsWeightedDestinationItem{
                        URL: sdk.String("voluptate"),
                        Weight: sdk.Int(194023),
                    },
                },
            },
            TypeTP: &shared.APICoreDtoDatapointsTrackingPixelSpecifics{
                ParameterNote: sdk.String("dignissimos"),
            },
            WritePermited: sdk.Bool(false),
        },
        ID: 205566,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## DataPointsPut

Create a datapoint

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DataPoints.DataPointsPut(ctx, shared.APICoreDtoDatapointsDatapoint{
        CreationDate: sdk.String("20120203120530"),
        EncodeIP: sdk.Bool(false),
        FifthConversionID: sdk.Int64(778172),
        FifthConversionName: sdk.String("deleniti"),
        FirstConversionID: sdk.Int64(844235),
        FirstConversionName: sdk.String("iure"),
        FourthConversionID: sdk.Int64(139072),
        FourthConversionName: sdk.String("voluptatibus"),
        GroupID: sdk.Int64(426904),
        GroupName: sdk.String("magnam"),
        ID: sdk.Int64(842855),
        IsPublic: sdk.Bool(false),
        IsSecured: sdk.Bool(false),
        LightTracking: sdk.Bool(false),
        Name: sdk.String("Dr. Muriel Reinger"),
        Notes: sdk.String("porro"),
        Preferred: sdk.Bool(false),
        RedirectOnly: sdk.Bool(false),
        SecondConversionID: sdk.Int64(304198),
        SecondConversionName: sdk.String("velit"),
        Status: shared.APICoreDtoDatapointsDatapointStatusEnumActive.ToPointer(),
        Tags: []shared.APICoreDtoTagsTag{
            shared.APICoreDtoTagsTag{
                Datapoints: []int64{
                    406922,
                    107617,
                },
                Groups: []int64{
                    568218,
                    431994,
                    246557,
                    284086,
                },
                ID: sdk.Int64(596433),
                Name: sdk.String("Keith Rutherford"),
            },
        },
        ThirdConversionID: sdk.Int64(932562),
        ThirdConversionName: sdk.String("alias"),
        Title: sdk.String("Mrs."),
        TrackingCode: sdk.String("itaque"),
        Type: shared.APICoreDtoDatapointsDatapointTypeEnumTrackingLink.ToPointer(),
        TypeTL: &shared.APICoreDtoDatapointsTrackingLinkSpecifics{
            AppendQuery: sdk.Bool(false),
            BrowserDestinationItem: &shared.APICoreDtoDatapointsBrowserBaseDestinationItem{
                EmailDestinationURL: sdk.String("laborum"),
                MobileDestinationURL: sdk.String("non"),
                SpidersDestinationURL: sdk.String("dolor"),
            },
            DestinationMode: shared.APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnumDynamicURL.ToPointer(),
            DomainID: sdk.Int(24753),
            EncodeURL: sdk.Bool(false),
            ExpirationClicks: sdk.Int64(39992),
            ExpirationDate: sdk.String("20120203120530"),
            FirstURL: sdk.String("consequatur"),
            GoDomainID: sdk.Int(639705),
            HideURL: sdk.Bool(false),
            HideURLTitle: sdk.String("recusandae"),
            IsABTest: sdk.Bool(false),
            Password: sdk.String("ea"),
            PauseAfterClicksExpiration: sdk.Bool(false),
            PauseAfterDateExpiration: sdk.Bool(false),
            RandomDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                shared.APICoreDtoDatapointsMultipleDestinationItem{
                    URL: sdk.String("voluptas"),
                },
                shared.APICoreDtoDatapointsMultipleDestinationItem{
                    URL: sdk.String("facilis"),
                },
                shared.APICoreDtoDatapointsMultipleDestinationItem{
                    URL: sdk.String("placeat"),
                },
            },
            RedirectType: shared.APICoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnumTemporaryRedirect.ToPointer(),
            ReferrerClean: shared.APICoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnumMyself.ToPointer(),
            Scripts: []shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                    ID: sdk.Int64(954334),
                    Name: sdk.String("June Miller"),
                },
                shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                    ID: sdk.Int64(769967),
                    Name: sdk.String("Dana Ortiz"),
                },
                shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                    ID: sdk.Int64(288570),
                    Name: sdk.String("Mr. Eula Feest"),
                },
            },
            SequentialDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                shared.APICoreDtoDatapointsMultipleDestinationItem{
                    URL: sdk.String("qui"),
                },
                shared.APICoreDtoDatapointsMultipleDestinationItem{
                    URL: sdk.String("iste"),
                },
            },
            SpilloverDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                shared.APICoreDtoDatapointsMultipleDestinationItem{
                    URL: sdk.String("nemo"),
                },
                shared.APICoreDtoDatapointsMultipleDestinationItem{
                    URL: sdk.String("soluta"),
                },
            },
            UniqueDestinationItem: &shared.APICoreDtoDatapointsUniqueDestinationItem{
                FirstDestinationURL: sdk.String("libero"),
            },
            URL: sdk.String("rem"),
            URLAfterClicksExpiration: sdk.String("dolorum"),
            URLAfterDateExpiration: sdk.String("odio"),
            UrlsByLanguage: []shared.APICoreDtoDatapointsURLByLanguageItem{
                shared.APICoreDtoDatapointsURLByLanguageItem{
                    LanguageCode: sdk.String("alias"),
                    URL: sdk.String("magni"),
                },
            },
            UrlsByNation: []shared.APICoreDtoDatapointsURLByNationItem{
                shared.APICoreDtoDatapointsURLByNationItem{
                    Nation: sdk.String("quae"),
                    URL: sdk.String("quae"),
                },
                shared.APICoreDtoDatapointsURLByNationItem{
                    Nation: sdk.String("modi"),
                    URL: sdk.String("neque"),
                },
            },
            WeightedDestinationItems: []shared.APICoreDtoDatapointsWeightedDestinationItem{
                shared.APICoreDtoDatapointsWeightedDestinationItem{
                    URL: sdk.String("itaque"),
                    Weight: sdk.Int(88248),
                },
                shared.APICoreDtoDatapointsWeightedDestinationItem{
                    URL: sdk.String("ipsum"),
                    Weight: sdk.Int(602229),
                },
            },
        },
        TypeTP: &shared.APICoreDtoDatapointsTrackingPixelSpecifics{
            ParameterNote: sdk.String("nulla"),
        },
        WritePermited: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## GetDatapointsID

Get a datapoint

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DataPoints.GetDatapointsID(ctx, operations.GetDatapointsIDRequest{
        ID: 714376,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoDatapointsDatapoint != nil {
        // handle response
    }
}
```
