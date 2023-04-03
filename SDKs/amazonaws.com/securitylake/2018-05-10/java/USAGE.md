<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAwsLogSourceRequestBody;
import org.openapis.openapi.models.operations.CreateAwsLogSourceRequest;
import org.openapis.openapi.models.operations.CreateAwsLogSourceResponse;
import org.openapis.openapi.models.shared.DimensionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAwsLogSourceRequest req = new CreateAwsLogSourceRequest() {{
                requestBody = new CreateAwsLogSourceRequestBody() {{
                    enableAllDimensions = new java.util.HashMap<String, java.util.HashMap<String, String[]>>() {{
                        put("provident", new java.util.HashMap<String, String[]>() {{
                            put("quibusdam", new String[]{{
                                add("nulla"),
                                add("corrupti"),
                                add("illum"),
                            }});
                            put("vel", new String[]{{
                                add("deserunt"),
                                add("suscipit"),
                                add("iure"),
                            }});
                            put("magnam", new String[]{{
                                add("ipsa"),
                                add("delectus"),
                                add("tempora"),
                                add("suscipit"),
                            }});
                        }});
                        put("molestiae", new java.util.HashMap<String, String[]>() {{
                            put("placeat", new String[]{{
                                add("iusto"),
                                add("excepturi"),
                                add("nisi"),
                            }});
                            put("recusandae", new String[]{{
                                add("ab"),
                                add("quis"),
                                add("veritatis"),
                                add("deserunt"),
                            }});
                            put("perferendis", new String[]{{
                                add("repellendus"),
                                add("sapiente"),
                            }});
                            put("quo", new String[]{{
                                add("at"),
                            }});
                        }});
                        put("at", new java.util.HashMap<String, String[]>() {{
                            put("molestiae", new String[]{{
                                add("quod"),
                                add("esse"),
                                add("totam"),
                                add("porro"),
                            }});
                            put("dolorum", new String[]{{
                                add("nam"),
                            }});
                            put("officia", new String[]{{
                                add("fugit"),
                                add("deleniti"),
                                add("hic"),
                            }});
                            put("optio", new String[]{{
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
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "hic";
                xAmzCredential = "saepe";
                xAmzDate = "fuga";
                xAmzSecurityToken = "in";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "iste";
            }}            

            CreateAwsLogSourceResponse res = sdk.createAwsLogSource(req);

            if (res.createAwsLogSourceResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->