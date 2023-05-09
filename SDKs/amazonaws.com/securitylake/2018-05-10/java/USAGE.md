<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAwsLogSourceRequest;
import org.openapis.openapi.models.operations.CreateAwsLogSourceRequestBody;
import org.openapis.openapi.models.operations.CreateAwsLogSourceResponse;
import org.openapis.openapi.models.shared.DimensionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAwsLogSourceRequest req = new CreateAwsLogSourceRequest(                new CreateAwsLogSourceRequestBody(                new org.openapis.openapi.models.shared.DimensionEnum[]{{
                                                add(DimensionEnum.MEMBER),
                                                add(DimensionEnum.MEMBER),
                                                add(DimensionEnum.SOURCE_TYPE),
                                            }}) {{
                                enableAllDimensions = new java.util.HashMap<String, java.util.HashMap<String, String[]>>() {{
                                    put("corrupti", new java.util.HashMap<String, String[]>() {{
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
                                        put("molestiae", new String[]{{
                                            add("placeat"),
                                            add("voluptatum"),
                                            add("iusto"),
                                            add("excepturi"),
                                        }});
                                        put("nisi", new String[]{{
                                            add("temporibus"),
                                            add("ab"),
                                            add("quis"),
                                            add("veritatis"),
                                        }});
                                    }});
                                    put("deserunt", new java.util.HashMap<String, String[]>() {{
                                        put("ipsam", new String[]{{
                                            add("sapiente"),
                                            add("quo"),
                                            add("odit"),
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
                                    put("modi", new java.util.HashMap<String, String[]>() {{
                                        put("impedit", new String[]{{
                                            add("esse"),
                                            add("ipsum"),
                                            add("excepturi"),
                                        }});
                                    }});
                                }};
                                enableSingleDimension = new String[]{{
                                    add("perferendis"),
                                }};
                                enableTwoDimensions = new java.util.HashMap<String, String[]>() {{
                                    put("natus", new String[]{{
                                        add("iste"),
                                    }});
                                    put("dolor", new String[]{{
                                        add("laboriosam"),
                                        add("hic"),
                                        add("saepe"),
                                    }});
                                }};
                            }};) {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "in";
                xAmzCredential = "corporis";
                xAmzDate = "iste";
                xAmzSecurityToken = "iure";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "quidem";
            }};            

            CreateAwsLogSourceResponse res = sdk.createAwsLogSource(req);

            if (res.createAwsLogSourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->