# teamMembers

## Overview

Endpoints related to team member user accounts

### Available Operations

* [deleteUserUserId](#deleteuseruserid) - Delete a team member's user record
* [getUserUserId](#getuseruserid) - Retrieve the information associated with a team member's user record
* [getUsers](#getusers) - Retrieve the information associated with all team members' user records
* [postUser](#postuser) - Create a user

## deleteUserUserId

To preserve referential integrity in the database, the user account  will not be deleted from the database. Rather, the password will be set to the empty string, effectively preventing that user from logging in. Furthermore, all active sessions for that user will be deleted, as will any password reset tokens. 


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserUserIdRequest;
import org.openapis.openapi.models.operations.DeleteUserUserIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    tokenHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteUserUserIdRequest req = new DeleteUserUserIdRequest(1L);            

            DeleteUserUserIdResponse res = sdk.teamMembers.deleteUserUserId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserUserId

Retrieve the information associated with a user's account


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserUserIdRequest;
import org.openapis.openapi.models.operations.GetUserUserIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    tokenHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUserUserIdRequest req = new GetUserUserIdRequest(1L);            

            GetUserUserIdResponse res = sdk.teamMembers.getUserUserId(req);

            if (res.userRecord != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsers

Retrieve the information associated with all team members' user records


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    tokenHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUsersResponse res = sdk.teamMembers.getUsers();

            if (res.userRecords != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUser

Use this endpoint to create a team member (user) record

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUserResponse;
import org.openapis.openapi.models.operations.PostUserSample;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    tokenHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostUserSample req = new PostUserSample() {{
                admin = true;
                email = "user@example.com";
                name = "Jane Doe";
                readOnly = false;
            }};            

            PostUserResponse res = sdk.teamMembers.postUser(req);

            if (res.createUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
