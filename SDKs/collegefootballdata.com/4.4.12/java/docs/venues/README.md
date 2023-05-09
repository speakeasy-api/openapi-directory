# venues

## Overview

Information about venues

### Available Operations

* [getVenues](#getvenues) - Arena and venue information

## getVenues

Venues

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVenuesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetVenuesResponse res = sdk.venues.getVenues();

            if (res.venues != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
