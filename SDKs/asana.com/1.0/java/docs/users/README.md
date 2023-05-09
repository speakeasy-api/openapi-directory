# users

## Overview

A user object represents an account in Asana that can be given access to various workspaces, projects, and tasks.

Like other objects in the system, users are referred to by numerical IDs. However, the special string identifier `me` can be used anywhere a user ID is accepted, to refer to the current authenticated user (e.g, `GET /users/me`).

### Available Operations

* [getFavoritesForUser](#getfavoritesforuser) - Get a user's favorites
* [getUser](#getuser) - Get a user
* [getUsers](#getusers) - Get multiple users
* [getUsersForTeam](#getusersforteam) - Get users in a team
* [getUsersForWorkspace](#getusersforworkspace) - Get users in a workspace or organization

## getFavoritesForUser

Returns all of a user's favorites in the given workspace, of the given type.
Results are given in order (The same order as Asana's sidebar).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFavoritesForUserRequest;
import org.openapis.openapi.models.operations.GetFavoritesForUserResourceTypeEnum;
import org.openapis.openapi.models.operations.GetFavoritesForUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetFavoritesForUserRequest req = new GetFavoritesForUserRequest(GetFavoritesForUserResourceTypeEnum.TAG, "sit", "voluptatum") {{
                optFields = new String[]{{
                    add("repudiandae"),
                    add("corporis"),
                    add("et"),
                }};
                optPretty = false;
            }};            

            GetFavoritesForUserResponse res = sdk.users.getFavoritesForUser(req);

            if (res.getFavoritesForUser200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUser

Returns the full user record for the single user with the provided ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserRequest;
import org.openapis.openapi.models.operations.GetUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetUserRequest req = new GetUserRequest("blanditiis") {{
                optFields = new String[]{{
                    add("sed"),
                    add("sit"),
                }};
                optPretty = false;
            }};            

            GetUserResponse res = sdk.users.getUser(req);

            if (res.getUser200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsers

Returns the user records for all users in all workspaces and organizations accessible to the authenticated user. Accepts an optional workspace ID parameter.
Results are sorted by user ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersRequest;
import org.openapis.openapi.models.operations.GetUsersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetUsersRequest req = new GetUsersRequest() {{
                limit = 425508L;
                offset = "nostrum";
                optFields = new String[]{{
                    add("error"),
                    add("consequatur"),
                    add("incidunt"),
                    add("reiciendis"),
                }};
                optPretty = false;
                team = "dolorem";
                workspace = "harum";
            }};            

            GetUsersResponse res = sdk.users.getUsers(req);

            if (res.getUsers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersForTeam

Returns the compact records for all users that are members of the team.
Results are sorted alphabetically and limited to 2000. For more results use the `/users` endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersForTeamRequest;
import org.openapis.openapi.models.operations.GetUsersForTeamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetUsersForTeamRequest req = new GetUsersForTeamRequest("dicta") {{
                offset = "architecto";
                optFields = new String[]{{
                    add("labore"),
                    add("quidem"),
                    add("atque"),
                }};
                optPretty = false;
            }};            

            GetUsersForTeamResponse res = sdk.users.getUsersForTeam(req);

            if (res.getUsersForTeam200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersForWorkspace

Returns the compact records for all users in the specified workspace or organization.
Results are sorted alphabetically and limited to 2000. For more results use the `/users` endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersForWorkspaceRequest;
import org.openapis.openapi.models.operations.GetUsersForWorkspaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetUsersForWorkspaceRequest req = new GetUsersForWorkspaceRequest("laborum") {{
                offset = "nam";
                optFields = new String[]{{
                    add("laboriosam"),
                    add("alias"),
                    add("amet"),
                    add("deserunt"),
                }};
                optPretty = false;
            }};            

            GetUsersForWorkspaceResponse res = sdk.users.getUsersForWorkspace(req);

            if (res.getUsersForWorkspace200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
