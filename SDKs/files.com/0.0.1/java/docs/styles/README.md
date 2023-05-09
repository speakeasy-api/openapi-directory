# styles

## Overview

Operations about styles

### Available Operations

* [deleteStylesPath](#deletestylespath) - Delete Style
* [getStylesPath](#getstylespath) - Show Style
* [patchStylesPath](#patchstylespath) - Update Style

## deleteStylesPath

Delete Style

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteStylesPathRequest;
import org.openapis.openapi.models.operations.DeleteStylesPathResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteStylesPathRequest req = new DeleteStylesPathRequest("culpa");            

            DeleteStylesPathResponse res = sdk.styles.deleteStylesPath(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStylesPath

Show Style

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStylesPathRequest;
import org.openapis.openapi.models.operations.GetStylesPathResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStylesPathRequest req = new GetStylesPathRequest("voluptatem");            

            GetStylesPathResponse res = sdk.styles.getStylesPath(req);

            if (res.styleEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchStylesPath

Update Style

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchStylesPathRequest;
import org.openapis.openapi.models.operations.PatchStylesPathRequestBody;
import org.openapis.openapi.models.operations.PatchStylesPathRequestBodyFile;
import org.openapis.openapi.models.operations.PatchStylesPathResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchStylesPathRequest req = new PatchStylesPathRequest(                new PatchStylesPathRequestBody(                new PatchStylesPathRequestBodyFile("sapiente".getBytes(), "officiis"););, "architecto");            

            PatchStylesPathResponse res = sdk.styles.patchStylesPath(req);

            if (res.styleEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
