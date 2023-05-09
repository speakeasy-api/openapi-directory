# channelCatalogsLegacyTrackingGlobal

### Available Operations

* [getLegacyTrackingChannelCatalog](#getlegacytrackingchannelcatalog) - Get the channel catalog configured to use legacy tracking format information
* [getLegacyTrackingChannelCatalogs](#getlegacytrackingchannelcatalogs) - List all your current channel catalogs configured to use legacy tracking format
* [migrateLegacyTrackingChannelCatalog](#migratelegacytrackingchannelcatalog) - Migrate a channel catalog to current tracking format

## getLegacyTrackingChannelCatalog

Get the channel catalog configured to use legacy tracking format information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLegacyTrackingChannelCatalogRequest;
import org.openapis.openapi.models.operations.GetLegacyTrackingChannelCatalogResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLegacyTrackingChannelCatalogRequest req = new GetLegacyTrackingChannelCatalogRequest("autem");            

            GetLegacyTrackingChannelCatalogResponse res = sdk.channelCatalogsLegacyTrackingGlobal.getLegacyTrackingChannelCatalog(req);

            if (res.legacyTrackingChannelCatalog != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLegacyTrackingChannelCatalogs

List all your current channel catalogs configured to use legacy tracking format

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLegacyTrackingChannelCatalogsRequest;
import org.openapis.openapi.models.operations.GetLegacyTrackingChannelCatalogsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLegacyTrackingChannelCatalogsRequest req = new GetLegacyTrackingChannelCatalogsRequest() {{
                storeId = "nobis";
            }};            

            GetLegacyTrackingChannelCatalogsResponse res = sdk.channelCatalogsLegacyTrackingGlobal.getLegacyTrackingChannelCatalogs(req);

            if (res.legacyTrackingChannelCatalogList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrateLegacyTrackingChannelCatalog

Migrate a channel catalog to current tracking format

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrateLegacyTrackingChannelCatalogRequest;
import org.openapis.openapi.models.operations.MigrateLegacyTrackingChannelCatalogResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrateLegacyTrackingChannelCatalogRequest req = new MigrateLegacyTrackingChannelCatalogRequest("quas");            

            MigrateLegacyTrackingChannelCatalogResponse res = sdk.channelCatalogsLegacyTrackingGlobal.migrateLegacyTrackingChannelCatalog(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
