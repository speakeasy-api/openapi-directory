# Tax

### Available Operations

* [TaxAPIAll](#taxapiall) - Return all taxes for the account
* [TaxAPIDeleteForm](#taxapideleteform) - Delete an existing tax
* [TaxAPIDeleteJSON](#taxapideletejson) - Delete an existing tax
* [TaxAPIDeleteRaw](#taxapideleteraw) - Delete an existing tax
* [TaxAPINewForm](#taxapinewform) - Create a tax
* [TaxAPINewJSON](#taxapinewjson) - Create a tax
* [TaxAPINewRaw](#taxapinewraw) - Create a tax
* [TaxAPIUpdateForm](#taxapiupdateform) - Update an existing tax
* [TaxAPIUpdateJSON](#taxapiupdatejson) - Update an existing tax
* [TaxAPIUpdateRaw](#taxapiupdateraw) - Update an existing tax

## TaxAPIAll

Return all taxes for the account

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
    res, err := s.Tax.TaxAPIAll(ctx, operations.TaxAPIAllRequest{
        XAuthKey: "maiores",
        XAuthSecret: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaxDetailsAPIModels != nil {
        // handle response
    }
}
```

## TaxAPIDeleteForm

Delete an existing tax

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
    res, err := s.Tax.TaxAPIDeleteForm(ctx, operations.TaxAPIDeleteFormRequest{
        TaxDeleteAPIModel: shared.TaxDeleteAPIModel{
            ID: sdk.Int(72600),
        },
        XAuthKey: "doloribus",
        XAuthSecret: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaxAPIDeleteForm200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## TaxAPIDeleteJSON

Delete an existing tax

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
    res, err := s.Tax.TaxAPIDeleteJSON(ctx, operations.TaxAPIDeleteJSONRequest{
        TaxDeleteAPIModel: shared.TaxDeleteAPIModel{
            ID: sdk.Int(711310),
        },
        XAuthKey: "modi",
        XAuthSecret: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaxAPIDeleteJSON200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## TaxAPIDeleteRaw

Delete an existing tax

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
    res, err := s.Tax.TaxAPIDeleteRaw(ctx, operations.TaxAPIDeleteRawRequest{
        RequestBody: []byte("ipsam"),
        XAuthKey: "occaecati",
        XAuthSecret: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaxAPIDeleteRaw200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## TaxAPINewForm

Create a tax

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
    res, err := s.Tax.TaxAPINewForm(ctx, operations.TaxAPINewFormRequest{
        TaxCreateAPIModel: shared.TaxCreateAPIModel{
            Name: sdk.String("Devin Boyle"),
            Percentage: sdk.Float64(8400.17),
        },
        XAuthKey: "mollitia",
        XAuthSecret: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaxAPINewForm200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## TaxAPINewJSON

Create a tax

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
    res, err := s.Tax.TaxAPINewJSON(ctx, operations.TaxAPINewJSONRequest{
        TaxCreateAPIModel: shared.TaxCreateAPIModel{
            Name: sdk.String("Jeffrey Thiel"),
            Percentage: sdk.Float64(6277.56),
        },
        XAuthKey: "delectus",
        XAuthSecret: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaxAPINewJSON200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## TaxAPINewRaw

Create a tax

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
    res, err := s.Tax.TaxAPINewRaw(ctx, operations.TaxAPINewRawRequest{
        RequestBody: []byte("facere"),
        XAuthKey: "nobis",
        XAuthSecret: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaxAPINewRaw200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## TaxAPIUpdateForm

Update an existing tax

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
    res, err := s.Tax.TaxAPIUpdateForm(ctx, operations.TaxAPIUpdateFormRequest{
        TaxUpdateAPIModel: shared.TaxUpdateAPIModel{
            ID: sdk.Int(561121),
            Name: sdk.String("Paulette White"),
            Percentage: sdk.Float64(5469.5),
        },
        XAuthKey: "similique",
        XAuthSecret: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TaxAPIUpdateJSON

Update an existing tax

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
    res, err := s.Tax.TaxAPIUpdateJSON(ctx, operations.TaxAPIUpdateJSONRequest{
        TaxUpdateAPIModel: shared.TaxUpdateAPIModel{
            ID: sdk.Int(456599),
            Name: sdk.String("Jackie Fahey DDS"),
            Percentage: sdk.Float64(3258.55),
        },
        XAuthKey: "quos",
        XAuthSecret: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TaxAPIUpdateRaw

Update an existing tax

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
    res, err := s.Tax.TaxAPIUpdateRaw(ctx, operations.TaxAPIUpdateRawRequest{
        RequestBody: []byte("quas"),
        XAuthKey: "voluptatem",
        XAuthSecret: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
