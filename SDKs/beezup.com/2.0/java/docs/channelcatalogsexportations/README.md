# channelCatalogsExportations

### Available Operations

* [clearChannelCatalogExportationCache](#clearchannelcatalogexportationcache) - Clear the exportation cache
* [getChannelCatalogExportationCacheInfo](#getchannelcatalogexportationcacheinfo) - Get the exportation cache information
* [getChannelCatalogExportationHistory](#getchannelcatalogexportationhistory) - Get the exportation history

## clearChannelCatalogExportationCache

Clear the exportation cache

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClearChannelCatalogExportationCacheRequest;
import org.openapis.openapi.models.operations.ClearChannelCatalogExportationCacheResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClearChannelCatalogExportationCacheRequest req = new ClearChannelCatalogExportationCacheRequest("inventore");            

            ClearChannelCatalogExportationCacheResponse res = sdk.channelCatalogsExportations.clearChannelCatalogExportationCache(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChannelCatalogExportationCacheInfo

Get the exportation cache information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChannelCatalogExportationCacheInfoRequest;
import org.openapis.openapi.models.operations.GetChannelCatalogExportationCacheInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChannelCatalogExportationCacheInfoRequest req = new GetChannelCatalogExportationCacheInfoRequest("non");            

            GetChannelCatalogExportationCacheInfoResponse res = sdk.channelCatalogsExportations.getChannelCatalogExportationCacheInfo(req);

            if (res.channelCatalogExportCacheInfoResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChannelCatalogExportationHistory

Get the exportation history

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChannelCatalogExportationHistoryRequest;
import org.openapis.openapi.models.operations.GetChannelCatalogExportationHistoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChannelCatalogExportationHistoryRequest req = new GetChannelCatalogExportationHistoryRequest("et", 677412, 672048);            

            GetChannelCatalogExportationHistoryResponse res = sdk.channelCatalogsExportations.getChannelCatalogExportationHistory(req);

            if (res.channelCatalogExportationHistory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
