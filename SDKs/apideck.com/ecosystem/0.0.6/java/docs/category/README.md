# category

### Available Operations

* [categoriesAll](#categoriesall) - List categories
* [categoriesOne](#categoriesone) - Get category
* [categoryListingsAll](#categorylistingsall) - List category listings

## categoriesAll

List categories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CategoriesAllRequest;
import org.openapis.openapi.models.operations.CategoriesAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CategoriesAllRequest req = new CategoriesAllRequest("quibusdam") {{
                cursor = "unde";
                limit = 857946L;
            }};            

            CategoriesAllResponse res = sdk.category.categoriesAll(req);

            if (res.getCategoriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## categoriesOne

Get category

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CategoriesOneRequest;
import org.openapis.openapi.models.operations.CategoriesOneResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CategoriesOneRequest req = new CategoriesOneRequest("corrupti", "illum");            

            CategoriesOneResponse res = sdk.category.categoriesOne(req);

            if (res.getCategoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## categoryListingsAll

List category listings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CategoryListingsAllRequest;
import org.openapis.openapi.models.operations.CategoryListingsAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CategoryListingsAllRequest req = new CategoryListingsAllRequest("vel", "error") {{
                cursor = "deserunt";
                limit = 384382L;
            }};            

            CategoryListingsAllResponse res = sdk.category.categoryListingsAll(req);

            if (res.getListingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
