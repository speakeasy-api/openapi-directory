# SDK

### Available Operations

* [configConfigGet](#configconfigget) - Config
* [topicTopicTopicNameGet](#topictopictopicnameget) - Topic

## configConfigGet

Config

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfigConfigGetRequest;
import org.openapis.openapi.models.operations.ConfigConfigGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfigConfigGetRequest req = new ConfigConfigGetRequest() {{
                authorization = "provident";
            }};            

            ConfigConfigGetResponse res = sdk.sdk.configConfigGet(req);

            if (res.config != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## topicTopicTopicNameGet

Topic

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TopicTopicTopicNameGetRequest;
import org.openapis.openapi.models.operations.TopicTopicTopicNameGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TopicTopicTopicNameGetRequest req = new TopicTopicTopicNameGetRequest("distinctio") {{
                authorization = "quibusdam";
                base64Message = "unde";
                message = "nulla";
            }};            

            TopicTopicTopicNameGetResponse res = sdk.sdk.topicTopicTopicNameGet(req);

            if (res.topicTopicTopicNameGet200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
