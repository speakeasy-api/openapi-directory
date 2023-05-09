# collection

### Available Operations

* [collectionListingsAll](#collectionlistingsall) - List collection listings
* [collectionsAll](#collectionsall) - List collections
* [collectionsOne](#collectionsone) - Get collection

## collectionListingsAll

List collection listings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionListingsAllRequest;
import org.openapis.openapi.models.operations.CollectionListingsAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionListingsAllRequest req = new CollectionListingsAllRequest("iure", "magnam") {{
                cursor = "debitis";
                limit = 56713L;
            }};            

            CollectionListingsAllResponse res = sdk.collection.collectionListingsAll(req);

            if (res.getListingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## collectionsAll

List collections

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsAllRequest;
import org.openapis.openapi.models.operations.CollectionsAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsAllRequest req = new CollectionsAllRequest("delectus") {{
                cursor = "tempora";
                limit = 383441L;
            }};            

            CollectionsAllResponse res = sdk.collection.collectionsAll(req);

            if (res.getCollectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## collectionsOne

Get collection

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsOneRequest;
import org.openapis.openapi.models.operations.CollectionsOneResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsOneRequest req = new CollectionsOneRequest("molestiae", "minus");            

            CollectionsOneResponse res = sdk.collection.collectionsOne(req);

            if (res.getCollectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
