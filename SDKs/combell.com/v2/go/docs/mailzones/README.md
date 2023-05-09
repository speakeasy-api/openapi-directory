# MailZones

## Overview

Manage your mail zones.

### Available Operations

* [ConfigureAlias](#configurealias) - Configure a alias
* [ConfigureAntiSpam](#configureantispam) - Configure anti-spam for mail zone
* [ConfigureSMTPDomain](#configuresmtpdomain) - Configure an extra smtp domain
* [CreateAlias](#createalias) - Create a new alias
* [CreateCatchAll](#createcatchall) - Create a catch-all on the mail zone
* [CreateSMTPDomain](#createsmtpdomain) - Create an extra smtp domain
* [DeleteAlias](#deletealias) - Delete a alias
* [DeleteCatchAll](#deletecatchall) - Delete a catch-all on the mail zone
* [DeleteSMTPDomain](#deletesmtpdomain) - Delete an extra smtp domain
* [GetMailZone](#getmailzone) - Get the mail zone.

## ConfigureAlias

Configure a alias

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MailZones.ConfigureAlias(ctx, operations.ConfigureAliasRequest{
        UpdateAliasRequest: &shared.UpdateAliasRequest{
            Destinations: []string{
                "dolorum",
            },
        },
        DomainNamePathParameter: "numquam",
        DomainNameQueryParameter: "veritatis",
        EmailAddressPathParameter: "ipsa",
        EmailAddressQueryParameter: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfigureAntiSpam

Configure anti-spam for mail zone

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MailZones.ConfigureAntiSpam(ctx, operations.ConfigureAntiSpamRequest{
        UpdateAntiSpamRequest: &shared.UpdateAntiSpamRequest{
            Type: shared.AntiSpamTypesEnumAdvanced.ToPointer(),
        },
        DomainNamePathParameter: "odio",
        DomainNameQueryParameter: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfigureSMTPDomain

Configure an extra smtp domain

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MailZones.ConfigureSMTPDomain(ctx, operations.ConfigureSMTPDomainRequest{
        UpdateSMTPDomainRequest: &shared.UpdateSMTPDomainRequest{
            Enabled: sdk.Bool(false),
        },
        DomainNamePathParameter: "accusamus",
        DomainNameQueryParameter: "quidem",
        Hostname: "witty-gastronomy.name",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateAlias

Create a new alias

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MailZones.CreateAlias(ctx, operations.CreateAliasRequest{
        CreateAliasRequest: &shared.CreateAliasRequest{
            Destinations: []string{
                "atque",
            },
            EmailAddress: sdk.String("sit"),
        },
        DomainNamePathParameter: "fugiat",
        DomainNameQueryParameter: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateCatchAll

Create a catch-all on the mail zone

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MailZones.CreateCatchAll(ctx, operations.CreateCatchAllRequest{
        CreateCatchAllRequest: &shared.CreateCatchAllRequest{
            EmailAddress: sdk.String("soluta"),
        },
        DomainNamePathParameter: "dolorum",
        DomainNameQueryParameter: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateSMTPDomain

Create an extra smtp domain

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MailZones.CreateSMTPDomain(ctx, operations.CreateSMTPDomainRequest{
        CreateSMTPDomainRequest: &shared.CreateSMTPDomainRequest{
            Hostname: sdk.String("jealous-polyester.name"),
        },
        DomainNamePathParameter: "omnis",
        DomainNameQueryParameter: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteAlias

Delete a alias

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
    res, err := s.MailZones.DeleteAlias(ctx, operations.DeleteAliasRequest{
        DomainNamePathParameter: "distinctio",
        DomainNameQueryParameter: "asperiores",
        EmailAddressPathParameter: "nihil",
        EmailAddressQueryParameter: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteCatchAll

Delete a catch-all on the mail zone

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
    res, err := s.MailZones.DeleteCatchAll(ctx, operations.DeleteCatchAllRequest{
        DomainNamePathParameter: "voluptate",
        DomainNameQueryParameter: "id",
        EmailAddressPathParameter: "saepe",
        EmailAddressQueryParameter: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSMTPDomain

Delete an extra smtp domain

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
    res, err := s.MailZones.DeleteSMTPDomain(ctx, operations.DeleteSMTPDomainRequest{
        DomainNamePathParameter: "aspernatur",
        DomainNameQueryParameter: "perferendis",
        Hostname: "elementary-round.org",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetMailZone

Get the mail zone.

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
    res, err := s.MailZones.GetMailZone(ctx, operations.GetMailZoneRequest{
        DomainNamePathParameter: "ad",
        DomainNameQueryParameter: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MailZone != nil {
        // handle response
    }
}
```
