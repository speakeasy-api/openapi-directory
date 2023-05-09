# projectBriefs

## Overview

A project brief object represents a rich text document that describes a project.

Please note that this API is in *preview*, and is expected to change. This API is to be used for development and testing only as an advance view into the upcoming rich text format experience in the task description. For more information, see [this post](https://forum.asana.com/t/project-brief-api-now-available-as-a-preview/150885) in the developer forum.

### Available Operations

* [createProjectBrief](#createprojectbrief) - Create a project brief
* [deleteProjectBrief](#deleteprojectbrief) - Delete a project brief
* [getProjectBrief](#getprojectbrief) - Get a project brief
* [updateProjectBrief](#updateprojectbrief) - Update a project brief

## createProjectBrief

Creates a new project brief.

Returns the full record of the newly created project brief.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProjectBriefRequest;
import org.openapis.openapi.models.operations.CreateProjectBriefRequestBodyInput;
import org.openapis.openapi.models.operations.CreateProjectBriefResponse;
import org.openapis.openapi.models.shared.ProjectBriefRequestInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateProjectBriefRequest req = new CreateProjectBriefRequest(                new CreateProjectBriefRequestBodyInput() {{
                                data = new ProjectBriefRequestInput() {{
                                    htmlText = "<body>This is a <strong>project brief</strong>.</body>";
                                    text = "This is a project brief.";
                                    title = "Stuff to buy — Project Brief";
                                }};;
                            }};, "totam") {{
                optFields = new String[]{{
                    add("eaque"),
                    add("quis"),
                }};
                optPretty = false;
            }};            

            CreateProjectBriefResponse res = sdk.projectBriefs.createProjectBrief(req);

            if (res.createProjectBrief201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProjectBrief

Deletes a specific, existing project brief.

Returns an empty data record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProjectBriefRequest;
import org.openapis.openapi.models.operations.DeleteProjectBriefResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteProjectBriefRequest req = new DeleteProjectBriefRequest("nesciunt") {{
                optFields = new String[]{{
                    add("perferendis"),
                }};
                optPretty = false;
            }};            

            DeleteProjectBriefResponse res = sdk.projectBriefs.deleteProjectBrief(req);

            if (res.deleteProjectBrief200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectBrief

Get the full record for a project brief.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectBriefRequest;
import org.openapis.openapi.models.operations.GetProjectBriefResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetProjectBriefRequest req = new GetProjectBriefRequest("dolores") {{
                optFields = new String[]{{
                    add("quam"),
                    add("dolor"),
                    add("vero"),
                    add("nostrum"),
                }};
                optPretty = false;
            }};            

            GetProjectBriefResponse res = sdk.projectBriefs.getProjectBrief(req);

            if (res.getProjectBrief200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProjectBrief

An existing project brief can be updated by making a PUT request on the URL for
that project brief. Only the fields provided in the `data` block will be updated;
any unspecified fields will remain unchanged.

Returns the complete updated project brief record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProjectBriefRequest;
import org.openapis.openapi.models.operations.UpdateProjectBriefRequestBodyInput;
import org.openapis.openapi.models.operations.UpdateProjectBriefResponse;
import org.openapis.openapi.models.shared.ProjectBriefRequestInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateProjectBriefRequest req = new UpdateProjectBriefRequest(                new UpdateProjectBriefRequestBodyInput() {{
                                data = new ProjectBriefRequestInput() {{
                                    htmlText = "<body>This is a <strong>project brief</strong>.</body>";
                                    text = "This is a project brief.";
                                    title = "Stuff to buy — Project Brief";
                                }};;
                            }};, "hic") {{
                optFields = new String[]{{
                    add("omnis"),
                    add("facilis"),
                    add("perspiciatis"),
                    add("voluptatem"),
                }};
                optPretty = false;
            }};            

            UpdateProjectBriefResponse res = sdk.projectBriefs.updateProjectBrief(req);

            if (res.updateProjectBrief200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
