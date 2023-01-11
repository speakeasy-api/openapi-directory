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

            CompaniesAddRequest req = new CompaniesAddRequest() {{
                security = new CompaniesAddSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new CompaniesAddQueryParams() {{
                    raw = false;
                }};
                headers = new CompaniesAddHeaders() {{
                    xApideckAppId = "beatae";
                    xApideckConsumerId = "atque";
                    xApideckServiceId = "enim";
                }};
                request = new HrisCompanyInput() {{
                    addresses = new openapisdk.models.shared.Address[]() {{
                        add(new Address() {{
                            city = "est";
                            contactName = "quod";
                            country = "tempore";
                            county = "placeat";
                            email = "ullam";
                            fax = "consequuntur";
                            id = "distinctio";
                            latitude = "vitae";
                            line1 = "quo";
                            line2 = "aperiam";
                            line3 = "ut";
                            line4 = "qui";
                            longitude = "tenetur";
                            name = "labore";
                            phoneNumber = "eaque";
                            postalCode = "quidem";
                            rowVersion = "neque";
                            salutation = "qui";
                            state = "quisquam";
                            streetNumber = "nisi";
                            string = "aut";
                            type = "shipping";
                            website = "laudantium";
                        }}),
                        add(new Address() {{
                            city = "nostrum";
                            contactName = "sed";
                            country = "maxime";
                            county = "sint";
                            email = "modi";
                            fax = "consequuntur";
                            id = "quae";
                            latitude = "asperiores";
                            line1 = "illo";
                            line2 = "qui";
                            line3 = "molestias";
                            line4 = "eius";
                            longitude = "totam";
                            name = "voluptas";
                            phoneNumber = "omnis";
                            postalCode = "vel";
                            rowVersion = "nemo";
                            salutation = "est";
                            state = "aut";
                            streetNumber = "in";
                            string = "velit";
                            type = "other";
                            website = "reiciendis";
                        }}),
                    }};
                    companyNumber = "molestiae";
                    debtorId = "praesentium";
                    displayName = "quis";
                    emails = new openapisdk.models.shared.Email[]() {{
                        add(new Email() {{
                            email = "praesentium";
                            id = "illo";
                            type = "other";
                        }}),
                        add(new Email() {{
                            email = "iure";
                            id = "est";
                            type = "work";
                        }}),
                    }};
                    legalName = "quas";
                    phoneNumbers = new openapisdk.models.shared.PhoneNumber[]() {{
                        add(new PhoneNumber() {{
                            areaCode = "et";
                            countryCode = "maxime";
                            extension = "officiis";
                            id = "iste";
                            number = "ut";
                            type = "personal";
                        }}),
                        add(new PhoneNumber() {{
                            areaCode = "nulla";
                            countryCode = "id";
                            extension = "et";
                            id = "voluptatem";
                            number = "officia";
                            type = "other";
                        }}),
                    }};
                    status = "other";
                    subdomain = "corrupti";
                    websites = new openapisdk.models.shared.Website[]() {{
                        add(new Website() {{
                            id = "magni";
                            type = "primary";
                            url = "reprehenderit";
                        }}),
                        add(new Website() {{
                            id = "atque";
                            type = "other";
                            url = "suscipit";
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