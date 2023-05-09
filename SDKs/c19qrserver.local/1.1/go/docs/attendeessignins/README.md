# AttendeesSignins

## Overview

Endpoints related to attendees signing in on the premises

### Available Operations

* [DeleteSigninSigninID](#deletesigninsigninid) - Delete a signin record
* [GetSigninSigninID](#getsigninsigninid) - Retrieve the information associated with a signin record
* [GetSignins](#getsignins) - Get signin info
* [PostSignin](#postsignin) - Create a new signin record
* [PutSigninSigninID](#putsigninsigninid) - Update a signin record

## DeleteSigninSigninID

Delete a signin record      


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
            TokenHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AttendeesSignins.DeleteSigninSigninID(ctx, operations.DeleteSigninSigninIDRequest{
        SigninID: 1,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSigninSigninID

Retrieve the information associated with a signin record


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
            TokenHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AttendeesSignins.GetSigninSigninID(ctx, operations.GetSigninSigninIDRequest{
        SigninID: 1,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Signin != nil {
        // handle response
    }
}
```

## GetSignins

Returns a list of signin objects sorted by signin ID descending.

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
            TokenHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AttendeesSignins.GetSignins(ctx, operations.GetSigninsRequest{
        LessThan: sdk.Int64(548814),
        ReturnCount: sdk.Int64(592845),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Signins != nil {
        // handle response
    }
}
```

## PostSignin

Create a new signin record

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            TokenHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AttendeesSignins.PostSignin(ctx, shared.Signin{
        Dt: sdk.Float64(1593409124.23),
        Email: sdk.String("jqp@example.com"),
        ID: sdk.Int64(125),
        Name: "John Q. Public",
        Phone: "(111)222-3333",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SigninResponse != nil {
        // handle response
    }
}
```

## PutSigninSigninID

Update a signin record


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            TokenHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AttendeesSignins.PutSigninSigninID(ctx, operations.PutSigninSigninIDRequest{
        Signin: &shared.Signin{
            Dt: sdk.Float64(1593409124.23),
            Email: sdk.String("jqp@example.com"),
            ID: sdk.Int64(125),
            Name: "John Q. Public",
            Phone: "(111)222-3333",
        },
        SigninID: 1,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserRecord != nil {
        // handle response
    }
}
```
