# folders

## Overview

Operations about folders

### Available Operations

* [folderListForPath](#folderlistforpath) - List Folders by path
* [postFoldersPath](#postfolderspath) - Create folder

## folderListForPath

List Folders by path

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FolderListForPathRequest;
import org.openapis.openapi.models.operations.FolderListForPathResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FolderListForPathRequest req = new FolderListForPathRequest("libero") {{
                cursor = "quasi";
                filter = "tempora";
                perPage = 256139;
                previewSize = "explicabo";
                search = "provident";
                searchAll = false;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("molestiae", "magnam");
                }};
                withPreviews = false;
                withPriorityColor = false;
            }};            

            FolderListForPathResponse res = sdk.folders.folderListForPath(req);

            if (res.fileEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postFoldersPath

Create folder

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostFoldersPathRequest;
import org.openapis.openapi.models.operations.PostFoldersPathRequestBody;
import org.openapis.openapi.models.operations.PostFoldersPathResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostFoldersPathRequest req = new PostFoldersPathRequest("odio") {{
                requestBody = new PostFoldersPathRequestBody() {{
                    mkdirParents = false;
                    providedMtime = OffsetDateTime.parse("2022-07-17T15:24:44.492Z");
                }};;
            }};            

            PostFoldersPathResponse res = sdk.folders.postFoldersPath(req);

            if (res.fileEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
