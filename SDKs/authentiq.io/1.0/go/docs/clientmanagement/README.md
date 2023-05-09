# ClientManagement

### Available Operations

* [Client](#client) - List clients
* [ClientClientID](#clientclientid) - Delete a client
* [CreateClient](#createclient) - Register a client
* [GetClient](#getclient) - View a client
* [UpdateClient](#updateclient) - Update a client

## Client

Retrieve a list of clients.


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ClientManagement.Client(ctx, operations.ClientSecurity{
        ClientRegistrationToken: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Clients != nil {
        // handle response
    }
}
```

## ClientClientID

Delete a previously registered client.


OIDC Client Configuration Endpoint
<http://openid.net/specs/openid-connect-registration-1_0.html#ClientConfigurationEndpoint>

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ClientManagement.ClientClientID(ctx, operations.ClientClientIDRequest{
        ClientID: "ab",
    }, operations.ClientClientIDSecurity{
        ClientRegistrationToken: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateClient

Register a new client with this Authentiq Connect provider.

This endpoint is compatible with [OIDC's Client Registration](http://openid.net/specs/openid-connect-registration-1_0.html) extension.


OIDC Client Registration Endpoint
<http://openid.net/specs/openid-connect-registration-1_0.html#ClientRegistration>

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
    res, err := s.ClientManagement.CreateClient(ctx, shared.Client{
        ApplicationType: sdk.String("quis"),
        ClientID: sdk.String("veritatis"),
        ClientName: "deserunt",
        ClientURI: "perferendis",
        Contacts: []string{
            "repellendus",
            "sapiente",
        },
        DefaultMaxAge: sdk.Int64(778157),
        DefaultScopes: []string{
            "at",
        },
        GrantTypes: []string{
            "maiores",
            "molestiae",
            "quod",
            "quod",
        },
        LogoURI: sdk.String("esse"),
        PolicyURI: sdk.String("totam"),
        RedirectUris: []string{
            "dolorum",
            "dicta",
            "nam",
            "officia",
        },
        ResponseTypes: []string{
            "fugit",
            "deleniti",
            "hic",
        },
        TosURI: sdk.String("optio"),
    }, operations.CreateClientSecurity{
        ClientRegistrationToken: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetClient

Retrieve the configuration of a previously registered client.


OIDC Client Configuration Endpoint
<http://openid.net/specs/openid-connect-registration-1_0.html#ClientConfigurationEndpoint>

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ClientManagement.GetClient(ctx, operations.GetClientRequest{
        ClientID: "totam",
    }, operations.GetClientSecurity{
        ClientRegistrationToken: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Client != nil {
        // handle response
    }
}
```

## UpdateClient

Update the configuration of a previously registered client.


OIDC Client Configuration Endpoint
<http://openid.net/specs/openid-connect-registration-1_0.html#ClientConfigurationEndpoint>

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
    res, err := s.ClientManagement.UpdateClient(ctx, operations.UpdateClientRequest{
        Client: shared.Client{
            ApplicationType: sdk.String("beatae"),
            ClientID: sdk.String("commodi"),
            ClientName: "molestiae",
            ClientURI: "modi",
            Contacts: []string{
                "impedit",
            },
            DefaultMaxAge: sdk.Int64(736918),
            DefaultScopes: []string{
                "ipsum",
                "excepturi",
            },
            GrantTypes: []string{
                "perferendis",
            },
            LogoURI: sdk.String("ad"),
            PolicyURI: sdk.String("natus"),
            RedirectUris: []string{
                "iste",
            },
            ResponseTypes: []string{
                "natus",
            },
            TosURI: sdk.String("laboriosam"),
        },
        ClientID: "hic",
    }, operations.UpdateClientSecurity{
        ClientRegistrationToken: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Client != nil {
        // handle response
    }
}
```
