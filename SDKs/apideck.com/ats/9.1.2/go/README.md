# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apideck.com/ats/9.1.2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
        ApplicantInput: shared.ApplicantInput{
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
            },
            Anonymized: true,
            Applications: []string{
                "distinctio",
                "quibusdam",
                "unde",
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
                    Value: []string{
                        "error",
                        "deserunt",
                    },
                },
                shared.CustomField{
                    Description: "Employee Level",
                    ID: "2389328923893298",
                    Name: "employee_level",
                    Value: 10,
                },
                shared.CustomField{
                    Description: "Employee Level",
                    ID: "2389328923893298",
                    Name: "employee_level",
                    Value: 10,
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
                "ipsa",
                "delectus",
                "tempora",
                "suscipit",
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
                "voluptatum",
                "iusto",
                "excepturi",
                "nisi",
            },
            StageID: "12345",
            Tags: []string{
                "temporibus",
                "ab",
                "quis",
                "veritatis",
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
                shared.ApplicantWebsites{
                    ID: "12345",
                    Type: "primary",
                    URL: "http://example.com",
                },
            },
        },
        Raw: false,
        XApideckAppID: "perferendis",
        XApideckConsumerID: "ipsam",
        XApideckServiceID: "repellendus",
    }

    ctx := context.Background()
    res, err := s.Applicants.ApplicantsAdd(ctx, req, operations.ApplicantsAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApplicantResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Applicants

* `ApplicantsAdd` - Create applicant
* `ApplicantsAll` - List applicants
* `ApplicantsOne` - Get applicant

### Jobs

* `JobsAll` - List Jobs
* `JobsOne` - Get Job
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
