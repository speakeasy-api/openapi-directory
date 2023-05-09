# AccountCompanyLevel

### Available Operations

* [GetCompanies](#getcompanies) - Get a list of company accounts
* [GetCompaniesCompanyID](#getcompaniescompanyid) - Get a company account
* [GetCompaniesCompanyIDMerchants](#getcompaniescompanyidmerchants) - Get a list of merchant accounts

## GetCompanies

Returns the list of company accounts that your API credential has access to. The list is grouped into pages as defined by the query parameters.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Account read

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
    res, err := s.AccountCompanyLevel.GetCompanies(ctx, operations.GetCompaniesRequest{
        PageNumber: sdk.Int(456150),
        PageSize: sdk.Int(216550),
    }, operations.GetCompaniesSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCompanyResponse != nil {
        // handle response
    }
}
```

## GetCompaniesCompanyID

Returns the company account specified in the path. Your API credential must have access to the company account. 

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Account read

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
    res, err := s.AccountCompanyLevel.GetCompaniesCompanyID(ctx, operations.GetCompaniesCompanyIDRequest{
        CompanyID: "excepturi",
    }, operations.GetCompaniesCompanyIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Company != nil {
        // handle response
    }
}
```

## GetCompaniesCompanyIDMerchants

Returns the list of merchant accounts under the company account specified in the path. The list only includes merchant accounts that your API credential has access to. The list is grouped into pages as defined by the query parameters. 

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Account read

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
    res, err := s.AccountCompanyLevel.GetCompaniesCompanyIDMerchants(ctx, operations.GetCompaniesCompanyIDMerchantsRequest{
        CompanyID: "aspernatur",
        PageNumber: sdk.Int(18789),
        PageSize: sdk.Int(324141),
    }, operations.GetCompaniesCompanyIDMerchantsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMerchantResponse != nil {
        // handle response
    }
}
```
