# customers

### Available Operations

* [customersAdd](#customersadd) - Create Customer
* [customersAll](#customersall) - List Customers
* [customersDelete](#customersdelete) - Delete Customer
* [customersOne](#customersone) - Get Customer
* [customersUpdate](#customersupdate) - Update Customer

## customersAdd

Create Customer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomersAddRequest;
import org.openapis.openapi.models.operations.CustomersAddResponse;
import org.openapis.openapi.models.operations.CustomersAddSecurity;
import org.openapis.openapi.models.shared.AccountingCustomerInput;
import org.openapis.openapi.models.shared.AccountingCustomerStatusEnum;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.BankAccount;
import org.openapis.openapi.models.shared.BankAccountAccountTypeEnum;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.Email;
import org.openapis.openapi.models.shared.EmailTypeEnum;
import org.openapis.openapi.models.shared.LinkedLedgerAccountInput;
import org.openapis.openapi.models.shared.LinkedParentCustomer;
import org.openapis.openapi.models.shared.LinkedTaxRateInput;
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

            CustomersAddRequest req = new CustomersAddRequest(                new AccountingCustomerInput() {{
                                account = new LinkedLedgerAccountInput() {{
                                    code = "453";
                                    id = "123456";
                                    nominalCode = "N091";
                                }};;
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
                                companyName = "SpaceX";
                                currency = CurrencyEnum.USD;
                                displayId = "EMP00101";
                                displayName = "Windsurf Shop";
                                emails = new org.openapis.openapi.models.shared.Email[]{{
                                    add(new Email("elon@musk.com") {{
                                        email = "elon@musk.com";
                                        id = "123";
                                        type = EmailTypeEnum.PRIMARY;
                                    }}),
                                }};
                                firstName = "Elon";
                                individual = true;
                                lastName = "Musk";
                                middleName = "D.";
                                notes = "Some notes about this customer";
                                parent = new LinkedParentCustomer("12345") {{
                                    name = "Windsurf Shop";
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
                                project = false;
                                rowVersion = "1-12345";
                                status = AccountingCustomerStatusEnum.ACTIVE;
                                suffix = "Jr.";
                                taxNumber = "US123945459";
                                taxRate = new LinkedTaxRateInput() {{
                                    id = "123456";
                                }};;
                                title = "CEO";
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
                                }};
                            }};, "occaecati", "numquam") {{
                raw = false;
                xApideckServiceId = "commodi";
            }};            

            CustomersAddResponse res = sdk.customers.customersAdd(req, new CustomersAddSecurity("quam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createCustomerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customersAll

List Customers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomersAllRequest;
import org.openapis.openapi.models.operations.CustomersAllResponse;
import org.openapis.openapi.models.operations.CustomersAllSecurity;
import org.openapis.openapi.models.shared.CustomersFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomersAllRequest req = new CustomersAllRequest("molestiae", "velit") {{
                cursor = "error";
                fields = "quia";
                filter = new CustomersFilter() {{
                    companyName = "SpaceX";
                    displayName = "Techno King";
                    email = "elon@spacex.com";
                    firstName = "Elon";
                    lastName = "Musk";
                }};;
                limit = 338007L;
                passThrough = new java.util.HashMap<String, Object>() {{
                    put("laborum", "animi");
                }};
                raw = false;
                xApideckServiceId = "enim";
            }};            

            CustomersAllResponse res = sdk.customers.customersAll(req, new CustomersAllSecurity("odit") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getCustomersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customersDelete

Delete Customer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomersDeleteRequest;
import org.openapis.openapi.models.operations.CustomersDeleteResponse;
import org.openapis.openapi.models.operations.CustomersDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomersDeleteRequest req = new CustomersDeleteRequest("quo", "sequi", "tenetur") {{
                raw = false;
                xApideckServiceId = "ipsam";
            }};            

            CustomersDeleteResponse res = sdk.customers.customersDelete(req, new CustomersDeleteSecurity("id") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteCustomerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customersOne

Get Customer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomersOneRequest;
import org.openapis.openapi.models.operations.CustomersOneResponse;
import org.openapis.openapi.models.operations.CustomersOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomersOneRequest req = new CustomersOneRequest("possimus", "aut", "quasi") {{
                fields = "error";
                raw = false;
                xApideckServiceId = "temporibus";
            }};            

            CustomersOneResponse res = sdk.customers.customersOne(req, new CustomersOneSecurity("laborum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getCustomerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customersUpdate

Update Customer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomersUpdateRequest;
import org.openapis.openapi.models.operations.CustomersUpdateResponse;
import org.openapis.openapi.models.operations.CustomersUpdateSecurity;
import org.openapis.openapi.models.shared.AccountingCustomerInput;
import org.openapis.openapi.models.shared.AccountingCustomerStatusEnum;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.BankAccount;
import org.openapis.openapi.models.shared.BankAccountAccountTypeEnum;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.Email;
import org.openapis.openapi.models.shared.EmailTypeEnum;
import org.openapis.openapi.models.shared.LinkedLedgerAccountInput;
import org.openapis.openapi.models.shared.LinkedParentCustomer;
import org.openapis.openapi.models.shared.LinkedTaxRateInput;
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

            CustomersUpdateRequest req = new CustomersUpdateRequest(                new AccountingCustomerInput() {{
                                account = new LinkedLedgerAccountInput() {{
                                    code = "453";
                                    id = "123456";
                                    nominalCode = "N091";
                                }};;
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
                                companyName = "SpaceX";
                                currency = CurrencyEnum.USD;
                                displayId = "EMP00101";
                                displayName = "Windsurf Shop";
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
                                    add(new Email("elon@musk.com") {{
                                        email = "elon@musk.com";
                                        id = "123";
                                        type = EmailTypeEnum.PRIMARY;
                                    }}),
                                }};
                                firstName = "Elon";
                                individual = true;
                                lastName = "Musk";
                                middleName = "D.";
                                notes = "Some notes about this customer";
                                parent = new LinkedParentCustomer("12345") {{
                                    name = "Windsurf Shop";
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
                                project = false;
                                rowVersion = "1-12345";
                                status = AccountingCustomerStatusEnum.ACTIVE;
                                suffix = "Jr.";
                                taxNumber = "US123945459";
                                taxRate = new LinkedTaxRateInput() {{
                                    id = "123456";
                                }};;
                                title = "CEO";
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
                            }};, "praesentium", "voluptatibus", "ipsa") {{
                raw = false;
                xApideckServiceId = "omnis";
            }};            

            CustomersUpdateResponse res = sdk.customers.customersUpdate(req, new CustomersUpdateSecurity("voluptate") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateCustomerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
