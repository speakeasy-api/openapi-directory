# Backups

### Available Operations

* [CreateBackup](#createbackup) - Create backup
* [DownloadBackup](#downloadbackup) - Download backup
* [GetBackups](#getbackups) - List backups
* [SendDownloadBackupEmail](#senddownloadbackupemail) - Send download backup email

## CreateBackup

Create backup

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
    res, err := s.Backups.CreateBackup(ctx, operations.CreateBackupRequestBody{
        WithUploads: false,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBackup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DownloadBackup

Download backup

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
    res, err := s.Backups.DownloadBackup(ctx, operations.DownloadBackupRequest{
        Filename: "voluptatum",
        Token: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetBackups

List backups

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Backups.GetBackups(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBackups200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## SendDownloadBackupEmail

Send download backup email

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
    res, err := s.Backups.SendDownloadBackupEmail(ctx, operations.SendDownloadBackupEmailRequest{
        Filename: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
