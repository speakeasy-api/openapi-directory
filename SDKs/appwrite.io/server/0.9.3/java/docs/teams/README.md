# teams

## Overview

The Teams service allows you to group users of your project and to enable them to share read and write access to your project resources

### Available Operations

* [teamsCreate](#teamscreate) - Create Team
* [teamsCreateMembership](#teamscreatemembership) - Create Team Membership
* [teamsDelete](#teamsdelete) - Delete Team
* [teamsDeleteMembership](#teamsdeletemembership) - Delete Team Membership
* [teamsGet](#teamsget) - Get Team
* [teamsGetMemberships](#teamsgetmemberships) - Get Team Memberships
* [teamsList](#teamslist) - List Teams
* [teamsUpdate](#teamsupdate) - Update Team
* [teamsUpdateMembershipRoles](#teamsupdatemembershiproles) - Update Membership Roles
* [teamsUpdateMembershipStatus](#teamsupdatemembershipstatus) - Update Team Membership Status

## teamsCreate

Create a new team. The user who creates the team will automatically be assigned as the owner of the team. The team owner can invite new members, who will be able add new owners and update or delete the team from your project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsCreateRequestBody;
import org.openapis.openapi.models.operations.TeamsCreateResponse;
import org.openapis.openapi.models.operations.TeamsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsCreateRequestBody req = new TeamsCreateRequestBody("soluta") {{
                roles = new String[]{{
                    add("iusto"),
                    add("voluptate"),
                    add("dolorum"),
                }};
            }};            

            TeamsCreateResponse res = sdk.teams.teamsCreate(req, new TeamsCreateSecurity("deleniti", "omnis", "necessitatibus") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.team != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsCreateMembership

Use this endpoint to invite a new member to join your team. If initiated from Client SDK, an email with a link to join the team will be sent to the new member's email address if the member doesn't exist in the project it will be created automatically. If initiated from server side SDKs, new member will automatically be added to the team.

Use the 'URL' parameter to redirect the user from the invitation email back to your app. When the user is redirected, use the [Update Team Membership Status](/docs/client/teams#teamsUpdateMembershipStatus) endpoint to allow the user to accept the invitation to the team.  While calling from side SDKs the redirect url can be empty string.

Please note that in order to avoid a [Redirect Attacks](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URL's are the once from domains you have set when added your platforms in the console interface.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsCreateMembershipRequest;
import org.openapis.openapi.models.operations.TeamsCreateMembershipRequestBody;
import org.openapis.openapi.models.operations.TeamsCreateMembershipResponse;
import org.openapis.openapi.models.operations.TeamsCreateMembershipSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsCreateMembershipRequest req = new TeamsCreateMembershipRequest("distinctio") {{
                requestBody = new TeamsCreateMembershipRequestBody("asperiores",                 new String[]{{
                                    add("ipsum"),
                                    add("voluptate"),
                                }}, "id") {{
                    name = "Mrs. Ray Collins";
                }};;
            }};            

            TeamsCreateMembershipResponse res = sdk.teams.teamsCreateMembership(req, new TeamsCreateMembershipSecurity("accusamus", "ad", "saepe") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.membership != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsDelete

Delete a team by its unique ID. Only team owners have write access for this resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsDeleteRequest;
import org.openapis.openapi.models.operations.TeamsDeleteResponse;
import org.openapis.openapi.models.operations.TeamsDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsDeleteRequest req = new TeamsDeleteRequest("suscipit");            

            TeamsDeleteResponse res = sdk.teams.teamsDelete(req, new TeamsDeleteSecurity("deserunt", "provident", "minima") {{
                jwt = "YOUR_API_KEY_HERE";
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

## teamsDeleteMembership

This endpoint allows a user to leave a team or for a team owner to delete the membership of any other team member. You can also use this endpoint to delete a user membership even if it is not accepted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsDeleteMembershipRequest;
import org.openapis.openapi.models.operations.TeamsDeleteMembershipResponse;
import org.openapis.openapi.models.operations.TeamsDeleteMembershipSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsDeleteMembershipRequest req = new TeamsDeleteMembershipRequest("repellendus", "totam");            

            TeamsDeleteMembershipResponse res = sdk.teams.teamsDeleteMembership(req, new TeamsDeleteMembershipSecurity("similique", "alias", "at") {{
                jwt = "YOUR_API_KEY_HERE";
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

## teamsGet

Get a team by its unique ID. All team members have read access for this resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsGetRequest;
import org.openapis.openapi.models.operations.TeamsGetResponse;
import org.openapis.openapi.models.operations.TeamsGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsGetRequest req = new TeamsGetRequest("quaerat");            

            TeamsGetResponse res = sdk.teams.teamsGet(req, new TeamsGetSecurity("tempora", "vel", "quod") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.team != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsGetMemberships

Get a team members by the team unique ID. All team members have read access for this list of resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsGetMembershipsRequest;
import org.openapis.openapi.models.operations.TeamsGetMembershipsResponse;
import org.openapis.openapi.models.operations.TeamsGetMembershipsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsGetMembershipsRequest req = new TeamsGetMembershipsRequest("officiis") {{
                limit = 185636;
                offset = 679880;
                orderType = "a";
                search = "esse";
            }};            

            TeamsGetMembershipsResponse res = sdk.teams.teamsGetMemberships(req, new TeamsGetMembershipsSecurity("harum", "iusto", "ipsum") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.membershipList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsList

Get a list of all the current user teams. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's teams. [Learn more about different API modes](/docs/admin).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsListRequest;
import org.openapis.openapi.models.operations.TeamsListResponse;
import org.openapis.openapi.models.operations.TeamsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsListRequest req = new TeamsListRequest() {{
                limit = 788740;
                offset = 947371;
                orderType = "amet";
                search = "tempore";
            }};            

            TeamsListResponse res = sdk.teams.teamsList(req, new TeamsListSecurity("accusamus", "numquam", "enim") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.teamList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsUpdate

Update a team by its unique ID. Only team owners have write access for this resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsUpdateRequest;
import org.openapis.openapi.models.operations.TeamsUpdateRequestBody;
import org.openapis.openapi.models.operations.TeamsUpdateResponse;
import org.openapis.openapi.models.operations.TeamsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsUpdateRequest req = new TeamsUpdateRequest("dolorem") {{
                requestBody = new TeamsUpdateRequestBody("sapiente");;
            }};            

            TeamsUpdateResponse res = sdk.teams.teamsUpdate(req, new TeamsUpdateSecurity("totam", "nihil", "sit") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.team != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsUpdateMembershipRoles

Update Membership Roles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsUpdateMembershipRolesRequest;
import org.openapis.openapi.models.operations.TeamsUpdateMembershipRolesRequestBody;
import org.openapis.openapi.models.operations.TeamsUpdateMembershipRolesResponse;
import org.openapis.openapi.models.operations.TeamsUpdateMembershipRolesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsUpdateMembershipRolesRequest req = new TeamsUpdateMembershipRolesRequest("expedita", "neque") {{
                requestBody = new TeamsUpdateMembershipRolesRequestBody(                new String[]{{
                                    add("vel"),
                                }});;
            }};            

            TeamsUpdateMembershipRolesResponse res = sdk.teams.teamsUpdateMembershipRoles(req, new TeamsUpdateMembershipRolesSecurity("libero", "voluptas", "deserunt") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.membership != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsUpdateMembershipStatus

Use this endpoint to allow a user to accept an invitation to join a team after being redirected back to your app from the invitation email recieved by the user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsUpdateMembershipStatusRequest;
import org.openapis.openapi.models.operations.TeamsUpdateMembershipStatusRequestBody;
import org.openapis.openapi.models.operations.TeamsUpdateMembershipStatusResponse;
import org.openapis.openapi.models.operations.TeamsUpdateMembershipStatusSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsUpdateMembershipStatusRequest req = new TeamsUpdateMembershipStatusRequest("quam", "ipsum") {{
                requestBody = new TeamsUpdateMembershipStatusRequestBody("incidunt", "qui");;
            }};            

            TeamsUpdateMembershipStatusResponse res = sdk.teams.teamsUpdateMembershipStatus(req, new TeamsUpdateMembershipStatusSecurity("cupiditate", "maxime") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.membership != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
