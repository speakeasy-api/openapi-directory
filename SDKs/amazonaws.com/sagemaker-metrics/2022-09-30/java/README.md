# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchPutMetricsRequestBody;
import org.openapis.openapi.models.operations.BatchPutMetricsRequest;
import org.openapis.openapi.models.operations.BatchPutMetricsResponse;
import org.openapis.openapi.models.shared.RawMetricData;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchPutMetricsRequest req = new BatchPutMetricsRequest() {{
                requestBody = new BatchPutMetricsRequestBody() {{
                    metricData = new org.openapis.openapi.models.shared.RawMetricData[]{{
                        add(new RawMetricData() {{
                            metricName = "provident";
                            step = 715190;
                            timestamp = "2021-03-11T23:22:42.658Z";
                            value = 8579.46;
                        }}),
                        add(new RawMetricData() {{
                            metricName = "corrupti";
                            step = 847252;
                            timestamp = "2022-05-18T09:34:54.894Z";
                            value = 6458.94;
                        }}),
                        add(new RawMetricData() {{
                            metricName = "suscipit";
                            step = 437587;
                            timestamp = "2022-02-09T12:04:06.508Z";
                            value = 567.13;
                        }}),
                    }};
                    trialComponentName = "delectus";
                }};
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }}            

            BatchPutMetricsResponse res = sdk.batchPutMetrics(req);

            if (res.batchPutMetricsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `batchPutMetrics` - Used to ingest training metrics into SageMaker. These metrics can be visualized in SageMaker Studio and retrieved with the <code>GetMetrics</code> API. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
