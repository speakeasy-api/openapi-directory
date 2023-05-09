# jobs

### Available Operations

* [jobsAll](#jobsall) - List Jobs
* [jobsOne](#jobsone) - Get Job

## jobsAll

List Jobs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsAllRequest;
import org.openapis.openapi.models.operations.JobsAllResponse;
import org.openapis.openapi.models.operations.JobsAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsAllRequest req = new JobsAllRequest("iste", "iure") {{
                cursor = "saepe";
                fields = "quidem";
                limit = 99280L;
                raw = false;
                xApideckServiceId = "ipsa";
            }};            

            JobsAllResponse res = sdk.jobs.jobsAll(req, new JobsAllSecurity("reiciendis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobsOne

Get Job

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsOneRequest;
import org.openapis.openapi.models.operations.JobsOneResponse;
import org.openapis.openapi.models.operations.JobsOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsOneRequest req = new JobsOneRequest("est", "mollitia", "laborum") {{
                fields = "dolores";
                raw = false;
                xApideckServiceId = "dolorem";
            }};            

            JobsOneResponse res = sdk.jobs.jobsOne(req, new JobsOneSecurity("corporis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
