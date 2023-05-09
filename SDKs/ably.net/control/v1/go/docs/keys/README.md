# Keys

### Available Operations

* [GetAppsAppIDKeys](#getappsappidkeys) - Lists app keys
* [PatchAppsAppIDKeysKeyID](#patchappsappidkeyskeyid) - Updates a key
* [PostAppsAppIDKeys](#postappsappidkeys) - Creates a key
* [PostAppsAppIDKeysKeyIDRevoke](#postappsappidkeyskeyidrevoke) - Revokes a key

## GetAppsAppIDKeys

Lists app keys

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
    res, err := s.Keys.GetAppsAppIDKeys(ctx, operations.GetAppsAppIDKeysRequest{
        AppID: "voluptate",
    }, operations.GetAppsAppIDKeysSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeyResponses != nil {
        // handle response
    }
}
```

## PatchAppsAppIDKeysKeyID

Updates a key

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
    res, err := s.Keys.PatchAppsAppIDKeysKeyID(ctx, operations.PatchAppsAppIDKeysKeyIDRequest{
        AppID: "cum",
        KeyID: "perferendis",
        KeyPatch: &shared.KeyPatch{
            Capability: map[string][]string{
                "reprehenderit": []string{
                    "maiores",
                    "dicta",
                },
            },
            Name: sdk.String("Miss Valerie Kshlerin"),
        },
    }, operations.PatchAppsAppIDKeysKeyIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeyResponse != nil {
        // handle response
    }
}
```

## PostAppsAppIDKeys

Creates a key

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
    res, err := s.Keys.PostAppsAppIDKeys(ctx, operations.PostAppsAppIDKeysRequest{
        AppID: "accusamus",
        KeyPost: &shared.KeyPost{
            Capability: map[string][]string{
                "repudiandae": []string{
                    "ipsum",
                },
                "quidem": []string{
                    "excepturi",
                    "pariatur",
                    "modi",
                },
            },
            Name: "Dr. Jordan Von",
        },
    }, operations.PostAppsAppIDKeysSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeyResponse != nil {
        // handle response
    }
}
```

## PostAppsAppIDKeysKeyIDRevoke

Revokes a key

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
    res, err := s.Keys.PostAppsAppIDKeysKeyIDRevoke(ctx, operations.PostAppsAppIDKeysKeyIDRevokeRequest{
        AppID: "veritatis",
        KeyID: "itaque",
    }, operations.PostAppsAppIDKeysKeyIDRevokeSecurity{
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
