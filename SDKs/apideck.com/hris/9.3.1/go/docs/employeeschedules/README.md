# EmployeeSchedules

### Available Operations

* [EmployeeSchedulesAll](#employeeschedulesall) - List Employee Schedules

## EmployeeSchedulesAll

List schedules for employee, a schedule is a work pattern, not the actual worked hours, for an employee.

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
    res, err := s.EmployeeSchedules.EmployeeSchedulesAll(ctx, operations.EmployeeSchedulesAllRequest{
        EmployeeID: "omnis",
        Fields: sdk.String("molestiae"),
        Raw: sdk.Bool(false),
        XApideckAppID: "perferendis",
        XApideckConsumerID: "nihil",
        XApideckServiceID: sdk.String("magnam"),
    }, operations.EmployeeSchedulesAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEmployeeSchedulesResponse != nil {
        // handle response
    }
}
```
