# queues

### Available Operations

* [deleteAppsAppIdQueuesQueueId](#deleteappsappidqueuesqueueid) - Deletes a queue
* [getAppsAppIdQueues](#getappsappidqueues) - Lists queues
* [postAppsAppIdQueues](#postappsappidqueues) - Creates a queue

## deleteAppsAppIdQueuesQueueId

Deletes a queue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAppsAppIdQueuesQueueIdRequest;
import org.openapis.openapi.models.operations.DeleteAppsAppIdQueuesQueueIdResponse;
import org.openapis.openapi.models.operations.DeleteAppsAppIdQueuesQueueIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAppsAppIdQueuesQueueIdRequest req = new DeleteAppsAppIdQueuesQueueIdRequest("laboriosam", "hic");            

            DeleteAppsAppIdQueuesQueueIdResponse res = sdk.queues.deleteAppsAppIdQueuesQueueId(req, new DeleteAppsAppIdQueuesQueueIdSecurity("saepe") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAppsAppIdQueues

Lists queues

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAppsAppIdQueuesRequest;
import org.openapis.openapi.models.operations.GetAppsAppIdQueuesResponse;
import org.openapis.openapi.models.operations.GetAppsAppIdQueuesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAppsAppIdQueuesRequest req = new GetAppsAppIdQueuesRequest("fuga");            

            GetAppsAppIdQueuesResponse res = sdk.queues.getAppsAppIdQueues(req, new GetAppsAppIdQueuesSecurity("in") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.queueResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAppsAppIdQueues

Creates a queue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAppsAppIdQueuesRequest;
import org.openapis.openapi.models.operations.PostAppsAppIdQueuesResponse;
import org.openapis.openapi.models.operations.PostAppsAppIdQueuesSecurity;
import org.openapis.openapi.models.shared.Queue;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAppsAppIdQueuesRequest req = new PostAppsAppIdQueuesRequest("corporis") {{
                queue = new Queue(613064L, "iure", "saepe", 697631L);;
            }};            

            PostAppsAppIdQueuesResponse res = sdk.queues.postAppsAppIdQueues(req, new PostAppsAppIdQueuesSecurity("architecto") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.queueResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
