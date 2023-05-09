# projectTemplates

## Overview

A project template is an object that allows new projects to be created
with a predefined setup, which may include tasks, sections, rules, etc.
It simplifies the process of running a workflow that involves a similar
set of work every time.


Project templates in organizations are shared with a single team. Currently, the
team of a project template cannot be changed via the API.

### Available Operations

* [getProjectTemplate](#getprojecttemplate) - Get a project template
* [getProjectTemplates](#getprojecttemplates) - Get multiple project templates
* [getProjectTemplatesForTeam](#getprojecttemplatesforteam) - Get a team's project templates
* [instantiateProject](#instantiateproject) - Instantiate a project from a project template

## getProjectTemplate

Returns the complete project template record for a single project template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectTemplateRequest;
import org.openapis.openapi.models.operations.GetProjectTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetProjectTemplateRequest req = new GetProjectTemplateRequest("amet") {{
                optFields = new String[]{{
                    add("numquam"),
                    add("veritatis"),
                    add("ipsa"),
                }};
                optPretty = false;
            }};            

            GetProjectTemplateResponse res = sdk.projectTemplates.getProjectTemplate(req);

            if (res.getProjectTemplate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectTemplates

Returns the compact project template records for all project templates in the given team or workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectTemplatesRequest;
import org.openapis.openapi.models.operations.GetProjectTemplatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetProjectTemplatesRequest req = new GetProjectTemplatesRequest() {{
                limit = 56418L;
                offset = "iure";
                optFields = new String[]{{
                    add("quaerat"),
                    add("accusamus"),
                }};
                optPretty = false;
                team = "quidem";
                workspace = "voluptatibus";
            }};            

            GetProjectTemplatesResponse res = sdk.projectTemplates.getProjectTemplates(req);

            if (res.getProjectTemplates200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectTemplatesForTeam

Returns the compact project template records for all project templates in the team.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectTemplatesForTeamRequest;
import org.openapis.openapi.models.operations.GetProjectTemplatesForTeamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetProjectTemplatesForTeamRequest req = new GetProjectTemplatesForTeamRequest("voluptas") {{
                limit = 617658L;
                offset = "eos";
                optFields = new String[]{{
                    add("sit"),
                    add("fugiat"),
                    add("ab"),
                }};
                optPretty = false;
            }};            

            GetProjectTemplatesForTeamResponse res = sdk.projectTemplates.getProjectTemplatesForTeam(req);

            if (res.getProjectTemplatesForTeam200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## instantiateProject

Creates and returns a job that will asynchronously handle the project instantiation.

To form this request, it is recommended to first make a request to [get a project template](/docs/get-a-project-template). Then, from the response, copy the `gid` from the object in the `requested_dates` array. This `gid` should be used in `requested_dates` to instantiate a project.

_Note: The body of this request will differ if your workspace is an organization. To determine if your workspace is an organization, use the [is_organization](/docs/workspace) parameter._

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InstantiateProjectRequest;
import org.openapis.openapi.models.operations.InstantiateProjectRequestBody;
import org.openapis.openapi.models.operations.InstantiateProjectResponse;
import org.openapis.openapi.models.shared.DateVariableRequest;
import org.openapis.openapi.models.shared.ProjectTemplateInstantiateProjectRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            InstantiateProjectRequest req = new InstantiateProjectRequest("soluta") {{
                requestBody = new InstantiateProjectRequestBody() {{
                    data = new ProjectTemplateInstantiateProjectRequest("New Project Name", true) {{
                        isStrict = true;
                        requestedDates = new org.openapis.openapi.models.shared.DateVariableRequest[]{{
                            add(new DateVariableRequest() {{
                                gid = "1";
                                value = OffsetDateTime.parse("2022-01-01");
                            }}),
                            add(new DateVariableRequest() {{
                                gid = "1";
                                value = OffsetDateTime.parse("2022-01-01");
                            }}),
                            add(new DateVariableRequest() {{
                                gid = "1";
                                value = OffsetDateTime.parse("2022-01-01");
                            }}),
                        }};
                        team = "12345";
                        workspace = "12345";
                    }};;
                }};;
                optFields = new String[]{{
                    add("voluptate"),
                    add("dolorum"),
                }};
                optPretty = false;
            }};            

            InstantiateProjectResponse res = sdk.projectTemplates.instantiateProject(req);

            if (res.instantiateProject201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
