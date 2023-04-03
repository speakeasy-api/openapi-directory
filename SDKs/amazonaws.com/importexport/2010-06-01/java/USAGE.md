<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GETCancelJobActionEnum;
import org.openapis.openapi.models.operations.GETCancelJobOperationEnum;
import org.openapis.openapi.models.operations.GETCancelJobVersionEnum;
import org.openapis.openapi.models.operations.GETCancelJobRequest;
import org.openapis.openapi.models.operations.GETCancelJobResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCancelJobRequest req = new GETCancelJobRequest() {{
                apiVersion = "corrupti";
                awsAccessKeyId = "provident";
                action = "CancelJob";
                jobId = "distinctio";
                operation = "CancelJob";
                signature = "quibusdam";
                signatureMethod = "unde";
                signatureVersion = "nulla";
                timestamp = "corrupti";
                version = "2010-06-01";
            }}            

            GETCancelJobResponse res = sdk.getCancelJob(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->