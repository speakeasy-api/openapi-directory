# WorkType

### Available Operations

* [WorkTypeAPIAll](#worktypeapiall) - Return all work types for the account
* [WorkTypeAPIDeleteForm](#worktypeapideleteform) - Delete an existing work type
* [WorkTypeAPIDeleteJSON](#worktypeapideletejson) - Delete an existing work type
* [WorkTypeAPIDeleteRaw](#worktypeapideleteraw) - Delete an existing work type
* [WorkTypeAPIDetails](#worktypeapidetails) - Return work type details
* [WorkTypeAPINewForm](#worktypeapinewform) - Create a work type
* [WorkTypeAPINewJSON](#worktypeapinewjson) - Create a work type
* [WorkTypeAPINewRaw](#worktypeapinewraw) - Create a work type
* [WorkTypeAPISearch](#worktypeapisearch) - Return all work types for the account that match the query param
* [WorkTypeAPIUpdateForm](#worktypeapiupdateform) - Update an existing work type
* [WorkTypeAPIUpdateJSON](#worktypeapiupdatejson) - Update an existing work type
* [WorkTypeAPIUpdateRaw](#worktypeapiupdateraw) - Update an existing work type

## WorkTypeAPIAll

Return all work types for the account

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
    res, err := s.WorkType.WorkTypeAPIAll(ctx, operations.WorkTypeAPIAllRequest{
        XAuthKey: "quas",
        XAuthSecret: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkTypeDetailsAPIModels != nil {
        // handle response
    }
}
```

## WorkTypeAPIDeleteForm

Delete an existing work type

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.WorkType.WorkTypeAPIDeleteForm(ctx, operations.WorkTypeAPIDeleteFormRequest{
        WorkTypeDeleteAPIModel: shared.WorkTypeDeleteAPIModel{
            ID: sdk.Int(874283),
        },
        XAuthKey: "fuga",
        XAuthSecret: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkTypeAPIDeleteForm200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## WorkTypeAPIDeleteJSON

Delete an existing work type

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.WorkType.WorkTypeAPIDeleteJSON(ctx, operations.WorkTypeAPIDeleteJSONRequest{
        WorkTypeDeleteAPIModel: shared.WorkTypeDeleteAPIModel{
            ID: sdk.Int(983060),
        },
        XAuthKey: "error",
        XAuthSecret: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkTypeAPIDeleteJSON200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## WorkTypeAPIDeleteRaw

Delete an existing work type

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.WorkType.WorkTypeAPIDeleteRaw(ctx, operations.WorkTypeAPIDeleteRawRequest{
        RequestBody: []byte("a"),
        XAuthKey: "consectetur",
        XAuthSecret: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkTypeAPIDeleteRaw200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## WorkTypeAPIDetails

Return work type details

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
    res, err := s.WorkType.WorkTypeAPIDetails(ctx, operations.WorkTypeAPIDetailsRequest{
        WorkTypeID: 977641,
        XAuthKey: "assumenda",
        XAuthSecret: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkTypeDetailsAPIModel != nil {
        // handle response
    }
}
```

## WorkTypeAPINewForm

Create a work type

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.WorkType.WorkTypeAPINewForm(ctx, operations.WorkTypeAPINewFormRequest{
        WorkTypeCreateAPIModel: shared.WorkTypeCreateAPIModel{
            Title: sdk.String("Miss"),
        },
        XAuthKey: "delectus",
        XAuthSecret: "odio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkTypeAPINewForm200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## WorkTypeAPINewJSON

Create a work type

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.WorkType.WorkTypeAPINewJSON(ctx, operations.WorkTypeAPINewJSONRequest{
        WorkTypeCreateAPIModel: shared.WorkTypeCreateAPIModel{
            Title: sdk.String("Dr."),
        },
        XAuthKey: "aut",
        XAuthSecret: "quam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkTypeAPINewJSON200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## WorkTypeAPINewRaw

Create a work type

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.WorkType.WorkTypeAPINewRaw(ctx, operations.WorkTypeAPINewRawRequest{
        RequestBody: []byte("omnis"),
        XAuthKey: "similique",
        XAuthSecret: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkTypeAPINewRaw200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## WorkTypeAPISearch

Return all work types for the account that match the query param

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
    res, err := s.WorkType.WorkTypeAPISearch(ctx, operations.WorkTypeAPISearchRequest{
        QueryOptionsOrder: operations.WorkTypeAPISearchQueryOptionsOrderEnumNone.ToPointer(),
        QueryOptionsOrderBy: sdk.String("facere"),
        QueryOptionsPage: sdk.Int(208639),
        QueryOptionsPageSize: sdk.Int(340604),
        QueryOptionsQuery: sdk.String("in"),
        XAuthKey: "sed",
        XAuthSecret: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkTypeDetailsAPIModels != nil {
        // handle response
    }
}
```

## WorkTypeAPIUpdateForm

Update an existing work type

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.WorkType.WorkTypeAPIUpdateForm(ctx, operations.WorkTypeAPIUpdateFormRequest{
        WorkTypeUpdateAPIModel: shared.WorkTypeUpdateAPIModel{
            ID: sdk.Int(784059),
            Title: sdk.String("Dr."),
        },
        XAuthKey: "soluta",
        XAuthSecret: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## WorkTypeAPIUpdateJSON

Update an existing work type

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.WorkType.WorkTypeAPIUpdateJSON(ctx, operations.WorkTypeAPIUpdateJSONRequest{
        WorkTypeUpdateAPIModel: shared.WorkTypeUpdateAPIModel{
            ID: sdk.Int(967047),
            Title: sdk.String("Mrs."),
        },
        XAuthKey: "vero",
        XAuthSecret: "eos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## WorkTypeAPIUpdateRaw

Update an existing work type

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.WorkType.WorkTypeAPIUpdateRaw(ctx, operations.WorkTypeAPIUpdateRawRequest{
        RequestBody: []byte("quas"),
        XAuthKey: "quasi",
        XAuthSecret: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
