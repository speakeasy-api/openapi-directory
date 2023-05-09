# marketplacesChannelCatalogsSettings

### Available Operations

* [getChannelCatalogMarketplaceProperties](#getchannelcatalogmarketplaceproperties) - Get the marketplace properties for a channel catalog
* [getChannelCatalogMarketplaceSettings](#getchannelcatalogmarketplacesettings) - Get the marketplace settings for a channel catalog
* [setChannelCatalogMarketplaceSettings](#setchannelcatalogmarketplacesettings) - Save new marketplace settings for a channel catalog

## getChannelCatalogMarketplaceProperties

Get the marketplace properties for a channel catalog

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChannelCatalogMarketplacePropertiesRequest;
import org.openapis.openapi.models.operations.GetChannelCatalogMarketplacePropertiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChannelCatalogMarketplacePropertiesRequest req = new GetChannelCatalogMarketplacePropertiesRequest("qui", "https://ideal-mambo.org") {{
                acceptLanguage = new String[]{{
                    add("architecto"),
                    add("omnis"),
                    add("tenetur"),
                }};
            }};            

            GetChannelCatalogMarketplacePropertiesResponse res = sdk.marketplacesChannelCatalogsSettings.getChannelCatalogMarketplaceProperties(req);

            if (res.channelCatalogMarketplaceProperties != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChannelCatalogMarketplaceSettings

Get the marketplace settings for a channel catalog

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChannelCatalogMarketplaceSettingsRequest;
import org.openapis.openapi.models.operations.GetChannelCatalogMarketplaceSettingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChannelCatalogMarketplaceSettingsRequest req = new GetChannelCatalogMarketplaceSettingsRequest("quasi");            

            GetChannelCatalogMarketplaceSettingsResponse res = sdk.marketplacesChannelCatalogsSettings.getChannelCatalogMarketplaceSettings(req);

            if (res.channelCatalogMarketplaceSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setChannelCatalogMarketplaceSettings

Allow you to configure your marketplace settings.
Partial update accepted.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetChannelCatalogMarketplaceSettingsRequest;
import org.openapis.openapi.models.operations.SetChannelCatalogMarketplaceSettingsResponse;
import org.openapis.openapi.models.shared.ChannelCatalogMarketplaceSetting;
import org.openapis.openapi.models.shared.ChannelCatalogMarketplaceSettingDiscriminatorTypeEnum;
import org.openapis.openapi.models.shared.SetChannelCatalogMarketplaceSettingsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SetChannelCatalogMarketplaceSettingsRequest req = new SetChannelCatalogMarketplaceSettingsRequest("at",                 new SetChannelCatalogMarketplaceSettingsRequest(                new org.openapis.openapi.models.shared.ChannelCatalogMarketplaceSetting[]{{
                                                add(new ChannelCatalogMarketplaceSetting(ChannelCatalogMarketplaceSettingDiscriminatorTypeEnum.CHANNEL_CATALOG_MARKETPLACE_STRING_SETTING, "PaypalAddress") {{
                                                    discriminatorType = ChannelCatalogMarketplaceSettingDiscriminatorTypeEnum.CHANNEL_CATALOG_MARKETPLACE_INTEGER_SETTING;
                                                    name = "PaypalAddress";
                                                }}),
                                            }}););            

            SetChannelCatalogMarketplaceSettingsResponse res = sdk.marketplacesChannelCatalogsSettings.setChannelCatalogMarketplaceSettings(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
