# jobs

## Overview

Jobs represent processes that handle asynchronous work. A job created when an endpoint requests an action that will be handled asynchronously, such as project or task duplication.

Only the creator of the duplication process can access the duplication status of the new object.

*Note*: With any work that is handled asynchronously (e.g., [project instantation from a template](/docs/instantiate-a-project-from-a-project-template), duplicating a [task](/docs/duplicate-a-task) or [project](/docs/duplicate-a-project), etc.), the *intermittent states* of newly-created objects may not be consistent. That is, object properties may return different values each time when polled until the job `status` has returned a `succeeded` value.

### Available Operations

* [getJob](#getjob) - Get a job by id

## getJob

Returns the full record for a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJobRequest;
import org.openapis.openapi.models.operations.GetJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetJobRequest req = new GetJobRequest("magnam") {{
                optFields = new String[]{{
                    add("id"),
                    add("labore"),
                    add("labore"),
                }};
                optPretty = false;
            }};            

            GetJobResponse res = sdk.jobs.getJob(req);

            if (res.getJob200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
