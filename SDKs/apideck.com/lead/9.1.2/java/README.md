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
import org.openapis.openapi.models.operations.LeadsAddSecurity;
import org.openapis.openapi.models.operations.LeadsAddQueryParams;
import org.openapis.openapi.models.operations.LeadsAddHeaders;
import org.openapis.openapi.models.operations.LeadsAddRequest;
import org.openapis.openapi.models.operations.LeadsAddResponse;
import org.openapis.openapi.models.shared.LeadInput;
import org.openapis.openapi.models.shared.WebsiteTypeEnum;
import org.openapis.openapi.models.shared.Website;
import org.openapis.openapi.models.shared.SocialLink;
import org.openapis.openapi.models.shared.PhoneNumberTypeEnum;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.EmailTypeEnum;
import org.openapis.openapi.models.shared.Email;
import org.openapis.openapi.models.shared.CustomField;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LeadsAddRequest req = new LeadsAddRequest() {{
                security = new LeadsAddSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new LeadsAddQueryParams() {{
                    raw = false;
                }};
                headers = new LeadsAddHeaders() {{
                    xApideckAppId = "corrupti";
                    xApideckConsumerId = "provident";
                    xApideckServiceId = "distinctio";
                }};
                request = new LeadInput() {{
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
                    companyId = "2";
                    companyName = "Spacex";
                    contactId = "2";
                    currency = "USD";
                    customFields = new org.openapis.openapi.models.shared.CustomField[]{{
                        add(new CustomField() {{
                            description = "Employee Level";
                            id = "2389328923893298";
                            name = "employee_level";
                            value = new String[]{{
                                add("illum"),
                                add("vel"),
                                add("error"),
                            }};
                        }}),
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
                            value = 10;
                        }}),
                    }};
                    description = "A thinker";
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
                    fax = "+12129876543";
                    firstName = "Elon";
                    language = "EN";
                    lastName = "Musk";
                    leadSource = "Cold Call";
                    monetaryAmount = 75000;
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
                        add(new PhoneNumber() {{
                            areaCode = "323";
                            countryCode = "1";
                            extension = "105";
                            id = "12345";
                            number = "111-111-1111";
                            type = "primary";
                        }}),
                    }};
                    prefix = "Sir";
                    socialLinks = new org.openapis.openapi.models.shared.SocialLink[]{{
                        add(new SocialLink() {{
                            id = "12345";
                            type = "twitter";
                            url = "https://www.twitter.com/apideck-io";
                        }}),
                        add(new SocialLink() {{
                            id = "12345";
                            type = "twitter";
                            url = "https://www.twitter.com/apideck-io";
                        }}),
                        add(new SocialLink() {{
                            id = "12345";
                            type = "twitter";
                            url = "https://www.twitter.com/apideck-io";
                        }}),
                        add(new SocialLink() {{
                            id = "12345";
                            type = "twitter";
                            url = "https://www.twitter.com/apideck-io";
                        }}),
                    }};
                    status = "New";
                    tags = new String[]{{
                        add("delectus"),
                    }};
                    title = "CEO";
                    websites = new org.openapis.openapi.models.shared.Website[]{{
                        add(new Website() {{
                            id = "12345";
                            type = "primary";
                            url = "http://example.com";
                        }}),
                        add(new Website() {{
                            id = "12345";
                            type = "primary";
                            url = "http://example.com";
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


### leads

* `leadsAdd` - Create lead
* `leadsAll` - List leads
* `leadsDelete` - Delete lead
* `leadsOne` - Get lead
* `leadsUpdate` - Update lead
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
