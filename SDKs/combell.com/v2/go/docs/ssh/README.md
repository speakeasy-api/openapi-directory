# SSH

### Available Operations

* [GetAllSSHKeys](#getallsshkeys) - Overview of SSH keys

## GetAllSSHKeys

Overview of SSH keys

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
    res, err := s.SSH.GetAllSSHKeys(ctx, operations.GetAllSSHKeysRequest{
        Skip: sdk.Int(292147),
        Take: sdk.Int(286915),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SSHKeyDetails != nil {
        // handle response
    }
}
```
