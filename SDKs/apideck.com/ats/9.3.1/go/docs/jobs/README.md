# Jobs

### Available Operations

* [JobsAll](#jobsall) - List Jobs
* [JobsOne](#jobsone) - Get Job

## JobsAll

List Jobs

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
        Cursor: sdk.String("dolorem"),
        Fields: sdk.String("culpa"),
        Limit: sdk.Int64(161309),
        Raw: sdk.Bool(false),
        XApideckAppID: "repellat",
        XApideckConsumerID: "mollitia",
        XApideckServiceID: sdk.String("occaecati"),
    }, operations.JobsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetJobsResponse != nil {
        // handle response
    }
}
```

## JobsOne

Get Job

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
        Fields: sdk.String("numquam"),
        ID: "67739251-aa52-4c3f-9ad0-19da1ffe78f0",
        Raw: sdk.Bool(false),
        XApideckAppID: "omnis",
        XApideckConsumerID: "voluptate",
        XApideckServiceID: sdk.String("cum"),
    }, operations.JobsOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetJobResponse != nil {
        // handle response
    }
}
```
