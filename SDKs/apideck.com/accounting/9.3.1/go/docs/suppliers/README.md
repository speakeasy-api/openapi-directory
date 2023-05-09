# Suppliers

### Available Operations

* [SuppliersAdd](#suppliersadd) - Create Supplier
* [SuppliersAll](#suppliersall) - List Suppliers
* [SuppliersDelete](#suppliersdelete) - Delete Supplier
* [SuppliersOne](#suppliersone) - Get Supplier
* [SuppliersUpdate](#suppliersupdate) - Update Supplier

## SuppliersAdd

Create Supplier

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
    res, err := s.Suppliers.SuppliersAdd(ctx, operations.SuppliersAddRequest{
        SupplierInput: shared.SupplierInput{
            Account: &shared.LinkedLedgerAccountInput{
                Code: sdk.String("453"),
                ID: sdk.String("123456"),
                NominalCode: sdk.String("N091"),
            },
            Addresses: []shared.Address{
                shared.Address{
                    City: sdk.String("San Francisco"),
                    ContactName: sdk.String("Elon Musk"),
                    Country: sdk.String("US"),
                    County: sdk.String("Santa Clara"),
                    Email: sdk.String("elon@musk.com"),
                    Fax: sdk.String("122-111-1111"),
                    ID: sdk.String("123"),
                    Latitude: sdk.String("40.759211"),
                    Line1: sdk.String("Main street"),
                    Line2: sdk.String("apt #"),
                    Line3: sdk.String("Suite #"),
                    Line4: sdk.String("delivery instructions"),
                    Longitude: sdk.String("-73.984638"),
                    Name: sdk.String("HQ US"),
                    PhoneNumber: sdk.String("111-111-1111"),
                    PostalCode: sdk.String("94104"),
                    RowVersion: sdk.String("1-12345"),
                    Salutation: sdk.String("Mr"),
                    State: sdk.String("CA"),
                    StreetNumber: sdk.String("25"),
                    String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                    Type: shared.AddressTypeEnumPrimary.ToPointer(),
                    Website: sdk.String("https://elonmusk.com"),
                },
                shared.Address{
                    City: sdk.String("San Francisco"),
                    ContactName: sdk.String("Elon Musk"),
                    Country: sdk.String("US"),
                    County: sdk.String("Santa Clara"),
                    Email: sdk.String("elon@musk.com"),
                    Fax: sdk.String("122-111-1111"),
                    ID: sdk.String("123"),
                    Latitude: sdk.String("40.759211"),
                    Line1: sdk.String("Main street"),
                    Line2: sdk.String("apt #"),
                    Line3: sdk.String("Suite #"),
                    Line4: sdk.String("delivery instructions"),
                    Longitude: sdk.String("-73.984638"),
                    Name: sdk.String("HQ US"),
                    PhoneNumber: sdk.String("111-111-1111"),
                    PostalCode: sdk.String("94104"),
                    RowVersion: sdk.String("1-12345"),
                    Salutation: sdk.String("Mr"),
                    State: sdk.String("CA"),
                    StreetNumber: sdk.String("25"),
                    String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                    Type: shared.AddressTypeEnumPrimary.ToPointer(),
                    Website: sdk.String("https://elonmusk.com"),
                },
            },
            BankAccounts: []shared.BankAccount{
                shared.BankAccount{
                    AccountName: sdk.String("SPACEX LLC"),
                    AccountNumber: sdk.String("123465"),
                    AccountType: shared.BankAccountAccountTypeEnumCreditCard.ToPointer(),
                    BankCode: sdk.String("BNH"),
                    Bic: sdk.String("AUDSCHGGXXX"),
                    BranchIdentifier: sdk.String("001"),
                    BsbNumber: sdk.String("062-001"),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Iban: sdk.String("CH2989144532982975332"),
                },
                shared.BankAccount{
                    AccountName: sdk.String("SPACEX LLC"),
                    AccountNumber: sdk.String("123465"),
                    AccountType: shared.BankAccountAccountTypeEnumCreditCard.ToPointer(),
                    BankCode: sdk.String("BNH"),
                    Bic: sdk.String("AUDSCHGGXXX"),
                    BranchIdentifier: sdk.String("001"),
                    BsbNumber: sdk.String("062-001"),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Iban: sdk.String("CH2989144532982975332"),
                },
                shared.BankAccount{
                    AccountName: sdk.String("SPACEX LLC"),
                    AccountNumber: sdk.String("123465"),
                    AccountType: shared.BankAccountAccountTypeEnumCreditCard.ToPointer(),
                    BankCode: sdk.String("BNH"),
                    Bic: sdk.String("AUDSCHGGXXX"),
                    BranchIdentifier: sdk.String("001"),
                    BsbNumber: sdk.String("062-001"),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Iban: sdk.String("CH2989144532982975332"),
                },
            },
            CompanyName: sdk.String("SpaceX"),
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            DisplayID: sdk.String("EMP00101"),
            DisplayName: sdk.String("Windsurf Shop"),
            Emails: []shared.Email{
                shared.Email{
                    Email: "elon@musk.com",
                    ID: sdk.String("123"),
                    Type: shared.EmailTypeEnumPrimary.ToPointer(),
                },
                shared.Email{
                    Email: "elon@musk.com",
                    ID: sdk.String("123"),
                    Type: shared.EmailTypeEnumPrimary.ToPointer(),
                },
                shared.Email{
                    Email: "elon@musk.com",
                    ID: sdk.String("123"),
                    Type: shared.EmailTypeEnumPrimary.ToPointer(),
                },
            },
            FirstName: sdk.String("Elon"),
            Individual: sdk.Bool(true),
            LastName: sdk.String("Musk"),
            MiddleName: sdk.String("D."),
            Notes: sdk.String("Some notes about this supplier"),
            PhoneNumbers: []shared.PhoneNumber{
                shared.PhoneNumber{
                    AreaCode: sdk.String("323"),
                    CountryCode: sdk.String("1"),
                    Extension: sdk.String("105"),
                    ID: sdk.String("12345"),
                    Number: "111-111-1111",
                    Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                },
                shared.PhoneNumber{
                    AreaCode: sdk.String("323"),
                    CountryCode: sdk.String("1"),
                    Extension: sdk.String("105"),
                    ID: sdk.String("12345"),
                    Number: "111-111-1111",
                    Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                },
                shared.PhoneNumber{
                    AreaCode: sdk.String("323"),
                    CountryCode: sdk.String("1"),
                    Extension: sdk.String("105"),
                    ID: sdk.String("12345"),
                    Number: "111-111-1111",
                    Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                },
            },
            RowVersion: sdk.String("1-12345"),
            Status: shared.SupplierStatusEnumActive.ToPointer(),
            Suffix: sdk.String("Jr."),
            TaxNumber: sdk.String("US123945459"),
            TaxRate: &shared.LinkedTaxRateInput{
                ID: sdk.String("123456"),
            },
            Title: sdk.String("CEO"),
            Websites: []shared.Website{
                shared.Website{
                    ID: sdk.String("12345"),
                    Type: shared.WebsiteTypeEnumPrimary.ToPointer(),
                    URL: "http://example.com",
                },
                shared.Website{
                    ID: sdk.String("12345"),
                    Type: shared.WebsiteTypeEnumPrimary.ToPointer(),
                    URL: "http://example.com",
                },
                shared.Website{
                    ID: sdk.String("12345"),
                    Type: shared.WebsiteTypeEnumPrimary.ToPointer(),
                    URL: "http://example.com",
                },
                shared.Website{
                    ID: sdk.String("12345"),
                    Type: shared.WebsiteTypeEnumPrimary.ToPointer(),
                    URL: "http://example.com",
                },
            },
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "expedita",
        XApideckConsumerID: "debitis",
        XApideckServiceID: sdk.String("neque"),
    }, operations.SuppliersAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSupplierResponse != nil {
        // handle response
    }
}
```

## SuppliersAll

List Suppliers

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
    res, err := s.Suppliers.SuppliersAll(ctx, operations.SuppliersAllRequest{
        Cursor: sdk.String("dolorum"),
        Fields: sdk.String("nostrum"),
        Filter: &shared.SuppliersFilter{
            CompanyName: sdk.String("SpaceX"),
            Email: sdk.String("elon@spacex.com"),
        },
        Limit: sdk.Int64(639028),
        PassThrough: map[string]interface{}{
            "corrupti": "accusamus",
            "tempora": "atque",
            "fugit": "ut",
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "fugiat",
        XApideckConsumerID: "voluptatem",
        XApideckServiceID: sdk.String("culpa"),
    }, operations.SuppliersAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSuppliersResponse != nil {
        // handle response
    }
}
```

## SuppliersDelete

Delete Supplier

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
    res, err := s.Suppliers.SuppliersDelete(ctx, operations.SuppliersDeleteRequest{
        ID: "b4075088-e518-4620-a5e9-04f3b1194b8a",
        Raw: sdk.Bool(false),
        XApideckAppID: "nam",
        XApideckConsumerID: "tenetur",
        XApideckServiceID: sdk.String("laboriosam"),
    }, operations.SuppliersDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSupplierResponse != nil {
        // handle response
    }
}
```

## SuppliersOne

Get Supplier

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
    res, err := s.Suppliers.SuppliersOne(ctx, operations.SuppliersOneRequest{
        Fields: sdk.String("alias"),
        ID: "3a79f9df-e0ab-47da-8a50-ce187f86bc17",
        Raw: sdk.Bool(false),
        XApideckAppID: "amet",
        XApideckConsumerID: "assumenda",
        XApideckServiceID: sdk.String("ea"),
    }, operations.SuppliersOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSupplierResponse != nil {
        // handle response
    }
}
```

## SuppliersUpdate

Update Supplier

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
    res, err := s.Suppliers.SuppliersUpdate(ctx, operations.SuppliersUpdateRequest{
        SupplierInput: shared.SupplierInput{
            Account: &shared.LinkedLedgerAccountInput{
                Code: sdk.String("453"),
                ID: sdk.String("123456"),
                NominalCode: sdk.String("N091"),
            },
            Addresses: []shared.Address{
                shared.Address{
                    City: sdk.String("San Francisco"),
                    ContactName: sdk.String("Elon Musk"),
                    Country: sdk.String("US"),
                    County: sdk.String("Santa Clara"),
                    Email: sdk.String("elon@musk.com"),
                    Fax: sdk.String("122-111-1111"),
                    ID: sdk.String("123"),
                    Latitude: sdk.String("40.759211"),
                    Line1: sdk.String("Main street"),
                    Line2: sdk.String("apt #"),
                    Line3: sdk.String("Suite #"),
                    Line4: sdk.String("delivery instructions"),
                    Longitude: sdk.String("-73.984638"),
                    Name: sdk.String("HQ US"),
                    PhoneNumber: sdk.String("111-111-1111"),
                    PostalCode: sdk.String("94104"),
                    RowVersion: sdk.String("1-12345"),
                    Salutation: sdk.String("Mr"),
                    State: sdk.String("CA"),
                    StreetNumber: sdk.String("25"),
                    String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                    Type: shared.AddressTypeEnumPrimary.ToPointer(),
                    Website: sdk.String("https://elonmusk.com"),
                },
                shared.Address{
                    City: sdk.String("San Francisco"),
                    ContactName: sdk.String("Elon Musk"),
                    Country: sdk.String("US"),
                    County: sdk.String("Santa Clara"),
                    Email: sdk.String("elon@musk.com"),
                    Fax: sdk.String("122-111-1111"),
                    ID: sdk.String("123"),
                    Latitude: sdk.String("40.759211"),
                    Line1: sdk.String("Main street"),
                    Line2: sdk.String("apt #"),
                    Line3: sdk.String("Suite #"),
                    Line4: sdk.String("delivery instructions"),
                    Longitude: sdk.String("-73.984638"),
                    Name: sdk.String("HQ US"),
                    PhoneNumber: sdk.String("111-111-1111"),
                    PostalCode: sdk.String("94104"),
                    RowVersion: sdk.String("1-12345"),
                    Salutation: sdk.String("Mr"),
                    State: sdk.String("CA"),
                    StreetNumber: sdk.String("25"),
                    String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                    Type: shared.AddressTypeEnumPrimary.ToPointer(),
                    Website: sdk.String("https://elonmusk.com"),
                },
                shared.Address{
                    City: sdk.String("San Francisco"),
                    ContactName: sdk.String("Elon Musk"),
                    Country: sdk.String("US"),
                    County: sdk.String("Santa Clara"),
                    Email: sdk.String("elon@musk.com"),
                    Fax: sdk.String("122-111-1111"),
                    ID: sdk.String("123"),
                    Latitude: sdk.String("40.759211"),
                    Line1: sdk.String("Main street"),
                    Line2: sdk.String("apt #"),
                    Line3: sdk.String("Suite #"),
                    Line4: sdk.String("delivery instructions"),
                    Longitude: sdk.String("-73.984638"),
                    Name: sdk.String("HQ US"),
                    PhoneNumber: sdk.String("111-111-1111"),
                    PostalCode: sdk.String("94104"),
                    RowVersion: sdk.String("1-12345"),
                    Salutation: sdk.String("Mr"),
                    State: sdk.String("CA"),
                    StreetNumber: sdk.String("25"),
                    String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                    Type: shared.AddressTypeEnumPrimary.ToPointer(),
                    Website: sdk.String("https://elonmusk.com"),
                },
            },
            BankAccounts: []shared.BankAccount{
                shared.BankAccount{
                    AccountName: sdk.String("SPACEX LLC"),
                    AccountNumber: sdk.String("123465"),
                    AccountType: shared.BankAccountAccountTypeEnumCreditCard.ToPointer(),
                    BankCode: sdk.String("BNH"),
                    Bic: sdk.String("AUDSCHGGXXX"),
                    BranchIdentifier: sdk.String("001"),
                    BsbNumber: sdk.String("062-001"),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Iban: sdk.String("CH2989144532982975332"),
                },
                shared.BankAccount{
                    AccountName: sdk.String("SPACEX LLC"),
                    AccountNumber: sdk.String("123465"),
                    AccountType: shared.BankAccountAccountTypeEnumCreditCard.ToPointer(),
                    BankCode: sdk.String("BNH"),
                    Bic: sdk.String("AUDSCHGGXXX"),
                    BranchIdentifier: sdk.String("001"),
                    BsbNumber: sdk.String("062-001"),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Iban: sdk.String("CH2989144532982975332"),
                },
                shared.BankAccount{
                    AccountName: sdk.String("SPACEX LLC"),
                    AccountNumber: sdk.String("123465"),
                    AccountType: shared.BankAccountAccountTypeEnumCreditCard.ToPointer(),
                    BankCode: sdk.String("BNH"),
                    Bic: sdk.String("AUDSCHGGXXX"),
                    BranchIdentifier: sdk.String("001"),
                    BsbNumber: sdk.String("062-001"),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Iban: sdk.String("CH2989144532982975332"),
                },
            },
            CompanyName: sdk.String("SpaceX"),
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            DisplayID: sdk.String("EMP00101"),
            DisplayName: sdk.String("Windsurf Shop"),
            Emails: []shared.Email{
                shared.Email{
                    Email: "elon@musk.com",
                    ID: sdk.String("123"),
                    Type: shared.EmailTypeEnumPrimary.ToPointer(),
                },
                shared.Email{
                    Email: "elon@musk.com",
                    ID: sdk.String("123"),
                    Type: shared.EmailTypeEnumPrimary.ToPointer(),
                },
                shared.Email{
                    Email: "elon@musk.com",
                    ID: sdk.String("123"),
                    Type: shared.EmailTypeEnumPrimary.ToPointer(),
                },
                shared.Email{
                    Email: "elon@musk.com",
                    ID: sdk.String("123"),
                    Type: shared.EmailTypeEnumPrimary.ToPointer(),
                },
            },
            FirstName: sdk.String("Elon"),
            Individual: sdk.Bool(true),
            LastName: sdk.String("Musk"),
            MiddleName: sdk.String("D."),
            Notes: sdk.String("Some notes about this supplier"),
            PhoneNumbers: []shared.PhoneNumber{
                shared.PhoneNumber{
                    AreaCode: sdk.String("323"),
                    CountryCode: sdk.String("1"),
                    Extension: sdk.String("105"),
                    ID: sdk.String("12345"),
                    Number: "111-111-1111",
                    Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                },
                shared.PhoneNumber{
                    AreaCode: sdk.String("323"),
                    CountryCode: sdk.String("1"),
                    Extension: sdk.String("105"),
                    ID: sdk.String("12345"),
                    Number: "111-111-1111",
                    Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                },
                shared.PhoneNumber{
                    AreaCode: sdk.String("323"),
                    CountryCode: sdk.String("1"),
                    Extension: sdk.String("105"),
                    ID: sdk.String("12345"),
                    Number: "111-111-1111",
                    Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                },
                shared.PhoneNumber{
                    AreaCode: sdk.String("323"),
                    CountryCode: sdk.String("1"),
                    Extension: sdk.String("105"),
                    ID: sdk.String("12345"),
                    Number: "111-111-1111",
                    Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                },
            },
            RowVersion: sdk.String("1-12345"),
            Status: shared.SupplierStatusEnumActive.ToPointer(),
            Suffix: sdk.String("Jr."),
            TaxNumber: sdk.String("US123945459"),
            TaxRate: &shared.LinkedTaxRateInput{
                ID: sdk.String("123456"),
            },
            Title: sdk.String("CEO"),
            Websites: []shared.Website{
                shared.Website{
                    ID: sdk.String("12345"),
                    Type: shared.WebsiteTypeEnumPrimary.ToPointer(),
                    URL: "http://example.com",
                },
                shared.Website{
                    ID: sdk.String("12345"),
                    Type: shared.WebsiteTypeEnumPrimary.ToPointer(),
                    URL: "http://example.com",
                },
                shared.Website{
                    ID: sdk.String("12345"),
                    Type: shared.WebsiteTypeEnumPrimary.ToPointer(),
                    URL: "http://example.com",
                },
                shared.Website{
                    ID: sdk.String("12345"),
                    Type: shared.WebsiteTypeEnumPrimary.ToPointer(),
                    URL: "http://example.com",
                },
            },
        },
        ID: "9526f8d9-86e8-481e-ad4f-0e1012563f94",
        Raw: sdk.Bool(false),
        XApideckAppID: "saepe",
        XApideckConsumerID: "consequuntur",
        XApideckServiceID: sdk.String("occaecati"),
    }, operations.SuppliersUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSupplierResponse != nil {
        // handle response
    }
}
```
