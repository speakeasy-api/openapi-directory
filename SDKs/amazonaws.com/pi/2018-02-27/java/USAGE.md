<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DescribeDimensionKeysQueryParams;
import org.openapis.openapi.models.operations.DescribeDimensionKeysXAmzTargetEnum;
import org.openapis.openapi.models.operations.DescribeDimensionKeysHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            DescribeDimensionKeysRequest req = new DescribeDimensionKeysRequest() {{
                queryParams = new DescribeDimensionKeysQueryParams() {{
                    maxResults = "corrupti";
                    nextToken = "provident";
                }};
                headers = new DescribeDimensionKeysHeaders() {{
                    xAmzAlgorithm = "distinctio";
                    xAmzContentSha256 = "quibusdam";
                    xAmzCredential = "unde";
                    xAmzDate = "nulla";
                    xAmzSecurityToken = "corrupti";
                    xAmzSignature = "illum";
                    xAmzSignedHeaders = "vel";
                    xAmzTarget = "PerformanceInsightsv20180227.DescribeDimensionKeys";
                }};
                request = new DescribeDimensionKeysRequest() {{
                    additionalMetrics = new String[]{{
                        add("deserunt"),
                        add("suscipit"),
                        add("iure"),
                    }};
                    endTime = "2022-02-09T12:04:06.508Z";
                    filter = new java.util.HashMap<String, String>() {{
                        put("delectus", "tempora");
                    }};
                    groupBy = new DimensionGroup() {{
                        dimensions = new String[]{{
                            add("molestiae"),
                            add("minus"),
                        }};
                        group = "placeat";
                        limit = 528895;
                    }};
                    identifier = "iusto";
                    maxResults = 568045;
                    metric = "nisi";
                    nextToken = "recusandae";
                    partitionBy = new DimensionGroup() {{
                        dimensions = new String[]{{
                            add("ab"),
                            add("quis"),
                            add("veritatis"),
                            add("deserunt"),
                        }};
                        group = "perferendis";
                        limit = 368241;
                    }};
                    periodInSeconds = 832620;
                    serviceType = "DOCDB";
                    startTime = "2022-07-31T07:34:52.790Z";
                }};
            }};            

            DescribeDimensionKeysResponse res = sdk.describeDimensionKeys(req);

            if (res.describeDimensionKeysResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->