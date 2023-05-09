# user

## Overview

Manage users

### Available Operations

* [getUsers](#getusers) - List users
* [getUsersId](#getusersid) - Retrieve a single user by id
* [getUsersIdLinkedType](#getusersidlinkedtype) - Retrieve a users linked profile by type

## getUsers

List users

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersRequest;
import org.openapis.openapi.models.operations.GetUsersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersRequest req = new GetUsersRequest() {{
                assignment = "libero";
                country = "Madagascar";
                linkedProfile = "dolorum";
                minimumContributions = 4876.76;
                ownedBy = "fugit";
                submittedAfter = OffsetDateTime.parse("2022-10-31T15:56:50.300Z");
                submittedBefore = OffsetDateTime.parse("2022-12-08T11:32:42.651Z");
                username = "Anibal34";
            }};            

            GetUsersResponse res = sdk.user.getUsers(req);

            if (res.users != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersId

Retrieve a single user by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdRequest;
import org.openapis.openapi.models.operations.GetUsersIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdRequest req = new GetUsersIdRequest("itaque");            

            GetUsersIdResponse res = sdk.user.getUsersId(req);

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdLinkedType

Retrieve a users linked profile by type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdLinkedTypeRequest;
import org.openapis.openapi.models.operations.GetUsersIdLinkedTypeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdLinkedTypeRequest req = new GetUsersIdLinkedTypeRequest("et", "ipsum");            

            GetUsersIdLinkedTypeResponse res = sdk.user.getUsersIdLinkedType(req);

            if (res.linkedProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
