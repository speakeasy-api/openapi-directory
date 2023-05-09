# webhooksIPNRequests1

## Overview

With webhooks, you can get notified about various events in the blockchain. E.g:

Receipt of payment to a specific address  
Outgoing payment from a specific address  
Exchange of sats between two specific addresses  
Execution of a contract  
Change of ownership of a token

For this you have to create a webhook with certain filter criteria. The following values are available as filter criteria:

from: Outgoing address  
to: Incoming address  
contract: Contract that should be monitored  
tokenid: ID of a token that should be monitored.  
type: Token type (\[ETH', 'ERC20', 'ERC721', null)

Parameter "url" defines the url we are calling with a POST Request.. The request body will have your filter criterias and some additional informatiion about your transaction:

``` json
{
  "id": "63a1ae0887ca3625b82b4924",
  "webhook_id": "63a1ad0e87ca3625b82b4923",
  "from": "0x0000000000000000000000000000000000000000",
  "to": "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43",
  "blocknumber": "123",
  "datetime": "22-12-20 13:43:52",
  "tokenid": "0x0000000000000000000000000000000000000000",
  "type": null,
  "txid": "000000000000000000000000000000000000000000000000000",
  "amount": "000000000000000000000000000000000000000000000000000"
}

```

### Available Operations

* [listfailedipns1](#listfailedipns1) - listFailedIPNs
* [listipnsbywebhookid1](#listipnsbywebhookid1) - listIPNsByWebhookId
* [listsubscribedaddresses1](#listsubscribedaddresses1) - listSubscribedAddresses
* [resendfailedipn1](#resendfailedipn1) - resendFailedIPN
* [subscribeaddress1](#subscribeaddress1) - subscribeAddress
* [unsubscribeaddress1](#unsubscribeaddress1) - unsubscribeAddress

## listfailedipns1

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Listfailedipns1Request;
import org.openapis.openapi.models.operations.Listfailedipns1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Listfailedipns1Request req = new Listfailedipns1Request("626407c62e5e8235ca561dce");            

            Listfailedipns1Response res = sdk.webhooksIPNRequests1.listfailedipns1(req);

            if (res.listfailedipns1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listipnsbywebhookid1

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Listipnsbywebhookid1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Listipnsbywebhookid1Response res = sdk.webhooksIPNRequests1.listipnsbywebhookid1();

            if (res.listipnsbywebhookid1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listsubscribedaddresses1

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Listsubscribedaddresses1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Listsubscribedaddresses1Response res = sdk.webhooksIPNRequests1.listsubscribedaddresses1();

            if (res.listsubscribedaddresses1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resendfailedipn1

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Resendfailedipn1Request;
import org.openapis.openapi.models.operations.Resendfailedipn1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Resendfailedipn1Request req = new Resendfailedipn1Request("626407c62e5e8235ca561dce") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("ipsa", "reiciendis");
                }};
            }};            

            Resendfailedipn1Response res = sdk.webhooksIPNRequests1.resendfailedipn1(req);

            if (res.resendfailedipn1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscribeaddress1

Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.

You can choose one or more from following filter criterias

| **Parameter** | **Description** |
| --- | --- |
| from | ethereum address |
| to | ethereum address |
| contractaddress | contract address |
| tokenid | token id |

You also need to dpecify the parameter "type". you can choose between \['ETH', 'ERC20', 'ERC721', null\]

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Subscribeaddress1RequestBody;
import org.openapis.openapi.models.operations.Subscribeaddress1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Subscribeaddress1RequestBody req = new Subscribeaddress1RequestBody() {{
                to = "0x2fE7dF4DAd91Ef6531Cd14fC1C109D2bA1755203";
                type = "ETH";
                url = "https://example.com/ipnreceiver.php";
            }};            

            Subscribeaddress1Response res = sdk.webhooksIPNRequests1.subscribeaddress1(req);

            if (res.subscribeaddress1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unsubscribeaddress1

Deletes an existing subscription/IPN for the given address (and contractaddress).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Unsubscribeaddress1Request;
import org.openapis.openapi.models.operations.Unsubscribeaddress1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Unsubscribeaddress1Request req = new Unsubscribeaddress1Request("626407c62e5e8235ca561dce");            

            Unsubscribeaddress1Response res = sdk.webhooksIPNRequests1.unsubscribeaddress1(req);

            if (res.unsubscribeaddress1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
