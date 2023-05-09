# EmployeePayrolls

### Available Operations

* [EmployeePayrollsAll](#employeepayrollsall) - List Employee Payrolls
* [EmployeePayrollsOne](#employeepayrollsone) - Get Employee Payroll

## EmployeePayrollsAll

List payrolls for employee

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
    res, err := s.EmployeePayrolls.EmployeePayrollsAll(ctx, operations.EmployeePayrollsAllRequest{
        EmployeeID: "provident",
        Fields: sdk.String("nam"),
        Filter: &shared.PayrollsFilter{
            EndDate: sdk.String("2022-04-21"),
            StartDate: sdk.String("2022-04-08"),
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "id",
        XApideckConsumerID: "blanditiis",
        XApideckServiceID: sdk.String("deleniti"),
    }, operations.EmployeePayrollsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEmployeePayrollsResponse != nil {
        // handle response
    }
}
```

## EmployeePayrollsOne

Get payroll for employee

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
    res, err := s.EmployeePayrolls.EmployeePayrollsOne(ctx, operations.EmployeePayrollsOneRequest{
        EmployeeID: "sapiente",
        Fields: sdk.String("amet"),
        PayrollID: "deserunt",
        Raw: sdk.Bool(false),
        XApideckAppID: "nisi",
        XApideckConsumerID: "vel",
        XApideckServiceID: sdk.String("natus"),
    }, operations.EmployeePayrollsOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEmployeePayrollResponse != nil {
        // handle response
    }
}
```
