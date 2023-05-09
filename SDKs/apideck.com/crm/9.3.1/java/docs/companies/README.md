# companies

### Available Operations

* [companiesAdd](#companiesadd) - Create company
* [companiesAll](#companiesall) - List companies
* [companiesDelete](#companiesdelete) - Delete company
* [companiesOne](#companiesone) - Get company
* [companiesUpdate](#companiesupdate) - Update company

## companiesAdd

Create company

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompaniesAddRequest;
import org.openapis.openapi.models.operations.CompaniesAddResponse;
import org.openapis.openapi.models.operations.CompaniesAddSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.BankAccount;
import org.openapis.openapi.models.shared.BankAccountAccountTypeEnum;
import org.openapis.openapi.models.shared.CompanyCompanyRowType;
import org.openapis.openapi.models.shared.CompanyInput;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.CustomField;
import org.openapis.openapi.models.shared.Email;
import org.openapis.openapi.models.shared.EmailTypeEnum;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.PhoneNumberTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SocialLink;
import org.openapis.openapi.models.shared.Website;
import org.openapis.openapi.models.shared.WebsiteTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompaniesAddRequest req = new CompaniesAddRequest(                new CompanyInput("SpaceX") {{
                                abnBranch = "123";
                                abnOrTfn = "46 115 614 695";
                                acn = "XXX XXX XXX";
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
                                }};
                                annualRevenue = "+$35m";
                                bankAccounts = new org.openapis.openapi.models.shared.BankAccount[]{{
                                    add(new BankAccount() {{
                                        accountName = "SPACEX LLC";
                                        accountNumber = "123465";
                                        accountType = BankAccountAccountTypeEnum.CREDIT_CARD;
                                        bankCode = "BNH";
                                        bic = "AUDSCHGGXXX";
                                        branchIdentifier = "001";
                                        bsbNumber = "062-001";
                                        currency = CurrencyEnum.USD;
                                        iban = "CH2989144532982975332";
                                    }}),
                                    add(new BankAccount() {{
                                        accountName = "SPACEX LLC";
                                        accountNumber = "123465";
                                        accountType = BankAccountAccountTypeEnum.CREDIT_CARD;
                                        bankCode = "BNH";
                                        bic = "AUDSCHGGXXX";
                                        branchIdentifier = "001";
                                        bsbNumber = "062-001";
                                        currency = CurrencyEnum.USD;
                                        iban = "CH2989144532982975332";
                                    }}),
                                    add(new BankAccount() {{
                                        accountName = "SPACEX LLC";
                                        accountNumber = "123465";
                                        accountType = BankAccountAccountTypeEnum.CREDIT_CARD;
                                        bankCode = "BNH";
                                        bic = "AUDSCHGGXXX";
                                        branchIdentifier = "001";
                                        bsbNumber = "062-001";
                                        currency = CurrencyEnum.USD;
                                        iban = "CH2989144532982975332";
                                    }}),
                                }};
                                birthday = LocalDate.parse("2000-08-12");
                                currency = CurrencyEnum.USD;
                                customFields = new org.openapis.openapi.models.shared.CustomField[]{{
                                    add(new CustomField("2389328923893298") {{
                                        description = "Employee Level";
                                        id = "2389328923893298";
                                        name = "employee_level";
                                        value = "Uses Salesforce and Marketo";
                                    }}),
                                }};
                                description = "Space Exploration Technologies Corp. is an American aerospace manufacturer, space transportation services and communications company headquartered in Hawthorne, California.";
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
                                fax = "+12129876543";
                                firstName = "Elon";
                                image = "https://www.spacex.com/static/images/share.jpg";
                                industry = "Apparel";
                                lastName = "Musk";
                                numberOfEmployees = "500-1000";
                                ownerId = "12345";
                                ownership = "Public";
                                payeeNumber = "78932EN";
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
                                readOnly = false;
                                rowType = new CompanyCompanyRowType() {{
                                    id = "12345";
                                    name = "Customer Account";
                                }};;
                                salesTaxNumber = "12456EN";
                                salutation = "Mr";
                                socialLinks = new org.openapis.openapi.models.shared.SocialLink[]{{
                                    add(new SocialLink("https://www.twitter.com/apideck-io") {{
                                        id = "12345";
                                        type = "twitter";
                                        url = "https://www.twitter.com/apideck-io";
                                    }}),
                                }};
                                status = "Open";
                                tags = new String[]{{
                                    add("dolor"),
                                    add("natus"),
                                    add("laboriosam"),
                                }};
                                vatNumber = "BE0689615164";
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
                            }};, "saepe", "fuga") {{
                raw = false;
                xApideckServiceId = "in";
            }};            

            CompaniesAddResponse res = sdk.companies.companiesAdd(req, new CompaniesAddSecurity("corporis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createCompanyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## companiesAll

List companies

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompaniesAllRequest;
import org.openapis.openapi.models.operations.CompaniesAllResponse;
import org.openapis.openapi.models.operations.CompaniesAllSecurity;
import org.openapis.openapi.models.shared.CompaniesFilter;
import org.openapis.openapi.models.shared.CompaniesSort;
import org.openapis.openapi.models.shared.CompaniesSortByEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortDirectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompaniesAllRequest req = new CompaniesAllRequest("iste", "iure") {{
                cursor = "saepe";
                fields = "quidem";
                filter = new CompaniesFilter() {{
                    name = "SpaceX";
                }};;
                limit = 99280L;
                raw = false;
                sort = new CompaniesSort() {{
                    by = CompaniesSortByEnum.CREATED_AT;
                    direction = SortDirectionEnum.ASC;
                }};;
                xApideckServiceId = "reiciendis";
            }};            

            CompaniesAllResponse res = sdk.companies.companiesAll(req, new CompaniesAllSecurity("est") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getCompaniesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## companiesDelete

Delete company

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompaniesDeleteRequest;
import org.openapis.openapi.models.operations.CompaniesDeleteResponse;
import org.openapis.openapi.models.operations.CompaniesDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompaniesDeleteRequest req = new CompaniesDeleteRequest("mollitia", "laborum", "dolores") {{
                raw = false;
                xApideckServiceId = "dolorem";
            }};            

            CompaniesDeleteResponse res = sdk.companies.companiesDelete(req, new CompaniesDeleteSecurity("corporis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteCompanyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## companiesOne

Get company

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompaniesOneRequest;
import org.openapis.openapi.models.operations.CompaniesOneResponse;
import org.openapis.openapi.models.operations.CompaniesOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompaniesOneRequest req = new CompaniesOneRequest("explicabo", "nobis", "enim") {{
                fields = "omnis";
                raw = false;
                xApideckServiceId = "nemo";
            }};            

            CompaniesOneResponse res = sdk.companies.companiesOne(req, new CompaniesOneSecurity("minima") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getCompanyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## companiesUpdate

Update company

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompaniesUpdateRequest;
import org.openapis.openapi.models.operations.CompaniesUpdateResponse;
import org.openapis.openapi.models.operations.CompaniesUpdateSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.BankAccount;
import org.openapis.openapi.models.shared.BankAccountAccountTypeEnum;
import org.openapis.openapi.models.shared.CompanyCompanyRowType;
import org.openapis.openapi.models.shared.CompanyInput;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.CustomField;
import org.openapis.openapi.models.shared.Email;
import org.openapis.openapi.models.shared.EmailTypeEnum;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.PhoneNumberTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SocialLink;
import org.openapis.openapi.models.shared.Website;
import org.openapis.openapi.models.shared.WebsiteTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompaniesUpdateRequest req = new CompaniesUpdateRequest(                new CompanyInput("SpaceX") {{
                                abnBranch = "123";
                                abnOrTfn = "46 115 614 695";
                                acn = "XXX XXX XXX";
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
                                annualRevenue = "+$35m";
                                bankAccounts = new org.openapis.openapi.models.shared.BankAccount[]{{
                                    add(new BankAccount() {{
                                        accountName = "SPACEX LLC";
                                        accountNumber = "123465";
                                        accountType = BankAccountAccountTypeEnum.CREDIT_CARD;
                                        bankCode = "BNH";
                                        bic = "AUDSCHGGXXX";
                                        branchIdentifier = "001";
                                        bsbNumber = "062-001";
                                        currency = CurrencyEnum.USD;
                                        iban = "CH2989144532982975332";
                                    }}),
                                }};
                                birthday = LocalDate.parse("2000-08-12");
                                currency = CurrencyEnum.USD;
                                customFields = new org.openapis.openapi.models.shared.CustomField[]{{
                                    add(new CustomField("2389328923893298") {{
                                        description = "Employee Level";
                                        id = "2389328923893298";
                                        name = "employee_level";
                                        value = true;
                                    }}),
                                    add(new CustomField("2389328923893298") {{
                                        description = "Employee Level";
                                        id = "2389328923893298";
                                        name = "employee_level";
                                        value = new String[]{{
                                            add("architecto"),
                                            add("mollitia"),
                                            add("dolorem"),
                                            add("culpa"),
                                        }};
                                    }}),
                                }};
                                description = "Space Exploration Technologies Corp. is an American aerospace manufacturer, space transportation services and communications company headquartered in Hawthorne, California.";
                                emails = new org.openapis.openapi.models.shared.Email[]{{
                                    add(new Email("elon@musk.com") {{
                                        email = "elon@musk.com";
                                        id = "123";
                                        type = EmailTypeEnum.PRIMARY;
                                    }}),
                                }};
                                fax = "+12129876543";
                                firstName = "Elon";
                                image = "https://www.spacex.com/static/images/share.jpg";
                                industry = "Apparel";
                                lastName = "Musk";
                                numberOfEmployees = "500-1000";
                                ownerId = "12345";
                                ownership = "Public";
                                payeeNumber = "78932EN";
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
                                readOnly = false;
                                rowType = new CompanyCompanyRowType() {{
                                    id = "12345";
                                    name = "Customer Account";
                                }};;
                                salesTaxNumber = "12456EN";
                                salutation = "Mr";
                                socialLinks = new org.openapis.openapi.models.shared.SocialLink[]{{
                                    add(new SocialLink("https://www.twitter.com/apideck-io") {{
                                        id = "12345";
                                        type = "twitter";
                                        url = "https://www.twitter.com/apideck-io";
                                    }}),
                                    add(new SocialLink("https://www.twitter.com/apideck-io") {{
                                        id = "12345";
                                        type = "twitter";
                                        url = "https://www.twitter.com/apideck-io";
                                    }}),
                                    add(new SocialLink("https://www.twitter.com/apideck-io") {{
                                        id = "12345";
                                        type = "twitter";
                                        url = "https://www.twitter.com/apideck-io";
                                    }}),
                                }};
                                status = "Open";
                                tags = new String[]{{
                                    add("numquam"),
                                    add("commodi"),
                                    add("quam"),
                                }};
                                vatNumber = "BE0689615164";
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
                                }};
                            }};, "velit", "error", "quia") {{
                raw = false;
                xApideckServiceId = "quis";
            }};            

            CompaniesUpdateResponse res = sdk.companies.companiesUpdate(req, new CompaniesUpdateSecurity("vitae") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateCompanyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
