# Analytics

### Available Operations

* [AnalyticsAudienceNameExists](#analyticsaudiencenameexists) - Returns whether audience definition exists.
* [~~AnalyticsCrashCounts~~](#analyticscrashcounts) - Available for UWP apps only. :warning: **Deprecated**
* [~~AnalyticsCrashFreeDevicePercentages~~](#analyticscrashfreedevicepercentages) - Percentage of crash-free device by day in the time range based on the selected versions. Api will return -1 if crash devices is greater than active devices. :warning: **Deprecated**
* [~~AnalyticsCrashGroupCounts~~](#analyticscrashgroupcounts) - Available for UWP apps only. :warning: **Deprecated**
* [~~AnalyticsCrashGroupModelCounts~~](#analyticscrashgroupmodelcounts) - Available for UWP apps only. :warning: **Deprecated**
* [~~AnalyticsCrashGroupOperatingSystemCounts~~](#analyticscrashgroupoperatingsystemcounts) - Available for UWP apps only. :warning: **Deprecated**
* [~~AnalyticsCrashGroupTotals~~](#analyticscrashgrouptotals) - Available for UWP apps only. :warning: **Deprecated**
* [AnalyticsCrashGroupsTotals](#analyticscrashgroupstotals) - Overall crashes and affected users count of the selected crash groups with selected versions.
* [AnalyticsCreateOrUpdateAudience](#analyticscreateorupdateaudience) - Creates or updates audience definition.
* [AnalyticsDeleteAudience](#analyticsdeleteaudience) - Deletes audience definition.
* [AnalyticsDeviceCounts](#analyticsdevicecounts) - Count of active devices by interval in the time range.
* [AnalyticsDistributionReleaseCounts](#analyticsdistributionreleasecounts) - Count of total downloads for the provided distribution releases.
* [AnalyticsEventCount](#analyticseventcount) - Count of events by interval in the time range.
* [AnalyticsEventDeviceCount](#analyticseventdevicecount) - Count of devices for an event by interval in the time range.
* [AnalyticsEventPerDeviceCount](#analyticseventperdevicecount) - Count of events per device by interval in the time range.
* [AnalyticsEventPerSessionCount](#analyticseventpersessioncount) - Count of events per session by interval in the time range.
* [AnalyticsEventProperties](#analyticseventproperties) - Event properties.
* [AnalyticsEventPropertyCounts](#analyticseventpropertycounts) - Event properties value counts during the time range in descending order.
* [AnalyticsEvents](#analyticsevents) - Count of active events in the time range ordered by event.
* [AnalyticsEventsDelete](#analyticseventsdelete) - Delete the set of Events with the specified event names.
* [AnalyticsEventsDeleteLogs](#analyticseventsdeletelogs) - Delete the set of Events with the specified event names.
* [AnalyticsGenericLogFlow](#analyticsgenericlogflow) - Logs received between the specified start time and the current time. The API will return a maximum of 100 logs per call.
* [AnalyticsGetAudience](#analyticsgetaudience) - Gets audience definition.
* [AnalyticsLanguageCounts](#analyticslanguagecounts) - Languages in the time range.
* [AnalyticsListAudiences](#analyticslistaudiences) - Get list of audiences.
* [AnalyticsListCustomProperties](#analyticslistcustomproperties) - Get list of custom properties.
* [AnalyticsListDeviceProperties](#analyticslistdeviceproperties) - Get list of device properties.
* [AnalyticsListDevicePropertyValues](#analyticslistdevicepropertyvalues) - Get list of device property values.
* [AnalyticsLogFlow](#analyticslogflow) - Logs received between the specified start time and the current time. The API will return a maximum of 100 logs per call.
* [AnalyticsModelCounts](#analyticsmodelcounts) - Models in the time range.
* [AnalyticsOperatingSystemCounts](#analyticsoperatingsystemcounts) - OSes in the time range.
* [AnalyticsPerDeviceCounts](#analyticsperdevicecounts) - Count of sessions per device in the time range.
* [AnalyticsPlaceCounts](#analyticsplacecounts) - Places in the time range.
* [AnalyticsSessionCounts](#analyticssessioncounts) - Count of sessions in the time range.
* [AnalyticsSessionDurationsDistribution](#analyticssessiondurationsdistribution) - Gets session duration.
* [AnalyticsTestAudience](#analyticstestaudience) - Tests audience definition.
* [AnalyticsVersions](#analyticsversions) - Count of active versions in the time range ordered by version.
* [AppBlockLogs](#appblocklogs) - **Warning, this operation is not reversible.** 

A successful call to this API will permanently stop ingesting any logs received via SDK by app_id, and cannot be restored. We advise caution when using this API, it is designed to permanently disable an app_id.

* [CrashesListSessionLogs](#crasheslistsessionlogs) - Get session logs by crash ID
* [DevicesBlockLogs](#devicesblocklogs) - **Warning, this operation is not reversible.**

 A successful call to this API will permanently stop ingesting any logs received via SDK for the given installation ID, and cannot be restored. We advise caution when using this API, it is designed to permanently disable collection from a specific installation of the app on a device, usually following the request from a user.


## AnalyticsAudienceNameExists

Returns whether audience definition exists.

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
    res, err := s.Analytics.AnalyticsAudienceNameExists(ctx, operations.AnalyticsAudienceNameExistsRequest{
        AppName: "cupiditate",
        AudienceName: "aperiam",
        OwnerName: "delectus",
    }, operations.AnalyticsAudienceNameExistsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~AnalyticsCrashCounts~~

Count of crashes by day in the time range based the selected versions. Available for UWP apps only.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Analytics.AnalyticsCrashCounts(ctx, operations.AnalyticsCrashCountsRequest{
        AppName: "dolorem",
        End: types.MustTimeFromString("2022-09-18T06:37:26.413Z"),
        OwnerName: "adipisci",
        Start: types.MustTimeFromString("2022-10-19T18:50:59.428Z"),
        Versions: []string{
            "aut",
        },
    }, operations.AnalyticsCrashCountsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsCrashCounts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ~~AnalyticsCrashFreeDevicePercentages~~

Percentage of crash-free device by day in the time range based on the selected versions. Api will return -1 if crash devices is greater than active devices.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Analytics.AnalyticsCrashFreeDevicePercentages(ctx, operations.AnalyticsCrashFreeDevicePercentagesRequest{
        AppName: "quas",
        End: types.MustTimeFromString("2022-12-21T21:10:14.455Z"),
        OwnerName: "est",
        Start: types.MustTimeFromString("2020-08-24T06:10:53.249Z"),
        Version: "doloribus",
    }, operations.AnalyticsCrashFreeDevicePercentagesSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsCrashFreeDevicePercentages200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ~~AnalyticsCrashGroupCounts~~

Count of crashes by day in the time range of the selected crash group with selected version. Available for UWP apps only.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Analytics.AnalyticsCrashGroupCounts(ctx, operations.AnalyticsCrashGroupCountsRequest{
        AppName: "ut",
        CrashGroupID: "facilis",
        End: types.MustTimeFromString("2022-08-21T09:49:15.782Z"),
        OwnerName: "quae",
        Start: types.MustTimeFromString("2022-01-11T11:48:15.910Z"),
        Version: "occaecati",
    }, operations.AnalyticsCrashGroupCountsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsCrashGroupCounts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ~~AnalyticsCrashGroupModelCounts~~

Top models of the selected crash group with selected version. Available for UWP apps only.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Analytics.AnalyticsCrashGroupModelCounts(ctx, operations.AnalyticsCrashGroupModelCountsRequest{
        DollarTop: sdk.Int64(977496),
        AppName: "quisquam",
        CrashGroupID: "vero",
        OwnerName: "omnis",
        Version: "quis",
    }, operations.AnalyticsCrashGroupModelCountsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsCrashGroupModelCounts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ~~AnalyticsCrashGroupOperatingSystemCounts~~

Top OSes of the selected crash group with selected version. Available for UWP apps only.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Analytics.AnalyticsCrashGroupOperatingSystemCounts(ctx, operations.AnalyticsCrashGroupOperatingSystemCountsRequest{
        DollarTop: sdk.Int64(218403),
        AppName: "delectus",
        CrashGroupID: "voluptate",
        OwnerName: "consectetur",
        Version: "vero",
    }, operations.AnalyticsCrashGroupOperatingSystemCountsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsCrashGroupOperatingSystemCounts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ~~AnalyticsCrashGroupTotals~~

Overall crashes and affected users count of the selected crash group with selected version. Available for UWP apps only.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Analytics.AnalyticsCrashGroupTotals(ctx, operations.AnalyticsCrashGroupTotalsRequest{
        AppName: "tenetur",
        CrashGroupID: "dignissimos",
        OwnerName: "hic",
        Version: "distinctio",
    }, operations.AnalyticsCrashGroupTotalsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsCrashGroupTotals200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AnalyticsCrashGroupsTotals

Overall crashes and affected users count of the selected crash groups with selected versions.

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
    res, err := s.Analytics.AnalyticsCrashGroupsTotals(ctx, operations.AnalyticsCrashGroupsTotalsRequest{
        RequestBody: operations.AnalyticsCrashGroupsTotalsRequestBody{
            CrashGroups: []AnalyticsCrashGroupsTotalsRequestBodyCrashGroups{
                operations.AnalyticsCrashGroupsTotalsRequestBodyCrashGroups{
                    AppVersion: sdk.String("odio"),
                    CrashGroupID: sdk.String("similique"),
                },
                operations.AnalyticsCrashGroupsTotalsRequestBodyCrashGroups{
                    AppVersion: sdk.String("facilis"),
                    CrashGroupID: sdk.String("vero"),
                },
                operations.AnalyticsCrashGroupsTotalsRequestBodyCrashGroups{
                    AppVersion: sdk.String("ducimus"),
                    CrashGroupID: sdk.String("dolore"),
                },
                operations.AnalyticsCrashGroupsTotalsRequestBodyCrashGroups{
                    AppVersion: sdk.String("quibusdam"),
                    CrashGroupID: sdk.String("illum"),
                },
            },
        },
        AppName: "sequi",
        OwnerName: "natus",
    }, operations.AnalyticsCrashGroupsTotalsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsCrashGroupsTotals200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## AnalyticsCreateOrUpdateAudience

Creates or updates audience definition.

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
    res, err := s.Analytics.AnalyticsCreateOrUpdateAudience(ctx, operations.AnalyticsCreateOrUpdateAudienceRequest{
        RequestBody: operations.AnalyticsCreateOrUpdateAudienceRequestBody{
            CustomProperties: map[string]AnalyticsCreateOrUpdateAudienceRequestBodyCustomPropertiesEnum{
                "aut": operations.AnalyticsCreateOrUpdateAudienceRequestBodyCustomPropertiesEnumDateTime,
                "exercitationem": operations.AnalyticsCreateOrUpdateAudienceRequestBodyCustomPropertiesEnumDateTime,
                "fugit": operations.AnalyticsCreateOrUpdateAudienceRequestBodyCustomPropertiesEnumDateTime,
                "maiores": operations.AnalyticsCreateOrUpdateAudienceRequestBodyCustomPropertiesEnumDateTime,
            },
            Definition: "iusto",
            Description: sdk.String("eligendi"),
            Enabled: sdk.Bool(false),
        },
        AppName: "ducimus",
        AudienceName: "alias",
        OwnerName: "officia",
    }, operations.AnalyticsCreateOrUpdateAudienceSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsCreateOrUpdateAudience200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AnalyticsDeleteAudience

Deletes audience definition.

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
    res, err := s.Analytics.AnalyticsDeleteAudience(ctx, operations.AnalyticsDeleteAudienceRequest{
        AppName: "tempora",
        AudienceName: "ipsam",
        OwnerName: "ea",
    }, operations.AnalyticsDeleteAudienceSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AnalyticsDeviceCounts

Count of active devices by interval in the time range.

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
    res, err := s.Analytics.AnalyticsDeviceCounts(ctx, operations.AnalyticsDeviceCountsRequest{
        AppBuild: sdk.String("aspernatur"),
        AppName: "vel",
        End: types.MustTimeFromString("2022-02-08T20:43:00.221Z"),
        OwnerName: "ratione",
        Start: types.MustTimeFromString("2022-06-28T08:50:44.084Z"),
        Versions: []string{
            "dolor",
        },
    }, operations.AnalyticsDeviceCountsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsDeviceCounts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AnalyticsDistributionReleaseCounts

Count of total downloads for the provided distribution releases.

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
    res, err := s.Analytics.AnalyticsDistributionReleaseCounts(ctx, operations.AnalyticsDistributionReleaseCountsRequest{
        RequestBody: operations.AnalyticsDistributionReleaseCountsRequestBody{
            Releases: []AnalyticsDistributionReleaseCountsRequestBodyReleases{
                operations.AnalyticsDistributionReleaseCountsRequestBodyReleases{
                    DistributionGroup: sdk.String("quasi"),
                    Release: "ex",
                },
                operations.AnalyticsDistributionReleaseCountsRequestBodyReleases{
                    DistributionGroup: sdk.String("nulla"),
                    Release: "excepturi",
                },
                operations.AnalyticsDistributionReleaseCountsRequestBodyReleases{
                    DistributionGroup: sdk.String("voluptatibus"),
                    Release: "nostrum",
                },
                operations.AnalyticsDistributionReleaseCountsRequestBodyReleases{
                    DistributionGroup: sdk.String("sapiente"),
                    Release: "quisquam",
                },
            },
        },
        AppName: "saepe",
        OwnerName: "ea",
    }, operations.AnalyticsDistributionReleaseCountsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsDistributionReleaseCounts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AnalyticsEventCount

Count of events by interval in the time range.

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
    res, err := s.Analytics.AnalyticsEventCount(ctx, operations.AnalyticsEventCountRequest{
        AppName: "impedit",
        End: types.MustTimeFromString("2022-09-01T09:38:53.685Z"),
        EventName: "aliquid",
        OwnerName: "inventore",
        Start: types.MustTimeFromString("2022-08-05T08:34:01.942Z"),
        Versions: []string{
            "consectetur",
            "recusandae",
            "aspernatur",
            "minima",
        },
    }, operations.AnalyticsEventCountSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsEventCount200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AnalyticsEventDeviceCount

Count of devices for an event by interval in the time range.

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
    res, err := s.Analytics.AnalyticsEventDeviceCount(ctx, operations.AnalyticsEventDeviceCountRequest{
        AppName: "eaque",
        End: types.MustTimeFromString("2020-10-28T11:22:47.751Z"),
        EventName: "aut",
        OwnerName: "aut",
        Start: types.MustTimeFromString("2021-06-17T11:25:30.782Z"),
        Versions: []string{
            "fugit",
            "accusamus",
        },
    }, operations.AnalyticsEventDeviceCountSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsEventDeviceCount200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AnalyticsEventPerDeviceCount

Count of events per device by interval in the time range.

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
    res, err := s.Analytics.AnalyticsEventPerDeviceCount(ctx, operations.AnalyticsEventPerDeviceCountRequest{
        AppName: "inventore",
        End: types.MustTimeFromString("2022-11-29T07:04:37.837Z"),
        EventName: "dolorum",
        OwnerName: "laborum",
        Start: types.MustTimeFromString("2022-04-07T07:44:57.988Z"),
        Versions: []string{
            "autem",
            "nobis",
        },
    }, operations.AnalyticsEventPerDeviceCountSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsEventPerDeviceCount200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AnalyticsEventPerSessionCount

Count of events per session by interval in the time range.

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
    res, err := s.Analytics.AnalyticsEventPerSessionCount(ctx, operations.AnalyticsEventPerSessionCountRequest{
        AppName: "quas",
        End: types.MustTimeFromString("2020-06-02T16:42:54.630Z"),
        EventName: "voluptas",
        OwnerName: "libero",
        Start: types.MustTimeFromString("2022-09-24T07:55:38.504Z"),
        Versions: []string{
            "explicabo",
            "provident",
        },
    }, operations.AnalyticsEventPerSessionCountSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsEventPerSessionCount200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AnalyticsEventProperties

Event properties.

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
    res, err := s.Analytics.AnalyticsEventProperties(ctx, operations.AnalyticsEventPropertiesRequest{
        AppName: "ipsa",
        EventName: "molestiae",
        OwnerName: "magnam",
    }, operations.AnalyticsEventPropertiesSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsEventProperties200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AnalyticsEventPropertyCounts

Event properties value counts during the time range in descending order.

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
    res, err := s.Analytics.AnalyticsEventPropertyCounts(ctx, operations.AnalyticsEventPropertyCountsRequest{
        DollarTop: sdk.Int64(487935),
        AppName: "eius",
        End: types.MustTimeFromString("2022-07-18T12:12:30.628Z"),
        EventName: "rem",
        EventPropertyName: "fuga",
        OwnerName: "reprehenderit",
        Start: types.MustTimeFromString("2021-04-18T13:50:09.955Z"),
        Versions: []string{
            "eum",
            "suscipit",
        },
    }, operations.AnalyticsEventPropertyCountsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsEventPropertyCounts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AnalyticsEvents

Count of active events in the time range ordered by event.

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
    res, err := s.Analytics.AnalyticsEvents(ctx, operations.AnalyticsEventsRequest{
        DollarInlinecount: operations.AnalyticsEventsDollarInlinecountEnumNone.ToPointer(),
        DollarOrderby: sdk.String("eos"),
        DollarSkip: sdk.Int64(509342),
        DollarTop: sdk.Int64(788546),
        AppName: "veritatis",
        End: types.MustTimeFromString("2022-05-05T02:03:02.582Z"),
        EventName: []string{
            "neque",
            "quo",
            "illum",
        },
        OwnerName: "quo",
        Start: types.MustTimeFromString("2022-06-25T14:54:59.204Z"),
        Versions: []string{
            "voluptas",
        },
    }, operations.AnalyticsEventsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsEvents200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AnalyticsEventsDelete

Delete the set of Events with the specified event names.

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
    res, err := s.Analytics.AnalyticsEventsDelete(ctx, operations.AnalyticsEventsDeleteRequest{
        AppName: "ab",
        EventName: "cupiditate",
        OwnerName: "consequatur",
    }, operations.AnalyticsEventsDeleteSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AnalyticsEventsDeleteLogs

Delete the set of Events with the specified event names.

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
    res, err := s.Analytics.AnalyticsEventsDeleteLogs(ctx, operations.AnalyticsEventsDeleteLogsRequest{
        AppName: "tempora",
        EventName: "debitis",
        OwnerName: "ipsam",
    }, operations.AnalyticsEventsDeleteLogsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AnalyticsGenericLogFlow

Logs received between the specified start time and the current time. The API will return a maximum of 100 logs per call.

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
    res, err := s.Analytics.AnalyticsGenericLogFlow(ctx, operations.AnalyticsGenericLogFlowRequest{
        AppName: "aspernatur",
        OwnerName: "sequi",
        Start: types.MustTimeFromString("2021-08-15T10:59:14.485Z"),
    }, operations.AnalyticsGenericLogFlowSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsGenericLogFlow200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AnalyticsGetAudience

Gets audience definition.

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
    res, err := s.Analytics.AnalyticsGetAudience(ctx, operations.AnalyticsGetAudienceRequest{
        AppName: "recusandae",
        AudienceName: "aperiam",
        OwnerName: "distinctio",
    }, operations.AnalyticsGetAudienceSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsGetAudience200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AnalyticsLanguageCounts

Languages in the time range.

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
    res, err := s.Analytics.AnalyticsLanguageCounts(ctx, operations.AnalyticsLanguageCountsRequest{
        DollarTop: sdk.Int64(799796),
        AppName: "dignissimos",
        End: types.MustTimeFromString("2022-07-13T15:11:40.912Z"),
        OwnerName: "totam",
        Start: types.MustTimeFromString("2022-01-30T01:01:49.335Z"),
        Versions: []string{
            "occaecati",
            "commodi",
        },
    }, operations.AnalyticsLanguageCountsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsLanguageCounts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AnalyticsListAudiences

Get list of audiences.

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
    res, err := s.Analytics.AnalyticsListAudiences(ctx, operations.AnalyticsListAudiencesRequest{
        AppName: "sapiente",
        IncludeDisabled: sdk.Bool(false),
        OwnerName: "dolores",
    }, operations.AnalyticsListAudiencesSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsListAudiences200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AnalyticsListCustomProperties

Get list of custom properties.

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
    res, err := s.Analytics.AnalyticsListCustomProperties(ctx, operations.AnalyticsListCustomPropertiesRequest{
        AppName: "deserunt",
        OwnerName: "molestiae",
    }, operations.AnalyticsListCustomPropertiesSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsListCustomProperties200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AnalyticsListDeviceProperties

Get list of device properties.

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
    res, err := s.Analytics.AnalyticsListDeviceProperties(ctx, operations.AnalyticsListDevicePropertiesRequest{
        AppName: "accusantium",
        OwnerName: "porro",
    }, operations.AnalyticsListDevicePropertiesSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsListDeviceProperties200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AnalyticsListDevicePropertyValues

Get list of device property values.

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
    res, err := s.Analytics.AnalyticsListDevicePropertyValues(ctx, operations.AnalyticsListDevicePropertyValuesRequest{
        AppName: "eum",
        Contains: sdk.String("quas"),
        OwnerName: "praesentium",
        PropertyName: "consequuntur",
    }, operations.AnalyticsListDevicePropertyValuesSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsListDevicePropertyValues200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AnalyticsLogFlow

Logs received between the specified start time and the current time. The API will return a maximum of 100 logs per call.

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
    res, err := s.Analytics.AnalyticsLogFlow(ctx, operations.AnalyticsLogFlowRequest{
        AppName: "deleniti",
        OwnerName: "fugit",
        Start: types.MustTimeFromString("2021-09-13T21:24:27.316Z"),
    }, operations.AnalyticsLogFlowSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsLogFlow200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AnalyticsModelCounts

Models in the time range.

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
    res, err := s.Analytics.AnalyticsModelCounts(ctx, operations.AnalyticsModelCountsRequest{
        DollarTop: sdk.Int64(277596),
        AppName: "atque",
        End: types.MustTimeFromString("2022-09-04T03:00:04.529Z"),
        OwnerName: "nisi",
        Start: types.MustTimeFromString("2022-01-16T21:53:08.951Z"),
        Versions: []string{
            "ratione",
        },
    }, operations.AnalyticsModelCountsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsModelCounts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AnalyticsOperatingSystemCounts

OSes in the time range.

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
    res, err := s.Analytics.AnalyticsOperatingSystemCounts(ctx, operations.AnalyticsOperatingSystemCountsRequest{
        DollarTop: sdk.Int64(129412),
        AppName: "saepe",
        End: types.MustTimeFromString("2021-11-30T00:31:10.440Z"),
        OwnerName: "et",
        Start: types.MustTimeFromString("2022-02-02T15:37:41.657Z"),
        Versions: []string{
            "veritatis",
            "esse",
            "quod",
            "nam",
        },
    }, operations.AnalyticsOperatingSystemCountsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsOperatingSystemCounts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AnalyticsPerDeviceCounts

Count of sessions per device in the time range.

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
    res, err := s.Analytics.AnalyticsPerDeviceCounts(ctx, operations.AnalyticsPerDeviceCountsRequest{
        AppName: "vero",
        End: types.MustTimeFromString("2022-11-27T21:17:41.726Z"),
        OwnerName: "saepe",
        Start: types.MustTimeFromString("2022-04-24T03:22:50.654Z"),
        Versions: []string{
            "rerum",
            "occaecati",
        },
    }, operations.AnalyticsPerDeviceCountsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsPerDeviceCounts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AnalyticsPlaceCounts

Places in the time range.

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
    res, err := s.Analytics.AnalyticsPlaceCounts(ctx, operations.AnalyticsPlaceCountsRequest{
        DollarTop: sdk.Int64(327720),
        AppName: "distinctio",
        End: types.MustTimeFromString("2022-12-02T08:37:36.325Z"),
        OwnerName: "culpa",
        Start: types.MustTimeFromString("2022-07-09T18:50:40.536Z"),
        Versions: []string{
            "consequuntur",
            "consequatur",
            "minus",
            "quaerat",
        },
    }, operations.AnalyticsPlaceCountsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsPlaceCounts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AnalyticsSessionCounts

Count of sessions in the time range.

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
    res, err := s.Analytics.AnalyticsSessionCounts(ctx, operations.AnalyticsSessionCountsRequest{
        AppName: "sapiente",
        End: types.MustTimeFromString("2022-07-17T18:42:13.476Z"),
        OwnerName: "blanditiis",
        Start: types.MustTimeFromString("2021-02-03T18:48:04.995Z"),
        Versions: []string{
            "quas",
            "esse",
            "quasi",
            "a",
        },
    }, operations.AnalyticsSessionCountsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsSessionCounts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## AnalyticsSessionDurationsDistribution

Gets session duration.

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
    res, err := s.Analytics.AnalyticsSessionDurationsDistribution(ctx, operations.AnalyticsSessionDurationsDistributionRequest{
        AppName: "error",
        End: types.MustTimeFromString("2021-04-10T23:50:37.359Z"),
        OwnerName: "possimus",
        Start: types.MustTimeFromString("2022-02-03T06:31:44.623Z"),
        Versions: []string{
            "facere",
            "veritatis",
            "consequuntur",
            "quasi",
        },
    }, operations.AnalyticsSessionDurationsDistributionSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsSessionDurationsDistribution200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AnalyticsTestAudience

Tests audience definition.

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
    res, err := s.Analytics.AnalyticsTestAudience(ctx, operations.AnalyticsTestAudienceRequest{
        RequestBody: operations.AnalyticsTestAudienceRequestBody{
            CustomProperties: map[string]AnalyticsTestAudienceRequestBodyCustomPropertiesEnum{
                "culpa": operations.AnalyticsTestAudienceRequestBodyCustomPropertiesEnumNumber,
                "tenetur": operations.AnalyticsTestAudienceRequestBodyCustomPropertiesEnumString,
                "earum": operations.AnalyticsTestAudienceRequestBodyCustomPropertiesEnumNumber,
            },
            Definition: "in",
            Description: sdk.String("eius"),
            Enabled: sdk.Bool(false),
        },
        AppName: "libero",
        OwnerName: "illum",
    }, operations.AnalyticsTestAudienceSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsTestAudience200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AnalyticsVersions

Count of active versions in the time range ordered by version.

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
    res, err := s.Analytics.AnalyticsVersions(ctx, operations.AnalyticsVersionsRequest{
        DollarTop: sdk.Int64(742238),
        AppName: "accusantium",
        End: types.MustTimeFromString("2022-01-15T23:18:40.855Z"),
        OwnerName: "dicta",
        Start: types.MustTimeFromString("2022-07-22T23:37:21.399Z"),
        Versions: []string{
            "nisi",
            "aut",
        },
    }, operations.AnalyticsVersionsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsVersions200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppBlockLogs

**Warning, this operation is not reversible.** 

A successful call to this API will permanently stop ingesting any logs received via SDK by app_id, and cannot be restored. We advise caution when using this API, it is designed to permanently disable an app_id.


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
    res, err := s.Analytics.AppBlockLogs(ctx, operations.AppBlockLogsRequest{
        AppName: "voluptatum",
        OwnerName: "qui",
    }, operations.AppBlockLogsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppBlockLogs200ApplicationJSONStringString != nil {
        // handle response
    }
}
```

## CrashesListSessionLogs

Get session logs by crash ID

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
    res, err := s.Analytics.CrashesListSessionLogs(ctx, operations.CrashesListSessionLogsRequest{
        AppName: "quibusdam",
        CrashID: "ex",
        Date: types.MustTimeFromString("2021-02-21T14:48:51.903Z"),
        OwnerName: "dolorum",
    }, operations.CrashesListSessionLogsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CrashesListSessionLogs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DevicesBlockLogs

**Warning, this operation is not reversible.**

 A successful call to this API will permanently stop ingesting any logs received via SDK for the given installation ID, and cannot be restored. We advise caution when using this API, it is designed to permanently disable collection from a specific installation of the app on a device, usually following the request from a user.


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
    res, err := s.Analytics.DevicesBlockLogs(ctx, operations.DevicesBlockLogsRequest{
        AppName: "architecto",
        InstallID: "omnis",
        OwnerName: "tenetur",
    }, operations.DevicesBlockLogsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DevicesBlockLogs200ApplicationJSONStringString != nil {
        // handle response
    }
}
```
