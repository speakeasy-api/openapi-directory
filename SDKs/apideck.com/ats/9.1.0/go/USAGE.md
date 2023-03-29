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

    req := operations.ApplicantsAddRequest{
        Security: operations.ApplicantsAddSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.ApplicantsAddQueryParams{
            Raw: false,
        },
        Headers: operations.ApplicantsAddHeaders{
            XApideckAppID: "unde",
            XApideckConsumerID: "deserunt",
            XApideckServiceID: "porro",
        },
        Request: shared.ApplicantInput{
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
            Anonymized: true,
            Applications: []string{
                "vero",
                "perspiciatis",
                "nulla",
            },
            Archived: false,
            Birthday: "2000-08-12",
            Confidential: false,
            CoordinatorID: "12345",
            CoverLetter: "I submit this application to express my sincere interest in the API developer position. In the previous role, I was responsible for leadership and ...",
            CustomFields: []shared.CustomField{
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
                    Value: true,
                },
            },
            Deleted: true,
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
            FirstName: "Elon",
            Followers: []string{
                "ullam",
                "saepe",
            },
            Headline: "PepsiCo, Inc, Central Perk",
            Initials: "EM",
            LastName: "Musk",
            MiddleName: "D.",
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
            },
            PhotoURL: "https://unavatar.io/elon-musk",
            PositionID: "123",
            RecordURL: "https://app.intercom.io/contacts/12345",
            RecruiterID: "12345",
            SocialLinks: []shared.ApplicantSocialLinks{
                shared.ApplicantSocialLinks{
                    ID: "12345",
                    Type: "twitter",
                    URL: "https://www.twitter.com/apideck-io",
                },
                shared.ApplicantSocialLinks{
                    ID: "12345",
                    Type: "twitter",
                    URL: "https://www.twitter.com/apideck-io",
                },
                shared.ApplicantSocialLinks{
                    ID: "12345",
                    Type: "twitter",
                    URL: "https://www.twitter.com/apideck-io",
                },
                shared.ApplicantSocialLinks{
                    ID: "12345",
                    Type: "twitter",
                    URL: "https://www.twitter.com/apideck-io",
                },
            },
            Sources: []string{
                "eum",
                "voluptatum",
            },
            StageID: "12345",
            Tags: []string{
                "vel",
                "non",
                "deleniti",
                "similique",
            },
            Title: "CEO",
            Websites: []shared.ApplicantWebsites{
                shared.ApplicantWebsites{
                    ID: "12345",
                    Type: "primary",
                    URL: "http://example.com",
                },
                shared.ApplicantWebsites{
                    ID: "12345",
                    Type: "primary",
                    URL: "http://example.com",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Applicants.ApplicantsAdd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApplicantResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->