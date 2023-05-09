# transactions

## Overview

 

### Available Operations

* [getMempoolV2](#getmempoolv2) - Get Mempool V2
* [getSendTxV2](#getsendtxv2) - Send transaction (in URL) V2
* [getTransactionV2](#gettransactionv2) - Get transaction V2
* [getTxSpecificV2](#gettxspecificv2) - Get transaction (as is from Backend) V2
* [postSendTxV2](#postsendtxv2) - Send transaction (POST) V2

## getMempoolV2

Get a list of transaction IDs currently in the mempool of the node (meaning unconfirmed transactions not included in any block yet)

Note: this route was implemented by us and is therefore not yet supported by existing blockbook clients.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMempoolV2Request;
import org.openapis.openapi.models.operations.GetMempoolV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    option1 = new SecurityOption1("debitis") {{
                        xAPIKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetMempoolV2Request req = new GetMempoolV2Request("bitcoin") {{
                page = 1L;
                pageSize = 1000L;
            }};            

            GetMempoolV2Response res = sdk.transactions.getMempoolV2(req);

            if (res.getMempoolV2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSendTxV2

Sends new transaction to backend

It is recommended to use POST for sending transactions as there is a limit on how much data can be sent in the URL itself.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSendTxV2Request;
import org.openapis.openapi.models.operations.GetSendTxV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    option1 = new SecurityOption1("ipsa") {{
                        xAPIKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetSendTxV2Request req = new GetSendTxV2Request("bitcoin", "01000000017f9a22c9cbf54bd902400df746f138f37bcf5b4d93eb755820e974ba43ed5f42040000006a4730440220037f4ed5427cde81d55b9b6a2fd08c8a25090c2c2fff3a75c1a57625ca8a7118022076c702fe55969fa08137f71afd4851c48e31082dd3c40c919c92cdbc826758d30121029f6da5623c9f9b68a9baf9c1bc7511df88fa34c6c2f71f7c62f2f03ff48dca80feffffff019c9700000000000017a9146144d57c8aff48492c9dfb914e120b20bad72d6f8773d00700");            

            GetSendTxV2Response res = sdk.transactions.getSendTxV2(req);

            if (res.getSendTxV2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransactionV2

Get transaction returns "normalized" data about transaction, which has the same general structure for all supported coins. It does not return coin specific fields (for example information about Zcash shielded addresses).

A note about the blockTime field:
for already mined transaction (confirmations > 0), the field blockTime contains time of the block
for transactions in mempool (confirmations == 0), the field contains time when the running instance of Blockbook was first time notified about the transaction. This time may be different in different instances of Blockbook.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionV2Request;
import org.openapis.openapi.models.operations.GetTransactionV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    option1 = new SecurityOption1("delectus") {{
                        xAPIKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetTransactionV2Request req = new GetTransactionV2Request("bitcoin", "cd8ec77174e426070d0a50779232bba7312b712e2c6843d82d963d7076c61366");            

            GetTransactionV2Response res = sdk.transactions.getTransactionV2(req);

            if (res.getTransactionV2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTxSpecificV2

Returns transaction data in the exact format as returned by backend, including all coin specific fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTxSpecificV2Request;
import org.openapis.openapi.models.operations.GetTxSpecificV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    option1 = new SecurityOption1("tempora") {{
                        xAPIKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetTxSpecificV2Request req = new GetTxSpecificV2Request("bitcoin", "cd8ec77174e426070d0a50779232bba7312b712e2c6843d82d963d7076c61366");            

            GetTxSpecificV2Response res = sdk.transactions.getTxSpecificV2(req);

            if (res.getTxSpecificV2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSendTxV2

Sends new transaction to backend for broadcasting

The trailing slash '/' at the end is mandatory


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSendTxV2Request;
import org.openapis.openapi.models.operations.PostSendTxV2Response;
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

            PostSendTxV2Request req = new PostSendTxV2Request("bitcoin") {{
                requestBody = "molestiae".getBytes();
            }};            

            PostSendTxV2Response res = sdk.transactions.postSendTxV2(req);

            if (res.postSendTxV2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
