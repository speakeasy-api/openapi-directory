# Pipelines

### Available Operations

* [PipelinesAdd](#pipelinesadd) - Create pipeline
* [PipelinesAll](#pipelinesall) - List pipelines
* [PipelinesDelete](#pipelinesdelete) - Delete pipeline
* [PipelinesOne](#pipelinesone) - Get pipeline
* [PipelinesUpdate](#pipelinesupdate) - Update pipeline

## PipelinesAdd

Create pipeline

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
    res, err := s.Pipelines.PipelinesAdd(ctx, operations.PipelinesAddRequest{
        PipelineInput: shared.PipelineInput{
            Active: sdk.Bool(false),
            Archived: sdk.Bool(false),
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            DisplayOrder: sdk.Int64(1),
            ID: sdk.String("default"),
            Name: "Sales Pipeline",
            Stages: []shared.PipelineStagesInput{
                shared.PipelineStagesInput{
                    DisplayOrder: sdk.Int64(1),
                    Name: sdk.String("Contract Sent"),
                    Value: sdk.String("CONTRACT_SENT"),
                    WinProbability: sdk.Int64(50),
                },
            },
            WinProbabilityEnabled: sdk.Bool(true),
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "omnis",
        XApideckConsumerID: "tenetur",
        XApideckServiceID: sdk.String("quasi"),
    }, operations.PipelinesAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePipelineResponse != nil {
        // handle response
    }
}
```

## PipelinesAll

List pipelines

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
    res, err := s.Pipelines.PipelinesAll(ctx, operations.PipelinesAllRequest{
        Cursor: sdk.String("at"),
        Fields: sdk.String("et"),
        Limit: sdk.Int64(454162),
        Raw: sdk.Bool(false),
        XApideckAppID: "ipsa",
        XApideckConsumerID: "minima",
        XApideckServiceID: sdk.String("veritatis"),
    }, operations.PipelinesAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPipelinesResponse != nil {
        // handle response
    }
}
```

## PipelinesDelete

Delete pipeline

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
    res, err := s.Pipelines.PipelinesDelete(ctx, operations.PipelinesDeleteRequest{
        ID: "339d0808-6a18-4403-94c2-6071f93f5f06",
        Raw: sdk.Bool(false),
        XApideckAppID: "quaerat",
        XApideckConsumerID: "consequuntur",
        XApideckServiceID: sdk.String("repellendus"),
    }, operations.PipelinesDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePipelineResponse != nil {
        // handle response
    }
}
```

## PipelinesOne

Get pipeline

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
    res, err := s.Pipelines.PipelinesOne(ctx, operations.PipelinesOneRequest{
        Fields: sdk.String("officia"),
        ID: "c7af515c-c413-4aa6-baae-8d67864dbb67",
        Raw: sdk.Bool(false),
        XApideckAppID: "corporis",
        XApideckConsumerID: "reiciendis",
        XApideckServiceID: sdk.String("assumenda"),
    }, operations.PipelinesOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPipelineResponse != nil {
        // handle response
    }
}
```

## PipelinesUpdate

Update pipeline

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
    res, err := s.Pipelines.PipelinesUpdate(ctx, operations.PipelinesUpdateRequest{
        PipelineInput: shared.PipelineInput{
            Active: sdk.Bool(false),
            Archived: sdk.Bool(false),
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            DisplayOrder: sdk.Int64(1),
            ID: sdk.String("default"),
            Name: "Sales Pipeline",
            Stages: []shared.PipelineStagesInput{
                shared.PipelineStagesInput{
                    DisplayOrder: sdk.Int64(1),
                    Name: sdk.String("Contract Sent"),
                    Value: sdk.String("CONTRACT_SENT"),
                    WinProbability: sdk.Int64(50),
                },
                shared.PipelineStagesInput{
                    DisplayOrder: sdk.Int64(1),
                    Name: sdk.String("Contract Sent"),
                    Value: sdk.String("CONTRACT_SENT"),
                    WinProbability: sdk.Int64(50),
                },
            },
            WinProbabilityEnabled: sdk.Bool(true),
        },
        ID: "e60b375e-d4f6-4fbe-a41f-33317fe35b60",
        Raw: sdk.Bool(false),
        XApideckAppID: "voluptates",
        XApideckConsumerID: "libero",
        XApideckServiceID: sdk.String("vitae"),
    }, operations.PipelinesUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePipelineResponse != nil {
        // handle response
    }
}
```
