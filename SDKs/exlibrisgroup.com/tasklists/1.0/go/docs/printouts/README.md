# Printouts

### Available Operations

* [GetAlmawsV1TaskListsPrintouts](#getalmawsv1tasklistsprintouts) - Retrieve Printouts
* [GetAlmawsV1TaskListsPrintoutsPrintoutID](#getalmawsv1tasklistsprintoutsprintoutid) - Retrieve a Printout
* [PostAlmawsV1TaskListsPrintouts](#postalmawsv1tasklistsprintouts) - Act on Printouts
* [PostAlmawsV1TaskListsPrintoutsPrintoutID](#postalmawsv1tasklistsprintoutsprintoutid) - Printout Service

## GetAlmawsV1TaskListsPrintouts

This API returns a list of Printouts.

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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Printouts.GetAlmawsV1TaskListsPrintouts(ctx, operations.GetAlmawsV1TaskListsPrintoutsRequest{
        Letter: sdk.String("voluptatum"),
        Limit: sdk.Int64(479977),
        Offset: sdk.Int64(568045),
        PrinterID: sdk.String("nisi"),
        PrintoutID: sdk.String("recusandae"),
        Status: sdk.String("temporibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAlmawsV1TaskListsPrintouts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetAlmawsV1TaskListsPrintoutsPrintoutID

This Web service returns a Printout given a Printout ID.

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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Printouts.GetAlmawsV1TaskListsPrintoutsPrintoutID(ctx, operations.GetAlmawsV1TaskListsPrintoutsPrintoutIDRequest{
        PrintoutID: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems != nil {
        // handle response
    }
}
```

## PostAlmawsV1TaskListsPrintouts

This API performs an action on printouts: mark as printed or canceled. 10,000 records can be handled in one requests. Only printouts which were updated will be returned.

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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Printouts.PostAlmawsV1TaskListsPrintouts(ctx, operations.PostAlmawsV1TaskListsPrintoutsRequest{
        Letter: sdk.String("quis"),
        Op: "veritatis",
        PrinterID: sdk.String("deserunt"),
        PrintoutID: sdk.String("perferendis"),
        Status: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema != nil {
        // handle response
    }
}
```

## PostAlmawsV1TaskListsPrintoutsPrintoutID

This API operates on an printout. given a Printout ID.

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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Printouts.PostAlmawsV1TaskListsPrintoutsPrintoutID(ctx, operations.PostAlmawsV1TaskListsPrintoutsPrintoutIDRequest{
        Op: "repellendus",
        PrintoutID: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems != nil {
        // handle response
    }
}
```
