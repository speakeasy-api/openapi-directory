# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### companies

* `companiesAdd` - Create Company
* `companiesAll` - List Companies
* `companiesDelete` - Delete Company
* `companiesOne` - Get Company
* `companiesUpdate` - Update Company

### departments

* `departmentsAdd` - Create Department
* `departmentsAll` - List Departments
* `departmentsDelete` - Delete Department
* `departmentsOne` - Get Department
* `departmentsUpdate` - Update Department

### employeePayrolls

* `employeePayrollsAll` - List Employee Payrolls
* `employeePayrollsOne` - Get Employee Payroll

### employeeSchedules

* `employeeSchedulesAll` - List Employee Schedules

### employees

* `employeesAdd` - Create Employee
* `employeesAll` - List Employees
* `employeesDelete` - Delete Employee
* `employeesOne` - Get Employee
* `employeesUpdate` - Update Employee

### jobs

* `jobsAll` - List Jobs
* `jobsOne` - One Job

### payrolls

* `payrollsAll` - List Payroll
* `payrollsOne` - Get Payroll

### timeOffRequests

* `timeOffRequestsAdd` - Create Time Off Request
* `timeOffRequestsAll` - List Time Off Requests
* `timeOffRequestsDelete` - Delete Time Off Request
* `timeOffRequestsOne` - Get Time Off Request
* `timeOffRequestsUpdate` - Update Time Off Request
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
