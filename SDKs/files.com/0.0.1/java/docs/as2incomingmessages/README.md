# as2IncomingMessages

## Overview

Operations about as2_incoming_messages

### Available Operations

* [getAs2IncomingMessages](#getas2incomingmessages) - List As2 Incoming Messages

## getAs2IncomingMessages

List As2 Incoming Messages

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAs2IncomingMessagesRequest;
import org.openapis.openapi.models.operations.GetAs2IncomingMessagesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAs2IncomingMessagesRequest req = new GetAs2IncomingMessagesRequest() {{
                as2PartnerId = 222321;
                cursor = "natus";
                filter = new java.util.HashMap<String, Object>() {{
                    put("hic", "saepe");
                    put("fuga", "in");
                }};
                filterGt = new java.util.HashMap<String, Object>() {{
                    put("iste", "iure");
                    put("saepe", "quidem");
                }};
                filterGteq = new java.util.HashMap<String, Object>() {{
                    put("ipsa", "reiciendis");
                }};
                filterLt = new java.util.HashMap<String, Object>() {{
                    put("mollitia", "laborum");
                    put("dolores", "dolorem");
                    put("corporis", "explicabo");
                }};
                filterLteq = new java.util.HashMap<String, Object>() {{
                    put("enim", "omnis");
                    put("nemo", "minima");
                    put("excepturi", "accusantium");
                    put("iure", "culpa");
                }};
                perPage = 988374;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("architecto", "mollitia");
                    put("dolorem", "culpa");
                    put("consequuntur", "repellat");
                    put("mollitia", "occaecati");
                }};
            }};            

            GetAs2IncomingMessagesResponse res = sdk.as2IncomingMessages.getAs2IncomingMessages(req);

            if (res.as2IncomingMessageEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
