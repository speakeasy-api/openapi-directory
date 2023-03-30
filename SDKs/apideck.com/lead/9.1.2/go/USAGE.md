<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.LeadsAddRequest{
        Security: operations.LeadsAddSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.LeadsAddQueryParams{
            Raw: false,
        },
        Headers: operations.LeadsAddHeaders{
            XApideckAppID: "corrupti",
            XApideckConsumerID: "provident",
            XApideckServiceID: "distinctio",
        },
        Request: shared.LeadInput{
            Addresses: []shared.Address{
                shared.Address{
                    City: "San Francisco",
                    ContactName: "Elon Musk",
                    Country: "US",
                    County: "Santa Clara",
                    Email: "elon@musk.com",
                    Fax: "122-111-1111",
                    ID: "123",
                    Latitude: "40.759211",
                    Line1: "Main street",
                    Line2: "apt #",
                    Line3: "Suite #",
                    Line4: "delivery instructions",
                    Longitude: "-73.984638",
                    Name: "HQ US",
                    PhoneNumber: "111-111-1111",
                    PostalCode: "94104",
                    RowVersion: "1-12345",
                    Salutation: "Mr",
                    State: "CA",
                    StreetNumber: "25",
                    String: "25 Spring Street, Blackburn, VIC 3130",
                    Type: "primary",
                    Website: "https://elonmusk.com",
                },
                shared.Address{
                    City: "San Francisco",
                    ContactName: "Elon Musk",
                    Country: "US",
                    County: "Santa Clara",
                    Email: "elon@musk.com",
                    Fax: "122-111-1111",
                    ID: "123",
                    Latitude: "40.759211",
                    Line1: "Main street",
                    Line2: "apt #",
                    Line3: "Suite #",
                    Line4: "delivery instructions",
                    Longitude: "-73.984638",
                    Name: "HQ US",
                    PhoneNumber: "111-111-1111",
                    PostalCode: "94104",
                    RowVersion: "1-12345",
                    Salutation: "Mr",
                    State: "CA",
                    StreetNumber: "25",
                    String: "25 Spring Street, Blackburn, VIC 3130",
                    Type: "primary",
                    Website: "https://elonmusk.com",
                },
                shared.Address{
                    City: "San Francisco",
                    ContactName: "Elon Musk",
                    Country: "US",
                    County: "Santa Clara",
                    Email: "elon@musk.com",
                    Fax: "122-111-1111",
                    ID: "123",
                    Latitude: "40.759211",
                    Line1: "Main street",
                    Line2: "apt #",
                    Line3: "Suite #",
                    Line4: "delivery instructions",
                    Longitude: "-73.984638",
                    Name: "HQ US",
                    PhoneNumber: "111-111-1111",
                    PostalCode: "94104",
                    RowVersion: "1-12345",
                    Salutation: "Mr",
                    State: "CA",
                    StreetNumber: "25",
                    String: "25 Spring Street, Blackburn, VIC 3130",
                    Type: "primary",
                    Website: "https://elonmusk.com",
                },
                shared.Address{
                    City: "San Francisco",
                    ContactName: "Elon Musk",
                    Country: "US",
                    County: "Santa Clara",
                    Email: "elon@musk.com",
                    Fax: "122-111-1111",
                    ID: "123",
                    Latitude: "40.759211",
                    Line1: "Main street",
                    Line2: "apt #",
                    Line3: "Suite #",
                    Line4: "delivery instructions",
                    Longitude: "-73.984638",
                    Name: "HQ US",
                    PhoneNumber: "111-111-1111",
                    PostalCode: "94104",
                    RowVersion: "1-12345",
                    Salutation: "Mr",
                    State: "CA",
                    StreetNumber: "25",
                    String: "25 Spring Street, Blackburn, VIC 3130",
                    Type: "primary",
                    Website: "https://elonmusk.com",
                },
            },
            CompanyID: "2",
            CompanyName: "Spacex",
            ContactID: "2",
            Currency: "USD",
            CustomFields: []shared.CustomField{
                shared.CustomField{
                    Description: "Employee Level",
                    ID: "2389328923893298",
                    Name: "employee_level",
                    Value: []string{
                        "illum",
                        "vel",
                        "error",
                    },
                },
                shared.CustomField{
                    Description: "Employee Level",
                    ID: "2389328923893298",
                    Name: "employee_level",
                    Value: true,
                },
                shared.CustomField{
                    Description: "Employee Level",
                    ID: "2389328923893298",
                    Name: "employee_level",
                    Value: 10,
                },
            },
            Description: "A thinker",
            Emails: []shared.Email{
                shared.Email{
                    Email: "elon@musk.com",
                    ID: "123",
                    Type: "primary",
                },
                shared.Email{
                    Email: "elon@musk.com",
                    ID: "123",
                    Type: "primary",
                },
            },
            Fax: "+12129876543",
            FirstName: "Elon",
            Language: "EN",
            LastName: "Musk",
            LeadSource: "Cold Call",
            MonetaryAmount: 75000,
            Name: "Elon Musk",
            OwnerID: "54321",
            PhoneNumbers: []shared.PhoneNumber{
                shared.PhoneNumber{
                    AreaCode: "323",
                    CountryCode: "1",
                    Extension: "105",
                    ID: "12345",
                    Number: "111-111-1111",
                    Type: "primary",
                },
                shared.PhoneNumber{
                    AreaCode: "323",
                    CountryCode: "1",
                    Extension: "105",
                    ID: "12345",
                    Number: "111-111-1111",
                    Type: "primary",
                },
            },
            Prefix: "Sir",
            SocialLinks: []shared.SocialLink{
                shared.SocialLink{
                    ID: "12345",
                    Type: "twitter",
                    URL: "https://www.twitter.com/apideck-io",
                },
                shared.SocialLink{
                    ID: "12345",
                    Type: "twitter",
                    URL: "https://www.twitter.com/apideck-io",
                },
                shared.SocialLink{
                    ID: "12345",
                    Type: "twitter",
                    URL: "https://www.twitter.com/apideck-io",
                },
                shared.SocialLink{
                    ID: "12345",
                    Type: "twitter",
                    URL: "https://www.twitter.com/apideck-io",
                },
            },
            Status: "New",
            Tags: []string{
                "delectus",
            },
            Title: "CEO",
            Websites: []shared.Website{
                shared.Website{
                    ID: "12345",
                    Type: "primary",
                    URL: "http://example.com",
                },
                shared.Website{
                    ID: "12345",
                    Type: "primary",
                    URL: "http://example.com",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Leads.LeadsAdd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLeadResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->