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

            ApplicantsAddRequest req = new ApplicantsAddRequest() {{
                security = new ApplicantsAddSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new ApplicantsAddQueryParams() {{
                    raw = false;
                }};
                headers = new ApplicantsAddHeaders() {{
                    xApideckAppId = "voluptas";
                    xApideckConsumerId = "culpa";
                    xApideckServiceId = "expedita";
                }};
                request = new ApplicantInput() {{
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
                    anonymized = true;
                    applications = new String[]() {{
                        add("mollitia"),
                        add("voluptas"),
                        add("quam"),
                    }};
                    archived = false;
                    birthday = "1978-04-25";
                    confidential = false;
                    coordinatorId = "unde";
                    coverLetter = "in";
                    deleted = false;
                    emails = new openapisdk.models.shared.Email[]() {{
                        add(new Email() {{
                            email = "ut";
                            id = "itaque";
                            type = "primary";
                        }}),
                    }};
                    firstName = "neque";
                    followers = new String[]() {{
                        add("et"),
                        add("accusantium"),
                        add("esse"),
                    }};
                    headline = "architecto";
                    initials = "quam";
                    lastName = "velit";
                    middleName = "cumque";
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
                    photoUrl = "reprehenderit";
                    positionId = "consectetur";
                    recordUrl = "nostrum";
                    recruiterId = "ut";
                    socialLinks = new openapisdk.models.shared.ApplicantSocialLinks[]() {{
                        add(new ApplicantSocialLinks() {{
                            id = "sed";
                            type = "a";
                            url = "soluta";
                        }}),
                        add(new ApplicantSocialLinks() {{
                            id = "aut";
                            type = "quas";
                            url = "consequuntur";
                        }}),
                        add(new ApplicantSocialLinks() {{
                            id = "laudantium";
                            type = "autem";
                            url = "ipsa";
                        }}),
                    }};
                    sources = new String[]() {{
                        add("doloremque"),
                        add("perferendis"),
                    }};
                    stageId = "atque";
                    tags = new String[]() {{
                        add("quisquam"),
                    }};
                    title = "explicabo";
                    websites = new openapisdk.models.shared.ApplicantWebsites[]() {{
                        add(new ApplicantWebsites() {{
                            id = "maxime";
                            type = "primary";
                            url = "perferendis";
                        }}),
                    }};
                }};
            }};

            ApplicantsAddResponse res = sdk.applicants.applicantsAdd(req);

            if (res.createApplicantResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->