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
            Raw: true,
        },
        Headers: operations.CompaniesAddHeaders{
            XApideckAppID: "soluta",
            XApideckConsumerID: "alias",
            XApideckServiceID: "aut",
        },
        Request: shared.HrisCompanyInput{
            Addresses: []shared.Address{
                shared.Address{
                    City: "dolorum",
                    ContactName: "nostrum",
                    Country: "laboriosam",
                    County: "dolore",
                    Email: "quidem",
                    Fax: "doloribus",
                    ID: "at",
                    Latitude: "dolore",
                    Line1: "et",
                    Line2: "natus",
                    Line3: "corrupti",
                    Line4: "quis",
                    Longitude: "consequatur",
                    Name: "tenetur",
                    PhoneNumber: "alias",
                    PostalCode: "similique",
                    RowVersion: "iure",
                    Salutation: "fugit",
                    State: "et",
                    StreetNumber: "deleniti",
                    String: "laudantium",
                    Type: "primary",
                    Website: "doloribus",
                },
            },
            CompanyNumber: "quasi",
            DebtorID: "et",
            DisplayName: "laboriosam",
            Emails: []shared.Email{
                shared.Email{
                    Email: "doloremque",
                    ID: "minus",
                    Type: "other",
                },
            },
            LegalName: "magnam",
            PhoneNumbers: []shared.PhoneNumber{
                shared.PhoneNumber{
                    AreaCode: "fuga",
                    CountryCode: "voluptatem",
                    Extension: "officia",
                    ID: "iure",
                    Number: "at",
                    Type: "direct-dial-in",
                },
            },
            Status: "trial",
            Subdomain: "nobis",
            Websites: []shared.Website{
                shared.Website{
                    ID: "aperiam",
                    Type: "work",
                    URL: "sequi",
                },
                shared.Website{
                    ID: "laborum",
                    Type: "primary",
                    URL: "aliquid",
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