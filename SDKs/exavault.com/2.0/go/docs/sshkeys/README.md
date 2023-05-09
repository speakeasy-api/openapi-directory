# SSHKeys

## Overview

THe SSH Keys APIs allow you to manage SSH keys for users in your account. You can upload the contents of a public key for a user, get information for keys which are already defined, and remove a key from a user.

### Available Operations

* [AddSSHKey](#addsshkey) - Create a new SSH Key
* [DeleteSSHKey](#deletesshkey) - Delete an SSH Key
* [GetSSHKey](#getsshkey) - Get metadata for an SSH Key
* [GetSSHKeysList](#getsshkeyslist) - Get metadata for a list of SSH Keys

## AddSSHKey

Create a new SSH Key for a user. Provide the Public Key as formatted from the ssh-keygen command (openssh format or RFC-4716 format).

If you'd prefer to let us generate your key automatically, you can log in to your account via the web portal and set up new keys via the SSH Keys page. 

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
    res, err := s.SSHKeys.AddSSHKey(ctx, operations.AddSSHKeyRequest{
        RequestBody: &operations.AddSSHKeyAddSSHKeyRequestBody{
            PublicKey: "maxime",
            UserID: 537023,
        },
        EvAccessToken: "facilis",
        EvAPIKey: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SSHKeyResponse != nil {
        // handle response
    }
}
```

## DeleteSSHKey

Delete the specified SSH key. This will not delete or deactivate the user tied to the key.

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
    res, err := s.SSHKeys.DeleteSSHKey(ctx, operations.DeleteSSHKeyRequest{
        EvAccessToken: "architecto",
        EvAPIKey: "architecto",
        ID: "e5b7fd2e-d028-4921-8ddc-692601fb576b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSSHKey

Return the information for a single SSH Key

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
    res, err := s.SSHKeys.GetSSHKey(ctx, operations.GetSSHKeyRequest{
        EvAccessToken: "eaque",
        EvAPIKey: "pariatur",
        ID: "5f0d30c5-fbb2-4587-8532-02c73d5fe9b9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SSHKeyResponse != nil {
        // handle response
    }
}
```

## GetSSHKeysList

Returns a list of SSH Keys within the account. Can be filtered for a single user.

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
    res, err := s.SSHKeys.GetSSHKeysList(ctx, operations.GetSSHKeysListRequest{
        EvAccessToken: "voluptatem",
        EvAPIKey: "porro",
        Limit: sdk.Int64(164694),
        Offset: sdk.Int64(500026),
        UserID: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SSHKeyCollectionResponse != nil {
        // handle response
    }
}
```
