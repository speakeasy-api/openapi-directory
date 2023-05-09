# timeline

### Available Operations

* [getIncidents](#getincidents) - Get incidents logs.

## getIncidents

By default, provide all incidents. Results are paginated. Some filters can be set via query parameters.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIncidentsRequest;
import org.openapis.openapi.models.operations.GetIncidentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIncidentsRequest req = new GetIncidentsRequest() {{
                endDate = "aperiam";
                id = 901483L;
                page = 253642L;
                size = 329935L;
                startDate = "in";
                state = "officiis";
                weboobId = "beatae";
            }};            

            GetIncidentsResponse res = sdk.timeline.getIncidents(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
