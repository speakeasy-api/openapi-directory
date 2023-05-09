# channelCatalogsGlobal

### Available Operations

* [addChannelCatalog](#addchannelcatalog) - Add a new channel catalog
* [deleteChannelCatalog](#deletechannelcatalog) - Delete the channel catalog
* [getChannelCatalog](#getchannelcatalog) - Get the channel catalog information
* [getChannelCatalogFilterOperators](#getchannelcatalogfilteroperators) - Get channel catalog filter operators
* [getChannelCatalogs](#getchannelcatalogs) - List all your current channel catalogs

## addChannelCatalog

Add a new channel catalog

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddChannelCatalogResponse;
import org.openapis.openapi.models.shared.AddChannelCatalogRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AddChannelCatalogRequest req = new AddChannelCatalogRequest("2dc136a7-0d3d-4cc9-a825-a28a42c53e28", "64f43358-63a1-47f7-97ec-0301fc39956b");            

            AddChannelCatalogResponse res = sdk.channelCatalogsGlobal.addChannelCatalog(req);

            if (res.linksGetChannelCatalogLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteChannelCatalog

Delete the channel catalog

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteChannelCatalogRequest;
import org.openapis.openapi.models.operations.DeleteChannelCatalogResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteChannelCatalogRequest req = new DeleteChannelCatalogRequest("placeat");            

            DeleteChannelCatalogResponse res = sdk.channelCatalogsGlobal.deleteChannelCatalog(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChannelCatalog

Get the channel catalog information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChannelCatalogRequest;
import org.openapis.openapi.models.operations.GetChannelCatalogResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChannelCatalogRequest req = new GetChannelCatalogRequest("velit");            

            GetChannelCatalogResponse res = sdk.channelCatalogsGlobal.getChannelCatalog(req);

            if (res.channelCatalog != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChannelCatalogFilterOperators

Get channel catalog filter operators

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChannelCatalogFilterOperatorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChannelCatalogFilterOperatorsResponse res = sdk.channelCatalogsGlobal.getChannelCatalogFilterOperators();

            if (res.filterOperators != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChannelCatalogs

List all your current channel catalogs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChannelCatalogsRequest;
import org.openapis.openapi.models.operations.GetChannelCatalogsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChannelCatalogsRequest req = new GetChannelCatalogsRequest() {{
                storeId = "eum";
            }};            

            GetChannelCatalogsResponse res = sdk.channelCatalogsGlobal.getChannelCatalogs(req);

            if (res.channelCatalogList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
