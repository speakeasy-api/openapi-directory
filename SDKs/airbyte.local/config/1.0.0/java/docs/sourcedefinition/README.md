# sourceDefinition

## Overview

SourceDefinition related resources.

### Available Operations

* [createCustomSourceDefinition](#createcustomsourcedefinition) - Creates a custom sourceDefinition for the given workspace
* [deleteSourceDefinition](#deletesourcedefinition) - Delete a source definition
* [getSourceDefinition](#getsourcedefinition) - Get source
* [getSourceDefinitionForWorkspace](#getsourcedefinitionforworkspace) - Get a sourceDefinition that is configured for the given workspace
* [grantSourceDefinitionToWorkspace](#grantsourcedefinitiontoworkspace) - grant a private, non-custom sourceDefinition to a given workspace
* [listLatestSourceDefinitions](#listlatestsourcedefinitions) - List the latest sourceDefinitions Airbyte supports
* [listPrivateSourceDefinitions](#listprivatesourcedefinitions) - List all private, non-custom sourceDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.
* [listSourceDefinitions](#listsourcedefinitions) - List all the sourceDefinitions the current Airbyte deployment is configured to use
* [listSourceDefinitionsForWorkspace](#listsourcedefinitionsforworkspace) - List all the sourceDefinitions the given workspace is configured to use
* [revokeSourceDefinitionFromWorkspace](#revokesourcedefinitionfromworkspace) - revoke a grant to a private, non-custom sourceDefinition from a given workspace
* [updateSourceDefinition](#updatesourcedefinition) - Update a sourceDefinition

## createCustomSourceDefinition

Creates a custom sourceDefinition for the given workspace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCustomSourceDefinitionResponse;
import org.openapis.openapi.models.shared.ActorDefinitionResourceRequirements;
import org.openapis.openapi.models.shared.CustomSourceDefinitionCreate;
import org.openapis.openapi.models.shared.JobTypeEnum;
import org.openapis.openapi.models.shared.JobTypeResourceLimit;
import org.openapis.openapi.models.shared.ResourceRequirements;
import org.openapis.openapi.models.shared.SourceDefinitionCreate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CustomSourceDefinitionCreate req = new CustomSourceDefinitionCreate(                new SourceDefinitionCreate("repudiandae", "maiores", "http://imaginative-bungalow.com", "nam") {{
                                icon = "ex";
                                resourceRequirements = new ActorDefinitionResourceRequirements() {{
                                    default_ = new ResourceRequirements() {{
                                        cpuLimit = "neque";
                                        cpuRequest = "quod";
                                        memoryLimit = "eos";
                                        memoryRequest = "alias";
                                    }};;
                                    jobSpecific = new org.openapis.openapi.models.shared.JobTypeResourceLimit[]{{
                                        add(new JobTypeResourceLimit(JobTypeEnum.GET_SPEC,                 new ResourceRequirements() {{
                                                            cpuLimit = "dignissimos";
                                                            cpuRequest = "quam";
                                                            memoryLimit = "modi";
                                                            memoryRequest = "fuga";
                                                        }};) {{
                                            jobType = JobTypeEnum.REPLICATE;
                                            resourceRequirements = new ResourceRequirements() {{
                                                cpuLimit = "facere";
                                                cpuRequest = "id";
                                                memoryLimit = "atque";
                                                memoryRequest = "quaerat";
                                            }};
                                        }}),
                                        add(new JobTypeResourceLimit(JobTypeEnum.CHECK_CONNECTION,                 new ResourceRequirements() {{
                                                            cpuLimit = "ad";
                                                            cpuRequest = "illum";
                                                            memoryLimit = "sit";
                                                            memoryRequest = "molestias";
                                                        }};) {{
                                            jobType = JobTypeEnum.SYNC;
                                            resourceRequirements = new ResourceRequirements() {{
                                                cpuLimit = "deleniti";
                                                cpuRequest = "officia";
                                                memoryLimit = "sint";
                                                memoryRequest = "laborum";
                                            }};
                                        }}),
                                    }};
                                }};;
                            }};, "6b6f66fe-f020-4e9f-843b-4257b992c8db");            

            CreateCustomSourceDefinitionResponse res = sdk.sourceDefinition.createCustomSourceDefinition(req);

            if (res.sourceDefinitionRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSourceDefinition

Delete a source definition

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSourceDefinitionResponse;
import org.openapis.openapi.models.shared.SourceDefinitionIdRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SourceDefinitionIdRequestBody req = new SourceDefinitionIdRequestBody("da6a61ef-a219-4825-8fd0-a9eba47f7d3e");            

            DeleteSourceDefinitionResponse res = sdk.sourceDefinition.deleteSourceDefinition(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSourceDefinition

Get source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSourceDefinitionResponse;
import org.openapis.openapi.models.shared.SourceDefinitionIdRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SourceDefinitionIdRequestBody req = new SourceDefinitionIdRequestBody("f049640d-6a18-431c-87ad-f596fdf1ad83");            

            GetSourceDefinitionResponse res = sdk.sourceDefinition.getSourceDefinition(req);

            if (res.sourceDefinitionRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSourceDefinitionForWorkspace

Get a sourceDefinition that is configured for the given workspace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSourceDefinitionForWorkspaceResponse;
import org.openapis.openapi.models.shared.SourceDefinitionIdWithWorkspaceId;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SourceDefinitionIdWithWorkspaceId req = new SourceDefinitionIdWithWorkspaceId("7ae80c1c-19c9-45ba-9986-78fa3f696991", "af388ce0-3614-4448-8797-7a0ef2f53602");            

            GetSourceDefinitionForWorkspaceResponse res = sdk.sourceDefinition.getSourceDefinitionForWorkspace(req);

            if (res.sourceDefinitionRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## grantSourceDefinitionToWorkspace

grant a private, non-custom sourceDefinition to a given workspace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GrantSourceDefinitionToWorkspaceResponse;
import org.openapis.openapi.models.shared.SourceDefinitionIdWithWorkspaceId;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SourceDefinitionIdWithWorkspaceId req = new SourceDefinitionIdWithWorkspaceId("8efeef93-4152-4ed7-a253-f4c157deaa71", "70f445ac-cf66-47aa-b9bb-ad185fe431d6");            

            GrantSourceDefinitionToWorkspaceResponse res = sdk.sourceDefinition.grantSourceDefinitionToWorkspace(req);

            if (res.privateSourceDefinitionRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLatestSourceDefinitions

Guaranteed to retrieve the latest information on supported sources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLatestSourceDefinitionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListLatestSourceDefinitionsResponse res = sdk.sourceDefinition.listLatestSourceDefinitions();

            if (res.sourceDefinitionReadList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPrivateSourceDefinitions

List all private, non-custom sourceDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPrivateSourceDefinitionsResponse;
import org.openapis.openapi.models.shared.WorkspaceIdRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.WorkspaceIdRequestBody req = new WorkspaceIdRequestBody("bf5c838f-bb8c-420c-b67f-c4b425e99e62");            

            ListPrivateSourceDefinitionsResponse res = sdk.sourceDefinition.listPrivateSourceDefinitions(req);

            if (res.privateSourceDefinitionReadList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSourceDefinitions

List all the sourceDefinitions the current Airbyte deployment is configured to use

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSourceDefinitionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSourceDefinitionsResponse res = sdk.sourceDefinition.listSourceDefinitions();

            if (res.sourceDefinitionReadList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSourceDefinitionsForWorkspace

List all the sourceDefinitions the given workspace is configured to use

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSourceDefinitionsForWorkspaceResponse;
import org.openapis.openapi.models.shared.WorkspaceIdRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.WorkspaceIdRequestBody req = new WorkspaceIdRequestBody("34c9f7b7-9dfe-4b77-a5c3-8d4baf91e506");            

            ListSourceDefinitionsForWorkspaceResponse res = sdk.sourceDefinition.listSourceDefinitionsForWorkspace(req);

            if (res.sourceDefinitionReadList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## revokeSourceDefinitionFromWorkspace

revoke a grant to a private, non-custom sourceDefinition from a given workspace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RevokeSourceDefinitionFromWorkspaceResponse;
import org.openapis.openapi.models.shared.SourceDefinitionIdWithWorkspaceId;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SourceDefinitionIdWithWorkspaceId req = new SourceDefinitionIdWithWorkspaceId("ef890a54-b475-4f16-b56d-385a3c4ac631", "b99e26ce-d8f9-4fdb-9410-f63bbf817837");            

            RevokeSourceDefinitionFromWorkspaceResponse res = sdk.sourceDefinition.revokeSourceDefinitionFromWorkspace(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSourceDefinition

Update a sourceDefinition

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSourceDefinitionResponse;
import org.openapis.openapi.models.shared.ActorDefinitionResourceRequirements;
import org.openapis.openapi.models.shared.JobTypeEnum;
import org.openapis.openapi.models.shared.JobTypeResourceLimit;
import org.openapis.openapi.models.shared.ResourceRequirements;
import org.openapis.openapi.models.shared.SourceDefinitionUpdate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SourceDefinitionUpdate req = new SourceDefinitionUpdate("nam", "01afdd78-8624-4189-ab44-873f5033f19d") {{
                resourceRequirements = new ActorDefinitionResourceRequirements() {{
                    default_ = new ResourceRequirements() {{
                        cpuLimit = "tempore";
                        cpuRequest = "asperiores";
                        memoryLimit = "quasi";
                        memoryRequest = "consequuntur";
                    }};;
                    jobSpecific = new org.openapis.openapi.models.shared.JobTypeResourceLimit[]{{
                        add(new JobTypeResourceLimit(JobTypeEnum.CHECK_CONNECTION,                 new ResourceRequirements() {{
                                            cpuLimit = "itaque";
                                            cpuRequest = "error";
                                            memoryLimit = "expedita";
                                            memoryRequest = "error";
                                        }};) {{
                            jobType = JobTypeEnum.CONNECTION_UPDATER;
                            resourceRequirements = new ResourceRequirements() {{
                                cpuLimit = "debitis";
                                cpuRequest = "labore";
                                memoryLimit = "veritatis";
                                memoryRequest = "minima";
                            }};
                        }}),
                        add(new JobTypeResourceLimit(JobTypeEnum.GET_SPEC,                 new ResourceRequirements() {{
                                            cpuLimit = "odit";
                                            cpuRequest = "eius";
                                            memoryLimit = "error";
                                            memoryRequest = "vel";
                                        }};) {{
                            jobType = JobTypeEnum.CONNECTION_UPDATER;
                            resourceRequirements = new ResourceRequirements() {{
                                cpuLimit = "temporibus";
                                cpuRequest = "voluptate";
                                memoryLimit = "earum";
                                memoryRequest = "minima";
                            }};
                        }}),
                    }};
                }};;
            }};            

            UpdateSourceDefinitionResponse res = sdk.sourceDefinition.updateSourceDefinition(req);

            if (res.sourceDefinitionRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
