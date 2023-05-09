# marketplacesOrdersV3Global

### Available Operations

* [getMarketplaceAccountsSynchronizationV3](#getmarketplaceaccountssynchronizationv3) - Get current synchronization status between your marketplaces and BeezUP accounts
* [getOrderManagementReadyMarketplaceBusinessCode](#getordermanagementreadymarketplacebusinesscode) - Get the list of MarketplaceBusinessCode ready for Order Management
* [harvestAllV3](#harvestallv3) - Send harvest request to all your marketplaces

## getMarketplaceAccountsSynchronizationV3

Get current synchronization status between your marketplaces and BeezUP accounts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMarketplaceAccountsSynchronizationV3Request;
import org.openapis.openapi.models.operations.GetMarketplaceAccountsSynchronizationV3Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMarketplaceAccountsSynchronizationV3Request req = new GetMarketplaceAccountsSynchronizationV3Request() {{
                ifNoneMatch = "consequuntur";
                storeIds = new String[]{{
                    add("id"),
                }};
            }};            

            GetMarketplaceAccountsSynchronizationV3Response res = sdk.marketplacesOrdersV3Global.getMarketplaceAccountsSynchronizationV3(req);

            if (res.accountSynchronizationList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrderManagementReadyMarketplaceBusinessCode

Get the list of MarketplaceBusinessCode ready for Order Management

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrderManagementReadyMarketplaceBusinessCodeRequest;
import org.openapis.openapi.models.operations.GetOrderManagementReadyMarketplaceBusinessCodeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrderManagementReadyMarketplaceBusinessCodeRequest req = new GetOrderManagementReadyMarketplaceBusinessCodeRequest() {{
                acceptLanguage = new String[]{{
                    add("reprehenderit"),
                    add("error"),
                }};
                storeIds = new String[]{{
                    add("corporis"),
                }};
            }};            

            GetOrderManagementReadyMarketplaceBusinessCodeResponse res = sdk.marketplacesOrdersV3Global.getOrderManagementReadyMarketplaceBusinessCode(req);

            if (res.oMReadyMarketplaceBusinessCodeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## harvestAllV3

Send harvest request to all your marketplaces

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HarvestAllV3Request;
import org.openapis.openapi.models.operations.HarvestAllV3Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HarvestAllV3Request req = new HarvestAllV3Request() {{
                storeId = "quidem";
            }};            

            HarvestAllV3Response res = sdk.marketplacesOrdersV3Global.harvestAllV3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
