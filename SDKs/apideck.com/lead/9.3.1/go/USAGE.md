<!-- Start SDK Example Usage -->
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
    res, err := s.Leads.LeadsAdd(ctx, operations.LeadsAddRequest{
        LeadInput: shared.LeadInput{
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
            CompanyID: sdk.String("2"),
            CompanyName: "Spacex",
            ContactID: sdk.String("2"),
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            CustomFields: []shared.CustomField{
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: sdk.Bool(true),
                },
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: []string{
                        "nulla",
                        "corrupti",
                        "illum",
                    },
                },
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: sdk.Float64(10),
                },
            },
            Description: sdk.String("A thinker"),
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
            Language: sdk.String("EN"),
            LastName: sdk.String("Musk"),
            LeadSource: sdk.String("Cold Call"),
            MonetaryAmount: sdk.Float64(75000),
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
                shared.PhoneNumber{
                    AreaCode: sdk.String("323"),
                    CountryCode: sdk.String("1"),
                    Extension: sdk.String("105"),
                    ID: sdk.String("12345"),
                    Number: "111-111-1111",
                    Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                },
            },
            Prefix: sdk.String("Sir"),
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
            },
            Status: sdk.String("New"),
            Tags: []string{
                "magnam",
                "debitis",
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
        Raw: sdk.Bool(false),
        XApideckAppID: "delectus",
        XApideckConsumerID: "tempora",
        XApideckServiceID: sdk.String("suscipit"),
    }, operations.LeadsAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLeadResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->