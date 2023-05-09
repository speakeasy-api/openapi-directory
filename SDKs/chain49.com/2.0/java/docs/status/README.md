# status

## Overview

 

### Available Operations

* [getAvailableBlockchains](#getavailableblockchains) - List available blockchains
* [getBlockchain](#getblockchain) - Blockchain Info Summary

## getAvailableBlockchains

Get an array of active blockchains

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAvailableBlockchainsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    option1 = new SecurityOption1("deserunt") {{
                        xAPIKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetAvailableBlockchainsResponse res = sdk.status.getAvailableBlockchains();

            if (res.getAvailableBlockchains200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBlockchain

Get basic summary of info relating to the currently selected blockchain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBlockchainRequest;
import org.openapis.openapi.models.operations.GetBlockchainResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    option1 = new SecurityOption1("suscipit") {{
                        xAPIKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetBlockchainRequest req = new GetBlockchainRequest("bitcoin");            

            GetBlockchainResponse res = sdk.status.getBlockchain(req);

            if (res.getBlockchain200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
