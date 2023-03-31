<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAwsLogSourceHeaders;
import org.openapis.openapi.models.operations.CreateAwsLogSourceRequestBody;
import org.openapis.openapi.models.operations.CreateAwsLogSourceRequest;
import org.openapis.openapi.models.operations.CreateAwsLogSourceResponse;
import org.openapis.openapi.models.shared.DimensionEnum;

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

            CreateAwsLogSourceRequest req = new CreateAwsLogSourceRequest() {{
                headers = new CreateAwsLogSourceHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateAwsLogSourceRequestBody() {{
                    enableAllDimensions = new java.util.HashMap<String, java.util.HashMap<String, String[]>>() {{
                        put("vel", new java.util.HashMap<String, String[]>() {{
                            put("deserunt", new String[]{{
                                add("iure"),
                                add("magnam"),
                            }});
                            put("debitis", new String[]{{
                                add("delectus"),
                            }});
                            put("tempora", new String[]{{
                                add("molestiae"),
                                add("minus"),
                            }});
                        }});
                        put("placeat", new java.util.HashMap<String, String[]>() {{
                            put("iusto", new String[]{{
                                add("nisi"),
                                add("recusandae"),
                                add("temporibus"),
                            }});
                            put("ab", new String[]{{
                                add("veritatis"),
                                add("deserunt"),
                            }});
                            put("perferendis", new String[]{{
                                add("repellendus"),
                                add("sapiente"),
                            }});
                        }});
                        put("quo", new java.util.HashMap<String, String[]>() {{
                            put("at", new String[]{{
                                add("maiores"),
                                add("molestiae"),
                                add("quod"),
                                add("quod"),
                            }});
                        }});
                        put("esse", new java.util.HashMap<String, String[]>() {{
                            put("porro", new String[]{{
                                add("dicta"),
                                add("nam"),
                                add("officia"),
                            }});
                            put("occaecati", new String[]{{
                                add("deleniti"),
                            }});
                            put("hic", new String[]{{
                                add("totam"),
                                add("beatae"),
                                add("commodi"),
                                add("molestiae"),
                            }});
                        }});
                    }};
                    enableSingleDimension = new String[]{{
                        add("qui"),
                        add("impedit"),
                    }};
                    enableTwoDimensions = new java.util.HashMap<String, String[]>() {{
                        put("esse", new String[]{{
                            add("excepturi"),
                        }});
                        put("aspernatur", new String[]{{
                            add("ad"),
                        }});
                        put("natus", new String[]{{
                            add("iste"),
                        }});
                    }};
                    inputOrder = new org.openapis.openapi.models.shared.DimensionEnum[]{{
                        add("SOURCE_TYPE"),
                    }};
                }};
            }};            

            CreateAwsLogSourceResponse res = sdk.createAwsLogSource(req);

            if (res.createAwsLogSourceResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->