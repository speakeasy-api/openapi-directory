<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

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
            XApideckAppID: "unde",
            XApideckConsumerID: "deserunt",
            XApideckServiceID: "porro",
        },
        Request: shared.HrisCompanyInput{
            Addresses: []shared.Address{
                shared.Address{
                    City: "San Francisco",
                    ContactName: "Elon Musk",
                    Country: "US",
                    County: "Santa Clara",
                    Email: "elon@musk.com",
                    Fax: "122-111-1111",
                    ID: "123",
                    Latitude: "40.759211",
                    Line1: "Main street",
                    Line2: "apt #",
                    Line3: "Suite #",
                    Line4: "delivery instructions",
                    Longitude: "-73.984638",
                    Name: "HQ US",
                    PhoneNumber: "111-111-1111",
                    PostalCode: "94104",
                    RowVersion: "1-12345",
                    Salutation: "Mr",
                    State: "CA",
                    StreetNumber: "25",
                    String: "25 Spring Street, Blackburn, VIC 3130",
                    Type: "primary",
                    Website: "https://elonmusk.com",
                },
                shared.Address{
                    City: "San Francisco",
                    ContactName: "Elon Musk",
                    Country: "US",
                    County: "Santa Clara",
                    Email: "elon@musk.com",
                    Fax: "122-111-1111",
                    ID: "123",
                    Latitude: "40.759211",
                    Line1: "Main street",
                    Line2: "apt #",
                    Line3: "Suite #",
                    Line4: "delivery instructions",
                    Longitude: "-73.984638",
                    Name: "HQ US",
                    PhoneNumber: "111-111-1111",
                    PostalCode: "94104",
                    RowVersion: "1-12345",
                    Salutation: "Mr",
                    State: "CA",
                    StreetNumber: "25",
                    String: "25 Spring Street, Blackburn, VIC 3130",
                    Type: "primary",
                    Website: "https://elonmusk.com",
                },
                shared.Address{
                    City: "San Francisco",
                    ContactName: "Elon Musk",
                    Country: "US",
                    County: "Santa Clara",
                    Email: "elon@musk.com",
                    Fax: "122-111-1111",
                    ID: "123",
                    Latitude: "40.759211",
                    Line1: "Main street",
                    Line2: "apt #",
                    Line3: "Suite #",
                    Line4: "delivery instructions",
                    Longitude: "-73.984638",
                    Name: "HQ US",
                    PhoneNumber: "111-111-1111",
                    PostalCode: "94104",
                    RowVersion: "1-12345",
                    Salutation: "Mr",
                    State: "CA",
                    StreetNumber: "25",
                    String: "25 Spring Street, Blackburn, VIC 3130",
                    Type: "primary",
                    Website: "https://elonmusk.com",
                },
                shared.Address{
                    City: "San Francisco",
                    ContactName: "Elon Musk",
                    Country: "US",
                    County: "Santa Clara",
                    Email: "elon@musk.com",
                    Fax: "122-111-1111",
                    ID: "123",
                    Latitude: "40.759211",
                    Line1: "Main street",
                    Line2: "apt #",
                    Line3: "Suite #",
                    Line4: "delivery instructions",
                    Longitude: "-73.984638",
                    Name: "HQ US",
                    PhoneNumber: "111-111-1111",
                    PostalCode: "94104",
                    RowVersion: "1-12345",
                    Salutation: "Mr",
                    State: "CA",
                    StreetNumber: "25",
                    String: "25 Spring Street, Blackburn, VIC 3130",
                    Type: "primary",
                    Website: "https://elonmusk.com",
                },
            },
            CompanyNumber: "123456-AB",
            DebtorID: "12345",
            DisplayName: "SpaceX",
            Emails: []shared.Email{
                shared.Email{
                    Email: "elon@musk.com",
                    ID: "123",
                    Type: "primary",
                },
                shared.Email{
                    Email: "elon@musk.com",
                    ID: "123",
                    Type: "primary",
                },
                shared.Email{
                    Email: "elon@musk.com",
                    ID: "123",
                    Type: "primary",
                },
            },
            LegalName: "SpaceX",
            PhoneNumbers: []shared.PhoneNumber{
                shared.PhoneNumber{
                    AreaCode: "323",
                    CountryCode: "1",
                    Extension: "105",
                    ID: "12345",
                    Number: "111-111-1111",
                    Type: "primary",
                },
                shared.PhoneNumber{
                    AreaCode: "323",
                    CountryCode: "1",
                    Extension: "105",
                    ID: "12345",
                    Number: "111-111-1111",
                    Type: "primary",
                },
                shared.PhoneNumber{
                    AreaCode: "323",
                    CountryCode: "1",
                    Extension: "105",
                    ID: "12345",
                    Number: "111-111-1111",
                    Type: "primary",
                },
                shared.PhoneNumber{
                    AreaCode: "323",
                    CountryCode: "1",
                    Extension: "105",
                    ID: "12345",
                    Number: "111-111-1111",
                    Type: "primary",
                },
            },
            Status: "active",
            Subdomain: "company",
            Websites: []shared.Website{
                shared.Website{
                    ID: "12345",
                    Type: "primary",
                    URL: "http://example.com",
                },
                shared.Website{
                    ID: "12345",
                    Type: "primary",
                    URL: "http://example.com",
                },
                shared.Website{
                    ID: "12345",
                    Type: "primary",
                    URL: "http://example.com",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Companies.CompaniesAdd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateHrisCompanyResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->