# channelCatalogsProductsOptimisation

### Available Operations

* [disableChannelCatalogProduct](#disablechannelcatalogproduct) - Disable channel catalog product
* [reenableChannelCatalogProduct](#reenablechannelcatalogproduct) - Reenable channel catalog product

## disableChannelCatalogProduct

By default a all your catalog products are exposed to the channel.
You can disable a product by using this operation.
/!\ In case of massive optimisation we recommand you to use the analytics api


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableChannelCatalogProductRequest;
import org.openapis.openapi.models.operations.DisableChannelCatalogProductResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisableChannelCatalogProductRequest req = new DisableChannelCatalogProductRequest("nisi", "fugit");            

            DisableChannelCatalogProductResponse res = sdk.channelCatalogsProductsOptimisation.disableChannelCatalogProduct(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reenableChannelCatalogProduct

By default a all your catalog products are exposed to the channel.
You can reenable a product by using this operation.
/!\ In case of massive optimisation we recommand you to use the analytics api


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReenableChannelCatalogProductRequest;
import org.openapis.openapi.models.operations.ReenableChannelCatalogProductResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReenableChannelCatalogProductRequest req = new ReenableChannelCatalogProductRequest("sapiente", "consequuntur");            

            ReenableChannelCatalogProductResponse res = sdk.channelCatalogsProductsOptimisation.reenableChannelCatalogProduct(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
