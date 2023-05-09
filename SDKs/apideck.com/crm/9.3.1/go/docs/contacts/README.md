# Contacts

### Available Operations

* [ContactsAdd](#contactsadd) - Create contact
* [ContactsAll](#contactsall) - List contacts
* [ContactsDelete](#contactsdelete) - Delete contact
* [ContactsOne](#contactsone) - Get contact
* [ContactsUpdate](#contactsupdate) - Update contact

## ContactsAdd

Create contact

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
    res, err := s.Contacts.ContactsAdd(ctx, operations.ContactsAddRequest{
        ContactInput: shared.ContactInput{
            Active: sdk.Bool(true),
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
            Birthday: sdk.String("2000-08-12"),
            CompanyID: sdk.String("23456"),
            CompanyName: sdk.String("23456"),
            CurrentBalance: sdk.Float64(10.5),
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
                        "nemo",
                    },
                },
            },
            Department: sdk.String("Engineering"),
            Description: sdk.String("Internal champion"),
            EmailDomain: sdk.String("gmail.com"),
            Emails: []shared.Email{
                shared.Email{
                    Email: "elon@musk.com",
                    ID: sdk.String("123"),
                    Type: shared.EmailTypeEnumPrimary.ToPointer(),
                },
            },
            Fax: sdk.String("+12129876543"),
            FirstName: sdk.String("Elon"),
            Gender: shared.ContactGenderEnumFemale.ToPointer(),
            Image: sdk.String("https://unavatar.io/elon-musk"),
            Language: sdk.String("EN"),
            LastName: sdk.String("Musk"),
            LeadID: sdk.String("34567"),
            LeadSource: sdk.String("Cold Call"),
            MiddleName: sdk.String("D."),
            Name: "Elon Musk",
            OwnerID: sdk.String("54321"),
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
            PhotoURL: sdk.String("https://unavatar.io/elon-musk"),
            Prefix: sdk.String("Mr."),
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
            Status: sdk.String("open"),
            Suffix: sdk.String("PhD"),
            Tags: []string{
                "eius",
                "maxime",
                "deleniti",
                "facilis",
            },
            Title: sdk.String("CEO"),
            Type: shared.ContactTypeEnumPersonal.ToPointer(),
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
        XApideckAppID: "architecto",
        XApideckConsumerID: "architecto",
        XApideckServiceID: sdk.String("repudiandae"),
    }, operations.ContactsAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateContactResponse != nil {
        // handle response
    }
}
```

## ContactsAll

List contacts

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
    res, err := s.Contacts.ContactsAll(ctx, operations.ContactsAllRequest{
        Cursor: sdk.String("ullam"),
        Fields: sdk.String("expedita"),
        Filter: &shared.ContactsFilter{
            CompanyID: sdk.String("12345"),
            Email: sdk.String("elon@tesla.com"),
            FirstName: sdk.String("Elon"),
            LastName: sdk.String("Musk"),
            Name: sdk.String("Elon Musk"),
        },
        Limit: sdk.Int64(469249),
        Raw: sdk.Bool(false),
        Sort: &shared.ContactsSort{
            By: shared.ContactsSortByEnumCreatedAt.ToPointer(),
            Direction: shared.SortDirectionEnumDesc.ToPointer(),
        },
        XApideckAppID: "quibusdam",
        XApideckConsumerID: "sed",
        XApideckServiceID: sdk.String("saepe"),
    }, operations.ContactsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContactsResponse != nil {
        // handle response
    }
}
```

## ContactsDelete

Delete contact

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
    res, err := s.Contacts.ContactsDelete(ctx, operations.ContactsDeleteRequest{
        ID: "d028921c-ddc6-4926-81fb-576b0d5f0d30",
        Raw: sdk.Bool(false),
        XApideckAppID: "cumque",
        XApideckConsumerID: "corporis",
        XApideckServiceID: sdk.String("hic"),
    }, operations.ContactsDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteContactResponse != nil {
        // handle response
    }
}
```

## ContactsOne

Get contact

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
    res, err := s.Contacts.ContactsOne(ctx, operations.ContactsOneRequest{
        Fields: sdk.String("libero"),
        ID: "b2587053-202c-473d-9fe9-b90c28909b3f",
        Raw: sdk.Bool(false),
        XApideckAppID: "earum",
        XApideckConsumerID: "modi",
        XApideckServiceID: sdk.String("iste"),
    }, operations.ContactsOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContactResponse != nil {
        // handle response
    }
}
```

## ContactsUpdate

Update contact

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
    res, err := s.Contacts.ContactsUpdate(ctx, operations.ContactsUpdateRequest{
        ContactInput: shared.ContactInput{
            Active: sdk.Bool(true),
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
            Birthday: sdk.String("2000-08-12"),
            CompanyID: sdk.String("23456"),
            CompanyName: sdk.String("23456"),
            CurrentBalance: sdk.Float64(10.5),
            CustomFields: []shared.CustomField{
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: []string{
                        "nobis",
                        "libero",
                        "delectus",
                    },
                },
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: sdk.Float64(10),
                },
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: sdk.Bool(true),
                },
            },
            Department: sdk.String("Engineering"),
            Description: sdk.String("Internal champion"),
            EmailDomain: sdk.String("gmail.com"),
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
            Gender: shared.ContactGenderEnumFemale.ToPointer(),
            Image: sdk.String("https://unavatar.io/elon-musk"),
            Language: sdk.String("EN"),
            LastName: sdk.String("Musk"),
            LeadID: sdk.String("34567"),
            LeadSource: sdk.String("Cold Call"),
            MiddleName: sdk.String("D."),
            Name: "Elon Musk",
            OwnerID: sdk.String("54321"),
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
            PhotoURL: sdk.String("https://unavatar.io/elon-musk"),
            Prefix: sdk.String("Mr."),
            SocialLinks: []shared.SocialLink{
                shared.SocialLink{
                    ID: sdk.String("12345"),
                    Type: sdk.String("twitter"),
                    URL: "https://www.twitter.com/apideck-io",
                },
            },
            Status: sdk.String("open"),
            Suffix: sdk.String("PhD"),
            Tags: []string{
                "qui",
            },
            Title: sdk.String("CEO"),
            Type: shared.ContactTypeEnumPersonal.ToPointer(),
            Websites: []shared.Website{
                shared.Website{
                    ID: sdk.String("12345"),
                    Type: shared.WebsiteTypeEnumPrimary.ToPointer(),
                    URL: "http://example.com",
                },
            },
        },
        ID: "f9b77f3a-4100-4674-abf6-9280d1ba77a8",
        Raw: sdk.Bool(false),
        XApideckAppID: "omnis",
        XApideckConsumerID: "necessitatibus",
        XApideckServiceID: sdk.String("distinctio"),
    }, operations.ContactsUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateContactResponse != nil {
        // handle response
    }
}
```
