# users

### Available Operations

* [collectionUsersAll](#collectionusersall) - List Users
* [collectionUsersOne](#collectionusersone) - Get user

## collectionUsersAll

List Users

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionUsersAllRequest;
import org.openapis.openapi.models.operations.CollectionUsersAllResponse;
import org.openapis.openapi.models.operations.CollectionUsersAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionUsersAllRequest req = new CollectionUsersAllRequest("apideck-io", "omnis", "nemo") {{
                cursor = "minima";
                fields = "excepturi";
                limit = 38425L;
                raw = false;
                xApideckServiceId = "iure";
            }};            

            CollectionUsersAllResponse res = sdk.users.collectionUsersAll(req, new CollectionUsersAllSecurity("culpa") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getCollectionUsersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## collectionUsersOne

Get user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionUsersOneRequest;
import org.openapis.openapi.models.operations.CollectionUsersOneResponse;
import org.openapis.openapi.models.operations.CollectionUsersOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionUsersOneRequest req = new CollectionUsersOneRequest("apideck-io", "doloribus", "sapiente", "architecto") {{
                fields = "mollitia";
                raw = false;
                xApideckServiceId = "dolorem";
            }};            

            CollectionUsersOneResponse res = sdk.users.collectionUsersOne(req, new CollectionUsersOneSecurity("culpa") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getCollectionUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
