# trending

## Overview

trending

### Available Operations

* [trendingGetTrendingCategories](#trendinggettrendingcategories) - Returns trending items for Bungie.net, collapsed into the first page of items per category. For pagination within a category, call GetTrendingCategory.
* [trendingGetTrendingCategory](#trendinggettrendingcategory) - Returns paginated lists of trending items for a category.
* [trendingGetTrendingEntryDetail](#trendinggettrendingentrydetail) - Returns the detailed results for a specific trending entry. Note that trending entries are uniquely identified by a combination of *both* the TrendingEntryType *and* the identifier: the identifier alone is not guaranteed to be globally unique.

## trendingGetTrendingCategories

Returns trending items for Bungie.net, collapsed into the first page of items per category. For pagination within a category, call GetTrendingCategory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TrendingGetTrendingCategoriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TrendingGetTrendingCategoriesResponse res = sdk.trending.trendingGetTrendingCategories();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## trendingGetTrendingCategory

Returns paginated lists of trending items for a category.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TrendingGetTrendingCategoryRequest;
import org.openapis.openapi.models.operations.TrendingGetTrendingCategoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TrendingGetTrendingCategoryRequest req = new TrendingGetTrendingCategoryRequest("vero", 345352);            

            TrendingGetTrendingCategoryResponse res = sdk.trending.trendingGetTrendingCategory(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## trendingGetTrendingEntryDetail

Returns the detailed results for a specific trending entry. Note that trending entries are uniquely identified by a combination of *both* the TrendingEntryType *and* the identifier: the identifier alone is not guaranteed to be globally unique.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TrendingGetTrendingEntryDetailRequest;
import org.openapis.openapi.models.operations.TrendingGetTrendingEntryDetailResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TrendingGetTrendingEntryDetailRequest req = new TrendingGetTrendingEntryDetailRequest("hic", 928082);            

            TrendingGetTrendingEntryDetailResponse res = sdk.trending.trendingGetTrendingEntryDetail(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
