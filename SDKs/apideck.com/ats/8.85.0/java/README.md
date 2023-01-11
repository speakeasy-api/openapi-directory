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
                    xApideckAppId = "et";
                    xApideckConsumerId = "quaerat";
                    xApideckServiceId = "ut";
                }};
                request = new ApplicantInput() {{
                    addresses = new openapisdk.models.shared.Address[]() {{
                        add(new Address() {{
                            city = "et";
                            contactName = "expedita";
                            country = "facere";
                            county = "magni";
                            email = "sed";
                            fax = "labore";
                            id = "consequuntur";
                            latitude = "magni";
                            line1 = "voluptatum";
                            line2 = "minima";
                            line3 = "necessitatibus";
                            line4 = "totam";
                            longitude = "et";
                            name = "ea";
                            phoneNumber = "labore";
                            postalCode = "quasi";
                            rowVersion = "eaque";
                            salutation = "velit";
                            state = "ullam";
                            streetNumber = "cum";
                            string = "quibusdam";
                            type = "home";
                            website = "quisquam";
                        }}),
                        add(new Address() {{
                            city = "est";
                            contactName = "necessitatibus";
                            country = "dolorum";
                            county = "dolores";
                            email = "perspiciatis";
                            fax = "ab";
                            id = "quia";
                            latitude = "sit";
                            line1 = "necessitatibus";
                            line2 = "molestiae";
                            line3 = "possimus";
                            line4 = "voluptatum";
                            longitude = "facere";
                            name = "accusamus";
                            phoneNumber = "veritatis";
                            postalCode = "hic";
                            rowVersion = "praesentium";
                            salutation = "omnis";
                            state = "qui";
                            streetNumber = "voluptatum";
                            string = "magni";
                            type = "other";
                            website = "nam";
                        }}),
                        add(new Address() {{
                            city = "quia";
                            contactName = "cum";
                            country = "molestias";
                            county = "autem";
                            email = "iure";
                            fax = "expedita";
                            id = "nesciunt";
                            latitude = "eaque";
                            line1 = "corrupti";
                            line2 = "nihil";
                            line3 = "quos";
                            line4 = "eius";
                            longitude = "impedit";
                            name = "unde";
                            phoneNumber = "quis";
                            postalCode = "dolorem";
                            rowVersion = "quis";
                            salutation = "rerum";
                            state = "voluptatem";
                            streetNumber = "occaecati";
                            string = "ut";
                            type = "home";
                            website = "corporis";
                        }}),
                    }};
                    anonymized = true;
                    applications = new String[]() {{
                        add("laboriosam"),
                        add("enim"),
                        add("natus"),
                    }};
                    archived = true;
                    birthday = "2008-05-04";
                    confidential = true;
                    coordinatorId = "sit";
                    coverLetter = "explicabo";
                    deleted = true;
                    emails = new openapisdk.models.shared.Email[]() {{
                        add(new Email() {{
                            email = "sapiente";
                            id = "maxime";
                            type = "work";
                        }}),
                        add(new Email() {{
                            email = "nobis";
                            id = "necessitatibus";
                            type = "primary";
                        }}),
                        add(new Email() {{
                            email = "minima";
                            id = "sint";
                            type = "primary";
                        }}),
                    }};
                    firstName = "in";
                    followers = new String[]() {{
                        add("sint"),
                    }};
                    headline = "veritatis";
                    initials = "aliquam";
                    lastName = "voluptates";
                    middleName = "est";
                    name = "omnis";
                    ownerId = "aut";
                    phoneNumbers = new openapisdk.models.shared.PhoneNumber[]() {{
                        add(new PhoneNumber() {{
                            areaCode = "totam";
                            countryCode = "quidem";
                            extension = "voluptatum";
                            id = "qui";
                            number = "consequuntur";
                            type = "personal";
                        }}),
                    }};
                    photoUrl = "labore";
                    positionId = "sed";
                    recordUrl = "qui";
                    recruiterId = "omnis";
                    socialLinks = new openapisdk.models.shared.ApplicantSocialLinks[]() {{
                        add(new ApplicantSocialLinks() {{
                            id = "in";
                            type = "inventore";
                            url = "nam";
                        }}),
                        add(new ApplicantSocialLinks() {{
                            id = "voluptas";
                            type = "quo";
                            url = "quaerat";
                        }}),
                        add(new ApplicantSocialLinks() {{
                            id = "quae";
                            type = "dolorem";
                            url = "qui";
                        }}),
                    }};
                    sources = new String[]() {{
                        add("harum"),
                    }};
                    stageId = "quidem";
                    tags = new String[]() {{
                        add("sint"),
                        add("dolorem"),
                        add("qui"),
                    }};
                    title = "esse";
                    websites = new openapisdk.models.shared.ApplicantWebsites[]() {{
                        add(new ApplicantWebsites() {{
                            id = "eum";
                            type = "primary";
                            url = "animi";
                        }}),
                        add(new ApplicantWebsites() {{
                            id = "non";
                            type = "work";
                            url = "voluptate";
                        }}),
                        add(new ApplicantWebsites() {{
                            id = "modi";
                            type = "other";
                            url = "nam";
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Applicants

* `applicantsAdd` - Create applicant
* `applicantsAll` - List applicants
* `applicantsOne` - Get applicant

### Jobs

* `jobsAll` - List Jobs
* `jobsOne` - Get Job

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
