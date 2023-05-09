# workspaceMemberships

## Overview

This object determines if a user is a member of a workspace.

### Available Operations

* [getWorkspaceMembership](#getworkspacemembership) - Get a workspace membership
* [getWorkspaceMembershipsForUser](#getworkspacemembershipsforuser) - Get workspace memberships for a user
* [getWorkspaceMembershipsForWorkspace](#getworkspacemembershipsforworkspace) - Get the workspace memberships for a workspace

## getWorkspaceMembership

Returns the complete workspace record for a single workspace membership.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspaceMembershipRequest;
import org.openapis.openapi.models.operations.GetWorkspaceMembershipResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetWorkspaceMembershipRequest req = new GetWorkspaceMembershipRequest("ex") {{
                optFields = new String[]{{
                    add("corrupti"),
                    add("at"),
                    add("error"),
                    add("blanditiis"),
                }};
                optPretty = false;
            }};            

            GetWorkspaceMembershipResponse res = sdk.workspaceMemberships.getWorkspaceMembership(req);

            if (res.getWorkspaceMembership200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspaceMembershipsForUser

Returns the compact workspace membership records for the user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspaceMembershipsForUserRequest;
import org.openapis.openapi.models.operations.GetWorkspaceMembershipsForUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetWorkspaceMembershipsForUserRequest req = new GetWorkspaceMembershipsForUserRequest("suscipit") {{
                limit = 922348L;
                offset = "atque";
                optFields = new String[]{{
                    add("sunt"),
                    add("recusandae"),
                    add("dolorum"),
                }};
                optPretty = false;
            }};            

            GetWorkspaceMembershipsForUserResponse res = sdk.workspaceMemberships.getWorkspaceMembershipsForUser(req);

            if (res.getWorkspaceMembershipsForUser200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspaceMembershipsForWorkspace

Returns the compact workspace membership records for the workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspaceMembershipsForWorkspaceRequest;
import org.openapis.openapi.models.operations.GetWorkspaceMembershipsForWorkspaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetWorkspaceMembershipsForWorkspaceRequest req = new GetWorkspaceMembershipsForWorkspaceRequest("repellendus") {{
                limit = 287119L;
                offset = "reiciendis";
                optFields = new String[]{{
                    add("repudiandae"),
                }};
                optPretty = false;
                user = "dicta";
            }};            

            GetWorkspaceMembershipsForWorkspaceResponse res = sdk.workspaceMemberships.getWorkspaceMembershipsForWorkspace(req);

            if (res.getWorkspaceMembershipsForWorkspace200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
