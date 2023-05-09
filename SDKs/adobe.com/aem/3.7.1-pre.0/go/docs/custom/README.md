# Custom

### Available Operations

* [GetAemHealthCheck](#getaemhealthcheck)
* [PostConfigAemHealthCheckServlet](#postconfigaemhealthcheckservlet)
* [PostConfigAemPasswordReset](#postconfigaempasswordreset)

## GetAemHealthCheck

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Custom.GetAemHealthCheck(ctx, operations.GetAemHealthCheckRequest{
        CombineTagsOr: sdk.Bool(false),
        Tags: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostConfigAemHealthCheckServlet

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Custom.PostConfigAemHealthCheckServlet(ctx, operations.PostConfigAemHealthCheckServletRequest{
        BundlesIgnored: []string{
            "aspernatur",
            "perferendis",
            "ad",
        },
        BundlesIgnoredAtTypeHint: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostConfigAemPasswordReset

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Custom.PostConfigAemPasswordReset(ctx, operations.PostConfigAemPasswordResetRequest{
        PwdresetAuthorizables: []string{
            "iste",
        },
        PwdresetAuthorizablesAtTypeHint: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
