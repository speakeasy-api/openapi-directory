# userListOfValuesLOV

### Available Operations

* [getUserListOfValues](#getuserlistofvalues) - Get the list of values related to this list name
* [getUserLovIndex](#getuserlovindex) - Get all list names

## getUserListOfValues

Get the list of values related to this list name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserListOfValuesRequest;
import org.openapis.openapi.models.operations.GetUserListOfValuesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserListOfValuesRequest req = new GetUserListOfValuesRequest("magnam") {{
                acceptLanguage = new String[]{{
                    add("quos"),
                    add("commodi"),
                    add("itaque"),
                    add("commodi"),
                }};
                ifNoneMatch = "totam";
            }};            

            GetUserListOfValuesResponse res = sdk.userListOfValuesLOV.getUserListOfValues(req);

            if (res.userListOfValuesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserLovIndex

Get all list names

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserLovIndexResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserLovIndexResponse res = sdk.userListOfValuesLOV.getUserLovIndex();

            if (res.userLovIndex != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
