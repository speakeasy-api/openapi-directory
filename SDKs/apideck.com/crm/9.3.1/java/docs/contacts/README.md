# contacts

### Available Operations

* [contactsAdd](#contactsadd) - Create contact
* [contactsAll](#contactsall) - List contacts
* [contactsDelete](#contactsdelete) - Delete contact
* [contactsOne](#contactsone) - Get contact
* [contactsUpdate](#contactsupdate) - Update contact

## contactsAdd

Create contact

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactsAddRequest;
import org.openapis.openapi.models.operations.ContactsAddResponse;
import org.openapis.openapi.models.operations.ContactsAddSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.ContactGenderEnum;
import org.openapis.openapi.models.shared.ContactInput;
import org.openapis.openapi.models.shared.ContactTypeEnum;
import org.openapis.openapi.models.shared.CustomField;
import org.openapis.openapi.models.shared.Email;
import org.openapis.openapi.models.shared.EmailTypeEnum;
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

            ContactsAddRequest req = new ContactsAddRequest(                new ContactInput("Elon Musk") {{
                                active = true;
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
                                birthday = "2000-08-12";
                                companyId = "23456";
                                companyName = "23456";
                                currentBalance = 10.5;
                                customFields = new org.openapis.openapi.models.shared.CustomField[]{{
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
                                        value = "Uses Salesforce and Marketo";
                                    }}),
                                    add(new CustomField("2389328923893298") {{
                                        description = "Employee Level";
                                        id = "2389328923893298";
                                        name = "employee_level";
                                        value = new String[]{{
                                            add("tenetur"),
                                        }};
                                    }}),
                                }};
                                department = "Engineering";
                                description = "Internal champion";
                                emailDomain = "gmail.com";
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
                                }};
                                fax = "+12129876543";
                                firstName = "Elon";
                                gender = ContactGenderEnum.FEMALE;
                                image = "https://unavatar.io/elon-musk";
                                language = "EN";
                                lastName = "Musk";
                                leadId = "34567";
                                leadSource = "Cold Call";
                                middleName = "D.";
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
                                photoUrl = "https://unavatar.io/elon-musk";
                                prefix = "Mr.";
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
                                status = "open";
                                suffix = "PhD";
                                tags = new String[]{{
                                    add("quasi"),
                                }};
                                title = "CEO";
                                type = ContactTypeEnum.PERSONAL;
                                websites = new org.openapis.openapi.models.shared.Website[]{{
                                    add(new Website("http://example.com") {{
                                        id = "12345";
                                        type = WebsiteTypeEnum.PRIMARY;
                                        url = "http://example.com";
                                    }}),
                                    add(new Website("http://example.com") {{
                                        id = "12345";
                                        type = WebsiteTypeEnum.PRIMARY;
                                        url = "http://example.com";
                                    }}),
                                    add(new Website("http://example.com") {{
                                        id = "12345";
                                        type = WebsiteTypeEnum.PRIMARY;
                                        url = "http://example.com";
                                    }}),
                                }};
                            }};, "temporibus", "laborum") {{
                raw = false;
                xApideckServiceId = "quasi";
            }};            

            ContactsAddResponse res = sdk.contacts.contactsAdd(req, new ContactsAddSecurity("reiciendis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createContactResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactsAll

List contacts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactsAllRequest;
import org.openapis.openapi.models.operations.ContactsAllResponse;
import org.openapis.openapi.models.operations.ContactsAllSecurity;
import org.openapis.openapi.models.shared.ContactsFilter;
import org.openapis.openapi.models.shared.ContactsSort;
import org.openapis.openapi.models.shared.ContactsSortByEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortDirectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactsAllRequest req = new ContactsAllRequest("voluptatibus", "vero") {{
                cursor = "nihil";
                fields = "praesentium";
                filter = new ContactsFilter() {{
                    companyId = "12345";
                    email = "elon@tesla.com";
                    firstName = "Elon";
                    lastName = "Musk";
                    name = "Elon Musk";
                }};;
                limit = 976762L;
                raw = false;
                sort = new ContactsSort() {{
                    by = ContactsSortByEnum.CREATED_AT;
                    direction = SortDirectionEnum.ASC;
                }};;
                xApideckServiceId = "omnis";
            }};            

            ContactsAllResponse res = sdk.contacts.contactsAll(req, new ContactsAllSecurity("voluptate") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getContactsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactsDelete

Delete contact

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactsDeleteRequest;
import org.openapis.openapi.models.operations.ContactsDeleteResponse;
import org.openapis.openapi.models.operations.ContactsDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactsDeleteRequest req = new ContactsDeleteRequest("cum", "perferendis", "doloremque") {{
                raw = false;
                xApideckServiceId = "reprehenderit";
            }};            

            ContactsDeleteResponse res = sdk.contacts.contactsDelete(req, new ContactsDeleteSecurity("ut") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteContactResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactsOne

Get contact

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactsOneRequest;
import org.openapis.openapi.models.operations.ContactsOneResponse;
import org.openapis.openapi.models.operations.ContactsOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactsOneRequest req = new ContactsOneRequest("maiores", "dicta", "corporis") {{
                fields = "dolore";
                raw = false;
                xApideckServiceId = "iusto";
            }};            

            ContactsOneResponse res = sdk.contacts.contactsOne(req, new ContactsOneSecurity("dicta") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getContactResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactsUpdate

Update contact

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactsUpdateRequest;
import org.openapis.openapi.models.operations.ContactsUpdateResponse;
import org.openapis.openapi.models.operations.ContactsUpdateSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.ContactGenderEnum;
import org.openapis.openapi.models.shared.ContactInput;
import org.openapis.openapi.models.shared.ContactTypeEnum;
import org.openapis.openapi.models.shared.CustomField;
import org.openapis.openapi.models.shared.Email;
import org.openapis.openapi.models.shared.EmailTypeEnum;
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

            ContactsUpdateRequest req = new ContactsUpdateRequest(                new ContactInput("Elon Musk") {{
                                active = true;
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
                                birthday = "2000-08-12";
                                companyId = "23456";
                                companyName = "23456";
                                currentBalance = 10.5;
                                customFields = new org.openapis.openapi.models.shared.CustomField[]{{
                                    add(new CustomField("2389328923893298") {{
                                        description = "Employee Level";
                                        id = "2389328923893298";
                                        name = "employee_level";
                                        value = new String[]{{
                                            add("repudiandae"),
                                            add("quae"),
                                        }};
                                    }}),
                                    add(new CustomField("2389328923893298") {{
                                        description = "Employee Level";
                                        id = "2389328923893298";
                                        name = "employee_level";
                                        value = "Uses Salesforce and Marketo";
                                    }}),
                                }};
                                department = "Engineering";
                                description = "Internal champion";
                                emailDomain = "gmail.com";
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
                                gender = ContactGenderEnum.FEMALE;
                                image = "https://unavatar.io/elon-musk";
                                language = "EN";
                                lastName = "Musk";
                                leadId = "34567";
                                leadSource = "Cold Call";
                                middleName = "D.";
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
                                photoUrl = "https://unavatar.io/elon-musk";
                                prefix = "Mr.";
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
                                    add(new SocialLink("https://www.twitter.com/apideck-io") {{
                                        id = "12345";
                                        type = "twitter";
                                        url = "https://www.twitter.com/apideck-io";
                                    }}),
                                }};
                                status = "open";
                                suffix = "PhD";
                                tags = new String[]{{
                                    add("modi"),
                                    add("praesentium"),
                                    add("rem"),
                                    add("voluptates"),
                                }};
                                title = "CEO";
                                type = ContactTypeEnum.PERSONAL;
                                websites = new org.openapis.openapi.models.shared.Website[]{{
                                    add(new Website("http://example.com") {{
                                        id = "12345";
                                        type = WebsiteTypeEnum.PRIMARY;
                                        url = "http://example.com";
                                    }}),
                                }};
                            }};, "repudiandae", "sint", "veritatis") {{
                raw = false;
                xApideckServiceId = "itaque";
            }};            

            ContactsUpdateResponse res = sdk.contacts.contactsUpdate(req, new ContactsUpdateSecurity("incidunt") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateContactResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
