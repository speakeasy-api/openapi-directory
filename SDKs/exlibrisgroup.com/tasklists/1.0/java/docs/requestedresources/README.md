# requestedResources

### Available Operations

* [getAlmawsV1TaskListsRequestedResources](#getalmawsv1tasklistsrequestedresources) - Get Requested Resources
* [postAlmawsV1TaskListsRequestedResources](#postalmawsv1tasklistsrequestedresources) - Act on Requested Resources

## getAlmawsV1TaskListsRequestedResources

This API returns a list of requested resources to be picked from the shelf in Alma

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAlmawsV1TaskListsRequestedResourcesRequest;
import org.openapis.openapi.models.operations.GetAlmawsV1TaskListsRequestedResourcesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAlmawsV1TaskListsRequestedResourcesRequest req = new GetAlmawsV1TaskListsRequestedResourcesRequest("esse", "totam") {{
                direction = "porro";
                limit = 678880L;
                location = "dicta";
                offset = 720633L;
                orderBy = "officia";
                pickupInst = "occaecati";
                printed = "fugit";
                reported = "deleniti";
            }};            

            GetAlmawsV1TaskListsRequestedResourcesResponse res = sdk.requestedResources.getAlmawsV1TaskListsRequestedResources(req);

            if (res.getAlmawsV1TaskListsRequestedResources200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAlmawsV1TaskListsRequestedResources

This API performs an action on requested resources that are on the shelf in Alma

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAlmawsV1TaskListsRequestedResourcesRequest;
import org.openapis.openapi.models.operations.PostAlmawsV1TaskListsRequestedResourcesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAlmawsV1TaskListsRequestedResourcesRequest req = new PostAlmawsV1TaskListsRequestedResourcesRequest() {{
                circDesk = "optio";
                library = "totam";
                location = "beatae";
                op = "commodi";
                pickupInst = "molestiae";
                printed = "modi";
                reported = "qui";
            }};            

            PostAlmawsV1TaskListsRequestedResourcesResponse res = sdk.requestedResources.postAlmawsV1TaskListsRequestedResources(req);

            if (res.onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
