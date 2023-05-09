# subscriptionIPNRequests

## Overview

Requests for creating, deleting and listing existing subscriptions

### Available Operations

* [listFailedIPNs](#listfailedipns) - listFailedIPNs
* [listSubscribedAddresses](#listsubscribedaddresses) - listSubscribedAddresses
* [resendFailedIPN](#resendfailedipn) - resendFailedIPN
* [subscribeAddress](#subscribeaddress) - subscribeAddress
* [unsubscribeAddress](#unsubscribeaddress) - unsubscribeAddress

## listFailedIPNs

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFailedIPNsRequest;
import org.openapis.openapi.models.operations.ListFailedIPNsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListFailedIPNsRequest req = new ListFailedIPNsRequest("q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m", "application/json");            

            ListFailedIPNsResponse res = sdk.subscriptionIPNRequests.listFailedIPNs(req);

            if (res.listFailedIPNs != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSubscribedAddresses

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSubscribedAddressesRequest;
import org.openapis.openapi.models.operations.ListSubscribedAddressesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSubscribedAddressesRequest req = new ListSubscribedAddressesRequest("q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m", "application/json");            

            ListSubscribedAddressesResponse res = sdk.subscriptionIPNRequests.listSubscribedAddresses(req);

            if (res.listSubscribedAddresses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resendFailedIPN

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResendFailedIPNRequest;
import org.openapis.openapi.models.operations.ResendFailedIPNResponse;
import org.openapis.openapi.models.shared.ResendFailedIPNRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResendFailedIPNRequest req = new ResendFailedIPNRequest("q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",                 new ResendFailedIPNRequest(337396););            

            ResendFailedIPNResponse res = sdk.subscriptionIPNRequests.resendFailedIPN(req);

            if (res.resendFailedIPN != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscribeAddress

Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubscribeAddressRequest;
import org.openapis.openapi.models.operations.SubscribeAddressResponse;
import org.openapis.openapi.models.shared.SubscribeAddressRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SubscribeAddressRequest req = new SubscribeAddressRequest("q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",                 new SubscribeAddressRequest("veritatis", "deserunt", "perferendis"););            

            SubscribeAddressResponse res = sdk.subscriptionIPNRequests.subscribeAddress(req);

            if (res.subscribeAddress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unsubscribeAddress

Deletes an existing subscription/IPN for the given address (and contractaddress).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnsubscribeAddressRequest;
import org.openapis.openapi.models.operations.UnsubscribeAddressResponse;
import org.openapis.openapi.models.shared.UnsubscribeAddressRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UnsubscribeAddressRequest req = new UnsubscribeAddressRequest("q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",                 new UnsubscribeAddressRequest("ipsam", "repellendus", "sapiente"););            

            UnsubscribeAddressResponse res = sdk.subscriptionIPNRequests.unsubscribeAddress(req);

            if (res.unsubscribeAddress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
