# Companies

### Available Operations

* [CompaniesAdd](#companiesadd) - Create company
* [CompaniesAll](#companiesall) - List companies
* [CompaniesDelete](#companiesdelete) - Delete company
* [CompaniesOne](#companiesone) - Get company
* [CompaniesUpdate](#companiesupdate) - Update company

## CompaniesAdd

Create company

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Companies.CompaniesAdd(ctx, operations.CompaniesAddRequest{
        CompanyInput: shared.CompanyInput{
            AbnBranch: sdk.String("123"),
            AbnOrTfn: sdk.String("46 115 614 695"),
            Acn: sdk.String("XXX XXX XXX"),
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
            AnnualRevenue: sdk.String("+$35m"),
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
            Birthday: types.MustDateFromString("2000-08-12"),
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            CustomFields: []shared.CustomField{
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: sdk.String("Uses Salesforce and Marketo"),
                },
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: []string{
                        "vero",
                        "nihil",
                        "praesentium",
                        "voluptatibus",
                    },
                },
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: sdk.String("Uses Salesforce and Marketo"),
                },
            },
            Description: sdk.String("Space Exploration Technologies Corp. is an American aerospace manufacturer, space transportation services and communications company headquartered in Hawthorne, California."),
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
            Fax: sdk.String("+12129876543"),
            FirstName: sdk.String("Elon"),
            Image: sdk.String("https://www.spacex.com/static/images/share.jpg"),
            Industry: sdk.String("Apparel"),
            LastName: sdk.String("Musk"),
            Name: "SpaceX",
            NumberOfEmployees: sdk.String("500-1000"),
            OwnerID: sdk.String("12345"),
            Ownership: sdk.String("Public"),
            PayeeNumber: sdk.String("78932EN"),
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
            },
            ReadOnly: sdk.Bool(false),
            RowType: &shared.CompanyCompanyRowType{
                ID: sdk.String("12345"),
                Name: sdk.String("Customer Account"),
            },
            SalesTaxNumber: sdk.String("12456EN"),
            Salutation: sdk.String("Mr"),
            SocialLinks: []shared.SocialLink{
                shared.SocialLink{
                    ID: sdk.String("12345"),
                    Type: sdk.String("twitter"),
                    URL: "https://www.twitter.com/apideck-io",
                },
                shared.SocialLink{
                    ID: sdk.String("12345"),
                    Type: sdk.String("twitter"),
                    URL: "https://www.twitter.com/apideck-io",
                },
                shared.SocialLink{
                    ID: sdk.String("12345"),
                    Type: sdk.String("twitter"),
                    URL: "https://www.twitter.com/apideck-io",
                },
            },
            Status: sdk.String("Open"),
            Tags: []string{
                "doloremque",
            },
            VatNumber: sdk.String("BE0689615164"),
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
            },
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "ut",
        XApideckConsumerID: "maiores",
        XApideckServiceID: sdk.String("dicta"),
    }, operations.CompaniesAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCompanyResponse != nil {
        // handle response
    }
}
```

## CompaniesAll

List companies

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
    res, err := s.Companies.CompaniesAll(ctx, operations.CompaniesAllRequest{
        Cursor: sdk.String("corporis"),
        Fields: sdk.String("dolore"),
        Filter: &shared.CompaniesFilter{
            Name: sdk.String("SpaceX"),
        },
        Limit: sdk.Int64(480894),
        Raw: sdk.Bool(false),
        Sort: &shared.CompaniesSort{
            By: shared.CompaniesSortByEnumCreatedAt.ToPointer(),
            Direction: shared.SortDirectionEnumAsc.ToPointer(),
        },
        XApideckAppID: "harum",
        XApideckConsumerID: "enim",
        XApideckServiceID: sdk.String("accusamus"),
    }, operations.CompaniesAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCompaniesResponse != nil {
        // handle response
    }
}
```

## CompaniesDelete

Delete company

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
    res, err := s.Companies.CompaniesDelete(ctx, operations.CompaniesDeleteRequest{
        ID: "6e13b99d-488e-41e9-9e45-0ad2abd44269",
        Raw: sdk.Bool(false),
        XApideckAppID: "quos",
        XApideckConsumerID: "perferendis",
        XApideckServiceID: sdk.String("magni"),
    }, operations.CompaniesDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCompanyResponse != nil {
        // handle response
    }
}
```

## CompaniesOne

Get company

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
    res, err := s.Companies.CompaniesOne(ctx, operations.CompaniesOneRequest{
        Fields: sdk.String("assumenda"),
        ID: "502a94bb-4f63-4c96-9e9a-3efa77dfb14c",
        Raw: sdk.Bool(false),
        XApideckAppID: "facere",
        XApideckConsumerID: "ea",
        XApideckServiceID: sdk.String("aliquid"),
    }, operations.CompaniesOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCompanyResponse != nil {
        // handle response
    }
}
```

## CompaniesUpdate

Update company

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Companies.CompaniesUpdate(ctx, operations.CompaniesUpdateRequest{
        CompanyInput: shared.CompanyInput{
            AbnBranch: sdk.String("123"),
            AbnOrTfn: sdk.String("46 115 614 695"),
            Acn: sdk.String("XXX XXX XXX"),
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
            AnnualRevenue: sdk.String("+$35m"),
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
            Birthday: types.MustDateFromString("2000-08-12"),
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            CustomFields: []shared.CustomField{
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: sdk.Bool(true),
                },
            },
            Description: sdk.String("Space Exploration Technologies Corp. is an American aerospace manufacturer, space transportation services and communications company headquartered in Hawthorne, California."),
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
            },
            Fax: sdk.String("+12129876543"),
            FirstName: sdk.String("Elon"),
            Image: sdk.String("https://www.spacex.com/static/images/share.jpg"),
            Industry: sdk.String("Apparel"),
            LastName: sdk.String("Musk"),
            Name: "SpaceX",
            NumberOfEmployees: sdk.String("500-1000"),
            OwnerID: sdk.String("12345"),
            Ownership: sdk.String("Public"),
            PayeeNumber: sdk.String("78932EN"),
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
            ReadOnly: sdk.Bool(false),
            RowType: &shared.CompanyCompanyRowType{
                ID: sdk.String("12345"),
                Name: sdk.String("Customer Account"),
            },
            SalesTaxNumber: sdk.String("12456EN"),
            Salutation: sdk.String("Mr"),
            SocialLinks: []shared.SocialLink{
                shared.SocialLink{
                    ID: sdk.String("12345"),
                    Type: sdk.String("twitter"),
                    URL: "https://www.twitter.com/apideck-io",
                },
                shared.SocialLink{
                    ID: sdk.String("12345"),
                    Type: sdk.String("twitter"),
                    URL: "https://www.twitter.com/apideck-io",
                },
                shared.SocialLink{
                    ID: sdk.String("12345"),
                    Type: sdk.String("twitter"),
                    URL: "https://www.twitter.com/apideck-io",
                },
                shared.SocialLink{
                    ID: sdk.String("12345"),
                    Type: sdk.String("twitter"),
                    URL: "https://www.twitter.com/apideck-io",
                },
            },
            Status: sdk.String("Open"),
            Tags: []string{
                "provident",
                "nam",
                "id",
            },
            VatNumber: sdk.String("BE0689615164"),
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
        ID: "8f3a6699-7074-4ba4-869b-6e2141959890",
        Raw: sdk.Bool(false),
        XApideckAppID: "mollitia",
        XApideckConsumerID: "reiciendis",
        XApideckServiceID: sdk.String("mollitia"),
    }, operations.CompaniesUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCompanyResponse != nil {
        // handle response
    }
}
```
