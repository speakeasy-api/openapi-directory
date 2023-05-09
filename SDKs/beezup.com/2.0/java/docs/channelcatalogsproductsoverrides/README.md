# channelCatalogsProductsOverrides

### Available Operations

* [configureChannelCatalogProductValueOverrideCopy](#configurechannelcatalogproductvalueoverridecopy) - Copy channel catalog product value override
* [deleteChannelCatalogProductValueOverride](#deletechannelcatalogproductvalueoverride) - Delete a specific channel catalog product value override
* [getChannelCatalogProductValueOverrideCopy](#getchannelcatalogproductvalueoverridecopy) - Get channel catalog product value override compatibilities status
* [overrideChannelCatalogProductValues](#overridechannelcatalogproductvalues) - Override channel catalog product values

## configureChannelCatalogProductValueOverrideCopy

Copy channel catalog product value override

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfigureChannelCatalogProductValueOverrideCopyRequest;
import org.openapis.openapi.models.operations.ConfigureChannelCatalogProductValueOverrideCopyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfigureChannelCatalogProductValueOverrideCopyRequest req = new ConfigureChannelCatalogProductValueOverrideCopyRequest("ratione", "explicabo");            

            ConfigureChannelCatalogProductValueOverrideCopyResponse res = sdk.channelCatalogsProductsOverrides.configureChannelCatalogProductValueOverrideCopy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteChannelCatalogProductValueOverride

Delete a specific channel catalog product value override

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteChannelCatalogProductValueOverrideRequest;
import org.openapis.openapi.models.operations.DeleteChannelCatalogProductValueOverrideResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteChannelCatalogProductValueOverrideRequest req = new DeleteChannelCatalogProductValueOverrideRequest("saepe", "occaecati", "atque");            

            DeleteChannelCatalogProductValueOverrideResponse res = sdk.channelCatalogsProductsOverrides.deleteChannelCatalogProductValueOverride(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChannelCatalogProductValueOverrideCopy

Get channel catalog product value override compatibilities status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChannelCatalogProductValueOverrideCopyRequest;
import org.openapis.openapi.models.operations.GetChannelCatalogProductValueOverrideCopyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChannelCatalogProductValueOverrideCopyRequest req = new GetChannelCatalogProductValueOverrideCopyRequest("et", "esse");            

            GetChannelCatalogProductValueOverrideCopyResponse res = sdk.channelCatalogsProductsOverrides.getChannelCatalogProductValueOverrideCopy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## overrideChannelCatalogProductValues

Override channel catalog product values

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OverrideChannelCatalogProductValuesRequest;
import org.openapis.openapi.models.operations.OverrideChannelCatalogProductValuesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OverrideChannelCatalogProductValuesRequest req = new OverrideChannelCatalogProductValuesRequest(                new java.util.HashMap<String, String>() {{
                                put("accusamus", "veritatis");
                                put("esse", "quod");
                                put("nam", "vero");
                                put("aliquid", "quasi");
                            }}, "saepe", "vel");            

            OverrideChannelCatalogProductValuesResponse res = sdk.channelCatalogsProductsOverrides.overrideChannelCatalogProductValues(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
