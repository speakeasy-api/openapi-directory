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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CompaniesAddSecurity;
import org.openapis.openapi.models.operations.CompaniesAddQueryParams;
import org.openapis.openapi.models.operations.CompaniesAddHeaders;
import org.openapis.openapi.models.operations.CompaniesAddRequest;
import org.openapis.openapi.models.operations.CompaniesAddResponse;
import org.openapis.openapi.models.shared.HrisCompanyStatusEnum;
import org.openapis.openapi.models.shared.HrisCompanyInput;
import org.openapis.openapi.models.shared.WebsiteTypeEnum;
import org.openapis.openapi.models.shared.Website;
import org.openapis.openapi.models.shared.PhoneNumberTypeEnum;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.EmailTypeEnum;
import org.openapis.openapi.models.shared.Email;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompaniesAddRequest req = new CompaniesAddRequest() {{
                security = new CompaniesAddSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new CompaniesAddQueryParams() {{
                    raw = false;
                }};
                headers = new CompaniesAddHeaders() {{
                    xApideckAppId = "corrupti";
                    xApideckConsumerId = "provident";
                    xApideckServiceId = "distinctio";
                }};
                request = new HrisCompanyInput() {{
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
                            type = "primary";
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
                            type = "primary";
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
                            type = "primary";
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
                            type = "primary";
                            website = "https://elonmusk.com";
                        }}),
                    }};
                    companyNumber = "123456-AB";
                    debtorId = "12345";
                    displayName = "SpaceX";
                    emails = new org.openapis.openapi.models.shared.Email[]{{
                        add(new Email() {{
                            email = "elon@musk.com";
                            id = "123";
                            type = "primary";
                        }}),
                        add(new Email() {{
                            email = "elon@musk.com";
                            id = "123";
                            type = "primary";
                        }}),
                        add(new Email() {{
                            email = "elon@musk.com";
                            id = "123";
                            type = "primary";
                        }}),
                    }};
                    legalName = "SpaceX";
                    phoneNumbers = new org.openapis.openapi.models.shared.PhoneNumber[]{{
                        add(new PhoneNumber() {{
                            areaCode = "323";
                            countryCode = "1";
                            extension = "105";
                            id = "12345";
                            number = "111-111-1111";
                            type = "primary";
                        }}),
                        add(new PhoneNumber() {{
                            areaCode = "323";
                            countryCode = "1";
                            extension = "105";
                            id = "12345";
                            number = "111-111-1111";
                            type = "primary";
                        }}),
                        add(new PhoneNumber() {{
                            areaCode = "323";
                            countryCode = "1";
                            extension = "105";
                            id = "12345";
                            number = "111-111-1111";
                            type = "primary";
                        }}),
                        add(new PhoneNumber() {{
                            areaCode = "323";
                            countryCode = "1";
                            extension = "105";
                            id = "12345";
                            number = "111-111-1111";
                            type = "primary";
                        }}),
                    }};
                    status = "active";
                    subdomain = "company";
                    websites = new org.openapis.openapi.models.shared.Website[]{{
                        add(new Website() {{
                            id = "12345";
                            type = "primary";
                            url = "http://example.com";
                        }}),
                        add(new Website() {{
                            id = "12345";
                            type = "primary";
                            url = "http://example.com";
                        }}),
                        add(new Website() {{
                            id = "12345";
                            type = "primary";
                            url = "http://example.com";
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
