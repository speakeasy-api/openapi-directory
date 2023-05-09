# Downloads

## Overview

File download without authentication headers

### Available Operations

* [DownloadAvatar](#downloadavatar) - Download avatar
* [DownloadFileViaToken](#downloadfileviatoken) - Download file
* [DownloadFileViaToken1](#downloadfileviatoken1) - Download file
* [DownloadZipArchiveViaToken](#downloadziparchiveviatoken) - Download ZIP archive

## DownloadAvatar

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>

### Description:
Download avatar for given user ID and UUID.

### Precondition:
Valid UUID.

### Postcondition:
Stream is returned.

### Further Information:
None.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Downloads.DownloadAvatar(ctx, operations.DownloadAvatarRequest{
        UserID: 758616,
        UUID: "816742cb-7392-4059-a939-6fea7596eb10",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadAvatar200ApplicationOctetStreamString != nil {
        // handle response
    }
}
```

## DownloadFileViaToken

### Description:
Download a file.

### Precondition:
Valid download token.

### Postcondition:
Stream is returned.

### Further Information:
Range requests are supported.

Range Requests
<https://tools.ietf.org/html/rfc7233>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Downloads.DownloadFileViaToken(ctx, operations.DownloadFileViaTokenRequest{
        Range: sdk.String("reiciendis"),
        GenericMimetype: sdk.Bool(false),
        Inline: sdk.Bool(false),
        Token: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DownloadFileViaToken1

### Description:
Download a file.

### Precondition:
Valid download token.

### Postcondition:
Stream is returned.

### Further Information:
Range requests are supported.

Range Requests
<https://tools.ietf.org/html/rfc7233>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Downloads.DownloadFileViaToken1(ctx, operations.DownloadFileViaToken1Request{
        Range: sdk.String("mollitia"),
        GenericMimetype: sdk.Bool(false),
        Inline: sdk.Bool(false),
        Token: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DownloadZipArchiveViaToken

### Description:
Download multiple files in a ZIP archive.

### Precondition:
Valid download token.

### Postcondition:
Stream is returned.

### Further Information:
Create a download token with `POST /nodes/zip` API.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Downloads.DownloadZipArchiveViaToken(ctx, operations.DownloadZipArchiveViaTokenRequest{
        Token: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
