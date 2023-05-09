# projectStatuses

## Overview

*Deprecated: new integrations should prefer using [status updates](/docs/asana-statuses)*

A project status is an update on the progress of a particular project,
and is sent out to all project followers when created. These updates
include both text describing the update and a color code intended to
represent the overall state of the project: "green" for projects that
are on track, "yellow" for projects at risk, "red" for projects that
are behind, and "blue" for projects on hold.

Project statuses can be created and deleted, but not modified.

### Available Operations

* [createProjectStatusForProject](#createprojectstatusforproject) - Create a project status
* [deleteProjectStatus](#deleteprojectstatus) - Delete a project status
* [getProjectStatus](#getprojectstatus) - Get a project status
* [getProjectStatusesForProject](#getprojectstatusesforproject) - Get statuses from a project

## createProjectStatusForProject

*Deprecated: new integrations should prefer the `/status_updates` route.*

Creates a new status update on the project.

Returns the full record of the newly created project status update.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProjectStatusForProjectRequest;
import org.openapis.openapi.models.operations.CreateProjectStatusForProjectRequestBodyInput;
import org.openapis.openapi.models.operations.CreateProjectStatusForProjectResponse;
import org.openapis.openapi.models.shared.ProjectStatusRequestColorEnum;
import org.openapis.openapi.models.shared.ProjectStatusRequestInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateProjectStatusForProjectRequest req = new CreateProjectStatusForProjectRequest(                new CreateProjectStatusForProjectRequestBodyInput() {{
                                data = new ProjectStatusRequestInput(ProjectStatusRequestColorEnum.RED, "The project is moving forward according to plan...") {{
                                    htmlText = "<body>The project <strong>is</strong> moving forward according to plan...</body>";
                                    title = "Status Update - Jun 15";
                                }};;
                            }};, "dolorum") {{
                optFields = new String[]{{
                    add("pariatur"),
                    add("provident"),
                    add("nobis"),
                }};
                optPretty = false;
            }};            

            CreateProjectStatusForProjectResponse res = sdk.projectStatuses.createProjectStatusForProject(req);

            if (res.createProjectStatusForProject201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProjectStatus

*Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*

Deletes a specific, existing project status update.

Returns an empty data record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProjectStatusRequest;
import org.openapis.openapi.models.operations.DeleteProjectStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteProjectStatusRequest req = new DeleteProjectStatusRequest("libero") {{
                optFields = new String[]{{
                    add("quaerat"),
                    add("quos"),
                    add("aliquid"),
                    add("dolorem"),
                }};
                optPretty = false;
            }};            

            DeleteProjectStatusResponse res = sdk.projectStatuses.deleteProjectStatus(req);

            if (res.deleteProjectStatus200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectStatus

*Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*

Returns the complete record for a single status update.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectStatusRequest;
import org.openapis.openapi.models.operations.GetProjectStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetProjectStatusRequest req = new GetProjectStatusRequest("dolorem") {{
                optFields = new String[]{{
                    add("qui"),
                }};
                optPretty = false;
            }};            

            GetProjectStatusResponse res = sdk.projectStatuses.getProjectStatus(req);

            if (res.getProjectStatus200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectStatusesForProject

*Deprecated: new integrations should prefer the `/status_updates` route.*

Returns the compact project status update records for all updates on the project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectStatusesForProjectRequest;
import org.openapis.openapi.models.operations.GetProjectStatusesForProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetProjectStatusesForProjectRequest req = new GetProjectStatusesForProjectRequest("ipsum") {{
                limit = 944373L;
                offset = "excepturi";
                optFields = new String[]{{
                    add("voluptate"),
                    add("dignissimos"),
                    add("reiciendis"),
                }};
                optPretty = false;
            }};            

            GetProjectStatusesForProjectResponse res = sdk.projectStatuses.getProjectStatusesForProject(req);

            if (res.getProjectStatusesForProject200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
