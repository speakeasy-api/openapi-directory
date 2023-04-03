<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAutoPredictorXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateAutoPredictorRequest;
import org.openapis.openapi.models.operations.CreateAutoPredictorResponse;
import org.openapis.openapi.models.shared.CreateAutoPredictorRequest;
import org.openapis.openapi.models.shared.TimeAlignmentBoundary;
import org.openapis.openapi.models.shared.MonthEnum;
import org.openapis.openapi.models.shared.DayOfWeekEnum;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.OptimizationMetricEnum;
import org.openapis.openapi.models.shared.MonitorConfig;
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.DataConfig;
import org.openapis.openapi.models.shared.AttributeConfig;
import org.openapis.openapi.models.shared.AdditionalDataset;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAutoPredictorRequest req = new CreateAutoPredictorRequest() {{
                createAutoPredictorRequest = new CreateAutoPredictorRequest() {{
                    dataConfig = new DataConfig() {{
                        additionalDatasets = new org.openapis.openapi.models.shared.AdditionalDataset[]{{
                            add(new AdditionalDataset() {{
                                configuration = new java.util.HashMap<String, String[]>() {{
                                    put("distinctio", new String[]{{
                                        add("unde"),
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
                                }};
                                name = "molestiae";
                            }}),
                            add(new AdditionalDataset() {{
                                configuration = new java.util.HashMap<String, String[]>() {{
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
                                }};
                                name = "at";
                            }}),
                            add(new AdditionalDataset() {{
                                configuration = new java.util.HashMap<String, String[]>() {{
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
                                }};
                                name = "modi";
                            }}),
                        }};
                        attributeConfigs = new org.openapis.openapi.models.shared.AttributeConfig[]{{
                            add(new AttributeConfig() {{
                                attributeName = "impedit";
                                transformations = new java.util.HashMap<String, String>() {{
                                    put("esse", "ipsum");
                                    put("excepturi", "aspernatur");
                                    put("perferendis", "ad");
                                }};
                            }}),
                        }};
                        datasetGroupArn = "natus";
                    }};
                    encryptionConfig = new EncryptionConfig() {{
                        kmsKeyArn = "sed";
                        roleArn = "iste";
                    }};
                    explainPredictor = false;
                    forecastDimensions = new String[]{{
                        add("natus"),
                    }};
                    forecastFrequency = "laboriosam";
                    forecastHorizon = 943749;
                    forecastTypes = new String[]{{
                        add("fuga"),
                        add("in"),
                        add("corporis"),
                        add("iste"),
                    }};
                    monitorConfig = new MonitorConfig() {{
                        monitorName = "iure";
                    }};
                    optimizationMetric = "MAPE";
                    predictorName = "quidem";
                    referencePredictorArn = "architecto";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "reiciendis";
                            value = "est";
                        }}),
                    }};
                    timeAlignmentBoundary = new TimeAlignmentBoundary() {{
                        dayOfMonth = 653140;
                        dayOfWeek = "FRIDAY";
                        hour = 170909;
                        month = "MARCH";
                    }};
                }};
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "nobis";
                xAmzDate = "enim";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "minima";
                xAmzTarget = "AmazonForecast.CreateAutoPredictor";
            }}            

            CreateAutoPredictorResponse res = sdk.createAutoPredictor(req);

            if (res.createAutoPredictorResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->