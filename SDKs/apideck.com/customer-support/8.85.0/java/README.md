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

            CustomersAddRequest req = new CustomersAddRequest() {{
                security = new CustomersAddSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new CustomersAddQueryParams() {{
                    raw = false;
                }};
                headers = new CustomersAddHeaders() {{
                    xApideckAppId = "voluptas";
                    xApideckConsumerId = "culpa";
                    xApideckServiceId = "expedita";
                }};
                request = new CustomerSupportCustomerInput() {{
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
                    bankAccounts = new BankAccount() {{
                        accountName = "vel";
                        accountNumber = "rerum";
                        accountType = "credit_card";
                        bankCode = "voluptas";
                        bic = "quam";
                        branchIdentifier = "reprehenderit";
                        bsbNumber = "qui";
                        currency = "CVE";
                        iban = "unde";
                    }};
                    companyName = "in";
                    currency = "XBB";
                    emails = new openapisdk.models.shared.Email[]() {{
                        add(new Email() {{
                            email = "ut";
                            id = "itaque";
                            type = "primary";
                        }}),
                    }};
                    firstName = "neque";
                    individual = true;
                    lastName = "et";
                    notes = "accusantium";
                    phoneNumbers = new openapisdk.models.shared.PhoneNumber[]() {{
                        add(new PhoneNumber() {{
                            areaCode = "architecto";
                            countryCode = "quam";
                            extension = "velit";
                            id = "cumque";
                            number = "soluta";
                            type = "secondary";
                        }}),
                        add(new PhoneNumber() {{
                            areaCode = "voluptates";
                            countryCode = "magni";
                            extension = "et";
                            id = "optio";
                            number = "qui";
                            type = "direct-dial-in";
                        }}),
                    }};
                    status = "unknown";
                    taxNumber = "omnis";
                }};
            }};

            CustomersAddResponse res = sdk.customers.customersAdd(req);

            if (res.createCustomerSupportCustomerResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Customers

* `customersAdd` - Create Customer Support Customer
* `customersAll` - List Customer Support Customers
* `customersDelete` - Delete Customer Support Customer
* `customersOne` - Get Customer Support Customer
* `customersUpdate` - Update Customer Support Customer

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
