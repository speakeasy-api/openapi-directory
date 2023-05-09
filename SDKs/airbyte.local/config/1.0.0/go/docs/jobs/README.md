# Jobs

### Available Operations

* [CancelJob](#canceljob) - Cancels a job
* [GetAttemptNormalizationStatusesForJob](#getattemptnormalizationstatusesforjob) - Get normalization status to determine if we can bypass normalization phase
* [GetJobDebugInfo](#getjobdebuginfo) - Gets all information needed to debug this job
* [GetJobInfo](#getjobinfo) - Get information about a job
* [GetJobInfoLight](#getjobinfolight) - Get information about a job excluding attempt info and logs
* [GetLastReplicationJob](#getlastreplicationjob)
* [ListJobsFor](#listjobsfor) - Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.

## CancelJob

Cancels a job

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
    res, err := s.Jobs.CancelJob(ctx, shared.JobIDRequestBody{
        ID: 685467,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobInfoRead != nil {
        // handle response
    }
}
```

## GetAttemptNormalizationStatusesForJob

Get normalization status to determine if we can bypass normalization phase

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
    res, err := s.Jobs.GetAttemptNormalizationStatusesForJob(ctx, shared.JobIDRequestBody{
        ID: 943103,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AttemptNormalizationStatusReadList != nil {
        // handle response
    }
}
```

## GetJobDebugInfo

Gets all information needed to debug this job

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
    res, err := s.Jobs.GetJobDebugInfo(ctx, shared.JobIDRequestBody{
        ID: 49499,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobDebugInfoRead != nil {
        // handle response
    }
}
```

## GetJobInfo

Get information about a job

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
    res, err := s.Jobs.GetJobInfo(ctx, shared.JobIDRequestBody{
        ID: 211301,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobInfoRead != nil {
        // handle response
    }
}
```

## GetJobInfoLight

Get information about a job excluding attempt info and logs

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
    res, err := s.Jobs.GetJobInfoLight(ctx, shared.JobIDRequestBody{
        ID: 101854,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobInfoLightRead != nil {
        // handle response
    }
}
```

## GetLastReplicationJob

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
    res, err := s.Jobs.GetLastReplicationJob(ctx, shared.ConnectionIDRequestBody{
        ConnectionID: "02d514f4-cc6f-418b-b962-1a6a4f77a87e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobOptionalRead != nil {
        // handle response
    }
}
```

## ListJobsFor

Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.

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
    res, err := s.Jobs.ListJobsFor(ctx, shared.JobListRequestBody{
        ConfigID: "earum",
        ConfigTypes: []shared.JobConfigTypeEnum{
            shared.JobConfigTypeEnumResetConnection,
        },
        IncludingJobID: sdk.Int64(263346),
        Pagination: &shared.Pagination{
            PageSize: sdk.Int64(701978),
            RowOffset: sdk.Int64(930111),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobReadList != nil {
        // handle response
    }
}
```
