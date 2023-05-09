# locks

## Overview

Operations about locks

### Available Operations

* [deleteLocksPath](#deletelockspath) - Delete Lock
* [lockListForPath](#locklistforpath) - List Locks by path
* [postLocksPath](#postlockspath) - Create Lock

## deleteLocksPath

Delete Lock

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLocksPathRequest;
import org.openapis.openapi.models.operations.DeleteLocksPathResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteLocksPathRequest req = new DeleteLocksPathRequest("temporibus", "ullam");            

            DeleteLocksPathResponse res = sdk.locks.deleteLocksPath(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lockListForPath

List Locks by path

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LockListForPathRequest;
import org.openapis.openapi.models.operations.LockListForPathResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LockListForPathRequest req = new LockListForPathRequest("adipisci") {{
                cursor = "cum";
                includeChildren = false;
                perPage = 502389;
            }};            

            LockListForPathResponse res = sdk.locks.lockListForPath(req);

            if (res.lockEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postLocksPath

Create Lock

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLocksPathRequest;
import org.openapis.openapi.models.operations.PostLocksPathRequestBody;
import org.openapis.openapi.models.operations.PostLocksPathResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostLocksPathRequest req = new PostLocksPathRequest("quas") {{
                requestBody = new PostLocksPathRequestBody() {{
                    allowAccessByAnyUser = false;
                    exclusive = false;
                    recursive = "hic";
                    timeout = 201517;
                }};;
            }};            

            PostLocksPathResponse res = sdk.locks.postLocksPath(req);

            if (res.lockEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
