# channelCatalogsExclusionFilters

### Available Operations

* [configureChannelCatalogExclusionFilters](#configurechannelcatalogexclusionfilters) - Configure channel catalog exclusion filters
* [getChannelCatalogExclusionFilters](#getchannelcatalogexclusionfilters) - Get channel catalog exclusion filters

## configureChannelCatalogExclusionFilters

Configure channel catalog exclusion filters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfigureChannelCatalogExclusionFiltersRequest;
import org.openapis.openapi.models.operations.ConfigureChannelCatalogExclusionFiltersResponse;
import org.openapis.openapi.models.shared.ExclusionFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfigureChannelCatalogExclusionFiltersRequest req = new ConfigureChannelCatalogExclusionFiltersRequest(                new org.openapis.openapi.models.shared.ExclusionFilter[]{{
                                add(new ExclusionFilter("8a76f06a-fefc-4c0d-bcfe-b210f1482977", true, "d9833f4b-718a-436f-bab5-89da3d21bf60", "Exclude sony products", "Contains", 1, 1) {{
                                    channelColumnId = "8a76f06a-fefc-4c0d-bcfe-b210f1482977";
                                    enabled = true;
                                    groupId = "d9833f4b-718a-436f-bab5-89da3d21bf60";
                                    name = "Exclude sony products";
                                    operatorName = "Contains";
                                    position = 1;
                                    positionInGroup = 1;
                                    value = "sony";
                                }}),
                                add(new ExclusionFilter("8a76f06a-fefc-4c0d-bcfe-b210f1482977", true, "d9833f4b-718a-436f-bab5-89da3d21bf60", "Exclude sony products", "Contains", 1, 1) {{
                                    channelColumnId = "8a76f06a-fefc-4c0d-bcfe-b210f1482977";
                                    enabled = true;
                                    groupId = "d9833f4b-718a-436f-bab5-89da3d21bf60";
                                    name = "Exclude sony products";
                                    operatorName = "Contains";
                                    position = 1;
                                    positionInGroup = 1;
                                    value = "sony";
                                }}),
                            }}, "fugit");            

            ConfigureChannelCatalogExclusionFiltersResponse res = sdk.channelCatalogsExclusionFilters.configureChannelCatalogExclusionFilters(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChannelCatalogExclusionFilters

Get channel catalog exclusion filters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChannelCatalogExclusionFiltersRequest;
import org.openapis.openapi.models.operations.GetChannelCatalogExclusionFiltersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChannelCatalogExclusionFiltersRequest req = new GetChannelCatalogExclusionFiltersRequest("accusamus");            

            GetChannelCatalogExclusionFiltersResponse res = sdk.channelCatalogsExclusionFilters.getChannelCatalogExclusionFilters(req);

            if (res.exclusionFiltersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
