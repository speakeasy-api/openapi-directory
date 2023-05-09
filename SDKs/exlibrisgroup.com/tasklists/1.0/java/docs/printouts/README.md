# printouts

### Available Operations

* [getAlmawsV1TaskListsPrintouts](#getalmawsv1tasklistsprintouts) - Retrieve Printouts
* [getAlmawsV1TaskListsPrintoutsPrintoutId](#getalmawsv1tasklistsprintoutsprintoutid) - Retrieve a Printout
* [postAlmawsV1TaskListsPrintouts](#postalmawsv1tasklistsprintouts) - Act on Printouts
* [postAlmawsV1TaskListsPrintoutsPrintoutId](#postalmawsv1tasklistsprintoutsprintoutid) - Printout Service

## getAlmawsV1TaskListsPrintouts

This API returns a list of Printouts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAlmawsV1TaskListsPrintoutsRequest;
import org.openapis.openapi.models.operations.GetAlmawsV1TaskListsPrintoutsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAlmawsV1TaskListsPrintoutsRequest req = new GetAlmawsV1TaskListsPrintoutsRequest() {{
                letter = "recusandae";
                limit = 836079L;
                offset = 71036L;
                printerId = "quis";
                printoutId = "veritatis";
                status = "deserunt";
            }};            

            GetAlmawsV1TaskListsPrintoutsResponse res = sdk.printouts.getAlmawsV1TaskListsPrintouts(req);

            if (res.getAlmawsV1TaskListsPrintouts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAlmawsV1TaskListsPrintoutsPrintoutId

This Web service returns a Printout given a Printout ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAlmawsV1TaskListsPrintoutsPrintoutIdRequest;
import org.openapis.openapi.models.operations.GetAlmawsV1TaskListsPrintoutsPrintoutIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAlmawsV1TaskListsPrintoutsPrintoutIdRequest req = new GetAlmawsV1TaskListsPrintoutsPrintoutIdRequest("ipsam");            

            GetAlmawsV1TaskListsPrintoutsPrintoutIdResponse res = sdk.printouts.getAlmawsV1TaskListsPrintoutsPrintoutId(req);

            if (res.onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAlmawsV1TaskListsPrintouts

This API performs an action on printouts: mark as printed or canceled. 10,000 records can be handled in one requests. Only printouts which were updated will be returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAlmawsV1TaskListsPrintoutsRequest;
import org.openapis.openapi.models.operations.PostAlmawsV1TaskListsPrintoutsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAlmawsV1TaskListsPrintoutsRequest req = new PostAlmawsV1TaskListsPrintoutsRequest("sapiente") {{
                letter = "quo";
                printerId = "odit";
                printoutId = "at";
                status = "at";
            }};            

            PostAlmawsV1TaskListsPrintoutsResponse res = sdk.printouts.postAlmawsV1TaskListsPrintouts(req);

            if (res.onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAlmawsV1TaskListsPrintoutsPrintoutId

This API operates on an printout. given a Printout ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAlmawsV1TaskListsPrintoutsPrintoutIdRequest;
import org.openapis.openapi.models.operations.PostAlmawsV1TaskListsPrintoutsPrintoutIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAlmawsV1TaskListsPrintoutsPrintoutIdRequest req = new PostAlmawsV1TaskListsPrintoutsPrintoutIdRequest("molestiae", "quod");            

            PostAlmawsV1TaskListsPrintoutsPrintoutIdResponse res = sdk.printouts.postAlmawsV1TaskListsPrintoutsPrintoutId(req);

            if (res.onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
