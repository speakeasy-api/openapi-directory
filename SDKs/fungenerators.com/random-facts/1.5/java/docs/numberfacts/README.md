# numberFacts

## Overview

Get a random interesting fact about a number.

Find out more
<http://fungenerators.com/api/facts#number>
### Available Operations

* [getFactNumbers](#getfactnumbers) - Get a random fact about a number

## getFactNumbers

Get a random fact about a number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFactNumbersRequest;
import org.openapis.openapi.models.operations.GetFactNumbersResponse;
import org.openapis.openapi.models.operations.GetFactNumbersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFactNumbersRequest req = new GetFactNumbersRequest(857946L);            

            GetFactNumbersResponse res = sdk.numberFacts.getFactNumbers(req, new GetFactNumbersSecurity("corrupti") {{
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
