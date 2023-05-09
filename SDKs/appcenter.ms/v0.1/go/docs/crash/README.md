# Crash

### Available Operations

* [~~CrashGroupsGet~~](#crashgroupsget) - Gets a specific group. :warning: **Deprecated**
* [~~CrashGroupsGetStacktrace~~](#crashgroupsgetstacktrace) - Gets a stacktrace for a specific crash. :warning: **Deprecated**
* [~~CrashGroupsList~~](#crashgroupslist) - Gets a list of crash groups and whether the list contains all available groups. :warning: **Deprecated**
* [~~CrashGroupsUpdate~~](#crashgroupsupdate) - Updates a group. :warning: **Deprecated**
* [~~CrashesDelete~~](#crashesdelete) - Delete a specific crash and related attachments and blobs for an app. :warning: **Deprecated**
* [~~CrashesGet~~](#crashesget) - Gets a specific crash for an app. :warning: **Deprecated**
* [~~CrashesGetAppCrashesInfo~~](#crashesgetappcrashesinfo) - Gets whether the application has any crashes. :warning: **Deprecated**
* [~~CrashesGetAppVersions~~](#crashesgetappversions) - Gets a list of application versions. :warning: **Deprecated**
* [~~CrashesGetCrashAttachmentLocation~~](#crashesgetcrashattachmentlocation) - Gets the URI location to download crash attachment. :warning: **Deprecated**
* [~~CrashesGetCrashTextAttachmentContent~~](#crashesgetcrashtextattachmentcontent) - Gets content of the text attachment. :warning: **Deprecated**
* [~~CrashesGetNativeCrash~~](#crashesgetnativecrash) - Gets the native log of a specific crash. :warning: **Deprecated**
* [~~CrashesGetNativeCrashDownload~~](#crashesgetnativecrashdownload) - Gets the native log of a specific crash as a text attachment. :warning: **Deprecated**
* [~~CrashesGetRawCrashLocation~~](#crashesgetrawcrashlocation) - Gets the URI location to download json of a specific crash. :warning: **Deprecated**
* [~~CrashesGetStacktrace~~](#crashesgetstacktrace) - Gets a stacktrace for a specific crash. :warning: **Deprecated**
* [~~CrashesList~~](#crasheslist) - Gets all crashes of a group. :warning: **Deprecated**
* [~~CrashesListAttachments~~](#crasheslistattachments) - Gets all attachments for a specific crash. :warning: **Deprecated**
* [MissingSymbolGroupsGet](#missingsymbolgroupsget) - Gets missing symbol crash group by its id
* [MissingSymbolGroupsInfo](#missingsymbolgroupsinfo) - Gets application level statistics for all missing symbol groups
* [MissingSymbolGroupsList](#missingsymbolgroupslist) - Gets top N (ordered by crash count) of crash groups by missing symbol
* [SymbolUploadsComplete](#symboluploadscomplete) - Commits or aborts the symbol upload process for a new set of symbols for the specified application
* [SymbolUploadsCreate](#symboluploadscreate) - Begins the symbol upload process for a new set of symbols for the specified application
* [SymbolUploadsDelete](#symboluploadsdelete) - Deletes a symbol upload by id for the specified application
* [SymbolUploadsGet](#symboluploadsget) - Gets a symbol upload by id for the specified application
* [SymbolUploadsGetLocation](#symboluploadsgetlocation) - Gets the URL to download the symbol upload
* [SymbolUploadsList](#symboluploadslist) - Gets a list of all uploads for the specified application
* [SymbolsGet](#symbolsget) - Returns a particular symbol by id (uuid) for the provided application
* [SymbolsGetLocation](#symbolsgetlocation) - Gets the URL to download the symbol
* [SymbolsGetStatus](#symbolsgetstatus) - Returns a particular symbol by id (uuid) for the provided application
* [SymbolsIgnore](#symbolsignore) - Marks a symbol by id (uuid) as ignored
* [SymbolsList](#symbolslist) - Returns the list of all symbols for the provided application

## ~~CrashGroupsGet~~

Gets a specific group.

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
    res, err := s.Crash.CrashGroupsGet(ctx, operations.CrashGroupsGetRequest{
        AppName: "eos",
        CrashGroupID: "sapiente",
        OwnerName: "eum",
    }, operations.CrashGroupsGetSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CrashGroupsGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ~~CrashGroupsGetStacktrace~~

Gets a stacktrace for a specific crash.

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
    res, err := s.Crash.CrashGroupsGetStacktrace(ctx, operations.CrashGroupsGetStacktraceRequest{
        AppName: "dicta",
        CrashGroupID: "minima",
        GroupingOnly: sdk.Bool(false),
        OwnerName: "beatae",
    }, operations.CrashGroupsGetStacktraceSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Stacktrace != nil {
        // handle response
    }
}
```

## ~~CrashGroupsList~~

Gets a list of crash groups and whether the list contains all available groups.

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
    res, err := s.Crash.CrashGroupsList(ctx, operations.CrashGroupsListRequest{
        DollarOrderby: operations.CrashGroupsListDollarOrderbyEnumDisplayIDAsc.ToPointer(),
        AppName: "provident",
        AppVersion: sdk.String("earum"),
        ContinuationToken: sdk.String("soluta"),
        GroupStatus: operations.CrashGroupsListGroupStatusEnumIgnored.ToPointer(),
        GroupTextSearch: sdk.String("illum"),
        GroupType: operations.CrashGroupsListGroupTypeEnumGroupType1.ToPointer(),
        LastOccurrenceFrom: types.MustTimeFromString("2021-03-19T03:34:18.129Z"),
        LastOccurrenceTo: types.MustTimeFromString("2020-04-29T11:28:14.354Z"),
        OwnerName: "aliquid",
    }, operations.CrashGroupsListSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CrashGroupsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ~~CrashGroupsUpdate~~

Updates a group.

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
    res, err := s.Crash.CrashGroupsUpdate(ctx, operations.CrashGroupsUpdateRequest{
        RequestBody: operations.CrashGroupsUpdateRequestBody{
            Annotation: sdk.String("porro"),
            Status: operations.CrashGroupsUpdateRequestBodyStatusEnumClosed.ToPointer(),
        },
        AppName: "dolorem",
        CrashGroupID: "fugit",
        OwnerName: "cumque",
    }, operations.CrashGroupsUpdateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CrashGroupsUpdate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ~~CrashesDelete~~

Delete a specific crash and related attachments and blobs for an app.

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
    res, err := s.Crash.CrashesDelete(ctx, operations.CrashesDeleteRequest{
        AppName: "fuga",
        CrashGroupID: "ratione",
        CrashID: "animi",
        OwnerName: "necessitatibus",
        RetentionDelete: sdk.Bool(false),
    }, operations.CrashesDeleteSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CrashesDelete200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ~~CrashesGet~~

Gets a specific crash for an app.

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
    res, err := s.Crash.CrashesGet(ctx, operations.CrashesGetRequest{
        AppName: "nulla",
        CrashGroupID: "consequatur",
        CrashID: "quasi",
        GroupingOnly: sdk.Bool(false),
        IncludeDetails: sdk.Bool(false),
        IncludeLog: sdk.Bool(false),
        IncludeReport: sdk.Bool(false),
        IncludeStacktrace: sdk.Bool(false),
        OwnerName: "et",
    }, operations.CrashesGetSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Crash != nil {
        // handle response
    }
}
```

## ~~CrashesGetAppCrashesInfo~~

Gets whether the application has any crashes.

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
    res, err := s.Crash.CrashesGetAppCrashesInfo(ctx, operations.CrashesGetAppCrashesInfoRequest{
        AppName: "ducimus",
        OwnerName: "natus",
    }, operations.CrashesGetAppCrashesInfoSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CrashesGetAppCrashesInfo200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ~~CrashesGetAppVersions~~

Gets a list of application versions.

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
    res, err := s.Crash.CrashesGetAppVersions(ctx, operations.CrashesGetAppVersionsRequest{
        AppName: "occaecati",
        OwnerName: "suscipit",
    }, operations.CrashesGetAppVersionsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CrashesGetAppVersions200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## ~~CrashesGetCrashAttachmentLocation~~

Gets the URI location to download crash attachment.

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
    res, err := s.Crash.CrashesGetCrashAttachmentLocation(ctx, operations.CrashesGetCrashAttachmentLocationRequest{
        AppName: "adipisci",
        AttachmentID: "quasi",
        CrashID: "magni",
        OwnerName: "doloribus",
    }, operations.CrashesGetCrashAttachmentLocationSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CrashesGetCrashAttachmentLocation200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ~~CrashesGetCrashTextAttachmentContent~~

Gets content of the text attachment.

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
    res, err := s.Crash.CrashesGetCrashTextAttachmentContent(ctx, operations.CrashesGetCrashTextAttachmentContentRequest{
        AppName: "nulla",
        AttachmentID: "necessitatibus",
        CrashID: "ipsa",
        OwnerName: "tempora",
    }, operations.CrashesGetCrashTextAttachmentContentSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CrashesGetCrashTextAttachmentContent200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ~~CrashesGetNativeCrash~~

Gets the native log of a specific crash.

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
    res, err := s.Crash.CrashesGetNativeCrash(ctx, operations.CrashesGetNativeCrashRequest{
        AppName: "nihil",
        CrashGroupID: "molestiae",
        CrashID: "dicta",
        OwnerName: "iusto",
    }, operations.CrashesGetNativeCrashSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CrashesGetNativeCrash200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ~~CrashesGetNativeCrashDownload~~

Gets the native log of a specific crash as a text attachment.

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
    res, err := s.Crash.CrashesGetNativeCrashDownload(ctx, operations.CrashesGetNativeCrashDownloadRequest{
        AppName: "esse",
        CrashGroupID: "praesentium",
        CrashID: "maiores",
        OwnerName: "reiciendis",
    }, operations.CrashesGetNativeCrashDownloadSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CrashesGetNativeCrashDownload200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ~~CrashesGetRawCrashLocation~~

Gets the URI location to download json of a specific crash.

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
    res, err := s.Crash.CrashesGetRawCrashLocation(ctx, operations.CrashesGetRawCrashLocationRequest{
        AppName: "vel",
        CrashGroupID: "architecto",
        CrashID: "fugiat",
        OwnerName: "doloremque",
    }, operations.CrashesGetRawCrashLocationSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CrashesGetRawCrashLocation200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ~~CrashesGetStacktrace~~

Gets a stacktrace for a specific crash.

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
    res, err := s.Crash.CrashesGetStacktrace(ctx, operations.CrashesGetStacktraceRequest{
        AppName: "dicta",
        CrashGroupID: "odio",
        CrashID: "tempora",
        GroupingOnly: sdk.Bool(false),
        OwnerName: "esse",
    }, operations.CrashesGetStacktraceSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Stacktrace != nil {
        // handle response
    }
}
```

## ~~CrashesList~~

Gets all crashes of a group.

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
    res, err := s.Crash.CrashesList(ctx, operations.CrashesListRequest{
        AppName: "ex",
        AppVersion: sdk.String("consectetur"),
        CrashGroupID: "aliquid",
        DateFrom: types.MustTimeFromString("2022-04-30T22:40:50.133Z"),
        DateTo: types.MustTimeFromString("2022-08-28T04:16:08.645Z"),
        ErrorType: operations.CrashesListErrorTypeEnumHandledErrors.ToPointer(),
        IncludeLog: sdk.Bool(false),
        IncludeReport: sdk.Bool(false),
        OwnerName: "expedita",
    }, operations.CrashesListSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Crashes != nil {
        // handle response
    }
}
```

## ~~CrashesListAttachments~~

Gets all attachments for a specific crash.

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
    res, err := s.Crash.CrashesListAttachments(ctx, operations.CrashesListAttachmentsRequest{
        AppName: "aliquid",
        CrashID: "officia",
        OwnerName: "suscipit",
    }, operations.CrashesListAttachmentsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CrashesListAttachments200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## MissingSymbolGroupsGet

Gets missing symbol crash group by its id

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
    res, err := s.Crash.MissingSymbolGroupsGet(ctx, operations.MissingSymbolGroupsGetRequest{
        AppName: "aliquid",
        OwnerName: "perferendis",
        SymbolGroupID: "eum",
    }, operations.MissingSymbolGroupsGetSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MissingSymbolGroupsGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## MissingSymbolGroupsInfo

Gets application level statistics for all missing symbol groups

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
    res, err := s.Crash.MissingSymbolGroupsInfo(ctx, operations.MissingSymbolGroupsInfoRequest{
        AppName: "voluptas",
        OwnerName: "iste",
    }, operations.MissingSymbolGroupsInfoSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MissingSymbolGroupsInfo200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## MissingSymbolGroupsList

Gets top N (ordered by crash count) of crash groups by missing symbol

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
    res, err := s.Crash.MissingSymbolGroupsList(ctx, operations.MissingSymbolGroupsListRequest{
        AppName: "id",
        OwnerName: "ab",
        Top: 625358,
    }, operations.MissingSymbolGroupsListSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MissingSymbolGroupsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SymbolUploadsComplete

Commits or aborts the symbol upload process for a new set of symbols for the specified application

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
    res, err := s.Crash.SymbolUploadsComplete(ctx, operations.SymbolUploadsCompleteRequest{
        RequestBody: operations.SymbolUploadsCompleteRequestBody{
            Status: operations.SymbolUploadsCompleteRequestBodyStatusEnumAborted,
        },
        AppName: "voluptates",
        OwnerName: "mollitia",
        SymbolUploadID: "laborum",
    }, operations.SymbolUploadsCompleteSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SymbolUploadsComplete200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SymbolUploadsCreate

Begins the symbol upload process for a new set of symbols for the specified application

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
    res, err := s.Crash.SymbolUploadsCreate(ctx, operations.SymbolUploadsCreateRequest{
        RequestBody: operations.SymbolUploadsCreateRequestBody{
            Build: sdk.String("libero"),
            ClientCallback: sdk.String("ad"),
            FileName: sdk.String("deleniti"),
            SymbolType: operations.SymbolUploadsCreateRequestBodySymbolTypeEnumJavaScript,
            Version: sdk.String("vitae"),
        },
        AppName: "repellendus",
        OwnerName: "ex",
    }, operations.SymbolUploadsCreateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SymbolUploadsCreate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SymbolUploadsDelete

Deletes a symbol upload by id for the specified application

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
    res, err := s.Crash.SymbolUploadsDelete(ctx, operations.SymbolUploadsDeleteRequest{
        AppName: "quo",
        OwnerName: "ex",
        SymbolUploadID: "ut",
    }, operations.SymbolUploadsDeleteSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SymbolUploadsDelete200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SymbolUploadsGet

Gets a symbol upload by id for the specified application

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
    res, err := s.Crash.SymbolUploadsGet(ctx, operations.SymbolUploadsGetRequest{
        AppName: "ad",
        OwnerName: "expedita",
        SymbolUploadID: "voluptatem",
    }, operations.SymbolUploadsGetSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SymbolUploadsGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SymbolUploadsGetLocation

Gets the URL to download the symbol upload

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
    res, err := s.Crash.SymbolUploadsGetLocation(ctx, operations.SymbolUploadsGetLocationRequest{
        AppName: "molestias",
        OwnerName: "cum",
        SymbolUploadID: "aliquid",
    }, operations.SymbolUploadsGetLocationSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SymbolUploadsGetLocation200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SymbolUploadsList

Gets a list of all uploads for the specified application

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
    res, err := s.Crash.SymbolUploadsList(ctx, operations.SymbolUploadsListRequest{
        AppName: "beatae",
        OwnerName: "voluptatum",
        Status: operations.SymbolUploadsListStatusEnumUploaded.ToPointer(),
        SymbolType: operations.SymbolUploadsListSymbolTypeEnumAndroidProguard.ToPointer(),
        Top: sdk.Int64(703218),
    }, operations.SymbolUploadsListSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SymbolUploadsList200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## SymbolsGet

Returns a particular symbol by id (uuid) for the provided application

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
    res, err := s.Crash.SymbolsGet(ctx, operations.SymbolsGetRequest{
        AppName: "est",
        OwnerName: "culpa",
        SymbolID: "voluptatem",
    }, operations.SymbolsGetSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SymbolsGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SymbolsGetLocation

Gets the URL to download the symbol

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
    res, err := s.Crash.SymbolsGetLocation(ctx, operations.SymbolsGetLocationRequest{
        AppName: "sapiente",
        OwnerName: "officiis",
        SymbolID: "architecto",
    }, operations.SymbolsGetLocationSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SymbolsGetLocation200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SymbolsGetStatus

Returns a particular symbol by id (uuid) for the provided application

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
    res, err := s.Crash.SymbolsGetStatus(ctx, operations.SymbolsGetStatusRequest{
        AppName: "fuga",
        OwnerName: "pariatur",
        SymbolID: "debitis",
    }, operations.SymbolsGetStatusSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SymbolsGetStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SymbolsIgnore

Marks a symbol by id (uuid) as ignored

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
    res, err := s.Crash.SymbolsIgnore(ctx, operations.SymbolsIgnoreRequest{
        AppName: "voluptatem",
        OwnerName: "alias",
        SymbolID: "deleniti",
    }, operations.SymbolsIgnoreSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SymbolsIgnore200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SymbolsList

Returns the list of all symbols for the provided application

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
    res, err := s.Crash.SymbolsList(ctx, operations.SymbolsListRequest{
        AppName: "earum",
        OwnerName: "ex",
    }, operations.SymbolsListSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SymbolsList200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
