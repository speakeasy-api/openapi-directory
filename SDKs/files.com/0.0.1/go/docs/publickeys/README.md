# PublicKeys

## Overview

Operations about public_keys

### Available Operations

* [DeletePublicKeysID](#deletepublickeysid) - Delete Public Key
* [GetPublicKeys](#getpublickeys) - List Public Keys
* [GetPublicKeysID](#getpublickeysid) - Show Public Key
* [PatchPublicKeysID](#patchpublickeysid) - Update Public Key
* [PostPublicKeys](#postpublickeys) - Create Public Key

## DeletePublicKeysID

Delete Public Key

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
    res, err := s.PublicKeys.DeletePublicKeysID(ctx, operations.DeletePublicKeysIDRequest{
        ID: 106429,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPublicKeys

List Public Keys

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
    res, err := s.PublicKeys.GetPublicKeys(ctx, operations.GetPublicKeysRequest{
        Cursor: sdk.String("dolores"),
        PerPage: sdk.Int(316488),
        UserID: sdk.Int(389135),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublicKeyEntities != nil {
        // handle response
    }
}
```

## GetPublicKeysID

Show Public Key

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
    res, err := s.PublicKeys.GetPublicKeysID(ctx, operations.GetPublicKeysIDRequest{
        ID: 246535,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublicKeyEntity != nil {
        // handle response
    }
}
```

## PatchPublicKeysID

Update Public Key

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
    res, err := s.PublicKeys.PatchPublicKeysID(ctx, operations.PatchPublicKeysIDRequest{
        RequestBody: operations.PatchPublicKeysIDRequestBody{
            Title: "My Main Key",
        },
        ID: 952143,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublicKeyEntity != nil {
        // handle response
    }
}
```

## PostPublicKeys

Create Public Key

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
    res, err := s.PublicKeys.PostPublicKeys(ctx, operations.PostPublicKeysRequestBody{
        PublicKey: "molestias",
        Title: "My Main Key",
        UserID: sdk.Int(300029),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublicKeyEntity != nil {
        // handle response
    }
}
```
