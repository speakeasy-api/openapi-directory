# SftpHostKeys

## Overview

Operations about sftp_host_keys

### Available Operations

* [DeleteSftpHostKeysID](#deletesftphostkeysid) - Delete Sftp Host Key
* [GetSftpHostKeys](#getsftphostkeys) - List Sftp Host Keys
* [GetSftpHostKeysID](#getsftphostkeysid) - Show Sftp Host Key
* [PatchSftpHostKeysID](#patchsftphostkeysid) - Update Sftp Host Key
* [PostSftpHostKeys](#postsftphostkeys) - Create Sftp Host Key

## DeleteSftpHostKeysID

Delete Sftp Host Key

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
    res, err := s.SftpHostKeys.DeleteSftpHostKeysID(ctx, operations.DeleteSftpHostKeysIDRequest{
        ID: 521996,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSftpHostKeys

List Sftp Host Keys

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
    res, err := s.SftpHostKeys.GetSftpHostKeys(ctx, operations.GetSftpHostKeysRequest{
        Cursor: sdk.String("at"),
        PerPage: sdk.Int(773084),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SftpHostKeyEntities != nil {
        // handle response
    }
}
```

## GetSftpHostKeysID

Show Sftp Host Key

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
    res, err := s.SftpHostKeys.GetSftpHostKeysID(ctx, operations.GetSftpHostKeysIDRequest{
        ID: 179410,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SftpHostKeyEntity != nil {
        // handle response
    }
}
```

## PatchSftpHostKeysID

Update Sftp Host Key

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
    res, err := s.SftpHostKeys.PatchSftpHostKeysID(ctx, operations.PatchSftpHostKeysIDRequest{
        RequestBody: &operations.PatchSftpHostKeysIDRequestBody{
            Name: sdk.String("Andre Carroll V"),
            PrivateKey: sdk.String("provident"),
        },
        ID: 936469,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SftpHostKeyEntity != nil {
        // handle response
    }
}
```

## PostSftpHostKeys

Create Sftp Host Key

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
    res, err := s.SftpHostKeys.PostSftpHostKeys(ctx, operations.PostSftpHostKeysRequestBody{
        Name: sdk.String("Dr. Terrell Stanton"),
        PrivateKey: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SftpHostKeyEntity != nil {
        // handle response
    }
}
```
