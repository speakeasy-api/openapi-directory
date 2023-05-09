# sharedLinks

## Overview

Shared links resource represents the links to files and folders in the cloud storage service that have been shared with other users. It provides methods for managing and accessing the shared links, such as creating, deleting, and listing shared links. A shared link allows other users to access the file or folder that it points to, either by viewing it online or by downloading it.

### Available Operations

* [sharedLinksAdd](#sharedlinksadd) - Create Shared Link
* [sharedLinksAll](#sharedlinksall) - List SharedLinks
* [sharedLinksDelete](#sharedlinksdelete) - Delete Shared Link
* [sharedLinksOne](#sharedlinksone) - Get Shared Link
* [sharedLinksUpdate](#sharedlinksupdate) - Update Shared Link

## sharedLinksAdd

Create Shared Link

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SharedLinksAddRequest;
import org.openapis.openapi.models.operations.SharedLinksAddResponse;
import org.openapis.openapi.models.operations.SharedLinksAddSecurity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SharedLinkInput;
import org.openapis.openapi.models.shared.SharedLinkScopeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SharedLinksAddRequest req = new SharedLinksAddRequest(                new SharedLinkInput("possimus") {{
                                downloadUrl = "https://www.box.com/shared/static/rh935iit6ewrmw0unyul.jpeg";
                                password = "aut";
                                scope = SharedLinkScopeEnum.COMPANY;
                            }};, "quasi", "error") {{
                raw = false;
                xApideckServiceId = "temporibus";
            }};            

            SharedLinksAddResponse res = sdk.sharedLinks.sharedLinksAdd(req, new SharedLinksAddSecurity("laborum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createSharedLinkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sharedLinksAll

List SharedLinks

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SharedLinksAllRequest;
import org.openapis.openapi.models.operations.SharedLinksAllResponse;
import org.openapis.openapi.models.operations.SharedLinksAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SharedLinksAllRequest req = new SharedLinksAllRequest("quasi", "reiciendis") {{
                cursor = "voluptatibus";
                fields = "vero";
                limit = 468651L;
                raw = false;
                xApideckServiceId = "praesentium";
            }};            

            SharedLinksAllResponse res = sdk.sharedLinks.sharedLinksAll(req, new SharedLinksAllSecurity("voluptatibus") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getSharedLinksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sharedLinksDelete

Delete Shared Link

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SharedLinksDeleteRequest;
import org.openapis.openapi.models.operations.SharedLinksDeleteResponse;
import org.openapis.openapi.models.operations.SharedLinksDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SharedLinksDeleteRequest req = new SharedLinksDeleteRequest("ipsa", "omnis", "voluptate") {{
                raw = false;
                xApideckServiceId = "cum";
            }};            

            SharedLinksDeleteResponse res = sdk.sharedLinks.sharedLinksDelete(req, new SharedLinksDeleteSecurity("perferendis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteSharedLinkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sharedLinksOne

Get Shared Link

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SharedLinksOneRequest;
import org.openapis.openapi.models.operations.SharedLinksOneResponse;
import org.openapis.openapi.models.operations.SharedLinksOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SharedLinksOneRequest req = new SharedLinksOneRequest("doloremque", "reprehenderit", "ut") {{
                fields = "maiores";
                raw = false;
                xApideckServiceId = "dicta";
            }};            

            SharedLinksOneResponse res = sdk.sharedLinks.sharedLinksOne(req, new SharedLinksOneSecurity("corporis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getSharedLinkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sharedLinksUpdate

Update Shared Link

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SharedLinksUpdateRequest;
import org.openapis.openapi.models.operations.SharedLinksUpdateResponse;
import org.openapis.openapi.models.operations.SharedLinksUpdateSecurity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SharedLinkInput;
import org.openapis.openapi.models.shared.SharedLinkScopeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SharedLinksUpdateRequest req = new SharedLinksUpdateRequest(                new SharedLinkInput("dolore") {{
                                downloadUrl = "https://www.box.com/shared/static/rh935iit6ewrmw0unyul.jpeg";
                                password = "iusto";
                                scope = SharedLinkScopeEnum.COMPANY;
                            }};, "dicta", "harum", "enim") {{
                raw = false;
                xApideckServiceId = "accusamus";
            }};            

            SharedLinksUpdateResponse res = sdk.sharedLinks.sharedLinksUpdate(req, new SharedLinksUpdateSecurity("commodi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateSharedLinkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
