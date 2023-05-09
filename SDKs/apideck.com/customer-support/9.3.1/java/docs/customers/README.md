# customers

### Available Operations

* [customersAdd](#customersadd) - Create Customer Support Customer
* [customersAll](#customersall) - List Customer Support Customers
* [customersDelete](#customersdelete) - Delete Customer Support Customer
* [customersOne](#customersone) - Get Customer Support Customer
* [customersUpdate](#customersupdate) - Update Customer Support Customer

## customersAdd

Create Customer Support Customer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomersAddRequest;
import org.openapis.openapi.models.operations.CustomersAddResponse;
import org.openapis.openapi.models.operations.CustomersAddSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.BankAccount;
import org.openapis.openapi.models.shared.BankAccountAccountTypeEnum;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.CustomerSupportCustomerInput;
import org.openapis.openapi.models.shared.CustomerSupportCustomerStatusEnum;
import org.openapis.openapi.models.shared.Email;
import org.openapis.openapi.models.shared.EmailTypeEnum;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.PhoneNumberTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomersAddRequest req = new CustomersAddRequest(                new CustomerSupportCustomerInput() {{
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
                                bankAccounts = new BankAccount() {{
                                    accountName = "SPACEX LLC";
                                    accountNumber = "123465";
                                    accountType = BankAccountAccountTypeEnum.CREDIT_CARD;
                                    bankCode = "BNH";
                                    bic = "AUDSCHGGXXX";
                                    branchIdentifier = "001";
                                    bsbNumber = "062-001";
                                    currency = CurrencyEnum.USD;
                                    iban = "CH2989144532982975332";
                                }};;
                                companyName = "SpaceX";
                                currency = CurrencyEnum.USD;
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
                                firstName = "Elon";
                                individual = true;
                                lastName = "Musk";
                                notes = "Some notes about this customer";
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
                                status = CustomerSupportCustomerStatusEnum.ACTIVE;
                                taxNumber = "US123945459";
                            }};, "deserunt", "suscipit") {{
                raw = false;
                xApideckServiceId = "iure";
            }};            

            CustomersAddResponse res = sdk.customers.customersAdd(req, new CustomersAddSecurity("magnam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createCustomerSupportCustomerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customersAll

List Customer Support Customers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomersAllRequest;
import org.openapis.openapi.models.operations.CustomersAllResponse;
import org.openapis.openapi.models.operations.CustomersAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomersAllRequest req = new CustomersAllRequest("debitis", "ipsa") {{
                cursor = "delectus";
                fields = "tempora";
                limit = 383441L;
                raw = false;
                xApideckServiceId = "molestiae";
            }};            

            CustomersAllResponse res = sdk.customers.customersAll(req, new CustomersAllSecurity("minus") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getCustomerSupportCustomersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customersDelete

Delete Customer Support Customer

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

            CustomersDeleteRequest req = new CustomersDeleteRequest("placeat", "voluptatum", "iusto") {{
                raw = false;
                xApideckServiceId = "excepturi";
            }};            

            CustomersDeleteResponse res = sdk.customers.customersDelete(req, new CustomersDeleteSecurity("nisi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteCustomerSupportCustomerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customersOne

Get Customer Support Customer

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

            CustomersOneRequest req = new CustomersOneRequest("recusandae", "temporibus", "ab") {{
                fields = "quis";
                raw = false;
                xApideckServiceId = "veritatis";
            }};            

            CustomersOneResponse res = sdk.customers.customersOne(req, new CustomersOneSecurity("deserunt") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getCustomerSupportCustomerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customersUpdate

Update Customer Support Customer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomersUpdateRequest;
import org.openapis.openapi.models.operations.CustomersUpdateResponse;
import org.openapis.openapi.models.operations.CustomersUpdateSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.BankAccount;
import org.openapis.openapi.models.shared.BankAccountAccountTypeEnum;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.CustomerSupportCustomerInput;
import org.openapis.openapi.models.shared.CustomerSupportCustomerStatusEnum;
import org.openapis.openapi.models.shared.Email;
import org.openapis.openapi.models.shared.EmailTypeEnum;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.PhoneNumberTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomersUpdateRequest req = new CustomersUpdateRequest(                new CustomerSupportCustomerInput() {{
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
                                bankAccounts = new BankAccount() {{
                                    accountName = "SPACEX LLC";
                                    accountNumber = "123465";
                                    accountType = BankAccountAccountTypeEnum.CREDIT_CARD;
                                    bankCode = "BNH";
                                    bic = "AUDSCHGGXXX";
                                    branchIdentifier = "001";
                                    bsbNumber = "062-001";
                                    currency = CurrencyEnum.USD;
                                    iban = "CH2989144532982975332";
                                }};;
                                companyName = "SpaceX";
                                currency = CurrencyEnum.USD;
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
                                firstName = "Elon";
                                individual = true;
                                lastName = "Musk";
                                notes = "Some notes about this customer";
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
                                status = CustomerSupportCustomerStatusEnum.ACTIVE;
                                taxNumber = "US123945459";
                            }};, "sapiente", "quo", "odit") {{
                raw = false;
                xApideckServiceId = "at";
            }};            

            CustomersUpdateResponse res = sdk.customers.customersUpdate(req, new CustomersUpdateSecurity("at") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateCustomerSupportCustomerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
