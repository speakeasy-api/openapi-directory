<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMonitorRequest;
import org.openapis.openapi.models.operations.CreateMonitorRequestBody;
import org.openapis.openapi.models.operations.CreateMonitorRequestBodyInternetMeasurementsLogDelivery;
import org.openapis.openapi.models.operations.CreateMonitorResponse;
import org.openapis.openapi.models.shared.LogDeliveryStatusEnum;
import org.openapis.openapi.models.shared.S3Config;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateMonitorRequest req = new CreateMonitorRequest(                new CreateMonitorRequestBody("provident") {{
                                clientToken = "distinctio";
                                internetMeasurementsLogDelivery = new CreateMonitorRequestBodyInternetMeasurementsLogDelivery() {{
                                    s3Config = new S3Config() {{
                                        bucketName = "quibusdam";
                                        bucketPrefix = "unde";
                                        logDeliveryStatus = LogDeliveryStatusEnum.DISABLED;
                                    }};;
                                }};;
                                maxCityNetworksToMonitor = 544883L;
                                resources = new String[]{{
                                    add("vel"),
                                    add("error"),
                                    add("deserunt"),
                                    add("suscipit"),
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("magnam", "debitis");
                                    put("ipsa", "delectus");
                                }};
                                trafficPercentageToMonitor = 272656L;
                            }};) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "minus";
                xAmzDate = "placeat";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "excepturi";
            }};            

            CreateMonitorResponse res = sdk.createMonitor(req);

            if (res.createMonitorOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->