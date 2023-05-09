# Partner

## Overview

Partner object represents your client.

### Available Operations

* [CreatePartner](#createpartner) - Create a partner
* [DeletePartner](#deletepartner) - Delete a partner
* [GetPartner](#getpartner) - Retrieve a partner
* [ListPartner](#listpartner) - List all partners
* [UpdatePartner](#updatepartner) - Update a partner

## CreatePartner

Create a new partner. Returns a partner object if the create is succeded.

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Partner.CreatePartner(ctx, shared.PartnerUpsert{
        AccountNumber: sdk.String("nemo"),
        Address: shared.Address{
            Address: "50469 Brakus Plain",
            City: "Lake Caroline",
            CountryCode: shared.CountryEnumZm,
            PostCode: "52444-2613",
        },
        Emails: []string{
            "laborum",
        },
        GeneralLedgerNumber: sdk.String("animi"),
        Iban: sdk.String("enim"),
        Name: "Angelica Dietrich",
        Phone: sdk.String("1-800-686-0998 x4590"),
        Swift: sdk.String("omnis"),
        Taxcode: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Partner != nil {
        // handle response
    }
}
```

## DeletePartner

Delete an existing partner.

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
    res, err := s.Partner.DeletePartner(ctx, operations.DeletePartnerRequest{
        ID: 739264,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPartner

Retrieves the details of an existing partner.

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
    res, err := s.Partner.GetPartner(ctx, operations.GetPartnerRequest{
        ID: 19987,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Partner != nil {
        // handle response
    }
}
```

## ListPartner

Returns a list of your partners. The partners are returned sorted by creation date, with the most recent partners appearing first.

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
    res, err := s.Partner.ListPartner(ctx, operations.ListPartnerRequest{
        Page: sdk.Int64(39187),
        PerPage: sdk.Int64(441711),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PartnerList != nil {
        // handle response
    }
}
```

## UpdatePartner

Update an existing partner. Returns a partner object if the update is succeded.

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Partner.UpdatePartner(ctx, operations.UpdatePartnerRequest{
        PartnerUpsert: shared.PartnerUpsert{
            AccountNumber: sdk.String("ut"),
            Address: shared.Address{
                Address: "132 Birdie Prairie",
                City: "Fort Harry",
                CountryCode: shared.CountryEnumUm,
                PostCode: "26558",
            },
            Emails: []string{
                "praesentium",
                "rem",
            },
            GeneralLedgerNumber: sdk.String("voluptates"),
            Iban: sdk.String("quasi"),
            Name: "Kirk Boehm",
            Phone: sdk.String("(268) 367-8221 x355"),
            Swift: sdk.String("perferendis"),
            Taxcode: sdk.String("magni"),
        },
        ID: 828940,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Partner != nil {
        // handle response
    }
}
```
