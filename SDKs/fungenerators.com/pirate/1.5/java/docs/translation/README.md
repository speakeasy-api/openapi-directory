# translation

## Overview

Translate to pirate lingo

Find out more
<http://fungenerators.com/api/pirate/>
### Available Operations

* [getPirateTranslate](#getpiratetranslate) - Translate from English to pirate.

## getPirateTranslate

Translate from English to pirate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPirateTranslateRequest;
import org.openapis.openapi.models.operations.GetPirateTranslateResponse;
import org.openapis.openapi.models.operations.GetPirateTranslateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPirateTranslateRequest req = new GetPirateTranslateRequest("deserunt");            

            GetPirateTranslateResponse res = sdk.translation.getPirateTranslate(req, new GetPirateTranslateSecurity("suscipit") {{
                xFungeneratorsApiSecret = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
