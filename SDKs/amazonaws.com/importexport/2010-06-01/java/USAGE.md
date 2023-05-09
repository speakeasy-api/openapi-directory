<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCancelJobActionEnum;
import org.openapis.openapi.models.operations.GETCancelJobOperationEnum;
import org.openapis.openapi.models.operations.GETCancelJobRequest;
import org.openapis.openapi.models.operations.GETCancelJobResponse;
import org.openapis.openapi.models.operations.GETCancelJobVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCancelJobRequest req = new GETCancelJobRequest("provident", GETCancelJobActionEnum.CANCEL_JOB, "distinctio", GETCancelJobOperationEnum.CANCEL_JOB, "quibusdam", "unde", "nulla", "corrupti", GETCancelJobVersionEnum.TWO_THOUSAND_AND_TEN0601) {{
                apiVersion = "illum";
            }};            

            GETCancelJobResponse res = sdk.getCancelJob(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->