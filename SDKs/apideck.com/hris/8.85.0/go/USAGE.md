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
    
    req := operations.CompaniesAddRequest{
        Security: operations.CompaniesAddSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.CompaniesAddQueryParams{
            Raw: false,
        },
        Headers: operations.CompaniesAddHeaders{
            XApideckAppID: "voluptas",
            XApideckConsumerID: "culpa",
            XApideckServiceID: "expedita",
        },
        Request: shared.HrisCompanyInput{
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
            CompanyNumber: "vel",
            DebtorID: "rerum",
            DisplayName: "mollitia",
            Emails: []shared.Email{
                shared.Email{
                    Email: "quam",
                    ID: "reprehenderit",
                    Type: "primary",
                },
                shared.Email{
                    Email: "qui",
                    ID: "unde",
                    Type: "secondary",
                },
            },
            LegalName: "autem",
            PhoneNumbers: []shared.PhoneNumber{
                shared.PhoneNumber{
                    AreaCode: "ut",
                    CountryCode: "itaque",
                    Extension: "ab",
                    ID: "neque",
                    Number: "ullam",
                    Type: "mobile",
                },
            },
            Status: "active",
            Subdomain: "esse",
            Websites: []shared.Website{
                shared.Website{
                    ID: "quam",
                    Type: "other",
                    URL: "cumque",
                },
                shared.Website{
                    ID: "soluta",
                    Type: "secondary",
                    URL: "voluptates",
                },
            },
        },
    }
    
    res, err := s.Companies.CompaniesAdd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateHrisCompanyResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->