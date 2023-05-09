# nft

## Overview

 

### Available Operations

* [getNFTMetaV2](#getnftmetav2) - Get NFT metadata V2

## getNFTMetaV2

Only works on Ethereum-like blockchains (currently ethereum and bsc)

Get metadata like name or description for a specified contract and token ID.
The resulting data contains a link which can then be used to request the IPFS link for the actual image to display in a block explorer for example.

Note: this route was implemented by us and is therefore not yet supported by existing blockbook clients.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNFTMetaV2Request;
import org.openapis.openapi.models.operations.GetNFTMetaV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    option1 = new SecurityOption1("error") {{
                        xAPIKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetNFTMetaV2Request req = new GetNFTMetaV2Request("ethereum", "0x05756b07725dA0101813475333f372a844789Dc2", "22");            

            GetNFTMetaV2Response res = sdk.nft.getNFTMetaV2(req);

            if (res.getNFTMetaV2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
