# Configuration

## Overview

Companies sync configuration.

### Available Operations

* [GetCompanyConfiguration](#getcompanyconfiguration) - Get company configuration
* [SaveCompanyConfiguration](#savecompanyconfiguration) - Set company configuration

## GetCompanyConfiguration

Gets a companies expense sync configuration

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
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Configuration.GetCompanyConfiguration(ctx, operations.GetCompanyConfigurationRequest{
        CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyConfiguration != nil {
        // handle response
    }
}
```

## SaveCompanyConfiguration

Sets a companies expense sync configuration

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
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Configuration.SaveCompanyConfiguration(ctx, operations.SaveCompanyConfigurationRequest{
        CompanyConfiguration: &shared.CompanyConfiguration{
            BankAccount: &shared.BankAccount{
                ID: sdk.String("32"),
            },
            Customer: &shared.Customer{
                ID: sdk.String("142"),
            },
            Supplier: &shared.Supplier{
                ID: sdk.String("124"),
            },
        },
        CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyConfiguration != nil {
        // handle response
    }
}
```
