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
                    applicationId = new SchemeApplicationId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    consumerId = new SchemeConsumerId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            LeadsAddRequest req = new LeadsAddRequest() {{
                security = new LeadsAddSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new LeadsAddQueryParams() {{
                    raw = false;
                }};
                headers = new LeadsAddHeaders() {{
                    xApideckAppId = "voluptas";
                    xApideckConsumerId = "culpa";
                    xApideckServiceId = "expedita";
                }};
                request = new LeadInput() {{
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
                    companyId = "vel";
                    companyName = "rerum";
                    contactId = "mollitia";
                    currency = "FJD";
                    customFields = new openapisdk.models.shared.CustomField[]() {{
                        add(new CustomField() {{
                            description = "reprehenderit";
                            id = "qui";
                            name = "qui";
                            value = "unde";
                        }}),
                    }};
                    description = "in";
                    emails = new openapisdk.models.shared.Email[]() {{
                        add(new Email() {{
                            email = "qui";
                            id = "ut";
                            type = "work";
                        }}),
                        add(new Email() {{
                            email = "ab";
                            id = "neque";
                            type = "work";
                        }}),
                    }};
                    fax = "et";
                    firstName = "accusantium";
                    language = "esse";
                    lastName = "architecto";
                    leadSource = "quam";
                    monetaryAmount = 29.100000;
                    name = "soluta";
                    ownerId = "sunt";
                    phoneNumbers = new openapisdk.models.shared.PhoneNumber[]() {{
                        add(new PhoneNumber() {{
                            areaCode = "magni";
                            countryCode = "et";
                            extension = "optio";
                            id = "qui";
                            number = "earum";
                            type = "home";
                        }}),
                        add(new PhoneNumber() {{
                            areaCode = "omnis";
                            countryCode = "ut";
                            extension = "consequatur";
                            id = "dolor";
                            number = "commodi";
                            type = "office";
                        }}),
                    }};
                    prefix = "reprehenderit";
                    socialLinks = new openapisdk.models.shared.SocialLink[]() {{
                        add(new SocialLink() {{
                            id = "nostrum";
                            type = "ut";
                            url = "laboriosam";
                        }}),
                    }};
                    status = "sed";
                    tags = new String[]() {{
                        add("soluta"),
                    }};
                    title = "aut";
                    websites = new openapisdk.models.shared.Website[]() {{
                        add(new Website() {{
                            id = "consequuntur";
                            type = "work";
                            url = "autem";
                        }}),
                        add(new Website() {{
                            id = "ipsa";
                            type = "work";
                            url = "doloremque";
                        }}),
                        add(new Website() {{
                            id = "perferendis";
                            type = "secondary";
                            url = "ratione";
                        }}),
                    }};
                }};
            }};

            LeadsAddResponse res = sdk.leads.leadsAdd(req);

            if (res.createLeadResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Leads

* `leadsAdd` - Create lead
* `leadsAll` - List leads
* `leadsDelete` - Delete lead
* `leadsOne` - Get lead
* `leadsUpdate` - Update lead

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
