# Integrations

## Overview

View useful information about codat's integrations.

### Available Operations

* [GetIntegrationBranding](#getintegrationbranding) - Get branding for an integration
* [ListIntegrations](#listintegrations) - List information on Codat's supported integrations

## GetIntegrationBranding

Retrieve Integration branding assets.

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
    res, err := s.Integrations.GetIntegrationBranding(ctx, operations.GetIntegrationBrandingRequest{
        PlatformKey: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Branding != nil {
        // handle response
    }
}
```

## ListIntegrations

Retrieve a list of available integrations support by datatype and state of release.

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
    res, err := s.Integrations.ListIntegrations(ctx, operations.ListIntegrationsRequest{
        OrderBy: sdk.String("aliquid"),
        Page: 675439,
        PageSize: sdk.Int(881104),
        Query: sdk.String("non"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Integrations != nil {
        // handle response
    }
}
```
