# employees

### Available Operations

* [employeesAdd](#employeesadd) - Create Employee
* [employeesAll](#employeesall) - List Employees
* [employeesDelete](#employeesdelete) - Delete Employee
* [employeesOne](#employeesone) - Get Employee
* [employeesUpdate](#employeesupdate) - Update Employee

## employeesAdd

Create Employee

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EmployeesAddRequest;
import org.openapis.openapi.models.operations.EmployeesAddResponse;
import org.openapis.openapi.models.operations.EmployeesAddSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.CustomField;
import org.openapis.openapi.models.shared.Email;
import org.openapis.openapi.models.shared.EmailTypeEnum;
import org.openapis.openapi.models.shared.EmployeeCompensationsFlsaStatusEnum;
import org.openapis.openapi.models.shared.EmployeeCompensationsInput;
import org.openapis.openapi.models.shared.EmployeeEmploymentRole;
import org.openapis.openapi.models.shared.EmployeeEmploymentRoleEmploymentSubTypeEnum;
import org.openapis.openapi.models.shared.EmployeeEmploymentRoleEmploymentTypeEnum;
import org.openapis.openapi.models.shared.EmployeeInput;
import org.openapis.openapi.models.shared.EmployeeJobsInput;
import org.openapis.openapi.models.shared.EmployeeLeavingReasonEnum;
import org.openapis.openapi.models.shared.EmployeeManagerInput;
import org.openapis.openapi.models.shared.EmployeePersonInput;
import org.openapis.openapi.models.shared.EmployeeSocialLinks;
import org.openapis.openapi.models.shared.EmployeeTeam;
import org.openapis.openapi.models.shared.EmploymentStatusEnum;
import org.openapis.openapi.models.shared.GenderEnum;
import org.openapis.openapi.models.shared.PaymentUnitEnum;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.PhoneNumberTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EmployeesAddRequest req = new EmployeesAddRequest(                new EmployeeInput() {{
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
                                birthday = LocalDate.parse("2000-08-12");
                                companyId = "23456";
                                companyName = "SpaceX";
                                compensations = new org.openapis.openapi.models.shared.EmployeeCompensationsInput[]{{
                                    add(new EmployeeCompensationsInput() {{
                                        currency = CurrencyEnum.USD;
                                        effectiveDate = "2020-08-12";
                                        flsaStatus = EmployeeCompensationsFlsaStatusEnum.EXEMPT;
                                        paymentUnit = PaymentUnitEnum.YEAR;
                                        rate = 72000;
                                    }}),
                                    add(new EmployeeCompensationsInput() {{
                                        currency = CurrencyEnum.USD;
                                        effectiveDate = "2020-08-12";
                                        flsaStatus = EmployeeCompensationsFlsaStatusEnum.EXEMPT;
                                        paymentUnit = PaymentUnitEnum.YEAR;
                                        rate = 72000;
                                    }}),
                                    add(new EmployeeCompensationsInput() {{
                                        currency = CurrencyEnum.USD;
                                        effectiveDate = "2020-08-12";
                                        flsaStatus = EmployeeCompensationsFlsaStatusEnum.SALARIED_NONEXEMPT;
                                        paymentUnit = PaymentUnitEnum.YEAR;
                                        rate = 72000;
                                    }}),
                                }};
                                countryOfBirth = "US";
                                customFields = new org.openapis.openapi.models.shared.CustomField[]{{
                                    add(new CustomField("2389328923893298") {{
                                        description = "Employee Level";
                                        id = "2389328923893298";
                                        name = "employee_level";
                                        value = new String[]{{
                                            add("omnis"),
                                            add("nemo"),
                                        }};
                                    }}),
                                }};
                                deceasedOn = LocalDate.parse("2000-08-12");
                                deleted = true;
                                department = "R&D";
                                departmentId = "12345";
                                departmentName = "12345";
                                description = "A description";
                                dietaryPreference = "Veggie";
                                directReports = new String[]{{
                                    add("excepturi"),
                                    add("accusantium"),
                                }};
                                displayName = "Technoking";
                                division = "Europe";
                                divisionId = "12345";
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
                                }};
                                employeeNumber = "123456-AB";
                                employmentEndDate = "2028-10-26";
                                employmentRole = new EmployeeEmploymentRole() {{
                                    subType = EmployeeEmploymentRoleEmploymentSubTypeEnum.PART_TIME;
                                    type = EmployeeEmploymentRoleEmploymentTypeEnum.OTHER;
                                }};;
                                employmentStartDate = "2021-10-26";
                                employmentStatus = EmploymentStatusEnum.ACTIVE;
                                firstName = "Elon";
                                foodAllergies = new String[]{{
                                    add("architecto"),
                                    add("mollitia"),
                                    add("dolorem"),
                                    add("culpa"),
                                }};
                                gender = GenderEnum.MALE;
                                initials = "EM";
                                jobs = new org.openapis.openapi.models.shared.EmployeeJobsInput[]{{
                                    add(new EmployeeJobsInput() {{
                                        compensationRate = 72000;
                                        currency = CurrencyEnum.USD;
                                        endDate = LocalDate.parse("2020-08-12");
                                        hiredAt = LocalDate.parse("2020-08-12");
                                        isPrimary = true;
                                        location = new Address() {{
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
                                        }};
                                        paymentUnit = PaymentUnitEnum.YEAR;
                                        role = "Sales";
                                        startDate = LocalDate.parse("2020-08-12");
                                        title = "CEO";
                                    }}),
                                }};
                                languages = new String[]{{
                                    add("EN"),
                                    add("EN"),
                                    add("EN"),
                                    add("EN"),
                                }};
                                lastName = "Musk";
                                leavingReason = EmployeeLeavingReasonEnum.RESIGNED;
                                manager = new EmployeeManagerInput() {{
                                    email = "elon@musk.com";
                                    employmentStatus = EmploymentStatusEnum.ACTIVE;
                                    firstName = "Elon";
                                    lastName = "Musk";
                                    name = "Elon Musk";
                                }};;
                                maritalStatus = "married";
                                middleName = "D.";
                                nationalities = new String[]{{
                                    add("US"),
                                    add("US"),
                                    add("US"),
                                }};
                                partner = new EmployeePersonInput() {{
                                    birthday = LocalDate.parse("2000-08-12");
                                    deceasedOn = LocalDate.parse("2000-08-12");
                                    firstName = "Elon";
                                    gender = GenderEnum.MALE;
                                    initials = "EM";
                                    lastName = "Musk";
                                    middleName = "D.";
                                }};;
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
                                photoUrl = "https://unavatar.io/elon-musk";
                                preferredLanguage = "EN";
                                preferredName = "Elon Musk";
                                pronouns = "she,her";
                                recordUrl = "https://app.intercom.io/contacts/12345";
                                rowVersion = "1-12345";
                                salutation = "Mr";
                                socialLinks = new org.openapis.openapi.models.shared.EmployeeSocialLinks[]{{
                                    add(new EmployeeSocialLinks("https://www.twitter.com/apideck-io") {{
                                        id = "12345";
                                        type = "twitter";
                                        url = "https://www.twitter.com/apideck-io";
                                    }}),
                                    add(new EmployeeSocialLinks("https://www.twitter.com/apideck-io") {{
                                        id = "12345";
                                        type = "twitter";
                                        url = "https://www.twitter.com/apideck-io";
                                    }}),
                                }};
                                socialSecurityNumber = "123456789";
                                source = "lever";
                                sourceId = "12345";
                                tags = new String[]{{
                                    add("quam"),
                                    add("molestiae"),
                                }};
                                taxCode = "1111";
                                taxId = "234-32-0000";
                                team = new EmployeeTeam() {{
                                    id = "1234";
                                    name = "Full Stack Engineers";
                                }};;
                                timezone = "Europe/London";
                                title = "CEO";
                                worksRemote = true;
                            }};, "velit", "error") {{
                raw = false;
                xApideckServiceId = "quia";
            }};            

            EmployeesAddResponse res = sdk.employees.employeesAdd(req, new EmployeesAddSecurity("quis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createEmployeeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## employeesAll

List Employees

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EmployeesAllRequest;
import org.openapis.openapi.models.operations.EmployeesAllResponse;
import org.openapis.openapi.models.operations.EmployeesAllSecurity;
import org.openapis.openapi.models.shared.EmployeesFilter;
import org.openapis.openapi.models.shared.EmployeesFilterEmploymentStatusEnum;
import org.openapis.openapi.models.shared.EmployeesSort;
import org.openapis.openapi.models.shared.EmployeesSortByEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortDirectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EmployeesAllRequest req = new EmployeesAllRequest("vitae", "laborum") {{
                cursor = "animi";
                fields = "enim";
                filter = new EmployeesFilter() {{
                    companyId = "1234";
                    departmentId = "1234";
                    email = "elon@tesla.com";
                    employeeNumber = "123456-AB";
                    employmentStatus = EmployeesFilterEmploymentStatusEnum.ACTIVE;
                    firstName = "Elon";
                    lastName = "Musk";
                    managerId = "1234";
                    title = "Manager";
                }};;
                limit = 138183L;
                raw = false;
                sort = new EmployeesSort() {{
                    by = EmployeesSortByEnum.CREATED_AT;
                    direction = SortDirectionEnum.DESC;
                }};;
                xApideckServiceId = "sequi";
            }};            

            EmployeesAllResponse res = sdk.employees.employeesAll(req, new EmployeesAllSecurity("tenetur") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getEmployeesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## employeesDelete

Delete Employee

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EmployeesDeleteRequest;
import org.openapis.openapi.models.operations.EmployeesDeleteResponse;
import org.openapis.openapi.models.operations.EmployeesDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EmployeesDeleteRequest req = new EmployeesDeleteRequest("ipsam", "id", "possimus") {{
                raw = false;
                xApideckServiceId = "aut";
            }};            

            EmployeesDeleteResponse res = sdk.employees.employeesDelete(req, new EmployeesDeleteSecurity("quasi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteEmployeeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## employeesOne

Get Employee

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EmployeesOneRequest;
import org.openapis.openapi.models.operations.EmployeesOneResponse;
import org.openapis.openapi.models.operations.EmployeesOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EmployeesOneRequest req = new EmployeesOneRequest("error", "temporibus", "laborum") {{
                fields = "quasi";
                raw = false;
                xApideckServiceId = "reiciendis";
            }};            

            EmployeesOneResponse res = sdk.employees.employeesOne(req, new EmployeesOneSecurity("voluptatibus") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getEmployeeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## employeesUpdate

Update Employee

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EmployeesUpdateRequest;
import org.openapis.openapi.models.operations.EmployeesUpdateResponse;
import org.openapis.openapi.models.operations.EmployeesUpdateSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.CustomField;
import org.openapis.openapi.models.shared.Email;
import org.openapis.openapi.models.shared.EmailTypeEnum;
import org.openapis.openapi.models.shared.EmployeeCompensationsFlsaStatusEnum;
import org.openapis.openapi.models.shared.EmployeeCompensationsInput;
import org.openapis.openapi.models.shared.EmployeeEmploymentRole;
import org.openapis.openapi.models.shared.EmployeeEmploymentRoleEmploymentSubTypeEnum;
import org.openapis.openapi.models.shared.EmployeeEmploymentRoleEmploymentTypeEnum;
import org.openapis.openapi.models.shared.EmployeeInput;
import org.openapis.openapi.models.shared.EmployeeJobsInput;
import org.openapis.openapi.models.shared.EmployeeLeavingReasonEnum;
import org.openapis.openapi.models.shared.EmployeeManagerInput;
import org.openapis.openapi.models.shared.EmployeePersonInput;
import org.openapis.openapi.models.shared.EmployeeSocialLinks;
import org.openapis.openapi.models.shared.EmployeeTeam;
import org.openapis.openapi.models.shared.EmploymentStatusEnum;
import org.openapis.openapi.models.shared.GenderEnum;
import org.openapis.openapi.models.shared.PaymentUnitEnum;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.PhoneNumberTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EmployeesUpdateRequest req = new EmployeesUpdateRequest(                new EmployeeInput() {{
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
                                birthday = LocalDate.parse("2000-08-12");
                                companyId = "23456";
                                companyName = "SpaceX";
                                compensations = new org.openapis.openapi.models.shared.EmployeeCompensationsInput[]{{
                                    add(new EmployeeCompensationsInput() {{
                                        currency = CurrencyEnum.USD;
                                        effectiveDate = "2020-08-12";
                                        flsaStatus = EmployeeCompensationsFlsaStatusEnum.NONEXEMPT;
                                        paymentUnit = PaymentUnitEnum.YEAR;
                                        rate = 72000;
                                    }}),
                                    add(new EmployeeCompensationsInput() {{
                                        currency = CurrencyEnum.USD;
                                        effectiveDate = "2020-08-12";
                                        flsaStatus = EmployeeCompensationsFlsaStatusEnum.OWNER;
                                        paymentUnit = PaymentUnitEnum.YEAR;
                                        rate = 72000;
                                    }}),
                                }};
                                countryOfBirth = "US";
                                customFields = new org.openapis.openapi.models.shared.CustomField[]{{
                                    add(new CustomField("2389328923893298") {{
                                        description = "Employee Level";
                                        id = "2389328923893298";
                                        name = "employee_level";
                                        value = true;
                                    }}),
                                }};
                                deceasedOn = LocalDate.parse("2000-08-12");
                                deleted = true;
                                department = "R&D";
                                departmentId = "12345";
                                departmentName = "12345";
                                description = "A description";
                                dietaryPreference = "Veggie";
                                directReports = new String[]{{
                                    add("cum"),
                                    add("perferendis"),
                                }};
                                displayName = "Technoking";
                                division = "Europe";
                                divisionId = "12345";
                                emails = new org.openapis.openapi.models.shared.Email[]{{
                                    add(new Email("elon@musk.com") {{
                                        email = "elon@musk.com";
                                        id = "123";
                                        type = EmailTypeEnum.PRIMARY;
                                    }}),
                                }};
                                employeeNumber = "123456-AB";
                                employmentEndDate = "2028-10-26";
                                employmentRole = new EmployeeEmploymentRole() {{
                                    subType = EmployeeEmploymentRoleEmploymentSubTypeEnum.PART_TIME;
                                    type = EmployeeEmploymentRoleEmploymentTypeEnum.EMPLOYEE;
                                }};;
                                employmentStartDate = "2021-10-26";
                                employmentStatus = EmploymentStatusEnum.ACTIVE;
                                firstName = "Elon";
                                foodAllergies = new String[]{{
                                    add("dicta"),
                                    add("corporis"),
                                    add("dolore"),
                                    add("iusto"),
                                }};
                                gender = GenderEnum.MALE;
                                initials = "EM";
                                jobs = new org.openapis.openapi.models.shared.EmployeeJobsInput[]{{
                                    add(new EmployeeJobsInput() {{
                                        compensationRate = 72000;
                                        currency = CurrencyEnum.USD;
                                        endDate = LocalDate.parse("2020-08-12");
                                        hiredAt = LocalDate.parse("2020-08-12");
                                        isPrimary = true;
                                        location = new Address() {{
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
                                        }};
                                        paymentUnit = PaymentUnitEnum.YEAR;
                                        role = "Sales";
                                        startDate = LocalDate.parse("2020-08-12");
                                        title = "CEO";
                                    }}),
                                }};
                                languages = new String[]{{
                                    add("EN"),
                                    add("EN"),
                                    add("EN"),
                                }};
                                lastName = "Musk";
                                leavingReason = EmployeeLeavingReasonEnum.RESIGNED;
                                manager = new EmployeeManagerInput() {{
                                    email = "elon@musk.com";
                                    employmentStatus = EmploymentStatusEnum.ACTIVE;
                                    firstName = "Elon";
                                    lastName = "Musk";
                                    name = "Elon Musk";
                                }};;
                                maritalStatus = "married";
                                middleName = "D.";
                                nationalities = new String[]{{
                                    add("US"),
                                    add("US"),
                                }};
                                partner = new EmployeePersonInput() {{
                                    birthday = LocalDate.parse("2000-08-12");
                                    deceasedOn = LocalDate.parse("2000-08-12");
                                    firstName = "Elon";
                                    gender = GenderEnum.MALE;
                                    initials = "EM";
                                    lastName = "Musk";
                                    middleName = "D.";
                                }};;
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
                                    add(new PhoneNumber("111-111-1111") {{
                                        areaCode = "323";
                                        countryCode = "1";
                                        extension = "105";
                                        id = "12345";
                                        number = "111-111-1111";
                                        type = PhoneNumberTypeEnum.PRIMARY;
                                    }}),
                                }};
                                photoUrl = "https://unavatar.io/elon-musk";
                                preferredLanguage = "EN";
                                preferredName = "Elon Musk";
                                pronouns = "she,her";
                                recordUrl = "https://app.intercom.io/contacts/12345";
                                rowVersion = "1-12345";
                                salutation = "Mr";
                                socialLinks = new org.openapis.openapi.models.shared.EmployeeSocialLinks[]{{
                                    add(new EmployeeSocialLinks("https://www.twitter.com/apideck-io") {{
                                        id = "12345";
                                        type = "twitter";
                                        url = "https://www.twitter.com/apideck-io";
                                    }}),
                                    add(new EmployeeSocialLinks("https://www.twitter.com/apideck-io") {{
                                        id = "12345";
                                        type = "twitter";
                                        url = "https://www.twitter.com/apideck-io";
                                    }}),
                                }};
                                socialSecurityNumber = "123456789";
                                source = "lever";
                                sourceId = "12345";
                                tags = new String[]{{
                                    add("quae"),
                                    add("ipsum"),
                                    add("quidem"),
                                    add("molestias"),
                                }};
                                taxCode = "1111";
                                taxId = "234-32-0000";
                                team = new EmployeeTeam() {{
                                    id = "1234";
                                    name = "Full Stack Engineers";
                                }};;
                                timezone = "Europe/London";
                                title = "CEO";
                                worksRemote = true;
                            }};, "excepturi", "pariatur", "modi") {{
                raw = false;
                xApideckServiceId = "praesentium";
            }};            

            EmployeesUpdateResponse res = sdk.employees.employeesUpdate(req, new EmployeesUpdateSecurity("rem") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateEmployeeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
