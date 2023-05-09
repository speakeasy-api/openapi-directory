# Domains

## Overview

Manage your domains.

### Available Operations

* [ConfigureDomain](#configuredomain) - Edit domain name renew state
* [EditNameServers](#editnameservers) - Edit domain name servers
* [GetDomain](#getdomain) - Details of a domain
* [GetDomains](#getdomains) - Overviews of domains
* [Register](#register) - Register a domain
* [Transfer](#transfer) - Transfer a domain

## ConfigureDomain

Allowed if can_toggle_renew is true on the domain detail:<br /><ul><li>If there are no unpaid invoices for the domain name anymore.</li><li>If the renewal won't start within 1 month.</li></ul>
Allowed if the requesting user has the finance role.

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
    res, err := s.Domains.ConfigureDomain(ctx, operations.ConfigureDomainRequest{
        EditDomainWillRenewRequest: &shared.EditDomainWillRenewRequest{
            WillRenew: sdk.Bool(false),
        },
        DomainNamePathParameter: "commodi",
        DomainNameQueryParameter: "quam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EditNameServers

Edit domain name servers

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
    res, err := s.Domains.EditNameServers(ctx, operations.EditNameServersRequest{
        EditNameServers: &shared.EditNameServers{
            DomainName: sdk.String("molestiae"),
            NameServers: []string{
                "error",
            },
        },
        DomainNamePathParameter: "quia",
        DomainNameQueryParameter: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDomain

Details of a domain

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
    res, err := s.Domains.GetDomain(ctx, operations.GetDomainRequest{
        DomainNamePathParameter: "vitae",
        DomainNameQueryParameter: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DomainDetail != nil {
        // handle response
    }
}
```

## GetDomains

Overviews of domains

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
    res, err := s.Domains.GetDomains(ctx, operations.GetDomainsRequest{
        Skip: sdk.Int(656330),
        Take: sdk.Int(317202),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Domains != nil {
        // handle response
    }
}
```

## Register

Registers an available domain.<br />Domain names with extension '.ca' are only available for registrants with country code 'CA'.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Domains.Register(ctx, shared.RegisterDomain{
        DomainName: sdk.String("odit"),
        NameServers: []string{
            "sequi",
            "tenetur",
            "ipsam",
            "id",
        },
        Registrant: &shared.RegistrantInput{
            Address: sdk.String("006 Pacocha Cliffs"),
            City: sdk.String("Weymouth Town"),
            CompanyName: sdk.String("vero"),
            CountryCode: sdk.String("KH"),
            Email: sdk.String("Whitney.Bednar@yahoo.com"),
            EnterpriseNumber: sdk.String("cum"),
            ExtraFields: []shared.ExtraField{
                shared.ExtraField{
                    Name: sdk.String("Bessie Grady II"),
                    Value: sdk.String("dolore"),
                },
            },
            Fax: sdk.String("iusto"),
            FirstName: sdk.String("Birdie"),
            LanguageCode: sdk.String("harum"),
            LastName: sdk.String("Hamill"),
            Phone: sdk.String("1-590-365-5825 x59095"),
            PostalCode: sdk.String("92306"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Transfer

Transfers a domain with a transfer authorization code.<br />Domain names with extension '.ca' are only available for registrants with country code 'CA'.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Domains.Transfer(ctx, shared.TransferDomain{
        AuthCode: sdk.String("quibusdam"),
        DomainName: sdk.String("explicabo"),
        NameServers: []string{
            "distinctio",
            "quibusdam",
            "labore",
        },
        Registrant: &shared.RegistrantInput{
            Address: sdk.String("13550 Rhoda Heights"),
            City: sdk.String("East Marianostead"),
            CompanyName: sdk.String("tempora"),
            CountryCode: sdk.String("PG"),
            Email: sdk.String("Edwardo.Windler@hotmail.com"),
            EnterpriseNumber: sdk.String("eligendi"),
            ExtraFields: []shared.ExtraField{
                shared.ExtraField{
                    Name: sdk.String("Sherri Tremblay"),
                    Value: sdk.String("dolor"),
                },
                shared.ExtraField{
                    Name: sdk.String("Randal Parisian"),
                    Value: sdk.String("illum"),
                },
                shared.ExtraField{
                    Name: sdk.String("Jean Buckridge"),
                    Value: sdk.String("facere"),
                },
            },
            Fax: sdk.String("ea"),
            FirstName: sdk.String("Gracie"),
            LanguageCode: sdk.String("laborum"),
            LastName: sdk.String("Thompson"),
            Phone: sdk.String("638.965.7655"),
            PostalCode: sdk.String("26346-6404"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
