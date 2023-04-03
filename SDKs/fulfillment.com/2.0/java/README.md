# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetAccountingSecurity;
import org.openapis.openapi.models.operations.GetAccountingHydrateEnum;
import org.openapis.openapi.models.operations.GetAccountingRequest;
import org.openapis.openapi.models.operations.GetAccountingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountingRequest req = new GetAccountingRequest() {{
                fromDate = "corrupti";
                hydrate = new org.openapis.openapi.models.operations.GetAccountingHydrateEnum[]{{
                    add("items"),
                    add("items"),
                    add("items"),
                }};
                limit = 715190;
                orderIds = new Long[]{{
                    add(602763),
                    add(857946),
                    add(544883),
                    add(847252),
                }};
                page = 423655;
                toDate = "error";
                warehouseIds = new Long[]{{
                    add(384382),
                    add(437587),
                    add(297534),
                }};
            }}            

            GetAccountingResponse res = sdk.accounting.getAccounting(req, new GetAccountingSecurity() {{
                fdcAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountingArrayV2.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accounting

* `getAccounting` - List Order Accounting

### auth

* `postOauthAccessToken` - Generate an Access Token

### inventory

* `getInventory` - List of Item Inventories

### orders

* `deleteOrdersId` - Cancel an Order
* `getOrders` - List of Orders
* `getOrder` - Order Details
* `postOrders` - New Order

### partners

* `putOrdersIdShip` - Ship an Order
* `putOrdersIdStatus` - Update Order Status

### returns

* `getReturns` - List Returns
* `putReturns` - Inform us of an RMA

### tracking

* `getTrack` - Tracking

### users

* `getUsersMe` - About Me
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
