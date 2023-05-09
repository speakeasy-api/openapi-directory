# products

### Available Operations

* [articleCreateArticle](#articlecreatearticle) - Creates a new product
* [articleDeleteArticle](#articledeletearticle) - Deletes a product
* [articleDeleteImage](#articledeleteimage) - Deletes a single image by id
* [articleDeleteImageFromProduct](#articledeleteimagefromproduct) - Deletes a single image from a product
* [articleGetArticle](#articlegetarticle) - Queries a single article by id or by sku
* [articleGetCategory](#articlegetcategory) - GEts a list of all defined categories
* [articleGetCustomField](#articlegetcustomfield) - Queries a single custom field
* [articleGetCustomFields](#articlegetcustomfields) - Queries a list of all custom fields
* [articleGetImage](#articlegetimage) - Returns a single image by id
* [articleGetImageFromProduct](#articlegetimagefromproduct) - Returns a single image by id
* [articleGetImages](#articlegetimages) - Returns a list of all images of the product
* [articleGetList](#articlegetlist) - Get a list of all products
* [articleGetPatchableFields](#articlegetpatchablefields) - Returns a list of fields which can be updated with the patch call
* [articleGetReservedAmount](#articlegetreservedamount) - Queries the reserved amount for a single article by id or by sku
* [articleGetStocks](#articlegetstocks) - Query all defined stock locations
* [articlePatchArticle](#articlepatcharticle) - Updates one or more fields of a product
* [articlePutImageForm](#articleputimageform) - Add or update an existing image of a product
* [articlePutImageJson](#articleputimagejson) - Add or update an existing image of a product
* [articlePutImageRaw](#articleputimageraw) - Add or update an existing image of a product
* [articleUpdateStockCodeForm](#articleupdatestockcodeform) - Update the stock code of an article
* [articleUpdateStockCodeJson](#articleupdatestockcodejson) - Update the stock code of an article
* [articleUpdateStockCodeRaw](#articleupdatestockcoderaw) - Update the stock code of an article
* [articleUpdateStockForm](#articleupdatestockform) - Update the stock qty of an article
* [articleUpdateStockJson](#articleupdatestockjson) - Update the stock qty of an article
* [articleUpdateStockRaw](#articleupdatestockraw) - Update the stock qty of an article
* [searchSearchForm](#searchsearchform) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [searchSearchJson](#searchsearchjson) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [searchSearchRaw](#searchsearchraw) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

## articleCreateArticle

Creates a new product

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleCreateArticleResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldDefinitionModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldDefinitionModelTypeEnum;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldValueModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelArticleAPIModelInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelArticleCategoryAPIModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelArticleSourceAPIModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelBomSubArticleAPIModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelStockArticleAPIModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesOrderMultiLanguageString;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelArticleAPIModelInput req = new BillbeeInterfacesBillbeeAPIModelArticleAPIModelInput(false, false, 3071.73, 552581, 9847.73, 8518.09, 668577) {{
                basicAttributes = new org.openapis.openapi.models.shared.BillbeeInterfacesOrderMultiLanguageString[]{{
                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                        languageCode = "velit";
                        text = "vitae";
                    }}),
                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                        languageCode = "nesciunt";
                        text = "similique";
                    }}),
                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                        languageCode = "illo";
                        text = "repellat";
                    }}),
                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                        languageCode = "nemo";
                        text = "doloribus";
                    }}),
                }};
                billOfMaterial = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelBomSubArticleAPIModel[]{{
                    add(new BillbeeInterfacesBillbeeAPIModelBomSubArticleAPIModel() {{
                        amount = 6033.23;
                        articleId = 275425L;
                        sku = "explicabo";
                    }}),
                    add(new BillbeeInterfacesBillbeeAPIModelBomSubArticleAPIModel() {{
                        amount = 3684.91;
                        articleId = 583193L;
                        sku = "optio";
                    }}),
                    add(new BillbeeInterfacesBillbeeAPIModelBomSubArticleAPIModel() {{
                        amount = 20.64;
                        articleId = 695947L;
                        sku = "nesciunt";
                    }}),
                    add(new BillbeeInterfacesBillbeeAPIModelBomSubArticleAPIModel() {{
                        amount = 4124.33;
                        articleId = 956124L;
                        sku = "consequuntur";
                    }}),
                }};
                category1 = new BillbeeInterfacesBillbeeAPIModelArticleCategoryAPIModel() {{
                    id = 330440L;
                    name = "Luke Mayer";
                }};;
                category2 = new BillbeeInterfacesBillbeeAPIModelArticleCategoryAPIModel() {{
                    id = 947822L;
                    name = "Pam Kirlin";
                }};;
                category3 = new BillbeeInterfacesBillbeeAPIModelArticleCategoryAPIModel() {{
                    id = 791762L;
                    name = "Doris Welch";
                }};;
                condition = 221218;
                costPrice = 4965.48;
                countryOfOrigin = "fuga";
                customFields = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldValueModel[]{{
                    add(new BillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldValueModel() {{
                        articleId = 102446L;
                        definition = new BillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldDefinitionModel() {{
                            configuration = new java.util.HashMap<String, Object>() {{
                                put("aliquid", "magni");
                            }};
                            id = 276650L;
                            isNullable = false;
                            name = "Maxine Ernser";
                            type = BillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldDefinitionModelTypeEnum.TWO;
                        }};
                        definitionId = 769634L;
                        id = 24577L;
                        value = new java.util.HashMap<String, Object>() {{
                            put("culpa", "consequuntur");
                            put("amet", "deserunt");
                        }};
                    }}),
                    add(new BillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldValueModel() {{
                        articleId = 268709L;
                        definition = new BillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldDefinitionModel() {{
                            configuration = new java.util.HashMap<String, Object>() {{
                                put("quod", "itaque");
                                put("a", "quisquam");
                            }};
                            id = 316550L;
                            isNullable = false;
                            name = "Mr. Kristopher Torphy";
                            type = BillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldDefinitionModelTypeEnum.ZERO;
                        }};
                        definitionId = 751033L;
                        id = 898193L;
                        value = new java.util.HashMap<String, Object>() {{
                            put("dicta", "vel");
                        }};
                    }}),
                }};
                deliveryTime = 595584;
                description = new org.openapis.openapi.models.shared.BillbeeInterfacesOrderMultiLanguageString[]{{
                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                        languageCode = "ullam";
                        text = "architecto";
                    }}),
                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                        languageCode = "accusantium";
                        text = "perferendis";
                    }}),
                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                        languageCode = "veritatis";
                        text = "provident";
                    }}),
                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                        languageCode = "cumque";
                        text = "iure";
                    }}),
                }};
                ean = "quibusdam";
                exportDescription = "quod";
                exportDescriptionMultiLanguage = new org.openapis.openapi.models.shared.BillbeeInterfacesOrderMultiLanguageString[]{{
                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                        languageCode = "recusandae";
                        text = "velit";
                    }}),
                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                        languageCode = "magnam";
                        text = "dignissimos";
                    }}),
                }};
                heightCm = 3884.04;
                id = 152283L;
                images = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel[]{{
                    add(new BillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel() {{
                        articleId = 616941L;
                        id = 588152L;
                        isDefault = false;
                        position = 739508;
                        thumbPathExt = "doloribus";
                        thumbUrl = "facilis";
                        url = "quidem";
                    }}),
                    add(new BillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel() {{
                        articleId = 932080L;
                        id = 389548L;
                        isDefault = false;
                        position = 601714;
                        thumbPathExt = "modi";
                        thumbUrl = "perspiciatis";
                        url = "hic";
                    }}),
                }};
                invoiceText = new org.openapis.openapi.models.shared.BillbeeInterfacesOrderMultiLanguageString[]{{
                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                        languageCode = "aspernatur";
                        text = "libero";
                    }}),
                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                        languageCode = "nam";
                        text = "incidunt";
                    }}),
                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                        languageCode = "recusandae";
                        text = "quod";
                    }}),
                }};
                isDeactivated = false;
                lengthCm = 6646.66;
                manufacturer = "saepe";
                materials = new org.openapis.openapi.models.shared.BillbeeInterfacesOrderMultiLanguageString[]{{
                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                        languageCode = "quo";
                        text = "nesciunt";
                    }}),
                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                        languageCode = "illum";
                        text = "nemo";
                    }}),
                }};
                occasion = 848722;
                recipient = 706872;
                sku = "non";
                shippingProductId = 649534L;
                shortDescription = new org.openapis.openapi.models.shared.BillbeeInterfacesOrderMultiLanguageString[]{{
                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                        languageCode = "recusandae";
                        text = "distinctio";
                    }}),
                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                        languageCode = "pariatur";
                        text = "ad";
                    }}),
                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                        languageCode = "facere";
                        text = "laborum";
                    }}),
                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                        languageCode = "eveniet";
                        text = "laborum";
                    }}),
                }};
                soldAmount = 2763.37;
                soldAmountLast30Days = 8023.56;
                soldSumGross = 3695.23;
                soldSumGrossLast30Days = 0.6;
                soldSumNet = 3798.94;
                soldSumNetLast30Days = 6472.1;
                sources = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelArticleSourceAPIModel[]{{
                    add(new BillbeeInterfacesBillbeeAPIModelArticleSourceAPIModel("error", "mollitia") {{
                        apiAccountId = 672889L;
                        apiAccountName = "est";
                        custom = new java.util.HashMap<String, Object>() {{
                            put("labore", "quo");
                            put("perferendis", "fugit");
                            put("aliquid", "magnam");
                        }};
                        exportFactor = 3085.28;
                        id = 755868;
                        source = "hic";
                        sourceId = "nostrum";
                        stockSyncInactive = false;
                        stockSyncMax = 8882.65;
                        stockSyncMin = 6036.5;
                        unitsPerItem = 8603.11;
                    }}),
                    add(new BillbeeInterfacesBillbeeAPIModelArticleSourceAPIModel("necessitatibus", "maxime") {{
                        apiAccountId = 298613L;
                        apiAccountName = "nostrum";
                        custom = new java.util.HashMap<String, Object>() {{
                            put("corrupti", "fuga");
                            put("facere", "impedit");
                        }};
                        exportFactor = 986.1;
                        id = 647218;
                        source = "quod";
                        sourceId = "laboriosam";
                        stockSyncInactive = false;
                        stockSyncMax = 411.79;
                        stockSyncMin = 315.74;
                        unitsPerItem = 8164.21;
                    }}),
                    add(new BillbeeInterfacesBillbeeAPIModelArticleSourceAPIModel("ipsa", "excepturi") {{
                        apiAccountId = 9375L;
                        apiAccountName = "eaque";
                        custom = new java.util.HashMap<String, Object>() {{
                            put("similique", "porro");
                        }};
                        exportFactor = 5024.53;
                        id = 60892;
                        source = "magni";
                        sourceId = "officiis";
                        stockSyncInactive = false;
                        stockSyncMax = 1483.79;
                        stockSyncMin = 8981.11;
                        unitsPerItem = 7732.59;
                    }}),
                }};
                stockCode = "a";
                stockCurrent = 9830;
                stockDesired = 5144.62;
                stockReduceItemsPerSale = 9822.48;
                stockWarning = 6.91;
                stocks = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelStockArticleAPIModel[]{{
                    add(new BillbeeInterfacesBillbeeAPIModelStockArticleAPIModel() {{
                        name = "Samuel Homenick";
                        stockCode = "velit";
                        stockCurrent = 2605.88;
                        stockDesired = 4582.12;
                        stockId = 446547L;
                        stockWarning = 7574.07;
                        unfulfilledAmount = 946.97;
                    }}),
                    add(new BillbeeInterfacesBillbeeAPIModelStockArticleAPIModel() {{
                        name = "Mr. Leigh Mann";
                        stockCode = "beatae";
                        stockCurrent = 2783.29;
                        stockDesired = 1165.58;
                        stockId = 139133L;
                        stockWarning = 3576.39;
                        unfulfilledAmount = 7014.41;
                    }}),
                    add(new BillbeeInterfacesBillbeeAPIModelStockArticleAPIModel() {{
                        name = "Miss Isabel Kassulke";
                        stockCode = "ex";
                        stockCurrent = 5556.79;
                        stockDesired = 857.94;
                        stockId = 356440L;
                        stockWarning = 626.88;
                        unfulfilledAmount = 6317.19;
                    }}),
                    add(new BillbeeInterfacesBillbeeAPIModelStockArticleAPIModel() {{
                        name = "Constance Dach";
                        stockCode = "omnis";
                        stockCurrent = 1512.3;
                        stockDesired = 2009.5;
                        stockId = 805463L;
                        stockWarning = 3378.41;
                        unfulfilledAmount = 5861.08;
                    }}),
                }};
                tags = new org.openapis.openapi.models.shared.BillbeeInterfacesOrderMultiLanguageString[]{{
                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                        languageCode = "excepturi";
                        text = "maiores";
                    }}),
                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                        languageCode = "laudantium";
                        text = "velit";
                    }}),
                }};
                taricNumber = "reiciendis";
                title = new org.openapis.openapi.models.shared.BillbeeInterfacesOrderMultiLanguageString[]{{
                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                        languageCode = "nemo";
                        text = "ipsa";
                    }}),
                }};
                unit = 787916;
                unitsPerItem = 9484.44;
                weight = 555294;
                weightNet = 476003;
                widthCm = 3956.34;
            }};            

            ArticleCreateArticleResponse res = sdk.products.articleCreateArticle(req);

            if (res.articleCreateArticle200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleDeleteArticle

Deletes a product

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleDeleteArticleRequest;
import org.openapis.openapi.models.operations.ArticleDeleteArticleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticleDeleteArticleRequest req = new ArticleDeleteArticleRequest(989033L);            

            ArticleDeleteArticleResponse res = sdk.products.articleDeleteArticle(req);

            if (res.articleDeleteArticle200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleDeleteImage

Deletes a single image by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleDeleteImageRequest;
import org.openapis.openapi.models.operations.ArticleDeleteImageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticleDeleteImageRequest req = new ArticleDeleteImageRequest(955466L);            

            ArticleDeleteImageResponse res = sdk.products.articleDeleteImage(req);

            if (res.articleDeleteImage200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleDeleteImageFromProduct

Deletes a single image from a product

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleDeleteImageFromProductRequest;
import org.openapis.openapi.models.operations.ArticleDeleteImageFromProductResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticleDeleteImageFromProductRequest req = new ArticleDeleteImageFromProductRequest(749702L, 598316L);            

            ArticleDeleteImageFromProductResponse res = sdk.products.articleDeleteImageFromProduct(req);

            if (res.articleDeleteImageFromProduct200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleGetArticle

Queries a single article by id or by sku

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleGetArticleRequest;
import org.openapis.openapi.models.operations.ArticleGetArticleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticleGetArticleRequest req = new ArticleGetArticleRequest("accusantium") {{
                lookupBy = "dicta";
            }};            

            ArticleGetArticleResponse res = sdk.products.articleGetArticle(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleGetCategory

GEts a list of all defined categories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleGetCategoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticleGetCategoryResponse res = sdk.products.articleGetCategory();

            if (res.articleGetCategory200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleGetCustomField

Queries a single custom field

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleGetCustomFieldRequest;
import org.openapis.openapi.models.operations.ArticleGetCustomFieldResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticleGetCustomFieldRequest req = new ArticleGetCustomFieldRequest(795546L);            

            ArticleGetCustomFieldResponse res = sdk.products.articleGetCustomField(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldDefinitionModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleGetCustomFields

Queries a list of all custom fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleGetCustomFieldsRequest;
import org.openapis.openapi.models.operations.ArticleGetCustomFieldsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticleGetCustomFieldsRequest req = new ArticleGetCustomFieldsRequest() {{
                page = 417539;
                pageSize = 908734;
            }};            

            ArticleGetCustomFieldsResponse res = sdk.products.articleGetCustomFields(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldDefinitionModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleGetImage

Returns a single image by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleGetImageRequest;
import org.openapis.openapi.models.operations.ArticleGetImageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticleGetImageRequest req = new ArticleGetImageRequest(781582L);            

            ArticleGetImageResponse res = sdk.products.articleGetImage(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleGetImageFromProduct

Returns a single image by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleGetImageFromProductRequest;
import org.openapis.openapi.models.operations.ArticleGetImageFromProductResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticleGetImageFromProductRequest req = new ArticleGetImageFromProductRequest(735740L, 693747L);            

            ArticleGetImageFromProductResponse res = sdk.products.articleGetImageFromProduct(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleGetImages

Returns a list of all images of the product

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleGetImagesRequest;
import org.openapis.openapi.models.operations.ArticleGetImagesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticleGetImagesRequest req = new ArticleGetImagesRequest(265930L);            

            ArticleGetImagesResponse res = sdk.products.articleGetImages(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleGetList

Get a list of all products

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleGetListRequest;
import org.openapis.openapi.models.operations.ArticleGetListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticleGetListRequest req = new ArticleGetListRequest() {{
                maximumBillBeeArticleId = 916341L;
                minCreatedAt = OffsetDateTime.parse("2022-09-28T07:51:13.943Z");
                minimumBillBeeArticleId = 194058L;
                page = 758194;
                pageSize = 992887;
            }};            

            ArticleGetListResponse res = sdk.products.articleGetList(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleGetPatchableFields

Returns a list of fields which can be updated with the patch call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleGetPatchableFieldsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticleGetPatchableFieldsResponse res = sdk.products.articleGetPatchableFields();

            if (res.articleGetPatchableFields200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleGetReservedAmount

Queries the reserved amount for a single article by id or by sku

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleGetReservedAmountRequest;
import org.openapis.openapi.models.operations.ArticleGetReservedAmountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticleGetReservedAmountRequest req = new ArticleGetReservedAmountRequest("esse") {{
                lookupBy = "blanditiis";
                stockId = 573610L;
            }};            

            ArticleGetReservedAmountResponse res = sdk.products.articleGetReservedAmount(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelGetReservedAmountResponseData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleGetStocks

Query all defined stock locations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleGetStocksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticleGetStocksResponse res = sdk.products.articleGetStocks();

            if (res.rechnungsdruckWebAppControllersAPIAPIResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelStockResponseData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articlePatchArticle

Updates one or more fields of a product

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticlePatchArticleRequest;
import org.openapis.openapi.models.operations.ArticlePatchArticleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticlePatchArticleRequest req = new ArticlePatchArticleRequest(                new java.util.HashMap<String, Object>() {{
                                put("a", "animi");
                                put("maiores", "itaque");
                                put("nulla", "deserunt");
                                put("corporis", "velit");
                            }}, 887701L);            

            ArticlePatchArticleResponse res = sdk.products.articlePatchArticle(req);

            if (res.articlePatchArticle200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articlePutImageForm

Add or update an existing image of a product

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticlePutImageFormRequest;
import org.openapis.openapi.models.operations.ArticlePutImageFormResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticlePutImageFormRequest req = new ArticlePutImageFormRequest(                new BillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel() {{
                                articleId = 315022L;
                                id = 638609L;
                                isDefault = false;
                                position = 902979;
                                thumbPathExt = "eum";
                                thumbUrl = "repudiandae";
                                url = "accusantium";
                            }};, 637840L, 770128L);            

            ArticlePutImageFormResponse res = sdk.products.articlePutImageForm(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articlePutImageJson

Add or update an existing image of a product

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticlePutImageJsonRequest;
import org.openapis.openapi.models.operations.ArticlePutImageJsonResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticlePutImageJsonRequest req = new ArticlePutImageJsonRequest(                new BillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel() {{
                                articleId = 97896L;
                                id = 502106L;
                                isDefault = false;
                                position = 260911;
                                thumbPathExt = "quisquam";
                                thumbUrl = "eos";
                                url = "nobis";
                            }};, 620054L, 793568L);            

            ArticlePutImageJsonResponse res = sdk.products.articlePutImageJson(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articlePutImageRaw

Add or update an existing image of a product

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticlePutImageRawRequest;
import org.openapis.openapi.models.operations.ArticlePutImageRawResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArticlePutImageRawRequest req = new ArticlePutImageRawRequest("quia".getBytes(), 300651L, 440847L);            

            ArticlePutImageRawResponse res = sdk.products.articlePutImageRaw(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleUpdateStockCodeForm

Update the stock code of an article

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleUpdateStockCodeFormResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelUpdateStockCodeAPIModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelUpdateStockCodeAPIModel req = new BillbeeInterfacesBillbeeAPIModelUpdateStockCodeAPIModel() {{
                billbeeId = 800799L;
                sku = "quos";
                stockCode = "corrupti";
                stockId = 227870L;
            }};            

            ArticleUpdateStockCodeFormResponse res = sdk.products.articleUpdateStockCodeForm(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelUpdateStockCodeResponseData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleUpdateStockCodeJson

Update the stock code of an article

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleUpdateStockCodeJsonResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelUpdateStockCodeAPIModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelUpdateStockCodeAPIModel req = new BillbeeInterfacesBillbeeAPIModelUpdateStockCodeAPIModel() {{
                billbeeId = 473326L;
                sku = "amet";
                stockCode = "laborum";
                stockId = 266946L;
            }};            

            ArticleUpdateStockCodeJsonResponse res = sdk.products.articleUpdateStockCodeJson(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelUpdateStockCodeResponseData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleUpdateStockCodeRaw

Update the stock code of an article

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleUpdateStockCodeRawResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelUpdateStockCodeAPIModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "perferendis".getBytes()            

            ArticleUpdateStockCodeRawResponse res = sdk.products.articleUpdateStockCodeRaw(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelUpdateStockCodeResponseData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleUpdateStockForm

The article is specified by sku. You have to send the absolute value for the current stock

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleUpdateStockFormResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelUpdateStockAPIModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelUpdateStockAPIModel req = new BillbeeInterfacesBillbeeAPIModelUpdateStockAPIModel() {{
                autosubtractReservedAmount = false;
                billbeeId = 897058L;
                deltaQuantity = 1023.16;
                forceSendStockToShops = false;
                newQuantity = 5646.27;
                oldQuantity = 2921.77;
                reason = "sunt";
                sku = "maiores";
                stockId = 205011L;
            }};            

            ArticleUpdateStockFormResponse res = sdk.products.articleUpdateStockForm(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelUpdateStockResponseData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleUpdateStockJson

The article is specified by sku. You have to send the absolute value for the current stock

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleUpdateStockJsonResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelUpdateStockAPIModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelUpdateStockAPIModel req = new BillbeeInterfacesBillbeeAPIModelUpdateStockAPIModel() {{
                autosubtractReservedAmount = false;
                billbeeId = 139745L;
                deltaQuantity = 9368.45;
                forceSendStockToShops = false;
                newQuantity = 3305.96;
                oldQuantity = 3731.06;
                reason = "eaque";
                sku = "exercitationem";
                stockId = 331269L;
            }};            

            ArticleUpdateStockJsonResponse res = sdk.products.articleUpdateStockJson(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelUpdateStockResponseData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## articleUpdateStockRaw

The article is specified by sku. You have to send the absolute value for the current stock

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleUpdateStockRawResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelUpdateStockAPIModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "nihil".getBytes()            

            ArticleUpdateStockRawResponse res = sdk.products.articleUpdateStockRaw(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelUpdateStockResponseData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchSearchForm

Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchSearchFormResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModel;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModel req = new RechnungsdruckWebAppControllersApiSearchControllerSearchModel() {{
                searchMode = RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum.ONE;
                term = "nisi";
                type = new String[]{{
                    add("quis"),
                    add("quibusdam"),
                    add("nemo"),
                    add("suscipit"),
                }};
            }};            

            SearchSearchFormResponse res = sdk.products.searchSearchForm(req);

            if (res.rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchSearchJson

Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchSearchJsonResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModel;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModel req = new RechnungsdruckWebAppControllersApiSearchControllerSearchModel() {{
                searchMode = RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum.FOUR;
                term = "sit";
                type = new String[]{{
                    add("repellendus"),
                    add("perferendis"),
                    add("id"),
                }};
            }};            

            SearchSearchJsonResponse res = sdk.products.searchSearchJson(req);

            if (res.rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchSearchRaw

Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchSearchRawResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModel;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "sapiente".getBytes()            

            SearchSearchRawResponse res = sdk.products.searchSearchRaw(req);

            if (res.rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
