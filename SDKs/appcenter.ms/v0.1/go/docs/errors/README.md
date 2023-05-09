# Errors

### Available Operations

* [ErrorsAppBuildsList](#errorsappbuildslist) - List of app builds
* [ErrorsAvailableVersions](#errorsavailableversions) - Get all available versions in the time range.
* [ErrorsCountsPerDay](#errorscountsperday) - Count of crashes or errors by day in the time range based the selected versions. If SingleErrorTypeParameter is not provided, defaults to handlederror.
* [ErrorsDeleteError](#errorsdeleteerror) - Delete a specific error and related attachments and blobs for an app. Searchable data will not be deleted immediately and may take up to 30 days.
* [ErrorsErrorAttachmentLocation](#errorserrorattachmentlocation) - Error attachment location.
* [ErrorsErrorAttachmentText](#errorserrorattachmenttext) - Error attachment text.
* [ErrorsErrorAttachments](#errorserrorattachments) - List error attachments.
* [ErrorsErrorDownload](#errorserrordownload) - Download details for a specific error.
* [ErrorsErrorFreeDevicePercentages](#errorserrorfreedevicepercentages) - Percentage of error-free devices by day in the time range based on the selected versions. If SingleErrorTypeParameter is not provided, defaults to handlederror. API will return -1 if crash devices is greater than active devices
* [ErrorsErrorGroupsSearch](#errorserrorgroupssearch) - Error groups list based on search parameters
* [ErrorsErrorLocation](#errorserrorlocation) - Error location.
* [ErrorsErrorSearch](#errorserrorsearch) - Errors list based on search parameters
* [ErrorsErrorStackTrace](#errorserrorstacktrace) - Error Stacktrace details.
* [ErrorsGetErrorDetails](#errorsgeterrordetails) - Error details.
* [ErrorsGroupCountsPerDay](#errorsgroupcountsperday) - Count of errors by day in the time range of the selected error group with selected version
* [ErrorsGroupDetails](#errorsgroupdetails) - Error group details
* [ErrorsGroupErrorFreeDevicePercentages](#errorsgrouperrorfreedevicepercentages) - Percentage of error-free devices by day in the time range. Api will return -1 if crash devices is greater than active devices
* [ErrorsGroupErrorStackTrace](#errorsgrouperrorstacktrace) - Gets the stack trace for the error group.
* [ErrorsGroupList](#errorsgrouplist) - List of error groups
* [ErrorsGroupModelCounts](#errorsgroupmodelcounts) - Top models of the selected error group.
* [ErrorsGroupOperatingSystemCounts](#errorsgroupoperatingsystemcounts) - Top OSes of the selected error group.
* [ErrorsLatestErrorDetails](#errorslatesterrordetails) - Latest error details.
* [ErrorsListForGroup](#errorslistforgroup) - Get all errors for group
* [ErrorsListSessionLogs](#errorslistsessionlogs) - Get session logs by error ID
* [ErrorsUpdateState](#errorsupdatestate) - Update error group state
* [ErrorsGetRetentionSettings](#errorsgetretentionsettings) - gets the retention settings in days

## ErrorsAppBuildsList

List of app builds

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
    res, err := s.Errors.ErrorsAppBuildsList(ctx, operations.ErrorsAppBuildsListRequest{
        DollarTop: sdk.Int64(207296),
        AppName: "iusto",
        End: types.MustTimeFromString("2021-12-15T19:28:43.232Z"),
        ErrorType: operations.ErrorsAppBuildsListErrorTypeEnumHandledError.ToPointer(),
        OwnerName: "fugiat",
        Start: types.MustTimeFromString("2021-03-22T16:52:21.456Z"),
        Version: "ducimus",
    }, operations.ErrorsAppBuildsListSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorsAppBuildsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ErrorsAvailableVersions

Get all available versions in the time range.

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
    res, err := s.Errors.ErrorsAvailableVersions(ctx, operations.ErrorsAvailableVersionsRequest{
        DollarFilter: sdk.String("dolor"),
        DollarInlinecount: operations.ErrorsAvailableVersionsDollarInlinecountEnumAllpages.ToPointer(),
        DollarSkip: sdk.Int64(622894),
        DollarTop: sdk.Int64(784731),
        AppName: "vitae",
        End: types.MustTimeFromString("2022-07-17T11:25:26.149Z"),
        ErrorType: operations.ErrorsAvailableVersionsErrorTypeEnumHandledError.ToPointer(),
        OwnerName: "ad",
        Start: types.MustTimeFromString("2022-09-07T11:27:11.881Z"),
    }, operations.ErrorsAvailableVersionsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorsAvailableVersions200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ErrorsCountsPerDay

Count of crashes or errors by day in the time range based the selected versions. If SingleErrorTypeParameter is not provided, defaults to handlederror.

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
    res, err := s.Errors.ErrorsCountsPerDay(ctx, operations.ErrorsCountsPerDayRequest{
        AppBuild: sdk.String("delectus"),
        AppName: "iusto",
        End: types.MustTimeFromString("2022-04-09T14:42:35.220Z"),
        ErrorType: operations.ErrorsCountsPerDayErrorTypeEnumUnhandledError.ToPointer(),
        OwnerName: "ab",
        Start: types.MustTimeFromString("2022-02-14T02:26:29.574Z"),
        Version: sdk.String("saepe"),
    }, operations.ErrorsCountsPerDaySecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorsCountsPerDay200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ErrorsDeleteError

Delete a specific error and related attachments and blobs for an app. Searchable data will not be deleted immediately and may take up to 30 days.

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
    res, err := s.Errors.ErrorsDeleteError(ctx, operations.ErrorsDeleteErrorRequest{
        AppName: "tempore",
        ErrorGroupID: "veniam",
        ErrorID: "eos",
        OwnerName: "reiciendis",
    }, operations.ErrorsDeleteErrorSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorsDeleteError200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ErrorsErrorAttachmentLocation

Error attachment location.

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
    res, err := s.Errors.ErrorsErrorAttachmentLocation(ctx, operations.ErrorsErrorAttachmentLocationRequest{
        AppName: "earum",
        AttachmentID: "reprehenderit",
        ErrorID: "praesentium",
        OwnerName: "nemo",
    }, operations.ErrorsErrorAttachmentLocationSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorsErrorAttachmentLocation200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ErrorsErrorAttachmentText

Error attachment text.

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
    res, err := s.Errors.ErrorsErrorAttachmentText(ctx, operations.ErrorsErrorAttachmentTextRequest{
        AppName: "repellat",
        AttachmentID: "quisquam",
        ErrorID: "sequi",
        OwnerName: "nihil",
    }, operations.ErrorsErrorAttachmentTextSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorsErrorAttachmentText200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ErrorsErrorAttachments

List error attachments.

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
    res, err := s.Errors.ErrorsErrorAttachments(ctx, operations.ErrorsErrorAttachmentsRequest{
        AppName: "deleniti",
        ErrorID: "illo",
        OwnerName: "labore",
    }, operations.ErrorsErrorAttachmentsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorsErrorAttachments200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## ErrorsErrorDownload

Download details for a specific error.

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
    res, err := s.Errors.ErrorsErrorDownload(ctx, operations.ErrorsErrorDownloadRequest{
        AppName: "assumenda",
        ErrorGroupID: "aliquam",
        ErrorID: "quisquam",
        Format: operations.ErrorsErrorDownloadFormatEnumTxt.ToPointer(),
        OwnerName: "laudantium",
    }, operations.ErrorsErrorDownloadSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorsErrorDownload200ApplicationJSONFileObject != nil {
        // handle response
    }
}
```

## ErrorsErrorFreeDevicePercentages

Percentage of error-free devices by day in the time range based on the selected versions. If SingleErrorTypeParameter is not provided, defaults to handlederror. API will return -1 if crash devices is greater than active devices

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
    res, err := s.Errors.ErrorsErrorFreeDevicePercentages(ctx, operations.ErrorsErrorFreeDevicePercentagesRequest{
        AppBuild: sdk.String("repudiandae"),
        AppName: "consequatur",
        End: types.MustTimeFromString("2022-08-04T16:32:15.873Z"),
        ErrorType: operations.ErrorsErrorFreeDevicePercentagesErrorTypeEnumHandledError.ToPointer(),
        OwnerName: "expedita",
        Start: types.MustTimeFromString("2021-10-26T16:10:32.283Z"),
        Versions: []string{
            "rerum",
            "dignissimos",
            "corporis",
            "vero",
        },
    }, operations.ErrorsErrorFreeDevicePercentagesSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorsErrorFreeDevicePercentages200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ErrorsErrorGroupsSearch

Error groups list based on search parameters

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
    res, err := s.Errors.ErrorsErrorGroupsSearch(ctx, operations.ErrorsErrorGroupsSearchRequest{
        DollarSkip: sdk.Int64(629377),
        DollarTop: sdk.Int64(833982),
        AppName: "iure",
        Filter: sdk.String("dolorem"),
        Order: operations.ErrorsErrorGroupsSearchOrderEnumDesc.ToPointer(),
        OwnerName: "impedit",
        Q: sdk.String("commodi"),
        Sort: operations.ErrorsErrorGroupsSearchSortEnumMatchingReportsCount.ToPointer(),
    }, operations.ErrorsErrorGroupsSearchSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorsErrorGroupsSearch200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ErrorsErrorLocation

Error location.

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
    res, err := s.Errors.ErrorsErrorLocation(ctx, operations.ErrorsErrorLocationRequest{
        AppName: "voluptatem",
        ErrorGroupID: "ad",
        ErrorID: "quae",
        OwnerName: "amet",
    }, operations.ErrorsErrorLocationSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorsErrorLocation200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ErrorsErrorSearch

Errors list based on search parameters

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
    res, err := s.Errors.ErrorsErrorSearch(ctx, operations.ErrorsErrorSearchRequest{
        DollarSkip: sdk.Int64(849320),
        DollarTop: sdk.Int64(506863),
        AppName: "quidem",
        Filter: sdk.String("cum"),
        Order: operations.ErrorsErrorSearchOrderEnumDesc.ToPointer(),
        OwnerName: "quasi",
        Q: sdk.String("dicta"),
        Sort: operations.ErrorsErrorSearchSortEnumExceptionMessage.ToPointer(),
    }, operations.ErrorsErrorSearchSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorsErrorSearch200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ErrorsErrorStackTrace

Error Stacktrace details.

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
    res, err := s.Errors.ErrorsErrorStackTrace(ctx, operations.ErrorsErrorStackTraceRequest{
        AppName: "doloremque",
        ErrorGroupID: "earum",
        ErrorID: "iusto",
        OwnerName: "amet",
    }, operations.ErrorsErrorStackTraceSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiagnosticsStackTrace != nil {
        // handle response
    }
}
```

## ErrorsGetErrorDetails

Error details.

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
    res, err := s.Errors.ErrorsGetErrorDetails(ctx, operations.ErrorsGetErrorDetailsRequest{
        AppName: "provident",
        ErrorGroupID: "dolorum",
        ErrorID: "necessitatibus",
        OwnerName: "provident",
    }, operations.ErrorsGetErrorDetailsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorsGetErrorDetails200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ErrorsGroupCountsPerDay

Count of errors by day in the time range of the selected error group with selected version

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
    res, err := s.Errors.ErrorsGroupCountsPerDay(ctx, operations.ErrorsGroupCountsPerDayRequest{
        AppName: "repudiandae",
        End: types.MustTimeFromString("2022-08-20T07:41:58.408Z"),
        ErrorGroupID: "molestiae",
        OwnerName: "itaque",
        Start: types.MustTimeFromString("2021-11-28T13:56:44.956Z"),
        Version: sdk.String("aperiam"),
    }, operations.ErrorsGroupCountsPerDaySecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorsGroupCountsPerDay200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ErrorsGroupDetails

Error group details

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
    res, err := s.Errors.ErrorsGroupDetails(ctx, operations.ErrorsGroupDetailsRequest{
        AppName: "sint",
        ErrorGroupID: "accusamus",
        OwnerName: "eos",
    }, operations.ErrorsGroupDetailsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorsGroupDetails200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ErrorsGroupErrorFreeDevicePercentages

Percentage of error-free devices by day in the time range. Api will return -1 if crash devices is greater than active devices

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
    res, err := s.Errors.ErrorsGroupErrorFreeDevicePercentages(ctx, operations.ErrorsGroupErrorFreeDevicePercentagesRequest{
        AppName: "totam",
        End: types.MustTimeFromString("2022-12-20T19:24:32.195Z"),
        ErrorGroupID: "velit",
        OwnerName: "dolor",
        Start: types.MustTimeFromString("2022-01-17T21:48:03.045Z"),
    }, operations.ErrorsGroupErrorFreeDevicePercentagesSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorsGroupErrorFreeDevicePercentages200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ErrorsGroupErrorStackTrace

Gets the stack trace for the error group.

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
    res, err := s.Errors.ErrorsGroupErrorStackTrace(ctx, operations.ErrorsGroupErrorStackTraceRequest{
        AppName: "dolor",
        ErrorGroupID: "occaecati",
        OwnerName: "atque",
    }, operations.ErrorsGroupErrorStackTraceSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiagnosticsStackTrace != nil {
        // handle response
    }
}
```

## ErrorsGroupList

List of error groups

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
    res, err := s.Errors.ErrorsGroupList(ctx, operations.ErrorsGroupListRequest{
        DollarOrderby: sdk.String("beatae"),
        DollarTop: sdk.Int64(868255),
        AppBuild: sdk.String("labore"),
        AppName: "minus",
        End: types.MustTimeFromString("2022-12-20T04:33:32.836Z"),
        ErrorType: operations.ErrorsGroupListErrorTypeEnumAll.ToPointer(),
        GroupState: sdk.String("rerum"),
        OwnerName: "ea",
        Start: types.MustTimeFromString("2022-07-06T08:20:32.050Z"),
        Version: sdk.String("repellat"),
    }, operations.ErrorsGroupListSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorsGroupList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ErrorsGroupModelCounts

Top models of the selected error group.

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
    res, err := s.Errors.ErrorsGroupModelCounts(ctx, operations.ErrorsGroupModelCountsRequest{
        DollarTop: sdk.Int64(243678),
        AppName: "porro",
        ErrorGroupID: "provident",
        OwnerName: "consectetur",
    }, operations.ErrorsGroupModelCountsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorsGroupModelCounts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ErrorsGroupOperatingSystemCounts

Top OSes of the selected error group.

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
    res, err := s.Errors.ErrorsGroupOperatingSystemCounts(ctx, operations.ErrorsGroupOperatingSystemCountsRequest{
        DollarTop: sdk.Int64(753240),
        AppName: "dignissimos",
        ErrorGroupID: "consectetur",
        OwnerName: "soluta",
    }, operations.ErrorsGroupOperatingSystemCountsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorsGroupOperatingSystemCounts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ErrorsLatestErrorDetails

Latest error details.

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
    res, err := s.Errors.ErrorsLatestErrorDetails(ctx, operations.ErrorsLatestErrorDetailsRequest{
        AppName: "natus",
        ErrorGroupID: "temporibus",
        OwnerName: "officia",
    }, operations.ErrorsLatestErrorDetailsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorsLatestErrorDetails200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ErrorsListForGroup

Get all errors for group

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
    res, err := s.Errors.ErrorsListForGroup(ctx, operations.ErrorsListForGroupRequest{
        DollarTop: sdk.Int64(228857),
        AppName: "tenetur",
        End: types.MustTimeFromString("2022-03-22T22:18:02.609Z"),
        ErrorGroupID: "itaque",
        Model: sdk.String("illum"),
        Os: sdk.String("laborum"),
        OwnerName: "dignissimos",
        Start: types.MustTimeFromString("2022-06-12T01:02:19.858Z"),
    }, operations.ErrorsListForGroupSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorsListForGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ErrorsListSessionLogs

Get session logs by error ID

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
    res, err := s.Errors.ErrorsListSessionLogs(ctx, operations.ErrorsListSessionLogsRequest{
        AppName: "consectetur",
        Date: types.MustTimeFromString("2022-08-13T01:51:09.877Z"),
        ErrorID: "explicabo",
        OwnerName: "exercitationem",
    }, operations.ErrorsListSessionLogsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorsListSessionLogs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ErrorsUpdateState

Update error group state

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
    res, err := s.Errors.ErrorsUpdateState(ctx, operations.ErrorsUpdateStateRequest{
        RequestBody: operations.ErrorsUpdateStateRequestBody{
            Annotation: sdk.String("nihil"),
            State: operations.ErrorsUpdateStateRequestBodyStateEnumOpen,
        },
        AppName: "ab",
        ErrorGroupID: "illo",
        OwnerName: "hic",
    }, operations.ErrorsUpdateStateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorsUpdateState200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ErrorsGetRetentionSettings

gets the retention settings in days

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
    res, err := s.Errors.ErrorsGetRetentionSettings(ctx, operations.ErrorsGetRetentionSettingsRequest{
        AppName: "deserunt",
        OwnerName: "delectus",
    }, operations.ErrorsGetRetentionSettingsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorsGetRetentionSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```
