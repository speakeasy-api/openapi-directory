# publicListOfValuesLOV

### Available Operations

* [getPublicListOfValues](#getpubliclistofvalues) - Get the list of values related to this list name
* [getPublicLovIndex](#getpubliclovindex) - Get all list names

## getPublicListOfValues

Get the list of values related to this list name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPublicListOfValuesRequest;
import org.openapis.openapi.models.operations.GetPublicListOfValuesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPublicListOfValuesRequest req = new GetPublicListOfValuesRequest("accusamus") {{
                acceptLanguage = new String[]{{
                    add("distinctio"),
                    add("omnis"),
                    add("delectus"),
                    add("minima"),
                }};
                ifNoneMatch = "praesentium";
            }};            

            GetPublicListOfValuesResponse res = sdk.publicListOfValuesLOV.getPublicListOfValues(req);

            if (res.publicListOfValuesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPublicLovIndex

Get all list names

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPublicLovIndexRequest;
import org.openapis.openapi.models.operations.GetPublicLovIndexResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPublicLovIndexRequest req = new GetPublicLovIndexRequest() {{
                ifNoneMatch = "maxime";
            }};            

            GetPublicLovIndexResponse res = sdk.publicListOfValuesLOV.getPublicLovIndex(req);

            if (res.publicLovIndex != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
