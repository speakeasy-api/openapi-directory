# workspaces

### Available Operations

* [allWorkspaces](#allworkspaces) - All workspaces
* [createWorkspace](#createworkspace) - Create Workspace
* [deleteWorkspace](#deleteworkspace) - Delete Workspace
* [singleWorkspace](#singleworkspace) - Single workspace
* [updateWorkspace](#updateworkspace) - Update Workspace

## allWorkspaces

The `/workspaces` endpoint returns a list of all [workspaces](https://www.getpostman.com/docs/v6/postman/workspaces/intro_to_workspaces) that is accessible by you. The list includes your own workspaces and the workspaces that you have access to.

The response contains an array of collection information containing the `name`, `id`, and `type` of each workspace.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllWorkspacesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AllWorkspacesResponse res = sdk.workspaces.allWorkspaces();

            if (res.allWorkspaces200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWorkspace

This endpoint allows you to create a workspace and populate it with entities like `collections`, `environments`, `mocks` and `monitors` using their `uid`.

On successful creation of the workspace, the response returns the workspcae `name` and `id`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWorkspaceRequestBody;
import org.openapis.openapi.models.operations.CreateWorkspaceRequestBodyWorkspace;
import org.openapis.openapi.models.operations.CreateWorkspaceRequestBodyWorkspaceCollections;
import org.openapis.openapi.models.operations.CreateWorkspaceRequestBodyWorkspaceEnvironments;
import org.openapis.openapi.models.operations.CreateWorkspaceRequestBodyWorkspaceMocks;
import org.openapis.openapi.models.operations.CreateWorkspaceRequestBodyWorkspaceMonitors;
import org.openapis.openapi.models.operations.CreateWorkspaceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateWorkspaceRequestBody req = new CreateWorkspaceRequestBody() {{
                workspace = new CreateWorkspaceRequestBodyWorkspace() {{
                    collections = new org.openapis.openapi.models.operations.CreateWorkspaceRequestBodyWorkspaceCollections[]{{
                        add(new CreateWorkspaceRequestBodyWorkspaceCollections() {{
                            id = "e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d";
                            name = "Straw hats";
                            uid = "8154-e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d";
                        }}),
                        add(new CreateWorkspaceRequestBodyWorkspaceCollections() {{
                            id = "e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d";
                            name = "Straw hats";
                            uid = "8154-e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d";
                        }}),
                    }};
                    description = "Some description";
                    environments = new org.openapis.openapi.models.operations.CreateWorkspaceRequestBodyWorkspaceEnvironments[]{{
                        add(new CreateWorkspaceRequestBodyWorkspaceEnvironments() {{
                            id = "83a1aaa2-a204-4bd8-9b92-4d486918906b";
                            name = "env";
                            uid = "8154-83a1aaa2-a204-4bd8-9b92-4d486918906b";
                        }}),
                    }};
                    mocks = new org.openapis.openapi.models.operations.CreateWorkspaceRequestBodyWorkspaceMocks[]{{
                        add(new CreateWorkspaceRequestBodyWorkspaceMocks() {{
                            id = "cda672ef-1375-40e9-baee-e20ece8d7b65";
                        }}),
                        add(new CreateWorkspaceRequestBodyWorkspaceMocks() {{
                            id = "cda672ef-1375-40e9-baee-e20ece8d7b65";
                        }}),
                        add(new CreateWorkspaceRequestBodyWorkspaceMocks() {{
                            id = "cda672ef-1375-40e9-baee-e20ece8d7b65";
                        }}),
                    }};
                    monitors = new org.openapis.openapi.models.operations.CreateWorkspaceRequestBodyWorkspaceMonitors[]{{
                        add(new CreateWorkspaceRequestBodyWorkspaceMonitors() {{
                            id = "1e889bd2-3862-4be0-b2c2-9b1fe9673aec";
                        }}),
                    }};
                    name = "New Workspace";
                    type = "personal";
                }};;
            }};            

            CreateWorkspaceResponse res = sdk.workspaces.createWorkspace(req);

            if (res.createWorkspace200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWorkspace

This endpoint allows you to delete an existing workspace.

On successful deletion of the workspace, the response returns the `id`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkspaceRequest;
import org.openapis.openapi.models.operations.DeleteWorkspaceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWorkspaceRequest req = new DeleteWorkspaceRequest("quis");            

            DeleteWorkspaceResponse res = sdk.workspaces.deleteWorkspace(req);

            if (res.deleteWorkspace200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## singleWorkspace

Access the contents of a workspace that is accessible to you using its id (`id`). Includes the collections, environments, mocks and monitors of that workspace.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SingleWorkspaceRequest;
import org.openapis.openapi.models.operations.SingleWorkspaceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SingleWorkspaceRequest req = new SingleWorkspaceRequest("vitae");            

            SingleWorkspaceResponse res = sdk.workspaces.singleWorkspace(req);

            if (res.singleWorkspace200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWorkspace

This endpoint allows you to update a workspace and update it's association to entities like `collections`, `environments`, `mocks` and `monitors` using their `uid`.

On successful updation of the workspace, the response returns the workspcae `name` and `id`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

**Note** : The endpoint expects you to send the desired state of the workspace in terms of the associated entities so be careful when trying to update these entities.

For eg. if your workspace has collections A and B, and in the update call, you send C's uid in the collections array, then A and B would be removed from the workspace and C would be added.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWorkspaceRequest;
import org.openapis.openapi.models.operations.UpdateWorkspaceRequestBody;
import org.openapis.openapi.models.operations.UpdateWorkspaceRequestBodyWorkspace;
import org.openapis.openapi.models.operations.UpdateWorkspaceRequestBodyWorkspaceCollections;
import org.openapis.openapi.models.operations.UpdateWorkspaceRequestBodyWorkspaceEnvironments;
import org.openapis.openapi.models.operations.UpdateWorkspaceRequestBodyWorkspaceMocks;
import org.openapis.openapi.models.operations.UpdateWorkspaceRequestBodyWorkspaceMonitors;
import org.openapis.openapi.models.operations.UpdateWorkspaceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateWorkspaceRequest req = new UpdateWorkspaceRequest("laborum") {{
                requestBody = new UpdateWorkspaceRequestBody() {{
                    workspace = new UpdateWorkspaceRequestBodyWorkspace() {{
                        collections = new org.openapis.openapi.models.operations.UpdateWorkspaceRequestBodyWorkspaceCollections[]{{
                            add(new UpdateWorkspaceRequestBodyWorkspaceCollections() {{
                                id = "e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d";
                                name = "Straw hats";
                                uid = "8154-e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d";
                            }}),
                            add(new UpdateWorkspaceRequestBodyWorkspaceCollections() {{
                                id = "e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d";
                                name = "Straw hats";
                                uid = "8154-e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d";
                            }}),
                            add(new UpdateWorkspaceRequestBodyWorkspaceCollections() {{
                                id = "e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d";
                                name = "Straw hats";
                                uid = "8154-e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d";
                            }}),
                        }};
                        description = "Some description";
                        environments = new org.openapis.openapi.models.operations.UpdateWorkspaceRequestBodyWorkspaceEnvironments[]{{
                            add(new UpdateWorkspaceRequestBodyWorkspaceEnvironments() {{
                                id = "83a1aaa2-a204-4bd8-9b92-4d486918906b";
                                name = "env";
                                uid = "8154-83a1aaa2-a204-4bd8-9b92-4d486918906b";
                            }}),
                            add(new UpdateWorkspaceRequestBodyWorkspaceEnvironments() {{
                                id = "83a1aaa2-a204-4bd8-9b92-4d486918906b";
                                name = "env";
                                uid = "8154-83a1aaa2-a204-4bd8-9b92-4d486918906b";
                            }}),
                        }};
                        mocks = new org.openapis.openapi.models.operations.UpdateWorkspaceRequestBodyWorkspaceMocks[]{{
                            add(new UpdateWorkspaceRequestBodyWorkspaceMocks() {{
                                id = "cda672ef-1375-40e9-baee-e20ece8d7b65";
                            }}),
                        }};
                        monitors = new org.openapis.openapi.models.operations.UpdateWorkspaceRequestBodyWorkspaceMonitors[]{{
                            add(new UpdateWorkspaceRequestBodyWorkspaceMonitors() {{
                                id = "1e889bd2-3862-4be0-b2c2-9b1fe9673aec";
                            }}),
                            add(new UpdateWorkspaceRequestBodyWorkspaceMonitors() {{
                                id = "1e889bd2-3862-4be0-b2c2-9b1fe9673aec";
                            }}),
                            add(new UpdateWorkspaceRequestBodyWorkspaceMonitors() {{
                                id = "1e889bd2-3862-4be0-b2c2-9b1fe9673aec";
                            }}),
                            add(new UpdateWorkspaceRequestBodyWorkspaceMonitors() {{
                                id = "1e889bd2-3862-4be0-b2c2-9b1fe9673aec";
                            }}),
                        }};
                        name = "New Workspace updated";
                    }};;
                }};;
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
