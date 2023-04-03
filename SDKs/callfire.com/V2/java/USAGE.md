<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AddCallBroadcastBatchSecurity;
import org.openapis.openapi.models.operations.AddCallBroadcastBatchRequest;
import org.openapis.openapi.models.operations.AddCallBroadcastBatchResponse;
import org.openapis.openapi.models.shared.BatchRequest;
import org.openapis.openapi.models.shared.Recipient;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddCallBroadcastBatchRequest req = new AddCallBroadcastBatchRequest() {{
                batchRequest = new BatchRequest() {{
                    contactListId = 548814;
                    name = "provident";
                    recipients = new org.openapis.openapi.models.shared.Recipient[]{{
                        add(new Recipient() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("unde", "nulla");
                                put("corrupti", "illum");
                                put("vel", "error");
                                put("deserunt", "suscipit");
                            }};
                            contactId = 437587;
                            fromNumber = "magnam";
                            phoneNumber = "debitis";
                        }}),
                        add(new Recipient() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("delectus", "tempora");
                            }};
                            contactId = 383441;
                            fromNumber = "molestiae";
                            phoneNumber = "minus";
                        }}),
                        add(new Recipient() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("voluptatum", "iusto");
                                put("excepturi", "nisi");
                                put("recusandae", "temporibus");
                                put("ab", "quis");
                            }};
                            contactId = 87129;
                            fromNumber = "deserunt";
                            phoneNumber = "perferendis";
                        }}),
                    }};
                    scrubDuplicates = false;
                }};
                id = 368241;
                strictValidation = false;
            }}            

            AddCallBroadcastBatchResponse res = sdk.calls.addCallBroadcastBatch(req, new AddCallBroadcastBatchSecurity() {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.resourceId.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->