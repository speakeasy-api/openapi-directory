<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAnomalyMonitorXAmzTargetEnum;
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
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAnomalyMonitorRequest req = new CreateAnomalyMonitorRequest() {{
                createAnomalyMonitorRequest = new CreateAnomalyMonitorRequest() {{
                    anomalyMonitor = new AnomalyMonitor() {{
                        creationDate = "corrupti";
                        dimensionalValueCount = 592845;
                        lastEvaluatedDate = "distinctio";
                        lastUpdatedDate = "quibusdam";
                        monitorArn = "unde";
                        monitorDimension = "SERVICE";
                        monitorName = "nulla";
                        monitorSpecification = new Expression() {{
                            and = new org.openapis.openapi.models.shared.Expression[]{{
                                add(new Expression() {{}}),
                                add(new Expression() {{}}),
                                add(new Expression() {{}}),
                            }};
                            costCategories = new CostCategoryValues() {{
                                key = "illum";
                                matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                    add("CONTAINS"),
                                    add("CASE_SENSITIVE"),
                                }};
                                values = new String[]{{
                                    add("iure"),
                                    add("magnam"),
                                }};
                            }};
                            dimensions = new DimensionValues() {{
                                key = "AGREEMENT_END_DATE_TIME_BEFORE";
                                matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
                                    add("GREATER_THAN_OR_EQUAL"),
                                }};
                                values = new String[]{{
                                    add("suscipit"),
                                    add("molestiae"),
                                }};
                            }};
                            not = new Expression() {{}};
                            or = new org.openapis.openapi.models.shared.Expression[]{{
                                add(new Expression() {{}}),
                                add(new Expression() {{}}),
                                add(new Expression() {{}}),
                                add(new Expression() {{}}),
                            }};
                            tags = new TagValues() {{
                                key = "placeat";
                                matchOptions = new org.openapis.openapi.models.shared.MatchOptionEnum[]{{
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
                        }};
                        monitorType = "CUSTOM";
                    }};
                    resourceTags = new org.openapis.openapi.models.shared.ResourceTag[]{{
                        add(new ResourceTag() {{
                            key = "ipsam";
                            value = "repellendus";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "quo";
                xAmzCredential = "odit";
                xAmzDate = "at";
                xAmzSecurityToken = "at";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "molestiae";
                xAmzTarget = "AWSInsightsIndexService.CreateAnomalyMonitor";
            }}            

            CreateAnomalyMonitorResponse res = sdk.createAnomalyMonitor(req);

            if (res.createAnomalyMonitorResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->