# messageComments

## Overview

Operations about message_comments

### Available Operations

* [deleteMessageCommentsId](#deletemessagecommentsid) - Delete Message Comment
* [getMessageComments](#getmessagecomments) - List Message Comments
* [getMessageCommentsId](#getmessagecommentsid) - Show Message Comment
* [patchMessageCommentsId](#patchmessagecommentsid) - Update Message Comment
* [postMessageComments](#postmessagecomments) - Create Message Comment

## deleteMessageCommentsId

Delete Message Comment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMessageCommentsIdRequest;
import org.openapis.openapi.models.operations.DeleteMessageCommentsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteMessageCommentsIdRequest req = new DeleteMessageCommentsIdRequest(699575);            

            DeleteMessageCommentsIdResponse res = sdk.messageComments.deleteMessageCommentsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMessageComments

List Message Comments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMessageCommentsRequest;
import org.openapis.openapi.models.operations.GetMessageCommentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMessageCommentsRequest req = new GetMessageCommentsRequest(148829) {{
                cursor = "reiciendis";
                perPage = 131852;
                userId = 994401;
            }};            

            GetMessageCommentsResponse res = sdk.messageComments.getMessageComments(req);

            if (res.messageCommentEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMessageCommentsId

Show Message Comment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMessageCommentsIdRequest;
import org.openapis.openapi.models.operations.GetMessageCommentsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMessageCommentsIdRequest req = new GetMessageCommentsIdRequest(707918);            

            GetMessageCommentsIdResponse res = sdk.messageComments.getMessageCommentsId(req);

            if (res.messageCommentEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchMessageCommentsId

Update Message Comment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchMessageCommentsIdRequest;
import org.openapis.openapi.models.operations.PatchMessageCommentsIdRequestBody;
import org.openapis.openapi.models.operations.PatchMessageCommentsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchMessageCommentsIdRequest req = new PatchMessageCommentsIdRequest(                new PatchMessageCommentsIdRequestBody("voluptate");, 709072);            

            PatchMessageCommentsIdResponse res = sdk.messageComments.patchMessageCommentsId(req);

            if (res.messageCommentEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMessageComments

Create Message Comment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMessageCommentsRequestBody;
import org.openapis.openapi.models.operations.PostMessageCommentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMessageCommentsRequestBody req = new PostMessageCommentsRequestBody("ab") {{
                userId = 611749;
            }};            

            PostMessageCommentsResponse res = sdk.messageComments.postMessageComments(req);

            if (res.messageCommentEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
