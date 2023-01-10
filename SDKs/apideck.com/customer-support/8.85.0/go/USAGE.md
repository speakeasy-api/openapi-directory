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
    
    req := operations.CustomersAddRequest{
        Security: operations.CustomersAddSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.CustomersAddQueryParams{
            Raw: false,
        },
        Headers: operations.CustomersAddHeaders{
            XApideckAppID: "ut",
            XApideckConsumerID: "quas",
            XApideckServiceID: "eum",
        },
        Request: shared.CustomerSupportCustomerInput{
            Addresses: []shared.Address{
                shared.Address{
                    City: "distinctio",
                    ContactName: "molestiae",
                    Country: "sed",
                    County: "sed",
                    Email: "autem",
                    Fax: "ipsa",
                    ID: "sequi",
                    Latitude: "inventore",
                    Line1: "earum",
                    Line2: "ad",
                    Line3: "eligendi",
                    Line4: "quia",
                    Longitude: "eum",
                    Name: "nihil",
                    PhoneNumber: "dolorum",
                    PostalCode: "eos",
                    RowVersion: "est",
                    Salutation: "et",
                    State: "dolor",
                    StreetNumber: "omnis",
                    String: "itaque",
                    Type: "secondary",
                    Website: "nihil",
                },
            },
            BankAccounts: &shared.BankAccount{
                AccountName: "quae",
                AccountNumber: "cupiditate",
                AccountType: "other",
                BankCode: "et",
                Bic: "perferendis",
                BranchIdentifier: "maiores",
                BsbNumber: "est",
                Currency: "LAK",
                Iban: "sint",
            },
            CompanyName: "vero",
            Currency: "YER",
            Emails: []shared.Email{
                shared.Email{
                    Email: "suscipit",
                    ID: "laudantium",
                    Type: "work",
                },
                shared.Email{
                    Email: "dicta",
                    ID: "dolorem",
                    Type: "billing",
                },
            },
            FirstName: "reiciendis",
            Individual: true,
            LastName: "fuga",
            Notes: "sed",
            PhoneNumbers: []shared.PhoneNumber{
                shared.PhoneNumber{
                    AreaCode: "velit",
                    CountryCode: "consequatur",
                    Extension: "reiciendis",
                    ID: "perspiciatis",
                    Number: "labore",
                    Type: "secondary",
                },
                shared.PhoneNumber{
                    AreaCode: "perferendis",
                    CountryCode: "ea",
                    Extension: "adipisci",
                    ID: "quos",
                    Number: "odit",
                    Type: "secondary",
                },
                shared.PhoneNumber{
                    AreaCode: "non",
                    CountryCode: "expedita",
                    Extension: "veniam",
                    ID: "quos",
                    Number: "natus",
                    Type: "personal",
                },
            },
            Status: "unknown",
            TaxNumber: "earum",
        },
    }
    
    res, err := s.Customers.CustomersAdd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCustomerSupportCustomerResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->