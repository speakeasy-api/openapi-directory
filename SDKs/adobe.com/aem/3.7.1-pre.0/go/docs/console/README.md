# Console

### Available Operations

* [GetAemProductInfo](#getaemproductinfo)
* [GetBundleInfo](#getbundleinfo)
* [GetConfigMgr](#getconfigmgr)
* [PostBundle](#postbundle)
* [PostJmxRepository](#postjmxrepository)
* [PostSamlConfiguration](#postsamlconfiguration)

## GetAemProductInfo

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
    res, err := s.Console.GetAemProductInfo(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetBundleInfo

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
    res, err := s.Console.GetBundleInfo(ctx, operations.GetBundleInfoRequest{
        Name: "Terrence Rau",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BundleInfo != nil {
        // handle response
    }
}
```

## GetConfigMgr

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
    res, err := s.Console.GetConfigMgr(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConfigMgr200TextXMLString != nil {
        // handle response
    }
}
```

## PostBundle

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
    res, err := s.Console.PostBundle(ctx, operations.PostBundleRequest{
        Action: "nulla",
        Name: "Dallas Kassulke",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostJmxRepository

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
    res, err := s.Console.PostJmxRepository(ctx, operations.PostJmxRepositoryRequest{
        Action: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostSamlConfiguration

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
    res, err := s.Console.PostSamlConfiguration(ctx, operations.PostSamlConfigurationRequest{
        DollarLocation: sdk.String("iure"),
        Action: sdk.String("magnam"),
        AddGroupMemberships: sdk.Bool(false),
        Apply: sdk.Bool(false),
        AssertionConsumerServiceURL: sdk.String("debitis"),
        ClockTolerance: sdk.Int64(56713),
        CreateUser: sdk.Bool(false),
        DefaultGroups: []string{
            "tempora",
            "suscipit",
            "molestiae",
            "minus",
        },
        DefaultRedirectURL: sdk.String("placeat"),
        Delete: sdk.Bool(false),
        DigestMethod: sdk.String("voluptatum"),
        GroupMembershipAttribute: sdk.String("iusto"),
        HandleLogout: sdk.Bool(false),
        IdpCertAlias: sdk.String("excepturi"),
        IdpHTTPRedirect: sdk.Bool(false),
        IdpURL: sdk.String("nisi"),
        KeyStorePassword: sdk.String("recusandae"),
        LogoutURL: sdk.String("temporibus"),
        NameIDFormat: sdk.String("ab"),
        Path: []string{
            "veritatis",
            "deserunt",
        },
        Post: sdk.Bool(false),
        Propertylist: []string{
            "ipsam",
        },
        ServiceRanking: sdk.Int64(832620),
        ServiceProviderEntityID: sdk.String("sapiente"),
        SignatureMethod: sdk.String("quo"),
        SpPrivateKeyAlias: sdk.String("odit"),
        SynchronizeAttributes: []string{
            "at",
            "maiores",
            "molestiae",
            "quod",
        },
        UseEncryption: sdk.Bool(false),
        UserIDAttribute: sdk.String("quod"),
        UserIntermediatePath: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SamlConfigurationInfo != nil {
        // handle response
    }
}
```
