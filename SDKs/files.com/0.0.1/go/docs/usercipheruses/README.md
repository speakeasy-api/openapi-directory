# UserCipherUses

## Overview

Operations about user_cipher_uses

### Available Operations

* [GetUserCipherUses](#getusercipheruses) - List User Cipher Uses

## GetUserCipherUses

List User Cipher Uses

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
    res, err := s.UserCipherUses.GetUserCipherUses(ctx, operations.GetUserCipherUsesRequest{
        Cursor: sdk.String("consectetur"),
        PerPage: sdk.Int(244889),
        UserID: sdk.Int(538869),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserCipherUseEntities != nil {
        // handle response
    }
}
```
