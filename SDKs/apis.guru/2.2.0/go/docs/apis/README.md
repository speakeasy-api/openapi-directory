# APIs

## Overview

Actions relating to APIs in the collection

### Available Operations

* [GetAPI](#getapi) - Retrieve one version of a particular API
* [GetMetrics](#getmetrics) - Get basic metrics
* [GetProvider](#getprovider) - List all APIs for a particular provider
* [GetProviders](#getproviders) - List all providers
* [GetServiceAPI](#getserviceapi) - Retrieve one version of a particular API with a serviceName.
* [GetServices](#getservices) - List all serviceNames for a particular provider
* [ListAPIs](#listapis) - List all APIs

## GetAPI

Returns the API entry for one specific version of an API where there is no serviceName.

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
    res, err := s.APIs.GetAPI(ctx, operations.GetAPIRequest{
        API: "2.1.0",
        Provider: "apis.guru",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.API != nil {
        // handle response
    }
}
```

## GetMetrics

Some basic metrics for the entire directory.
Just stunning numbers to put on a front page and are intended purely for WoW effect :)


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
    res, err := s.APIs.GetMetrics(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Metrics != nil {
        // handle response
    }
}
```

## GetProvider

List all APIs in the directory for a particular providerName
Returns links to the individual API entry for each API.


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
    res, err := s.APIs.GetProvider(ctx, operations.GetProviderRequest{
        Provider: "apis.guru",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIs != nil {
        // handle response
    }
}
```

## GetProviders

List all the providers in the directory


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
    res, err := s.APIs.GetProviders(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProviders200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetServiceAPI

Returns the API entry for one specific version of an API where there is a serviceName.

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
    res, err := s.APIs.GetServiceAPI(ctx, operations.GetServiceAPIRequest{
        API: "2.1.0",
        Provider: "apis.guru",
        Service: "graph",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.API != nil {
        // handle response
    }
}
```

## GetServices

List all serviceNames in the directory for a particular providerName


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
    res, err := s.APIs.GetServices(ctx, operations.GetServicesRequest{
        Provider: "apis.guru",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServices200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListAPIs

List all APIs in the directory.
Returns links to the OpenAPI definitions for each API in the directory.
If API exist in multiple versions `preferred` one is explicitly marked.
Some basic info from the OpenAPI definition is cached inside each object.
This allows you to generate some simple views without needing to fetch the OpenAPI definition for each API.


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
    res, err := s.APIs.ListAPIs(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIs != nil {
        // handle response
    }
}
```
