# MyAPICredential

### Available Operations

* [DeleteMeAllowedOriginsOriginID](#deletemeallowedoriginsoriginid) - Remove allowed origin
* [GetMe](#getme) - Get API credential details
* [GetMeAllowedOrigins](#getmeallowedorigins) - Get allowed origins
* [GetMeAllowedOriginsOriginID](#getmeallowedoriginsoriginid) - Get allowed origin details
* [PostMeAllowedOrigins](#postmeallowedorigins) - Add allowed origin

## DeleteMeAllowedOriginsOriginID

Removes the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) specified in the path.
The API key from the request is used to identify the [API credential](https://docs.adyen.com/development-resources/api-credentials).

You can make this request with any of the Management API roles.

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
    res, err := s.MyAPICredential.DeleteMeAllowedOriginsOriginID(ctx, operations.DeleteMeAllowedOriginsOriginIDRequest{
        OriginID: "odit",
    }, operations.DeleteMeAllowedOriginsOriginIDSecurity{
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

## GetMe

Returns your [API credential](https://docs.adyen.com/development-resources/api-credentials) details based on the API Key you used in the request.

You can make this request with any of the Management API roles.

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
    res, err := s.MyAPICredential.GetMe(ctx, operations.GetMeSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MeAPICredential != nil {
        // handle response
    }
}
```

## GetMeAllowedOrigins

Returns the list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) of your [API credential](https://docs.adyen.com/development-resources/api-credentials) based on the API key you used in the request.

You can make this request with any of the Management API roles.

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
    res, err := s.MyAPICredential.GetMeAllowedOrigins(ctx, operations.GetMeAllowedOriginsSecurity{
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

## GetMeAllowedOriginsOriginID

Returns the details of the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) specified in the path.
The API key from the request is used to identify the [API credential](https://docs.adyen.com/development-resources/api-credentials).

You can make this request with any of the Management API roles.

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
    res, err := s.MyAPICredential.GetMeAllowedOriginsOriginID(ctx, operations.GetMeAllowedOriginsOriginIDRequest{
        OriginID: "nemo",
    }, operations.GetMeAllowedOriginsOriginIDSecurity{
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

## PostMeAllowedOrigins

Adds an allowed origin to the list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) of your API credential.
The API key from the request is used to identify the [API credential](https://docs.adyen.com/development-resources/api-credentials).

You can make this request with any of the Management API roles.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MyAPICredential.PostMeAllowedOrigins(ctx, shared.CreateAllowedOriginRequest{
        Links: &shared.Links{
            Self: shared.LinksElement{
                Href: sdk.String("quasi"),
            },
        },
        Domain: "iure",
        ID: sdk.String("fe4c8b71-1e5b-47fd-aed0-28921cddc692"),
    }, operations.PostMeAllowedOriginsSecurity{
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
