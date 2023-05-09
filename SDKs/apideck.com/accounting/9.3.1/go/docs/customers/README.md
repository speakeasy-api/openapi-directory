# Customers

### Available Operations

* [CustomersAdd](#customersadd) - Create Customer
* [CustomersAll](#customersall) - List Customers
* [CustomersDelete](#customersdelete) - Delete Customer
* [CustomersOne](#customersone) - Get Customer
* [CustomersUpdate](#customersupdate) - Update Customer

## CustomersAdd

Create Customer

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
    res, err := s.Customers.CustomersAdd(ctx, operations.CustomersAddRequest{
        AccountingCustomerInput: shared.AccountingCustomerInput{
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
            },
            FirstName: sdk.String("Elon"),
            Individual: sdk.Bool(true),
            LastName: sdk.String("Musk"),
            MiddleName: sdk.String("D."),
            Notes: sdk.String("Some notes about this customer"),
            Parent: &shared.LinkedParentCustomer{
                ID: "12345",
                Name: sdk.String("Windsurf Shop"),
            },
            PhoneNumbers: []shared.PhoneNumber{
                shared.PhoneNumber{
                    AreaCode: sdk.String("323"),
                    CountryCode: sdk.String("1"),
                    Extension: sdk.String("105"),
                    ID: sdk.String("12345"),
                    Number: "111-111-1111",
                    Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                },
            },
            Project: sdk.Bool(false),
            RowVersion: sdk.String("1-12345"),
            Status: shared.AccountingCustomerStatusEnumActive.ToPointer(),
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
            },
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "reiciendis",
        XApideckConsumerID: "mollitia",
        XApideckServiceID: sdk.String("ad"),
    }, operations.CustomersAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCustomerResponse != nil {
        // handle response
    }
}
```

## CustomersAll

List Customers

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
    res, err := s.Customers.CustomersAll(ctx, operations.CustomersAllRequest{
        Cursor: sdk.String("eum"),
        Fields: sdk.String("dolor"),
        Filter: &shared.CustomersFilter{
            CompanyName: sdk.String("SpaceX"),
            DisplayName: sdk.String("Techno King"),
            Email: sdk.String("elon@spacex.com"),
            FirstName: sdk.String("Elon"),
            LastName: sdk.String("Musk"),
        },
        Limit: sdk.Int64(896547),
        PassThrough: map[string]interface{}{
            "nemo": "quasi",
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "iure",
        XApideckConsumerID: "doloribus",
        XApideckServiceID: sdk.String("debitis"),
    }, operations.CustomersAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCustomersResponse != nil {
        // handle response
    }
}
```

## CustomersDelete

Delete Customer

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
    res, err := s.Customers.CustomersDelete(ctx, operations.CustomersDeleteRequest{
        ID: "4c8b711e-5b7f-4d2e-9028-921cddc69260",
        Raw: sdk.Bool(false),
        XApideckAppID: "ab",
        XApideckConsumerID: "maiores",
        XApideckServiceID: sdk.String("quidem"),
    }, operations.CustomersDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCustomerResponse != nil {
        // handle response
    }
}
```

## CustomersOne

Get Customer

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
    res, err := s.Customers.CustomersOne(ctx, operations.CustomersOneRequest{
        Fields: sdk.String("ipsam"),
        ID: "76b0d5f0-d30c-45fb-b258-7053202c73d5",
        Raw: sdk.Bool(false),
        XApideckAppID: "hic",
        XApideckConsumerID: "recusandae",
        XApideckServiceID: sdk.String("omnis"),
    }, operations.CustomersOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCustomerResponse != nil {
        // handle response
    }
}
```

## CustomersUpdate

Update Customer

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
    res, err := s.Customers.CustomersUpdate(ctx, operations.CustomersUpdateRequest{
        AccountingCustomerInput: shared.AccountingCustomerInput{
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
            },
            FirstName: sdk.String("Elon"),
            Individual: sdk.Bool(true),
            LastName: sdk.String("Musk"),
            MiddleName: sdk.String("D."),
            Notes: sdk.String("Some notes about this customer"),
            Parent: &shared.LinkedParentCustomer{
                ID: "12345",
                Name: sdk.String("Windsurf Shop"),
            },
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
            Project: sdk.Bool(false),
            RowVersion: sdk.String("1-12345"),
            Status: shared.AccountingCustomerStatusEnumActive.ToPointer(),
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
            },
        },
        ID: "8909b3fe-49a8-4d9c-bf48-633323f9b77f",
        Raw: sdk.Bool(false),
        XApideckAppID: "amet",
        XApideckConsumerID: "dolorum",
        XApideckServiceID: sdk.String("numquam"),
    }, operations.CustomersUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCustomerResponse != nil {
        // handle response
    }
}
```
