<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            DescribeDimensionKeysRequest req = new DescribeDimensionKeysRequest() {{
                headers = new DescribeDimensionKeysHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "PerformanceInsightsv20180227.DescribeDimensionKeys";
                }};
                request = new DescribeDimensionKeysRequest() {{
                    endTime = "2011-08-12T10:11:12Z";
                    filter = new java.util.HashMap<String, String>() {{
                        put("rerum", "dicta");
                    }};
                    groupBy = new DimensionGroup() {{
                        dimensions = new String[]() {{
                            add("voluptatum"),
                        }};
                        group = "et";
                        limit = 7144924247938981575;
                    }};
                    identifier = "dolorem";
                    maxResults = 7259475919510918339;
                    metric = "voluptate";
                    nextToken = "iste";
                    partitionBy = new DimensionGroup() {{
                        dimensions = new String[]() {{
                            add("totam"),
                        }};
                        group = "dolores";
                        limit = 1929546706668609706;
                    }};
                    periodInSeconds = 6392442863481646880;
                    serviceType = "RDS";
                    startTime = "2003-08-14T16:48:00Z";
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