<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAnomalyMonitorXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateAnomalyMonitorHeaders;
import org.openapis.openapi.models.operations.CreateAnomalyMonitorRequest;
import org.openapis.openapi.models.operations.CreateAnomalyMonitorResponse;
import org.openapis.openapi.models.shared.CreateAnomalyMonitorRequest;
import org.openapis.openapi.models.shared.ResourceTag;
import org.openapis.openapi.models.shared.AnomalyMonitor;
import org.openapis.openapi.models.shared.MonitorTypeEnum;
import org.openapis.openapi.models.shared.Expression;
import org.openapis.openapi.models.shared.TagValues;
import org.openapis.openapi.models.shared.MatchOptionEnum;
import org.openapis.openapi.models.shared.DimensionValues;
import org.openapis.openapi.models.shared.DimensionEnum;
import org.openapis.openapi.models.shared.CostCategoryValues;
import org.openapis.openapi.models.shared.MonitorDimensionEnum;

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

            CreateAnomalyMonitorRequest req = new CreateAnomalyMonitorRequest() {{
                headers = new CreateAnomalyMonitorHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSInsightsIndexService.CreateAnomalyMonitor";
                }};
                request = new CreateAnomalyMonitorRequest() {{
                    anomalyMonitor = new AnomalyMonitor() {{
                        creationDate = "illum";
                        dimensionalValueCount = 423655;
                        lastEvaluatedDate = "error";
                        lastUpdatedDate = "deserunt";
                        monitorArn = "suscipit";
                        monitorDimension = "SERVICE";
                        monitorName = "iure";
                        monitorSpecification = new Expression() {{
                            and = new org.openapis.openapi.models.shared.Expression[]{{
                                add(new Expression() {{}}),
                                add(new Expression() {{}}),
                            }};
                            costCategories = new CostCategoryValues() {{
                                key = "debitis";
                                matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                    add("GREATER_THAN_OR_EQUAL"),
                                }};
                                values = new String[]{{
                                    add("suscipit"),
                                    add("molestiae"),
                                }};
                            }};
                            dimensions = new DimensionValues() {{
                                key = "SAVINGS_PLANS_TYPE";
                                matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                    add("CONTAINS"),
                                    add("ENDS_WITH"),
                                    add("CONTAINS"),
                                    add("ENDS_WITH"),
                                }};
                                values = new String[]{{
                                    add("temporibus"),
                                    add("ab"),
                                    add("quis"),
                                    add("veritatis"),
                                }};
                            }};
                            not = new Expression() {{}};
                            or = new org.openapis.openapi.models.shared.Expression[]{{
                                add(new Expression() {{}}),
                                add(new Expression() {{}}),
                                add(new Expression() {{}}),
                            }};
                            tags = new TagValues() {{
                                key = "perferendis";
                                matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                    add("CASE_INSENSITIVE"),
                                    add("GREATER_THAN_OR_EQUAL"),
                                }};
                                values = new String[]{{
                                    add("odit"),
                                    add("at"),
                                    add("at"),
                                    add("maiores"),
                                }};
                            }};
                        }};
                        monitorType = "DIMENSIONAL";
                    }};
                    resourceTags = new org.openapis.openapi.models.shared.ResourceTag[]{{
                        add(new ResourceTag() {{
                            key = "quod";
                            value = "esse";
                        }}),
                        add(new ResourceTag() {{
                            key = "totam";
                            value = "porro";
                        }}),
                        add(new ResourceTag() {{
                            key = "dolorum";
                            value = "dicta";
                        }}),
                        add(new ResourceTag() {{
                            key = "nam";
                            value = "officia";
                        }}),
                    }};
                }};
            }};            

            CreateAnomalyMonitorResponse res = sdk.createAnomalyMonitor(req);

            if (res.createAnomalyMonitorResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->