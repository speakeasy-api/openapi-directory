# exude

### Available Operations

* [filterFileDataStoppings](#filterfiledatastoppings) - Filter the stopping words from the provided input file
* [filterStoppings](#filterstoppings) - Filter the stopping words from the provided input data or links

## filterFileDataStoppings

Filter the stopping words from the provided input file

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FilterFileDataStoppingsRequest;
import org.openapis.openapi.models.operations.FilterFileDataStoppingsRequestBody;
import org.openapis.openapi.models.operations.FilterFileDataStoppingsRequestBodyFile;
import org.openapis.openapi.models.operations.FilterFileDataStoppingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FilterFileDataStoppingsRequest req = new FilterFileDataStoppingsRequest(                new FilterFileDataStoppingsRequestBody() {{
                                file = new FilterFileDataStoppingsRequestBodyFile("quibusdam".getBytes(), "unde");;
                            }};, "nulla");            

            FilterFileDataStoppingsResponse res = sdk.exude.filterFileDataStoppings(req);

            if (res.exudeResponseBean != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## filterStoppings

Filter the stopping words from the provided input data or links

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FilterStoppingsRequest;
import org.openapis.openapi.models.operations.FilterStoppingsResponse;
import org.openapis.openapi.models.shared.ExudeBean;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FilterStoppingsRequest req = new FilterStoppingsRequest(                new ExudeBean() {{
                                data = "corrupti";
                                links = new String[]{{
                                    add("vel"),
                                    add("error"),
                                    add("deserunt"),
                                    add("suscipit"),
                                }};
                            }};, "iure");            

            FilterStoppingsResponse res = sdk.exude.filterStoppings(req);

            if (res.exudeResponseBean != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
