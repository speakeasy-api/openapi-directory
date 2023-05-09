# APIKey

## Overview

Operations about api_keys

### Available Operations

* [APIKeyDeleteCurrent](#apikeydeletecurrent) - Delete current API key.  (Requires current API connection to be using an API key.)
* [APIKeyFindCurrent](#apikeyfindcurrent) - Show information about current API key.  (Requires current API connection to be using an API key.)
* [APIKeyUpdateCurrent](#apikeyupdatecurrent) - Update current API key.  (Requires current API connection to be using an API key.)

## APIKeyDeleteCurrent

Delete current API key.  (Requires current API connection to be using an API key.)

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
    res, err := s.APIKey.APIKeyDeleteCurrent(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## APIKeyFindCurrent

Show information about current API key.  (Requires current API connection to be using an API key.)

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
    res, err := s.APIKey.APIKeyFindCurrent(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKeyEntity != nil {
        // handle response
    }
}
```

## APIKeyUpdateCurrent

Update current API key.  (Requires current API connection to be using an API key.)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.APIKey.APIKeyUpdateCurrent(ctx, operations.APIKeyUpdateCurrentRequestBody{
        ExpiresAt: types.MustTimeFromString("2000-01-01T01:00:00Z"),
        Name: sdk.String("My Main API Key"),
        PermissionSet: operations.APIKeyUpdateCurrentRequestBodyPermissionSetEnumFull.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKeyEntity != nil {
        // handle response
    }
}
```
