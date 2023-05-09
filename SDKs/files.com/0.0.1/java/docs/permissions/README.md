# permissions

## Overview

Operations about permissions

### Available Operations

* [deletePermissionsId](#deletepermissionsid) - Delete Permission
* [getPermissions](#getpermissions) - List Permissions
* [postPermissions](#postpermissions) - Create Permission

## deletePermissionsId

Delete Permission

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePermissionsIdRequest;
import org.openapis.openapi.models.operations.DeletePermissionsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePermissionsIdRequest req = new DeletePermissionsIdRequest(543678);            

            DeletePermissionsIdResponse res = sdk.permissions.deletePermissionsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPermissions

List Permissions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPermissionsRequest;
import org.openapis.openapi.models.operations.GetPermissionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPermissionsRequest req = new GetPermissionsRequest() {{
                cursor = "fugit";
                filter = new java.util.HashMap<String, Object>() {{
                    put("fugiat", "voluptatem");
                    put("culpa", "expedita");
                }};
                filterPrefix = new java.util.HashMap<String, Object>() {{
                    put("consequatur", "esse");
                    put("ipsam", "sit");
                }};
                groupId = "voluptatum";
                includeGroups = false;
                path = "quas";
                perPage = 922112;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("et", "blanditiis");
                    put("ex", "sed");
                }};
                userId = "sit";
            }};            

            GetPermissionsResponse res = sdk.permissions.getPermissions(req);

            if (res.permissionEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPermissions

Create Permission

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPermissionsRequestBody;
import org.openapis.openapi.models.operations.PostPermissionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostPermissionsRequestBody req = new PostPermissionsRequestBody() {{
                groupId = 425508;
                path = "nostrum";
                permission = "saepe";
                recursive = false;
                userId = 622231;
                username = "Addison.Gottlieb69";
            }};            

            PostPermissionsResponse res = sdk.permissions.postPermissions(req);

            if (res.permissionEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
