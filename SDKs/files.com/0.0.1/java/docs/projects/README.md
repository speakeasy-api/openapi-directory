# projects

## Overview

Operations about projects

### Available Operations

* [deleteProjectsId](#deleteprojectsid) - Delete Project
* [getProjects](#getprojects) - List Projects
* [getProjectsId](#getprojectsid) - Show Project
* [patchProjectsId](#patchprojectsid) - Update Project
* [postProjects](#postprojects) - Create Project

## deleteProjectsId

Delete Project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProjectsIdRequest;
import org.openapis.openapi.models.operations.DeleteProjectsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteProjectsIdRequest req = new DeleteProjectsIdRequest(289776);            

            DeleteProjectsIdResponse res = sdk.projects.deleteProjectsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjects

List Projects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectsRequest;
import org.openapis.openapi.models.operations.GetProjectsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProjectsRequest req = new GetProjectsRequest() {{
                cursor = "quidem";
                perPage = 539074;
            }};            

            GetProjectsResponse res = sdk.projects.getProjects(req);

            if (res.projectEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectsId

Show Project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectsIdRequest;
import org.openapis.openapi.models.operations.GetProjectsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProjectsIdRequest req = new GetProjectsIdRequest(671957);            

            GetProjectsIdResponse res = sdk.projects.getProjectsId(req);

            if (res.projectEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchProjectsId

Update Project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchProjectsIdRequest;
import org.openapis.openapi.models.operations.PatchProjectsIdRequestBody;
import org.openapis.openapi.models.operations.PatchProjectsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchProjectsIdRequest req = new PatchProjectsIdRequest(                new PatchProjectsIdRequestBody("nam");, 948861);            

            PatchProjectsIdResponse res = sdk.projects.patchProjectsId(req);

            if (res.projectEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postProjects

Create Project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostProjectsRequestBody;
import org.openapis.openapi.models.operations.PostProjectsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostProjectsRequestBody req = new PostProjectsRequestBody("laboriosam");            

            PostProjectsResponse res = sdk.projects.postProjects(req);

            if (res.projectEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
