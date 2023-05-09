# Session

### Available Operations

* [CreateSessionUsingGET](#createsessionusingget) - creates a new session. validUntil is an unix timestamp in seconds
* [CreateSessionUsingPOST](#createsessionusingpost) - creates a new session. validUntil is an unix timestamp in seconds
* [DeleteSessionUsingGET](#deletesessionusingget) - deletes a session
* [DeleteSessionUsingPOST](#deletesessionusingpost) - deletes a session
* [GETSessionInfoUsingGET](#getsessioninfousingget) - returns informations about a session
* [GetSessionInfoUsingPOST](#getsessioninfousingpost) - returns informations about a session

## CreateSessionUsingGET

creates a new session. validUntil is an unix timestamp in seconds

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Session.CreateSessionUsingGET(ctx, operations.CreateSessionUsingGETRequest{
        AuthorID: sdk.String("maiores"),
        GroupID: sdk.String("dicta"),
        ValidUntil: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSessionUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateSessionUsingPOST

creates a new session. validUntil is an unix timestamp in seconds

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Session.CreateSessionUsingPOST(ctx, operations.CreateSessionUsingPOSTRequest{
        AuthorID: sdk.String("dolore"),
        GroupID: sdk.String("iusto"),
        ValidUntil: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSessionUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteSessionUsingGET

deletes a session

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Session.DeleteSessionUsingGET(ctx, operations.DeleteSessionUsingGETRequest{
        SessionID: sdk.String("harum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSessionUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteSessionUsingPOST

deletes a session

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Session.DeleteSessionUsingPOST(ctx, operations.DeleteSessionUsingPOSTRequest{
        SessionID: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSessionUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GETSessionInfoUsingGET

returns informations about a session

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Session.GETSessionInfoUsingGET(ctx, operations.GETSessionInfoUsingGETRequest{
        SessionID: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETSessionInfoUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSessionInfoUsingPOST

returns informations about a session

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Session.GetSessionInfoUsingPOST(ctx, operations.GetSessionInfoUsingPOSTRequest{
        SessionID: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSessionInfoUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```
