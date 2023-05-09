# Apps

### Available Operations

* [DeleteAppsID](#deleteappsid) - Deletes an app
* [GetAccountsAccountIDApps](#getaccountsaccountidapps) - Lists account apps
* [PatchAppsID](#patchappsid) - Updates an app
* [PostAccountsAccountIDApps](#postaccountsaccountidapps) - Creates an app
* [PostAppsIDPkcs12](#postappsidpkcs12) - Updates app's APNS info from a .p12 file

## DeleteAppsID

Deletes an app

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
    res, err := s.Apps.DeleteAppsID(ctx, operations.DeleteAppsIDRequest{
        ID: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
    }, operations.DeleteAppsIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAccountsAccountIDApps

Lists account apps

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
    res, err := s.Apps.GetAccountsAccountIDApps(ctx, operations.GetAccountsAccountIDAppsRequest{
        AccountID: "impedit",
    }, operations.GetAccountsAccountIDAppsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppResponses != nil {
        // handle response
    }
}
```

## PatchAppsID

Updates an app

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
    res, err := s.Apps.PatchAppsID(ctx, operations.PatchAppsIDRequest{
        AppPatch: &shared.AppPatch{
            ApnsCertificate: sdk.String("cum"),
            ApnsPrivateKey: sdk.String("esse"),
            ApnsUseSandboxEndpoint: sdk.Bool(false),
            FcmKey: sdk.String("ipsum"),
            Name: sdk.String("Brandon Auer"),
            Status: sdk.String("sed"),
            TLSOnly: sdk.Bool(false),
        },
        ID: "9396fea7-596e-4b10-baaa-2352c5955907",
    }, operations.PatchAppsIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppResponse != nil {
        // handle response
    }
}
```

## PostAccountsAccountIDApps

Creates an app

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
    res, err := s.Apps.PostAccountsAccountIDApps(ctx, operations.PostAccountsAccountIDAppsRequest{
        AccountID: "culpa",
        AppPost: &shared.AppPost{
            ApnsCertificate: sdk.String("doloribus"),
            ApnsPrivateKey: sdk.String("sapiente"),
            ApnsUseSandboxEndpoint: sdk.Bool(false),
            FcmKey: sdk.String("architecto"),
            Name: "Mike Nicolas",
            Status: sdk.String("mollitia"),
            TLSOnly: sdk.Bool(false),
        },
    }, operations.PostAccountsAccountIDAppsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppResponse != nil {
        // handle response
    }
}
```

## PostAppsIDPkcs12

Updates app's APNS info from a .p12 file

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
    res, err := s.Apps.PostAppsIDPkcs12(ctx, operations.PostAppsIDPkcs12Request{
        AppPkcs12: &shared.AppPkcs12{
            P12File: shared.AppPkcs12P12File{
                Content: []byte("occaecati"),
                P12File: "numquam",
            },
            P12Pass: "commodi",
        },
        ID: "7739251a-a52c-43f5-ad01-9da1ffe78f09",
    }, operations.PostAppsIDPkcs12Security{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppResponse != nil {
        // handle response
    }
}
```
