# randomRiddle

## Overview

Generate Random Riddles

Find out more
<http://fungenerators.com/api/riddle>
### Available Operations

* [getRiddleRandom](#getriddlerandom) - Get a random riddle for a given category(optional)
* [getRiddleSearch](#getriddlesearch) - Search for random riddle which has the text in the query, for a given category(optional).

## getRiddleRandom

Get a random riddle for a given category(optional)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRiddleRandomRequest;
import org.openapis.openapi.models.operations.GetRiddleRandomResponse;
import org.openapis.openapi.models.operations.GetRiddleRandomSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRiddleRandomRequest req = new GetRiddleRandomRequest() {{
                category = "debitis";
            }};            

            GetRiddleRandomResponse res = sdk.randomRiddle.getRiddleRandom(req, new GetRiddleRandomSecurity("ipsa") {{
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

## getRiddleSearch

Search for random riddle which has the text in the query, for a given category(optional).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRiddleSearchRequest;
import org.openapis.openapi.models.operations.GetRiddleSearchResponse;
import org.openapis.openapi.models.operations.GetRiddleSearchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRiddleSearchRequest req = new GetRiddleSearchRequest() {{
                category = "delectus";
                query = "tempora";
            }};            

            GetRiddleSearchResponse res = sdk.randomRiddle.getRiddleSearch(req, new GetRiddleSearchSecurity("suscipit") {{
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
