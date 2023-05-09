# districtAdmins

### Available Operations

* [getDistrictAdmin](#getdistrictadmin) - Returns a specific district admin
* [getDistrictAdmins](#getdistrictadmins) - Returns a list of district admins

## getDistrictAdmin

Returns a specific district admin

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistrictAdminRequest;
import org.openapis.openapi.models.operations.GetDistrictAdminResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetDistrictAdminRequest req = new GetDistrictAdminRequest("magnam");            

            GetDistrictAdminResponse res = sdk.districtAdmins.getDistrictAdmin(req);

            if (res.districtAdminResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDistrictAdmins

Returns a list of district admins

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistrictAdminsRequest;
import org.openapis.openapi.models.operations.GetDistrictAdminsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetDistrictAdminsRequest req = new GetDistrictAdminsRequest() {{
                endingBefore = "ipsa";
                showLinks = "delectus";
                startingAfter = "tempora";
            }};            

            GetDistrictAdminsResponse res = sdk.districtAdmins.getDistrictAdmins(req);

            if (res.districtAdminsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
