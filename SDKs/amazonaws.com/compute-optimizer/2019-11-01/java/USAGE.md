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

            DescribeRecommendationExportJobsRequest req = new DescribeRecommendationExportJobsRequest() {{
                headers = new DescribeRecommendationExportJobsHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "ComputeOptimizerService.DescribeRecommendationExportJobs";
                }};
                request = new DescribeRecommendationExportJobsRequest() {{
                    filters = new openapisdk.models.shared.JobFilter[]() {{
                        add(new JobFilter() {{
                            name = "ResourceType";
                            values = new String[]() {{
                                add("rerum"),
                            }};
                        }}),
                    }};
                    jobIds = new String[]() {{
                        add("debitis"),
                        add("voluptatum"),
                        add("et"),
                    }};
                    maxResults = 7144924247938981575;
                    nextToken = "dolorem";
                }};
            }};

            DescribeRecommendationExportJobsResponse res = sdk.describeRecommendationExportJobs(req);

            if (res.describeRecommendationExportJobsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->