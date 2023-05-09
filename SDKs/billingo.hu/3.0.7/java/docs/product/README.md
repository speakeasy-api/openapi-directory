# product

## Overview

Product object represents your document's product.

### Available Operations

* [createProduct](#createproduct) - Create a product
* [deleteProduct](#deleteproduct) - Delete a product
* [getProduct](#getproduct) - Retrieve a product
* [listProduct](#listproduct) - List all product
* [updateProduct](#updateproduct) - Update a product

## createProduct

Create a new product. Returns a product object if the create is succeded.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProductResponse;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.ProductInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VatEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ProductInput req = new ProductInput(CurrencyEnum.USD, "eum", "non", VatEnum.AM) {{
                comment = "sint";
                generalLedgerNumber = "aliquid";
                generalLedgerTaxcode = "provident";
                netUnitPrice = 8960.39;
            }};            

            CreateProductResponse res = sdk.product.createProduct(req);

            if (res.product != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProduct

Delete an existing product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProductRequest;
import org.openapis.openapi.models.operations.DeleteProductResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProductRequest req = new DeleteProductRequest(638921L);            

            DeleteProductResponse res = sdk.product.deleteProduct(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProduct

Retrieves the details of an existing product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductRequest;
import org.openapis.openapi.models.operations.GetProductResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProductRequest req = new GetProductRequest(891555L);            

            GetProductResponse res = sdk.product.getProduct(req);

            if (res.product != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProduct

Returns a list of your products. The partners are returned sorted by creation date, with the most recent partners appearing first.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProductRequest;
import org.openapis.openapi.models.operations.ListProductResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProductRequest req = new ListProductRequest() {{
                page = 680056L;
                perPage = 447125L;
            }};            

            ListProductResponse res = sdk.product.listProduct(req);

            if (res.productList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProduct

Update an existing product. Returns a product object if the update is succeded.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProductRequest;
import org.openapis.openapi.models.operations.UpdateProductResponse;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.ProductInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VatEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateProductRequest req = new UpdateProductRequest(                new ProductInput(CurrencyEnum.SGD, "maiores", "rerum", VatEnum.TWELVE_PERCENT) {{
                                comment = "magnam";
                                generalLedgerNumber = "cumque";
                                generalLedgerTaxcode = "facere";
                                netUnitPrice = 4118.2;
                            }};, 396506L);            

            UpdateProductResponse res = sdk.product.updateProduct(req);

            if (res.product != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
