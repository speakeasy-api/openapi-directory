# provisioningJobs

### Available Operations

* [getProvisioningjobsJobId](#getprovisioningjobsjobid) - Detail of a provisioning job

## getProvisioningjobsJobId

Provisioning failures may occur. Contact support in the event of a failure or wait for error resolution.<br />
Do NOT retry provisioning until the job reports finished or cancelled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProvisioningjobsJobIdRequest;
import org.openapis.openapi.models.operations.GetProvisioningjobsJobIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProvisioningjobsJobIdRequest req = new GetProvisioningjobsJobIdRequest("dicta", "a8422bb6-79d2-4322-b15b-f0cbb1e31b8b");            

            GetProvisioningjobsJobIdResponse res = sdk.provisioningJobs.getProvisioningjobsJobId(req);

            if (res.provisioningJobInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
