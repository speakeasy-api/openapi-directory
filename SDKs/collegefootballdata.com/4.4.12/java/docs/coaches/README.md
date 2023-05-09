# coaches

## Overview

Information about coaches

### Available Operations

* [getCoaches](#getcoaches) - Coaching records and history

## getCoaches

Coaching history

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCoachesRequest;
import org.openapis.openapi.models.operations.GetCoachesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCoachesRequest req = new GetCoachesRequest() {{
                firstName = "Jasper";
                lastName = "Schiller";
                maxYear = 812169L;
                minYear = 528895L;
                team = "iusto";
                year = 568045L;
            }};            

            GetCoachesResponse res = sdk.coaches.getCoaches(req);

            if (res.coaches != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
