# AllowedOriginsCompanyLevel

### Available Operations

* [DeleteCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOriginsOriginID](#deletecompaniescompanyidapicredentialsapicredentialidallowedoriginsoriginid) - Delete an allowed origin
* [GetCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOrigins](#getcompaniescompanyidapicredentialsapicredentialidallowedorigins) - Get a list of allowed origins
* [GetCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOriginsOriginID](#getcompaniescompanyidapicredentialsapicredentialidallowedoriginsoriginid) - Get an allowed origin
* [PostCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOrigins](#postcompaniescompanyidapicredentialsapicredentialidallowedorigins) - Create an allowed origin

## DeleteCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOriginsOriginID

Removes the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path. As soon as an allowed origin is removed, we no longer accept client-side requests from that domain.

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
    res, err := s.AllowedOriginsCompanyLevel.DeleteCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOriginsOriginID(ctx, operations.DeleteCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOriginsOriginIDRequest{
        APICredentialID: "aliquid",
        CompanyID: "cupiditate",
        OriginID: "quos",
    }, operations.DeleteCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOriginsOriginIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOrigins

Returns the list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) for the API credential identified in the path.

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
    res, err := s.AllowedOriginsCompanyLevel.GetCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOrigins(ctx, operations.GetCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOriginsRequest{
        APICredentialID: "perferendis",
        CompanyID: "magni",
    }, operations.GetCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOriginsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AllowedOriginsResponse != nil {
        // handle response
    }
}
```

## GetCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOriginsOriginID

Returns the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path.

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
    res, err := s.AllowedOriginsCompanyLevel.GetCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOriginsOriginID(ctx, operations.GetCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOriginsOriginIDRequest{
        APICredentialID: "assumenda",
        CompanyID: "ipsam",
        OriginID: "alias",
    }, operations.GetCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOriginsOriginIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AllowedOrigin != nil {
        // handle response
    }
}
```

## PostCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOrigins

Adds a new [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) to the API credential's list of allowed origins.

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
    res, err := s.AllowedOriginsCompanyLevel.PostCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOrigins(ctx, operations.PostCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOriginsRequest{
        AllowedOrigin: &shared.AllowedOrigin{
            Links: &shared.Links{
                Self: shared.LinksElement{
                    Href: sdk.String("fugit"),
                },
            },
            Domain: "dolorum",
            ID: sdk.String("94bb4f63-c969-4e9a-befa-77dfb14cd66a"),
        },
        APICredentialID: "accusamus",
        CompanyID: "non",
    }, operations.PostCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOriginsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AllowedOriginsResponse != nil {
        // handle response
    }
}
```
