# tracking

## Overview

Carrier Independent Tracking

### Available Operations

* [getTrack](#gettrack) - Tracking

## getTrack

Get uniformed tracking events for any package, this response is carrier independent. Please note, an API Key is required for throttling purposes, please contact your success manager for details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrackRequest;
import org.openapis.openapi.models.operations.GetTrackResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTrackRequest req = new GetTrackRequest() {{
                trackingNumber = "cum";
            }};            

            GetTrackResponse res = sdk.tracking.getTrack(req);

            if (res.trackingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
