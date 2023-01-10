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
            XApideckAppID: "quaerat",
            XApideckConsumerID: "ipsa",
            XApideckServiceID: "ut",
        },
        Request: shared.LeadInput{
            Addresses: []shared.Address{
                shared.Address{
                    City: "ea",
                    ContactName: "minima",
                    Country: "animi",
                    County: "quo",
                    Email: "architecto",
                    Fax: "quia",
                    ID: "voluptas",
                    Latitude: "molestiae",
                    Line1: "blanditiis",
                    Line2: "nostrum",
                    Line3: "ipsa",
                    Line4: "alias",
                    Longitude: "qui",
                    Name: "veritatis",
                    PhoneNumber: "magnam",
                    PostalCode: "veritatis",
                    RowVersion: "ut",
                    Salutation: "sed",
                    State: "est",
                    StreetNumber: "qui",
                    String: "ad",
                    Type: "home",
                    Website: "aliquid",
                },
                shared.Address{
                    City: "laboriosam",
                    ContactName: "consequuntur",
                    Country: "voluptatem",
                    County: "dolor",
                    Email: "expedita",
                    Fax: "qui",
                    ID: "reprehenderit",
                    Latitude: "dolores",
                    Line1: "error",
                    Line2: "totam",
                    Line3: "iusto",
                    Line4: "odio",
                    Longitude: "et",
                    Name: "at",
                    PhoneNumber: "dolores",
                    PostalCode: "numquam",
                    RowVersion: "est",
                    Salutation: "dolores",
                    State: "in",
                    StreetNumber: "sed",
                    String: "dolore",
                    Type: "primary",
                    Website: "dolorem",
                },
                shared.Address{
                    City: "eum",
                    ContactName: "et",
                    Country: "provident",
                    County: "expedita",
                    Email: "sit",
                    Fax: "quis",
                    ID: "nihil",
                    Latitude: "adipisci",
                    Line1: "praesentium",
                    Line2: "laudantium",
                    Line3: "et",
                    Line4: "beatae",
                    Longitude: "fuga",
                    Name: "perspiciatis",
                    PhoneNumber: "quas",
                    PostalCode: "incidunt",
                    RowVersion: "et",
                    Salutation: "placeat",
                    State: "culpa",
                    StreetNumber: "praesentium",
                    String: "quae",
                    Type: "primary",
                    Website: "qui",
                },
            },
            CompanyID: "iusto",
            CompanyName: "nihil",
            ContactID: "ab",
            Currency: "UYU",
            CustomFields: []shared.CustomField{
                shared.CustomField{
                    Description: "natus",
                    ID: "quo",
                    Name: "error",
                    Value: "neque",
                },
            },
            Description: "deserunt",
            Emails: []shared.Email{
                shared.Email{
                    Email: "qui",
                    ID: "molestiae",
                    Type: "primary",
                },
                shared.Email{
                    Email: "dolore",
                    ID: "dolor",
                    Type: "work",
                },
            },
            Fax: "aspernatur",
            FirstName: "non",
            Language: "sint",
            LastName: "laboriosam",
            LeadSource: "quia",
            MonetaryAmount: 20.200001,
            Name: "nobis",
            OwnerID: "eum",
            PhoneNumbers: []shared.PhoneNumber{
                shared.PhoneNumber{
                    AreaCode: "sapiente",
                    CountryCode: "similique",
                    Extension: "temporibus",
                    ID: "alias",
                    Number: "dignissimos",
                    Type: "personal",
                },
                shared.PhoneNumber{
                    AreaCode: "nihil",
                    CountryCode: "nulla",
                    Extension: "consequatur",
                    ID: "dolorem",
                    Number: "voluptatibus",
                    Type: "fax",
                },
            },
            Prefix: "nostrum",
            SocialLinks: []shared.SocialLink{
                shared.SocialLink{
                    ID: "laudantium",
                    Type: "et",
                    URL: "omnis",
                },
                shared.SocialLink{
                    ID: "et",
                    Type: "eius",
                    URL: "earum",
                },
                shared.SocialLink{
                    ID: "error",
                    Type: "et",
                    URL: "nesciunt",
                },
            },
            Status: "dolores",
            Tags: []string{
                "ipsam",
                "ipsam",
            },
            Title: "blanditiis",
            Websites: []shared.Website{
                shared.Website{
                    ID: "iure",
                    Type: "secondary",
                    URL: "consequatur",
                },
                shared.Website{
                    ID: "quaerat",
                    Type: "work",
                    URL: "ut",
                },
                shared.Website{
                    ID: "delectus",
                    Type: "primary",
                    URL: "commodi",
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Leads

* `LeadsAdd` - Create lead
* `LeadsAll` - List leads
* `LeadsDelete` - Delete lead
* `LeadsOne` - Get lead
* `LeadsUpdate` - Update lead

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
