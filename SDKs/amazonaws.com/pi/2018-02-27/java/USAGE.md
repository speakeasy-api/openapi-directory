<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDimensionKeysRequest;
import org.openapis.openapi.models.operations.DescribeDimensionKeysResponse;
import org.openapis.openapi.models.operations.DescribeDimensionKeysXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDimensionKeysRequest;
import org.openapis.openapi.models.shared.DimensionGroup;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDimensionKeysRequest req = new DescribeDimensionKeysRequest(                new DescribeDimensionKeysRequest(OffsetDateTime.parse("2021-07-27T21:52:56.087Z"),                 new DimensionGroup("quibusdam") {{
                                                dimensions = new String[]{{
                                                    add("nulla"),
                                                    add("corrupti"),
                                                    add("illum"),
                                                }};
                                                limit = 423655L;
                                            }};, "error", "deserunt", ServiceTypeEnum.RDS, OffsetDateTime.parse("2022-09-14T09:35:47.986Z")) {{
                                additionalMetrics = new String[]{{
                                    add("ipsa"),
                                    add("delectus"),
                                    add("tempora"),
                                    add("suscipit"),
                                }};
                                filter = new java.util.HashMap<String, String>() {{
                                    put("minus", "placeat");
                                    put("voluptatum", "iusto");
                                }};
                                maxResults = 568045L;
                                nextToken = "nisi";
                                partitionBy = new DimensionGroup("recusandae") {{
                                    dimensions = new String[]{{
                                        add("ab"),
                                        add("quis"),
                                        add("veritatis"),
                                        add("deserunt"),
                                    }};
                                    limit = 20218L;
                                }};;
                                periodInSeconds = 368241L;
                            }};, DescribeDimensionKeysXAmzTargetEnum.PERFORMANCE_INSIGHTSV20180227_DESCRIBE_DIMENSION_KEYS) {{
                maxResults = "repellendus";
                nextToken = "sapiente";
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "odit";
                xAmzCredential = "at";
                xAmzDate = "at";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "quod";
            }};            

            DescribeDimensionKeysResponse res = sdk.describeDimensionKeys(req);

            if (res.describeDimensionKeysResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->