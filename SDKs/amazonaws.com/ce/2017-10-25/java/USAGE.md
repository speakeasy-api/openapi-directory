<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAnomalyMonitorRequest;
import org.openapis.openapi.models.operations.CreateAnomalyMonitorResponse;
import org.openapis.openapi.models.operations.CreateAnomalyMonitorXAmzTargetEnum;
import org.openapis.openapi.models.shared.AnomalyMonitor;
import org.openapis.openapi.models.shared.CostCategoryValues;
import org.openapis.openapi.models.shared.CreateAnomalyMonitorRequest;
import org.openapis.openapi.models.shared.DimensionEnum;
import org.openapis.openapi.models.shared.DimensionValues;
import org.openapis.openapi.models.shared.Expression;
import org.openapis.openapi.models.shared.MatchOptionEnum;
import org.openapis.openapi.models.shared.MonitorDimensionEnum;
import org.openapis.openapi.models.shared.MonitorTypeEnum;
import org.openapis.openapi.models.shared.ResourceTag;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagValues;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAnomalyMonitorRequest req = new CreateAnomalyMonitorRequest(                new CreateAnomalyMonitorRequest(                new AnomalyMonitor("provident", MonitorTypeEnum.CUSTOM) {{
                                                creationDate = "quibusdam";
                                                dimensionalValueCount = 602763L;
                                                lastEvaluatedDate = "nulla";
                                                lastUpdatedDate = "corrupti";
                                                monitorArn = "illum";
                                                monitorDimension = MonitorDimensionEnum.SERVICE;
                                                monitorSpecification = new Expression() {{
                                                    and = new org.openapis.openapi.models.shared.Expression[]{{
                                                        add(new Expression() {{}}),
                                                        add(new Expression() {{}}),
                                                    }};
                                                    costCategories = new CostCategoryValues() {{
                                                        key = "error";
                                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                                            add(MatchOptionEnum.ENDS_WITH),
                                                            add(MatchOptionEnum.ENDS_WITH),
                                                            add(MatchOptionEnum.STARTS_WITH),
                                                        }};
                                                        values = new String[]{{
                                                            add("ipsa"),
                                                            add("delectus"),
                                                            add("tempora"),
                                                            add("suscipit"),
                                                        }};
                                                    }};;
                                                    dimensions = new DimensionValues() {{
                                                        key = DimensionEnum.SUBSCRIPTION_ID;
                                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                                            add(MatchOptionEnum.CASE_INSENSITIVE),
                                                            add(MatchOptionEnum.CONTAINS),
                                                            add(MatchOptionEnum.ENDS_WITH),
                                                            add(MatchOptionEnum.CONTAINS),
                                                        }};
                                                        values = new String[]{{
                                                            add("recusandae"),
                                                            add("temporibus"),
                                                        }};
                                                    }};;
                                                    not = new Expression();;
                                                    or = new org.openapis.openapi.models.shared.Expression[]{{
                                                        add(new Expression() {{}}),
                                                    }};
                                                    tags = new TagValues() {{
                                                        key = "quis";
                                                        matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                                            add(MatchOptionEnum.CASE_SENSITIVE),
                                                        }};
                                                        values = new String[]{{
                                                            add("ipsam"),
                                                        }};
                                                    }};;
                                                }};;
                                            }};) {{
                                resourceTags = new org.openapis.openapi.models.shared.ResourceTag[]{{
                                    add(new ResourceTag("odit", "at") {{
                                        key = "sapiente";
                                        value = "quo";
                                    }}),
                                    add(new ResourceTag("molestiae", "quod") {{
                                        key = "at";
                                        value = "maiores";
                                    }}),
                                    add(new ResourceTag("totam", "porro") {{
                                        key = "quod";
                                        value = "esse";
                                    }}),
                                    add(new ResourceTag("nam", "officia") {{
                                        key = "dolorum";
                                        value = "dicta";
                                    }}),
                                }};
                            }};, CreateAnomalyMonitorXAmzTargetEnum.AWS_INSIGHTS_INDEX_SERVICE_CREATE_ANOMALY_MONITOR) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "deleniti";
                xAmzDate = "hic";
                xAmzSecurityToken = "optio";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "beatae";
            }};            

            CreateAnomalyMonitorResponse res = sdk.createAnomalyMonitor(req);

            if (res.createAnomalyMonitorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->