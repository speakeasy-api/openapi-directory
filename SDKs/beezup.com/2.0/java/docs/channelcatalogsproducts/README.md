# channelCatalogsProducts

### Available Operations

* [exportChannelCatalogProductInfoList](#exportchannelcatalogproductinfolist) - Export channel catalog product information list
* [getChannelCatalogProductByChannelCatalog](#getchannelcatalogproductbychannelcatalog) - Get channel catalog products related to these channel catalogs
* [getChannelCatalogProductInfo](#getchannelcatalogproductinfo) - Get channel catalog product information
* [getChannelCatalogProductInfoList](#getchannelcatalogproductinfolist) - Get channel catalog product information list
* [getChannelCatalogProductsCounters](#getchannelcatalogproductscounters) - Get channel catalog products' counters

## exportChannelCatalogProductInfoList

Export channel catalog product information list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportChannelCatalogProductInfoListRequest;
import org.openapis.openapi.models.operations.ExportChannelCatalogProductInfoListResponse;
import org.openapis.openapi.models.shared.BeezUPCommonAdditionalProductFiltersValue;
import org.openapis.openapi.models.shared.BeezUPCommonCatalogCategoryFilter;
import org.openapis.openapi.models.shared.BeezUPCommonChannelCategoryFilter;
import org.openapis.openapi.models.shared.ChannelCatalogProductFilters;
import org.openapis.openapi.models.shared.ExportFormatInQueryGeneralParameterEnum;
import org.openapis.openapi.models.shared.GetChannelCatalogProductInfoListRequest;
import org.openapis.openapi.models.shared.ProductSetVisibilityCriteria;
import org.openapis.openapi.models.shared.ProductSetVisibilityCriteriaLogicTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportChannelCatalogProductInfoListRequest req = new ExportChannelCatalogProductInfoListRequest("assumenda", ExportFormatInQueryGeneralParameterEnum.CSV,                 new GetChannelCatalogProductInfoListRequest(                new ProductSetVisibilityCriteria(ProductSetVisibilityCriteriaLogicTypeEnum.FUNNEL) {{
                                                disabled = true;
                                                excluded = true;
                                                exist = true;
                                                uncategorized = true;
                                            }};, 1, 100) {{
                                catalogCategoryFilter = new BeezUPCommonCatalogCategoryFilter() {{
                                    categoryPath = new String[]{{
                                        add("quasi"),
                                        add("tempora"),
                                        add("numquam"),
                                    }};
                                }};;
                                channelCategoryFilter = new BeezUPCommonChannelCategoryFilter() {{
                                    categoryPath = new String[]{{
                                        add("provident"),
                                    }};
                                }};;
                                overridden = true;
                                productFilters = new ChannelCatalogProductFilters() {{
                                    additionalProductFilters = new java.util.HashMap<String, org.openapis.openapi.models.shared.BeezUPCommonAdditionalProductFiltersValue>() {{
                                        put("molestiae", new BeezUPCommonAdditionalProductFiltersValue() {{
                                            operatorName = "magnam";
                                            values = new String[]{{
                                                add("eius"),
                                                add("esse"),
                                            }};
                                        }});
                                    }};
                                    catalogEans = new String[]{{
                                        add("rem"),
                                        add("fuga"),
                                    }};
                                    catalogMpns = new String[]{{
                                        add("quidem"),
                                        add("fugiat"),
                                    }};
                                    catalogSkus = new String[]{{
                                        add("eum"),
                                        add("suscipit"),
                                    }};
                                    channelEans = new String[]{{
                                        add("eos"),
                                        add("praesentium"),
                                        add("quisquam"),
                                        add("veritatis"),
                                    }};
                                    channelMpns = new String[]{{
                                        add("id"),
                                    }};
                                    channelSkus = new String[]{{
                                        add("neque"),
                                        add("quo"),
                                        add("illum"),
                                    }};
                                    title = "Refrigérateur";
                                }};;
                            }};);            

            ExportChannelCatalogProductInfoListResponse res = sdk.channelCatalogsProducts.exportChannelCatalogProductInfoList(req);

            if (res.beezUPCommonLink3 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChannelCatalogProductByChannelCatalog

Get channel catalog products related to these channel catalogs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChannelCatalogProductByChannelCatalogResponse;
import org.openapis.openapi.models.shared.ChannelCatalogProductByChannelCatalogRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ChannelCatalogProductByChannelCatalogRequest req = new ChannelCatalogProductByChannelCatalogRequest(                new String[]{{
                                add("6d6b04de-406b-4539-8e7e-bf3e8da5dfb0"),
                                add("6d6b04de-406b-4539-8e7e-bf3e8da5dfb0"),
                                add("6d6b04de-406b-4539-8e7e-bf3e8da5dfb0"),
                                add("6d6b04de-406b-4539-8e7e-bf3e8da5dfb0"),
                            }}, "578419df-1bbf-41a6-96fa-862e42182b67", "64f43358-63a1-47f7-97ec-0301fc39956b");            

            GetChannelCatalogProductByChannelCatalogResponse res = sdk.channelCatalogsProducts.getChannelCatalogProductByChannelCatalog(req);

            if (res.channelCatalogProductByChannelCatalogResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChannelCatalogProductInfo

Get channel catalog product information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChannelCatalogProductInfoRequest;
import org.openapis.openapi.models.operations.GetChannelCatalogProductInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChannelCatalogProductInfoRequest req = new GetChannelCatalogProductInfoRequest("fuga", "eius");            

            GetChannelCatalogProductInfoResponse res = sdk.channelCatalogsProducts.getChannelCatalogProductInfo(req);

            if (res.channelCatalogProductInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChannelCatalogProductInfoList

Get channel catalog product information list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChannelCatalogProductInfoListRequest;
import org.openapis.openapi.models.operations.GetChannelCatalogProductInfoListResponse;
import org.openapis.openapi.models.shared.BeezUPCommonAdditionalProductFiltersValue;
import org.openapis.openapi.models.shared.BeezUPCommonCatalogCategoryFilter;
import org.openapis.openapi.models.shared.BeezUPCommonChannelCategoryFilter;
import org.openapis.openapi.models.shared.ChannelCatalogProductFilters;
import org.openapis.openapi.models.shared.GetChannelCatalogProductInfoListRequest;
import org.openapis.openapi.models.shared.ProductSetVisibilityCriteria;
import org.openapis.openapi.models.shared.ProductSetVisibilityCriteriaLogicTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChannelCatalogProductInfoListRequest req = new GetChannelCatalogProductInfoListRequest("eos",                 new GetChannelCatalogProductInfoListRequest(                new ProductSetVisibilityCriteria(ProductSetVisibilityCriteriaLogicTypeEnum.FUNNEL) {{
                                                disabled = true;
                                                excluded = true;
                                                exist = true;
                                                uncategorized = true;
                                            }};, 1, 100) {{
                                catalogCategoryFilter = new BeezUPCommonCatalogCategoryFilter() {{
                                    categoryPath = new String[]{{
                                        add("cupiditate"),
                                    }};
                                }};;
                                channelCategoryFilter = new BeezUPCommonChannelCategoryFilter() {{
                                    categoryPath = new String[]{{
                                        add("tempora"),
                                    }};
                                }};;
                                overridden = true;
                                productFilters = new ChannelCatalogProductFilters() {{
                                    additionalProductFilters = new java.util.HashMap<String, org.openapis.openapi.models.shared.BeezUPCommonAdditionalProductFiltersValue>() {{
                                        put("ipsam", new BeezUPCommonAdditionalProductFiltersValue() {{
                                            operatorName = "aspernatur";
                                            values = new String[]{{
                                                add("quo"),
                                            }};
                                        }});
                                        put("esse", new BeezUPCommonAdditionalProductFiltersValue() {{
                                            operatorName = "recusandae";
                                            values = new String[]{{
                                                add("distinctio"),
                                            }};
                                        }});
                                        put("quod", new BeezUPCommonAdditionalProductFiltersValue() {{
                                            operatorName = "dignissimos";
                                            values = new String[]{{
                                                add("nihil"),
                                            }};
                                        }});
                                        put("totam", new BeezUPCommonAdditionalProductFiltersValue() {{
                                            operatorName = "accusamus";
                                            values = new String[]{{
                                                add("odio"),
                                                add("occaecati"),
                                            }};
                                        }});
                                    }};
                                    catalogEans = new String[]{{
                                        add("sapiente"),
                                        add("dolores"),
                                    }};
                                    catalogMpns = new String[]{{
                                        add("molestiae"),
                                        add("accusantium"),
                                        add("porro"),
                                    }};
                                    catalogSkus = new String[]{{
                                        add("quas"),
                                        add("praesentium"),
                                    }};
                                    channelEans = new String[]{{
                                        add("deleniti"),
                                    }};
                                    channelMpns = new String[]{{
                                        add("fuga"),
                                    }};
                                    channelSkus = new String[]{{
                                        add("incidunt"),
                                        add("atque"),
                                        add("explicabo"),
                                    }};
                                    title = "Refrigérateur";
                                }};;
                            }};);            

            GetChannelCatalogProductInfoListResponse res = sdk.channelCatalogsProducts.getChannelCatalogProductInfoList(req);

            if (res.channelCatalogProductInfoList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChannelCatalogProductsCounters

Get channel catalog products' counters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChannelCatalogProductsCountersRequest;
import org.openapis.openapi.models.operations.GetChannelCatalogProductsCountersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChannelCatalogProductsCountersRequest req = new GetChannelCatalogProductsCountersRequest("minima");            

            GetChannelCatalogProductsCountersResponse res = sdk.channelCatalogsProducts.getChannelCatalogProductsCounters(req);

            if (res.channelCatalogProductsCounters != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
