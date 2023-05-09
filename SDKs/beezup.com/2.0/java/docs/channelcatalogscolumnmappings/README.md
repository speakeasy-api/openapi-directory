# channelCatalogsColumnMappings

### Available Operations

* [configureChannelCatalogColumnMappings](#configurechannelcatalogcolumnmappings) - Configure channel catalog column mappings

## configureChannelCatalogColumnMappings

Configure channel catalog column mappings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfigureChannelCatalogColumnMappingsRequest;
import org.openapis.openapi.models.operations.ConfigureChannelCatalogColumnMappingsResponse;
import org.openapis.openapi.models.shared.ChannelCatalogColumnMapping;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfigureChannelCatalogColumnMappingsRequest req = new ConfigureChannelCatalogColumnMappingsRequest(                new org.openapis.openapi.models.shared.ChannelCatalogColumnMapping[]{{
                                add(new ChannelCatalogColumnMapping("8a76f06a-fefc-4c0d-bcfe-b210f1482977") {{
                                    catalogColumnId = "bea7c21e-948b-4ac3-9ffd-4396e62c4163";
                                    channelCategoryPath = new String[]{{
                                        add("a"),
                                    }};
                                    channelColumnId = "8a76f06a-fefc-4c0d-bcfe-b210f1482977";
                                }}),
                                add(new ChannelCatalogColumnMapping("8a76f06a-fefc-4c0d-bcfe-b210f1482977") {{
                                    catalogColumnId = "bea7c21e-948b-4ac3-9ffd-4396e62c4163";
                                    channelCategoryPath = new String[]{{
                                        add("aut"),
                                        add("aut"),
                                        add("deleniti"),
                                    }};
                                    channelColumnId = "8a76f06a-fefc-4c0d-bcfe-b210f1482977";
                                }}),
                            }}, "impedit");            

            ConfigureChannelCatalogColumnMappingsResponse res = sdk.channelCatalogsColumnMappings.configureChannelCatalogColumnMappings(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
