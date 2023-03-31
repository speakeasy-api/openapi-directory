<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AddCallBroadcastBatchSecurity;
import org.openapis.openapi.models.operations.AddCallBroadcastBatchPathParams;
import org.openapis.openapi.models.operations.AddCallBroadcastBatchQueryParams;
import org.openapis.openapi.models.operations.AddCallBroadcastBatchRequest;
import org.openapis.openapi.models.operations.AddCallBroadcastBatchResponse;
import org.openapis.openapi.models.shared.BatchRequest;
import org.openapis.openapi.models.shared.Recipient;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddCallBroadcastBatchRequest req = new AddCallBroadcastBatchRequest() {{
                security = new AddCallBroadcastBatchSecurity() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new AddCallBroadcastBatchPathParams() {{
                    id = 548814;
                }};
                queryParams = new AddCallBroadcastBatchQueryParams() {{
                    strictValidation = false;
                }};
                request = new BatchRequest() {{
                    contactListId = 592845;
                    name = "distinctio";
                    recipients = new org.openapis.openapi.models.shared.Recipient[]{{
                        add(new Recipient() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("nulla", "corrupti");
                                put("illum", "vel");
                                put("error", "deserunt");
                            }};
                            contactId = 384382;
                            fromNumber = "iure";
                            phoneNumber = "magnam";
                        }}),
                        add(new Recipient() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("ipsa", "delectus");
                                put("tempora", "suscipit");
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                            }};
                            contactId = 479977;
                            fromNumber = "excepturi";
                            phoneNumber = "nisi";
                        }}),
                        add(new Recipient() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("temporibus", "ab");
                                put("quis", "veritatis");
                                put("deserunt", "perferendis");
                                put("ipsam", "repellendus");
                            }};
                            contactId = 957156;
                            fromNumber = "quo";
                            phoneNumber = "odit";
                        }}),
                        add(new Recipient() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("at", "maiores");
                                put("molestiae", "quod");
                                put("quod", "esse");
                                put("totam", "porro");
                            }};
                            contactId = 678880;
                            fromNumber = "dicta";
                            phoneNumber = "nam";
                        }}),
                    }};
                    scrubDuplicates = false;
                }};
            }};            

            AddCallBroadcastBatchResponse res = sdk.calls.addCallBroadcastBatch(req);

            if (res.resourceId.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->