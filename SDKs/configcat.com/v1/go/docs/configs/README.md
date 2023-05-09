# Configs

## Overview

With these endpoints you can manage your Configs.
This also can be used to manage [Feature Flags and Settings](#tag/Feature-Flags-and-Settings) and their 
[served values](#tag/Feature-Flag-and-Setting-values) through this API.

<a href="https://configcat.com/docs/main-concepts/#config" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Configs.

### Available Operations

* [CreateConfig](#createconfig) - Create Config
* [DeleteConfig](#deleteconfig) - Delete Config
* [GetConfig](#getconfig) - Get Config
* [GetConfigs](#getconfigs) - List Configs
* [UpdateConfig](#updateconfig) - Update Config

## CreateConfig

This endpoint creates a new Config in a specified Product 
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
    res, err := s.Configs.CreateConfig(ctx, operations.CreateConfigRequest{
        CreateConfigRequest: shared.CreateConfigRequest{
            Description: sdk.String("et"),
            Name: "Dale Boehm",
        },
        ProductID: "b90f3443-a110-48e0-adcf-4b921879fce9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigModelHaljson != nil {
        // handle response
    }
}
```

## DeleteConfig

This endpoint removes a Config identified by the `configId` parameter.

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
    res, err := s.Configs.DeleteConfig(ctx, operations.DeleteConfigRequest{
        ConfigID: "53f73ef7-fbc7-4abd-b4dd-39c0f5d2cff7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetConfig

This endpoint returns the metadata of a Config
identified by the `configId`.

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
    res, err := s.Configs.GetConfig(ctx, operations.GetConfigRequest{
        ConfigID: "c70a4562-6d43-4681-bf16-d9f5fce6c556",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigModelHaljson != nil {
        // handle response
    }
}
```

## GetConfigs

This endpoint returns the list of the Configs that belongs to the given Product identified by the
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
    res, err := s.Configs.GetConfigs(ctx, operations.GetConfigsRequest{
        ProductID: "146c3e25-0fb0-408c-82e1-41aac366c8dd",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigModelHaljsons != nil {
        // handle response
    }
}
```

## UpdateConfig

This endpoint updates a Config identified by the `configId` parameter.

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
    res, err := s.Configs.UpdateConfig(ctx, operations.UpdateConfigRequest{
        UpdateConfigRequest: shared.UpdateConfigRequest{
            Description: sdk.String("voluptas"),
            Name: sdk.String("Ryan Glover"),
        },
        ConfigID: "90747477-8a7b-4d46-ad28-c10ab3cdca42",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigModelHaljson != nil {
        // handle response
    }
}
```
