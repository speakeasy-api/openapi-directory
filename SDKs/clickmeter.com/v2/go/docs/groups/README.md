# Groups

### Available Operations

* [GroupsCount](#groupscount) - Count the groups associated to the user.
* [GroupsDelete](#groupsdelete) - Delete group specified by id
* [GroupsGet](#groupsget) - List of all the groups associated to the user.
* [GroupsGetDatapoints](#groupsgetdatapoints) - List of all the datapoints associated to the user in this group.
* [GroupsGetDatapointsCount](#groupsgetdatapointscount) - Count the datapoints associated to the user in this group.
* [GroupsGetDatapointsSummary](#groupsgetdatapointssummary) - Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
* [GroupsGetHits](#groupsgethits) - Retrieve the list of events related to this group.
* [GroupsGetStatisticsAggregatedSingle](#groupsgetstatisticsaggregatedsingle) - Retrieve statistics about this customer for a timeframe by groups
* [GroupsGetStatisticsAllList](#groupsgetstatisticsalllist) - Retrieve statistics about all groups of this customer for a timeframe grouped by some temporal entity (day/week/month)
* [GroupsGetStatisticsList](#groupsgetstatisticslist) - Retrieve statistics about this group for a timeframe grouped by some temporal entity (day/week/month)
* [GroupsGetStatisticsSingle](#groupsgetstatisticssingle) - Retrieve statistics about this group for a timeframe
* [GroupsPatchFavourite](#groupspatchfavourite) - Fast switch the "favourite" field of a group
* [GroupsPatchNotesForm](#groupspatchnotesform) - Fast patch the "notes" field of a group
* [GroupsPatchNotesJSON](#groupspatchnotesjson) - Fast patch the "notes" field of a group
* [GroupsPatchNotesRaw](#groupspatchnotesraw) - Fast patch the "notes" field of a group
* [GroupsPost](#groupspost) - Update a group
* [GroupsPut](#groupsput) - Create a group
* [GroupsPutDatapoint](#groupsputdatapoint) - Create a datapoint in this group
* [GetGroupsID](#getgroupsid) - Get a group

## GroupsCount

Count the groups associated to the user.

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
    res, err := s.Groups.GroupsCount(ctx, operations.GroupsCountRequest{
        CreatedAfter: sdk.String("quibusdam"),
        CreatedBefore: sdk.String("odio"),
        Status: operations.GroupsCountStatusEnumActive.ToPointer(),
        Tags: sdk.String("odit"),
        TextSearch: sdk.String("explicabo"),
        Write: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesCountResponce != nil {
        // handle response
    }
}
```

## GroupsDelete

Delete group specified by id

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
    res, err := s.Groups.GroupsDelete(ctx, operations.GroupsDeleteRequest{
        ID: 358995,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## GroupsGet

List of all the groups associated to the user.

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
    res, err := s.Groups.GroupsGet(ctx, operations.GroupsGetRequest{
        CreatedAfter: sdk.String("error"),
        CreatedBefore: sdk.String("earum"),
        Limit: sdk.Int(239337),
        Offset: sdk.Int(923306),
        Status: operations.GroupsGetStatusEnumActive.ToPointer(),
        Tags: sdk.String("ut"),
        TextSearch: sdk.String("quidem"),
        Write: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## GroupsGetDatapoints

List of all the datapoints associated to the user in this group.

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
    res, err := s.Groups.GroupsGetDatapoints(ctx, operations.GroupsGetDatapointsRequest{
        CreatedAfter: sdk.String("quis"),
        CreatedBefore: sdk.String("beatae"),
        ID: 600213,
        Limit: sdk.Int(476946),
        Offset: sdk.Int(963198),
        OnlyFavorites: sdk.Bool(false),
        SortBy: sdk.String("cupiditate"),
        SortDirection: operations.GroupsGetDatapointsSortDirectionEnumAsc.ToPointer(),
        Status: operations.GroupsGetDatapointsStatusEnumActive.ToPointer(),
        Tags: sdk.String("numquam"),
        TextSearch: sdk.String("nesciunt"),
        Type: operations.GroupsGetDatapointsTypeEnumTl.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## GroupsGetDatapointsCount

Count the datapoints associated to the user in this group.

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
    res, err := s.Groups.GroupsGetDatapointsCount(ctx, operations.GroupsGetDatapointsCountRequest{
        CreatedAfter: sdk.String("officia"),
        CreatedBefore: sdk.String("dignissimos"),
        ID: 760744,
        OnlyFavorites: sdk.Bool(false),
        Status: operations.GroupsGetDatapointsCountStatusEnumSpam.ToPointer(),
        Tags: sdk.String("corporis"),
        TextSearch: sdk.String("qui"),
        Type: operations.GroupsGetDatapointsCountTypeEnumTl.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesCountResponce != nil {
        // handle response
    }
}
```

## GroupsGetDatapointsSummary

Retrieve statistics about a subset of datapoints for a timeframe with datapoints data

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
    res, err := s.Groups.GroupsGetDatapointsSummary(ctx, operations.GroupsGetDatapointsSummaryRequest{
        Favourite: sdk.Bool(false),
        FromDay: sdk.String("voluptatum"),
        ID: 587375,
        Limit: sdk.Int(326269),
        Offset: sdk.Int(809594),
        SortBy: sdk.String("enim"),
        SortDirection: operations.GroupsGetDatapointsSummarySortDirectionEnumAsc.ToPointer(),
        Status: operations.GroupsGetDatapointsSummaryStatusEnumDeleted.ToPointer(),
        Tag: sdk.String("minus"),
        TextSearch: sdk.String("eum"),
        TimeFrame: operations.GroupsGetDatapointsSummaryTimeFrameEnumLast30,
        ToDay: sdk.String("corporis"),
        Type: operations.GroupsGetDatapointsSummaryTypeEnumTp.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAggregatedAggregatedSummaryResult != nil {
        // handle response
    }
}
```

## GroupsGetHits

Retrieve the list of events related to this group.

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
    res, err := s.Groups.GroupsGetHits(ctx, operations.GroupsGetHitsRequest{
        Filter: operations.GroupsGetHitsFilterEnumConversions.ToPointer(),
        FromDay: sdk.String("maiores"),
        ID: 731744,
        Limit: sdk.Int(46013),
        Offset: sdk.String("libero"),
        Timeframe: operations.GroupsGetHitsTimeframeEnumLast7,
        ToDay: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoClickStreamHitListPage != nil {
        // handle response
    }
}
```

## GroupsGetStatisticsAggregatedSingle

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
    res, err := s.Groups.GroupsGetStatisticsAggregatedSingle(ctx, operations.GroupsGetStatisticsAggregatedSingleRequest{
        Favourite: sdk.Bool(false),
        FromDay: sdk.String("totam"),
        Hourly: sdk.Bool(false),
        Status: operations.GroupsGetStatisticsAggregatedSingleStatusEnumActive.ToPointer(),
        Tag: sdk.String("voluptas"),
        TimeFrame: operations.GroupsGetStatisticsAggregatedSingleTimeFrameEnumLastyear,
        ToDay: sdk.String("velit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAggregatedAggregatedResult != nil {
        // handle response
    }
}
```

## GroupsGetStatisticsAllList

Retrieve statistics about all groups of this customer for a timeframe grouped by some temporal entity (day/week/month)

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
    res, err := s.Groups.GroupsGetStatisticsAllList(ctx, operations.GroupsGetStatisticsAllListRequest{
        Favourite: sdk.Bool(false),
        FromDay: sdk.String("minus"),
        GroupBy: operations.GroupsGetStatisticsAllListGroupByEnumActive.ToPointer(),
        Status: sdk.String("nostrum"),
        Tag: sdk.String("est"),
        TimeFrame: operations.GroupsGetStatisticsAllListTimeFrameEnumLastyear,
        ToDay: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult != nil {
        // handle response
    }
}
```

## GroupsGetStatisticsList

Retrieve statistics about this group for a timeframe grouped by some temporal entity (day/week/month)

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
    res, err := s.Groups.GroupsGetStatisticsList(ctx, operations.GroupsGetStatisticsListRequest{
        FromDay: sdk.String("tempore"),
        GroupBy: operations.GroupsGetStatisticsListGroupByEnumMonth.ToPointer(),
        ID: 141506,
        TimeFrame: operations.GroupsGetStatisticsListTimeFrameEnumCustom,
        ToDay: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult != nil {
        // handle response
    }
}
```

## GroupsGetStatisticsSingle

Retrieve statistics about this group for a timeframe

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
    res, err := s.Groups.GroupsGetStatisticsSingle(ctx, operations.GroupsGetStatisticsSingleRequest{
        FromDay: sdk.String("nemo"),
        Hourly: sdk.Bool(false),
        ID: 441321,
        TimeFrame: operations.GroupsGetStatisticsSingleTimeFrameEnumToday,
        ToDay: sdk.String("odio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAggregatedAggregatedResult != nil {
        // handle response
    }
}
```

## GroupsPatchFavourite

Fast switch the "favourite" field of a group

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
    res, err := s.Groups.GroupsPatchFavourite(ctx, operations.GroupsPatchFavouriteRequest{
        ID: 325297,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## GroupsPatchNotesForm

Fast patch the "notes" field of a group

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
    res, err := s.Groups.GroupsPatchNotesForm(ctx, operations.GroupsPatchNotesFormRequest{
        APICoreRequestsGenericTextPatch: shared.APICoreRequestsGenericTextPatch{
            Text: sdk.String("in"),
        },
        ID: 496915,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## GroupsPatchNotesJSON

Fast patch the "notes" field of a group

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
    res, err := s.Groups.GroupsPatchNotesJSON(ctx, operations.GroupsPatchNotesJSONRequest{
        APICoreRequestsGenericTextPatch: shared.APICoreRequestsGenericTextPatch{
            Text: sdk.String("excepturi"),
        },
        ID: 172195,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## GroupsPatchNotesRaw

Fast patch the "notes" field of a group

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
    res, err := s.Groups.GroupsPatchNotesRaw(ctx, operations.GroupsPatchNotesRawRequest{
        RequestBody: []byte("error"),
        ID: 85076,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## GroupsPost

Update a group

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
    res, err := s.Groups.GroupsPost(ctx, operations.GroupsPostRequest{
        APICoreDtoGroupsGroup: shared.APICoreDtoGroupsGroup{
            CreationDate: sdk.String("20120203120530"),
            Deleted: sdk.Bool(false),
            ID: sdk.Int64(498180),
            IsPublic: sdk.Bool(false),
            Name: sdk.String("Meredith Watsica"),
            Notes: sdk.String("ex"),
            Preferred: sdk.Bool(false),
            RedirectOnly: sdk.Bool(false),
            Tags: []shared.APICoreDtoTagsTag{
                shared.APICoreDtoTagsTag{
                    Datapoints: []int64{
                        888616,
                        810839,
                    },
                    Groups: []int64{
                        348192,
                        463344,
                        211455,
                    },
                    ID: sdk.Int64(264619),
                    Name: sdk.String("Bobbie Terry"),
                },
                shared.APICoreDtoTagsTag{
                    Datapoints: []int64{
                        120120,
                        936928,
                        334474,
                    },
                    Groups: []int64{
                        175372,
                        724994,
                        115898,
                    },
                    ID: sdk.Int64(164488),
                    Name: sdk.String("Robin Bednar"),
                },
            },
            WritePermited: sdk.Bool(false),
        },
        ID: 87382,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## GroupsPut

Create a group

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
    res, err := s.Groups.GroupsPut(ctx, shared.APICoreDtoGroupsGroup{
        CreationDate: sdk.String("20120203120530"),
        Deleted: sdk.Bool(false),
        ID: sdk.Int64(96450),
        IsPublic: sdk.Bool(false),
        Name: sdk.String("Freda Renner"),
        Notes: sdk.String("nemo"),
        Preferred: sdk.Bool(false),
        RedirectOnly: sdk.Bool(false),
        Tags: []shared.APICoreDtoTagsTag{
            shared.APICoreDtoTagsTag{
                Datapoints: []int64{
                    988749,
                    757364,
                },
                Groups: []int64{
                    314573,
                    944950,
                    657319,
                },
                ID: sdk.Int64(559774),
                Name: sdk.String("Dr. Virgil Kuhic V"),
            },
            shared.APICoreDtoTagsTag{
                Datapoints: []int64{
                    826862,
                    731634,
                    725574,
                },
                Groups: []int64{
                    38557,
                },
                ID: sdk.Int64(963976),
                Name: sdk.String("Bennie Emmerich"),
            },
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

## GroupsPutDatapoint

Create a datapoint in this group

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
    res, err := s.Groups.GroupsPutDatapoint(ctx, operations.GroupsPutDatapointRequest{
        APICoreDtoDatapointsDatapoint: shared.APICoreDtoDatapointsDatapoint{
            CreationDate: sdk.String("20120203120530"),
            EncodeIP: sdk.Bool(false),
            FifthConversionID: sdk.Int64(644420),
            FifthConversionName: sdk.String("doloremque"),
            FirstConversionID: sdk.Int64(339756),
            FirstConversionName: sdk.String("veniam"),
            FourthConversionID: sdk.Int64(727481),
            FourthConversionName: sdk.String("architecto"),
            GroupID: sdk.Int64(584593),
            GroupName: sdk.String("molestiae"),
            ID: sdk.Int64(756654),
            IsPublic: sdk.Bool(false),
            IsSecured: sdk.Bool(false),
            LightTracking: sdk.Bool(false),
            Name: sdk.String("Kyle Gusikowski"),
            Notes: sdk.String("asperiores"),
            Preferred: sdk.Bool(false),
            RedirectOnly: sdk.Bool(false),
            SecondConversionID: sdk.Int64(330267),
            SecondConversionName: sdk.String("consequuntur"),
            Status: shared.APICoreDtoDatapointsDatapointStatusEnumDeleted.ToPointer(),
            Tags: []shared.APICoreDtoTagsTag{
                shared.APICoreDtoTagsTag{
                    Datapoints: []int64{
                        863477,
                    },
                    Groups: []int64{
                        347698,
                    },
                    ID: sdk.Int64(68852),
                    Name: sdk.String("Flora Renner"),
                },
                shared.APICoreDtoTagsTag{
                    Datapoints: []int64{
                        503748,
                        718627,
                    },
                    Groups: []int64{
                        335977,
                        391933,
                    },
                    ID: sdk.Int64(727771),
                    Name: sdk.String("Carroll Purdy"),
                },
                shared.APICoreDtoTagsTag{
                    Datapoints: []int64{
                        974589,
                        162358,
                        891581,
                        290841,
                    },
                    Groups: []int64{
                        179795,
                        440777,
                        345506,
                    },
                    ID: sdk.Int64(207296),
                    Name: sdk.String("Genevieve Lebsack"),
                },
            },
            ThirdConversionID: sdk.Int64(604078),
            ThirdConversionName: sdk.String("officiis"),
            Title: sdk.String("Ms."),
            TrackingCode: sdk.String("dolor"),
            Type: shared.APICoreDtoDatapointsDatapointTypeEnumTrackingLink.ToPointer(),
            TypeTL: &shared.APICoreDtoDatapointsTrackingLinkSpecifics{
                AppendQuery: sdk.Bool(false),
                BrowserDestinationItem: &shared.APICoreDtoDatapointsBrowserBaseDestinationItem{
                    EmailDestinationURL: sdk.String("error"),
                    MobileDestinationURL: sdk.String("porro"),
                    SpidersDestinationURL: sdk.String("vitae"),
                },
                DestinationMode: shared.APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnumDynamicURL.ToPointer(),
                DomainID: sdk.Int(458970),
                EncodeURL: sdk.Bool(false),
                ExpirationClicks: sdk.Int64(854115),
                ExpirationDate: sdk.String("20120203120530"),
                FirstURL: sdk.String("ad"),
                GoDomainID: sdk.Int(134818),
                HideURL: sdk.Bool(false),
                HideURLTitle: sdk.String("enim"),
                IsABTest: sdk.Bool(false),
                Password: sdk.String("delectus"),
                PauseAfterClicksExpiration: sdk.Bool(false),
                PauseAfterDateExpiration: sdk.Bool(false),
                RandomDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                    shared.APICoreDtoDatapointsMultipleDestinationItem{
                        URL: sdk.String("dignissimos"),
                    },
                    shared.APICoreDtoDatapointsMultipleDestinationItem{
                        URL: sdk.String("libero"),
                    },
                },
                RedirectType: shared.APICoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnumPermanentRedirect.ToPointer(),
                ReferrerClean: shared.APICoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnumNone.ToPointer(),
                Scripts: []shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                    shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                        ID: sdk.Int64(879174),
                        Name: sdk.String("Geoffrey Hartmann"),
                    },
                    shared.APICoreDtoDatapointsDatapointRetargetingInfo{
                        ID: sdk.Int64(939161),
                        Name: sdk.String("Maxine Hilll"),
                    },
                },
                SequentialDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                    shared.APICoreDtoDatapointsMultipleDestinationItem{
                        URL: sdk.String("nihil"),
                    },
                },
                SpilloverDestinationItems: []shared.APICoreDtoDatapointsMultipleDestinationItem{
                    shared.APICoreDtoDatapointsMultipleDestinationItem{
                        URL: sdk.String("illo"),
                    },
                    shared.APICoreDtoDatapointsMultipleDestinationItem{
                        URL: sdk.String("labore"),
                    },
                    shared.APICoreDtoDatapointsMultipleDestinationItem{
                        URL: sdk.String("assumenda"),
                    },
                },
                UniqueDestinationItem: &shared.APICoreDtoDatapointsUniqueDestinationItem{
                    FirstDestinationURL: sdk.String("aliquam"),
                },
                URL: sdk.String("quisquam"),
                URLAfterClicksExpiration: sdk.String("provident"),
                URLAfterDateExpiration: sdk.String("laudantium"),
                UrlsByLanguage: []shared.APICoreDtoDatapointsURLByLanguageItem{
                    shared.APICoreDtoDatapointsURLByLanguageItem{
                        LanguageCode: sdk.String("consequatur"),
                        URL: sdk.String("maxime"),
                    },
                    shared.APICoreDtoDatapointsURLByLanguageItem{
                        LanguageCode: sdk.String("aspernatur"),
                        URL: sdk.String("nam"),
                    },
                    shared.APICoreDtoDatapointsURLByLanguageItem{
                        LanguageCode: sdk.String("expedita"),
                        URL: sdk.String("quas"),
                    },
                    shared.APICoreDtoDatapointsURLByLanguageItem{
                        LanguageCode: sdk.String("provident"),
                        URL: sdk.String("repudiandae"),
                    },
                },
                UrlsByNation: []shared.APICoreDtoDatapointsURLByNationItem{
                    shared.APICoreDtoDatapointsURLByNationItem{
                        Nation: sdk.String("dignissimos"),
                        URL: sdk.String("corporis"),
                    },
                    shared.APICoreDtoDatapointsURLByNationItem{
                        Nation: sdk.String("vero"),
                        URL: sdk.String("similique"),
                    },
                    shared.APICoreDtoDatapointsURLByNationItem{
                        Nation: sdk.String("repellendus"),
                        URL: sdk.String("iure"),
                    },
                },
                WeightedDestinationItems: []shared.APICoreDtoDatapointsWeightedDestinationItem{
                    shared.APICoreDtoDatapointsWeightedDestinationItem{
                        URL: sdk.String("commodi"),
                        Weight: sdk.Int(771226),
                    },
                },
            },
            TypeTP: &shared.APICoreDtoDatapointsTrackingPixelSpecifics{
                ParameterNote: sdk.String("commodi"),
            },
            WritePermited: sdk.Bool(false),
        },
        ID: 12171,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## GetGroupsID

Get a group

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
    res, err := s.Groups.GetGroupsID(ctx, operations.GetGroupsIDRequest{
        ID: 32055,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoGroupsGroup != nil {
        // handle response
    }
}
```
