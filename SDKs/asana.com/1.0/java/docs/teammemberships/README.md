# teamMemberships

## Overview

This object determines if a user is a member of a team.

### Available Operations

* [getTeamMembership](#getteammembership) - Get a team membership
* [getTeamMemberships](#getteammemberships) - Get team memberships
* [getTeamMembershipsForTeam](#getteammembershipsforteam) - Get memberships from a team
* [getTeamMembershipsForUser](#getteammembershipsforuser) - Get memberships from a user

## getTeamMembership

Returns the complete team membership record for a single team membership.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamMembershipRequest;
import org.openapis.openapi.models.operations.GetTeamMembershipResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTeamMembershipRequest req = new GetTeamMembershipRequest("sit") {{
                optFields = new String[]{{
                    add("sed"),
                    add("reiciendis"),
                    add("explicabo"),
                }};
                optPretty = false;
            }};            

            GetTeamMembershipResponse res = sdk.teamMemberships.getTeamMembership(req);

            if (res.getTeamMembership200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamMemberships

Returns compact team membership records.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamMembershipsRequest;
import org.openapis.openapi.models.operations.GetTeamMembershipsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTeamMembershipsRequest req = new GetTeamMembershipsRequest() {{
                limit = 994401L;
                offset = "facilis";
                optFields = new String[]{{
                    add("expedita"),
                    add("ab"),
                }};
                optPretty = false;
                team = "iste";
                user = "dolore";
                workspace = "laborum";
            }};            

            GetTeamMembershipsResponse res = sdk.teamMemberships.getTeamMemberships(req);

            if (res.getTeamMemberships200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamMembershipsForTeam

Returns the compact team memberships for the team.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamMembershipsForTeamRequest;
import org.openapis.openapi.models.operations.GetTeamMembershipsForTeamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTeamMembershipsForTeamRequest req = new GetTeamMembershipsForTeamRequest("sed") {{
                limit = 447516L;
                offset = "commodi";
                optFields = new String[]{{
                    add("explicabo"),
                    add("voluptas"),
                    add("unde"),
                }};
                optPretty = false;
            }};            

            GetTeamMembershipsForTeamResponse res = sdk.teamMemberships.getTeamMembershipsForTeam(req);

            if (res.getTeamMembershipsForTeam200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamMembershipsForUser

Returns the compact team membership records for the user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamMembershipsForUserRequest;
import org.openapis.openapi.models.operations.GetTeamMembershipsForUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTeamMembershipsForUserRequest req = new GetTeamMembershipsForUserRequest("architecto", "suscipit") {{
                limit = 960257L;
                offset = "debitis";
                optFields = new String[]{{
                    add("reiciendis"),
                }};
                optPretty = false;
            }};            

            GetTeamMembershipsForUserResponse res = sdk.teamMemberships.getTeamMembershipsForUser(req);

            if (res.getTeamMembershipsForUser200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
