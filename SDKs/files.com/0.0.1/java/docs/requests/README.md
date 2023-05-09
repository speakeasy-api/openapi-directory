# requests

## Overview

Operations about requests

### Available Operations

* [deleteRequestsId](#deleterequestsid) - Delete Request
* [getRequests](#getrequests) - List Requests
* [getRequestsFoldersPath](#getrequestsfolderspath) - List Requests
* [postRequests](#postrequests) - Create Request

## deleteRequestsId

Delete Request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRequestsIdRequest;
import org.openapis.openapi.models.operations.DeleteRequestsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRequestsIdRequest req = new DeleteRequestsIdRequest(335631);            

            DeleteRequestsIdResponse res = sdk.requests.deleteRequestsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRequests

List Requests

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRequestsRequest;
import org.openapis.openapi.models.operations.GetRequestsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRequestsRequest req = new GetRequestsRequest() {{
                cursor = "reprehenderit";
                mine = false;
                path = "error";
                perPage = 76486;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("quidem", "eveniet");
                    put("non", "vero");
                }};
            }};            

            GetRequestsResponse res = sdk.requests.getRequests(req);

            if (res.requestEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRequestsFoldersPath

List Requests

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRequestsFoldersPathRequest;
import org.openapis.openapi.models.operations.GetRequestsFoldersPathResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRequestsFoldersPathRequest req = new GetRequestsFoldersPathRequest("doloremque") {{
                cursor = "iure";
                mine = false;
                perPage = 59944;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("quae", "molestiae");
                    put("eveniet", "qui");
                    put("cum", "iure");
                }};
            }};            

            GetRequestsFoldersPathResponse res = sdk.requests.getRequestsFoldersPath(req);

            if (res.requestEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRequests

Create Request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRequestsRequestBody;
import org.openapis.openapi.models.operations.PostRequestsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRequestsRequestBody req = new PostRequestsRequestBody("necessitatibus", "ratione") {{
                groupIds = "laborum";
                userIds = "distinctio";
            }};            

            PostRequestsResponse res = sdk.requests.postRequests(req);

            if (res.requestEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
