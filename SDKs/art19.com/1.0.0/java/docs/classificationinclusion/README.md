# classificationInclusion

### Available Operations

* [getClassificationInclusions](#getclassificationinclusions) - Get ClassificationInclusion records
* [getClassificationInclusionsId](#getclassificationinclusionsid) - Get a specific classification inclusion

## getClassificationInclusions

Classification Inclusions connect classifications with entities like series, episodes, or campaigns, amongst others.

In order to retrieve a set of classification inclusions, at least one of the following filter parameters must
be provided. Failing to do so renders a `400 Bad Request` response.

- `ids[]`
- `classified_id` and `classified_type`
- `classified_id` and `classification_type`
- `classification_id` and `classified_type`


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClassificationInclusionsClassificationTypeEnum;
import org.openapis.openapi.models.operations.GetClassificationInclusionsClassifiedTypeEnum;
import org.openapis.openapi.models.operations.GetClassificationInclusionsRequest;
import org.openapis.openapi.models.operations.GetClassificationInclusionsResponse;
import org.openapis.openapi.models.operations.GetClassificationInclusionsSecurity;
import org.openapis.openapi.models.operations.GetClassificationInclusionsSortEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClassificationInclusionsRequest req = new GetClassificationInclusionsRequest() {{
                classificationId = "9ba88f3a-6699-4707-8ba4-469b6e214195";
                classificationType = GetClassificationInclusionsClassificationTypeEnum.INDUSTRY;
                classifiedId = "890afa56-3e25-416f-a4c8-b711e5b7fd2e";
                classifiedType = GetClassificationInclusionsClassifiedTypeEnum.EPISODE;
                ids = new String[]{{
                    add("28921cdd-c692-4601-bb57-6b0d5f0d30c5"),
                }};
                pageNumber = 944124L;
                pageSize = 729991L;
                q = "nobis";
                sort = new org.openapis.openapi.models.operations.GetClassificationInclusionsSortEnum[]{{
                    add(GetClassificationInclusionsSortEnum.CREATED_AT),
                }};
            }};            

            GetClassificationInclusionsResponse res = sdk.classificationInclusion.getClassificationInclusions(req, new GetClassificationInclusionsSecurity("totam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getClassificationInclusions200ApplicationVndApiPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getClassificationInclusionsId

Get a specific classification inclusion

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClassificationInclusionsIdRequest;
import org.openapis.openapi.models.operations.GetClassificationInclusionsIdResponse;
import org.openapis.openapi.models.operations.GetClassificationInclusionsIdSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClassificationInclusionsIdRequest req = new GetClassificationInclusionsIdRequest("7053202c-73d5-4fe9-b90c-28909b3fe49a");            

            GetClassificationInclusionsIdResponse res = sdk.classificationInclusion.getClassificationInclusionsId(req, new GetClassificationInclusionsIdSecurity("deleniti") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getClassificationInclusionsId200ApplicationVndApiPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
