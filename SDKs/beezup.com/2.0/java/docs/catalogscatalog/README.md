# catalogsCatalog

### Available Operations

* [catalogStoreIndex](#catalogstoreindex) - Get the index of the catalog API for this store
* [catalogChangeCatalogColumnUserName](#catalogchangecatalogcolumnusername) - Change Catalog Column User Name
* [catalogChangeCustomColumnExpression](#catalogchangecustomcolumnexpression) - Change custom column expression
* [catalogChangeCustomColumnUserName](#catalogchangecustomcolumnusername) - Change Custom Column User Name
* [catalogComputeExpression](#catalogcomputeexpression) - Compute the expression for this catalog.
* [catalogDeleteCustomColumn](#catalogdeletecustomcolumn) - Delete custom column
* [catalogGetCatalogColumns](#cataloggetcatalogcolumns) - Get catalog column list
* [catalogGetCategories](#cataloggetcategories) - Get category list
* [catalogGetCustomColumnExpression](#cataloggetcustomcolumnexpression) - Get the encrypted custom column expression
* [catalogGetCustomColumns](#cataloggetcustomcolumns) - Get custom column list
* [catalogGetProductByProductId](#cataloggetproductbyproductid) - Get product by ProductId
* [catalogGetProductBySku](#cataloggetproductbysku) - Get product by Sku
* [catalogGetProducts](#cataloggetproducts) - Get product list
* [catalogGetRandomProducts](#cataloggetrandomproducts) - Get random product list
* [catalogSaveCustomColumn](#catalogsavecustomcolumn) - Create or replace a custom column
* [importationGetManualUpdateLastInputConfig](#importationgetmanualupdatelastinputconfig) - Get the last input configuration

## catalogStoreIndex

The operation will give you all the operations you will be able to do on this store for this API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CatalogStoreIndexRequest;
import org.openapis.openapi.models.operations.CatalogStoreIndexResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CatalogStoreIndexRequest req = new CatalogStoreIndexRequest("quos");            

            CatalogStoreIndexResponse res = sdk.catalogsCatalog.catalogStoreIndex(req);

            if (res.catalogStoreIndex != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## catalogChangeCatalogColumnUserName

Change Catalog Column User Name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CatalogChangeCatalogColumnUserNameRequest;
import org.openapis.openapi.models.operations.CatalogChangeCatalogColumnUserNameResponse;
import org.openapis.openapi.models.shared.ChangeUserColumnNameRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CatalogChangeCatalogColumnUserNameRequest req = new CatalogChangeCatalogColumnUserNameRequest(                new ChangeUserColumnNameRequest("My SKU");, "perferendis", "magni");            

            CatalogChangeCatalogColumnUserNameResponse res = sdk.catalogsCatalog.catalogChangeCatalogColumnUserName(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## catalogChangeCustomColumnExpression

Change custom column expression

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CatalogChangeCustomColumnExpressionRequest;
import org.openapis.openapi.models.operations.CatalogChangeCustomColumnExpressionResponse;
import org.openapis.openapi.models.shared.ChangeCustomColumnExpressionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CatalogChangeCustomColumnExpressionRequest req = new CatalogChangeCustomColumnExpressionRequest(                new ChangeCustomColumnExpressionRequest("apokpoa,opz,sixsoisiosnoisn", "uziushdczaniodnndonisodndsiondsoidsndoin");, "assumenda", "ipsam");            

            CatalogChangeCustomColumnExpressionResponse res = sdk.catalogsCatalog.catalogChangeCustomColumnExpression(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## catalogChangeCustomColumnUserName

Change Custom Column User Name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CatalogChangeCustomColumnUserNameRequest;
import org.openapis.openapi.models.operations.CatalogChangeCustomColumnUserNameResponse;
import org.openapis.openapi.models.shared.ChangeUserColumnNameRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CatalogChangeCustomColumnUserNameRequest req = new CatalogChangeCustomColumnUserNameRequest(                new ChangeUserColumnNameRequest("My SKU");, "alias", "fugit");            

            CatalogChangeCustomColumnUserNameResponse res = sdk.catalogsCatalog.catalogChangeCustomColumnUserName(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## catalogComputeExpression

Compute the expression for this catalog.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CatalogComputeExpressionRequest;
import org.openapis.openapi.models.operations.CatalogComputeExpressionResponse;
import org.openapis.openapi.models.shared.ComputeExpressionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CatalogComputeExpressionRequest req = new CatalogComputeExpressionRequest(                new ComputeExpressionRequest("uziushdczaniodnndonisodndsiondsoidsndoin",                 new java.util.HashMap<String, String>() {{
                                                put("excepturi", "tempora");
                                                put("facilis", "tempore");
                                                put("labore", "delectus");
                                            }});, "eum");            

            CatalogComputeExpressionResponse res = sdk.catalogsCatalog.catalogComputeExpression(req);

            if (res.catalogComputeExpression200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## catalogDeleteCustomColumn

Delete custom column

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CatalogDeleteCustomColumnRequest;
import org.openapis.openapi.models.operations.CatalogDeleteCustomColumnResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CatalogDeleteCustomColumnRequest req = new CatalogDeleteCustomColumnRequest("non", "eligendi");            

            CatalogDeleteCustomColumnResponse res = sdk.catalogsCatalog.catalogDeleteCustomColumn(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## catalogGetCatalogColumns

Get catalog column list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CatalogGetCatalogColumnsRequest;
import org.openapis.openapi.models.operations.CatalogGetCatalogColumnsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CatalogGetCatalogColumnsRequest req = new CatalogGetCatalogColumnsRequest("sint");            

            CatalogGetCatalogColumnsResponse res = sdk.catalogsCatalog.catalogGetCatalogColumns(req);

            if (res.catalogColumnList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## catalogGetCategories

Get category list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CatalogGetCategoriesRequest;
import org.openapis.openapi.models.operations.CatalogGetCategoriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CatalogGetCategoriesRequest req = new CatalogGetCategoriesRequest(                new String[]{{
                                add("provident"),
                                add("necessitatibus"),
                            }}, "sint");            

            CatalogGetCategoriesResponse res = sdk.catalogsCatalog.catalogGetCategories(req);

            if (res.categoryList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## catalogGetCustomColumnExpression

Get the encrypted custom column expression

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CatalogGetCustomColumnExpressionRequest;
import org.openapis.openapi.models.operations.CatalogGetCustomColumnExpressionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CatalogGetCustomColumnExpressionRequest req = new CatalogGetCustomColumnExpressionRequest("officia", "dolor");            

            CatalogGetCustomColumnExpressionResponse res = sdk.catalogsCatalog.catalogGetCustomColumnExpression(req);

            if (res.catalogGetCustomColumnExpression200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## catalogGetCustomColumns

Get custom column list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CatalogGetCustomColumnsRequest;
import org.openapis.openapi.models.operations.CatalogGetCustomColumnsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CatalogGetCustomColumnsRequest req = new CatalogGetCustomColumnsRequest("debitis");            

            CatalogGetCustomColumnsResponse res = sdk.catalogsCatalog.catalogGetCustomColumns(req);

            if (res.customColumnList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## catalogGetProductByProductId

Get product by ProductId

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CatalogGetProductByProductIdRequest;
import org.openapis.openapi.models.operations.CatalogGetProductByProductIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CatalogGetProductByProductIdRequest req = new CatalogGetProductByProductIdRequest("a", "dolorum");            

            CatalogGetProductByProductIdResponse res = sdk.catalogsCatalog.catalogGetProductByProductId(req);

            if (res.product != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## catalogGetProductBySku

Get product by Sku

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CatalogGetProductBySkuRequest;
import org.openapis.openapi.models.operations.CatalogGetProductBySkuResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CatalogGetProductBySkuRequest req = new CatalogGetProductBySkuRequest("in", "in");            

            CatalogGetProductBySkuResponse res = sdk.catalogsCatalog.catalogGetProductBySku(req);

            if (res.product != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## catalogGetProducts

Get product list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CatalogGetProductsRequest;
import org.openapis.openapi.models.operations.CatalogGetProductsResponse;
import org.openapis.openapi.models.shared.GetProductsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CatalogGetProductsRequest req = new CatalogGetProductsRequest(                new GetProductsRequest(1, 100) {{
                                categoryPath = new String[]{{
                                    add("maiores"),
                                    add("rerum"),
                                    add("dicta"),
                                    add("magnam"),
                                }};
                                columnIdList = new String[]{{
                                    add("bea7c21e-948b-4ac3-9ffd-4396e62c4163"),
                                    add("bea7c21e-948b-4ac3-9ffd-4396e62c4163"),
                                    add("bea7c21e-948b-4ac3-9ffd-4396e62c4163"),
                                    add("bea7c21e-948b-4ac3-9ffd-4396e62c4163"),
                                }};
                                ean = "MySku123";
                                exists = true;
                                mpn = "MySku123";
                                orderByCatalogColumnId = "bea7c21e-948b-4ac3-9ffd-4396e62c4163";
                                productIdList = new String[]{{
                                    add("578419df-1bbf-41a6-96fa-862e42182b67"),
                                    add("578419df-1bbf-41a6-96fa-862e42182b67"),
                                    add("578419df-1bbf-41a6-96fa-862e42182b67"),
                                    add("578419df-1bbf-41a6-96fa-862e42182b67"),
                                }};
                                sku = "MySku123";
                                title = "Frigo";
                                withoutSubCategories = true;
                            }};, "ea");            

            CatalogGetProductsResponse res = sdk.catalogsCatalog.catalogGetProducts(req);

            if (res.productList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## catalogGetRandomProducts

We will return 10 products randomly selected with all product values

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CatalogGetRandomProductsRequest;
import org.openapis.openapi.models.operations.CatalogGetRandomProductsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CatalogGetRandomProductsRequest req = new CatalogGetRandomProductsRequest("aliquid");            

            CatalogGetRandomProductsResponse res = sdk.catalogsCatalog.catalogGetRandomProducts(req);

            if (res.randomProductList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## catalogSaveCustomColumn

Create or replace a custom column

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CatalogSaveCustomColumnRequest;
import org.openapis.openapi.models.operations.CatalogSaveCustomColumnResponse;
import org.openapis.openapi.models.shared.CreateCustomColumnRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CatalogSaveCustomColumnRequest req = new CatalogSaveCustomColumnRequest("laborum",                 new CreateCustomColumnRequest("Category", "apokpoa,opz,sixsoisiosnoisn", "uziushdczaniodnndonisodndsiondsoidsndoin", "My SKU");, "accusamus");            

            CatalogSaveCustomColumnResponse res = sdk.catalogsCatalog.catalogSaveCustomColumn(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importationGetManualUpdateLastInputConfig

Get the last input configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationGetManualUpdateLastInputConfigRequest;
import org.openapis.openapi.models.operations.ImportationGetManualUpdateLastInputConfigResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationGetManualUpdateLastInputConfigRequest req = new ImportationGetManualUpdateLastInputConfigRequest("non");            

            ImportationGetManualUpdateLastInputConfigResponse res = sdk.catalogsCatalog.importationGetManualUpdateLastInputConfig(req);

            if (res.lastManualImportInputConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
