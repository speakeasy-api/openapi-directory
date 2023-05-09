# clickwraps

## Overview

Operations about clickwraps

### Available Operations

* [deleteClickwrapsId](#deleteclickwrapsid) - Delete Clickwrap
* [getClickwraps](#getclickwraps) - List Clickwraps
* [getClickwrapsId](#getclickwrapsid) - Show Clickwrap
* [patchClickwrapsId](#patchclickwrapsid) - Update Clickwrap
* [postClickwraps](#postclickwraps) - Create Clickwrap

## deleteClickwrapsId

Delete Clickwrap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteClickwrapsIdRequest;
import org.openapis.openapi.models.operations.DeleteClickwrapsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteClickwrapsIdRequest req = new DeleteClickwrapsIdRequest(833038);            

            DeleteClickwrapsIdResponse res = sdk.clickwraps.deleteClickwrapsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getClickwraps

List Clickwraps

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClickwrapsRequest;
import org.openapis.openapi.models.operations.GetClickwrapsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClickwrapsRequest req = new GetClickwrapsRequest() {{
                cursor = "porro";
                perPage = 984330;
            }};            

            GetClickwrapsResponse res = sdk.clickwraps.getClickwraps(req);

            if (res.clickwrapEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getClickwrapsId

Show Clickwrap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClickwrapsIdRequest;
import org.openapis.openapi.models.operations.GetClickwrapsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClickwrapsIdRequest req = new GetClickwrapsIdRequest(281730);            

            GetClickwrapsIdResponse res = sdk.clickwraps.getClickwrapsId(req);

            if (res.clickwrapEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchClickwrapsId

Update Clickwrap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchClickwrapsIdRequest;
import org.openapis.openapi.models.operations.PatchClickwrapsIdRequestBody;
import org.openapis.openapi.models.operations.PatchClickwrapsIdRequestBodyUseWithBundlesEnum;
import org.openapis.openapi.models.operations.PatchClickwrapsIdRequestBodyUseWithInboxesEnum;
import org.openapis.openapi.models.operations.PatchClickwrapsIdRequestBodyUseWithUsersEnum;
import org.openapis.openapi.models.operations.PatchClickwrapsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchClickwrapsIdRequest req = new PatchClickwrapsIdRequest(703495) {{
                requestBody = new PatchClickwrapsIdRequestBody() {{
                    body = "[Legal body text]";
                    name = "Example Site NDA for Files.com Use";
                    useWithBundles = PatchClickwrapsIdRequestBodyUseWithBundlesEnum.AVAILABLE;
                    useWithInboxes = PatchClickwrapsIdRequestBodyUseWithInboxesEnum.NONE;
                    useWithUsers = PatchClickwrapsIdRequestBodyUseWithUsersEnum.NONE;
                }};;
            }};            

            PatchClickwrapsIdResponse res = sdk.clickwraps.patchClickwrapsId(req);

            if (res.clickwrapEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postClickwraps

Create Clickwrap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostClickwrapsRequestBody;
import org.openapis.openapi.models.operations.PostClickwrapsRequestBodyUseWithBundlesEnum;
import org.openapis.openapi.models.operations.PostClickwrapsRequestBodyUseWithInboxesEnum;
import org.openapis.openapi.models.operations.PostClickwrapsRequestBodyUseWithUsersEnum;
import org.openapis.openapi.models.operations.PostClickwrapsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostClickwrapsRequestBody req = new PostClickwrapsRequestBody() {{
                body = "[Legal body text]";
                name = "Example Site NDA for Files.com Use";
                useWithBundles = PostClickwrapsRequestBodyUseWithBundlesEnum.AVAILABLE;
                useWithInboxes = PostClickwrapsRequestBodyUseWithInboxesEnum.AVAILABLE;
                useWithUsers = PostClickwrapsRequestBodyUseWithUsersEnum.REQUIRE;
            }};            

            PostClickwrapsResponse res = sdk.clickwraps.postClickwraps(req);

            if (res.clickwrapEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
