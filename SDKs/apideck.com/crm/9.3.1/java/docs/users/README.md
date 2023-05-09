# users

### Available Operations

* [usersAdd](#usersadd) - Create user
* [usersAll](#usersall) - List users
* [usersDelete](#usersdelete) - Delete user
* [usersOne](#usersone) - Get user
* [usersUpdate](#usersupdate) - Update user

## usersAdd

Create user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersAddRequest;
import org.openapis.openapi.models.operations.UsersAddResponse;
import org.openapis.openapi.models.operations.UsersAddSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.Email;
import org.openapis.openapi.models.shared.EmailTypeEnum;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.PhoneNumberTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersAddRequest req = new UsersAddRequest(                new UserInput(                new org.openapis.openapi.models.shared.Email[]{{
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
                                            }}) {{
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
                                }};
                                companyName = "SpaceX";
                                department = "R&D";
                                description = "A description";
                                division = "Europe";
                                employeeNumber = "123456-AB";
                                firstName = "Elon";
                                image = "https://logo.clearbit.com/spacex.com?s=128";
                                language = "EN";
                                lastName = "Musk";
                                parentId = "54321";
                                password = "supersecretpassword";
                                phoneNumbers = new org.openapis.openapi.models.shared.PhoneNumber[]{{
                                    add(new PhoneNumber("111-111-1111") {{
                                        areaCode = "323";
                                        countryCode = "1";
                                        extension = "105";
                                        id = "12345";
                                        number = "111-111-1111";
                                        type = PhoneNumberTypeEnum.PRIMARY;
                                    }}),
                                }};
                                status = "active";
                                title = "CEO";
                                username = "masterofcoin";
                            }};, "perferendis", "dolores") {{
                raw = false;
                xApideckServiceId = "minus";
            }};            

            UsersAddResponse res = sdk.users.usersAdd(req, new UsersAddSecurity("quam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersAll

List users

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersAllRequest;
import org.openapis.openapi.models.operations.UsersAllResponse;
import org.openapis.openapi.models.operations.UsersAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersAllRequest req = new UsersAllRequest("dolor", "vero") {{
                cursor = "nostrum";
                fields = "hic";
                limit = 928082L;
                raw = false;
                xApideckServiceId = "omnis";
            }};            

            UsersAllResponse res = sdk.users.usersAll(req, new UsersAllSecurity("facilis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getUsersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersDelete

Delete user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersDeleteRequest;
import org.openapis.openapi.models.operations.UsersDeleteResponse;
import org.openapis.openapi.models.operations.UsersDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersDeleteRequest req = new UsersDeleteRequest("perspiciatis", "voluptatem", "porro") {{
                raw = false;
                xApideckServiceId = "consequuntur";
            }};            

            UsersDeleteResponse res = sdk.users.usersDelete(req, new UsersDeleteSecurity("blanditiis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersOne

Get user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersOneRequest;
import org.openapis.openapi.models.operations.UsersOneResponse;
import org.openapis.openapi.models.operations.UsersOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersOneRequest req = new UsersOneRequest("error", "eaque", "occaecati") {{
                fields = "rerum";
                raw = false;
                xApideckServiceId = "adipisci";
            }};            

            UsersOneResponse res = sdk.users.usersOne(req, new UsersOneSecurity("asperiores") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersUpdate

Update user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersUpdateRequest;
import org.openapis.openapi.models.operations.UsersUpdateResponse;
import org.openapis.openapi.models.operations.UsersUpdateSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.Email;
import org.openapis.openapi.models.shared.EmailTypeEnum;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.PhoneNumberTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersUpdateRequest req = new UsersUpdateRequest(                new UserInput(                new org.openapis.openapi.models.shared.Email[]{{
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
                                                add(new Email("elon@musk.com") {{
                                                    email = "elon@musk.com";
                                                    id = "123";
                                                    type = EmailTypeEnum.PRIMARY;
                                                }}),
                                            }}) {{
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
                                }};
                                companyName = "SpaceX";
                                department = "R&D";
                                description = "A description";
                                division = "Europe";
                                employeeNumber = "123456-AB";
                                firstName = "Elon";
                                image = "https://logo.clearbit.com/spacex.com?s=128";
                                language = "EN";
                                lastName = "Musk";
                                parentId = "54321";
                                password = "supersecretpassword";
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
                                status = "active";
                                title = "CEO";
                                username = "masterofcoin";
                            }};, "dolorum", "deleniti", "pariatur") {{
                raw = false;
                xApideckServiceId = "provident";
            }};            

            UsersUpdateResponse res = sdk.users.usersUpdate(req, new UsersUpdateSecurity("nobis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
