# applicants

### Available Operations

* [applicantsAdd](#applicantsadd) - Create applicant
* [applicantsAll](#applicantsall) - List applicants
* [applicantsOne](#applicantsone) - Get applicant

## applicantsAdd

Create applicant

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApplicantsAddRequest;
import org.openapis.openapi.models.operations.ApplicantsAddResponse;
import org.openapis.openapi.models.operations.ApplicantsAddSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.ApplicantInput;
import org.openapis.openapi.models.shared.ApplicantSocialLinks;
import org.openapis.openapi.models.shared.ApplicantWebsites;
import org.openapis.openapi.models.shared.ApplicantWebsitesTypeEnum;
import org.openapis.openapi.models.shared.CustomField;
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

            ApplicantsAddRequest req = new ApplicantsAddRequest(                new ApplicantInput() {{
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
                                anonymized = true;
                                applications = new String[]{{
                                    add("at"),
                                }};
                                archived = false;
                                birthday = LocalDate.parse("2000-08-12");
                                confidential = false;
                                coordinatorId = "12345";
                                coverLetter = "I submit this application to express my sincere interest in the API developer position. In the previous role, I was responsible for leadership and ...";
                                customFields = new org.openapis.openapi.models.shared.CustomField[]{{
                                    add(new CustomField("2389328923893298") {{
                                        description = "Employee Level";
                                        id = "2389328923893298";
                                        name = "employee_level";
                                        value = new String[]{{
                                            add("quod"),
                                            add("quod"),
                                        }};
                                    }}),
                                    add(new CustomField("2389328923893298") {{
                                        description = "Employee Level";
                                        id = "2389328923893298";
                                        name = "employee_level";
                                        value = 10;
                                    }}),
                                    add(new CustomField("2389328923893298") {{
                                        description = "Employee Level";
                                        id = "2389328923893298";
                                        name = "employee_level";
                                        value = true;
                                    }}),
                                    add(new CustomField("2389328923893298") {{
                                        description = "Employee Level";
                                        id = "2389328923893298";
                                        name = "employee_level";
                                        value = new String[]{{
                                            add("dicta"),
                                            add("nam"),
                                            add("officia"),
                                        }};
                                    }}),
                                }};
                                deleted = true;
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
                                    add(new Email("elon@musk.com") {{
                                        email = "elon@musk.com";
                                        id = "123";
                                        type = EmailTypeEnum.PRIMARY;
                                    }}),
                                }};
                                firstName = "Elon";
                                followers = new String[]{{
                                    add("deleniti"),
                                }};
                                headline = "PepsiCo, Inc, Central Perk";
                                initials = "EM";
                                lastName = "Musk";
                                middleName = "D.";
                                name = "Elon Musk";
                                ownerId = "54321";
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
                                photoUrl = "https://unavatar.io/elon-musk";
                                positionId = "123";
                                recordUrl = "https://app.intercom.io/contacts/12345";
                                recruiterId = "12345";
                                socialLinks = new org.openapis.openapi.models.shared.ApplicantSocialLinks[]{{
                                    add(new ApplicantSocialLinks("https://www.twitter.com/apideck-io") {{
                                        id = "12345";
                                        type = "twitter";
                                        url = "https://www.twitter.com/apideck-io";
                                    }}),
                                    add(new ApplicantSocialLinks("https://www.twitter.com/apideck-io") {{
                                        id = "12345";
                                        type = "twitter";
                                        url = "https://www.twitter.com/apideck-io";
                                    }}),
                                    add(new ApplicantSocialLinks("https://www.twitter.com/apideck-io") {{
                                        id = "12345";
                                        type = "twitter";
                                        url = "https://www.twitter.com/apideck-io";
                                    }}),
                                    add(new ApplicantSocialLinks("https://www.twitter.com/apideck-io") {{
                                        id = "12345";
                                        type = "twitter";
                                        url = "https://www.twitter.com/apideck-io";
                                    }}),
                                }};
                                sources = new String[]{{
                                    add("beatae"),
                                    add("commodi"),
                                    add("molestiae"),
                                }};
                                stageId = "12345";
                                tags = new String[]{{
                                    add("qui"),
                                    add("impedit"),
                                }};
                                title = "CEO";
                                websites = new org.openapis.openapi.models.shared.ApplicantWebsites[]{{
                                    add(new ApplicantWebsites("http://example.com") {{
                                        id = "12345";
                                        type = ApplicantWebsitesTypeEnum.PRIMARY;
                                        url = "http://example.com";
                                    }}),
                                    add(new ApplicantWebsites("http://example.com") {{
                                        id = "12345";
                                        type = ApplicantWebsitesTypeEnum.PRIMARY;
                                        url = "http://example.com";
                                    }}),
                                    add(new ApplicantWebsites("http://example.com") {{
                                        id = "12345";
                                        type = ApplicantWebsitesTypeEnum.PRIMARY;
                                        url = "http://example.com";
                                    }}),
                                }};
                            }};, "esse", "ipsum") {{
                raw = false;
                xApideckServiceId = "excepturi";
            }};            

            ApplicantsAddResponse res = sdk.applicants.applicantsAdd(req, new ApplicantsAddSecurity("aspernatur") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createApplicantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## applicantsAll

List applicants

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApplicantsAllRequest;
import org.openapis.openapi.models.operations.ApplicantsAllResponse;
import org.openapis.openapi.models.operations.ApplicantsAllSecurity;
import org.openapis.openapi.models.shared.JobsFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApplicantsAllRequest req = new ApplicantsAllRequest("perferendis", "ad") {{
                cursor = "natus";
                fields = "sed";
                filter = new JobsFilter() {{
                    jobId = "1234";
                }};;
                limit = 612096L;
                raw = false;
                xApideckServiceId = "dolor";
            }};            

            ApplicantsAllResponse res = sdk.applicants.applicantsAll(req, new ApplicantsAllSecurity("natus") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getApplicantsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## applicantsOne

Get applicant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApplicantsOneRequest;
import org.openapis.openapi.models.operations.ApplicantsOneResponse;
import org.openapis.openapi.models.operations.ApplicantsOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApplicantsOneRequest req = new ApplicantsOneRequest("laboriosam", "hic", "saepe") {{
                fields = "fuga";
                raw = false;
                xApideckServiceId = "in";
            }};            

            ApplicantsOneResponse res = sdk.applicants.applicantsOne(req, new ApplicantsOneSecurity("corporis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getApplicantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
