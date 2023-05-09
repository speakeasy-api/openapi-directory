# Environments

## Overview

With these endpoints you can update existing Environments or add new ones into your selected [Product](#tag/Products). 

<a href="https://configcat.com/docs/main-concepts/#environment" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Environments.

### Available Operations

* [CreateEnvironment](#createenvironment) - Create Environment
* [DeleteEnvironment](#deleteenvironment) - Delete Environment
* [GetEnvironment](#getenvironment) - Get Environment
* [GetEnvironments](#getenvironments) - List Environments
* [UpdateEnvironment](#updateenvironment) - Update Environment

## CreateEnvironment

This endpoint creates a new Environment in a specified Product 
identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Environments.CreateEnvironment(ctx, operations.CreateEnvironmentRequest{
        CreateEnvironmentModel: shared.CreateEnvironmentModel{
            Color: sdk.String("voluptas"),
            Description: sdk.String("ab"),
            Name: "William Goodwin",
        },
        ProductID: "23c7e0bc-7178-4e47-96f2-a70c688282aa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnvironmentModelHaljson != nil {
        // handle response
    }
}
```

## DeleteEnvironment

This endpoint removes an Environment identified by the `environmentId` parameter.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Environments.DeleteEnvironment(ctx, operations.DeleteEnvironmentRequest{
        EnvironmentID: "482562f2-22e9-4817-ae17-cbe61e6b7b95",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetEnvironment

This endpoint returns the metadata of an Environment 
identified by the `environmentId`.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Environments.GetEnvironment(ctx, operations.GetEnvironmentRequest{
        EnvironmentID: "bc0ab3c2-0c4f-4378-9fd8-71f99dd2efd1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnvironmentModelHaljson != nil {
        // handle response
    }
}
```

## GetEnvironments

This endpoint returns the list of the Environments that belongs to the given Product identified by the
`productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Environments.GetEnvironments(ctx, operations.GetEnvironmentsRequest{
        ProductID: "21aa6f1e-674b-4db0-8f15-756082d68ea1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnvironmentModelHaljsons != nil {
        // handle response
    }
}
```

## UpdateEnvironment

This endpoint updates an Environment identified by the `environmentId` parameter.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Environments.UpdateEnvironment(ctx, operations.UpdateEnvironmentRequest{
        UpdateEnvironmentModel: shared.UpdateEnvironmentModel{
            Color: sdk.String("omnis"),
            Description: sdk.String("tenetur"),
            Name: sdk.String("Lynette Bosco II"),
        },
        EnvironmentID: "1339d080-86a1-4840-b94c-26071f93f5f0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnvironmentModelHaljson != nil {
        // handle response
    }
}
```
