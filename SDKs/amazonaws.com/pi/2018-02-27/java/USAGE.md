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
                    xAmzAlgorithm = "mollitia";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "ipsam";
                    xAmzDate = "dolor";
                    xAmzSecurityToken = "aut";
                    xAmzSignature = "veniam";
                    xAmzSignedHeaders = "ullam";
                    xAmzTarget = "PerformanceInsightsv20180227.DescribeDimensionKeys";
                }};
                request = new DescribeDimensionKeysRequest() {{
                    endTime = "1986-12-15T18:29:59Z";
                    filter = new java.util.HashMap<String, String>() {{
                        put("inventore", "est");
                        put("nisi", "consequatur");
                        put("fugiat", "tenetur");
                    }};
                    groupBy = new DimensionGroup() {{
                        dimensions = new String[]() {{
                            add("aliquam"),
                        }};
                        group = "aspernatur";
                        limit = 4017103272747439088;
                    }};
                    identifier = "inventore";
                    maxResults = 3526406646607909592;
                    metric = "saepe";
                    nextToken = "voluptas";
                    partitionBy = new DimensionGroup() {{
                        dimensions = new String[]() {{
                            add("optio"),
                            add("omnis"),
                        }};
                        group = "ut";
                        limit = 8667532264838713382;
                    }};
                    periodInSeconds = 8056810507064755208;
                    serviceType = "RDS";
                    startTime = "1976-11-04T06:14:44Z";
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