# Job

### Available Operations

* [JobSearchRead](#jobsearchread) - Return job details search result
* [JobSearchallRead](#jobsearchallread) - Return job details search result

## JobSearchRead

Return job details search result

### Response Class (Status 200)

* __{job_title}__: Used as a key word to search jobs,

For more details on how job are listed [see here][ref].
[ref]: https://etmdb.com/en/job-list/-updated_date

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
    res, err := s.Job.JobSearchRead(ctx, operations.JobSearchReadRequest{
        JobTitle: "Chief Interactions Developer",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## JobSearchallRead

Return job details search result

### Response Class (Status 200)

* __{company_name}__: Used as a key word to search jobs,

For more details on how job are listed [see here][ref].
[ref]: https://etmdb.com/en/job-list/-updated_date

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
    res, err := s.Job.JobSearchallRead(ctx, operations.JobSearchallReadRequest{
        CompanyName: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
