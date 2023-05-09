# Employees

### Available Operations

* [EmployeesAdd](#employeesadd) - Create Employee
* [EmployeesAll](#employeesall) - List Employees
* [EmployeesDelete](#employeesdelete) - Delete Employee
* [EmployeesOne](#employeesone) - Get Employee
* [EmployeesUpdate](#employeesupdate) - Update Employee

## EmployeesAdd

Create Employee

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Employees.EmployeesAdd(ctx, operations.EmployeesAddRequest{
        EmployeeInput: shared.EmployeeInput{
            Addresses: []shared.Address{
                shared.Address{
                    City: sdk.String("San Francisco"),
                    ContactName: sdk.String("Elon Musk"),
                    Country: sdk.String("US"),
                    County: sdk.String("Santa Clara"),
                    Email: sdk.String("elon@musk.com"),
                    Fax: sdk.String("122-111-1111"),
                    ID: sdk.String("123"),
                    Latitude: sdk.String("40.759211"),
                    Line1: sdk.String("Main street"),
                    Line2: sdk.String("apt #"),
                    Line3: sdk.String("Suite #"),
                    Line4: sdk.String("delivery instructions"),
                    Longitude: sdk.String("-73.984638"),
                    Name: sdk.String("HQ US"),
                    PhoneNumber: sdk.String("111-111-1111"),
                    PostalCode: sdk.String("94104"),
                    RowVersion: sdk.String("1-12345"),
                    Salutation: sdk.String("Mr"),
                    State: sdk.String("CA"),
                    StreetNumber: sdk.String("25"),
                    String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                    Type: shared.AddressTypeEnumPrimary.ToPointer(),
                    Website: sdk.String("https://elonmusk.com"),
                },
                shared.Address{
                    City: sdk.String("San Francisco"),
                    ContactName: sdk.String("Elon Musk"),
                    Country: sdk.String("US"),
                    County: sdk.String("Santa Clara"),
                    Email: sdk.String("elon@musk.com"),
                    Fax: sdk.String("122-111-1111"),
                    ID: sdk.String("123"),
                    Latitude: sdk.String("40.759211"),
                    Line1: sdk.String("Main street"),
                    Line2: sdk.String("apt #"),
                    Line3: sdk.String("Suite #"),
                    Line4: sdk.String("delivery instructions"),
                    Longitude: sdk.String("-73.984638"),
                    Name: sdk.String("HQ US"),
                    PhoneNumber: sdk.String("111-111-1111"),
                    PostalCode: sdk.String("94104"),
                    RowVersion: sdk.String("1-12345"),
                    Salutation: sdk.String("Mr"),
                    State: sdk.String("CA"),
                    StreetNumber: sdk.String("25"),
                    String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                    Type: shared.AddressTypeEnumPrimary.ToPointer(),
                    Website: sdk.String("https://elonmusk.com"),
                },
                shared.Address{
                    City: sdk.String("San Francisco"),
                    ContactName: sdk.String("Elon Musk"),
                    Country: sdk.String("US"),
                    County: sdk.String("Santa Clara"),
                    Email: sdk.String("elon@musk.com"),
                    Fax: sdk.String("122-111-1111"),
                    ID: sdk.String("123"),
                    Latitude: sdk.String("40.759211"),
                    Line1: sdk.String("Main street"),
                    Line2: sdk.String("apt #"),
                    Line3: sdk.String("Suite #"),
                    Line4: sdk.String("delivery instructions"),
                    Longitude: sdk.String("-73.984638"),
                    Name: sdk.String("HQ US"),
                    PhoneNumber: sdk.String("111-111-1111"),
                    PostalCode: sdk.String("94104"),
                    RowVersion: sdk.String("1-12345"),
                    Salutation: sdk.String("Mr"),
                    State: sdk.String("CA"),
                    StreetNumber: sdk.String("25"),
                    String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                    Type: shared.AddressTypeEnumPrimary.ToPointer(),
                    Website: sdk.String("https://elonmusk.com"),
                },
            },
            Birthday: types.MustDateFromString("2000-08-12"),
            CompanyID: sdk.String("23456"),
            CompanyName: sdk.String("SpaceX"),
            Compensations: []shared.EmployeeCompensationsInput{
                shared.EmployeeCompensationsInput{
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    EffectiveDate: sdk.String("2020-08-12"),
                    FlsaStatus: shared.EmployeeCompensationsFlsaStatusEnumSalariedNonexempt.ToPointer(),
                    PaymentUnit: shared.PaymentUnitEnumYear.ToPointer(),
                    Rate: sdk.Float64(72000),
                },
                shared.EmployeeCompensationsInput{
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    EffectiveDate: sdk.String("2020-08-12"),
                    FlsaStatus: shared.EmployeeCompensationsFlsaStatusEnumSalariedNonexempt.ToPointer(),
                    PaymentUnit: shared.PaymentUnitEnumYear.ToPointer(),
                    Rate: sdk.Float64(72000),
                },
                shared.EmployeeCompensationsInput{
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    EffectiveDate: sdk.String("2020-08-12"),
                    FlsaStatus: shared.EmployeeCompensationsFlsaStatusEnumSalariedNonexempt.ToPointer(),
                    PaymentUnit: shared.PaymentUnitEnumYear.ToPointer(),
                    Rate: sdk.Float64(72000),
                },
            },
            CountryOfBirth: sdk.String("US"),
            CustomFields: []shared.CustomField{
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: sdk.Bool(true),
                },
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: sdk.Float64(10),
                },
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: []string{
                        "architecto",
                    },
                },
            },
            DeceasedOn: types.MustDateFromString("2000-08-12"),
            Deleted: sdk.Bool(true),
            Department: sdk.String("R&D"),
            DepartmentID: sdk.String("12345"),
            DepartmentName: sdk.String("12345"),
            Description: sdk.String("A description"),
            DietaryPreference: sdk.String("Veggie"),
            DirectReports: []string{
                "et",
                "excepturi",
            },
            DisplayName: sdk.String("Technoking"),
            Division: sdk.String("Europe"),
            DivisionID: sdk.String("12345"),
            Emails: []shared.Email{
                shared.Email{
                    Email: "elon@musk.com",
                    ID: sdk.String("123"),
                    Type: shared.EmailTypeEnumPrimary.ToPointer(),
                },
                shared.Email{
                    Email: "elon@musk.com",
                    ID: sdk.String("123"),
                    Type: shared.EmailTypeEnumPrimary.ToPointer(),
                },
            },
            EmployeeNumber: sdk.String("123456-AB"),
            EmploymentEndDate: sdk.String("2028-10-26"),
            EmploymentRole: &shared.EmployeeEmploymentRole{
                SubType: shared.EmployeeEmploymentRoleEmploymentSubTypeEnumPartTime.ToPointer(),
                Type: shared.EmployeeEmploymentRoleEmploymentTypeEnumTemp.ToPointer(),
            },
            EmploymentStartDate: sdk.String("2021-10-26"),
            EmploymentStatus: shared.EmploymentStatusEnumActive.ToPointer(),
            FirstName: sdk.String("Elon"),
            FoodAllergies: []string{
                "accusantium",
                "mollitia",
                "reiciendis",
            },
            Gender: shared.GenderEnumMale.ToPointer(),
            Initials: sdk.String("EM"),
            Jobs: []shared.EmployeeJobsInput{
                shared.EmployeeJobsInput{
                    CompensationRate: sdk.Float64(72000),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    EndDate: types.MustDateFromString("2020-08-12"),
                    HiredAt: types.MustDateFromString("2020-08-12"),
                    IsPrimary: sdk.Bool(true),
                    Location: &shared.Address{
                        City: sdk.String("San Francisco"),
                        ContactName: sdk.String("Elon Musk"),
                        Country: sdk.String("US"),
                        County: sdk.String("Santa Clara"),
                        Email: sdk.String("elon@musk.com"),
                        Fax: sdk.String("122-111-1111"),
                        ID: sdk.String("123"),
                        Latitude: sdk.String("40.759211"),
                        Line1: sdk.String("Main street"),
                        Line2: sdk.String("apt #"),
                        Line3: sdk.String("Suite #"),
                        Line4: sdk.String("delivery instructions"),
                        Longitude: sdk.String("-73.984638"),
                        Name: sdk.String("HQ US"),
                        PhoneNumber: sdk.String("111-111-1111"),
                        PostalCode: sdk.String("94104"),
                        RowVersion: sdk.String("1-12345"),
                        Salutation: sdk.String("Mr"),
                        State: sdk.String("CA"),
                        StreetNumber: sdk.String("25"),
                        String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                        Type: shared.AddressTypeEnumPrimary.ToPointer(),
                        Website: sdk.String("https://elonmusk.com"),
                    },
                    PaymentUnit: shared.PaymentUnitEnumYear.ToPointer(),
                    Role: sdk.String("Sales"),
                    StartDate: types.MustDateFromString("2020-08-12"),
                    Title: sdk.String("CEO"),
                },
                shared.EmployeeJobsInput{
                    CompensationRate: sdk.Float64(72000),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    EndDate: types.MustDateFromString("2020-08-12"),
                    HiredAt: types.MustDateFromString("2020-08-12"),
                    IsPrimary: sdk.Bool(true),
                    Location: &shared.Address{
                        City: sdk.String("San Francisco"),
                        ContactName: sdk.String("Elon Musk"),
                        Country: sdk.String("US"),
                        County: sdk.String("Santa Clara"),
                        Email: sdk.String("elon@musk.com"),
                        Fax: sdk.String("122-111-1111"),
                        ID: sdk.String("123"),
                        Latitude: sdk.String("40.759211"),
                        Line1: sdk.String("Main street"),
                        Line2: sdk.String("apt #"),
                        Line3: sdk.String("Suite #"),
                        Line4: sdk.String("delivery instructions"),
                        Longitude: sdk.String("-73.984638"),
                        Name: sdk.String("HQ US"),
                        PhoneNumber: sdk.String("111-111-1111"),
                        PostalCode: sdk.String("94104"),
                        RowVersion: sdk.String("1-12345"),
                        Salutation: sdk.String("Mr"),
                        State: sdk.String("CA"),
                        StreetNumber: sdk.String("25"),
                        String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                        Type: shared.AddressTypeEnumPrimary.ToPointer(),
                        Website: sdk.String("https://elonmusk.com"),
                    },
                    PaymentUnit: shared.PaymentUnitEnumYear.ToPointer(),
                    Role: sdk.String("Sales"),
                    StartDate: types.MustDateFromString("2020-08-12"),
                    Title: sdk.String("CEO"),
                },
                shared.EmployeeJobsInput{
                    CompensationRate: sdk.Float64(72000),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    EndDate: types.MustDateFromString("2020-08-12"),
                    HiredAt: types.MustDateFromString("2020-08-12"),
                    IsPrimary: sdk.Bool(true),
                    Location: &shared.Address{
                        City: sdk.String("San Francisco"),
                        ContactName: sdk.String("Elon Musk"),
                        Country: sdk.String("US"),
                        County: sdk.String("Santa Clara"),
                        Email: sdk.String("elon@musk.com"),
                        Fax: sdk.String("122-111-1111"),
                        ID: sdk.String("123"),
                        Latitude: sdk.String("40.759211"),
                        Line1: sdk.String("Main street"),
                        Line2: sdk.String("apt #"),
                        Line3: sdk.String("Suite #"),
                        Line4: sdk.String("delivery instructions"),
                        Longitude: sdk.String("-73.984638"),
                        Name: sdk.String("HQ US"),
                        PhoneNumber: sdk.String("111-111-1111"),
                        PostalCode: sdk.String("94104"),
                        RowVersion: sdk.String("1-12345"),
                        Salutation: sdk.String("Mr"),
                        State: sdk.String("CA"),
                        StreetNumber: sdk.String("25"),
                        String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                        Type: shared.AddressTypeEnumPrimary.ToPointer(),
                        Website: sdk.String("https://elonmusk.com"),
                    },
                    PaymentUnit: shared.PaymentUnitEnumYear.ToPointer(),
                    Role: sdk.String("Sales"),
                    StartDate: types.MustDateFromString("2020-08-12"),
                    Title: sdk.String("CEO"),
                },
            },
            Languages: []string{
                "EN",
                "EN",
            },
            LastName: sdk.String("Musk"),
            LeavingReason: shared.EmployeeLeavingReasonEnumResigned.ToPointer(),
            Manager: &shared.EmployeeManagerInput{
                Email: sdk.String("elon@musk.com"),
                EmploymentStatus: shared.EmploymentStatusEnumActive.ToPointer(),
                FirstName: sdk.String("Elon"),
                LastName: sdk.String("Musk"),
                Name: sdk.String("Elon Musk"),
            },
            MaritalStatus: sdk.String("married"),
            MiddleName: sdk.String("D."),
            Nationalities: []string{
                "US",
                "US",
            },
            Partner: &shared.EmployeePersonInput{
                Birthday: types.MustDateFromString("2000-08-12"),
                DeceasedOn: types.MustDateFromString("2000-08-12"),
                FirstName: sdk.String("Elon"),
                Gender: shared.GenderEnumMale.ToPointer(),
                Initials: sdk.String("EM"),
                LastName: sdk.String("Musk"),
                MiddleName: sdk.String("D."),
            },
            PhoneNumbers: []shared.PhoneNumber{
                shared.PhoneNumber{
                    AreaCode: sdk.String("323"),
                    CountryCode: sdk.String("1"),
                    Extension: sdk.String("105"),
                    ID: sdk.String("12345"),
                    Number: "111-111-1111",
                    Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                },
            },
            PhotoURL: sdk.String("https://unavatar.io/elon-musk"),
            PreferredLanguage: sdk.String("EN"),
            PreferredName: sdk.String("Elon Musk"),
            Pronouns: sdk.String("she,her"),
            RecordURL: sdk.String("https://app.intercom.io/contacts/12345"),
            RowVersion: sdk.String("1-12345"),
            Salutation: sdk.String("Mr"),
            SocialLinks: []shared.EmployeeSocialLinks{
                shared.EmployeeSocialLinks{
                    ID: sdk.String("12345"),
                    Type: sdk.String("twitter"),
                    URL: "https://www.twitter.com/apideck-io",
                },
                shared.EmployeeSocialLinks{
                    ID: sdk.String("12345"),
                    Type: sdk.String("twitter"),
                    URL: "https://www.twitter.com/apideck-io",
                },
                shared.EmployeeSocialLinks{
                    ID: sdk.String("12345"),
                    Type: sdk.String("twitter"),
                    URL: "https://www.twitter.com/apideck-io",
                },
                shared.EmployeeSocialLinks{
                    ID: sdk.String("12345"),
                    Type: sdk.String("twitter"),
                    URL: "https://www.twitter.com/apideck-io",
                },
            },
            SocialSecurityNumber: sdk.String("123456789"),
            Source: sdk.String("lever"),
            SourceID: sdk.String("12345"),
            Tags: []string{
                "nemo",
            },
            TaxCode: sdk.String("1111"),
            TaxID: sdk.String("234-32-0000"),
            Team: &shared.EmployeeTeam{
                ID: sdk.String("1234"),
                Name: sdk.String("Full Stack Engineers"),
            },
            Timezone: sdk.String("Europe/London"),
            Title: sdk.String("CEO"),
            WorksRemote: sdk.Bool(true),
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "quasi",
        XApideckConsumerID: "iure",
        XApideckServiceID: sdk.String("doloribus"),
    }, operations.EmployeesAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEmployeeResponse != nil {
        // handle response
    }
}
```

## EmployeesAll

List Employees

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Employees.EmployeesAll(ctx, operations.EmployeesAllRequest{
        Cursor: sdk.String("debitis"),
        Fields: sdk.String("eius"),
        Filter: &shared.EmployeesFilter{
            CompanyID: sdk.String("1234"),
            DepartmentID: sdk.String("1234"),
            Email: sdk.String("elon@tesla.com"),
            EmployeeNumber: sdk.String("123456-AB"),
            EmploymentStatus: shared.EmployeesFilterEmploymentStatusEnumActive.ToPointer(),
            FirstName: sdk.String("Elon"),
            LastName: sdk.String("Musk"),
            ManagerID: sdk.String("1234"),
            Title: sdk.String("Manager"),
        },
        Limit: sdk.Int64(806194),
        Raw: sdk.Bool(false),
        Sort: &shared.EmployeesSort{
            By: shared.EmployeesSortByEnumCreatedAt.ToPointer(),
            Direction: shared.SortDirectionEnumDesc.ToPointer(),
        },
        XApideckAppID: "facilis",
        XApideckConsumerID: "in",
        XApideckServiceID: sdk.String("architecto"),
    }, operations.EmployeesAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEmployeesResponse != nil {
        // handle response
    }
}
```

## EmployeesDelete

Delete Employee

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Employees.EmployeesDelete(ctx, operations.EmployeesDeleteRequest{
        ID: "1e5b7fd2-ed02-4892-9cdd-c692601fb576",
        Raw: sdk.Bool(false),
        XApideckAppID: "nam",
        XApideckConsumerID: "eaque",
        XApideckServiceID: sdk.String("pariatur"),
    }, operations.EmployeesDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEmployeeResponse != nil {
        // handle response
    }
}
```

## EmployeesOne

Get Employee

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Employees.EmployeesOne(ctx, operations.EmployeesOneRequest{
        Fields: sdk.String("nemo"),
        ID: "f0d30c5f-bb25-4870-9320-2c73d5fe9b90",
        Raw: sdk.Bool(false),
        XApideckAppID: "porro",
        XApideckConsumerID: "consequuntur",
        XApideckServiceID: sdk.String("blanditiis"),
    }, operations.EmployeesOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEmployeeResponse != nil {
        // handle response
    }
}
```

## EmployeesUpdate

Update Employee

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Employees.EmployeesUpdate(ctx, operations.EmployeesUpdateRequest{
        EmployeeInput: shared.EmployeeInput{
            Addresses: []shared.Address{
                shared.Address{
                    City: sdk.String("San Francisco"),
                    ContactName: sdk.String("Elon Musk"),
                    Country: sdk.String("US"),
                    County: sdk.String("Santa Clara"),
                    Email: sdk.String("elon@musk.com"),
                    Fax: sdk.String("122-111-1111"),
                    ID: sdk.String("123"),
                    Latitude: sdk.String("40.759211"),
                    Line1: sdk.String("Main street"),
                    Line2: sdk.String("apt #"),
                    Line3: sdk.String("Suite #"),
                    Line4: sdk.String("delivery instructions"),
                    Longitude: sdk.String("-73.984638"),
                    Name: sdk.String("HQ US"),
                    PhoneNumber: sdk.String("111-111-1111"),
                    PostalCode: sdk.String("94104"),
                    RowVersion: sdk.String("1-12345"),
                    Salutation: sdk.String("Mr"),
                    State: sdk.String("CA"),
                    StreetNumber: sdk.String("25"),
                    String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                    Type: shared.AddressTypeEnumPrimary.ToPointer(),
                    Website: sdk.String("https://elonmusk.com"),
                },
                shared.Address{
                    City: sdk.String("San Francisco"),
                    ContactName: sdk.String("Elon Musk"),
                    Country: sdk.String("US"),
                    County: sdk.String("Santa Clara"),
                    Email: sdk.String("elon@musk.com"),
                    Fax: sdk.String("122-111-1111"),
                    ID: sdk.String("123"),
                    Latitude: sdk.String("40.759211"),
                    Line1: sdk.String("Main street"),
                    Line2: sdk.String("apt #"),
                    Line3: sdk.String("Suite #"),
                    Line4: sdk.String("delivery instructions"),
                    Longitude: sdk.String("-73.984638"),
                    Name: sdk.String("HQ US"),
                    PhoneNumber: sdk.String("111-111-1111"),
                    PostalCode: sdk.String("94104"),
                    RowVersion: sdk.String("1-12345"),
                    Salutation: sdk.String("Mr"),
                    State: sdk.String("CA"),
                    StreetNumber: sdk.String("25"),
                    String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                    Type: shared.AddressTypeEnumPrimary.ToPointer(),
                    Website: sdk.String("https://elonmusk.com"),
                },
                shared.Address{
                    City: sdk.String("San Francisco"),
                    ContactName: sdk.String("Elon Musk"),
                    Country: sdk.String("US"),
                    County: sdk.String("Santa Clara"),
                    Email: sdk.String("elon@musk.com"),
                    Fax: sdk.String("122-111-1111"),
                    ID: sdk.String("123"),
                    Latitude: sdk.String("40.759211"),
                    Line1: sdk.String("Main street"),
                    Line2: sdk.String("apt #"),
                    Line3: sdk.String("Suite #"),
                    Line4: sdk.String("delivery instructions"),
                    Longitude: sdk.String("-73.984638"),
                    Name: sdk.String("HQ US"),
                    PhoneNumber: sdk.String("111-111-1111"),
                    PostalCode: sdk.String("94104"),
                    RowVersion: sdk.String("1-12345"),
                    Salutation: sdk.String("Mr"),
                    State: sdk.String("CA"),
                    StreetNumber: sdk.String("25"),
                    String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                    Type: shared.AddressTypeEnumPrimary.ToPointer(),
                    Website: sdk.String("https://elonmusk.com"),
                },
            },
            Birthday: types.MustDateFromString("2000-08-12"),
            CompanyID: sdk.String("23456"),
            CompanyName: sdk.String("SpaceX"),
            Compensations: []shared.EmployeeCompensationsInput{
                shared.EmployeeCompensationsInput{
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    EffectiveDate: sdk.String("2020-08-12"),
                    FlsaStatus: shared.EmployeeCompensationsFlsaStatusEnumNonexempt.ToPointer(),
                    PaymentUnit: shared.PaymentUnitEnumYear.ToPointer(),
                    Rate: sdk.Float64(72000),
                },
            },
            CountryOfBirth: sdk.String("US"),
            CustomFields: []shared.CustomField{
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: sdk.String("Uses Salesforce and Marketo"),
                },
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: []string{
                        "modi",
                        "iste",
                        "dolorum",
                        "deleniti",
                    },
                },
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: []string{
                        "nobis",
                        "libero",
                        "delectus",
                    },
                },
            },
            DeceasedOn: types.MustDateFromString("2000-08-12"),
            Deleted: sdk.Bool(true),
            Department: sdk.String("R&D"),
            DepartmentID: sdk.String("12345"),
            DepartmentName: sdk.String("12345"),
            Description: sdk.String("A description"),
            DietaryPreference: sdk.String("Veggie"),
            DirectReports: []string{
                "quos",
                "aliquid",
            },
            DisplayName: sdk.String("Technoking"),
            Division: sdk.String("Europe"),
            DivisionID: sdk.String("12345"),
            Emails: []shared.Email{
                shared.Email{
                    Email: "elon@musk.com",
                    ID: sdk.String("123"),
                    Type: shared.EmailTypeEnumPrimary.ToPointer(),
                },
            },
            EmployeeNumber: sdk.String("123456-AB"),
            EmploymentEndDate: sdk.String("2028-10-26"),
            EmploymentRole: &shared.EmployeeEmploymentRole{
                SubType: shared.EmployeeEmploymentRoleEmploymentSubTypeEnumFullTime.ToPointer(),
                Type: shared.EmployeeEmploymentRoleEmploymentTypeEnumEmployee.ToPointer(),
            },
            EmploymentStartDate: sdk.String("2021-10-26"),
            EmploymentStatus: shared.EmploymentStatusEnumActive.ToPointer(),
            FirstName: sdk.String("Elon"),
            FoodAllergies: []string{
                "ipsum",
            },
            Gender: shared.GenderEnumMale.ToPointer(),
            Initials: sdk.String("EM"),
            Jobs: []shared.EmployeeJobsInput{
                shared.EmployeeJobsInput{
                    CompensationRate: sdk.Float64(72000),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    EndDate: types.MustDateFromString("2020-08-12"),
                    HiredAt: types.MustDateFromString("2020-08-12"),
                    IsPrimary: sdk.Bool(true),
                    Location: &shared.Address{
                        City: sdk.String("San Francisco"),
                        ContactName: sdk.String("Elon Musk"),
                        Country: sdk.String("US"),
                        County: sdk.String("Santa Clara"),
                        Email: sdk.String("elon@musk.com"),
                        Fax: sdk.String("122-111-1111"),
                        ID: sdk.String("123"),
                        Latitude: sdk.String("40.759211"),
                        Line1: sdk.String("Main street"),
                        Line2: sdk.String("apt #"),
                        Line3: sdk.String("Suite #"),
                        Line4: sdk.String("delivery instructions"),
                        Longitude: sdk.String("-73.984638"),
                        Name: sdk.String("HQ US"),
                        PhoneNumber: sdk.String("111-111-1111"),
                        PostalCode: sdk.String("94104"),
                        RowVersion: sdk.String("1-12345"),
                        Salutation: sdk.String("Mr"),
                        State: sdk.String("CA"),
                        StreetNumber: sdk.String("25"),
                        String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                        Type: shared.AddressTypeEnumPrimary.ToPointer(),
                        Website: sdk.String("https://elonmusk.com"),
                    },
                    PaymentUnit: shared.PaymentUnitEnumYear.ToPointer(),
                    Role: sdk.String("Sales"),
                    StartDate: types.MustDateFromString("2020-08-12"),
                    Title: sdk.String("CEO"),
                },
                shared.EmployeeJobsInput{
                    CompensationRate: sdk.Float64(72000),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    EndDate: types.MustDateFromString("2020-08-12"),
                    HiredAt: types.MustDateFromString("2020-08-12"),
                    IsPrimary: sdk.Bool(true),
                    Location: &shared.Address{
                        City: sdk.String("San Francisco"),
                        ContactName: sdk.String("Elon Musk"),
                        Country: sdk.String("US"),
                        County: sdk.String("Santa Clara"),
                        Email: sdk.String("elon@musk.com"),
                        Fax: sdk.String("122-111-1111"),
                        ID: sdk.String("123"),
                        Latitude: sdk.String("40.759211"),
                        Line1: sdk.String("Main street"),
                        Line2: sdk.String("apt #"),
                        Line3: sdk.String("Suite #"),
                        Line4: sdk.String("delivery instructions"),
                        Longitude: sdk.String("-73.984638"),
                        Name: sdk.String("HQ US"),
                        PhoneNumber: sdk.String("111-111-1111"),
                        PostalCode: sdk.String("94104"),
                        RowVersion: sdk.String("1-12345"),
                        Salutation: sdk.String("Mr"),
                        State: sdk.String("CA"),
                        StreetNumber: sdk.String("25"),
                        String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                        Type: shared.AddressTypeEnumPrimary.ToPointer(),
                        Website: sdk.String("https://elonmusk.com"),
                    },
                    PaymentUnit: shared.PaymentUnitEnumYear.ToPointer(),
                    Role: sdk.String("Sales"),
                    StartDate: types.MustDateFromString("2020-08-12"),
                    Title: sdk.String("CEO"),
                },
                shared.EmployeeJobsInput{
                    CompensationRate: sdk.Float64(72000),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    EndDate: types.MustDateFromString("2020-08-12"),
                    HiredAt: types.MustDateFromString("2020-08-12"),
                    IsPrimary: sdk.Bool(true),
                    Location: &shared.Address{
                        City: sdk.String("San Francisco"),
                        ContactName: sdk.String("Elon Musk"),
                        Country: sdk.String("US"),
                        County: sdk.String("Santa Clara"),
                        Email: sdk.String("elon@musk.com"),
                        Fax: sdk.String("122-111-1111"),
                        ID: sdk.String("123"),
                        Latitude: sdk.String("40.759211"),
                        Line1: sdk.String("Main street"),
                        Line2: sdk.String("apt #"),
                        Line3: sdk.String("Suite #"),
                        Line4: sdk.String("delivery instructions"),
                        Longitude: sdk.String("-73.984638"),
                        Name: sdk.String("HQ US"),
                        PhoneNumber: sdk.String("111-111-1111"),
                        PostalCode: sdk.String("94104"),
                        RowVersion: sdk.String("1-12345"),
                        Salutation: sdk.String("Mr"),
                        State: sdk.String("CA"),
                        StreetNumber: sdk.String("25"),
                        String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                        Type: shared.AddressTypeEnumPrimary.ToPointer(),
                        Website: sdk.String("https://elonmusk.com"),
                    },
                    PaymentUnit: shared.PaymentUnitEnumYear.ToPointer(),
                    Role: sdk.String("Sales"),
                    StartDate: types.MustDateFromString("2020-08-12"),
                    Title: sdk.String("CEO"),
                },
                shared.EmployeeJobsInput{
                    CompensationRate: sdk.Float64(72000),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    EndDate: types.MustDateFromString("2020-08-12"),
                    HiredAt: types.MustDateFromString("2020-08-12"),
                    IsPrimary: sdk.Bool(true),
                    Location: &shared.Address{
                        City: sdk.String("San Francisco"),
                        ContactName: sdk.String("Elon Musk"),
                        Country: sdk.String("US"),
                        County: sdk.String("Santa Clara"),
                        Email: sdk.String("elon@musk.com"),
                        Fax: sdk.String("122-111-1111"),
                        ID: sdk.String("123"),
                        Latitude: sdk.String("40.759211"),
                        Line1: sdk.String("Main street"),
                        Line2: sdk.String("apt #"),
                        Line3: sdk.String("Suite #"),
                        Line4: sdk.String("delivery instructions"),
                        Longitude: sdk.String("-73.984638"),
                        Name: sdk.String("HQ US"),
                        PhoneNumber: sdk.String("111-111-1111"),
                        PostalCode: sdk.String("94104"),
                        RowVersion: sdk.String("1-12345"),
                        Salutation: sdk.String("Mr"),
                        State: sdk.String("CA"),
                        StreetNumber: sdk.String("25"),
                        String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                        Type: shared.AddressTypeEnumPrimary.ToPointer(),
                        Website: sdk.String("https://elonmusk.com"),
                    },
                    PaymentUnit: shared.PaymentUnitEnumYear.ToPointer(),
                    Role: sdk.String("Sales"),
                    StartDate: types.MustDateFromString("2020-08-12"),
                    Title: sdk.String("CEO"),
                },
            },
            Languages: []string{
                "EN",
                "EN",
                "EN",
            },
            LastName: sdk.String("Musk"),
            LeavingReason: shared.EmployeeLeavingReasonEnumResigned.ToPointer(),
            Manager: &shared.EmployeeManagerInput{
                Email: sdk.String("elon@musk.com"),
                EmploymentStatus: shared.EmploymentStatusEnumActive.ToPointer(),
                FirstName: sdk.String("Elon"),
                LastName: sdk.String("Musk"),
                Name: sdk.String("Elon Musk"),
            },
            MaritalStatus: sdk.String("married"),
            MiddleName: sdk.String("D."),
            Nationalities: []string{
                "US",
                "US",
                "US",
            },
            Partner: &shared.EmployeePersonInput{
                Birthday: types.MustDateFromString("2000-08-12"),
                DeceasedOn: types.MustDateFromString("2000-08-12"),
                FirstName: sdk.String("Elon"),
                Gender: shared.GenderEnumMale.ToPointer(),
                Initials: sdk.String("EM"),
                LastName: sdk.String("Musk"),
                MiddleName: sdk.String("D."),
            },
            PhoneNumbers: []shared.PhoneNumber{
                shared.PhoneNumber{
                    AreaCode: sdk.String("323"),
                    CountryCode: sdk.String("1"),
                    Extension: sdk.String("105"),
                    ID: sdk.String("12345"),
                    Number: "111-111-1111",
                    Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                },
                shared.PhoneNumber{
                    AreaCode: sdk.String("323"),
                    CountryCode: sdk.String("1"),
                    Extension: sdk.String("105"),
                    ID: sdk.String("12345"),
                    Number: "111-111-1111",
                    Type: shared.PhoneNumberTypeEnumPrimary.ToPointer(),
                },
            },
            PhotoURL: sdk.String("https://unavatar.io/elon-musk"),
            PreferredLanguage: sdk.String("EN"),
            PreferredName: sdk.String("Elon Musk"),
            Pronouns: sdk.String("she,her"),
            RecordURL: sdk.String("https://app.intercom.io/contacts/12345"),
            RowVersion: sdk.String("1-12345"),
            Salutation: sdk.String("Mr"),
            SocialLinks: []shared.EmployeeSocialLinks{
                shared.EmployeeSocialLinks{
                    ID: sdk.String("12345"),
                    Type: sdk.String("twitter"),
                    URL: "https://www.twitter.com/apideck-io",
                },
                shared.EmployeeSocialLinks{
                    ID: sdk.String("12345"),
                    Type: sdk.String("twitter"),
                    URL: "https://www.twitter.com/apideck-io",
                },
            },
            SocialSecurityNumber: sdk.String("123456789"),
            Source: sdk.String("lever"),
            SourceID: sdk.String("12345"),
            Tags: []string{
                "amet",
                "dolorum",
                "numquam",
                "veritatis",
            },
            TaxCode: sdk.String("1111"),
            TaxID: sdk.String("234-32-0000"),
            Team: &shared.EmployeeTeam{
                ID: sdk.String("1234"),
                Name: sdk.String("Full Stack Engineers"),
            },
            Timezone: sdk.String("Europe/London"),
            Title: sdk.String("CEO"),
            WorksRemote: sdk.Bool(true),
        },
        ID: "00674ebf-6928-40d1-ba77-a89ebf737ae4",
        Raw: sdk.Bool(false),
        XApideckAppID: "aspernatur",
        XApideckConsumerID: "perferendis",
        XApideckServiceID: sdk.String("amet"),
    }, operations.EmployeesUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEmployeeResponse != nil {
        // handle response
    }
}
```
