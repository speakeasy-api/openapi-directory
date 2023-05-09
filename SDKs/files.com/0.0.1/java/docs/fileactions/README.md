# fileActions

## Overview

Operations about file_actions

### Available Operations

* [fileActionBeginUpload](#fileactionbeginupload) - Begin file upload
* [fileActionCopy](#fileactioncopy) - Copy file/folder
* [fileActionFind](#fileactionfind) - Find file/folder by path
* [fileActionMove](#fileactionmove) - Move file/folder

## fileActionBeginUpload

Begin file upload

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileActionBeginUploadRequest;
import org.openapis.openapi.models.operations.FileActionBeginUploadRequestBody;
import org.openapis.openapi.models.operations.FileActionBeginUploadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileActionBeginUploadRequest req = new FileActionBeginUploadRequest("maiores") {{
                requestBody = new FileActionBeginUploadRequestBody() {{
                    mkdirParents = false;
                    part = 97844;
                    parts = 406120;
                    ref = "nulla";
                    restart = 569211;
                    size = 972920;
                    withRename = false;
                }};;
            }};            

            FileActionBeginUploadResponse res = sdk.fileActions.fileActionBeginUpload(req);

            if (res.fileUploadPartEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fileActionCopy

Copy file/folder

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileActionCopyRequest;
import org.openapis.openapi.models.operations.FileActionCopyRequestBody;
import org.openapis.openapi.models.operations.FileActionCopyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileActionCopyRequest req = new FileActionCopyRequest(                new FileActionCopyRequestBody("nostrum") {{
                                structure = false;
                            }};, "sapiente");            

            FileActionCopyResponse res = sdk.fileActions.fileActionCopy(req);

            if (res.fileActionEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fileActionFind

Find file/folder by path

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileActionFindRequest;
import org.openapis.openapi.models.operations.FileActionFindResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileActionFindRequest req = new FileActionFindRequest("quisquam") {{
                previewSize = "saepe";
                withPreviews = false;
                withPriorityColor = false;
            }};            

            FileActionFindResponse res = sdk.fileActions.fileActionFind(req);

            if (res.fileEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fileActionMove

Move file/folder

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileActionMoveRequest;
import org.openapis.openapi.models.operations.FileActionMoveRequestBody;
import org.openapis.openapi.models.operations.FileActionMoveResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileActionMoveRequest req = new FileActionMoveRequest(                new FileActionMoveRequestBody("ea");, "impedit");            

            FileActionMoveResponse res = sdk.fileActions.fileActionMove(req);

            if (res.fileActionEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
