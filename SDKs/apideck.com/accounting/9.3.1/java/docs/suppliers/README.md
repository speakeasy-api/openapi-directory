# suppliers

### Available Operations

* [suppliersAdd](#suppliersadd) - Create Supplier
* [suppliersAll](#suppliersall) - List Suppliers
* [suppliersDelete](#suppliersdelete) - Delete Supplier
* [suppliersOne](#suppliersone) - Get Supplier
* [suppliersUpdate](#suppliersupdate) - Update Supplier

## suppliersAdd

Create Supplier

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SuppliersAddRequest;
import org.openapis.openapi.models.operations.SuppliersAddResponse;
import org.openapis.openapi.models.operations.SuppliersAddSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.BankAccount;
import org.openapis.openapi.models.shared.BankAccountAccountTypeEnum;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.Email;
import org.openapis.openapi.models.shared.EmailTypeEnum;
import org.openapis.openapi.models.shared.LinkedLedgerAccountInput;
import org.openapis.openapi.models.shared.LinkedTaxRateInput;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.PhoneNumberTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SupplierInput;
import org.openapis.openapi.models.shared.SupplierStatusEnum;
import org.openapis.openapi.models.shared.Website;
import org.openapis.openapi.models.shared.WebsiteTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SuppliersAddRequest req = new SuppliersAddRequest(                new SupplierInput() {{
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
                                notes = "Some notes about this supplier";
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
                                rowVersion = "1-12345";
                                status = SupplierStatusEnum.ACTIVE;
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
                            }};, "hic", "recusandae") {{
                raw = false;
                xApideckServiceId = "omnis";
            }};            

            SuppliersAddResponse res = sdk.suppliers.suppliersAdd(req, new SuppliersAddSecurity("facilis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createSupplierResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## suppliersAll

List Suppliers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SuppliersAllRequest;
import org.openapis.openapi.models.operations.SuppliersAllResponse;
import org.openapis.openapi.models.operations.SuppliersAllSecurity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SuppliersFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SuppliersAllRequest req = new SuppliersAllRequest("perspiciatis", "voluptatem") {{
                cursor = "porro";
                fields = "consequuntur";
                filter = new SuppliersFilter() {{
                    companyName = "SpaceX";
                    email = "elon@spacex.com";
                }};;
                limit = 500026L;
                passThrough = new java.util.HashMap<String, Object>() {{
                    put("eaque", "occaecati");
                    put("rerum", "adipisci");
                    put("asperiores", "earum");
                }};
                raw = false;
                xApideckServiceId = "modi";
            }};            

            SuppliersAllResponse res = sdk.suppliers.suppliersAll(req, new SuppliersAllSecurity("iste") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getSuppliersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## suppliersDelete

Delete Supplier

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SuppliersDeleteRequest;
import org.openapis.openapi.models.operations.SuppliersDeleteResponse;
import org.openapis.openapi.models.operations.SuppliersDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SuppliersDeleteRequest req = new SuppliersDeleteRequest("dolorum", "deleniti", "pariatur") {{
                raw = false;
                xApideckServiceId = "provident";
            }};            

            SuppliersDeleteResponse res = sdk.suppliers.suppliersDelete(req, new SuppliersDeleteSecurity("nobis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteSupplierResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## suppliersOne

Get Supplier

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SuppliersOneRequest;
import org.openapis.openapi.models.operations.SuppliersOneResponse;
import org.openapis.openapi.models.operations.SuppliersOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SuppliersOneRequest req = new SuppliersOneRequest("libero", "delectus", "quaerat") {{
                fields = "quos";
                raw = false;
                xApideckServiceId = "aliquid";
            }};            

            SuppliersOneResponse res = sdk.suppliers.suppliersOne(req, new SuppliersOneSecurity("dolorem") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getSupplierResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## suppliersUpdate

Update Supplier

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SuppliersUpdateRequest;
import org.openapis.openapi.models.operations.SuppliersUpdateResponse;
import org.openapis.openapi.models.operations.SuppliersUpdateSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.BankAccount;
import org.openapis.openapi.models.shared.BankAccountAccountTypeEnum;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.Email;
import org.openapis.openapi.models.shared.EmailTypeEnum;
import org.openapis.openapi.models.shared.LinkedLedgerAccountInput;
import org.openapis.openapi.models.shared.LinkedTaxRateInput;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.PhoneNumberTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SupplierInput;
import org.openapis.openapi.models.shared.SupplierStatusEnum;
import org.openapis.openapi.models.shared.Website;
import org.openapis.openapi.models.shared.WebsiteTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SuppliersUpdateRequest req = new SuppliersUpdateRequest(                new SupplierInput() {{
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
                                notes = "Some notes about this supplier";
                                phoneNumbers = new org.openapis.openapi.models.shared.PhoneNumber[]{{
                                    add(new PhoneNumber("111-111-1111") {{
                                        areaCode = "323";
                                        countryCode = "1";
                                        extension = "105";
                                        id = "12345";
                                        number = "111-111-1111";
                                        type = PhoneNumberTypeEnum.PRIMARY;
                                    }}),
                                }};
                                rowVersion = "1-12345";
                                status = SupplierStatusEnum.ACTIVE;
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
                                    add(new Website("http://example.com") {{
                                        id = "12345";
                                        type = WebsiteTypeEnum.PRIMARY;
                                        url = "http://example.com";
                                    }}),
                                }};
                            }};, "excepturi", "cum", "voluptate") {{
                raw = false;
                xApideckServiceId = "dignissimos";
            }};            

            SuppliersUpdateResponse res = sdk.suppliers.suppliersUpdate(req, new SuppliersUpdateSecurity("reiciendis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateSupplierResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
