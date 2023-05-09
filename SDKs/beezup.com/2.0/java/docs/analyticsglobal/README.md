# analyticsGlobal

### Available Operations

* [analyticsIndex](#analyticsindex) - Get the Analytics API operation index
* [analyticsStoreIndex](#analyticsstoreindex) - Get the Analytics API operation index for one store

## analyticsIndex

Get the Analytics API operation index

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsIndexResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsIndexResponse res = sdk.analyticsGlobal.analyticsIndex();

            if (res.analyticsIndex != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsStoreIndex

Get the Analytics API operation index for one store

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsStoreIndexRequest;
import org.openapis.openapi.models.operations.AnalyticsStoreIndexResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsStoreIndexRequest req = new AnalyticsStoreIndexRequest("corrupti");            

            AnalyticsStoreIndexResponse res = sdk.analyticsGlobal.analyticsStoreIndex(req);

            if (res.analyticsStoreIndex != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
