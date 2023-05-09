# fileComments

## Overview

Operations about file_comments

### Available Operations

* [deleteFileCommentsId](#deletefilecommentsid) - Delete File Comment
* [fileCommentListForPath](#filecommentlistforpath) - List File Comments by path
* [patchFileCommentsId](#patchfilecommentsid) - Update File Comment
* [postFileComments](#postfilecomments) - Create File Comment

## deleteFileCommentsId

Delete File Comment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFileCommentsIdRequest;
import org.openapis.openapi.models.operations.DeleteFileCommentsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFileCommentsIdRequest req = new DeleteFileCommentsIdRequest(301831);            

            DeleteFileCommentsIdResponse res = sdk.fileComments.deleteFileCommentsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fileCommentListForPath

List File Comments by path

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileCommentListForPathRequest;
import org.openapis.openapi.models.operations.FileCommentListForPathResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileCommentListForPathRequest req = new FileCommentListForPathRequest("ea") {{
                cursor = "quo";
                perPage = 232234;
            }};            

            FileCommentListForPathResponse res = sdk.fileComments.fileCommentListForPath(req);

            if (res.fileCommentEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchFileCommentsId

Update File Comment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchFileCommentsIdRequest;
import org.openapis.openapi.models.operations.PatchFileCommentsIdRequestBody;
import org.openapis.openapi.models.operations.PatchFileCommentsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchFileCommentsIdRequest req = new PatchFileCommentsIdRequest(                new PatchFileCommentsIdRequestBody("recusandae");, 132487);            

            PatchFileCommentsIdResponse res = sdk.fileComments.patchFileCommentsId(req);

            if (res.fileCommentEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postFileComments

Create File Comment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostFileCommentsRequestBody;
import org.openapis.openapi.models.operations.PostFileCommentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostFileCommentsRequestBody req = new PostFileCommentsRequestBody("minima", "eaque");            

            PostFileCommentsResponse res = sdk.fileComments.postFileComments(req);

            if (res.fileCommentEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
