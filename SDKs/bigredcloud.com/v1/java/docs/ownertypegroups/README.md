# ownerTypeGroups

### Available Operations

* [ownerTypeGroupsGet](#ownertypegroupsget) - Returns a list of global Owner Type Groups. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

## ownerTypeGroupsGet

Returns a list of global Owner Type Groups. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OwnerTypeGroupsGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OwnerTypeGroupsGetResponse res = sdk.ownerTypeGroups.ownerTypeGroupsGet();

            if (res.pageResultOwnerTypeGroupDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
