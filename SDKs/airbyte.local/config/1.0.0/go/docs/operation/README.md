# Operation

### Available Operations

* [CheckOperation](#checkoperation) - Check if an operation to be created is valid
* [CreateOperation](#createoperation) - Create an operation to be applied as part of a connection pipeline
* [DeleteOperation](#deleteoperation) - Delete an operation
* [GetOperation](#getoperation) - Returns an operation
* [ListOperationsForConnection](#listoperationsforconnection) - Returns all operations for a connection.
* [UpdateOperation](#updateoperation) - Update an operation

## CheckOperation

Check if an operation to be created is valid

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
    res, err := s.Operation.CheckOperation(ctx, shared.OperatorConfiguration{
        Dbt: &shared.OperatorDbt{
            DbtArguments: sdk.String("ut"),
            DockerImage: sdk.String("quaerat"),
            GitRepoBranch: sdk.String("architecto"),
            GitRepoURL: "praesentium",
        },
        Normalization: &shared.OperatorNormalization{
            Option: shared.OperatorNormalizationOptionEnumBasic.ToPointer(),
        },
        OperatorType: shared.OperatorTypeEnumWebhook,
        Webhook: &shared.OperatorWebhook{
            DbtCloud: &shared.OperatorWebhookDbtCloud{
                AccountID: 221781,
                JobID: 709051,
            },
            ExecutionBody: sdk.String("libero"),
            ExecutionURL: sdk.String("iste"),
            WebhookConfigID: sdk.String("1c8d975e-0e84-419d-8f84-f144f3e07edc"),
            WebhookType: shared.OperatorWebhookWebhookTypeEnumDbtCloud.ToPointer(),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckOperationRead != nil {
        // handle response
    }
}
```

## CreateOperation

Create an operation to be applied as part of a connection pipeline

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
    res, err := s.Operation.CreateOperation(ctx, shared.OperationCreate{
        Name: "Jay Pagac",
        OperatorConfiguration: shared.OperatorConfiguration{
            Dbt: &shared.OperatorDbt{
                DbtArguments: sdk.String("reiciendis"),
                DockerImage: sdk.String("sequi"),
                GitRepoBranch: sdk.String("porro"),
                GitRepoURL: "laborum",
            },
            Normalization: &shared.OperatorNormalization{
                Option: shared.OperatorNormalizationOptionEnumBasic.ToPointer(),
            },
            OperatorType: shared.OperatorTypeEnumWebhook,
            Webhook: &shared.OperatorWebhook{
                DbtCloud: &shared.OperatorWebhookDbtCloud{
                    AccountID: 842974,
                    JobID: 607624,
                },
                ExecutionBody: sdk.String("aut"),
                ExecutionURL: sdk.String("ipsam"),
                WebhookConfigID: sdk.String("a972e056-7282-427b-ad30-9470bf7a4fa8"),
                WebhookType: shared.OperatorWebhookWebhookTypeEnumDbtCloud.ToPointer(),
            },
        },
        WorkspaceID: "7cf535a6-fae5-44eb-b60c-321f023b75d2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationRead != nil {
        // handle response
    }
}
```

## DeleteOperation

Delete an operation

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
    res, err := s.Operation.DeleteOperation(ctx, shared.OperationIDRequestBody{
        OperationID: "367fe1a0-cc8d-4f79-b0a3-96d90c364b7c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOperation

Returns an operation

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
    res, err := s.Operation.GetOperation(ctx, shared.OperationIDRequestBody{
        OperationID: "15dfbace-188b-41c4-ae2c-8c6ce611feeb",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationRead != nil {
        // handle response
    }
}
```

## ListOperationsForConnection

List operations for connection.

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
    res, err := s.Operation.ListOperationsForConnection(ctx, shared.ConnectionIDRequestBody{
        ConnectionID: "1c7cbdb6-eec7-4437-8ba2-5317747dc915",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationReadList != nil {
        // handle response
    }
}
```

## UpdateOperation

Update an operation

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
    res, err := s.Operation.UpdateOperation(ctx, shared.OperationUpdate{
        Name: "Gilberto Corkery",
        OperationID: "f5dd6723-dc0f-45ae-af3a-6b7008787561",
        OperatorConfiguration: shared.OperatorConfiguration{
            Dbt: &shared.OperatorDbt{
                DbtArguments: sdk.String("quaerat"),
                DockerImage: sdk.String("amet"),
                GitRepoBranch: sdk.String("sapiente"),
                GitRepoURL: "corporis",
            },
            Normalization: &shared.OperatorNormalization{
                Option: shared.OperatorNormalizationOptionEnumBasic.ToPointer(),
            },
            OperatorType: shared.OperatorTypeEnumDbt,
            Webhook: &shared.OperatorWebhook{
                DbtCloud: &shared.OperatorWebhookDbtCloud{
                    AccountID: 435142,
                    JobID: 787629,
                },
                ExecutionBody: sdk.String("provident"),
                ExecutionURL: sdk.String("laudantium"),
                WebhookConfigID: sdk.String("b5555408-0d40-4bca-8c6c-bd6b5f3ec909"),
                WebhookType: shared.OperatorWebhookWebhookTypeEnumDbtCloud.ToPointer(),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationRead != nil {
        // handle response
    }
}
```
