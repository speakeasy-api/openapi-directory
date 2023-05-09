# Vaults

## Overview

Access 1Password Vaults

### Available Operations

* [GetVaultByID](#getvaultbyid) - Get Vault details and metadata
* [GetVaults](#getvaults) - Get all Vaults

## GetVaultByID

Get Vault details and metadata

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
    res, err := s.Vaults.GetVaultByID(ctx, operations.GetVaultByIDRequest{
        VaultUUID: "provident",
    }, operations.GetVaultByIDSecurity{
        ConnectToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Vault != nil {
        // handle response
    }
}
```

## GetVaults

Get all Vaults

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
    res, err := s.Vaults.GetVaults(ctx, operations.GetVaultsRequest{
        Filter: sdk.String("name eq "Some Vault Name""),
    }, operations.GetVaultsSecurity{
        ConnectToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Vaults != nil {
        // handle response
    }
}
```
