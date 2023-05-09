# works

## Overview

Get Shakespeare Works via API

Find out more
<http://fungenerators.com/api/shakespeare/>
### Available Operations

* [getShakespeareQuote](#getshakespearequote) - Get a random Shakespeare quote.

## getShakespeareQuote

Get a random Shakespeare quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetShakespeareQuoteResponse;
import org.openapis.openapi.models.operations.GetShakespeareQuoteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetShakespeareQuoteResponse res = sdk.works.getShakespeareQuote(new GetShakespeareQuoteSecurity("iure") {{
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
