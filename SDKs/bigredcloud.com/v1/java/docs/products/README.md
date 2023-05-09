# products

### Available Operations

* [productsDelete](#productsdelete) - Removes an existing Product.
* [productsGet](#productsget) - Returns a list of company's Products. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "stockCode" fields.
* [productsPost](#productspost) - Creates a new Product.
* [productsProcessBatch](#productsprocessbatch) - Processes a batch of Products.
* [productsPut](#productsput) - Updates an existing Product.
* [getV1ProductsId](#getv1productsid) - Returns information about a single Product.

## productsDelete

Removes an existing Product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductsDeleteRequest;
import org.openapis.openapi.models.operations.ProductsDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductsDeleteRequest req = new ProductsDeleteRequest(703218L, "est");            

            ProductsDeleteResponse res = sdk.products.productsDelete(req);

            if (res.productsDelete200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productsGet

Returns a list of company's Products. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "stockCode" fields.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductsGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductsGetResponse res = sdk.products.productsGet();

            if (res.pageResultProductDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productsPost

Creates a new Product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductsPostResponse;
import org.openapis.openapi.models.shared.ProductDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ProductDto req = new ProductDto() {{
                details = new String[]{{
                    add("voluptatem"),
                    add("sapiente"),
                    add("officiis"),
                }};
                grossUnitPrice = false;
                hasDefaultVatRate = false;
                id = 103298L;
                productTypeId = 682119L;
                stockCode = "pariatur";
                timestamp = "debitis";
                unitPrice = 291.9;
                vatAnalysisTypeId = 1207L;
                vatRateId = 534917L;
            }};            

            ProductsPostResponse res = sdk.products.productsPost(req);

            if (res.productsPost200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productsProcessBatch

Processes a batch of Products.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductsProcessBatchResponse;
import org.openapis.openapi.models.shared.BatchItemProductDto;
import org.openapis.openapi.models.shared.BatchItemProductDtoOpCodeEnum;
import org.openapis.openapi.models.shared.ProductDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.BatchItemProductDto[]{{
                add(new BatchItemProductDto() {{
                    item = new ProductDto() {{
                        details = new String[]{{
                            add("sapiente"),
                            add("rem"),
                        }};
                        grossUnitPrice = false;
                        hasDefaultVatRate = false;
                        id = 796320L;
                        productTypeId = 365100L;
                        stockCode = "asperiores";
                        timestamp = "ratione";
                        unitPrice = 3552.25;
                        vatAnalysisTypeId = 19122L;
                        vatRateId = 848341L;
                    }};
                    opCode = BatchItemProductDtoOpCodeEnum.TWO;
                }}),
                add(new BatchItemProductDto() {{
                    item = new ProductDto() {{
                        details = new String[]{{
                            add("quibusdam"),
                            add("nam"),
                            add("ipsam"),
                            add("culpa"),
                        }};
                        grossUnitPrice = false;
                        hasDefaultVatRate = false;
                        id = 222864L;
                        productTypeId = 307376L;
                        stockCode = "inventore";
                        timestamp = "deleniti";
                        unitPrice = 853.11;
                        vatAnalysisTypeId = 274575L;
                        vatRateId = 221396L;
                    }};
                    opCode = BatchItemProductDtoOpCodeEnum.ONE;
                }}),
                add(new BatchItemProductDto() {{
                    item = new ProductDto() {{
                        details = new String[]{{
                            add("sit"),
                        }};
                        grossUnitPrice = false;
                        hasDefaultVatRate = false;
                        id = 265039L;
                        productTypeId = 144286L;
                        stockCode = "ab";
                        timestamp = "laudantium";
                        unitPrice = 656.04;
                        vatAnalysisTypeId = 222658L;
                        vatRateId = 856277L;
                    }};
                    opCode = BatchItemProductDtoOpCodeEnum.TWO;
                }}),
                add(new BatchItemProductDto() {{
                    item = new ProductDto() {{
                        details = new String[]{{
                            add("ipsa"),
                        }};
                        grossUnitPrice = false;
                        hasDefaultVatRate = false;
                        id = 559682L;
                        productTypeId = 911198L;
                        stockCode = "impedit";
                        timestamp = "officiis";
                        unitPrice = 4564.1;
                        vatAnalysisTypeId = 897277L;
                        vatRateId = 153369L;
                    }};
                    opCode = BatchItemProductDtoOpCodeEnum.ONE;
                }}),
            }}            

            ProductsProcessBatchResponse res = sdk.products.productsProcessBatch(req);

            if (res.productsProcessBatch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productsPut

Updates an existing Product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductsPutRequest;
import org.openapis.openapi.models.operations.ProductsPutResponse;
import org.openapis.openapi.models.shared.ProductDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductsPutRequest req = new ProductsPutRequest(                new ProductDto() {{
                                details = new String[]{{
                                    add("expedita"),
                                }};
                                grossUnitPrice = false;
                                hasDefaultVatRate = false;
                                id = 432984L;
                                productTypeId = 426943L;
                                stockCode = "voluptatum";
                                timestamp = "magnam";
                                unitPrice = 3494.4;
                                vatAnalysisTypeId = 70410L;
                                vatRateId = 781480L;
                            }};, 421844L);            

            ProductsPutResponse res = sdk.products.productsPut(req);

            if (res.productsPut200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV1ProductsId

Returns information about a single Product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV1ProductsIdRequest;
import org.openapis.openapi.models.operations.GetV1ProductsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1ProductsIdRequest req = new GetV1ProductsIdRequest(751022L);            

            GetV1ProductsIdResponse res = sdk.products.getV1ProductsId(req);

            if (res.productDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
