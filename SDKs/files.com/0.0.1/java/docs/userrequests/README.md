# userRequests

## Overview

Operations about user_requests

### Available Operations

* [deleteUserRequestsId](#deleteuserrequestsid) - Delete User Request
* [getUserRequests](#getuserrequests) - List User Requests
* [getUserRequestsId](#getuserrequestsid) - Show User Request
* [postUserRequests](#postuserrequests) - Create User Request

## deleteUserRequestsId

Delete User Request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserRequestsIdRequest;
import org.openapis.openapi.models.operations.DeleteUserRequestsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUserRequestsIdRequest req = new DeleteUserRequestsIdRequest(328379);            

            DeleteUserRequestsIdResponse res = sdk.userRequests.deleteUserRequestsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserRequests

List User Requests

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserRequestsRequest;
import org.openapis.openapi.models.operations.GetUserRequestsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserRequestsRequest req = new GetUserRequestsRequest() {{
                cursor = "praesentium";
                perPage = 802692;
            }};            

            GetUserRequestsResponse res = sdk.userRequests.getUserRequests(req);

            if (res.userRequestEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserRequestsId

Show User Request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserRequestsIdRequest;
import org.openapis.openapi.models.operations.GetUserRequestsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserRequestsIdRequest req = new GetUserRequestsIdRequest(300403);            

            GetUserRequestsIdResponse res = sdk.userRequests.getUserRequestsId(req);

            if (res.userRequestEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUserRequests

Create User Request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUserRequestsRequestBody;
import org.openapis.openapi.models.operations.PostUserRequestsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUserRequestsRequestBody req = new PostUserRequestsRequestBody("temporibus", "quos", "commodi");            

            PostUserRequestsResponse res = sdk.userRequests.postUserRequests(req);

            if (res.userRequestEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
