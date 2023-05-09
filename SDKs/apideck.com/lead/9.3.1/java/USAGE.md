<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LeadsAddRequest;
import org.openapis.openapi.models.operations.LeadsAddResponse;
import org.openapis.openapi.models.operations.LeadsAddSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.CustomField;
import org.openapis.openapi.models.shared.Email;
import org.openapis.openapi.models.shared.EmailTypeEnum;
import org.openapis.openapi.models.shared.LeadInput;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.PhoneNumberTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SocialLink;
import org.openapis.openapi.models.shared.Website;
import org.openapis.openapi.models.shared.WebsiteTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LeadsAddRequest req = new LeadsAddRequest(                new LeadInput("Spacex", "Elon Musk") {{
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
                                }};
                                companyId = "2";
                                contactId = "2";
                                currency = CurrencyEnum.USD;
                                customFields = new org.openapis.openapi.models.shared.CustomField[]{{
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
                                            add("nulla"),
                                            add("corrupti"),
                                            add("illum"),
                                        }};
                                    }}),
                                    add(new CustomField("2389328923893298") {{
                                        description = "Employee Level";
                                        id = "2389328923893298";
                                        name = "employee_level";
                                        value = 10;
                                    }}),
                                }};
                                description = "A thinker";
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
                                fax = "+12129876543";
                                firstName = "Elon";
                                language = "EN";
                                lastName = "Musk";
                                leadSource = "Cold Call";
                                monetaryAmount = 75000;
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
                                }};
                                prefix = "Sir";
                                socialLinks = new org.openapis.openapi.models.shared.SocialLink[]{{
                                    add(new SocialLink("https://www.twitter.com/apideck-io") {{
                                        id = "12345";
                                        type = "twitter";
                                        url = "https://www.twitter.com/apideck-io";
                                    }}),
                                    add(new SocialLink("https://www.twitter.com/apideck-io") {{
                                        id = "12345";
                                        type = "twitter";
                                        url = "https://www.twitter.com/apideck-io";
                                    }}),
                                }};
                                status = "New";
                                tags = new String[]{{
                                    add("magnam"),
                                    add("debitis"),
                                }};
                                title = "CEO";
                                websites = new org.openapis.openapi.models.shared.Website[]{{
                                    add(new Website("http://example.com") {{
                                        id = "12345";
                                        type = WebsiteTypeEnum.PRIMARY;
                                        url = "http://example.com";
                                    }}),
                                }};
                            }};, "delectus", "tempora") {{
                raw = false;
                xApideckServiceId = "suscipit";
            }};            

            LeadsAddResponse res = sdk.leads.leadsAdd(req, new LeadsAddSecurity("molestiae") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createLeadResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->