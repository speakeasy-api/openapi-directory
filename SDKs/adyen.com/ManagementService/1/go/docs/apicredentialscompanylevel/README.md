# APICredentialsCompanyLevel

### Available Operations

* [GetCompaniesCompanyIDAPICredentials](#getcompaniescompanyidapicredentials) - Get a list of API credentials
* [GetCompaniesCompanyIDAPICredentialsAPICredentialID](#getcompaniescompanyidapicredentialsapicredentialid) - Get an API credential
* [PatchCompaniesCompanyIDAPICredentialsAPICredentialID](#patchcompaniescompanyidapicredentialsapicredentialid) - Update an API credential.
* [PostCompaniesCompanyIDAPICredentials](#postcompaniescompanyidapicredentials) - Create an API credential.

## GetCompaniesCompanyIDAPICredentials

Returns the list of [API credentials](https://docs.adyen.com/development-resources/api-credentials) for the company account. The list is grouped into pages as defined by the query parameters.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

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
    res, err := s.APICredentialsCompanyLevel.GetCompaniesCompanyIDAPICredentials(ctx, operations.GetCompaniesCompanyIDAPICredentialsRequest{
        CompanyID: "quibusdam",
        PageNumber: sdk.Int(602763),
        PageSize: sdk.Int(857946),
    }, operations.GetCompaniesCompanyIDAPICredentialsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCompanyAPICredentialsResponse != nil {
        // handle response
    }
}
```

## GetCompaniesCompanyIDAPICredentialsAPICredentialID

Returns the [API credential](https://docs.adyen.com/development-resources/api-credentials) identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

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
    res, err := s.APICredentialsCompanyLevel.GetCompaniesCompanyIDAPICredentialsAPICredentialID(ctx, operations.GetCompaniesCompanyIDAPICredentialsAPICredentialIDRequest{
        APICredentialID: "corrupti",
        CompanyID: "illum",
    }, operations.GetCompaniesCompanyIDAPICredentialsAPICredentialIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyAPICredential != nil {
        // handle response
    }
}
```

## PatchCompaniesCompanyIDAPICredentialsAPICredentialID

Changes the API credential's roles, merchant account access, or allowed origins. The request has the new values for the fields you want to change. The response contains the full updated API credential, including the new values from the request. 

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

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
    res, err := s.APICredentialsCompanyLevel.PatchCompaniesCompanyIDAPICredentialsAPICredentialID(ctx, operations.PatchCompaniesCompanyIDAPICredentialsAPICredentialIDRequest{
        UpdateCompanyAPICredentialRequest: &shared.UpdateCompanyAPICredentialRequest{
            Active: sdk.Bool(false),
            AllowedOrigins: []string{
                "error",
                "deserunt",
            },
            AssociatedMerchantAccounts: []string{
                "iure",
                "magnam",
            },
            Description: sdk.String("debitis"),
            Roles: []string{
                "delectus",
            },
        },
        APICredentialID: "tempora",
        CompanyID: "suscipit",
    }, operations.PatchCompaniesCompanyIDAPICredentialsAPICredentialIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyAPICredential != nil {
        // handle response
    }
}
```

## PostCompaniesCompanyIDAPICredentials

Creates an [API credential](https://docs.adyen.com/development-resources/api-credentials) for the company account identified in the path. In the request, you can specify which merchant accounts the new API credential will have access to, as well as its roles and allowed origins.

The response includes several types of authentication details:
* [API key](https://docs.adyen.com/development-resources/api-authentication#api-key-authentication): used for API request authentication.
* [Client key](https://docs.adyen.com/development-resources/client-side-authentication#how-it-works): public key used for client-side authentication.
* [Username and password](https://docs.adyen.com/development-resources/api-authentication#using-basic-authentication): used for basic authentication.

> Make sure you store the API key securely in your system. You won't be able to retrieve it later.

If your API key is lost or compromised, you need to [generate a new API key](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/companies/{companyId}/apiCredentials/{apiCredentialId}/generateApiKey).

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

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
    res, err := s.APICredentialsCompanyLevel.PostCompaniesCompanyIDAPICredentials(ctx, operations.PostCompaniesCompanyIDAPICredentialsRequest{
        CreateCompanyAPICredentialRequest: &shared.CreateCompanyAPICredentialRequest{
            AllowedOrigins: []string{
                "minus",
                "placeat",
            },
            AssociatedMerchantAccounts: []string{
                "iusto",
                "excepturi",
                "nisi",
            },
            Description: sdk.String("recusandae"),
            Roles: []string{
                "ab",
                "quis",
                "veritatis",
                "deserunt",
            },
        },
        CompanyID: "perferendis",
    }, operations.PostCompaniesCompanyIDAPICredentialsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCompanyAPICredentialResponse != nil {
        // handle response
    }
}
```
