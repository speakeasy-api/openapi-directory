# Companies

### Available Operations

* [CompaniesAdd](#companiesadd) - Create Company
* [CompaniesAll](#companiesall) - List Companies
* [CompaniesDelete](#companiesdelete) - Delete Company
* [CompaniesOne](#companiesone) - Get Company
* [CompaniesUpdate](#companiesupdate) - Update Company

## CompaniesAdd

Create Company

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
    res, err := s.Companies.CompaniesAdd(ctx, operations.CompaniesAddRequest{
        HrisCompanyInput: shared.HrisCompanyInput{
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
            CompanyNumber: sdk.String("123456-AB"),
            DebtorID: sdk.String("12345"),
            DisplayName: sdk.String("SpaceX"),
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
            LegalName: "SpaceX",
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
            Status: shared.HrisCompanyStatusEnumActive.ToPointer(),
            Subdomain: sdk.String("company"),
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
        XApideckAppID: "suscipit",
        XApideckConsumerID: "iure",
        XApideckServiceID: sdk.String("magnam"),
    }, operations.CompaniesAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateHrisCompanyResponse != nil {
        // handle response
    }
}
```

## CompaniesAll

List Companies

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
    res, err := s.Companies.CompaniesAll(ctx, operations.CompaniesAllRequest{
        Cursor: sdk.String("debitis"),
        Fields: sdk.String("ipsa"),
        Limit: sdk.Int64(963663),
        Raw: sdk.Bool(false),
        XApideckAppID: "tempora",
        XApideckConsumerID: "suscipit",
        XApideckServiceID: sdk.String("molestiae"),
    }, operations.CompaniesAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetHrisCompaniesResponse != nil {
        // handle response
    }
}
```

## CompaniesDelete

Delete Company

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
        ID: "cc8796ed-151a-405d-bc2d-df7cc78ca1ba",
        Raw: sdk.Bool(false),
        XApideckAppID: "occaecati",
        XApideckConsumerID: "fugit",
        XApideckServiceID: sdk.String("deleniti"),
    }, operations.CompaniesDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteHrisCompanyResponse != nil {
        // handle response
    }
}
```

## CompaniesOne

Get Company

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
        Fields: sdk.String("hic"),
        ID: "c816742c-b739-4205-9293-96fea7596eb1",
        Raw: sdk.Bool(false),
        XApideckAppID: "ipsa",
        XApideckConsumerID: "reiciendis",
        XApideckServiceID: sdk.String("est"),
    }, operations.CompaniesOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetHrisCompanyResponse != nil {
        // handle response
    }
}
```

## CompaniesUpdate

Update Company

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
    res, err := s.Companies.CompaniesUpdate(ctx, operations.CompaniesUpdateRequest{
        HrisCompanyInput: shared.HrisCompanyInput{
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
            CompanyNumber: sdk.String("123456-AB"),
            DebtorID: sdk.String("12345"),
            DisplayName: sdk.String("SpaceX"),
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
            LegalName: "SpaceX",
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
            Status: shared.HrisCompanyStatusEnumActive.ToPointer(),
            Subdomain: sdk.String("company"),
            Websites: []shared.Website{
                shared.Website{
                    ID: sdk.String("12345"),
                    Type: shared.WebsiteTypeEnumPrimary.ToPointer(),
                    URL: "http://example.com",
                },
            },
        },
        ID: "52c59559-07af-4f1a-ba2f-a9467739251a",
        Raw: sdk.Bool(false),
        XApideckAppID: "animi",
        XApideckConsumerID: "enim",
        XApideckServiceID: sdk.String("odit"),
    }, operations.CompaniesUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateHrisCompanyResponse != nil {
        // handle response
    }
}
```
