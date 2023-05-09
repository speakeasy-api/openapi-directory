# randomFacts

## Overview

Get random facts based on category and other criteria.

Find out more
<http://fungenerators.com/api/facts#number>
### Available Operations

* [getFact](#getfact) - Get a Fact belonging to the id.
* [getFactCategories](#getfactcategories) - Get a random Fact.
* [getFactRandom](#getfactrandom) - Get a random Fact for a given category(optional) and subcategory(optional).
* [getFactSearch](#getfactsearch) - Search for random Fact which has the text in the query, for a given category(optional) and subcategory(optional).

## getFact

Get a Fact belonging to the id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFactRequest;
import org.openapis.openapi.models.operations.GetFactResponse;
import org.openapis.openapi.models.operations.GetFactSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFactRequest req = new GetFactRequest() {{
                id = "nisi";
            }};            

            GetFactResponse res = sdk.randomFacts.getFact(req, new GetFactSecurity("recusandae") {{
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

## getFactCategories

Get a random Fact.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFactCategoriesRequest;
import org.openapis.openapi.models.operations.GetFactCategoriesResponse;
import org.openapis.openapi.models.operations.GetFactCategoriesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFactCategoriesRequest req = new GetFactCategoriesRequest() {{
                start = 836079L;
            }};            

            GetFactCategoriesResponse res = sdk.randomFacts.getFactCategories(req, new GetFactCategoriesSecurity("ab") {{
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

## getFactRandom

Get a random Fact for a given category(optional) and subcategory(optional).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFactRandomRequest;
import org.openapis.openapi.models.operations.GetFactRandomResponse;
import org.openapis.openapi.models.operations.GetFactRandomSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFactRandomRequest req = new GetFactRandomRequest() {{
                category = "quis";
                subcategory = "veritatis";
            }};            

            GetFactRandomResponse res = sdk.randomFacts.getFactRandom(req, new GetFactRandomSecurity("deserunt") {{
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

## getFactSearch

Search for random Fact which has the text in the query, for a given category(optional) and subcategory(optional).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFactSearchRequest;
import org.openapis.openapi.models.operations.GetFactSearchResponse;
import org.openapis.openapi.models.operations.GetFactSearchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFactSearchRequest req = new GetFactSearchRequest() {{
                category = "perferendis";
                query = "ipsam";
                subcategory = "repellendus";
            }};            

            GetFactSearchResponse res = sdk.randomFacts.getFactSearch(req, new GetFactSearchSecurity("sapiente") {{
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
