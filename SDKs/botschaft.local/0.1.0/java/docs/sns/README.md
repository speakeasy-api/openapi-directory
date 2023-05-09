# sns

### Available Operations

* [snsGetSnsGet](#snsgetsnsget) - Sns Get
* [snsPostSnsPost](#snspostsnspost) - Sns Post

## snsGetSnsGet

Sns Get

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SnsGetSnsGetRequest;
import org.openapis.openapi.models.operations.SnsGetSnsGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SnsGetSnsGetRequest req = new SnsGetSnsGetRequest() {{
                authorization = "voluptatum";
                base64Message = "iusto";
                message = "excepturi";
            }};            

            SnsGetSnsGetResponse res = sdk.sns.snsGetSnsGet(req);

            if (res.snsGetSnsGet200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## snsPostSnsPost

Sns Post

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SnsPostSnsPostRequest;
import org.openapis.openapi.models.operations.SnsPostSnsPostResponse;
import org.openapis.openapi.models.shared.SnsMessageRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SnsPostSnsPostRequest req = new SnsPostSnsPostRequest(                new SnsMessageRequest() {{
                                base64Message = "nisi";
                                message = "recusandae";
                            }};) {{
                authorization = "temporibus";
            }};            

            SnsPostSnsPostResponse res = sdk.sns.snsPostSnsPost(req);

            if (res.snsPostSnsPost200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
