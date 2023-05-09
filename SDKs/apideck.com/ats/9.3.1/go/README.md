# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apideck.com/ats/9.3.1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.Applicants.ApplicantsAdd(ctx, operations.ApplicantsAddRequest{
        ApplicantInput: shared.ApplicantInput{
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
            Anonymized: sdk.Bool(true),
            Applications: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            Archived: sdk.Bool(false),
            Birthday: types.MustDateFromString("2000-08-12"),
            Confidential: sdk.Bool(false),
            CoordinatorID: sdk.String("12345"),
            CoverLetter: sdk.String("I submit this application to express my sincere interest in the API developer position. In the previous role, I was responsible for leadership and ..."),
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
                        "error",
                        "deserunt",
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
                    Value: sdk.Float64(10),
                },
            },
            Deleted: sdk.Bool(true),
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
            FirstName: sdk.String("Elon"),
            Followers: []string{
                "ipsa",
                "delectus",
                "tempora",
                "suscipit",
            },
            Headline: sdk.String("PepsiCo, Inc, Central Perk"),
            Initials: sdk.String("EM"),
            LastName: sdk.String("Musk"),
            MiddleName: sdk.String("D."),
            Name: sdk.String("Elon Musk"),
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
            PositionID: sdk.String("123"),
            RecordURL: sdk.String("https://app.intercom.io/contacts/12345"),
            RecruiterID: sdk.String("12345"),
            SocialLinks: []shared.ApplicantSocialLinks{
                shared.ApplicantSocialLinks{
                    ID: sdk.String("12345"),
                    Type: sdk.String("twitter"),
                    URL: "https://www.twitter.com/apideck-io",
                },
                shared.ApplicantSocialLinks{
                    ID: sdk.String("12345"),
                    Type: sdk.String("twitter"),
                    URL: "https://www.twitter.com/apideck-io",
                },
                shared.ApplicantSocialLinks{
                    ID: sdk.String("12345"),
                    Type: sdk.String("twitter"),
                    URL: "https://www.twitter.com/apideck-io",
                },
                shared.ApplicantSocialLinks{
                    ID: sdk.String("12345"),
                    Type: sdk.String("twitter"),
                    URL: "https://www.twitter.com/apideck-io",
                },
            },
            Sources: []string{
                "voluptatum",
                "iusto",
                "excepturi",
                "nisi",
            },
            StageID: sdk.String("12345"),
            Tags: []string{
                "temporibus",
                "ab",
                "quis",
                "veritatis",
            },
            Title: sdk.String("CEO"),
            Websites: []shared.ApplicantWebsites{
                shared.ApplicantWebsites{
                    ID: sdk.String("12345"),
                    Type: shared.ApplicantWebsitesTypeEnumPrimary.ToPointer(),
                    URL: "http://example.com",
                },
                shared.ApplicantWebsites{
                    ID: sdk.String("12345"),
                    Type: shared.ApplicantWebsitesTypeEnumPrimary.ToPointer(),
                    URL: "http://example.com",
                },
                shared.ApplicantWebsites{
                    ID: sdk.String("12345"),
                    Type: shared.ApplicantWebsitesTypeEnumPrimary.ToPointer(),
                    URL: "http://example.com",
                },
            },
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "perferendis",
        XApideckConsumerID: "ipsam",
        XApideckServiceID: sdk.String("repellendus"),
    }, operations.ApplicantsAddSecurity{
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


### [Applicants](docs/applicants/README.md)

* [ApplicantsAdd](docs/applicants/README.md#applicantsadd) - Create applicant
* [ApplicantsAll](docs/applicants/README.md#applicantsall) - List applicants
* [ApplicantsOne](docs/applicants/README.md#applicantsone) - Get applicant

### [Jobs](docs/jobs/README.md)

* [JobsAll](docs/jobs/README.md#jobsall) - List Jobs
* [JobsOne](docs/jobs/README.md#jobsone) - Get Job
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
