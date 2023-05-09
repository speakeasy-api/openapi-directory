# SDK

## Overview

Domain API (WHOIS, Check, Batch)

### Available Operations

* [CheckDomain](#checkdomain) - Check domain availability
* [CreateBatch](#createbatch) - Create batch. Batch is then being processed until all provided items have been completed. At any time it can be `get` to provide current status with results optionally.
* [DeleteBatch](#deletebatch) - Delete batch
* [DomainRank](#domainrank) - Check domain rank (authority).
* [GetBatch](#getbatch) - Get batch
* [GetBatches](#getbatches) - Get your batches
* [QueryDb](#querydb) - Query domain database
* [Whois](#whois) - WHOIS query for a domain

## CheckDomain

Check domain availability

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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CheckDomain(ctx, operations.CheckDomainRequest{
        Domain: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckDomain200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateBatch

Create batch. Batch is then being processed until all provided items have been completed. At any time it can be `get` to provide current status with results optionally.

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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateBatch(ctx, operations.CreateBatchRequestBody{
        Domains: []string{
            "quibusdam",
            "unde",
            "nulla",
        },
        Operation: operations.CreateBatchRequestBodyOperationEnumCheck,
        Options: &operations.CreateBatchRequestBodyOptions{
            Format: operations.CreateBatchRequestBodyOptionsFormatEnumJSON.ToPointer(),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Batch != nil {
        // handle response
    }
}
```

## DeleteBatch

Delete batch

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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteBatch(ctx, operations.DeleteBatchRequest{
        ID: "69a674e0-f467-4cc8-b96e-d151a05dfc2d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DomainRank

Check domain rank (authority).

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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DomainRank(ctx, operations.DomainRankRequest{
        Domain: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DomainRank200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetBatch

Get batch

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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetBatch(ctx, operations.GetBatchRequest{
        ID: "f7cc78ca-1ba9-428f-8816-742cb7392059",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Batch != nil {
        // handle response
    }
}
```

## GetBatches

Get your batches

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetBatches(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ArrayOfBatch != nil {
        // handle response
    }
}
```

## QueryDb

Query domain database

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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.QueryDb(ctx, operations.QueryDbRequest{
        Query: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryDb200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Whois

WHOIS query for a domain

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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.Whois(ctx, operations.WhoisRequest{
        Domain: "iste",
        Format: operations.WhoisFormatEnumRaw.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
