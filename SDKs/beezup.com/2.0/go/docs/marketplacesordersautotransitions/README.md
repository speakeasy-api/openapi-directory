# MarketplacesOrdersAutoTransitions

### Available Operations

* [ConfigureAutomaticTransitions](#configureautomatictransitions) - Configure new or existing automatic Order status transition
* [GetAutomaticTransitions](#getautomatictransitions) - Get list of configured automatic Order status transitions

## ConfigureAutomaticTransitions

Configure new or existing automatic Order status transition

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MarketplacesOrdersAutoTransitions.ConfigureAutomaticTransitions(ctx, shared.ConfigureAutomaticTransitionRequest{
        AutomaticTransitions: []shared.AutomaticTransition{
            shared.AutomaticTransition{
                AccountID: 1234,
                Enabled: true,
                MarketplaceTechnicalCode: "Amazon",
                OrderStatusTransitionID: 1234,
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAutomaticTransitions

Get list of configured automatic Order status transitions

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
    res, err := s.MarketplacesOrdersAutoTransitions.GetAutomaticTransitions(ctx, operations.GetAutomaticTransitionsRequest{
        IfNoneMatch: sdk.String("consectetur"),
        StoreID: sdk.String("adipisci"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutomaticTransitionInfoList != nil {
        // handle response
    }
}
```
