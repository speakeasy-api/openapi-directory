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
            CustomFields: []shared.CustomField{
                shared.CustomField{
                    Description: "qui",
                    ID: "ut",
                    Name: "itaque",
                    Value: "ab",
                },
                shared.CustomField{
                    Description: "neque",
                    ID: "ullam",
                    Name: "et",
                    Value: "accusantium",
                },
            },
            Deleted: true,
            Emails: []shared.Email{
                shared.Email{
                    Email: "quam",
                    ID: "velit",
                    Type: "billing",
                },
                shared.Email{
                    Email: "soluta",
                    ID: "sunt",
                    Type: "secondary",
                },
            },
            FirstName: "magni",
            Followers: []string{
                "optio",
                "qui",
                "earum",
            },
            Headline: "illo",
            Initials: "omnis",
            LastName: "ut",
            MiddleName: "consequatur",
            Name: "dolor",
            OwnerID: "commodi",
            PhoneNumbers: []shared.PhoneNumber{
                shared.PhoneNumber{
                    AreaCode: "reprehenderit",
                    CountryCode: "consectetur",
                    Extension: "nostrum",
                    ID: "ut",
                    Number: "laboriosam",
                    Type: "home",
                },
            },
            PhotoURL: "a",
            PositionID: "soluta",
            RecordURL: "aut",
            RecruiterID: "quas",
            SocialLinks: []shared.ApplicantSocialLinks{
                shared.ApplicantSocialLinks{
                    ID: "laudantium",
                    Type: "autem",
                    URL: "ipsa",
                },
                shared.ApplicantSocialLinks{
                    ID: "expedita",
                    Type: "doloremque",
                    URL: "perferendis",
                },
                shared.ApplicantSocialLinks{
                    ID: "atque",
                    Type: "ratione",
                    URL: "quisquam",
                },
            },
            Sources: []string{
                "ea",
                "maxime",
                "eum",
            },
            StageID: "perferendis",
            Tags: []string{
                "rerum",
            },
            Title: "reiciendis",
            Websites: []shared.ApplicantWebsites{
                shared.ApplicantWebsites{
                    ID: "cumque",
                    Type: "other",
                    URL: "necessitatibus",
                },
                shared.ApplicantWebsites{
                    ID: "est",
                    Type: "primary",
                    URL: "eum",
                },
                shared.ApplicantWebsites{
                    ID: "labore",
                    Type: "work",
                    URL: "impedit",
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
