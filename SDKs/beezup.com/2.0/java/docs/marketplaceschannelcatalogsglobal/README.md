# marketplacesChannelCatalogsGlobal

### Available Operations

* [getMarketplaceChannelCatalogs](#getmarketplacechannelcatalogs) - Get your marketplace channel catalog list

## getMarketplaceChannelCatalogs

Get your marketplace channel catalog list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMarketplaceChannelCatalogsRequest;
import org.openapis.openapi.models.operations.GetMarketplaceChannelCatalogsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMarketplaceChannelCatalogsRequest req = new GetMarketplaceChannelCatalogsRequest() {{
                storeId = "accusantium";
            }};            

            GetMarketplaceChannelCatalogsResponse res = sdk.marketplacesChannelCatalogsGlobal.getMarketplaceChannelCatalogs(req);

            if (res.marketplaceChannelCatalogList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
