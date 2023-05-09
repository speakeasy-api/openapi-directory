# webhooksIPNRequests

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

* [listfailedipns](#listfailedipns) - listFailedIPNs
* [listipnsbywebhookid](#listipnsbywebhookid) - listIPNsByWebhookId
* [listsubscribedaddresses](#listsubscribedaddresses) - listSubscribedAddresses
* [resendfailedipn](#resendfailedipn) - resendFailedIPN
* [subscribeaddress](#subscribeaddress) - subscribeAddress
* [unsubscribeaddress](#unsubscribeaddress) - unsubscribeAddress

## listfailedipns

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListfailedipnsRequest;
import org.openapis.openapi.models.operations.ListfailedipnsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListfailedipnsRequest req = new ListfailedipnsRequest("626407c62e5e8235ca561dce");            

            ListfailedipnsResponse res = sdk.webhooksIPNRequests.listfailedipns(req);

            if (res.listfailedipns200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listipnsbywebhookid

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListipnsbywebhookidResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListipnsbywebhookidResponse res = sdk.webhooksIPNRequests.listipnsbywebhookid();

            if (res.listipnsbywebhookid200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listsubscribedaddresses

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListsubscribedaddressesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListsubscribedaddressesResponse res = sdk.webhooksIPNRequests.listsubscribedaddresses();

            if (res.listsubscribedaddresses200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resendfailedipn

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResendfailedipnRequest;
import org.openapis.openapi.models.operations.ResendfailedipnResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResendfailedipnRequest req = new ResendfailedipnRequest("62640817eb594da78c7bee00") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("iste", "iure");
                    put("saepe", "quidem");
                }};
            }};            

            ResendfailedipnResponse res = sdk.webhooksIPNRequests.resendfailedipn(req);

            if (res.resendfailedipn200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscribeaddress

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
import org.openapis.openapi.models.operations.SubscribeaddressRequestBody;
import org.openapis.openapi.models.operations.SubscribeaddressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SubscribeaddressRequestBody req = new SubscribeaddressRequestBody() {{
                to = "0x2fE7dF4DAd91Ef6531Cd14fC1C109D2bA1755203";
                type = "ETH";
                url = "https://example.com/ipnreceiver.php";
            }};            

            SubscribeaddressResponse res = sdk.webhooksIPNRequests.subscribeaddress(req);

            if (res.subscribeaddress200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unsubscribeaddress

Deletes an existing subscription/IPN for the given address (and contractaddress).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnsubscribeaddressRequest;
import org.openapis.openapi.models.operations.UnsubscribeaddressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UnsubscribeaddressRequest req = new UnsubscribeaddressRequest("626407c62e5e8235ca561dce");            

            UnsubscribeaddressResponse res = sdk.webhooksIPNRequests.unsubscribeaddress(req);

            if (res.unsubscribeaddress200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
