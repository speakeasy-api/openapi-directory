# workspaces

## Overview

A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.

An *organization* is a special kind of workspace that represents a company. In an organization, you can group your projects into teams. You can read more about how organizations work on the Asana Guide. To tell if your workspace is an organization or not, check its `is_organization` property.

Over time, we intend to migrate most workspaces into organizations and to release more organization-specific functionality. We may eventually deprecate using workspace-based APIs for organizations. Currently, and until after some reasonable grace period following any further announcements, you can still reference organizations in any `workspace` parameter.

### Available Operations

* [addUserForWorkspace](#adduserforworkspace) - Add a user to a workspace or organization
* [getWorkspace](#getworkspace) - Get a workspace
* [getWorkspaces](#getworkspaces) - Get multiple workspaces
* [removeUserForWorkspace](#removeuserforworkspace) - Remove a user from a workspace or organization
* [updateWorkspace](#updateworkspace) - Update a workspace

## addUserForWorkspace

Add a user to a workspace or organization.
The user can be referenced by their globally unique user ID or their email address. Returns the full user record for the invited user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddUserForWorkspaceRequest;
import org.openapis.openapi.models.operations.AddUserForWorkspaceRequestBody;
import org.openapis.openapi.models.operations.AddUserForWorkspaceResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WorkspaceAddUserRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            AddUserForWorkspaceRequest req = new AddUserForWorkspaceRequest(                new AddUserForWorkspaceRequestBody() {{
                                data = new WorkspaceAddUserRequest() {{
                                    user = "12345";
                                }};;
                            }};, "accusantium") {{
                optFields = new String[]{{
                    add("dolores"),
                }};
                optPretty = false;
            }};            

            AddUserForWorkspaceResponse res = sdk.workspaces.addUserForWorkspace(req);

            if (res.addUserForWorkspace200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspace

Returns the full workspace record for a single workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspaceRequest;
import org.openapis.openapi.models.operations.GetWorkspaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetWorkspaceRequest req = new GetWorkspaceRequest("enim") {{
                optFields = new String[]{{
                    add("velit"),
                    add("a"),
                }};
                optPretty = false;
            }};            

            GetWorkspaceResponse res = sdk.workspaces.getWorkspace(req);

            if (res.getWorkspace200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspaces

Returns the compact records for all workspaces visible to the authorized user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspacesRequest;
import org.openapis.openapi.models.operations.GetWorkspacesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetWorkspacesRequest req = new GetWorkspacesRequest() {{
                limit = 562783L;
                offset = "magnam";
                optFields = new String[]{{
                    add("consequuntur"),
                    add("occaecati"),
                    add("officiis"),
                    add("perspiciatis"),
                }};
                optPretty = false;
            }};            

            GetWorkspacesResponse res = sdk.workspaces.getWorkspaces(req);

            if (res.getWorkspaces200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeUserForWorkspace

Remove a user from a workspace or organization.
The user making this call must be an admin in the workspace. The user can be referenced by their globally unique user ID or their email address.
Returns an empty data record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveUserForWorkspaceRequest;
import org.openapis.openapi.models.operations.RemoveUserForWorkspaceRequestBody;
import org.openapis.openapi.models.operations.RemoveUserForWorkspaceResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WorkspaceRemoveUserRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            RemoveUserForWorkspaceRequest req = new RemoveUserForWorkspaceRequest(                new RemoveUserForWorkspaceRequestBody() {{
                                data = new WorkspaceRemoveUserRequest() {{
                                    user = "12345";
                                }};;
                            }};, "in") {{
                optFields = new String[]{{
                    add("eveniet"),
                }};
                optPretty = false;
            }};            

            RemoveUserForWorkspaceResponse res = sdk.workspaces.removeUserForWorkspace(req);

            if (res.removeUserForWorkspace204ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWorkspace

A specific, existing workspace can be updated by making a PUT request on the URL for that workspace. Only the fields provided in the data block will be updated; any unspecified fields will remain unchanged.
Currently the only field that can be modified for a workspace is its name.
Returns the complete, updated workspace record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWorkspaceRequest;
import org.openapis.openapi.models.operations.UpdateWorkspaceRequestBodyInput;
import org.openapis.openapi.models.operations.UpdateWorkspaceResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WorkspaceRequestInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateWorkspaceRequest req = new UpdateWorkspaceRequest(                new UpdateWorkspaceRequestBodyInput() {{
                                data = new WorkspaceRequestInput() {{
                                    name = "My Company Workspace";
                                }};;
                            }};, "occaecati") {{
                optFields = new String[]{{
                    add("fugit"),
                }};
                optPretty = false;
            }};            

            UpdateWorkspaceResponse res = sdk.workspaces.updateWorkspace(req);

            if (res.updateWorkspace200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
