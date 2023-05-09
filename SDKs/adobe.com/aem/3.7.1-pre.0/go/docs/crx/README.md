# Crx

### Available Operations

* [GetCrxdeStatus](#getcrxdestatus)
* [GetInstallStatus](#getinstallstatus)
* [GetPackageManagerServlet](#getpackagemanagerservlet)
* [PostPackageService](#postpackageservice)
* [PostPackageServiceJSON](#postpackageservicejson)
* [PostPackageUpdate](#postpackageupdate)
* [PostSetPassword](#postsetpassword)

## GetCrxdeStatus

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Crx.GetCrxdeStatus(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCrxdeStatus200PlainTextString != nil {
        // handle response
    }
}
```

## GetInstallStatus

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Crx.GetInstallStatus(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.InstallStatus != nil {
        // handle response
    }
}
```

## GetPackageManagerServlet

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Crx.GetPackageManagerServlet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostPackageService

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
    res, err := s.Crx.PostPackageService(ctx, operations.PostPackageServiceRequest{
        Cmd: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostPackageServiceJSON

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
    res, err := s.Crx.PostPackageServiceJSON(ctx, operations.PostPackageServiceJSONRequest{
        RequestBody: &operations.PostPackageServiceJSONRequestBody{
            Package: &operations.PostPackageServiceJSONRequestBodyPackage{
                Content: []byte("dicta"),
                Package: "nam",
            },
        },
        Charset: sdk.String("officia"),
        Cmd: "occaecati",
        Force: sdk.Bool(false),
        GroupName: sdk.String("fugit"),
        PackageName: sdk.String("deleniti"),
        PackageVersion: sdk.String("hic"),
        Path: "optio",
        Recursive: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostPackageUpdate

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
    res, err := s.Crx.PostPackageUpdate(ctx, operations.PostPackageUpdateRequest{
        Charset: sdk.String("totam"),
        Filter: sdk.String("beatae"),
        GroupName: "commodi",
        PackageName: "molestiae",
        Path: "modi",
        Version: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostSetPassword

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
    res, err := s.Crx.PostSetPassword(ctx, operations.PostSetPasswordRequest{
        Old: "impedit",
        Plain: "cum",
        Verify: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
