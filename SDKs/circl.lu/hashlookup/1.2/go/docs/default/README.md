# Default

## Overview

Default namespace

### Available Operations

* [GetChildren](#getchildren) - Return children from a given SHA1.  A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.
* [GetInfo](#getinfo) - Info about the hashlookup database
* [GetLookupMd5](#getlookupmd5) - Lookup MD5.
* [GetLookupSha1](#getlookupsha1) - Lookup SHA-1.
* [GetLookupSha256](#getlookupsha256) - Lookup SHA-256.
* [GetParents](#getparents) - Return parents from a given SHA1. A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.
* [GetSessionCreate](#getsessioncreate) - Create a session key to keep search context. The session is attached to a name. After the session is created, the header `hashlookup_session` can be set to the session name.
* [GetSessionMatches](#getsessionmatches) - Return set of matching and non-matching hashes from a session.
* [GetStattop](#getstattop) - Return the top 100 of most queried values.
* [PostBulkmd5](#postbulkmd5) - Bulk search of MD5 hashes in a JSON array with the key 'hashes'.
* [PostBulksha1](#postbulksha1) - Bulk search of SHA1 hashes in a JSON array with the 'hashes'.

## GetChildren

Return children from a given SHA1.  A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.

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
    res, err := s.Default.GetChildren(ctx, operations.GetChildrenRequest{
        Count: 844266,
        Cursor: "unde",
        Sha1: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetInfo

Info about the hashlookup database

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
    res, err := s.Default.GetInfo(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetLookupMd5

Lookup MD5.

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
    res, err := s.Default.GetLookupMd5(ctx, operations.GetLookupMd5Request{
        Md5: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetLookupSha1

Lookup SHA-1.

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
    res, err := s.Default.GetLookupSha1(ctx, operations.GetLookupSha1Request{
        Sha1: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetLookupSha256

Lookup SHA-256.

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
    res, err := s.Default.GetLookupSha256(ctx, operations.GetLookupSha256Request{
        Sha256: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetParents

Return parents from a given SHA1. A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.

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
    res, err := s.Default.GetParents(ctx, operations.GetParentsRequest{
        Count: 623564,
        Cursor: "deserunt",
        Sha1: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSessionCreate

Create a session key to keep search context. The session is attached to a name. After the session is created, the header `hashlookup_session` can be set to the session name.

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
    res, err := s.Default.GetSessionCreate(ctx, operations.GetSessionCreateRequest{
        Name: "Dr. Valerie Toy",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSessionMatches

Return set of matching and non-matching hashes from a session.

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
    res, err := s.Default.GetSessionMatches(ctx, operations.GetSessionMatchesRequest{
        Name: "Minnie Schiller",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetStattop

Return the top 100 of most queried values.

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
    res, err := s.Default.GetStattop(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostBulkmd5

Bulk search of MD5 hashes in a JSON array with the key 'hashes'.

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
    res, err := s.Default.PostBulkmd5(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostBulksha1

Bulk search of SHA1 hashes in a JSON array with the 'hashes'.

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
    res, err := s.Default.PostBulksha1(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
