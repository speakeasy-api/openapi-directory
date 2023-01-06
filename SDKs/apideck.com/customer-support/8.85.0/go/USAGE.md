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
            Raw: true,
        },
        Headers: operations.CustomersAddHeaders{
            XApideckAppID: "nesciunt",
            XApideckConsumerID: "adipisci",
            XApideckServiceID: "consequatur",
        },
        Request: shared.CustomerSupportCustomerInput{
            Addresses: []shared.Address{
                shared.Address{
                    City: "temporibus",
                    ContactName: "alias",
                    Country: "error",
                    County: "voluptatem",
                    Email: "quia",
                    Fax: "enim",
                    ID: "aut",
                    Latitude: "impedit",
                    Line1: "ratione",
                    Line2: "adipisci",
                    Line3: "eius",
                    Line4: "quisquam",
                    Longitude: "sequi",
                    Name: "quia",
                    PhoneNumber: "est",
                    PostalCode: "voluptatem",
                    RowVersion: "voluptate",
                    Salutation: "facilis",
                    State: "quo",
                    StreetNumber: "quia",
                    String: "ipsum",
                    Type: "shipping",
                    Website: "iusto",
                },
            },
            BankAccounts: &shared.BankAccount{
                AccountName: "quis",
                AccountNumber: "et",
                AccountType: "bank_account",
                BankCode: "sunt",
                Bic: "laborum",
                BranchIdentifier: "quibusdam",
                BsbNumber: "eum",
                Currency: "MXN",
                Iban: "veniam",
            },
            CompanyName: "dolores",
            Currency: "XBB",
            Emails: []shared.Email{
                shared.Email{
                    Email: "voluptatem",
                    ID: "voluptatem",
                    Type: "work",
                },
                shared.Email{
                    Email: "est",
                    ID: "natus",
                    Type: "secondary",
                },
            },
            FirstName: "ea",
            Individual: false,
            LastName: "velit",
            Notes: "ipsa",
            PhoneNumbers: []shared.PhoneNumber{
                shared.PhoneNumber{
                    AreaCode: "quibusdam",
                    CountryCode: "nihil",
                    Extension: "sint",
                    ID: "dolorem",
                    Number: "porro",
                    Type: "home",
                },
                shared.PhoneNumber{
                    AreaCode: "ut",
                    CountryCode: "ut",
                    Extension: "dicta",
                    ID: "inventore",
                    Number: "perspiciatis",
                    Type: "assistant",
                },
                shared.PhoneNumber{
                    AreaCode: "esse",
                    CountryCode: "facere",
                    Extension: "commodi",
                    ID: "ea",
                    Number: "pariatur",
                    Type: "fax",
                },
            },
            Status: "archived",
            TaxNumber: "cupiditate",
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