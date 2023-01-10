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
            XApideckAppID: "et",
            XApideckConsumerID: "quaerat",
            XApideckServiceID: "ut",
        },
        Request: shared.ApplicantInput{
            Addresses: []shared.Address{
                shared.Address{
                    City: "et",
                    ContactName: "expedita",
                    Country: "facere",
                    County: "magni",
                    Email: "sed",
                    Fax: "labore",
                    ID: "consequuntur",
                    Latitude: "magni",
                    Line1: "voluptatum",
                    Line2: "minima",
                    Line3: "necessitatibus",
                    Line4: "totam",
                    Longitude: "et",
                    Name: "ea",
                    PhoneNumber: "labore",
                    PostalCode: "quasi",
                    RowVersion: "eaque",
                    Salutation: "velit",
                    State: "ullam",
                    StreetNumber: "cum",
                    String: "quibusdam",
                    Type: "home",
                    Website: "quisquam",
                },
                shared.Address{
                    City: "est",
                    ContactName: "necessitatibus",
                    Country: "dolorum",
                    County: "dolores",
                    Email: "perspiciatis",
                    Fax: "ab",
                    ID: "quia",
                    Latitude: "sit",
                    Line1: "necessitatibus",
                    Line2: "molestiae",
                    Line3: "possimus",
                    Line4: "voluptatum",
                    Longitude: "facere",
                    Name: "accusamus",
                    PhoneNumber: "veritatis",
                    PostalCode: "hic",
                    RowVersion: "praesentium",
                    Salutation: "omnis",
                    State: "qui",
                    StreetNumber: "voluptatum",
                    String: "magni",
                    Type: "other",
                    Website: "nam",
                },
                shared.Address{
                    City: "quia",
                    ContactName: "cum",
                    Country: "molestias",
                    County: "autem",
                    Email: "iure",
                    Fax: "expedita",
                    ID: "nesciunt",
                    Latitude: "eaque",
                    Line1: "corrupti",
                    Line2: "nihil",
                    Line3: "quos",
                    Line4: "eius",
                    Longitude: "impedit",
                    Name: "unde",
                    PhoneNumber: "quis",
                    PostalCode: "dolorem",
                    RowVersion: "quis",
                    Salutation: "rerum",
                    State: "voluptatem",
                    StreetNumber: "occaecati",
                    String: "ut",
                    Type: "home",
                    Website: "corporis",
                },
            },
            Anonymized: true,
            Applications: []string{
                "laboriosam",
                "enim",
                "natus",
            },
            Archived: true,
            Birthday: "2008-05-14",
            Confidential: true,
            CoordinatorID: "sit",
            CoverLetter: "explicabo",
            Deleted: true,
            Emails: []shared.Email{
                shared.Email{
                    Email: "sapiente",
                    ID: "maxime",
                    Type: "work",
                },
                shared.Email{
                    Email: "nobis",
                    ID: "necessitatibus",
                    Type: "primary",
                },
                shared.Email{
                    Email: "minima",
                    ID: "sint",
                    Type: "primary",
                },
            },
            FirstName: "in",
            Followers: []string{
                "sint",
            },
            Headline: "veritatis",
            Initials: "aliquam",
            LastName: "voluptates",
            MiddleName: "est",
            Name: "omnis",
            OwnerID: "aut",
            PhoneNumbers: []shared.PhoneNumber{
                shared.PhoneNumber{
                    AreaCode: "totam",
                    CountryCode: "quidem",
                    Extension: "voluptatum",
                    ID: "qui",
                    Number: "consequuntur",
                    Type: "personal",
                },
            },
            PhotoURL: "labore",
            PositionID: "sed",
            RecordURL: "qui",
            RecruiterID: "omnis",
            SocialLinks: []shared.ApplicantSocialLinks{
                shared.ApplicantSocialLinks{
                    ID: "in",
                    Type: "inventore",
                    URL: "nam",
                },
                shared.ApplicantSocialLinks{
                    ID: "voluptas",
                    Type: "quo",
                    URL: "quaerat",
                },
                shared.ApplicantSocialLinks{
                    ID: "quae",
                    Type: "dolorem",
                    URL: "qui",
                },
            },
            Sources: []string{
                "harum",
            },
            StageID: "quidem",
            Tags: []string{
                "sint",
                "dolorem",
                "qui",
            },
            Title: "esse",
            Websites: []shared.ApplicantWebsites{
                shared.ApplicantWebsites{
                    ID: "eum",
                    Type: "primary",
                    URL: "animi",
                },
                shared.ApplicantWebsites{
                    ID: "non",
                    Type: "work",
                    URL: "voluptate",
                },
                shared.ApplicantWebsites{
                    ID: "modi",
                    Type: "other",
                    URL: "nam",
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