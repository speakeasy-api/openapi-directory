<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DescribeDimensionKeysXAmzTargetEnum;
import org.openapis.openapi.models.operations.DescribeDimensionKeysRequest;
import org.openapis.openapi.models.operations.DescribeDimensionKeysResponse;
import org.openapis.openapi.models.shared.DescribeDimensionKeysRequest;
import org.openapis.openapi.models.shared.ServiceTypeEnum;
import org.openapis.openapi.models.shared.DimensionGroup;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDimensionKeysRequest req = new DescribeDimensionKeysRequest() {{
                describeDimensionKeysRequest = new DescribeDimensionKeysRequest() {{
                    additionalMetrics = new String[]{{
                        add("provident"),
                        add("distinctio"),
                        add("quibusdam"),
                    }};
                    endTime = "2021-04-14T16:47:33.722Z";
                    filter = new java.util.HashMap<String, String>() {{
                        put("illum", "vel");
                        put("error", "deserunt");
                        put("suscipit", "iure");
                    }};
                    groupBy = new DimensionGroup() {{
                        dimensions = new String[]{{
                            add("debitis"),
                            add("ipsa"),
                        }};
                        group = "delectus";
                        limit = 272656;
                    }};
                    identifier = "suscipit";
                    maxResults = 477665;
                    metric = "minus";
                    nextToken = "placeat";
                    partitionBy = new DimensionGroup() {{
                        dimensions = new String[]{{
                            add("iusto"),
                            add("excepturi"),
                            add("nisi"),
                        }};
                        group = "recusandae";
                        limit = 836079;
                    }};
                    periodInSeconds = 71036;
                    serviceType = "RDS";
                    startTime = "2022-05-09T10:00:51.349Z";
                }};
                maxResults = "perferendis";
                nextToken = "ipsam";
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "quo";
                xAmzDate = "odit";
                xAmzSecurityToken = "at";
                xAmzSignature = "at";
                xAmzSignedHeaders = "maiores";
                xAmzTarget = "PerformanceInsightsv20180227.DescribeDimensionKeys";
            }}            

            DescribeDimensionKeysResponse res = sdk.describeDimensionKeys(req);

            if (res.describeDimensionKeysResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->