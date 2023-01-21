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
            XApideckAppID: "voluptas",
            XApideckConsumerID: "culpa",
            XApideckServiceID: "expedita",
        },
        Request: shared.LeadInput{
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
            CompanyID: "vel",
            CompanyName: "rerum",
            ContactID: "mollitia",
            Currency: "FJD",
            CustomFields: []shared.CustomField{
                shared.CustomField{
                    Description: "reprehenderit",
                    ID: "qui",
                    Name: "qui",
                    Value: "unde",
                },
            },
            Description: "in",
            Emails: []shared.Email{
                shared.Email{
                    Email: "qui",
                    ID: "ut",
                    Type: "work",
                },
                shared.Email{
                    Email: "ab",
                    ID: "neque",
                    Type: "work",
                },
            },
            Fax: "et",
            FirstName: "accusantium",
            Language: "esse",
            LastName: "architecto",
            LeadSource: "quam",
            MonetaryAmount: 29.100000,
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
            Prefix: "reprehenderit",
            SocialLinks: []shared.SocialLink{
                shared.SocialLink{
                    ID: "nostrum",
                    Type: "ut",
                    URL: "laboriosam",
                },
            },
            Status: "sed",
            Tags: []string{
                "soluta",
            },
            Title: "aut",
            Websites: []shared.Website{
                shared.Website{
                    ID: "consequuntur",
                    Type: "work",
                    URL: "autem",
                },
                shared.Website{
                    ID: "ipsa",
                    Type: "work",
                    URL: "doloremque",
                },
                shared.Website{
                    ID: "perferendis",
                    Type: "secondary",
                    URL: "ratione",
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
