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
                    xApideckAppId = "quaerat";
                    xApideckConsumerId = "ipsa";
                    xApideckServiceId = "ut";
                }};
                request = new LeadInput() {{
                    addresses = new openapisdk.models.shared.Address[]() {{
                        add(new Address() {{
                            city = "ea";
                            contactName = "minima";
                            country = "animi";
                            county = "quo";
                            email = "architecto";
                            fax = "quia";
                            id = "voluptas";
                            latitude = "molestiae";
                            line1 = "blanditiis";
                            line2 = "nostrum";
                            line3 = "ipsa";
                            line4 = "alias";
                            longitude = "qui";
                            name = "veritatis";
                            phoneNumber = "magnam";
                            postalCode = "veritatis";
                            rowVersion = "ut";
                            salutation = "sed";
                            state = "est";
                            streetNumber = "qui";
                            string = "ad";
                            type = "home";
                            website = "aliquid";
                        }}),
                        add(new Address() {{
                            city = "laboriosam";
                            contactName = "consequuntur";
                            country = "voluptatem";
                            county = "dolor";
                            email = "expedita";
                            fax = "qui";
                            id = "reprehenderit";
                            latitude = "dolores";
                            line1 = "error";
                            line2 = "totam";
                            line3 = "iusto";
                            line4 = "odio";
                            longitude = "et";
                            name = "at";
                            phoneNumber = "dolores";
                            postalCode = "numquam";
                            rowVersion = "est";
                            salutation = "dolores";
                            state = "in";
                            streetNumber = "sed";
                            string = "dolore";
                            type = "primary";
                            website = "dolorem";
                        }}),
                        add(new Address() {{
                            city = "eum";
                            contactName = "et";
                            country = "provident";
                            county = "expedita";
                            email = "sit";
                            fax = "quis";
                            id = "nihil";
                            latitude = "adipisci";
                            line1 = "praesentium";
                            line2 = "laudantium";
                            line3 = "et";
                            line4 = "beatae";
                            longitude = "fuga";
                            name = "perspiciatis";
                            phoneNumber = "quas";
                            postalCode = "incidunt";
                            rowVersion = "et";
                            salutation = "placeat";
                            state = "culpa";
                            streetNumber = "praesentium";
                            string = "quae";
                            type = "primary";
                            website = "qui";
                        }}),
                    }};
                    companyId = "iusto";
                    companyName = "nihil";
                    contactId = "ab";
                    currency = "UYU";
                    customFields = new openapisdk.models.shared.CustomField[]() {{
                        add(new CustomField() {{
                            description = "natus";
                            id = "quo";
                            name = "error";
                            value = "neque";
                        }}),
                    }};
                    description = "deserunt";
                    emails = new openapisdk.models.shared.Email[]() {{
                        add(new Email() {{
                            email = "qui";
                            id = "molestiae";
                            type = "primary";
                        }}),
                        add(new Email() {{
                            email = "dolore";
                            id = "dolor";
                            type = "work";
                        }}),
                    }};
                    fax = "aspernatur";
                    firstName = "non";
                    language = "sint";
                    lastName = "laboriosam";
                    leadSource = "quia";
                    monetaryAmount = 20.200001;
                    name = "nobis";
                    ownerId = "eum";
                    phoneNumbers = new openapisdk.models.shared.PhoneNumber[]() {{
                        add(new PhoneNumber() {{
                            areaCode = "sapiente";
                            countryCode = "similique";
                            extension = "temporibus";
                            id = "alias";
                            number = "dignissimos";
                            type = "personal";
                        }}),
                        add(new PhoneNumber() {{
                            areaCode = "nihil";
                            countryCode = "nulla";
                            extension = "consequatur";
                            id = "dolorem";
                            number = "voluptatibus";
                            type = "fax";
                        }}),
                    }};
                    prefix = "nostrum";
                    socialLinks = new openapisdk.models.shared.SocialLink[]() {{
                        add(new SocialLink() {{
                            id = "laudantium";
                            type = "et";
                            url = "omnis";
                        }}),
                        add(new SocialLink() {{
                            id = "et";
                            type = "eius";
                            url = "earum";
                        }}),
                        add(new SocialLink() {{
                            id = "error";
                            type = "et";
                            url = "nesciunt";
                        }}),
                    }};
                    status = "dolores";
                    tags = new String[]() {{
                        add("ipsam"),
                        add("ipsam"),
                    }};
                    title = "blanditiis";
                    websites = new openapisdk.models.shared.Website[]() {{
                        add(new Website() {{
                            id = "iure";
                            type = "secondary";
                            url = "consequatur";
                        }}),
                        add(new Website() {{
                            id = "quaerat";
                            type = "work";
                            url = "ut";
                        }}),
                        add(new Website() {{
                            id = "delectus";
                            type = "primary";
                            url = "commodi";
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