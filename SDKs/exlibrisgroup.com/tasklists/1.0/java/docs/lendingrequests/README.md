# lendingRequests

### Available Operations

* [getAlmawsV1TaskListsRsLendingRequests](#getalmawsv1tasklistsrslendingrequests) - Get Lending Requests
* [postAlmawsV1TaskListsRsLendingRequests](#postalmawsv1tasklistsrslendingrequests) - Act on Lending Requests

## getAlmawsV1TaskListsRsLendingRequests

This API returns a list of lending requests in Alma

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAlmawsV1TaskListsRsLendingRequestsRequest;
import org.openapis.openapi.models.operations.GetAlmawsV1TaskListsRsLendingRequestsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAlmawsV1TaskListsRsLendingRequestsRequest req = new GetAlmawsV1TaskListsRsLendingRequestsRequest() {{
                library = "error";
                partner = "deserunt";
                printed = "suscipit";
                reported = "iure";
                requestedFormat = "magnam";
                status = "debitis";
                suppliedFormat = "ipsa";
            }};            

            GetAlmawsV1TaskListsRsLendingRequestsResponse res = sdk.lendingRequests.getAlmawsV1TaskListsRsLendingRequests(req);

            if (res.getAlmawsV1TaskListsRsLendingRequests200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAlmawsV1TaskListsRsLendingRequests

This API preforms the requested action on a list (specified by given filters) of lending requests in Alma

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAlmawsV1TaskListsRsLendingRequestsRequest;
import org.openapis.openapi.models.operations.PostAlmawsV1TaskListsRsLendingRequestsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAlmawsV1TaskListsRsLendingRequestsRequest req = new PostAlmawsV1TaskListsRsLendingRequestsRequest() {{
                library = "tempora";
                op = "suscipit";
                partner = "molestiae";
                printed = "minus";
                reported = "placeat";
                requestedFormat = "voluptatum";
                status = "iusto";
                suppliedFormat = "excepturi";
            }};            

            PostAlmawsV1TaskListsRsLendingRequestsResponse res = sdk.lendingRequests.postAlmawsV1TaskListsRsLendingRequests(req);

            if (res.onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
