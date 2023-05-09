# Workspaces

### Available Operations

* [AllWorkspaces](#allworkspaces) - All workspaces
* [CreateWorkspace](#createworkspace) - Create Workspace
* [DeleteWorkspace](#deleteworkspace) - Delete Workspace
* [SingleWorkspace](#singleworkspace) - Single workspace
* [UpdateWorkspace](#updateworkspace) - Update Workspace

## AllWorkspaces

The `/workspaces` endpoint returns a list of all [workspaces](https://www.getpostman.com/docs/v6/postman/workspaces/intro_to_workspaces) that is accessible by you. The list includes your own workspaces and the workspaces that you have access to.

The response contains an array of collection information containing the `name`, `id`, and `type` of each workspace.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Workspaces.AllWorkspaces(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.AllWorkspaces200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateWorkspace

This endpoint allows you to create a workspace and populate it with entities like `collections`, `environments`, `mocks` and `monitors` using their `uid`.

On successful creation of the workspace, the response returns the workspcae `name` and `id`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Workspaces.CreateWorkspace(ctx, operations.CreateWorkspaceRequestBody{
        Workspace: &operations.CreateWorkspaceRequestBodyWorkspace{
            Collections: []CreateWorkspaceRequestBodyWorkspaceCollections{
                operations.CreateWorkspaceRequestBodyWorkspaceCollections{
                    ID: sdk.String("e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d"),
                    Name: sdk.String("Straw hats"),
                    UID: sdk.String("8154-e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d"),
                },
            },
            Description: sdk.String("Some description"),
            Environments: []CreateWorkspaceRequestBodyWorkspaceEnvironments{
                operations.CreateWorkspaceRequestBodyWorkspaceEnvironments{
                    ID: sdk.String("83a1aaa2-a204-4bd8-9b92-4d486918906b"),
                    Name: sdk.String("env"),
                    UID: sdk.String("8154-83a1aaa2-a204-4bd8-9b92-4d486918906b"),
                },
                operations.CreateWorkspaceRequestBodyWorkspaceEnvironments{
                    ID: sdk.String("83a1aaa2-a204-4bd8-9b92-4d486918906b"),
                    Name: sdk.String("env"),
                    UID: sdk.String("8154-83a1aaa2-a204-4bd8-9b92-4d486918906b"),
                },
                operations.CreateWorkspaceRequestBodyWorkspaceEnvironments{
                    ID: sdk.String("83a1aaa2-a204-4bd8-9b92-4d486918906b"),
                    Name: sdk.String("env"),
                    UID: sdk.String("8154-83a1aaa2-a204-4bd8-9b92-4d486918906b"),
                },
            },
            Mocks: []CreateWorkspaceRequestBodyWorkspaceMocks{
                operations.CreateWorkspaceRequestBodyWorkspaceMocks{
                    ID: sdk.String("cda672ef-1375-40e9-baee-e20ece8d7b65"),
                },
            },
            Monitors: []CreateWorkspaceRequestBodyWorkspaceMonitors{
                operations.CreateWorkspaceRequestBodyWorkspaceMonitors{
                    ID: sdk.String("1e889bd2-3862-4be0-b2c2-9b1fe9673aec"),
                },
                operations.CreateWorkspaceRequestBodyWorkspaceMonitors{
                    ID: sdk.String("1e889bd2-3862-4be0-b2c2-9b1fe9673aec"),
                },
            },
            Name: sdk.String("New Workspace"),
            Type: sdk.String("personal"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWorkspace200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteWorkspace

This endpoint allows you to delete an existing workspace.

On successful deletion of the workspace, the response returns the `id`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Workspaces.DeleteWorkspace(ctx, operations.DeleteWorkspaceRequest{
        WorkspaceID: "vitae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteWorkspace200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SingleWorkspace

Access the contents of a workspace that is accessible to you using its id (`id`). Includes the collections, environments, mocks and monitors of that workspace.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Workspaces.SingleWorkspace(ctx, operations.SingleWorkspaceRequest{
        WorkspaceID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SingleWorkspace200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateWorkspace

This endpoint allows you to update a workspace and update it's association to entities like `collections`, `environments`, `mocks` and `monitors` using their `uid`.

On successful updation of the workspace, the response returns the workspcae `name` and `id`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

**Note** : The endpoint expects you to send the desired state of the workspace in terms of the associated entities so be careful when trying to update these entities.

For eg. if your workspace has collections A and B, and in the update call, you send C's uid in the collections array, then A and B would be removed from the workspace and C would be added.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Workspaces.UpdateWorkspace(ctx, operations.UpdateWorkspaceRequest{
        RequestBody: &operations.UpdateWorkspaceRequestBody{
            Workspace: &operations.UpdateWorkspaceRequestBodyWorkspace{
                Collections: []UpdateWorkspaceRequestBodyWorkspaceCollections{
                    operations.UpdateWorkspaceRequestBodyWorkspaceCollections{
                        ID: sdk.String("e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d"),
                        Name: sdk.String("Straw hats"),
                        UID: sdk.String("8154-e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d"),
                    },
                    operations.UpdateWorkspaceRequestBodyWorkspaceCollections{
                        ID: sdk.String("e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d"),
                        Name: sdk.String("Straw hats"),
                        UID: sdk.String("8154-e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d"),
                    },
                    operations.UpdateWorkspaceRequestBodyWorkspaceCollections{
                        ID: sdk.String("e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d"),
                        Name: sdk.String("Straw hats"),
                        UID: sdk.String("8154-e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d"),
                    },
                },
                Description: sdk.String("Some description"),
                Environments: []UpdateWorkspaceRequestBodyWorkspaceEnvironments{
                    operations.UpdateWorkspaceRequestBodyWorkspaceEnvironments{
                        ID: sdk.String("83a1aaa2-a204-4bd8-9b92-4d486918906b"),
                        Name: sdk.String("env"),
                        UID: sdk.String("8154-83a1aaa2-a204-4bd8-9b92-4d486918906b"),
                    },
                    operations.UpdateWorkspaceRequestBodyWorkspaceEnvironments{
                        ID: sdk.String("83a1aaa2-a204-4bd8-9b92-4d486918906b"),
                        Name: sdk.String("env"),
                        UID: sdk.String("8154-83a1aaa2-a204-4bd8-9b92-4d486918906b"),
                    },
                },
                Mocks: []UpdateWorkspaceRequestBodyWorkspaceMocks{
                    operations.UpdateWorkspaceRequestBodyWorkspaceMocks{
                        ID: sdk.String("cda672ef-1375-40e9-baee-e20ece8d7b65"),
                    },
                },
                Monitors: []UpdateWorkspaceRequestBodyWorkspaceMonitors{
                    operations.UpdateWorkspaceRequestBodyWorkspaceMonitors{
                        ID: sdk.String("1e889bd2-3862-4be0-b2c2-9b1fe9673aec"),
                    },
                    operations.UpdateWorkspaceRequestBodyWorkspaceMonitors{
                        ID: sdk.String("1e889bd2-3862-4be0-b2c2-9b1fe9673aec"),
                    },
                    operations.UpdateWorkspaceRequestBodyWorkspaceMonitors{
                        ID: sdk.String("1e889bd2-3862-4be0-b2c2-9b1fe9673aec"),
                    },
                    operations.UpdateWorkspaceRequestBodyWorkspaceMonitors{
                        ID: sdk.String("1e889bd2-3862-4be0-b2c2-9b1fe9673aec"),
                    },
                },
                Name: sdk.String("New Workspace updated"),
            },
        },
        WorkspaceID: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateWorkspace200ApplicationJSONObject != nil {
        // handle response
    }
}
```
