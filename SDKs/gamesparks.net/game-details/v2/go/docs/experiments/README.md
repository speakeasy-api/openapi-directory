# Experiments

## Overview

Experiment Rest Controller

### Available Operations

* [CreateExperimentUsingPOST](#createexperimentusingpost) - createExperiment
* [DELETEExperimentUsingDELETE](#deleteexperimentusingdelete) - deleteExperiment
* [DoActionExperimentUsingPOST](#doactionexperimentusingpost) - doActionExperiment
* [GETExperimentUsingGET](#getexperimentusingget) - getExperiment
* [GETExperimentsUsingGET](#getexperimentsusingget) - getExperiments
* [UpdateExperimentUsingPUT](#updateexperimentusingput) - updateExperiment

## CreateExperimentUsingPOST

createExperiment

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Experiments.CreateExperimentUsingPOST(ctx, operations.CreateExperimentUsingPOSTRequest{
        ExperimentModel: shared.ExperimentModel{
            Active: sdk.Bool(false),
            ChangedFieldsAndInitialValues: map[string]interface{}{
                "cum": "esse",
                "ipsum": "excepturi",
                "aspernatur": "perferendis",
                "ad": "natus",
            },
            Complete: sdk.Bool(false),
            Config: &shared.ExperimentConfigModel{
                PlayerMongoQuery: sdk.String("sed"),
                PlayerQuery: sdk.String("iste"),
                Variants: sdk.String("dolor"),
            },
            EndDate: types.MustTimeFromString("2022-03-24T20:42:46.563Z"),
            ID: sdk.Int64(943749),
            Measurements: sdk.String("saepe"),
            MeasurementsEsQuery: sdk.String("fuga"),
            Name: sdk.String("Stacy Moore"),
            PercentHash: sdk.String("quidem"),
            PublishedStages: []string{
                "ipsa",
            },
            StartDate: types.MustTimeFromString("2020-12-31T21:22:14.646Z"),
        },
        APIKey: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExperimentModel != nil {
        // handle response
    }
}
```

## DELETEExperimentUsingDELETE

deleteExperiment

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
    res, err := s.Experiments.DELETEExperimentUsingDELETE(ctx, operations.DELETEExperimentUsingDELETERequest{
        APIKey: "laborum",
        ID: 170909,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessageModel != nil {
        // handle response
    }
}
```

## DoActionExperimentUsingPOST

doActionExperiment

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
    res, err := s.Experiments.DoActionExperimentUsingPOST(ctx, operations.DoActionExperimentUsingPOSTRequest{
        Action: operations.DoActionExperimentUsingPOSTActionEnumStart,
        APIKey: "corporis",
        ID: 128926,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExperimentModel != nil {
        // handle response
    }
}
```

## GETExperimentUsingGET

getExperiment

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
    res, err := s.Experiments.GETExperimentUsingGET(ctx, operations.GETExperimentUsingGETRequest{
        APIKey: "nobis",
        ID: 315428,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExperimentModel != nil {
        // handle response
    }
}
```

## GETExperimentsUsingGET

getExperiments

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
    res, err := s.Experiments.GETExperimentsUsingGET(ctx, operations.GETExperimentsUsingGETRequest{
        APIKey: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExperimentModels != nil {
        // handle response
    }
}
```

## UpdateExperimentUsingPUT

updateExperiment

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Experiments.UpdateExperimentUsingPUT(ctx, operations.UpdateExperimentUsingPUTRequest{
        ExperimentModel: shared.ExperimentModel{
            Active: sdk.Bool(false),
            ChangedFieldsAndInitialValues: map[string]interface{}{
                "minima": "excepturi",
                "accusantium": "iure",
            },
            Complete: sdk.Bool(false),
            Config: &shared.ExperimentConfigModel{
                PlayerMongoQuery: sdk.String("culpa"),
                PlayerQuery: sdk.String("doloribus"),
                Variants: sdk.String("sapiente"),
            },
            EndDate: types.MustTimeFromString("2022-05-07T17:33:24.154Z"),
            ID: sdk.Int64(208876),
            Measurements: sdk.String("culpa"),
            MeasurementsEsQuery: sdk.String("consequuntur"),
            Name: sdk.String("Shaun McCullough"),
            PercentHash: sdk.String("quam"),
            PublishedStages: []string{
                "velit",
                "error",
            },
            StartDate: types.MustTimeFromString("2022-08-30T15:03:11.112Z"),
        },
        APIKey: "vitae",
        ID: 674752,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExperimentModel != nil {
        // handle response
    }
}
```
