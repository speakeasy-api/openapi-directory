# syncStatus

## Overview

Check the status of ongoing or previous expense syncs.

### Available Operations

* [getLastSuccessfulSync](#getlastsuccessfulsync) - Last successful sync
* [getLatestSync](#getlatestsync) - Latest sync status
* [getSyncById](#getsyncbyid) - Get Sync status
* [listSyncs](#listsyncs) - List sync statuses

## getLastSuccessfulSync

Gets the status of the last successfull sync

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLastSuccessfulSyncRequest;
import org.openapis.openapi.models.operations.GetLastSuccessfulSyncResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLastSuccessfulSyncRequest req = new GetLastSuccessfulSyncRequest("8a210b68-6988-11ed-a1eb-0242ac120002");            

            GetLastSuccessfulSyncResponse res = sdk.syncStatus.getLastSuccessfulSync(req);

            if (res.companySyncStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLatestSync

Gets the latest sync status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLatestSyncRequest;
import org.openapis.openapi.models.operations.GetLatestSyncResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLatestSyncRequest req = new GetLatestSyncRequest("8a210b68-6988-11ed-a1eb-0242ac120002");            

            GetLatestSyncResponse res = sdk.syncStatus.getLatestSync(req);

            if (res.companySyncStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSyncById

Get the sync status for a specified sync

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSyncByIdRequest;
import org.openapis.openapi.models.operations.GetSyncByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSyncByIdRequest req = new GetSyncByIdRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "6fb40d5e-b13e-11ed-afa1-0242ac120002");            

            GetSyncByIdResponse res = sdk.syncStatus.getSyncById(req);

            if (res.companySyncStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSyncs

Gets a list of sync statuses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSyncsRequest;
import org.openapis.openapi.models.operations.ListSyncsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSyncsRequest req = new ListSyncsRequest("8a210b68-6988-11ed-a1eb-0242ac120002");            

            ListSyncsResponse res = sdk.syncStatus.listSyncs(req);

            if (res.companySyncStatuses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
