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
import org.openapis.openapi.models.operations.GetAccountingHydrateEnum;
import org.openapis.openapi.models.operations.GetAccountingRequest;
import org.openapis.openapi.models.operations.GetAccountingResponse;
import org.openapis.openapi.models.operations.GetAccountingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountingRequest req = new GetAccountingRequest("corrupti",                 new org.openapis.openapi.models.operations.GetAccountingHydrateEnum[]{{
                                add(GetAccountingHydrateEnum.ITEMS),
                                add(GetAccountingHydrateEnum.ITEMS),
                                add(GetAccountingHydrateEnum.ITEMS),
                            }}, "distinctio") {{
                limit = 844266L;
                orderIds = new Long[]{{
                    add(857946L),
                    add(544883L),
                    add(847252L),
                }};
                page = 423655L;
                warehouseIds = new Long[]{{
                    add(645894L),
                    add(384382L),
                    add(437587L),
                }};
            }};            

            GetAccountingResponse res = sdk.accounting.getAccounting(req, new GetAccountingSecurity("magnam") {{
                fdcAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountingArrayV2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accounting](docs/accounting/README.md)

* [getAccounting](docs/accounting/README.md#getaccounting) - List Order Accounting

### [auth](docs/auth/README.md)

* [postOauthAccessToken](docs/auth/README.md#postoauthaccesstoken) - Generate an Access Token

### [inventory](docs/inventory/README.md)

* [getInventory](docs/inventory/README.md#getinventory) - List of Item Inventories

### [orders](docs/orders/README.md)

* [deleteOrdersId](docs/orders/README.md#deleteordersid) - Cancel an Order
* [getOrders](docs/orders/README.md#getorders) - List of Orders
* [getOrder](docs/orders/README.md#getorder) - Order Details
* [postOrders](docs/orders/README.md#postorders) - New Order

### [partners](docs/partners/README.md)

* [putOrdersIdShip](docs/partners/README.md#putordersidship) - Ship an Order
* [putOrdersIdStatus](docs/partners/README.md#putordersidstatus) - Update Order Status

### [returns](docs/returns/README.md)

* [getReturns](docs/returns/README.md#getreturns) - List Returns
* [putReturns](docs/returns/README.md#putreturns) - Inform us of an RMA

### [tracking](docs/tracking/README.md)

* [getTrack](docs/tracking/README.md#gettrack) - Tracking

### [users](docs/users/README.md)

* [getUsersMe](docs/users/README.md#getusersme) - About Me
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
