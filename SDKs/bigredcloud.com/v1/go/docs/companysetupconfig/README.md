# CompanySetupConfig

### Available Operations

* [CompanySetupConfigGet](#companysetupconfigget) - Returns the company configuration settings.
* [CompanySetupConfigGetCompanyOptions](#companysetupconfiggetcompanyoptions) - Returns the company option setting.
* [CompanySetupConfigGetFinancialYear](#companysetupconfiggetfinancialyear) - Returns the financial year.

## CompanySetupConfigGet

Returns the company configuration settings.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CompanySetupConfig.CompanySetupConfigGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanySetupConfigViewModel != nil {
        // handle response
    }
}
```

## CompanySetupConfigGetCompanyOptions

Returns the company option setting.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CompanySetupConfig.CompanySetupConfigGetCompanyOptions(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyOptionDto != nil {
        // handle response
    }
}
```

## CompanySetupConfigGetFinancialYear

Returns the financial year.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CompanySetupConfig.CompanySetupConfigGetFinancialYear(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.FinancialYearDto != nil {
        // handle response
    }
}
```
