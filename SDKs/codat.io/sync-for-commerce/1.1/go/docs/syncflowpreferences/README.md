# SyncFlowPreferences

## Overview

Configure preferences for any given sync for commerce company using sync flow.

### Available Operations

* [GetConfigTextSyncFlow](#getconfigtextsyncflow) - Retrieve preferences for text fields on Sync Flow
* [GetSyncFlowURL](#getsyncflowurl) - Retrieve sync flow url
* [GetVisibleAccounts](#getvisibleaccounts) - List visible accounts
* [UpdateConfigTextSyncFlow](#updateconfigtextsyncflow) - Update preferences for text fields on sync flow
* [UpdateVisibleAccountsSyncFlow](#updatevisibleaccountssyncflow) - Update the visible accounts on Sync Flow

## GetConfigTextSyncFlow

To enable retrieval of preferences set for the text fields on Sync Flow.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SyncFlowPreferences.GetConfigTextSyncFlow(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.LocalizationInfo != nil {
        // handle response
    }
}
```

## GetSyncFlowURL

Get a URL for Sync Flow including a one time passcode.

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
    res, err := s.SyncFlowPreferences.GetSyncFlowURL(ctx, operations.GetSyncFlowURLRequest{
        AccountingKey: "quibusdam",
        CommerceKey: "sed",
        MerchantIdentifier: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncFlowURL != nil {
        // handle response
    }
}
```

## GetVisibleAccounts

Enable retrieval for accounts which are visible on sync flow.

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
    res, err := s.SyncFlowPreferences.GetVisibleAccounts(ctx, operations.GetVisibleAccountsRequest{
        ClientID: "d028921c-ddc6-4926-81fb-576b0d5f0d30",
        PlatformKey: "c5fbb258-7053-4202-873d-5fe9b90c2890",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VisibleAccounts != nil {
        // handle response
    }
}
```

## UpdateConfigTextSyncFlow

To enable update of preferences set for the text fields on sync flow.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SyncFlowPreferences.UpdateConfigTextSyncFlow(ctx, map[string]shared.Localization{
        "rerum": shared.Localization{
            Required: sdk.Bool(false),
            Text: sdk.String("adipisci"),
        },
        "asperiores": shared.Localization{
            Required: sdk.Bool(false),
            Text: sdk.String("earum"),
        },
        "modi": shared.Localization{
            Required: sdk.Bool(false),
            Text: sdk.String("iste"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocalizationInfo != nil {
        // handle response
    }
}
```

## UpdateVisibleAccountsSyncFlow

To enable update of accounts visible preferences set on Sync Flow.

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
    res, err := s.SyncFlowPreferences.UpdateVisibleAccountsSyncFlow(ctx, operations.UpdateVisibleAccountsSyncFlowRequest{
        VisibleAccounts: &shared.VisibleAccounts{
            VisibleAccounts: []string{
                "deleniti",
                "pariatur",
                "provident",
            },
        },
        CommerceKey: "cbf48633-323f-49b7-bf3a-4100674ebf69",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VisibleAccounts != nil {
        // handle response
    }
}
```
