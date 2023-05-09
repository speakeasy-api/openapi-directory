# listing

### Available Operations

* [listingsAll](#listingsall) - List listings
* [listingsOne](#listingsone) - Get listing

## listingsAll

List listings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListingsAllRequest;
import org.openapis.openapi.models.operations.ListingsAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListingsAllRequest req = new ListingsAllRequest("voluptatum") {{
                cursor = "iusto";
                externalId = "excepturi";
                limit = 392785L;
            }};            

            ListingsAllResponse res = sdk.listing.listingsAll(req);

            if (res.getListingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listingsOne

Get listing

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListingsOneRequest;
import org.openapis.openapi.models.operations.ListingsOneResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListingsOneRequest req = new ListingsOneRequest("recusandae", "temporibus");            

            ListingsOneResponse res = sdk.listing.listingsOne(req);

            if (res.getListingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
