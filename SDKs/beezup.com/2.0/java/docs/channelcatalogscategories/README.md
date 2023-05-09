# channelCatalogsCategories

### Available Operations

* [configureChannelCatalogCategory](#configurechannelcatalogcategory) - Configure channel catalog category
* [disableChannelCatalogCategoryMapping](#disablechannelcatalogcategorymapping) - Disable a channel catalog category mapping
* [getChannelCatalogCategories](#getchannelcatalogcategories) - Get channel catalog categories
* [reenableChannelCatalogCategoryMapping](#reenablechannelcatalogcategorymapping) - Reenable a channel catalog category mapping

## configureChannelCatalogCategory

Configure channel catalog category

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfigureChannelCatalogCategoryRequest;
import org.openapis.openapi.models.operations.ConfigureChannelCatalogCategoryResponse;
import org.openapis.openapi.models.shared.ChannelCatalogCategoryConfiguration;
import org.openapis.openapi.models.shared.ConfigureCategoryRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfigureChannelCatalogCategoryRequest req = new ConfigureChannelCatalogCategoryRequest("aut",                 new ConfigureCategoryRequest(                new org.openapis.openapi.models.shared.ChannelCatalogCategoryConfiguration[]{{
                                                add(new ChannelCatalogCategoryConfiguration(true,                 new String[]{{
                                                                    add("alias"),
                                                                    add("officia"),
                                                                }}) {{
                                                    autoMapNewSubCategories = true;
                                                    catalogCategoryPath = new String[]{{
                                                        add("nulla"),
                                                        add("fugit"),
                                                    }};
                                                    channelCategoryPath = new String[]{{
                                                        add("maiores"),
                                                        add("doloribus"),
                                                        add("iusto"),
                                                        add("eligendi"),
                                                    }};
                                                    costValue = 10.21;
                                                }}),
                                                add(new ChannelCatalogCategoryConfiguration(true,                 new String[]{{
                                                                    add("magnam"),
                                                                    add("ratione"),
                                                                    add("ex"),
                                                                    add("laudantium"),
                                                                }}) {{
                                                    autoMapNewSubCategories = true;
                                                    catalogCategoryPath = new String[]{{
                                                        add("ipsam"),
                                                        add("ea"),
                                                    }};
                                                    channelCategoryPath = new String[]{{
                                                        add("vel"),
                                                    }};
                                                    costValue = 10.21;
                                                }}),
                                                add(new ChannelCatalogCategoryConfiguration(true,                 new String[]{{
                                                                    add("nostrum"),
                                                                    add("sapiente"),
                                                                    add("quisquam"),
                                                                    add("saepe"),
                                                                }}) {{
                                                    autoMapNewSubCategories = true;
                                                    catalogCategoryPath = new String[]{{
                                                        add("dolor"),
                                                    }};
                                                    channelCategoryPath = new String[]{{
                                                        add("quasi"),
                                                        add("ex"),
                                                        add("nulla"),
                                                        add("excepturi"),
                                                    }};
                                                    costValue = 10.21;
                                                }}),
                                                add(new ChannelCatalogCategoryConfiguration(true,                 new String[]{{
                                                                    add("ea"),
                                                                    add("quo"),
                                                                }}) {{
                                                    autoMapNewSubCategories = true;
                                                    catalogCategoryPath = new String[]{{
                                                        add("impedit"),
                                                        add("corporis"),
                                                    }};
                                                    channelCategoryPath = new String[]{{
                                                        add("aliquid"),
                                                        add("inventore"),
                                                    }};
                                                    costValue = 10.21;
                                                }}),
                                            }}, true););            

            ConfigureChannelCatalogCategoryResponse res = sdk.channelCatalogsCategories.configureChannelCatalogCategory(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableChannelCatalogCategoryMapping

Disable a channel catalog category mapping

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableChannelCatalogCategoryMappingRequest;
import org.openapis.openapi.models.operations.DisableChannelCatalogCategoryMappingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisableChannelCatalogCategoryMappingRequest req = new DisableChannelCatalogCategoryMappingRequest("consectetur");            

            DisableChannelCatalogCategoryMappingResponse res = sdk.channelCatalogsCategories.disableChannelCatalogCategoryMapping(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChannelCatalogCategories

Get channel catalog categories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChannelCatalogCategoriesRequest;
import org.openapis.openapi.models.operations.GetChannelCatalogCategoriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChannelCatalogCategoriesRequest req = new GetChannelCatalogCategoriesRequest("recusandae");            

            GetChannelCatalogCategoriesResponse res = sdk.channelCatalogsCategories.getChannelCatalogCategories(req);

            if (res.channelCatalogCategoryConfigurationList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reenableChannelCatalogCategoryMapping

Reenable a channel catalog category mapping

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReenableChannelCatalogCategoryMappingRequest;
import org.openapis.openapi.models.operations.ReenableChannelCatalogCategoryMappingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReenableChannelCatalogCategoryMappingRequest req = new ReenableChannelCatalogCategoryMappingRequest("aspernatur");            

            ReenableChannelCatalogCategoryMappingResponse res = sdk.channelCatalogsCategories.reenableChannelCatalogCategoryMapping(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
