# SDK

## Overview

JSON storage API

### Available Operations

* [deleteBinId](#deletebinid) - Delete a json bin
* [getBinId](#getbinid) - Return a json bin
* [patchBinId](#patchbinid) - Partially update a json bin with JSON Merge Patch
* [postBin](#postbin) - Create a json bin
* [putBinId](#putbinid) - Update a json bin

## deleteBinId

Delete a json bin

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBinIdRequest;
import org.openapis.openapi.models.operations.DeleteBinIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteBinIdRequest req = new DeleteBinIdRequest("provident");            

            DeleteBinIdResponse res = sdk.sdk.deleteBinId(req);

            if (res.deleteStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBinId

Return a json bin

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBinIdRequest;
import org.openapis.openapi.models.operations.GetBinIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBinIdRequest req = new GetBinIdRequest("distinctio");            

            GetBinIdResponse res = sdk.sdk.getBinId(req);

            if (res.getBinId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchBinId

Partially update a json bin with JSON Merge Patch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchBinIdRequest;
import org.openapis.openapi.models.operations.PatchBinIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchBinIdRequest req = new PatchBinIdRequest("quibusdam");            

            PatchBinIdResponse res = sdk.sdk.patchBinId(req);

            if (res.updateStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBin

Create a json bin

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostBinResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostBinResponse res = sdk.sdk.postBin();

            if (res.createStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putBinId

Update a json bin

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutBinIdRequest;
import org.openapis.openapi.models.operations.PutBinIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutBinIdRequest req = new PutBinIdRequest("unde");            

            PutBinIdResponse res = sdk.sdk.putBinId(req);

            if (res.updateStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
