<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddCallBroadcastBatchRequest;
import org.openapis.openapi.models.operations.AddCallBroadcastBatchResponse;
import org.openapis.openapi.models.operations.AddCallBroadcastBatchSecurity;
import org.openapis.openapi.models.shared.BatchRequest;
import org.openapis.openapi.models.shared.Recipient;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddCallBroadcastBatchRequest req = new AddCallBroadcastBatchRequest(548814L) {{
                batchRequest = new BatchRequest() {{
                    contactListId = 592845L;
                    name = "Ellis Mitchell";
                    recipients = new org.openapis.openapi.models.shared.Recipient[]{{
                        add(new Recipient() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("error", "deserunt");
                                put("suscipit", "iure");
                            }};
                            contactId = 297534L;
                            fromNumber = "debitis";
                            phoneNumber = "ipsa";
                        }}),
                        add(new Recipient() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("tempora", "suscipit");
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                                put("iusto", "excepturi");
                            }};
                            contactId = 392785L;
                            fromNumber = "recusandae";
                            phoneNumber = "temporibus";
                        }}),
                        add(new Recipient() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("quis", "veritatis");
                            }};
                            contactId = 648172L;
                            fromNumber = "perferendis";
                            phoneNumber = "ipsam";
                        }}),
                        add(new Recipient() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("sapiente", "quo");
                                put("odit", "at");
                                put("at", "maiores");
                                put("molestiae", "quod");
                            }};
                            contactId = 800911L;
                            fromNumber = "esse";
                            phoneNumber = "totam";
                        }}),
                    }};
                    scrubDuplicates = false;
                }};;
                strictValidation = false;
            }};            

            AddCallBroadcastBatchResponse res = sdk.calls.addCallBroadcastBatch(req, new AddCallBroadcastBatchSecurity("porro", "dolorum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.resourceId != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->