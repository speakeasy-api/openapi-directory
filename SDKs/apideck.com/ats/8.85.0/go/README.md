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
            Raw: false,
        },
        Headers: operations.ApplicantsAddHeaders{
            XApideckAppID: "voluptas",
            XApideckConsumerID: "culpa",
            XApideckServiceID: "expedita",
        },
        Request: shared.ApplicantInput{
            Addresses: []shared.Address{
                shared.Address{
                    City: "dolor",
                    ContactName: "expedita",
                    Country: "voluptas",
                    County: "fugit",
                    Email: "et",
                    Fax: "nihil",
                    ID: "rerum",
                    Latitude: "dicta",
                    Line1: "debitis",
                    Line2: "voluptatum",
                    Line3: "et",
                    Line4: "ut",
                    Longitude: "dolorem",
                    Name: "et",
                    PhoneNumber: "voluptate",
                    PostalCode: "iste",
                    RowVersion: "vitae",
                    Salutation: "totam",
                    State: "dolores",
                    StreetNumber: "illum",
                    String: "debitis",
                    Type: "secondary",
                    Website: "odio",
                },
                shared.Address{
                    City: "dolore",
                    ContactName: "id",
                    Country: "aspernatur",
                    County: "accusantium",
                    Email: "totam",
                    Fax: "commodi",
                    ID: "quis",
                    Latitude: "est",
                    Line1: "aut",
                    Line2: "odit",
                    Line3: "non",
                    Line4: "voluptas",
                    Longitude: "omnis",
                    Name: "aut",
                    PhoneNumber: "illo",
                    PostalCode: "sed",
                    RowVersion: "officiis",
                    Salutation: "autem",
                    State: "consectetur",
                    StreetNumber: "nobis",
                    String: "odio",
                    Type: "office",
                    Website: "recusandae",
                },
                shared.Address{
                    City: "at",
                    ContactName: "ipsum",
                    Country: "eveniet",
                    County: "modi",
                    Email: "sint",
                    Fax: "inventore",
                    ID: "ut",
                    Latitude: "exercitationem",
                    Line1: "aut",
                    Line2: "reprehenderit",
                    Line3: "tempore",
                    Line4: "maiores",
                    Longitude: "incidunt",
                    Name: "dolor",
                    PhoneNumber: "beatae",
                    PostalCode: "veritatis",
                    RowVersion: "in",
                    Salutation: "et",
                    State: "omnis",
                    StreetNumber: "ipsum",
                    String: "ex",
                    Type: "shipping",
                    Website: "placeat",
                },
            },
            Anonymized: true,
            Applications: []string{
                "mollitia",
                "voluptas",
                "quam",
            },
            Archived: false,
            Birthday: "1978-04-25",
            Confidential: false,
            CoordinatorID: "unde",
            CoverLetter: "in",
            Deleted: false,
            Emails: []shared.Email{
                shared.Email{
                    Email: "ut",
                    ID: "itaque",
                    Type: "primary",
                },
            },
            FirstName: "neque",
            Followers: []string{
                "et",
                "accusantium",
                "esse",
            },
            Headline: "architecto",
            Initials: "quam",
            LastName: "velit",
            MiddleName: "cumque",
            Name: "soluta",
            OwnerID: "sunt",
            PhoneNumbers: []shared.PhoneNumber{
                shared.PhoneNumber{
                    AreaCode: "magni",
                    CountryCode: "et",
                    Extension: "optio",
                    ID: "qui",
                    Number: "earum",
                    Type: "home",
                },
                shared.PhoneNumber{
                    AreaCode: "omnis",
                    CountryCode: "ut",
                    Extension: "consequatur",
                    ID: "dolor",
                    Number: "commodi",
                    Type: "office",
                },
            },
            PhotoURL: "reprehenderit",
            PositionID: "consectetur",
            RecordURL: "nostrum",
            RecruiterID: "ut",
            SocialLinks: []shared.ApplicantSocialLinks{
                shared.ApplicantSocialLinks{
                    ID: "sed",
                    Type: "a",
                    URL: "soluta",
                },
                shared.ApplicantSocialLinks{
                    ID: "aut",
                    Type: "quas",
                    URL: "consequuntur",
                },
                shared.ApplicantSocialLinks{
                    ID: "laudantium",
                    Type: "autem",
                    URL: "ipsa",
                },
            },
            Sources: []string{
                "doloremque",
                "perferendis",
            },
            StageID: "atque",
            Tags: []string{
                "quisquam",
            },
            Title: "explicabo",
            Websites: []shared.ApplicantWebsites{
                shared.ApplicantWebsites{
                    ID: "maxime",
                    Type: "primary",
                    URL: "perferendis",
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
