# products

## Overview

With these endpoints you can manage your Products.
This also can be used to manage [Environments](#tag/Environments), [Configs](#tag/Configs), [Tags](#tag/Tags) and [Permission Groups](#tag/Permission-Groups) through this API.

<a href="https://configcat.com/docs/main-concepts/#product" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Products.

### Available Operations

* [createProduct](#createproduct) - Create Product
* [deleteProduct](#deleteproduct) - Delete Product
* [getProduct](#getproduct) - Get Product
* [getProducts](#getproducts) - List Products
* [updateProduct](#updateproduct) - Update Product

## createProduct

This endpoint creates a new Product in a specified Organization 
identified by the `organizationId` parameter, which can be obtained from the [List Organizations](#operation/get-organizations) endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProductRequest;
import org.openapis.openapi.models.operations.CreateProductResponse;
import org.openapis.openapi.models.shared.CreateProductRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illo", "aut") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            CreateProductRequest req = new CreateProductRequest(                new CreateProductRequest("doloribus") {{
                                description = "nostrum";
                            }};, "dd3d6fa1-804e-454c-82f1-68a363c8873e");            

            CreateProductResponse res = sdk.products.createProduct(req);

            if (res.productModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProduct

This endpoint removes a Product identified by the `productId` parameter.

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
                .setSecurity(new Security("tempora", "blanditiis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteProductRequest req = new DeleteProductRequest("4380b1f6-b8ca-4275-a60a-04c495cc6991");            

            DeleteProductResponse res = sdk.products.deleteProduct(req);

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

This endpoint returns the metadata of a Product 
identified by the `productId`.

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
                .setSecurity(new Security("nihil", "inventore") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetProductRequest req = new GetProductRequest("b51c1bdb-1cf4-4b88-8ebd-fc4ccca99bc7");            

            GetProductResponse res = sdk.products.getProduct(req);

            if (res.productModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProducts

This endpoint returns the list of the Products that belongs to the user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic", "maxime") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetProductsResponse res = sdk.products.getProducts();

            if (res.productModelHaljsons != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProduct

This endpoint updates a Product identified by the `productId` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProductRequest;
import org.openapis.openapi.models.operations.UpdateProductResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateProductRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium", "soluta") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            UpdateProductRequest req = new UpdateProductRequest(                new UpdateProductRequest() {{
                                description = "fugit";
                                name = "Mr. Guillermo Walter";
                            }};, "73e42b00-6d67-4887-8ba8-581a58208c54");            

            UpdateProductResponse res = sdk.products.updateProduct(req);

            if (res.productModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
