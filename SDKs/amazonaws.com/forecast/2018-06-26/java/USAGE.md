<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAutoPredictorXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateAutoPredictorHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateAutoPredictorRequest req = new CreateAutoPredictorRequest() {{
                headers = new CreateAutoPredictorHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AmazonForecast.CreateAutoPredictor";
                }};
                request = new CreateAutoPredictorRequest() {{
                    dataConfig = new DataConfig() {{
                        additionalDatasets = new org.openapis.openapi.models.shared.AdditionalDataset[]{{
                            add(new AdditionalDataset() {{
                                configuration = new java.util.HashMap<String, String[]>() {{
                                    put("error", new String[]{{
                                        add("suscipit"),
                                        add("iure"),
                                        add("magnam"),
                                    }});
                                    put("debitis", new String[]{{
                                        add("delectus"),
                                    }});
                                }};
                                name = "tempora";
                            }}),
                            add(new AdditionalDataset() {{
                                configuration = new java.util.HashMap<String, String[]>() {{
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
                                }};
                                name = "deserunt";
                            }}),
                            add(new AdditionalDataset() {{
                                configuration = new java.util.HashMap<String, String[]>() {{
                                    put("ipsam", new String[]{{
                                        add("sapiente"),
                                        add("quo"),
                                        add("odit"),
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
            }};            

            CreateAutoPredictorResponse res = sdk.createAutoPredictor(req);

            if (res.createAutoPredictorResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->