# SDK

## Overview

Analyzes a password and calculates its entropy.

### Available Operations

* [getAbout](#getabout) - Metadata about this API&#58; version number, release date and available languages.

Metadata requests are NOT billed.

* [getEc](#getec) - The entropy calculator - alias ec -, analyzes a password and calculates its entropy.

Entropy calculator requests are billed.


## getAbout

Metadata about this API&#58; version number, release date and available languages.

Metadata requests are NOT billed.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAboutRequest;
import org.openapis.openapi.models.operations.GetAboutResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAboutRequest req = new GetAboutRequest() {{
                outputFormat = "provident";
            }};            

            GetAboutResponse res = sdk.sdk.getAbout(req);

            if (res.about != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEc

The entropy calculator - alias ec -, analyzes a password and calculates its entropy.

Entropy calculator requests are billed.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEcRequest;
import org.openapis.openapi.models.operations.GetEcResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEcRequest req = new GetEcRequest("distinctio") {{
                outputFormat = "quibusdam";
                penalty = 6027.63;
                reqId = "nulla";
            }};            

            GetEcResponse res = sdk.sdk.getEc(req);

            if (res.ec != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
