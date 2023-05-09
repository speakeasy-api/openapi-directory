# Payrolls

### Available Operations

* [PayrollsAll](#payrollsall) - List Payroll
* [PayrollsOne](#payrollsone) - Get Payroll

## PayrollsAll

List Payroll

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
    res, err := s.Payrolls.PayrollsAll(ctx, operations.PayrollsAllRequest{
        Fields: sdk.String("alias"),
        Filter: &shared.PayrollsFilter{
            EndDate: sdk.String("2022-04-21"),
            StartDate: sdk.String("2022-04-08"),
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "at",
        XApideckConsumerID: "quaerat",
        XApideckServiceID: sdk.String("tempora"),
    }, operations.PayrollsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPayrollsResponse != nil {
        // handle response
    }
}
```

## PayrollsOne

Get Payroll

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
    res, err := s.Payrolls.PayrollsOne(ctx, operations.PayrollsOneRequest{
        Fields: sdk.String("vel"),
        PayrollID: "quod",
        Raw: sdk.Bool(false),
        XApideckAppID: "officiis",
        XApideckConsumerID: "qui",
        XApideckServiceID: sdk.String("dolorum"),
    }, operations.PayrollsOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPayrollResponse != nil {
        // handle response
    }
}
```
