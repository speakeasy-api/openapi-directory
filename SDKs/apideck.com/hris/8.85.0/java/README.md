# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CompaniesAddRequest req = new CompaniesAddRequest() {{
                security = new CompaniesAddSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new CompaniesAddQueryParams() {{
                    raw = false;
                }};
                headers = new CompaniesAddHeaders() {{
                    xApideckAppId = "voluptas";
                    xApideckConsumerId = "culpa";
                    xApideckServiceId = "expedita";
                }};
                request = new HrisCompanyInput() {{
                    addresses = new openapisdk.models.shared.Address[]() {{
                        add(new Address() {{
                            city = "dolor";
                            contactName = "expedita";
                            country = "voluptas";
                            county = "fugit";
                            email = "et";
                            fax = "nihil";
                            id = "rerum";
                            latitude = "dicta";
                            line1 = "debitis";
                            line2 = "voluptatum";
                            line3 = "et";
                            line4 = "ut";
                            longitude = "dolorem";
                            name = "et";
                            phoneNumber = "voluptate";
                            postalCode = "iste";
                            rowVersion = "vitae";
                            salutation = "totam";
                            state = "dolores";
                            streetNumber = "illum";
                            string = "debitis";
                            type = "secondary";
                            website = "odio";
                        }}),
                        add(new Address() {{
                            city = "dolore";
                            contactName = "id";
                            country = "aspernatur";
                            county = "accusantium";
                            email = "totam";
                            fax = "commodi";
                            id = "quis";
                            latitude = "est";
                            line1 = "aut";
                            line2 = "odit";
                            line3 = "non";
                            line4 = "voluptas";
                            longitude = "omnis";
                            name = "aut";
                            phoneNumber = "illo";
                            postalCode = "sed";
                            rowVersion = "officiis";
                            salutation = "autem";
                            state = "consectetur";
                            streetNumber = "nobis";
                            string = "odio";
                            type = "office";
                            website = "recusandae";
                        }}),
                        add(new Address() {{
                            city = "at";
                            contactName = "ipsum";
                            country = "eveniet";
                            county = "modi";
                            email = "sint";
                            fax = "inventore";
                            id = "ut";
                            latitude = "exercitationem";
                            line1 = "aut";
                            line2 = "reprehenderit";
                            line3 = "tempore";
                            line4 = "maiores";
                            longitude = "incidunt";
                            name = "dolor";
                            phoneNumber = "beatae";
                            postalCode = "veritatis";
                            rowVersion = "in";
                            salutation = "et";
                            state = "omnis";
                            streetNumber = "ipsum";
                            string = "ex";
                            type = "shipping";
                            website = "placeat";
                        }}),
                    }};
                    companyNumber = "vel";
                    debtorId = "rerum";
                    displayName = "mollitia";
                    emails = new openapisdk.models.shared.Email[]() {{
                        add(new Email() {{
                            email = "quam";
                            id = "reprehenderit";
                            type = "primary";
                        }}),
                        add(new Email() {{
                            email = "qui";
                            id = "unde";
                            type = "secondary";
                        }}),
                    }};
                    legalName = "autem";
                    phoneNumbers = new openapisdk.models.shared.PhoneNumber[]() {{
                        add(new PhoneNumber() {{
                            areaCode = "ut";
                            countryCode = "itaque";
                            extension = "ab";
                            id = "neque";
                            number = "ullam";
                            type = "mobile";
                        }}),
                    }};
                    status = "active";
                    subdomain = "esse";
                    websites = new openapisdk.models.shared.Website[]() {{
                        add(new Website() {{
                            id = "quam";
                            type = "other";
                            url = "cumque";
                        }}),
                        add(new Website() {{
                            id = "soluta";
                            type = "secondary";
                            url = "voluptates";
                        }}),
                    }};
                }};
            }};

            CompaniesAddResponse res = sdk.companies.companiesAdd(req);

            if (res.createHrisCompanyResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Companies

* `companiesAdd` - Create Company
* `companiesAll` - List Companies
* `companiesDelete` - Delete Company
* `companiesOne` - Get Company
* `companiesUpdate` - Update Company

### Departments

* `departmentsAdd` - Create Department
* `departmentsAll` - List Departments
* `departmentsDelete` - Delete Department
* `departmentsOne` - Get Department
* `departmentsUpdate` - Update Department

### Employee Payrolls

* `employeePayrollsAll` - List Employee Payrolls
* `employeePayrollsOne` - Get Employee Payroll

### Employee Schedules

* `employeeSchedulesAll` - List Employee Schedules

### Employees

* `employeesAdd` - Create Employee
* `employeesAll` - List Employees
* `employeesDelete` - Delete Employee
* `employeesOne` - Get Employee
* `employeesUpdate` - Update Employee

### Jobs

* `jobsAll` - List Jobs
* `jobsOne` - One Job

### Payrolls

* `payrollsAll` - List Payroll
* `payrollsOne` - Get Payroll

### Time Off Requests

* `timeOffRequestsAdd` - Create Time Off Request
* `timeOffRequestsAll` - List Time Off Requests
* `timeOffRequestsDelete` - Delete Time Off Request
* `timeOffRequestsOne` - Get Time Off Request
* `timeOffRequestsUpdate` - Update Time Off Request

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
