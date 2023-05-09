<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAutoPredictorRequest;
import org.openapis.openapi.models.operations.CreateAutoPredictorResponse;
import org.openapis.openapi.models.operations.CreateAutoPredictorXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdditionalDataset;
import org.openapis.openapi.models.shared.AttributeConfig;
import org.openapis.openapi.models.shared.CreateAutoPredictorRequest;
import org.openapis.openapi.models.shared.DataConfig;
import org.openapis.openapi.models.shared.DayOfWeekEnum;
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.MonitorConfig;
import org.openapis.openapi.models.shared.MonthEnum;
import org.openapis.openapi.models.shared.OptimizationMetricEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TimeAlignmentBoundary;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAutoPredictorRequest req = new CreateAutoPredictorRequest(                new CreateAutoPredictorRequest("provident") {{
                                dataConfig = new DataConfig("distinctio") {{
                                    additionalDatasets = new org.openapis.openapi.models.shared.AdditionalDataset[]{{
                                        add(new AdditionalDataset("voluptatum") {{
                                            configuration = new java.util.HashMap<String, String[]>() {{
                                                put("nulla", new String[]{{
                                                    add("illum"),
                                                    add("vel"),
                                                    add("error"),
                                                }});
                                                put("deserunt", new String[]{{
                                                    add("iure"),
                                                    add("magnam"),
                                                }});
                                                put("debitis", new String[]{{
                                                    add("delectus"),
                                                }});
                                            }};
                                            name = "Laurie Kreiger";
                                        }}),
                                        add(new AdditionalDataset("odit") {{
                                            configuration = new java.util.HashMap<String, String[]>() {{
                                                put("excepturi", new String[]{{
                                                    add("recusandae"),
                                                    add("temporibus"),
                                                }});
                                                put("ab", new String[]{{
                                                    add("veritatis"),
                                                    add("deserunt"),
                                                }});
                                            }};
                                            name = "Roberta Sipes";
                                        }}),
                                        add(new AdditionalDataset("ipsum") {{
                                            configuration = new java.util.HashMap<String, String[]>() {{
                                                put("at", new String[]{{
                                                    add("molestiae"),
                                                    add("quod"),
                                                    add("quod"),
                                                    add("esse"),
                                                }});
                                                put("totam", new String[]{{
                                                    add("dolorum"),
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
                                            }};
                                            name = "Norma Ryan";
                                        }}),
                                        add(new AdditionalDataset("saepe") {{
                                            configuration = new java.util.HashMap<String, String[]>() {{
                                                put("aspernatur", new String[]{{
                                                    add("ad"),
                                                }});
                                                put("natus", new String[]{{
                                                    add("iste"),
                                                }});
                                                put("dolor", new String[]{{
                                                    add("laboriosam"),
                                                    add("hic"),
                                                    add("saepe"),
                                                }});
                                            }};
                                            name = "Harvey Hessel";
                                        }}),
                                    }};
                                    attributeConfigs = new org.openapis.openapi.models.shared.AttributeConfig[]{{
                                        add(new AttributeConfig("mollitia",                 new java.util.HashMap<String, String>() {{
                                                            put("dolores", "dolorem");
                                                            put("corporis", "explicabo");
                                                            put("nobis", "enim");
                                                        }}) {{
                                            attributeName = "architecto";
                                            transformations = new java.util.HashMap<String, String>() {{
                                                put("reiciendis", "est");
                                            }};
                                        }}),
                                        add(new AttributeConfig("culpa",                 new java.util.HashMap<String, String>() {{
                                                            put("sapiente", "architecto");
                                                            put("mollitia", "dolorem");
                                                            put("culpa", "consequuntur");
                                                            put("repellat", "mollitia");
                                                        }}) {{
                                            attributeName = "omnis";
                                            transformations = new java.util.HashMap<String, String>() {{
                                                put("minima", "excepturi");
                                                put("accusantium", "iure");
                                            }};
                                        }}),
                                        add(new AttributeConfig("error",                 new java.util.HashMap<String, String>() {{
                                                            put("quis", "vitae");
                                                        }}) {{
                                            attributeName = "occaecati";
                                            transformations = new java.util.HashMap<String, String>() {{
                                                put("commodi", "quam");
                                                put("molestiae", "velit");
                                            }};
                                        }}),
                                    }};
                                }};;
                                encryptionConfig = new EncryptionConfig("laborum", "animi");;
                                explainPredictor = false;
                                forecastDimensions = new String[]{{
                                    add("odit"),
                                    add("quo"),
                                }};
                                forecastFrequency = "sequi";
                                forecastHorizon = 949572L;
                                forecastTypes = new String[]{{
                                    add("id"),
                                    add("possimus"),
                                }};
                                monitorConfig = new MonitorConfig("aut");;
                                optimizationMetric = OptimizationMetricEnum.WAPE;
                                referencePredictorArn = "error";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("reiciendis", "voluptatibus") {{
                                        key = "laborum";
                                        value = "quasi";
                                    }}),
                                    add(new Tag("praesentium", "voluptatibus") {{
                                        key = "vero";
                                        value = "nihil";
                                    }}),
                                    add(new Tag("voluptate", "cum") {{
                                        key = "ipsa";
                                        value = "omnis";
                                    }}),
                                    add(new Tag("reprehenderit", "ut") {{
                                        key = "perferendis";
                                        value = "doloremque";
                                    }}),
                                }};
                                timeAlignmentBoundary = new TimeAlignmentBoundary() {{
                                    dayOfMonth = 979587L;
                                    dayOfWeek = DayOfWeekEnum.MONDAY;
                                    hour = 359444L;
                                    month = MonthEnum.APRIL;
                                }};;
                            }};, CreateAutoPredictorXAmzTargetEnum.AMAZON_FORECAST_CREATE_AUTO_PREDICTOR) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "harum";
                xAmzDate = "enim";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "repudiandae";
            }};            

            CreateAutoPredictorResponse res = sdk.createAutoPredictor(req);

            if (res.createAutoPredictorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->