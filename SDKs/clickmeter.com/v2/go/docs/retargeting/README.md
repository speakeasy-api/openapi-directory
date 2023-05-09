# Retargeting

### Available Operations

* [RetargetingCount](#retargetingcount) - Retrieve count of retargeting scripts
* [RetargetingDelete](#retargetingdelete) - Deletes a retargeting script (and remove associations)
* [RetargetingGet](#retargetingget) - List of all the retargeting scripts associated to the user
* [RetargetingGetDatapoints](#retargetinggetdatapoints) - List of all the datapoints associated to the retargeting script.
* [RetargetingGetDatapointsCount](#retargetinggetdatapointscount) - Count the datapoints associated to the retargeting script.
* [RetargetingPostForm](#retargetingpostform) - Updates a retargeting script
* [RetargetingPostJSON](#retargetingpostjson) - Updates a retargeting script
* [RetargetingPostRaw](#retargetingpostraw) - Updates a retargeting script
* [RetargetingPutForm](#retargetingputform) - Creates a retargeting script
* [RetargetingPutJSON](#retargetingputjson) - Creates a retargeting script
* [RetargetingPutRaw](#retargetingputraw) - Creates a retargeting script
* [GetRetargetingID](#getretargetingid) - Get a retargeting script object

## RetargetingCount

Retrieve count of retargeting scripts

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Retargeting.RetargetingCount(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesCountResponce != nil {
        // handle response
    }
}
```

## RetargetingDelete

Deletes a retargeting script (and remove associations)

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
    res, err := s.Retargeting.RetargetingDelete(ctx, operations.RetargetingDeleteRequest{
        ID: 736853,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## RetargetingGet

List of all the retargeting scripts associated to the user

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
    res, err := s.Retargeting.RetargetingGet(ctx, operations.RetargetingGetRequest{
        Limit: sdk.Int(230411),
        Offset: sdk.Int(97676),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## RetargetingGetDatapoints

List of all the datapoints associated to the retargeting script.

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
    res, err := s.Retargeting.RetargetingGetDatapoints(ctx, operations.RetargetingGetDatapointsRequest{
        CreatedAfter: sdk.String("dicta"),
        CreatedBefore: sdk.String("laudantium"),
        ID: 40710,
        Limit: sdk.Int(938412),
        Offset: sdk.Int(479707),
        OnlyFavorites: sdk.Bool(false),
        SortBy: sdk.String("amet"),
        SortDirection: operations.RetargetingGetDatapointsSortDirectionEnumDesc.ToPointer(),
        Status: operations.RetargetingGetDatapointsStatusEnumPaused.ToPointer(),
        Tags: sdk.String("necessitatibus"),
        TextSearch: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## RetargetingGetDatapointsCount

Count the datapoints associated to the retargeting script.

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
    res, err := s.Retargeting.RetargetingGetDatapointsCount(ctx, operations.RetargetingGetDatapointsCountRequest{
        CreatedAfter: sdk.String("repudiandae"),
        CreatedBefore: sdk.String("consequatur"),
        ID: 366244,
        OnlyFavorites: sdk.Bool(false),
        Status: operations.RetargetingGetDatapointsCountStatusEnumActive.ToPointer(),
        Tags: sdk.String("itaque"),
        TextSearch: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesCountResponce != nil {
        // handle response
    }
}
```

## RetargetingPostForm

Updates a retargeting script

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
    res, err := s.Retargeting.RetargetingPostForm(ctx, operations.RetargetingPostFormRequest{
        APICoreDtoRetargetingRetargetingScript: shared.APICoreDtoRetargetingRetargetingScript{
            ID: sdk.Int64(545779),
            Name: sdk.String("Bobbie Thompson"),
            Script: sdk.String("dicta"),
        },
        ID: 30661,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## RetargetingPostJSON

Updates a retargeting script

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
    res, err := s.Retargeting.RetargetingPostJSON(ctx, operations.RetargetingPostJSONRequest{
        APICoreDtoRetargetingRetargetingScript: shared.APICoreDtoRetargetingRetargetingScript{
            ID: sdk.Int64(244376),
            Name: sdk.String("Ashley Wilkinson"),
            Script: sdk.String("atque"),
        },
        ID: 107472,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## RetargetingPostRaw

Updates a retargeting script

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
    res, err := s.Retargeting.RetargetingPostRaw(ctx, operations.RetargetingPostRawRequest{
        RequestBody: []byte("at"),
        ID: 287544,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## RetargetingPutForm

Creates a retargeting script

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
    res, err := s.Retargeting.RetargetingPutForm(ctx, shared.APICoreDtoRetargetingRetargetingScript{
        ID: sdk.Int64(794988),
        Name: sdk.String("Donna Aufderhar"),
        Script: sdk.String("aperiam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## RetargetingPutJSON

Creates a retargeting script

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
    res, err := s.Retargeting.RetargetingPutJSON(ctx, shared.APICoreDtoRetargetingRetargetingScript{
        ID: sdk.Int64(489459),
        Name: sdk.String("Jacob Sawayn"),
        Script: sdk.String("eligendi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## RetargetingPutRaw

Creates a retargeting script

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
    res, err := s.Retargeting.RetargetingPutRaw(ctx, []byte("dignissimos"))
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## GetRetargetingID

Get a retargeting script object

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
    res, err := s.Retargeting.GetRetargetingID(ctx, operations.GetRetargetingIDRequest{
        ID: 235834,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoRetargetingRetargetingScript != nil {
        // handle response
    }
}
```
