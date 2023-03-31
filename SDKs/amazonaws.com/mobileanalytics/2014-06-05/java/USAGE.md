<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.PutEventsHeaders;
import org.openapis.openapi.models.operations.PutEventsRequestBody;
import org.openapis.openapi.models.operations.PutEventsRequest;
import org.openapis.openapi.models.operations.PutEventsResponse;
import org.openapis.openapi.models.shared.Event;
import org.openapis.openapi.models.shared.Session;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            PutEventsRequest req = new PutEventsRequest() {{
                headers = new PutEventsHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzClientContext = "illum";
                    xAmzClientContextEncoding = "vel";
                }};
                request = new PutEventsRequestBody() {{
                    events = new org.openapis.openapi.models.shared.Event[]{{
                        add(new Event() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("suscipit", "iure");
                                put("magnam", "debitis");
                                put("ipsa", "delectus");
                            }};
                            eventType = "tempora";
                            metrics = new java.util.HashMap<String, Double>() {{
                                put("molestiae", 7917.25);
                                put("placeat", 5288.95);
                            }};
                            session = new Session() {{
                                duration = 479977;
                                id = "excepturi";
                                startTimestamp = "nisi";
                                stopTimestamp = "recusandae";
                            }};
                            timestamp = "temporibus";
                            version = "ab";
                        }}),
                        add(new Event() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("veritatis", "deserunt");
                                put("perferendis", "ipsam");
                            }};
                            eventType = "repellendus";
                            metrics = new java.util.HashMap<String, Double>() {{
                                put("quo", 1403.5);
                                put("at", 8700.88);
                                put("maiores", 4736.08);
                                put("quod", 8009.11);
                            }};
                            session = new Session() {{
                                duration = 461479;
                                id = "totam";
                                startTimestamp = "porro";
                                stopTimestamp = "dolorum";
                            }};
                            timestamp = "dicta";
                            version = "nam";
                        }}),
                        add(new Event() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("occaecati", "fugit");
                                put("deleniti", "hic");
                                put("optio", "totam");
                            }};
                            eventType = "beatae";
                            metrics = new java.util.HashMap<String, Double>() {{
                                put("molestiae", 2645.55);
                                put("qui", 7742.34);
                            }};
                            session = new Session() {{
                                duration = 736918;
                                id = "esse";
                                startTimestamp = "ipsum";
                                stopTimestamp = "excepturi";
                            }};
                            timestamp = "aspernatur";
                            version = "perferendis";
                        }}),
                    }};
                }};
            }};            

            PutEventsResponse res = sdk.putEvents(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->