# messageCommentReactions

## Overview

Operations about message_comment_reactions

### Available Operations

* [deleteMessageCommentReactionsId](#deletemessagecommentreactionsid) - Delete Message Comment Reaction
* [getMessageCommentReactions](#getmessagecommentreactions) - List Message Comment Reactions
* [getMessageCommentReactionsId](#getmessagecommentreactionsid) - Show Message Comment Reaction
* [postMessageCommentReactions](#postmessagecommentreactions) - Create Message Comment Reaction

## deleteMessageCommentReactionsId

Delete Message Comment Reaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMessageCommentReactionsIdRequest;
import org.openapis.openapi.models.operations.DeleteMessageCommentReactionsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteMessageCommentReactionsIdRequest req = new DeleteMessageCommentReactionsIdRequest(633998);            

            DeleteMessageCommentReactionsIdResponse res = sdk.messageCommentReactions.deleteMessageCommentReactionsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMessageCommentReactions

List Message Comment Reactions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMessageCommentReactionsRequest;
import org.openapis.openapi.models.operations.GetMessageCommentReactionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMessageCommentReactionsRequest req = new GetMessageCommentReactionsRequest(548519) {{
                cursor = "pariatur";
                perPage = 519643;
                userId = 940210;
            }};            

            GetMessageCommentReactionsResponse res = sdk.messageCommentReactions.getMessageCommentReactions(req);

            if (res.messageCommentReactionEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMessageCommentReactionsId

Show Message Comment Reaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMessageCommentReactionsIdRequest;
import org.openapis.openapi.models.operations.GetMessageCommentReactionsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMessageCommentReactionsIdRequest req = new GetMessageCommentReactionsIdRequest(348783);            

            GetMessageCommentReactionsIdResponse res = sdk.messageCommentReactions.getMessageCommentReactionsId(req);

            if (res.messageCommentReactionEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMessageCommentReactions

Create Message Comment Reaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMessageCommentReactionsRequestBody;
import org.openapis.openapi.models.operations.PostMessageCommentReactionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMessageCommentReactionsRequestBody req = new PostMessageCommentReactionsRequestBody("nobis") {{
                userId = 24619;
            }};            

            PostMessageCommentReactionsResponse res = sdk.messageCommentReactions.postMessageCommentReactions(req);

            if (res.messageCommentReactionEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
