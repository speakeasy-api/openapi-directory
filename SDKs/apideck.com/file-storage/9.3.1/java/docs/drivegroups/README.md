# driveGroups

## Overview

Drive Groups resource represents the groups of drives in the cloud storage service. It provides methods for managing and accessing the drive groups, such as creating, deleting, and listing drive groups. A drive group is a logical grouping of drives, which can be used to manage the drives in the cloud storage service.

### Available Operations

* [driveGroupsAdd](#drivegroupsadd) - Create DriveGroup
* [driveGroupsAll](#drivegroupsall) - List DriveGroups
* [driveGroupsDelete](#drivegroupsdelete) - Delete DriveGroup
* [driveGroupsOne](#drivegroupsone) - Get DriveGroup
* [driveGroupsUpdate](#drivegroupsupdate) - Update DriveGroup

## driveGroupsAdd

Create DriveGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveGroupsAddRequest;
import org.openapis.openapi.models.operations.DriveGroupsAddResponse;
import org.openapis.openapi.models.operations.DriveGroupsAddSecurity;
import org.openapis.openapi.models.shared.DriveGroupInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveGroupsAddRequest req = new DriveGroupsAddRequest(                new DriveGroupInput("accounting") {{
                                description = "A description";
                                displayName = "accounting";
                            }};, "unde", "nulla") {{
                raw = false;
                xApideckServiceId = "corrupti";
            }};            

            DriveGroupsAddResponse res = sdk.driveGroups.driveGroupsAdd(req, new DriveGroupsAddSecurity("illum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createDriveGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveGroupsAll

List DriveGroups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveGroupsAllRequest;
import org.openapis.openapi.models.operations.DriveGroupsAllResponse;
import org.openapis.openapi.models.operations.DriveGroupsAllSecurity;
import org.openapis.openapi.models.shared.DriveGroupsFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveGroupsAllRequest req = new DriveGroupsAllRequest("vel", "error") {{
                cursor = "deserunt";
                fields = "suscipit";
                filter = new DriveGroupsFilter() {{
                    parentGroupId = "1234";
                }};;
                limit = 437587L;
                raw = false;
                xApideckServiceId = "magnam";
            }};            

            DriveGroupsAllResponse res = sdk.driveGroups.driveGroupsAll(req, new DriveGroupsAllSecurity("debitis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getDriveGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveGroupsDelete

Delete DriveGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveGroupsDeleteRequest;
import org.openapis.openapi.models.operations.DriveGroupsDeleteResponse;
import org.openapis.openapi.models.operations.DriveGroupsDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveGroupsDeleteRequest req = new DriveGroupsDeleteRequest("ipsa", "delectus", "tempora") {{
                raw = false;
                xApideckServiceId = "suscipit";
            }};            

            DriveGroupsDeleteResponse res = sdk.driveGroups.driveGroupsDelete(req, new DriveGroupsDeleteSecurity("molestiae") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteDriveGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveGroupsOne

Get DriveGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveGroupsOneRequest;
import org.openapis.openapi.models.operations.DriveGroupsOneResponse;
import org.openapis.openapi.models.operations.DriveGroupsOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveGroupsOneRequest req = new DriveGroupsOneRequest("minus", "placeat", "voluptatum") {{
                fields = "iusto";
                raw = false;
                xApideckServiceId = "excepturi";
            }};            

            DriveGroupsOneResponse res = sdk.driveGroups.driveGroupsOne(req, new DriveGroupsOneSecurity("nisi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getDriveGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveGroupsUpdate

Update DriveGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveGroupsUpdateRequest;
import org.openapis.openapi.models.operations.DriveGroupsUpdateResponse;
import org.openapis.openapi.models.operations.DriveGroupsUpdateSecurity;
import org.openapis.openapi.models.shared.DriveGroupInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveGroupsUpdateRequest req = new DriveGroupsUpdateRequest(                new DriveGroupInput("accounting") {{
                                description = "A description";
                                displayName = "accounting";
                            }};, "recusandae", "temporibus", "ab") {{
                raw = false;
                xApideckServiceId = "quis";
            }};            

            DriveGroupsUpdateResponse res = sdk.driveGroups.driveGroupsUpdate(req, new DriveGroupsUpdateSecurity("veritatis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateDriveGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
