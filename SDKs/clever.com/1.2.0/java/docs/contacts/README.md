# contacts

### Available Operations

* [getContact](#getcontact) - Returns a specific student contact
* [getContacts](#getcontacts) - Returns a list of student contacts
* [getDistrictForStudentContact](#getdistrictforstudentcontact) - Returns the district for a student contact
* [getStudentForContact](#getstudentforcontact) - Returns the student for a student contact

## getContact

Returns a specific student contact

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContactRequest;
import org.openapis.openapi.models.operations.GetContactResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetContactRequest req = new GetContactRequest("quibusdam");            

            GetContactResponse res = sdk.contacts.getContact(req);

            if (res.studentContactResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContacts

Returns a list of student contacts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContactsRequest;
import org.openapis.openapi.models.operations.GetContactsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetContactsRequest req = new GetContactsRequest() {{
                endingBefore = "nulla";
                limit = 544883L;
                startingAfter = "illum";
            }};            

            GetContactsResponse res = sdk.contacts.getContacts(req);

            if (res.studentContactsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDistrictForStudentContact

Returns the district for a student contact

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistrictForStudentContactRequest;
import org.openapis.openapi.models.operations.GetDistrictForStudentContactResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetDistrictForStudentContactRequest req = new GetDistrictForStudentContactRequest("error");            

            GetDistrictForStudentContactResponse res = sdk.contacts.getDistrictForStudentContact(req);

            if (res.districtResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStudentForContact

Returns the student for a student contact

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStudentForContactRequest;
import org.openapis.openapi.models.operations.GetStudentForContactResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetStudentForContactRequest req = new GetStudentForContactRequest("suscipit");            

            GetStudentForContactResponse res = sdk.contacts.getStudentForContact(req);

            if (res.studentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
