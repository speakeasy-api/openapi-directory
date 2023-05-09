# Scheduler

### Available Operations

* [ExecuteDestinationCheckConnection](#executedestinationcheckconnection) - Run check connection for a given destination configuration
* [ExecuteSourceCheckConnection](#executesourcecheckconnection) - Run check connection for a given source configuration
* [ExecuteSourceDiscoverSchema](#executesourcediscoverschema) - Run discover schema for a given source a source configuration

## ExecuteDestinationCheckConnection

Run check connection for a given destination configuration

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
    res, err := s.Scheduler.ExecuteDestinationCheckConnection(ctx, shared.DestinationCoreConfig{
        ConnectionConfiguration: "adipisci",
        DestinationDefinitionID: "04f926ba-d255-4381-9b47-4b0ed20e5624",
        DestinationID: sdk.String("8fff639a-910a-4bdc-ab62-676696e1ec00"),
        WorkspaceID: "221b335d-89ac-4b3e-8fda-8d0c549ef030",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckConnectionRead != nil {
        // handle response
    }
}
```

## ExecuteSourceCheckConnection

Run check connection for a given source configuration

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
    res, err := s.Scheduler.ExecuteSourceCheckConnection(ctx, shared.SourceCoreConfig{
        ConnectionConfiguration: "doloremque",
        SourceDefinitionID: "4978a61f-a1cf-4206-88f7-7c1ffc71dca1",
        SourceID: sdk.String("63f2a3c8-0a97-4ff3-b4cd-df857a9e6187"),
        WorkspaceID: "6c6ab21d-29df-4c94-96fe-cd799390066a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckConnectionRead != nil {
        // handle response
    }
}
```

## ExecuteSourceDiscoverSchema

Run discover schema for a given source a source configuration

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
    res, err := s.Scheduler.ExecuteSourceDiscoverSchema(ctx, shared.SourceCoreConfig{
        ConnectionConfiguration: "autem",
        SourceDefinitionID: "d2d00035-5338-4cec-886f-a21e9152cb31",
        SourceID: sdk.String("19167b8e-3c8d-4b03-808d-6d364ffd4559"),
        WorkspaceID: "06d1263d-48e9-435c-ac9e-81f30be3e432",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceDiscoverSchemaRead != nil {
        // handle response
    }
}
```
