# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompaniesAddRequest;
import org.openapis.openapi.models.operations.CompaniesAddResponse;
import org.openapis.openapi.models.operations.CompaniesAddSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.Email;
import org.openapis.openapi.models.shared.EmailTypeEnum;
import org.openapis.openapi.models.shared.HrisCompanyInput;
import org.openapis.openapi.models.shared.HrisCompanyStatusEnum;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.PhoneNumberTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Website;
import org.openapis.openapi.models.shared.WebsiteTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompaniesAddRequest req = new CompaniesAddRequest(                new HrisCompanyInput("SpaceX") {{
                                addresses = new org.openapis.openapi.models.shared.Address[]{{
                                    add(new Address() {{
                                        city = "San Francisco";
                                        contactName = "Elon Musk";
                                        country = "US";
                                        county = "Santa Clara";
                                        email = "elon@musk.com";
                                        fax = "122-111-1111";
                                        id = "123";
                                        latitude = "40.759211";
                                        line1 = "Main street";
                                        line2 = "apt #";
                                        line3 = "Suite #";
                                        line4 = "delivery instructions";
                                        longitude = "-73.984638";
                                        name = "HQ US";
                                        phoneNumber = "111-111-1111";
                                        postalCode = "94104";
                                        rowVersion = "1-12345";
                                        salutation = "Mr";
                                        state = "CA";
                                        streetNumber = "25";
                                        string = "25 Spring Street, Blackburn, VIC 3130";
                                        type = AddressTypeEnum.PRIMARY;
                                        website = "https://elonmusk.com";
                                    }}),
                                    add(new Address() {{
                                        city = "San Francisco";
                                        contactName = "Elon Musk";
                                        country = "US";
                                        county = "Santa Clara";
                                        email = "elon@musk.com";
                                        fax = "122-111-1111";
                                        id = "123";
                                        latitude = "40.759211";
                                        line1 = "Main street";
                                        line2 = "apt #";
                                        line3 = "Suite #";
                                        line4 = "delivery instructions";
                                        longitude = "-73.984638";
                                        name = "HQ US";
                                        phoneNumber = "111-111-1111";
                                        postalCode = "94104";
                                        rowVersion = "1-12345";
                                        salutation = "Mr";
                                        state = "CA";
                                        streetNumber = "25";
                                        string = "25 Spring Street, Blackburn, VIC 3130";
                                        type = AddressTypeEnum.PRIMARY;
                                        website = "https://elonmusk.com";
                                    }}),
                                    add(new Address() {{
                                        city = "San Francisco";
                                        contactName = "Elon Musk";
                                        country = "US";
                                        county = "Santa Clara";
                                        email = "elon@musk.com";
                                        fax = "122-111-1111";
                                        id = "123";
                                        latitude = "40.759211";
                                        line1 = "Main street";
                                        line2 = "apt #";
                                        line3 = "Suite #";
                                        line4 = "delivery instructions";
                                        longitude = "-73.984638";
                                        name = "HQ US";
                                        phoneNumber = "111-111-1111";
                                        postalCode = "94104";
                                        rowVersion = "1-12345";
                                        salutation = "Mr";
                                        state = "CA";
                                        streetNumber = "25";
                                        string = "25 Spring Street, Blackburn, VIC 3130";
                                        type = AddressTypeEnum.PRIMARY;
                                        website = "https://elonmusk.com";
                                    }}),
                                }};
                                companyNumber = "123456-AB";
                                debtorId = "12345";
                                displayName = "SpaceX";
                                emails = new org.openapis.openapi.models.shared.Email[]{{
                                    add(new Email("elon@musk.com") {{
                                        email = "elon@musk.com";
                                        id = "123";
                                        type = EmailTypeEnum.PRIMARY;
                                    }}),
                                    add(new Email("elon@musk.com") {{
                                        email = "elon@musk.com";
                                        id = "123";
                                        type = EmailTypeEnum.PRIMARY;
                                    }}),
                                    add(new Email("elon@musk.com") {{
                                        email = "elon@musk.com";
                                        id = "123";
                                        type = EmailTypeEnum.PRIMARY;
                                    }}),
                                }};
                                phoneNumbers = new org.openapis.openapi.models.shared.PhoneNumber[]{{
                                    add(new PhoneNumber("111-111-1111") {{
                                        areaCode = "323";
                                        countryCode = "1";
                                        extension = "105";
                                        id = "12345";
                                        number = "111-111-1111";
                                        type = PhoneNumberTypeEnum.PRIMARY;
                                    }}),
                                    add(new PhoneNumber("111-111-1111") {{
                                        areaCode = "323";
                                        countryCode = "1";
                                        extension = "105";
                                        id = "12345";
                                        number = "111-111-1111";
                                        type = PhoneNumberTypeEnum.PRIMARY;
                                    }}),
                                    add(new PhoneNumber("111-111-1111") {{
                                        areaCode = "323";
                                        countryCode = "1";
                                        extension = "105";
                                        id = "12345";
                                        number = "111-111-1111";
                                        type = PhoneNumberTypeEnum.PRIMARY;
                                    }}),
                                }};
                                status = HrisCompanyStatusEnum.ACTIVE;
                                subdomain = "company";
                                websites = new org.openapis.openapi.models.shared.Website[]{{
                                    add(new Website("http://example.com") {{
                                        id = "12345";
                                        type = WebsiteTypeEnum.PRIMARY;
                                        url = "http://example.com";
                                    }}),
                                    add(new Website("http://example.com") {{
                                        id = "12345";
                                        type = WebsiteTypeEnum.PRIMARY;
                                        url = "http://example.com";
                                    }}),
                                    add(new Website("http://example.com") {{
                                        id = "12345";
                                        type = WebsiteTypeEnum.PRIMARY;
                                        url = "http://example.com";
                                    }}),
                                    add(new Website("http://example.com") {{
                                        id = "12345";
                                        type = WebsiteTypeEnum.PRIMARY;
                                        url = "http://example.com";
                                    }}),
                                }};
                            }};, "unde", "nulla") {{
                raw = false;
                xApideckServiceId = "corrupti";
            }};            

            CompaniesAddResponse res = sdk.companies.companiesAdd(req, new CompaniesAddSecurity("illum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createHrisCompanyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [companies](docs/companies/README.md)

* [companiesAdd](docs/companies/README.md#companiesadd) - Create Company
* [companiesAll](docs/companies/README.md#companiesall) - List Companies
* [companiesDelete](docs/companies/README.md#companiesdelete) - Delete Company
* [companiesOne](docs/companies/README.md#companiesone) - Get Company
* [companiesUpdate](docs/companies/README.md#companiesupdate) - Update Company

### [departments](docs/departments/README.md)

* [departmentsAdd](docs/departments/README.md#departmentsadd) - Create Department
* [departmentsAll](docs/departments/README.md#departmentsall) - List Departments
* [departmentsDelete](docs/departments/README.md#departmentsdelete) - Delete Department
* [departmentsOne](docs/departments/README.md#departmentsone) - Get Department
* [departmentsUpdate](docs/departments/README.md#departmentsupdate) - Update Department

### [employeePayrolls](docs/employeepayrolls/README.md)

* [employeePayrollsAll](docs/employeepayrolls/README.md#employeepayrollsall) - List Employee Payrolls
* [employeePayrollsOne](docs/employeepayrolls/README.md#employeepayrollsone) - Get Employee Payroll

### [employeeSchedules](docs/employeeschedules/README.md)

* [employeeSchedulesAll](docs/employeeschedules/README.md#employeeschedulesall) - List Employee Schedules

### [employees](docs/employees/README.md)

* [employeesAdd](docs/employees/README.md#employeesadd) - Create Employee
* [employeesAll](docs/employees/README.md#employeesall) - List Employees
* [employeesDelete](docs/employees/README.md#employeesdelete) - Delete Employee
* [employeesOne](docs/employees/README.md#employeesone) - Get Employee
* [employeesUpdate](docs/employees/README.md#employeesupdate) - Update Employee

### [jobs](docs/jobs/README.md)

* [jobsAll](docs/jobs/README.md#jobsall) - List Jobs
* [jobsOne](docs/jobs/README.md#jobsone) - One Job

### [payrolls](docs/payrolls/README.md)

* [payrollsAll](docs/payrolls/README.md#payrollsall) - List Payroll
* [payrollsOne](docs/payrolls/README.md#payrollsone) - Get Payroll

### [timeOffRequests](docs/timeoffrequests/README.md)

* [timeOffRequestsAdd](docs/timeoffrequests/README.md#timeoffrequestsadd) - Create Time Off Request
* [timeOffRequestsAll](docs/timeoffrequests/README.md#timeoffrequestsall) - List Time Off Requests
* [timeOffRequestsDelete](docs/timeoffrequests/README.md#timeoffrequestsdelete) - Delete Time Off Request
* [timeOffRequestsOne](docs/timeoffrequests/README.md#timeoffrequestsone) - Get Time Off Request
* [timeOffRequestsUpdate](docs/timeoffrequests/README.md#timeoffrequestsupdate) - Update Time Off Request
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
