# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.ApplicantsAddRequest{
        Security: operations.ApplicantsAddSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.ApplicantsAddQueryParams{
            Raw: true,
        },
        Headers: operations.ApplicantsAddHeaders{
            XApideckAppID: "repellat",
            XApideckConsumerID: "non",
            XApideckServiceID: "blanditiis",
        },
        Request: shared.ApplicantInput{
            Addresses: []shared.Address{
                shared.Address{
                    City: "magni",
                    ContactName: "nemo",
                    Country: "corporis",
                    County: "cupiditate",
                    Email: "soluta",
                    Fax: "voluptatibus",
                    ID: "maiores",
                    Latitude: "corrupti",
                    Line1: "expedita",
                    Line2: "nisi",
                    Line3: "quibusdam",
                    Line4: "magni",
                    Longitude: "quia",
                    Name: "earum",
                    PhoneNumber: "a",
                    PostalCode: "alias",
                    RowVersion: "culpa",
                    Salutation: "rerum",
                    State: "maxime",
                    StreetNumber: "qui",
                    String: "omnis",
                    Type: "shipping",
                    Website: "iusto",
                },
                shared.Address{
                    City: "recusandae",
                    ContactName: "provident",
                    Country: "voluptatem",
                    County: "veniam",
                    Email: "aspernatur",
                    Fax: "sed",
                    ID: "voluptatem",
                    Latitude: "numquam",
                    Line1: "explicabo",
                    Line2: "et",
                    Line3: "nulla",
                    Line4: "nulla",
                    Longitude: "amet",
                    Name: "error",
                    PhoneNumber: "voluptate",
                    PostalCode: "odit",
                    RowVersion: "exercitationem",
                    Salutation: "hic",
                    State: "perferendis",
                    StreetNumber: "cupiditate",
                    String: "sed",
                    Type: "billing",
                    Website: "eveniet",
                },
                shared.Address{
                    City: "qui",
                    ContactName: "qui",
                    Country: "eius",
                    County: "voluptas",
                    Email: "dicta",
                    Fax: "aut",
                    ID: "officiis",
                    Latitude: "aliquid",
                    Line1: "natus",
                    Line2: "voluptate",
                    Line3: "consectetur",
                    Line4: "tempore",
                    Longitude: "voluptate",
                    Name: "voluptatibus",
                    PhoneNumber: "velit",
                    PostalCode: "maiores",
                    RowVersion: "sunt",
                    Salutation: "et",
                    State: "est",
                    StreetNumber: "reprehenderit",
                    String: "totam",
                    Type: "home",
                    Website: "voluptas",
                },
            },
            Anonymized: false,
            Applications: []string{
                "veritatis",
                "aliquid",
                "et",
            },
            Archived: false,
            Birthday: "1996-08-29",
            Confidential: true,
            CoordinatorID: "et",
            CoverLetter: "perspiciatis",
            Deleted: false,
            Emails: []shared.Email{
                shared.Email{
                    Email: "modi",
                    ID: "est",
                    Type: "secondary",
                },
                shared.Email{
                    Email: "vel",
                    ID: "qui",
                    Type: "secondary",
                },
            },
            FirstName: "possimus",
            Followers: []string{
                "iusto",
            },
            Headline: "nihil",
            Initials: "qui",
            LastName: "a",
            MiddleName: "totam",
            Name: "at",
            OwnerID: "aliquam",
            PhoneNumbers: []shared.PhoneNumber{
                shared.PhoneNumber{
                    AreaCode: "inventore",
                    CountryCode: "esse",
                    Extension: "consectetur",
                    ID: "cumque",
                    Number: "fugit",
                    Type: "personal",
                },
                shared.PhoneNumber{
                    AreaCode: "quia",
                    CountryCode: "neque",
                    Extension: "incidunt",
                    ID: "et",
                    Number: "neque",
                    Type: "personal",
                },
                shared.PhoneNumber{
                    AreaCode: "tempore",
                    CountryCode: "ipsum",
                    Extension: "omnis",
                    ID: "error",
                    Number: "reprehenderit",
                    Type: "direct-dial-in",
                },
            },
            PhotoURL: "aut",
            PositionID: "eum",
            RecordURL: "recusandae",
            RecruiterID: "ratione",
            SocialLinks: []shared.ApplicantSocialLinks{
                shared.ApplicantSocialLinks{
                    ID: "necessitatibus",
                    Type: "saepe",
                    URL: "libero",
                },
            },
            Sources: []string{
                "ut",
            },
            StageID: "accusamus",
            Tags: []string{
                "hic",
            },
            Title: "sed",
            Websites: []shared.ApplicantWebsites{
                shared.ApplicantWebsites{
                    ID: "eum",
                    Type: "primary",
                    URL: "expedita",
                },
                shared.ApplicantWebsites{
                    ID: "et",
                    Type: "primary",
                    URL: "nisi",
                },
                shared.ApplicantWebsites{
                    ID: "et",
                    Type: "secondary",
                    URL: "in",
                },
            },
        },
    }
    
    res, err := s.Applicants.ApplicantsAdd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApplicantResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Applicants

* `ApplicantsAdd` - Create applicant
* `ApplicantsAll` - List applicants
* `ApplicantsOne` - Get applicant

### Jobs

* `JobsAll` - List Jobs
* `JobsOne` - Get Job

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
