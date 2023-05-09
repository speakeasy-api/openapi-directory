# teams

## Overview

A team is used to group related projects and people together within an organization. Each project in an organization is associated with a team.

### Available Operations

* [addUserForTeam](#adduserforteam) - Add a user to a team
* [createTeam](#createteam) - Create a team
* [getTeam](#getteam) - Get a team
* [getTeamsForUser](#getteamsforuser) - Get teams for a user
* [getTeamsForWorkspace](#getteamsforworkspace) - Get teams in a workspace
* [removeUserForTeam](#removeuserforteam) - Remove a user from a team
* [updateTeam](#updateteam) - Update a team

## addUserForTeam

The user making this call must be a member of the team in order to add others. The user being added must exist in the same organization as the team.

Returns the complete team membership record for the newly added user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddUserForTeamRequest;
import org.openapis.openapi.models.operations.AddUserForTeamRequestBody;
import org.openapis.openapi.models.operations.AddUserForTeamResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TeamAddUserRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            AddUserForTeamRequest req = new AddUserForTeamRequest(                new AddUserForTeamRequestBody() {{
                                data = new TeamAddUserRequest() {{
                                    user = "12345";
                                }};;
                            }};, "perferendis") {{
                optFields = new String[]{{
                    add("maiores"),
                    add("incidunt"),
                    add("sed"),
                }};
                optPretty = false;
            }};            

            AddUserForTeamResponse res = sdk.teams.addUserForTeam(req);

            if (res.addUserForTeam200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTeam

Creates a team within the current workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTeamRequest;
import org.openapis.openapi.models.operations.CreateTeamRequestBodyInput;
import org.openapis.openapi.models.operations.CreateTeamResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TeamRequestInput;
import org.openapis.openapi.models.shared.TeamRequestVisibilityEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateTeamRequest req = new CreateTeamRequest(                new CreateTeamRequestBodyInput() {{
                                data = new TeamRequestInput() {{
                                    description = "All developers should be members of this team.";
                                    htmlDescription = "<body><em>All</em> developers should be members of this team.</body>";
                                    name = "Marketing";
                                    organization = "123456789";
                                    visibility = TeamRequestVisibilityEnum.REQUEST_TO_JOIN;
                                }};;
                            }};) {{
                limit = 258702L;
                offset = "necessitatibus";
                optFields = new String[]{{
                    add("ea"),
                }};
                optPretty = false;
            }};            

            CreateTeamResponse res = sdk.teams.createTeam(req);

            if (res.createTeam201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeam

Returns the full record for a single team.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamRequest;
import org.openapis.openapi.models.operations.GetTeamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTeamRequest req = new GetTeamRequest("occaecati") {{
                limit = 552078L;
                offset = "voluptatibus";
                optFields = new String[]{{
                    add("tempora"),
                    add("voluptate"),
                }};
                optPretty = false;
            }};            

            GetTeamResponse res = sdk.teams.getTeam(req);

            if (res.getTeam200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamsForUser

Returns the compact records for all teams to which the given user is assigned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamsForUserRequest;
import org.openapis.openapi.models.operations.GetTeamsForUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTeamsForUserRequest req = new GetTeamsForUserRequest("reiciendis", "ex") {{
                limit = 25497L;
                offset = "non";
                optFields = new String[]{{
                    add("praesentium"),
                    add("facilis"),
                    add("quaerat"),
                    add("incidunt"),
                }};
                optPretty = false;
            }};            

            GetTeamsForUserResponse res = sdk.teams.getTeamsForUser(req);

            if (res.getTeamsForUser200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamsForWorkspace

Returns the compact records for all teams in the workspace visible to the authorized user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamsForWorkspaceRequest;
import org.openapis.openapi.models.operations.GetTeamsForWorkspaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTeamsForWorkspaceRequest req = new GetTeamsForWorkspaceRequest("ipsam") {{
                limit = 894864L;
                offset = "rem";
                optFields = new String[]{{
                    add("nobis"),
                }};
                optPretty = false;
            }};            

            GetTeamsForWorkspaceResponse res = sdk.teams.getTeamsForWorkspace(req);

            if (res.getTeamsForWorkspace200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeUserForTeam

The user making this call must be a member of the team in order to remove themselves or others.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveUserForTeamRequest;
import org.openapis.openapi.models.operations.RemoveUserForTeamRequestBody;
import org.openapis.openapi.models.operations.RemoveUserForTeamResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TeamRemoveUserRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            RemoveUserForTeamRequest req = new RemoveUserForTeamRequest(                new RemoveUserForTeamRequestBody() {{
                                data = new TeamRemoveUserRequest() {{
                                    user = "12345";
                                }};;
                            }};, "error") {{
                optFields = new String[]{{
                    add("minima"),
                    add("recusandae"),
                }};
                optPretty = false;
            }};            

            RemoveUserForTeamResponse res = sdk.teams.removeUserForTeam(req);

            if (res.removeUserForTeam204ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTeam

Updates a team within the current workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTeamRequest;
import org.openapis.openapi.models.operations.UpdateTeamRequestBodyInput;
import org.openapis.openapi.models.operations.UpdateTeamResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TeamRequestInput;
import org.openapis.openapi.models.shared.TeamRequestVisibilityEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateTeamRequest req = new UpdateTeamRequest(                new UpdateTeamRequestBodyInput() {{
                                data = new TeamRequestInput() {{
                                    description = "All developers should be members of this team.";
                                    htmlDescription = "<body><em>All</em> developers should be members of this team.</body>";
                                    name = "Marketing";
                                    organization = "123456789";
                                    visibility = TeamRequestVisibilityEnum.PUBLIC_;
                                }};;
                            }};) {{
                limit = 862319L;
                offset = "magni";
                optFields = new String[]{{
                    add("saepe"),
                }};
                optPretty = false;
            }};            

            UpdateTeamResponse res = sdk.teams.updateTeam(req);

            if (res.updateTeam200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
