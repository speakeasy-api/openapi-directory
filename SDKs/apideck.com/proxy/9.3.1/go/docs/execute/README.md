# Execute

### Available Operations

* [DeleteProxy](#deleteproxy) - DELETE
* [GetProxy](#getproxy) - GET
* [OptionsProxy](#optionsproxy) - OPTIONS
* [PatchProxy](#patchproxy) - PATCH
* [PostProxy](#postproxy) - POST
* [PutProxy](#putproxy) - PUT

## DeleteProxy

Proxies a downstream DELETE request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
**Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.


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
    res, err := s.Execute.DeleteProxy(ctx, operations.DeleteProxyRequest{
        XApideckAppID: "nulla",
        XApideckConsumerID: "corrupti",
        XApideckDownstreamAuthorization: sdk.String("illum"),
        XApideckDownstreamURL: "vel",
        XApideckServiceID: "error",
    }, operations.DeleteProxySecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProxy200ApplicationJSONAny != nil {
        // handle response
    }
}
```

## GetProxy

Proxies a downstream GET request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
**Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.


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
    res, err := s.Execute.GetProxy(ctx, operations.GetProxyRequest{
        XApideckAppID: "deserunt",
        XApideckConsumerID: "suscipit",
        XApideckDownstreamAuthorization: sdk.String("iure"),
        XApideckDownstreamURL: "magnam",
        XApideckServiceID: "debitis",
    }, operations.GetProxySecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProxy200ApplicationJSONAny != nil {
        // handle response
    }
}
```

## OptionsProxy

Proxies a downstream OPTION request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
**Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.


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
    res, err := s.Execute.OptionsProxy(ctx, operations.OptionsProxyRequest{
        XApideckAppID: "ipsa",
        XApideckConsumerID: "delectus",
        XApideckDownstreamAuthorization: sdk.String("tempora"),
        XApideckDownstreamURL: "suscipit",
        XApideckServiceID: "molestiae",
    }, operations.OptionsProxySecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OptionsProxy200ApplicationJSONAny != nil {
        // handle response
    }
}
```

## PatchProxy

Proxies a downstream PATCH request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
**Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.


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
    res, err := s.Execute.PatchProxy(ctx, operations.PatchProxyRequest{
        RequestBody: []byte("minus"),
        XApideckAppID: "placeat",
        XApideckConsumerID: "voluptatum",
        XApideckDownstreamAuthorization: sdk.String("iusto"),
        XApideckDownstreamURL: "excepturi",
        XApideckServiceID: "nisi",
    }, operations.PatchProxySecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatchProxy200ApplicationJSONAny != nil {
        // handle response
    }
}
```

## PostProxy

Proxies a downstream POST request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
**Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.


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
    res, err := s.Execute.PostProxy(ctx, operations.PostProxyRequest{
        RequestBody: []byte("recusandae"),
        XApideckAppID: "temporibus",
        XApideckConsumerID: "ab",
        XApideckDownstreamAuthorization: sdk.String("quis"),
        XApideckDownstreamURL: "veritatis",
        XApideckServiceID: "deserunt",
    }, operations.PostProxySecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostProxy200ApplicationJSONAny != nil {
        // handle response
    }
}
```

## PutProxy

Proxies a downstream PUT request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
**Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.


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
    res, err := s.Execute.PutProxy(ctx, operations.PutProxyRequest{
        RequestBody: []byte("perferendis"),
        XApideckAppID: "ipsam",
        XApideckConsumerID: "repellendus",
        XApideckDownstreamAuthorization: sdk.String("sapiente"),
        XApideckDownstreamURL: "quo",
        XApideckServiceID: "odit",
    }, operations.PutProxySecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutProxy200ApplicationJSONAny != nil {
        // handle response
    }
}
```
