# conferences

## Overview

Conference information

### Available Operations

* [getConferences](#getconferences) - Conferences

## getConferences

Get conference list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConferencesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConferencesResponse res = sdk.conferences.getConferences();

            if (res.conferences != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
