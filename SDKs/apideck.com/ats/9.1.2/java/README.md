# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ApplicantsAddSecurity;
import org.openapis.openapi.models.operations.ApplicantsAddQueryParams;
import org.openapis.openapi.models.operations.ApplicantsAddHeaders;
import org.openapis.openapi.models.operations.ApplicantsAddRequest;
import org.openapis.openapi.models.operations.ApplicantsAddResponse;
import org.openapis.openapi.models.shared.ApplicantSocialLinks;
import org.openapis.openapi.models.shared.ApplicantWebsitesTypeEnum;
import org.openapis.openapi.models.shared.ApplicantWebsites;
import org.openapis.openapi.models.shared.ApplicantInput;
import org.openapis.openapi.models.shared.PhoneNumberTypeEnum;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.EmailTypeEnum;
import org.openapis.openapi.models.shared.Email;
import org.openapis.openapi.models.shared.CustomField;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApplicantsAddRequest req = new ApplicantsAddRequest() {{
                security = new ApplicantsAddSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new ApplicantsAddQueryParams() {{
                    raw = false;
                }};
                headers = new ApplicantsAddHeaders() {{
                    xApideckAppId = "corrupti";
                    xApideckConsumerId = "provident";
                    xApideckServiceId = "distinctio";
                }};
                request = new ApplicantInput() {{
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
                            type = "primary";
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
                            type = "primary";
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
                            type = "primary";
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
                            type = "primary";
                            website = "https://elonmusk.com";
                        }}),
                    }};
                    anonymized = true;
                    applications = new String[]{{
                        add("nulla"),
                        add("corrupti"),
                        add("illum"),
                    }};
                    archived = false;
                    birthday = "2000-08-12";
                    confidential = false;
                    coordinatorId = "12345";
                    coverLetter = "I submit this application to express my sincere interest in the API developer position. In the previous role, I was responsible for leadership and ...";
                    customFields = new org.openapis.openapi.models.shared.CustomField[]{{
                        add(new CustomField() {{
                            description = "Employee Level";
                            id = "2389328923893298";
                            name = "employee_level";
                            value = true;
                        }}),
                        add(new CustomField() {{
                            description = "Employee Level";
                            id = "2389328923893298";
                            name = "employee_level";
                            value = true;
                        }}),
                    }};
                    deleted = true;
                    emails = new org.openapis.openapi.models.shared.Email[]{{
                        add(new Email() {{
                            email = "elon@musk.com";
                            id = "123";
                            type = "primary";
                        }}),
                        add(new Email() {{
                            email = "elon@musk.com";
                            id = "123";
                            type = "primary";
                        }}),
                    }};
                    firstName = "Elon";
                    followers = new String[]{{
                        add("magnam"),
                        add("debitis"),
                    }};
                    headline = "PepsiCo, Inc, Central Perk";
                    initials = "EM";
                    lastName = "Musk";
                    middleName = "D.";
                    name = "Elon Musk";
                    ownerId = "54321";
                    phoneNumbers = new org.openapis.openapi.models.shared.PhoneNumber[]{{
                        add(new PhoneNumber() {{
                            areaCode = "323";
                            countryCode = "1";
                            extension = "105";
                            id = "12345";
                            number = "111-111-1111";
                            type = "primary";
                        }}),
                    }};
                    photoUrl = "https://unavatar.io/elon-musk";
                    positionId = "123";
                    recordUrl = "https://app.intercom.io/contacts/12345";
                    recruiterId = "12345";
                    socialLinks = new org.openapis.openapi.models.shared.ApplicantSocialLinks[]{{
                        add(new ApplicantSocialLinks() {{
                            id = "12345";
                            type = "twitter";
                            url = "https://www.twitter.com/apideck-io";
                        }}),
                        add(new ApplicantSocialLinks() {{
                            id = "12345";
                            type = "twitter";
                            url = "https://www.twitter.com/apideck-io";
                        }}),
                        add(new ApplicantSocialLinks() {{
                            id = "12345";
                            type = "twitter";
                            url = "https://www.twitter.com/apideck-io";
                        }}),
                        add(new ApplicantSocialLinks() {{
                            id = "12345";
                            type = "twitter";
                            url = "https://www.twitter.com/apideck-io";
                        }}),
                    }};
                    sources = new String[]{{
                        add("suscipit"),
                        add("molestiae"),
                    }};
                    stageId = "12345";
                    tags = new String[]{{
                        add("placeat"),
                        add("voluptatum"),
                        add("iusto"),
                        add("excepturi"),
                    }};
                    title = "CEO";
                    websites = new org.openapis.openapi.models.shared.ApplicantWebsites[]{{
                        add(new ApplicantWebsites() {{
                            id = "12345";
                            type = "primary";
                            url = "http://example.com";
                        }}),
                        add(new ApplicantWebsites() {{
                            id = "12345";
                            type = "primary";
                            url = "http://example.com";
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


### applicants

* `applicantsAdd` - Create applicant
* `applicantsAll` - List applicants
* `applicantsOne` - Get applicant

### jobs

* `jobsAll` - List Jobs
* `jobsOne` - Get Job
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
