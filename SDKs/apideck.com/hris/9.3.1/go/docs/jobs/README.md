# Jobs

### Available Operations

* [JobsAll](#jobsall) - List Jobs
* [JobsOne](#jobsone) - One Job

## JobsAll

List Jobs for employee.

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
    res, err := s.Jobs.JobsAll(ctx, operations.JobsAllRequest{
        EmployeeID: "optio",
        Fields: sdk.String("accusamus"),
        Raw: sdk.Bool(false),
        XApideckAppID: "ad",
        XApideckConsumerID: "saepe",
        XApideckServiceID: sdk.String("suscipit"),
    }, operations.JobsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetHrisJobsResponse != nil {
        // handle response
    }
}
```

## JobsOne

A Job for employee.

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
    res, err := s.Jobs.JobsOne(ctx, operations.JobsOneRequest{
        EmployeeID: "deserunt",
        Fields: sdk.String("provident"),
        JobID: "minima",
        Raw: sdk.Bool(false),
        XApideckAppID: "repellendus",
        XApideckConsumerID: "totam",
        XApideckServiceID: sdk.String("similique"),
    }, operations.JobsOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetHrisJobResponse != nil {
        // handle response
    }
}
```
