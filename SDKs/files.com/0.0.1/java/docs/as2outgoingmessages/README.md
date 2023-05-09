# as2OutgoingMessages

## Overview

Operations about as2_outgoing_messages

### Available Operations

* [getAs2OutgoingMessages](#getas2outgoingmessages) - List As2 Outgoing Messages

## getAs2OutgoingMessages

List As2 Outgoing Messages

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAs2OutgoingMessagesRequest;
import org.openapis.openapi.models.operations.GetAs2OutgoingMessagesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAs2OutgoingMessagesRequest req = new GetAs2OutgoingMessagesRequest() {{
                as2PartnerId = 253291;
                cursor = "commodi";
                filter = new java.util.HashMap<String, Object>() {{
                    put("molestiae", "velit");
                    put("error", "quia");
                }};
                filterGt = new java.util.HashMap<String, Object>() {{
                    put("vitae", "laborum");
                    put("animi", "enim");
                }};
                filterGteq = new java.util.HashMap<String, Object>() {{
                    put("quo", "sequi");
                }};
                filterLt = new java.util.HashMap<String, Object>() {{
                    put("ipsam", "id");
                    put("possimus", "aut");
                    put("quasi", "error");
                    put("temporibus", "laborum");
                }};
                filterLteq = new java.util.HashMap<String, Object>() {{
                    put("reiciendis", "voluptatibus");
                }};
                perPage = 878194;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("praesentium", "voluptatibus");
                    put("ipsa", "omnis");
                }};
            }};            

            GetAs2OutgoingMessagesResponse res = sdk.as2OutgoingMessages.getAs2OutgoingMessages(req);

            if (res.as2OutgoingMessageEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
