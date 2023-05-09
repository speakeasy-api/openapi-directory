# projects

## Overview

A project represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. A project exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.

Projects in organizations are shared with a single team. Currently, the team of a project cannot be changed via the API. Non-organization workspaces do not have teams and so you should not specify the team of project in a regular workspace.

Followers of a project are a subset of the members of that project. Followers of a project will receive all updates including tasks created, added and removed from that project. Members of the project have access to and will receive status updates of the project. Adding followers to a project will add them as members if they are not already, removing followers from a project will not affect membership.

**Note:** You can use certain project endpoints to operate on [user task lists](/docs/user-task-lists) ([My Tasks](https://asana.com/guide/help/fundamentals/my-tasks)) by substituting the `{project_gid}` with the `{user_task_list_gid}`. For example, you can perform operations on the custom fields of a [user task list](/docs/user-task-lists) by using the following projects endpoints: [Add a custom field to a project](/docs/add-a-custom-field-to-a-project), [Remove a custom field from a project](/docs/remove-a-custom-field-from-a-project) and [Get a project's custom fields](/docs/get-a-projects-custom-fields)

### Available Operations

* [addCustomFieldSettingForProject](#addcustomfieldsettingforproject) - Add a custom field to a project
* [addFollowersForProject](#addfollowersforproject) - Add followers to a project
* [addMembersForProject](#addmembersforproject) - Add users to a project
* [createProject](#createproject) - Create a project
* [createProjectForTeam](#createprojectforteam) - Create a project in a team
* [createProjectForWorkspace](#createprojectforworkspace) - Create a project in a workspace
* [deleteProject](#deleteproject) - Delete a project
* [duplicateProject](#duplicateproject) - Duplicate a project
* [getProject](#getproject) - Get a project
* [getProjects](#getprojects) - Get multiple projects
* [getProjectsForTask](#getprojectsfortask) - Get projects a task is in
* [getProjectsForTeam](#getprojectsforteam) - Get a team's projects
* [getProjectsForWorkspace](#getprojectsforworkspace) - Get all projects in a workspace
* [getTaskCountsForProject](#gettaskcountsforproject) - Get task count of a project
* [projectSaveAsTemplate](#projectsaveastemplate) - Create a project template from a project
* [removeCustomFieldSettingForProject](#removecustomfieldsettingforproject) - Remove a custom field from a project
* [removeFollowersForProject](#removefollowersforproject) - Remove followers from a project
* [removeMembersForProject](#removemembersforproject) - Remove users from a project
* [updateProject](#updateproject) - Update a project

## addCustomFieldSettingForProject

Custom fields are associated with projects by way of custom field settings.  This method creates a setting for the project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddCustomFieldSettingForProjectRequest;
import org.openapis.openapi.models.operations.AddCustomFieldSettingForProjectRequestBody;
import org.openapis.openapi.models.operations.AddCustomFieldSettingForProjectResponse;
import org.openapis.openapi.models.shared.AddCustomFieldSettingRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            AddCustomFieldSettingForProjectRequest req = new AddCustomFieldSettingForProjectRequest(                new AddCustomFieldSettingForProjectRequestBody() {{
                                data = new AddCustomFieldSettingRequest("14916") {{
                                    insertAfter = "1331";
                                    insertBefore = "1331";
                                    isImportant = true;
                                }};;
                            }};, "deleniti") {{
                optPretty = false;
            }};            

            AddCustomFieldSettingForProjectResponse res = sdk.projects.addCustomFieldSettingForProject(req);

            if (res.addCustomFieldSettingForProject200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addFollowersForProject

Adds the specified list of users as followers to the project. Followers are a subset of members who have opted in to receive "tasks added" notifications for a project. Therefore, if the users are not already members of the project, they will also become members as a result of this operation.
Returns the updated project record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddFollowersForProjectRequest;
import org.openapis.openapi.models.operations.AddFollowersForProjectRequestBody;
import org.openapis.openapi.models.operations.AddFollowersForProjectResponse;
import org.openapis.openapi.models.shared.AddFollowersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            AddFollowersForProjectRequest req = new AddFollowersForProjectRequest(                new AddFollowersForProjectRequestBody() {{
                                data = new AddFollowersRequest("521621,621373");;
                            }};, "omnis") {{
                optFields = new String[]{{
                    add("distinctio"),
                    add("asperiores"),
                    add("nihil"),
                    add("ipsum"),
                }};
                optPretty = false;
            }};            

            AddFollowersForProjectResponse res = sdk.projects.addFollowersForProject(req);

            if (res.addFollowersForProject200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addMembersForProject

Adds the specified list of users as members of the project. Note that a user being added as a member may also be added as a *follower* as a result of this operation. This is because the user's default notification settings (i.e., in the "Notifcations" tab of "My Profile Settings") will override this endpoint's default behavior of setting "Tasks added" notifications to `false`.
Returns the updated project record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddMembersForProjectRequest;
import org.openapis.openapi.models.operations.AddMembersForProjectRequestBody;
import org.openapis.openapi.models.operations.AddMembersForProjectResponse;
import org.openapis.openapi.models.shared.AddMembersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            AddMembersForProjectRequest req = new AddMembersForProjectRequest(                new AddMembersForProjectRequestBody() {{
                                data = new AddMembersRequest("521621,621373");;
                            }};, "voluptate") {{
                optFields = new String[]{{
                    add("saepe"),
                    add("eius"),
                    add("aspernatur"),
                }};
                optPretty = false;
            }};            

            AddMembersForProjectResponse res = sdk.projects.addMembersForProject(req);

            if (res.addMembersForProject200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createProject

Create a new project in a workspace or team.

Every project is required to be created in a specific workspace or
organization, and this cannot be changed once set. Note that you can use
the `workspace` parameter regardless of whether or not it is an
organization.

If the workspace for your project is an organization, you must also
supply a `team` to share the project with.

Returns the full record of the newly created project.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProjectRequest;
import org.openapis.openapi.models.operations.CreateProjectRequestBodyInput;
import org.openapis.openapi.models.operations.CreateProjectResponse;
import org.openapis.openapi.models.shared.ProjectRequestColorEnum;
import org.openapis.openapi.models.shared.ProjectRequestCurrentStatusColorEnum;
import org.openapis.openapi.models.shared.ProjectRequestCurrentStatusInput;
import org.openapis.openapi.models.shared.ProjectRequestCurrentStatusUpdateInput;
import org.openapis.openapi.models.shared.ProjectRequestDefaultViewEnum;
import org.openapis.openapi.models.shared.ProjectRequestInput;
import org.openapis.openapi.models.shared.ProjectRequestWorkspaceInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserCompactInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateProjectRequest req = new CreateProjectRequest(                new CreateProjectRequestBodyInput() {{
                                data = new ProjectRequestInput() {{
                                    archived = false;
                                    color = ProjectRequestColorEnum.LIGHT_GREEN;
                                    currentStatus = new ProjectRequestCurrentStatusInput(ProjectRequestCurrentStatusColorEnum.GREEN, "The project is moving forward according to plan...") {{
                                        author = new UserCompactInput() {{
                                            name = "Greg Sanchez";
                                        }};;
                                        createdBy = new UserCompactInput() {{
                                            name = "Greg Sanchez";
                                        }};;
                                        htmlText = "<body>The project <strong>is</strong> moving forward according to plan...</body>";
                                        title = "Status Update - Jun 15";
                                    }};;
                                    currentStatusUpdate = new ProjectRequestCurrentStatusUpdateInput() {{
                                        title = "Status Update - Jun 15";
                                    }};;
                                    customFields = new java.util.HashMap<String, String>() {{
                                        put("optio", "accusamus");
                                    }};
                                    defaultView = ProjectRequestDefaultViewEnum.CALENDAR;
                                    dueDate = OffsetDateTime.parse("2019-09-15");
                                    dueOn = OffsetDateTime.parse("2019-09-15");
                                    followers = "12345,23456";
                                    htmlNotes = "<body>These are things we need to purchase.</body>";
                                    isTemplate = false;
                                    name = "Stuff to buy";
                                    notes = "These are things we need to purchase.";
                                    owner = "12345";
                                    public_ = false;
                                    startOn = LocalDate.parse("2019-09-14");
                                    team = "12345";
                                    workspace = new ProjectRequestWorkspaceInput() {{
                                        name = "My Company Workspace";
                                    }};;
                                }};;
                            }};) {{
                optFields = new String[]{{
                    add("saepe"),
                    add("suscipit"),
                }};
                optPretty = false;
            }};            

            CreateProjectResponse res = sdk.projects.createProject(req);

            if (res.createProject201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createProjectForTeam

Creates a project shared with the given team.

Returns the full record of the newly created project.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProjectForTeamRequest;
import org.openapis.openapi.models.operations.CreateProjectForTeamRequestBodyInput;
import org.openapis.openapi.models.operations.CreateProjectForTeamResponse;
import org.openapis.openapi.models.shared.ProjectRequestColorEnum;
import org.openapis.openapi.models.shared.ProjectRequestCurrentStatusColorEnum;
import org.openapis.openapi.models.shared.ProjectRequestCurrentStatusInput;
import org.openapis.openapi.models.shared.ProjectRequestCurrentStatusUpdateInput;
import org.openapis.openapi.models.shared.ProjectRequestDefaultViewEnum;
import org.openapis.openapi.models.shared.ProjectRequestInput;
import org.openapis.openapi.models.shared.ProjectRequestWorkspaceInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserCompactInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateProjectForTeamRequest req = new CreateProjectForTeamRequest(                new CreateProjectForTeamRequestBodyInput() {{
                                data = new ProjectRequestInput() {{
                                    archived = false;
                                    color = ProjectRequestColorEnum.LIGHT_GREEN;
                                    currentStatus = new ProjectRequestCurrentStatusInput(ProjectRequestCurrentStatusColorEnum.RED, "The project is moving forward according to plan...") {{
                                        author = new UserCompactInput() {{
                                            name = "Greg Sanchez";
                                        }};;
                                        createdBy = new UserCompactInput() {{
                                            name = "Greg Sanchez";
                                        }};;
                                        htmlText = "<body>The project <strong>is</strong> moving forward according to plan...</body>";
                                        title = "Status Update - Jun 15";
                                    }};;
                                    currentStatusUpdate = new ProjectRequestCurrentStatusUpdateInput() {{
                                        title = "Status Update - Jun 15";
                                    }};;
                                    customFields = new java.util.HashMap<String, String>() {{
                                        put("minima", "repellendus");
                                        put("totam", "similique");
                                        put("alias", "at");
                                    }};
                                    defaultView = ProjectRequestDefaultViewEnum.CALENDAR;
                                    dueDate = OffsetDateTime.parse("2019-09-15");
                                    dueOn = OffsetDateTime.parse("2019-09-15");
                                    followers = "12345,23456";
                                    htmlNotes = "<body>These are things we need to purchase.</body>";
                                    isTemplate = false;
                                    name = "Stuff to buy";
                                    notes = "These are things we need to purchase.";
                                    owner = "12345";
                                    public_ = false;
                                    startOn = LocalDate.parse("2019-09-14");
                                    team = "12345";
                                    workspace = new ProjectRequestWorkspaceInput() {{
                                        name = "My Company Workspace";
                                    }};;
                                }};;
                            }};, "quaerat") {{
                optFields = new String[]{{
                    add("vel"),
                    add("quod"),
                }};
                optPretty = false;
            }};            

            CreateProjectForTeamResponse res = sdk.projects.createProjectForTeam(req);

            if (res.createProjectForTeam201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createProjectForWorkspace

Returns the compact project records for all projects in the workspace.

If the workspace for your project is an organization, you must also
supply a team to share the project with.

Returns the full record of the newly created project.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProjectForWorkspaceRequest;
import org.openapis.openapi.models.operations.CreateProjectForWorkspaceRequestBodyInput;
import org.openapis.openapi.models.operations.CreateProjectForWorkspaceResponse;
import org.openapis.openapi.models.shared.ProjectRequestColorEnum;
import org.openapis.openapi.models.shared.ProjectRequestCurrentStatusColorEnum;
import org.openapis.openapi.models.shared.ProjectRequestCurrentStatusInput;
import org.openapis.openapi.models.shared.ProjectRequestCurrentStatusUpdateInput;
import org.openapis.openapi.models.shared.ProjectRequestDefaultViewEnum;
import org.openapis.openapi.models.shared.ProjectRequestInput;
import org.openapis.openapi.models.shared.ProjectRequestWorkspaceInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserCompactInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateProjectForWorkspaceRequest req = new CreateProjectForWorkspaceRequest(                new CreateProjectForWorkspaceRequestBodyInput() {{
                                data = new ProjectRequestInput() {{
                                    archived = false;
                                    color = ProjectRequestColorEnum.LIGHT_GREEN;
                                    currentStatus = new ProjectRequestCurrentStatusInput(ProjectRequestCurrentStatusColorEnum.BLUE, "The project is moving forward according to plan...") {{
                                        author = new UserCompactInput() {{
                                            name = "Greg Sanchez";
                                        }};;
                                        createdBy = new UserCompactInput() {{
                                            name = "Greg Sanchez";
                                        }};;
                                        htmlText = "<body>The project <strong>is</strong> moving forward according to plan...</body>";
                                        title = "Status Update - Jun 15";
                                    }};;
                                    currentStatusUpdate = new ProjectRequestCurrentStatusUpdateInput() {{
                                        title = "Status Update - Jun 15";
                                    }};;
                                    customFields = new java.util.HashMap<String, String>() {{
                                        put("dolorum", "a");
                                    }};
                                    defaultView = ProjectRequestDefaultViewEnum.CALENDAR;
                                    dueDate = OffsetDateTime.parse("2019-09-15");
                                    dueOn = OffsetDateTime.parse("2019-09-15");
                                    followers = "12345,23456";
                                    htmlNotes = "<body>These are things we need to purchase.</body>";
                                    isTemplate = false;
                                    name = "Stuff to buy";
                                    notes = "These are things we need to purchase.";
                                    owner = "12345";
                                    public_ = false;
                                    startOn = LocalDate.parse("2019-09-14");
                                    team = "12345";
                                    workspace = new ProjectRequestWorkspaceInput() {{
                                        name = "My Company Workspace";
                                    }};;
                                }};;
                            }};, "esse") {{
                optFields = new String[]{{
                    add("iusto"),
                    add("ipsum"),
                    add("quisquam"),
                }};
                optPretty = false;
            }};            

            CreateProjectForWorkspaceResponse res = sdk.projects.createProjectForWorkspace(req);

            if (res.createProjectForWorkspace201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProject

A specific, existing project can be deleted by making a DELETE request on
the URL for that project.

Returns an empty data record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProjectRequest;
import org.openapis.openapi.models.operations.DeleteProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteProjectRequest req = new DeleteProjectRequest("tenetur") {{
                optFields = new String[]{{
                    add("tempore"),
                }};
                optPretty = false;
            }};            

            DeleteProjectResponse res = sdk.projects.deleteProject(req);

            if (res.deleteProject200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## duplicateProject

Creates and returns a job that will asynchronously handle the duplication.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DuplicateProjectRequest;
import org.openapis.openapi.models.operations.DuplicateProjectRequestBody;
import org.openapis.openapi.models.operations.DuplicateProjectResponse;
import org.openapis.openapi.models.shared.ProjectDuplicateRequest;
import org.openapis.openapi.models.shared.ProjectDuplicateRequestIncludeEnum;
import org.openapis.openapi.models.shared.ProjectDuplicateRequestScheduleDates;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DuplicateProjectRequest req = new DuplicateProjectRequest("accusamus") {{
                requestBody = new DuplicateProjectRequestBody() {{
                    data = new ProjectDuplicateRequest("New Project Name") {{
                        include = ProjectDuplicateRequestIncludeEnum.TASK_NOTES;
                        scheduleDates = new ProjectDuplicateRequestScheduleDates(true) {{
                            dueOn = "2019-05-21";
                            startOn = "2019-05-21";
                        }};;
                        team = "12345";
                    }};;
                }};;
                optFields = new String[]{{
                    add("dolorem"),
                    add("sapiente"),
                }};
                optPretty = false;
            }};            

            DuplicateProjectResponse res = sdk.projects.duplicateProject(req);

            if (res.duplicateProject201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProject

Returns the complete project record for a single project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectRequest;
import org.openapis.openapi.models.operations.GetProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetProjectRequest req = new GetProjectRequest("totam") {{
                optFields = new String[]{{
                    add("sit"),
                    add("expedita"),
                }};
                optPretty = false;
            }};            

            GetProjectResponse res = sdk.projects.getProject(req);

            if (res.getProject200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjects

Returns the compact project records for some filtered set of projects. Use one or more of the parameters provided to filter the projects returned.
*Note: This endpoint may timeout for large domains. Try filtering by team!*

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectsRequest;
import org.openapis.openapi.models.operations.GetProjectsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetProjectsRequest req = new GetProjectsRequest() {{
                archived = false;
                limit = 207470L;
                offset = "sed";
                optFields = new String[]{{
                    add("libero"),
                    add("voluptas"),
                }};
                optPretty = false;
                team = "deserunt";
                workspace = "quam";
            }};            

            GetProjectsResponse res = sdk.projects.getProjects(req);

            if (res.getProjects200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectsForTask

Returns a compact representation of all of the projects the task is in.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectsForTaskRequest;
import org.openapis.openapi.models.operations.GetProjectsForTaskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetProjectsForTaskRequest req = new GetProjectsForTaskRequest("ipsum") {{
                limit = 277628L;
                offset = "qui";
                optFields = new String[]{{
                    add("maxime"),
                    add("pariatur"),
                    add("soluta"),
                }};
                optPretty = false;
            }};            

            GetProjectsForTaskResponse res = sdk.projects.getProjectsForTask(req);

            if (res.getProjectsForTask200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectsForTeam

Returns the compact project records for all projects in the team.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectsForTeamRequest;
import org.openapis.openapi.models.operations.GetProjectsForTeamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetProjectsForTeamRequest req = new GetProjectsForTeamRequest("dicta") {{
                archived = false;
                limit = 674848L;
                offset = "totam";
                optFields = new String[]{{
                    add("aspernatur"),
                    add("dolores"),
                }};
                optPretty = false;
            }};            

            GetProjectsForTeamResponse res = sdk.projects.getProjectsForTeam(req);

            if (res.getProjectsForTeam200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectsForWorkspace

Returns the compact project records for all projects in the workspace.
*Note: This endpoint may timeout for large domains. Prefer the `/teams/{team_gid}/projects` endpoint.*

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectsForWorkspaceRequest;
import org.openapis.openapi.models.operations.GetProjectsForWorkspaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetProjectsForWorkspaceRequest req = new GetProjectsForWorkspaceRequest("distinctio") {{
                archived = false;
                limit = 704474L;
                offset = "aliquid";
                optFields = new String[]{{
                    add("molestias"),
                    add("temporibus"),
                }};
                optPretty = false;
            }};            

            GetProjectsForWorkspaceResponse res = sdk.projects.getProjectsForWorkspace(req);

            if (res.getProjectsForWorkspace200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTaskCountsForProject

Get an object that holds task count fields. **All fields are excluded by default**. You must [opt in](/docs/input-output-options) using `opt_fields` to get any information from this endpoint.

This endpoint has an additional [rate limit](/docs/standard-rate-limits) and each field counts especially high against our [cost limits](/docs/cost-limits).

Milestones are just tasks, so they are included in the `num_tasks`, `num_incomplete_tasks`, and `num_completed_tasks` counts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTaskCountsForProjectRequest;
import org.openapis.openapi.models.operations.GetTaskCountsForProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTaskCountsForProjectRequest req = new GetTaskCountsForProjectRequest("qui") {{
                limit = 204865L;
                offset = "fugit";
                optFields = new String[]{{
                    add("odio"),
                }};
                optPretty = false;
            }};            

            GetTaskCountsForProjectResponse res = sdk.projects.getTaskCountsForProject(req);

            if (res.getTaskCountsForProject200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectSaveAsTemplate

Creates and returns a job that will asynchronously handle the project template creation. Note that
while the resulting project template can be accessed with the API, it won't be visible in the Asana
UI until Project Templates 2.0 is launched in the app. See more in [this forum post](https://forum.asana.com/t/a-new-api-for-project-templates/156432).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectSaveAsTemplateRequest;
import org.openapis.openapi.models.operations.ProjectSaveAsTemplateRequestBody;
import org.openapis.openapi.models.operations.ProjectSaveAsTemplateResponse;
import org.openapis.openapi.models.shared.ProjectSaveAsTemplateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ProjectSaveAsTemplateRequest req = new ProjectSaveAsTemplateRequest(                new ProjectSaveAsTemplateRequestBody() {{
                                data = new ProjectSaveAsTemplateRequest("New Project Template", true) {{
                                    team = "12345";
                                    workspace = "12345";
                                }};;
                            }};, "sunt") {{
                optFields = new String[]{{
                    add("nam"),
                    add("hic"),
                }};
                optPretty = false;
            }};            

            ProjectSaveAsTemplateResponse res = sdk.projects.projectSaveAsTemplate(req);

            if (res.projectSaveAsTemplate201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeCustomFieldSettingForProject

Removes a custom field setting from a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveCustomFieldSettingForProjectRequest;
import org.openapis.openapi.models.operations.RemoveCustomFieldSettingForProjectRequestBody;
import org.openapis.openapi.models.operations.RemoveCustomFieldSettingForProjectResponse;
import org.openapis.openapi.models.shared.RemoveCustomFieldSettingRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            RemoveCustomFieldSettingForProjectRequest req = new RemoveCustomFieldSettingForProjectRequest(                new RemoveCustomFieldSettingForProjectRequestBody() {{
                                data = new RemoveCustomFieldSettingRequest("14916");;
                            }};, "voluptatem") {{
                optPretty = false;
            }};            

            RemoveCustomFieldSettingForProjectResponse res = sdk.projects.removeCustomFieldSettingForProject(req);

            if (res.removeCustomFieldSettingForProject200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeFollowersForProject

Removes the specified list of users from following the project, this will not affect project membership status.
Returns the updated project record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveFollowersForProjectRequest;
import org.openapis.openapi.models.operations.RemoveFollowersForProjectRequestBody;
import org.openapis.openapi.models.operations.RemoveFollowersForProjectResponse;
import org.openapis.openapi.models.shared.RemoveFollowersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            RemoveFollowersForProjectRequest req = new RemoveFollowersForProjectRequest(                new RemoveFollowersForProjectRequestBody() {{
                                data = new RemoveFollowersRequest("521621,621373");;
                            }};, "cumque") {{
                optFields = new String[]{{
                    add("nobis"),
                    add("et"),
                    add("saepe"),
                }};
                optPretty = false;
            }};            

            RemoveFollowersForProjectResponse res = sdk.projects.removeFollowersForProject(req);

            if (res.removeFollowersForProject200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeMembersForProject

Removes the specified list of users from members of the project.
Returns the updated project record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveMembersForProjectRequest;
import org.openapis.openapi.models.operations.RemoveMembersForProjectRequestBody;
import org.openapis.openapi.models.operations.RemoveMembersForProjectResponse;
import org.openapis.openapi.models.shared.RemoveMembersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            RemoveMembersForProjectRequest req = new RemoveMembersForProjectRequest(                new RemoveMembersForProjectRequestBody() {{
                                data = new RemoveMembersRequest("521621,621373");;
                            }};, "ipsum") {{
                optFields = new String[]{{
                    add("nobis"),
                }};
                optPretty = false;
            }};            

            RemoveMembersForProjectResponse res = sdk.projects.removeMembersForProject(req);

            if (res.removeMembersForProject200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProject

A specific, existing project can be updated by making a PUT request on
the URL for that project. Only the fields provided in the `data` block
will be updated; any unspecified fields will remain unchanged.

When using this method, it is best to specify only those fields you wish
to change, or else you may overwrite changes made by another user since
you last retrieved the task.

Returns the complete updated project record.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProjectRequest;
import org.openapis.openapi.models.operations.UpdateProjectRequestBodyInput;
import org.openapis.openapi.models.operations.UpdateProjectResponse;
import org.openapis.openapi.models.shared.ProjectRequestColorEnum;
import org.openapis.openapi.models.shared.ProjectRequestCurrentStatusColorEnum;
import org.openapis.openapi.models.shared.ProjectRequestCurrentStatusInput;
import org.openapis.openapi.models.shared.ProjectRequestCurrentStatusUpdateInput;
import org.openapis.openapi.models.shared.ProjectRequestDefaultViewEnum;
import org.openapis.openapi.models.shared.ProjectRequestInput;
import org.openapis.openapi.models.shared.ProjectRequestWorkspaceInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserCompactInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateProjectRequest req = new UpdateProjectRequest(                new UpdateProjectRequestBodyInput() {{
                                data = new ProjectRequestInput() {{
                                    archived = false;
                                    color = ProjectRequestColorEnum.LIGHT_GREEN;
                                    currentStatus = new ProjectRequestCurrentStatusInput(ProjectRequestCurrentStatusColorEnum.RED, "The project is moving forward according to plan...") {{
                                        author = new UserCompactInput() {{
                                            name = "Greg Sanchez";
                                        }};;
                                        createdBy = new UserCompactInput() {{
                                            name = "Greg Sanchez";
                                        }};;
                                        htmlText = "<body>The project <strong>is</strong> moving forward according to plan...</body>";
                                        title = "Status Update - Jun 15";
                                    }};;
                                    currentStatusUpdate = new ProjectRequestCurrentStatusUpdateInput() {{
                                        title = "Status Update - Jun 15";
                                    }};;
                                    customFields = new java.util.HashMap<String, String>() {{
                                        put("cupiditate", "aperiam");
                                        put("delectus", "dolorem");
                                        put("dolore", "labore");
                                    }};
                                    defaultView = ProjectRequestDefaultViewEnum.CALENDAR;
                                    dueDate = OffsetDateTime.parse("2019-09-15");
                                    dueOn = OffsetDateTime.parse("2019-09-15");
                                    followers = "12345,23456";
                                    htmlNotes = "<body>These are things we need to purchase.</body>";
                                    isTemplate = false;
                                    name = "Stuff to buy";
                                    notes = "These are things we need to purchase.";
                                    owner = "12345";
                                    public_ = false;
                                    startOn = LocalDate.parse("2019-09-14");
                                    team = "12345";
                                    workspace = new ProjectRequestWorkspaceInput() {{
                                        name = "My Company Workspace";
                                    }};;
                                }};;
                            }};, "adipisci") {{
                optFields = new String[]{{
                    add("architecto"),
                    add("quae"),
                    add("aut"),
                }};
                optPretty = false;
            }};            

            UpdateProjectResponse res = sdk.projects.updateProject(req);

            if (res.updateProject200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
