# Me

### Available Operations

* [MeGetMe](#megetme) - Retrieve current account data
* [MeGetMePlan](#megetmeplan) - Retrieve current account plan

## MeGetMe

Retrieve current account data

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
    res, err := s.Me.MeGetMe(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAccountingUser != nil {
        // handle response
    }
}
```

## MeGetMePlan

Retrieve current account plan

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
    res, err := s.Me.MeGetMePlan(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAccountingPlan != nil {
        // handle response
    }
}
```
