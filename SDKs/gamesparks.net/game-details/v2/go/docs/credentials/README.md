# Credentials

## Overview

Game Credentials Rest V 2 Controller

### Available Operations

* [UpdateCredentialSecretUsingPOST](#updatecredentialsecretusingpost) - Resets the secret of a credential

## UpdateCredentialSecretUsingPOST

Resets the secret of a credential

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
    res, err := s.Credentials.UpdateCredentialSecretUsingPOST(ctx, operations.UpdateCredentialSecretUsingPOSTRequest{
        APIKey: "modi",
        CredentialName: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
