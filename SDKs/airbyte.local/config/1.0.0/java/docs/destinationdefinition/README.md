# destinationDefinition

## Overview

DestinationDefinition related resources.

### Available Operations

* [createCustomDestinationDefinition](#createcustomdestinationdefinition) - Creates a custom destinationDefinition for the given workspace
* [deleteDestinationDefinition](#deletedestinationdefinition) - Delete a destination definition
* [getDestinationDefinition](#getdestinationdefinition) - Get destinationDefinition
* [getDestinationDefinitionForWorkspace](#getdestinationdefinitionforworkspace) - Get a destinationDefinition that is configured for the given workspace
* [grantDestinationDefinitionToWorkspace](#grantdestinationdefinitiontoworkspace) - grant a private, non-custom destinationDefinition to a given workspace
* [listDestinationDefinitions](#listdestinationdefinitions) - List all the destinationDefinitions the current Airbyte deployment is configured to use
* [listDestinationDefinitionsForWorkspace](#listdestinationdefinitionsforworkspace) - List all the destinationDefinitions the given workspace is configured to use
* [listLatestDestinationDefinitions](#listlatestdestinationdefinitions) - List the latest destinationDefinitions Airbyte supports
* [listPrivateDestinationDefinitions](#listprivatedestinationdefinitions) - List all private, non-custom destinationDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.
* [revokeDestinationDefinitionFromWorkspace](#revokedestinationdefinitionfromworkspace) - revoke a grant to a private, non-custom destinationDefinition from a given workspace
* [updateDestinationDefinition](#updatedestinationdefinition) - Update destinationDefinition

## createCustomDestinationDefinition

Creates a custom destinationDefinition for the given workspace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCustomDestinationDefinitionResponse;
import org.openapis.openapi.models.shared.ActorDefinitionResourceRequirements;
import org.openapis.openapi.models.shared.CustomDestinationDefinitionCreate;
import org.openapis.openapi.models.shared.DestinationDefinitionCreate;
import org.openapis.openapi.models.shared.JobTypeEnum;
import org.openapis.openapi.models.shared.JobTypeResourceLimit;
import org.openapis.openapi.models.shared.ResourceRequirements;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CustomDestinationDefinitionCreate req = new CustomDestinationDefinitionCreate(                new DestinationDefinitionCreate("ipsa", "voluptates", "http://attentive-liquid.biz", "eligendi") {{
                                icon = "distinctio";
                                resourceRequirements = new ActorDefinitionResourceRequirements() {{
                                    default_ = new ResourceRequirements() {{
                                        cpuLimit = "voluptatem";
                                        cpuRequest = "autem";
                                        memoryLimit = "esse";
                                        memoryRequest = "dolores";
                                    }};;
                                    jobSpecific = new org.openapis.openapi.models.shared.JobTypeResourceLimit[]{{
                                        add(new JobTypeResourceLimit(JobTypeEnum.RESET_CONNECTION,                 new ResourceRequirements() {{
                                                            cpuLimit = "accusamus";
                                                            cpuRequest = "necessitatibus";
                                                            memoryLimit = "tempore";
                                                            memoryRequest = "sint";
                                                        }};) {{
                                            jobType = JobTypeEnum.GET_SPEC;
                                            resourceRequirements = new ResourceRequirements() {{
                                                cpuLimit = "est";
                                                cpuRequest = "facere";
                                                memoryLimit = "corrupti";
                                                memoryRequest = "molestiae";
                                            }};
                                        }}),
                                        add(new JobTypeResourceLimit(JobTypeEnum.DISCOVER_SCHEMA,                 new ResourceRequirements() {{
                                                            cpuLimit = "officiis";
                                                            cpuRequest = "voluptatibus";
                                                            memoryLimit = "cum";
                                                            memoryRequest = "at";
                                                        }};) {{
                                            jobType = JobTypeEnum.DISCOVER_SCHEMA;
                                            resourceRequirements = new ResourceRequirements() {{
                                                cpuLimit = "autem";
                                                cpuRequest = "ipsam";
                                                memoryLimit = "rerum";
                                                memoryRequest = "laudantium";
                                            }};
                                        }}),
                                        add(new JobTypeResourceLimit(JobTypeEnum.GET_SPEC,                 new ResourceRequirements() {{
                                                            cpuLimit = "expedita";
                                                            cpuRequest = "officiis";
                                                            memoryLimit = "eos";
                                                            memoryRequest = "quibusdam";
                                                        }};) {{
                                            jobType = JobTypeEnum.GET_SPEC;
                                            resourceRequirements = new ResourceRequirements() {{
                                                cpuLimit = "quia";
                                                cpuRequest = "quidem";
                                                memoryLimit = "fuga";
                                                memoryRequest = "repudiandae";
                                            }};
                                        }}),
                                        add(new JobTypeResourceLimit(JobTypeEnum.RESET_CONNECTION,                 new ResourceRequirements() {{
                                                            cpuLimit = "earum";
                                                            cpuRequest = "adipisci";
                                                            memoryLimit = "recusandae";
                                                            memoryRequest = "similique";
                                                        }};) {{
                                            jobType = JobTypeEnum.SYNC;
                                            resourceRequirements = new ResourceRequirements() {{
                                                cpuLimit = "praesentium";
                                                cpuRequest = "odit";
                                                memoryLimit = "explicabo";
                                                memoryRequest = "corporis";
                                            }};
                                        }}),
                                    }};
                                }};;
                            }};, "4b5197f9-2443-4da7-8e52-b895c537c645");            

            CreateCustomDestinationDefinitionResponse res = sdk.destinationDefinition.createCustomDestinationDefinition(req);

            if (res.destinationDefinitionRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDestinationDefinition

Delete a destination definition

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDestinationDefinitionResponse;
import org.openapis.openapi.models.shared.DestinationDefinitionIdRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DestinationDefinitionIdRequestBody req = new DestinationDefinitionIdRequestBody("4efb0b34-896c-43ca-9acf-be2fd5707577");            

            DeleteDestinationDefinitionResponse res = sdk.destinationDefinition.deleteDestinationDefinition(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDestinationDefinition

Get destinationDefinition

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDestinationDefinitionResponse;
import org.openapis.openapi.models.shared.DestinationDefinitionIdRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DestinationDefinitionIdRequestBody req = new DestinationDefinitionIdRequestBody("929177de-ac64-46ec-b573-409e3eb1e5a2");            

            GetDestinationDefinitionResponse res = sdk.destinationDefinition.getDestinationDefinition(req);

            if (res.destinationDefinitionRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDestinationDefinitionForWorkspace

Get a destinationDefinition that is configured for the given workspace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDestinationDefinitionForWorkspaceResponse;
import org.openapis.openapi.models.shared.DestinationDefinitionIdWithWorkspaceId;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DestinationDefinitionIdWithWorkspaceId req = new DestinationDefinitionIdWithWorkspaceId("b12eb07f-116d-4b99-945f-c95fa88970e1", "89dbb30f-cb33-4ea0-95b1-97cd44e2f52d");            

            GetDestinationDefinitionForWorkspaceResponse res = sdk.destinationDefinition.getDestinationDefinitionForWorkspace(req);

            if (res.destinationDefinitionRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## grantDestinationDefinitionToWorkspace

grant a private, non-custom destinationDefinition to a given workspace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GrantDestinationDefinitionToWorkspaceResponse;
import org.openapis.openapi.models.shared.DestinationDefinitionIdWithWorkspaceId;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DestinationDefinitionIdWithWorkspaceId req = new DestinationDefinitionIdWithWorkspaceId("82d3513b-b6f4-48b6-96bc-db35ff2e4b27", "537a8cd9-e731-49c1-b7d5-25f77b114eeb");            

            GrantDestinationDefinitionToWorkspaceResponse res = sdk.destinationDefinition.grantDestinationDefinitionToWorkspace(req);

            if (res.privateDestinationDefinitionRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDestinationDefinitions

List all the destinationDefinitions the current Airbyte deployment is configured to use

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDestinationDefinitionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDestinationDefinitionsResponse res = sdk.destinationDefinition.listDestinationDefinitions();

            if (res.destinationDefinitionReadList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDestinationDefinitionsForWorkspace

List all the destinationDefinitions the given workspace is configured to use

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDestinationDefinitionsForWorkspaceResponse;
import org.openapis.openapi.models.shared.WorkspaceIdRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.WorkspaceIdRequestBody req = new WorkspaceIdRequestBody("52ff785f-c378-414d-8c98-e0c2bb89eb75");            

            ListDestinationDefinitionsForWorkspaceResponse res = sdk.destinationDefinition.listDestinationDefinitionsForWorkspace(req);

            if (res.destinationDefinitionReadList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLatestDestinationDefinitions

Guaranteed to retrieve the latest information on supported destinations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLatestDestinationDefinitionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListLatestDestinationDefinitionsResponse res = sdk.destinationDefinition.listLatestDestinationDefinitions();

            if (res.destinationDefinitionReadList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPrivateDestinationDefinitions

List all private, non-custom destinationDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPrivateDestinationDefinitionsResponse;
import org.openapis.openapi.models.shared.WorkspaceIdRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.WorkspaceIdRequestBody req = new WorkspaceIdRequestBody("dad636c6-0050-43d8-bb31-180f739ae9e0");            

            ListPrivateDestinationDefinitionsResponse res = sdk.destinationDefinition.listPrivateDestinationDefinitions(req);

            if (res.privateDestinationDefinitionReadList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## revokeDestinationDefinitionFromWorkspace

revoke a grant to a private, non-custom destinationDefinition from a given workspace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RevokeDestinationDefinitionFromWorkspaceResponse;
import org.openapis.openapi.models.shared.DestinationDefinitionIdWithWorkspaceId;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DestinationDefinitionIdWithWorkspaceId req = new DestinationDefinitionIdWithWorkspaceId("57eb809e-2810-4331-b398-1d4c700b607f", "3c93c73b-9da3-4f2c-ada7-e23f2257411f");            

            RevokeDestinationDefinitionFromWorkspaceResponse res = sdk.destinationDefinition.revokeDestinationDefinitionFromWorkspace(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDestinationDefinition

Update destinationDefinition

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDestinationDefinitionResponse;
import org.openapis.openapi.models.shared.ActorDefinitionResourceRequirements;
import org.openapis.openapi.models.shared.DestinationDefinitionUpdate;
import org.openapis.openapi.models.shared.JobTypeEnum;
import org.openapis.openapi.models.shared.JobTypeResourceLimit;
import org.openapis.openapi.models.shared.ResourceRequirements;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DestinationDefinitionUpdate req = new DestinationDefinitionUpdate("af4b7544-e472-4e80-a857-a5b40463a7d5") {{
                dockerImageTag = "molestiae";
                resourceRequirements = new ActorDefinitionResourceRequirements() {{
                    default_ = new ResourceRequirements() {{
                        cpuLimit = "veniam";
                        cpuRequest = "reiciendis";
                        memoryLimit = "ab";
                        memoryRequest = "modi";
                    }};;
                    jobSpecific = new org.openapis.openapi.models.shared.JobTypeResourceLimit[]{{
                        add(new JobTypeResourceLimit(JobTypeEnum.RESET_CONNECTION,                 new ResourceRequirements() {{
                                            cpuLimit = "possimus";
                                            cpuRequest = "voluptate";
                                            memoryLimit = "consectetur";
                                            memoryRequest = "nesciunt";
                                        }};) {{
                            jobType = JobTypeEnum.GET_SPEC;
                            resourceRequirements = new ResourceRequirements() {{
                                cpuLimit = "eveniet";
                                cpuRequest = "odio";
                                memoryLimit = "commodi";
                                memoryRequest = "numquam";
                            }};
                        }}),
                    }};
                }};;
            }};            

            UpdateDestinationDefinitionResponse res = sdk.destinationDefinition.updateDestinationDefinition(req);

            if (res.destinationDefinitionRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
