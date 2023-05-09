# comments

### Available Operations

* [getCommentById](#getcommentbyid) - Comment by id
* [getCommentsByArticleId](#getcommentsbyarticleid) - Comments

## getCommentById

This endpoint allows the client to retrieve a comment as well as his descendants comments.

  It will return the required comment (the root) with its nested descendants as a thread.

  See the format specification for further details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommentByIdRequest;
import org.openapis.openapi.models.operations.GetCommentByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommentByIdRequest req = new GetCommentByIdRequest(222321L);            

            GetCommentByIdResponse res = sdk.comments.getCommentById(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommentsByArticleId

This endpoint allows the client to retrieve all comments belonging to an article or podcast episode as threaded conversations.

It will return the all top level comments with their nested comments as threads. See the format specification for further details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommentsByArticleIdRequest;
import org.openapis.openapi.models.operations.GetCommentsByArticleIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommentsByArticleIdRequest req = new GetCommentsByArticleIdRequest() {{
                aId = "laboriosam";
                pId = "hic";
            }};            

            GetCommentsByArticleIdResponse res = sdk.comments.getCommentsByArticleId(req);

            if (res.comments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
