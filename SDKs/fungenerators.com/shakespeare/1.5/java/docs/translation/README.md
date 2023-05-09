# translation

## Overview

Translate to Shakespeare English

Find out more
<http://fungenerators.com/api/shakespeare/>
### Available Operations

* [getShakespeareTranslate](#getshakespearetranslate) - Translate from English to Shakespeare English.

## getShakespeareTranslate

Translate from English to Shakespeare English.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetShakespeareTranslateRequest;
import org.openapis.openapi.models.operations.GetShakespeareTranslateResponse;
import org.openapis.openapi.models.operations.GetShakespeareTranslateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetShakespeareTranslateRequest req = new GetShakespeareTranslateRequest("deserunt");            

            GetShakespeareTranslateResponse res = sdk.translation.getShakespeareTranslate(req, new GetShakespeareTranslateSecurity("suscipit") {{
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
