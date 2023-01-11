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
                    xApideckAppId = "ut";
                    xApideckConsumerId = "quas";
                    xApideckServiceId = "eum";
                }};
                request = new CustomerSupportCustomerInput() {{
                    addresses = new openapisdk.models.shared.Address[]() {{
                        add(new Address() {{
                            city = "distinctio";
                            contactName = "molestiae";
                            country = "sed";
                            county = "sed";
                            email = "autem";
                            fax = "ipsa";
                            id = "sequi";
                            latitude = "inventore";
                            line1 = "earum";
                            line2 = "ad";
                            line3 = "eligendi";
                            line4 = "quia";
                            longitude = "eum";
                            name = "nihil";
                            phoneNumber = "dolorum";
                            postalCode = "eos";
                            rowVersion = "est";
                            salutation = "et";
                            state = "dolor";
                            streetNumber = "omnis";
                            string = "itaque";
                            type = "secondary";
                            website = "nihil";
                        }}),
                    }};
                    bankAccounts = new BankAccount() {{
                        accountName = "quae";
                        accountNumber = "cupiditate";
                        accountType = "other";
                        bankCode = "et";
                        bic = "perferendis";
                        branchIdentifier = "maiores";
                        bsbNumber = "est";
                        currency = "LAK";
                        iban = "sint";
                    }};
                    companyName = "vero";
                    currency = "YER";
                    emails = new openapisdk.models.shared.Email[]() {{
                        add(new Email() {{
                            email = "suscipit";
                            id = "laudantium";
                            type = "work";
                        }}),
                        add(new Email() {{
                            email = "dicta";
                            id = "dolorem";
                            type = "billing";
                        }}),
                    }};
                    firstName = "reiciendis";
                    individual = true;
                    lastName = "fuga";
                    notes = "sed";
                    phoneNumbers = new openapisdk.models.shared.PhoneNumber[]() {{
                        add(new PhoneNumber() {{
                            areaCode = "velit";
                            countryCode = "consequatur";
                            extension = "reiciendis";
                            id = "perspiciatis";
                            number = "labore";
                            type = "secondary";
                        }}),
                        add(new PhoneNumber() {{
                            areaCode = "perferendis";
                            countryCode = "ea";
                            extension = "adipisci";
                            id = "quos";
                            number = "odit";
                            type = "secondary";
                        }}),
                        add(new PhoneNumber() {{
                            areaCode = "non";
                            countryCode = "expedita";
                            extension = "veniam";
                            id = "quos";
                            number = "natus";
                            type = "personal";
                        }}),
                    }};
                    status = "unknown";
                    taxNumber = "earum";
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
