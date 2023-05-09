# drives

## Overview

Drives resource represents logical containers for storing folders and files in the cloud storage service. It provides methods for managing and accessing the drives, such as creating, deleting, and listing drives.

### Available Operations

* [drivesAdd](#drivesadd) - Create Drive
* [drivesAll](#drivesall) - List Drives
* [drivesDelete](#drivesdelete) - Delete Drive
* [drivesOne](#drivesone) - Get Drive
* [drivesUpdate](#drivesupdate) - Update Drive

## drivesAdd

Create Drive

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivesAddRequest;
import org.openapis.openapi.models.operations.DrivesAddResponse;
import org.openapis.openapi.models.operations.DrivesAddSecurity;
import org.openapis.openapi.models.shared.DriveInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivesAddRequest req = new DrivesAddRequest(                new DriveInput("Project Resources") {{
                                description = "A description";
                            }};, "deserunt", "perferendis") {{
                raw = false;
                xApideckServiceId = "ipsam";
            }};            

            DrivesAddResponse res = sdk.drives.drivesAdd(req, new DrivesAddSecurity("repellendus") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createDriveResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## drivesAll

List Drives

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivesAllRequest;
import org.openapis.openapi.models.operations.DrivesAllResponse;
import org.openapis.openapi.models.operations.DrivesAllSecurity;
import org.openapis.openapi.models.shared.DrivesFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivesAllRequest req = new DrivesAllRequest("sapiente", "quo") {{
                cursor = "odit";
                fields = "at";
                filter = new DrivesFilter() {{
                    groupId = "1234";
                }};;
                limit = 870088L;
                raw = false;
                xApideckServiceId = "maiores";
            }};            

            DrivesAllResponse res = sdk.drives.drivesAll(req, new DrivesAllSecurity("molestiae") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getDrivesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## drivesDelete

Delete Drive

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivesDeleteRequest;
import org.openapis.openapi.models.operations.DrivesDeleteResponse;
import org.openapis.openapi.models.operations.DrivesDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivesDeleteRequest req = new DrivesDeleteRequest("quod", "quod", "esse") {{
                raw = false;
                xApideckServiceId = "totam";
            }};            

            DrivesDeleteResponse res = sdk.drives.drivesDelete(req, new DrivesDeleteSecurity("porro") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteDriveResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## drivesOne

Get Drive

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivesOneRequest;
import org.openapis.openapi.models.operations.DrivesOneResponse;
import org.openapis.openapi.models.operations.DrivesOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivesOneRequest req = new DrivesOneRequest("dolorum", "dicta", "nam") {{
                fields = "officia";
                raw = false;
                xApideckServiceId = "occaecati";
            }};            

            DrivesOneResponse res = sdk.drives.drivesOne(req, new DrivesOneSecurity("fugit") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getDriveResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## drivesUpdate

Update Drive

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivesUpdateRequest;
import org.openapis.openapi.models.operations.DrivesUpdateResponse;
import org.openapis.openapi.models.operations.DrivesUpdateSecurity;
import org.openapis.openapi.models.shared.DriveInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivesUpdateRequest req = new DrivesUpdateRequest(                new DriveInput("Project Resources") {{
                                description = "A description";
                            }};, "deleniti", "hic", "optio") {{
                raw = false;
                xApideckServiceId = "totam";
            }};            

            DrivesUpdateResponse res = sdk.drives.drivesUpdate(req, new DrivesUpdateSecurity("beatae") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateDriveResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
