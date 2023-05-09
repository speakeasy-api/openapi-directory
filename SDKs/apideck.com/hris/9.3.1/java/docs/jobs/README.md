# jobs

### Available Operations

* [jobsAll](#jobsall) - List Jobs
* [jobsOne](#jobsone) - One Job

## jobsAll

List Jobs for employee.

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

            JobsAllRequest req = new JobsAllRequest("voluptates", "quasi", "repudiandae") {{
                fields = "sint";
                raw = false;
                xApideckServiceId = "veritatis";
            }};            

            JobsAllResponse res = sdk.jobs.jobsAll(req, new JobsAllSecurity("itaque") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getHrisJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobsOne

A Job for employee.

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

            JobsOneRequest req = new JobsOneRequest("incidunt", "enim", "consequatur", "est") {{
                fields = "quibusdam";
                raw = false;
                xApideckServiceId = "explicabo";
            }};            

            JobsOneResponse res = sdk.jobs.jobsOne(req, new JobsOneSecurity("deserunt") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getHrisJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
