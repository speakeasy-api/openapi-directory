# users

## Overview

The Users service allows you to manage your project users.

### Available Operations

* [usersCreate](#userscreate) - Create User
* [usersDelete](#usersdelete) - Delete User
* [usersDeleteSession](#usersdeletesession) - Delete User Session
* [usersDeleteSessions](#usersdeletesessions) - Delete User Sessions
* [usersGet](#usersget) - Get User
* [usersGetLogs](#usersgetlogs) - Get User Logs
* [usersGetPrefs](#usersgetprefs) - Get User Preferences
* [usersGetSessions](#usersgetsessions) - Get User Sessions
* [usersList](#userslist) - List Users
* [usersUpdatePrefs](#usersupdateprefs) - Update User Preferences
* [usersUpdateStatus](#usersupdatestatus) - Update User Status
* [usersUpdateVerification](#usersupdateverification) - Update Email Verification

## usersCreate

Create a new user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersCreateRequestBody;
import org.openapis.openapi.models.operations.UsersCreateResponse;
import org.openapis.openapi.models.operations.UsersCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersCreateRequestBody req = new UsersCreateRequestBody("pariatur", "soluta") {{
                name = "Kayla Larson";
            }};            

            UsersCreateResponse res = sdk.users.usersCreate(req, new UsersCreateSecurity("dolores", "distinctio") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersDelete

Delete a user by its unique ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersDeleteRequest;
import org.openapis.openapi.models.operations.UsersDeleteResponse;
import org.openapis.openapi.models.operations.UsersDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersDeleteRequest req = new UsersDeleteRequest("facilis");            

            UsersDeleteResponse res = sdk.users.usersDelete(req, new UsersDeleteSecurity("aliquid", "quam") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
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

## usersDeleteSession

Delete a user sessions by its unique ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersDeleteSessionRequest;
import org.openapis.openapi.models.operations.UsersDeleteSessionResponse;
import org.openapis.openapi.models.operations.UsersDeleteSessionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersDeleteSessionRequest req = new UsersDeleteSessionRequest("molestias", "temporibus");            

            UsersDeleteSessionResponse res = sdk.users.usersDeleteSession(req, new UsersDeleteSessionSecurity("qui", "neque") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
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

## usersDeleteSessions

Delete all user's sessions by using the user's unique ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersDeleteSessionsRequest;
import org.openapis.openapi.models.operations.UsersDeleteSessionsResponse;
import org.openapis.openapi.models.operations.UsersDeleteSessionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersDeleteSessionsRequest req = new UsersDeleteSessionsRequest("fugit");            

            UsersDeleteSessionsResponse res = sdk.users.usersDeleteSessions(req, new UsersDeleteSessionsSecurity("magni", "odio") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
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

## usersGet

Get a user by its unique ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersGetRequest;
import org.openapis.openapi.models.operations.UsersGetResponse;
import org.openapis.openapi.models.operations.UsersGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersGetRequest req = new UsersGetRequest("sunt");            

            UsersGetResponse res = sdk.users.usersGet(req, new UsersGetSecurity("ullam", "nam") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersGetLogs

Get a user activity logs list by its unique ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersGetLogsRequest;
import org.openapis.openapi.models.operations.UsersGetLogsResponse;
import org.openapis.openapi.models.operations.UsersGetLogsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersGetLogsRequest req = new UsersGetLogsRequest("hic");            

            UsersGetLogsResponse res = sdk.users.usersGetLogs(req, new UsersGetLogsSecurity("voluptatem", "cumque") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.logList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersGetPrefs

Get the user preferences by its unique ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersGetPrefsRequest;
import org.openapis.openapi.models.operations.UsersGetPrefsResponse;
import org.openapis.openapi.models.operations.UsersGetPrefsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersGetPrefsRequest req = new UsersGetPrefsRequest("soluta");            

            UsersGetPrefsResponse res = sdk.users.usersGetPrefs(req, new UsersGetPrefsSecurity("nobis", "et") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.preferences != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersGetSessions

Get the user sessions list by its unique ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersGetSessionsRequest;
import org.openapis.openapi.models.operations.UsersGetSessionsResponse;
import org.openapis.openapi.models.operations.UsersGetSessionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersGetSessionsRequest req = new UsersGetSessionsRequest("saepe");            

            UsersGetSessionsResponse res = sdk.users.usersGetSessions(req, new UsersGetSessionsSecurity("ipsum", "veritatis") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.sessionList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersList

Get a list of all the project's users. You can use the query params to filter your results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersListRequest;
import org.openapis.openapi.models.operations.UsersListResponse;
import org.openapis.openapi.models.operations.UsersListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersListRequest req = new UsersListRequest() {{
                limit = 749255;
                offset = 552193;
                orderType = "tempore";
                search = "cupiditate";
            }};            

            UsersListResponse res = sdk.users.usersList(req, new UsersListSecurity("aperiam", "delectus") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.userList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersUpdatePrefs

Update the user preferences by its unique ID. You can pass only the specific settings you wish to update.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersUpdatePrefsRequest;
import org.openapis.openapi.models.operations.UsersUpdatePrefsRequestBody;
import org.openapis.openapi.models.operations.UsersUpdatePrefsResponse;
import org.openapis.openapi.models.operations.UsersUpdatePrefsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersUpdatePrefsRequest req = new UsersUpdatePrefsRequest("dolorem") {{
                requestBody = new UsersUpdatePrefsRequestBody(                new java.util.HashMap<String, Object>() {{
                                    put("labore", "adipisci");
                                    put("dolorum", "architecto");
                                }});;
            }};            

            UsersUpdatePrefsResponse res = sdk.users.usersUpdatePrefs(req, new UsersUpdatePrefsSecurity("quae", "aut") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.preferences != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersUpdateStatus

Update the user status by its unique ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersUpdateStatusRequest;
import org.openapis.openapi.models.operations.UsersUpdateStatusRequestBody;
import org.openapis.openapi.models.operations.UsersUpdateStatusResponse;
import org.openapis.openapi.models.operations.UsersUpdateStatusSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersUpdateStatusRequest req = new UsersUpdateStatusRequest("quas") {{
                requestBody = new UsersUpdateStatusRequestBody(929530L);;
            }};            

            UsersUpdateStatusResponse res = sdk.users.usersUpdateStatus(req, new UsersUpdateStatusSecurity("consequatur", "est") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersUpdateVerification

Update the user email verification status by its unique ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersUpdateVerificationRequest;
import org.openapis.openapi.models.operations.UsersUpdateVerificationRequestBody;
import org.openapis.openapi.models.operations.UsersUpdateVerificationResponse;
import org.openapis.openapi.models.operations.UsersUpdateVerificationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersUpdateVerificationRequest req = new UsersUpdateVerificationRequest("repellendus") {{
                requestBody = new UsersUpdateVerificationRequestBody(false);;
            }};            

            UsersUpdateVerificationResponse res = sdk.users.usersUpdateVerification(req, new UsersUpdateVerificationSecurity("porro", "doloribus") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
