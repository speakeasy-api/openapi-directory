# channelCatalogsSettings

### Available Operations

* [configureChannelCatalogCostSettings](#configurechannelcatalogcostsettings) - Configure channel catalog cost settings
* [configureChannelCatalogGeneralSettings](#configurechannelcataloggeneralsettings) - Configure channel catalog general settings
* [disableChannelCatalog](#disablechannelcatalog) - Disable a channel catalog
* [enableChannelCatalog](#enablechannelcatalog) - Enable a channel catalog

## configureChannelCatalogCostSettings

Configure channel catalog cost settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfigureChannelCatalogCostSettingsRequest;
import org.openapis.openapi.models.operations.ConfigureChannelCatalogCostSettingsResponse;
import org.openapis.openapi.models.shared.CostSettings;
import org.openapis.openapi.models.shared.CostTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfigureChannelCatalogCostSettingsRequest req = new ConfigureChannelCatalogCostSettingsRequest("harum",                 new CostSettings(CostTypeEnum.FIXED_GLOBAL) {{
                                globalCostValue = 10.21;
                            }};);            

            ConfigureChannelCatalogCostSettingsResponse res = sdk.channelCatalogsSettings.configureChannelCatalogCostSettings(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## configureChannelCatalogGeneralSettings

Configure channel catalog general settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfigureChannelCatalogGeneralSettingsRequest;
import org.openapis.openapi.models.operations.ConfigureChannelCatalogGeneralSettingsResponse;
import org.openapis.openapi.models.shared.GeneralSettings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfigureChannelCatalogGeneralSettingsRequest req = new ConfigureChannelCatalogGeneralSettingsRequest("molestiae",                 new GeneralSettings(true, true, true););            

            ConfigureChannelCatalogGeneralSettingsResponse res = sdk.channelCatalogsSettings.configureChannelCatalogGeneralSettings(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableChannelCatalog

Disable a channel catalog

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableChannelCatalogRequest;
import org.openapis.openapi.models.operations.DisableChannelCatalogResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisableChannelCatalogRequest req = new DisableChannelCatalogRequest("rerum");            

            DisableChannelCatalogResponse res = sdk.channelCatalogsSettings.disableChannelCatalog(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableChannelCatalog

Enable a channel catalog

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableChannelCatalogRequest;
import org.openapis.openapi.models.operations.EnableChannelCatalogResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnableChannelCatalogRequest req = new EnableChannelCatalogRequest("occaecati");            

            EnableChannelCatalogResponse res = sdk.channelCatalogsSettings.enableChannelCatalog(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
