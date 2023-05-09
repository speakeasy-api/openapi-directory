# Products

## Overview

With these endpoints you can manage your Products.
This also can be used to manage [Environments](#tag/Environments), [Configs](#tag/Configs), [Tags](#tag/Tags) and [Permission Groups](#tag/Permission-Groups) through this API.

<a href="https://configcat.com/docs/main-concepts/#product" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Products.

### Available Operations

* [CreateProduct](#createproduct) - Create Product
* [DeleteProduct](#deleteproduct) - Delete Product
* [GetProduct](#getproduct) - Get Product
* [GetProducts](#getproducts) - List Products
* [UpdateProduct](#updateproduct) - Update Product

## CreateProduct

This endpoint creates a new Product in a specified Organization 
identified by the `organizationId` parameter, which can be obtained from the [List Organizations](#operation/get-organizations) endpoint.

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
    res, err := s.Products.CreateProduct(ctx, operations.CreateProductRequest{
        CreateProductRequest: shared.CreateProductRequest{
            Description: sdk.String("voluptatem"),
            Name: "Phyllis Denesik",
        },
        OrganizationID: "2164cf9a-b836-46c7-a3ff-da9e06bee482",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductModelHaljson != nil {
        // handle response
    }
}
```

## DeleteProduct

This endpoint removes a Product identified by the `productId` parameter.

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
    res, err := s.Products.DeleteProduct(ctx, operations.DeleteProductRequest{
        ProductID: "5c1fc0e1-15c8-40bf-b918-544ec42defcc",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetProduct

This endpoint returns the metadata of a Product 
identified by the `productId`.

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
    res, err := s.Products.GetProduct(ctx, operations.GetProductRequest{
        ProductID: "e8f19777-73e6-4356-aa7b-408f05e3d48f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductModelHaljson != nil {
        // handle response
    }
}
```

## GetProducts

This endpoint returns the list of the Products that belongs to the user.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Products.GetProducts(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductModelHaljsons != nil {
        // handle response
    }
}
```

## UpdateProduct

This endpoint updates a Product identified by the `productId` parameter.

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
    res, err := s.Products.UpdateProduct(ctx, operations.UpdateProductRequest{
        UpdateProductRequest: shared.UpdateProductRequest{
            Description: sdk.String("fugiat"),
            Name: sdk.String("Mrs. Brendan Franecki"),
        },
        ProductID: "1f5fd942-59c0-4b36-b25e-a944f3b756c1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductModelHaljson != nil {
        // handle response
    }
}
```
