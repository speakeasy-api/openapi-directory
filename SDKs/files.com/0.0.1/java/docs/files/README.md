# files

## Overview

Operations about files

### Available Operations

* [deleteFilesPath](#deletefilespath) - Delete file/folder
* [fileDownload](#filedownload) - Download file
* [patchFilesPath](#patchfilespath) - Update file/folder metadata
* [postFilesPath](#postfilespath) - Upload file

## deleteFilesPath

Delete file/folder

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFilesPathRequest;
import org.openapis.openapi.models.operations.DeleteFilesPathResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFilesPathRequest req = new DeleteFilesPathRequest("libero") {{
                recursive = false;
            }};            

            DeleteFilesPathResponse res = sdk.files.deleteFilesPath(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fileDownload

Download file

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileDownloadRequest;
import org.openapis.openapi.models.operations.FileDownloadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileDownloadRequest req = new FileDownloadRequest("aut") {{
                action = "aut";
                previewSize = "deleniti";
                withPreviews = false;
                withPriorityColor = false;
            }};            

            FileDownloadResponse res = sdk.files.fileDownload(req);

            if (res.fileEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchFilesPath

Update file/folder metadata

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchFilesPathRequest;
import org.openapis.openapi.models.operations.PatchFilesPathRequestBody;
import org.openapis.openapi.models.operations.PatchFilesPathResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchFilesPathRequest req = new PatchFilesPathRequest("impedit") {{
                requestBody = new PatchFilesPathRequestBody() {{
                    priorityColor = "red";
                    providedMtime = OffsetDateTime.parse("2022-11-08T08:44:49.857Z");
                }};;
            }};            

            PatchFilesPathResponse res = sdk.files.patchFilesPath(req);

            if (res.fileEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postFilesPath

Upload file

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostFilesPathRequest;
import org.openapis.openapi.models.operations.PostFilesPathRequestBody;
import org.openapis.openapi.models.operations.PostFilesPathResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostFilesPathRequest req = new PostFilesPathRequest("accusamus") {{
                requestBody = new PostFilesPathRequestBody(                new String[]{{
                                    add("non"),
                                }},                 new Integer[]{{
                                    add(677412),
                                }}) {{
                    action = "laborum";
                    length = 810424;
                    mkdirParents = false;
                    part = 245367;
                    parts = 432148;
                    providedMtime = OffsetDateTime.parse("2022-04-01T11:18:05.592Z");
                    ref = "quas";
                    restart = 829603;
                    size = 860552;
                    structure = "voluptas";
                    withRename = false;
                }};;
            }};            

            PostFilesPathResponse res = sdk.files.postFilesPath(req);

            if (res.fileEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
