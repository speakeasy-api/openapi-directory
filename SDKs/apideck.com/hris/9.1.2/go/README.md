# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apideck.com/hris/9.1.2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
        HrisCompanyInput: shared.HrisCompanyInput{
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
                shared.Website{
                    ID: "12345",
                    Type: "primary",
                    URL: "http://example.com",
                },
            },
        },
        Raw: false,
        XApideckAppID: "unde",
        XApideckConsumerID: "nulla",
        XApideckServiceID: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Companies.CompaniesAdd(ctx, req, operations.CompaniesAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateHrisCompanyResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Companies

* `CompaniesAdd` - Create Company
* `CompaniesAll` - List Companies
* `CompaniesDelete` - Delete Company
* `CompaniesOne` - Get Company
* `CompaniesUpdate` - Update Company

### Departments

* `DepartmentsAdd` - Create Department
* `DepartmentsAll` - List Departments
* `DepartmentsDelete` - Delete Department
* `DepartmentsOne` - Get Department
* `DepartmentsUpdate` - Update Department

### EmployeePayrolls

* `EmployeePayrollsAll` - List Employee Payrolls
* `EmployeePayrollsOne` - Get Employee Payroll

### EmployeeSchedules

* `EmployeeSchedulesAll` - List Employee Schedules

### Employees

* `EmployeesAdd` - Create Employee
* `EmployeesAll` - List Employees
* `EmployeesDelete` - Delete Employee
* `EmployeesOne` - Get Employee
* `EmployeesUpdate` - Update Employee

### Jobs

* `JobsAll` - List Jobs
* `JobsOne` - One Job

### Payrolls

* `PayrollsAll` - List Payroll
* `PayrollsOne` - Get Payroll

### TimeOffRequests

* `TimeOffRequestsAdd` - Create Time Off Request
* `TimeOffRequestsAll` - List Time Off Requests
* `TimeOffRequestsDelete` - Delete Time Off Request
* `TimeOffRequestsOne` - Get Time Off Request
* `TimeOffRequestsUpdate` - Update Time Off Request
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
