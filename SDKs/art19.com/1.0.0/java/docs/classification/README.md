# classification

### Available Operations

* [getClassifications](#getclassifications) - Get a list of classifications
* [getClassificationsId](#getclassificationsid) - Get a specific classification

## getClassifications

Get a list of classifications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClassificationsRequest;
import org.openapis.openapi.models.operations.GetClassificationsResponse;
import org.openapis.openapi.models.operations.GetClassificationsSecurity;
import org.openapis.openapi.models.operations.GetClassificationsSortEnum;
import org.openapis.openapi.models.operations.GetClassificationsTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClassificationsRequest req = new GetClassificationsRequest() {{
                ids = new String[]{{
                    add("ff1a3a2f-a946-4773-9251-aa52c3f5ad01"),
                    add("9da1ffe7-8f09-47b0-874f-15471b5e6e13"),
                    add("b99d488e-1e91-4e45-8ad2-abd44269802d"),
                }};
                isCountry = "ipsam";
                pageNumber = 4695L;
                pageSize = 146441L;
                q = "dolorum";
                sort = new org.openapis.openapi.models.operations.GetClassificationsSortEnum[]{{
                    add(GetClassificationsSortEnum.CREATED_AT),
                    add(GetClassificationsSortEnum.VALUE),
                    add(GetClassificationsSortEnum.VALUE),
                }};
                type = GetClassificationsTypeEnum.GENRE;
            }};            

            GetClassificationsResponse res = sdk.classification.getClassifications(req, new GetClassificationsSecurity("delectus") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getClassifications200ApplicationVndApiPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getClassificationsId

Get a specific classification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClassificationsIdRequest;
import org.openapis.openapi.models.operations.GetClassificationsIdResponse;
import org.openapis.openapi.models.operations.GetClassificationsIdSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClassificationsIdRequest req = new GetClassificationsIdRequest("63c969e9-a3ef-4a77-9fb1-4cd66ae395ef");            

            GetClassificationsIdResponse res = sdk.classification.getClassificationsId(req, new GetClassificationsIdSecurity("quidem") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getClassificationsId200ApplicationVndApiPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
