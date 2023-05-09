# fileCommentReactions

## Overview

Operations about file_comment_reactions

### Available Operations

* [deleteFileCommentReactionsId](#deletefilecommentreactionsid) - Delete File Comment Reaction
* [postFileCommentReactions](#postfilecommentreactions) - Create File Comment Reaction

## deleteFileCommentReactionsId

Delete File Comment Reaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFileCommentReactionsIdRequest;
import org.openapis.openapi.models.operations.DeleteFileCommentReactionsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFileCommentReactionsIdRequest req = new DeleteFileCommentReactionsIdRequest(359271);            

            DeleteFileCommentReactionsIdResponse res = sdk.fileCommentReactions.deleteFileCommentReactionsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postFileCommentReactions

Create File Comment Reaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostFileCommentReactionsRequestBody;
import org.openapis.openapi.models.operations.PostFileCommentReactionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostFileCommentReactionsRequestBody req = new PostFileCommentReactionsRequestBody("veniam", 399499) {{
                userId = 81101;
            }};            

            PostFileCommentReactionsResponse res = sdk.fileCommentReactions.postFileCommentReactions(req);

            if (res.fileCommentReactionEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
