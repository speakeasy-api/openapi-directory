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
                ApplicationID: shared.SchemeApplicationID{
                    APIKey: "YOUR_API_KEY_HERE",
                },
                ConsumerID: shared.SchemeConsumerID{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
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
            XApideckAppID: "velit",
            XApideckConsumerID: "modi",
            XApideckServiceID: "voluptatem",
        },
        Request: shared.LeadInput{
            Addresses: []shared.Address{
                shared.Address{
                    City: "doloremque",
                    ContactName: "cum",
                    Country: "necessitatibus",
                    County: "illum",
                    Email: "enim",
                    Fax: "aspernatur",
                    ID: "ratione",
                    Latitude: "quasi",
                    Line1: "omnis",
                    Line2: "sapiente",
                    Line3: "et",
                    Line4: "omnis",
                    Longitude: "accusamus",
                    Name: "et",
                    PhoneNumber: "accusamus",
                    PostalCode: "voluptatibus",
                    RowVersion: "enim",
                    Salutation: "in",
                    State: "reiciendis",
                    StreetNumber: "rerum",
                    String: "in",
                    Type: "office",
                    Website: "fugit",
                },
                shared.Address{
                    City: "asperiores",
                    ContactName: "fugit",
                    Country: "in",
                    County: "ex",
                    Email: "saepe",
                    Fax: "veritatis",
                    ID: "nulla",
                    Latitude: "possimus",
                    Line1: "ipsum",
                    Line2: "aliquid",
                    Line3: "iure",
                    Line4: "reiciendis",
                    Longitude: "maiores",
                    Name: "fugit",
                    PhoneNumber: "qui",
                    PostalCode: "natus",
                    RowVersion: "molestiae",
                    Salutation: "odit",
                    State: "dolor",
                    StreetNumber: "voluptatibus",
                    String: "aut",
                    Type: "shipping",
                    Website: "et",
                },
                shared.Address{
                    City: "sunt",
                    ContactName: "exercitationem",
                    Country: "voluptatem",
                    County: "natus",
                    Email: "ea",
                    Fax: "incidunt",
                    ID: "voluptatem",
                    Latitude: "omnis",
                    Line1: "illum",
                    Line2: "eligendi",
                    Line3: "dolores",
                    Line4: "harum",
                    Longitude: "neque",
                    Name: "eligendi",
                    PhoneNumber: "et",
                    PostalCode: "aut",
                    RowVersion: "fugiat",
                    Salutation: "et",
                    State: "sit",
                    StreetNumber: "minus",
                    String: "iste",
                    Type: "home",
                    Website: "officia",
                },
            },
            CompanyID: "ducimus",
            CompanyName: "eveniet",
            ContactID: "eos",
            Currency: "HUF",
            CustomFields: []shared.CustomField{
                shared.CustomField{
                    Description: "sed",
                    ID: "qui",
                    Name: "enim",
                    Value: "corporis",
                },
            },
            Description: "dolorem",
            Emails: []shared.Email{
                shared.Email{
                    Email: "quibusdam",
                    ID: "est",
                    Type: "primary",
                },
            },
            Fax: "consequatur",
            FirstName: "laborum",
            Language: "quis",
            LastName: "laboriosam",
            LeadSource: "fugiat",
            MonetaryAmount: 57.099998,
            Name: "tempore",
            OwnerID: "libero",
            PhoneNumbers: []shared.PhoneNumber{
                shared.PhoneNumber{
                    AreaCode: "est",
                    CountryCode: "et",
                    Extension: "et",
                    ID: "a",
                    Number: "quis",
                    Type: "assistant",
                },
                shared.PhoneNumber{
                    AreaCode: "dolorum",
                    CountryCode: "ut",
                    Extension: "veniam",
                    ID: "est",
                    Number: "blanditiis",
                    Type: "fax",
                },
            },
            Prefix: "asperiores",
            SocialLinks: []shared.SocialLink{
                shared.SocialLink{
                    ID: "tempore",
                    Type: "assumenda",
                    URL: "deleniti",
                },
                shared.SocialLink{
                    ID: "ea",
                    Type: "aut",
                    URL: "dignissimos",
                },
                shared.SocialLink{
                    ID: "voluptatem",
                    Type: "voluptatem",
                    URL: "quo",
                },
            },
            Status: "atque",
            Tags: []string{
                "itaque",
                "ut",
            },
            Title: "ut",
            Websites: []shared.Website{
                shared.Website{
                    ID: "aut",
                    Type: "other",
                    URL: "maiores",
                },
                shared.Website{
                    ID: "repellendus",
                    Type: "primary",
                    URL: "repudiandae",
                },
                shared.Website{
                    ID: "voluptates",
                    Type: "personal",
                    URL: "rem",
                },
            },
        },
    }
    
    res, err := s.Leads.LeadsAdd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLeadResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->