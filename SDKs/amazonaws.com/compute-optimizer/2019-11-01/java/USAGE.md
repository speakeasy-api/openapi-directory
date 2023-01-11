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
                    xAmzAlgorithm = "itaque";
                    xAmzContentSha256 = "corrupti";
                    xAmzCredential = "voluptatem";
                    xAmzDate = "quasi";
                    xAmzSecurityToken = "repellat";
                    xAmzSignature = "rem";
                    xAmzSignedHeaders = "nisi";
                    xAmzTarget = "ComputeOptimizerService.DescribeRecommendationExportJobs";
                }};
                request = new DescribeRecommendationExportJobsRequest() {{
                    filters = new openapisdk.models.shared.JobFilter[]() {{
                        add(new JobFilter() {{
                            name = "JobStatus";
                            values = new String[]() {{
                                add("soluta"),
                                add("laudantium"),
                            }};
                        }}),
                    }};
                    jobIds = new String[]() {{
                        add("eaque"),
                        add("ex"),
                        add("cum"),
                    }};
                    maxResults = 7436471626629558277;
                    nextToken = "sunt";
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