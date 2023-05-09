# factOfTheDay

## Overview

Get fact of the day on various categories. This is refreshed daily.

Find out more
<http://fungenerators.com/api/facts#fact-of-the-day>
### Available Operations

* [getFactFod](#getfactfod) - Get fact of the day for the given category.
* [getFactFodCategories](#getfactfodcategories) - Get the list of supported fact of the day categories.

## getFactFod

Get fact of the day for the given category.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFactFodRequest;
import org.openapis.openapi.models.operations.GetFactFodResponse;
import org.openapis.openapi.models.operations.GetFactFodSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFactFodRequest req = new GetFactFodRequest() {{
                category = "distinctio";
            }};            

            GetFactFodResponse res = sdk.factOfTheDay.getFactFod(req, new GetFactFodSecurity("quibusdam") {{
                xFungeneratorsApiSecret = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFactFodCategories

Get the list of supported fact of the day categories.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFactFodCategoriesResponse;
import org.openapis.openapi.models.operations.GetFactFodCategoriesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFactFodCategoriesResponse res = sdk.factOfTheDay.getFactFodCategories(new GetFactFodCategoriesSecurity("unde") {{
                xFungeneratorsApiSecret = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
