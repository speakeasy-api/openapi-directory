# blocks

## Overview

 

### Available Operations

* [getBlockHashV2](#getblockhashv2) - Get block hash V2
* [getBlockV2](#getblockv2) - Get Block V2
* [getRawBlockV2](#getrawblockv2) - Get raw block data V2

## getBlockHashV2

Get block hash by its height

Note: Blockbook always follows the main chain of the backend it is attached to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBlockHashV2Request;
import org.openapis.openapi.models.operations.GetBlockHashV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    option1 = new SecurityOption1("nulla") {{
                        xAPIKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetBlockHashV2Request req = new GetBlockHashV2Request(15L, "bitcoin");            

            GetBlockHashV2Response res = sdk.blocks.getBlockHashV2(req);

            if (res.getBlockHashV2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBlockV2

Returns information about block with transactions, subject to paging.

Note: Blockbook always follows the main chain of the backend it is attached to. If there is a rollback-reorg in the backend, Blockbook will also do rollback. When you ask for block by height, you will always get the main chain block. If you ask for block by hash, you may get the block from another fork but it is not guaranteed (backend may not keep it)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBlockV2Request;
import org.openapis.openapi.models.operations.GetBlockV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    option1 = new SecurityOption1("corrupti") {{
                        xAPIKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetBlockV2Request req = new GetBlockV2Request("00000000000000000035835503f43c878ebb643f3b40bdfd0dfda760da74e73c", "bitcoin") {{
                page = 1L;
                pageSize = 1000L;
            }};            

            GetBlockV2Response res = sdk.blocks.getBlockV2(req);

            if (res.getBlockV2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRawBlockV2

Returns the raw hex-encoded block data for a given block hash or height

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRawBlockV2Request;
import org.openapis.openapi.models.operations.GetRawBlockV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    option1 = new SecurityOption1("illum") {{
                        xAPIKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetRawBlockV2Request req = new GetRawBlockV2Request("00000000000000000035835503f43c878ebb643f3b40bdfd0dfda760da74e73c", "bitcoin");            

            GetRawBlockV2Response res = sdk.blocks.getRawBlockV2(req);

            if (res.getRawBlockV2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
