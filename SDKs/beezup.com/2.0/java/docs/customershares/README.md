# customerShares

### Available Operations

* [deleteStoreShare](#deletestoreshare) - Delete a share of a store to another user
* [getStoreShares](#getstoreshares) - Get shares related to this store
* [shareStore](#sharestore) - Share a store to another user

## deleteStoreShare

Delete a share of a store to another user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteStoreShareRequest;
import org.openapis.openapi.models.operations.DeleteStoreShareResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteStoreShareRequest req = new DeleteStoreShareRequest("similique", "culpa");            

            DeleteStoreShareResponse res = sdk.customerShares.deleteStoreShare(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStoreShares

Get shares related to this store

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStoreSharesRequest;
import org.openapis.openapi.models.operations.GetStoreSharesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStoreSharesRequest req = new GetStoreSharesRequest("aliquid") {{
                ifNoneMatch = "tenetur";
            }};            

            GetStoreSharesResponse res = sdk.customerShares.getStoreShares(req);

            if (res.storeShares != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## shareStore

Share a store to another user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShareStoreRequest;
import org.openapis.openapi.models.operations.ShareStoreResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ShareStoreRequest req = new ShareStoreRequest("humphray.bogart@yahoo.ma", "quae");            

            ShareStoreResponse res = sdk.customerShares.shareStore(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
