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
            XApideckAppID: "beatae",
            XApideckConsumerID: "atque",
            XApideckServiceID: "enim",
        },
        Request: shared.HrisCompanyInput{
            Addresses: []shared.Address{
                shared.Address{
                    City: "est",
                    ContactName: "quod",
                    Country: "tempore",
                    County: "placeat",
                    Email: "ullam",
                    Fax: "consequuntur",
                    ID: "distinctio",
                    Latitude: "vitae",
                    Line1: "quo",
                    Line2: "aperiam",
                    Line3: "ut",
                    Line4: "qui",
                    Longitude: "tenetur",
                    Name: "labore",
                    PhoneNumber: "eaque",
                    PostalCode: "quidem",
                    RowVersion: "neque",
                    Salutation: "qui",
                    State: "quisquam",
                    StreetNumber: "nisi",
                    String: "aut",
                    Type: "shipping",
                    Website: "laudantium",
                },
                shared.Address{
                    City: "nostrum",
                    ContactName: "sed",
                    Country: "maxime",
                    County: "sint",
                    Email: "modi",
                    Fax: "consequuntur",
                    ID: "quae",
                    Latitude: "asperiores",
                    Line1: "illo",
                    Line2: "qui",
                    Line3: "molestias",
                    Line4: "eius",
                    Longitude: "totam",
                    Name: "voluptas",
                    PhoneNumber: "omnis",
                    PostalCode: "vel",
                    RowVersion: "nemo",
                    Salutation: "est",
                    State: "aut",
                    StreetNumber: "in",
                    String: "velit",
                    Type: "other",
                    Website: "reiciendis",
                },
            },
            CompanyNumber: "molestiae",
            DebtorID: "praesentium",
            DisplayName: "quis",
            Emails: []shared.Email{
                shared.Email{
                    Email: "praesentium",
                    ID: "illo",
                    Type: "other",
                },
                shared.Email{
                    Email: "iure",
                    ID: "est",
                    Type: "work",
                },
            },
            LegalName: "quas",
            PhoneNumbers: []shared.PhoneNumber{
                shared.PhoneNumber{
                    AreaCode: "et",
                    CountryCode: "maxime",
                    Extension: "officiis",
                    ID: "iste",
                    Number: "ut",
                    Type: "personal",
                },
                shared.PhoneNumber{
                    AreaCode: "nulla",
                    CountryCode: "id",
                    Extension: "et",
                    ID: "voluptatem",
                    Number: "officia",
                    Type: "other",
                },
            },
            Status: "other",
            Subdomain: "corrupti",
            Websites: []shared.Website{
                shared.Website{
                    ID: "magni",
                    Type: "primary",
                    URL: "reprehenderit",
                },
                shared.Website{
                    ID: "atque",
                    Type: "other",
                    URL: "suscipit",
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

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

### Employee Payrolls

* `EmployeePayrollsAll` - List Employee Payrolls
* `EmployeePayrollsOne` - Get Employee Payroll

### Employee Schedules

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

### Time Off Requests

* `TimeOffRequestsAdd` - Create Time Off Request
* `TimeOffRequestsAll` - List Time Off Requests
* `TimeOffRequestsDelete` - Delete Time Off Request
* `TimeOffRequestsOne` - Get Time Off Request
* `TimeOffRequestsUpdate` - Update Time Off Request

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
