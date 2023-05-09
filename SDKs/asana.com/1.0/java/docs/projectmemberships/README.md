# projectMemberships

## Overview

With the introduction of “comment-only” projects in Asana, a user’s membership in a project comes with associated permissions. These permissions (i.e., whether a user has full access to the project or comment-only access) are accessible through the project memberships endpoints described here.

### Available Operations

* [getProjectMembership](#getprojectmembership) - Get a project membership
* [getProjectMembershipsForProject](#getprojectmembershipsforproject) - Get memberships from a project

## getProjectMembership

Returns the complete project record for a single project membership.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectMembershipRequest;
import org.openapis.openapi.models.operations.GetProjectMembershipResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetProjectMembershipRequest req = new GetProjectMembershipRequest("porro") {{
                optFields = new String[]{{
                    add("blanditiis"),
                }};
                optPretty = false;
            }};            

            GetProjectMembershipResponse res = sdk.projectMemberships.getProjectMembership(req);

            if (res.getProjectMembership200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectMembershipsForProject

Returns the compact project membership records for the project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectMembershipsForProjectRequest;
import org.openapis.openapi.models.operations.GetProjectMembershipsForProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetProjectMembershipsForProjectRequest req = new GetProjectMembershipsForProjectRequest("error") {{
                limit = 50370L;
                offset = "occaecati";
                optFields = new String[]{{
                    add("adipisci"),
                    add("asperiores"),
                    add("earum"),
                }};
                optPretty = false;
                user = "modi";
            }};            

            GetProjectMembershipsForProjectResponse res = sdk.projectMemberships.getProjectMembershipsForProject(req);

            if (res.getProjectMembershipsForProject200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
