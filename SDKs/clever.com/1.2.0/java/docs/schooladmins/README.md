# schoolAdmins

### Available Operations

* [getSchoolAdmin](#getschooladmin) - Returns a specific school admin
* [getSchoolAdmins](#getschooladmins) - Returns a list of school admins
* [getSchoolsForSchoolAdmin](#getschoolsforschooladmin) - Returns the schools for a school admin

## getSchoolAdmin

Returns a specific school admin

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchoolAdminRequest;
import org.openapis.openapi.models.operations.GetSchoolAdminResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSchoolAdminRequest req = new GetSchoolAdminRequest("occaecati") {{
                include = "fugit";
            }};            

            GetSchoolAdminResponse res = sdk.schoolAdmins.getSchoolAdmin(req);

            if (res.schoolAdminResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchoolAdmins

Returns a list of school admins

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchoolAdminsRequest;
import org.openapis.openapi.models.operations.GetSchoolAdminsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSchoolAdminsRequest req = new GetSchoolAdminsRequest() {{
                endingBefore = "hic";
                limit = 758616L;
                startingAfter = "totam";
                where = "beatae";
            }};            

            GetSchoolAdminsResponse res = sdk.schoolAdmins.getSchoolAdmins(req);

            if (res.schoolAdminsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchoolsForSchoolAdmin

Returns the schools for a school admin

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchoolsForSchoolAdminRequest;
import org.openapis.openapi.models.operations.GetSchoolsForSchoolAdminResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSchoolsForSchoolAdminRequest req = new GetSchoolsForSchoolAdminRequest("molestiae") {{
                endingBefore = "modi";
                limit = 186332L;
                startingAfter = "impedit";
            }};            

            GetSchoolsForSchoolAdminResponse res = sdk.schoolAdmins.getSchoolsForSchoolAdmin(req);

            if (res.schoolsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
