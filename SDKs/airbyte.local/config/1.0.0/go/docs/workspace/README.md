# Workspace

## Overview

Workspace related resources.

### Available Operations

* [CreateWorkspace](#createworkspace) - Creates a workspace
* [DeleteWorkspace](#deleteworkspace) - Deletes a workspace
* [GetWorkspace](#getworkspace) - Find workspace by ID
* [GetWorkspaceByConnectionID](#getworkspacebyconnectionid) - Find workspace by connection id
* [GetWorkspaceBySlug](#getworkspacebyslug) - Find workspace by slug
* [ListWorkspaces](#listworkspaces) - List all workspaces registered in the current Airbyte deployment
* [UpdateWorkspace](#updateworkspace) - Update workspace state
* [UpdateWorkspaceFeedback](#updateworkspacefeedback) - Update workspace feedback state
* [UpdateWorkspaceName](#updateworkspacename) - Update workspace name

## CreateWorkspace

Creates a workspace

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Workspace.CreateWorkspace(ctx, shared.WorkspaceCreate{
        AnonymousDataCollection: sdk.Bool(false),
        DefaultGeography: shared.GeographyEnumAuto.ToPointer(),
        DisplaySetupWizard: sdk.Bool(false),
        Email: sdk.String("Franco30@yahoo.com"),
        Name: "Luz Hudson",
        News: sdk.Bool(false),
        Notifications: []shared.Notification{
            shared.Notification{
                CustomerioConfiguration: map[string]interface{}{
                    "voluptatibus": "facilis",
                    "doloremque": "officiis",
                    "nisi": "reprehenderit",
                },
                NotificationType: shared.NotificationTypeEnumCustomerio,
                SendOnFailure: false,
                SendOnSuccess: false,
                SlackConfiguration: &shared.SlackNotificationConfiguration{
                    Webhook: "alias",
                },
            },
            shared.Notification{
                CustomerioConfiguration: map[string]interface{}{
                    "ut": "hic",
                    "facere": "tenetur",
                    "saepe": "assumenda",
                },
                NotificationType: shared.NotificationTypeEnumSlack,
                SendOnFailure: false,
                SendOnSuccess: false,
                SlackConfiguration: &shared.SlackNotificationConfiguration{
                    Webhook: "exercitationem",
                },
            },
            shared.Notification{
                CustomerioConfiguration: map[string]interface{}{
                    "sit": "recusandae",
                    "a": "exercitationem",
                },
                NotificationType: shared.NotificationTypeEnumSlack,
                SendOnFailure: false,
                SendOnSuccess: false,
                SlackConfiguration: &shared.SlackNotificationConfiguration{
                    Webhook: "mollitia",
                },
            },
        },
        SecurityUpdates: sdk.Bool(false),
        WebhookConfigs: []shared.WebhookConfigWrite{
            shared.WebhookConfigWrite{
                AuthToken: sdk.String("ut"),
                Name: sdk.String("Ryan Prosacco"),
                ValidationURL: sdk.String("recusandae"),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkspaceRead != nil {
        // handle response
    }
}
```

## DeleteWorkspace

Deletes a workspace

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Workspace.DeleteWorkspace(ctx, shared.WorkspaceIDRequestBody{
        WorkspaceID: "99731adc-05d8-45ae-adfb-70fb3874290d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetWorkspace

Find workspace by ID

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Workspace.GetWorkspace(ctx, shared.WorkspaceIDRequestBody{
        WorkspaceID: "336561ec-a16e-4f89-851b-d76eeeb518c4",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkspaceRead != nil {
        // handle response
    }
}
```

## GetWorkspaceByConnectionID

Find workspace by connection id

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Workspace.GetWorkspaceByConnectionID(ctx, shared.ConnectionIDRequestBody{
        ConnectionID: "da1fad35-512f-406d-8e5b-72f0f548568a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkspaceRead != nil {
        // handle response
    }
}
```

## GetWorkspaceBySlug

Find workspace by slug

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Workspace.GetWorkspaceBySlug(ctx, shared.SlugRequestBody{
        Slug: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkspaceRead != nil {
        // handle response
    }
}
```

## ListWorkspaces

List all workspaces registered in the current Airbyte deployment

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
    res, err := s.Workspace.ListWorkspaces(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkspaceReadList != nil {
        // handle response
    }
}
```

## UpdateWorkspace

Update workspace state

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Workspace.UpdateWorkspace(ctx, shared.WorkspaceUpdate{
        AnonymousDataCollection: sdk.Bool(false),
        DefaultGeography: shared.GeographyEnumAuto.ToPointer(),
        DisplaySetupWizard: sdk.Bool(false),
        Email: sdk.String("Effie2@gmail.com"),
        InitialSetupComplete: sdk.Bool(false),
        News: sdk.Bool(false),
        Notifications: []shared.Notification{
            shared.Notification{
                CustomerioConfiguration: map[string]interface{}{
                    "quibusdam": "autem",
                },
                NotificationType: shared.NotificationTypeEnumCustomerio,
                SendOnFailure: false,
                SendOnSuccess: false,
                SlackConfiguration: &shared.SlackNotificationConfiguration{
                    Webhook: "tempore",
                },
            },
            shared.Notification{
                CustomerioConfiguration: map[string]interface{}{
                    "modi": "ratione",
                    "aliquam": "ea",
                    "aliquam": "corporis",
                },
                NotificationType: shared.NotificationTypeEnumCustomerio,
                SendOnFailure: false,
                SendOnSuccess: false,
                SlackConfiguration: &shared.SlackNotificationConfiguration{
                    Webhook: "ipsa",
                },
            },
            shared.Notification{
                CustomerioConfiguration: map[string]interface{}{
                    "aut": "molestias",
                },
                NotificationType: shared.NotificationTypeEnumSlack,
                SendOnFailure: false,
                SendOnSuccess: false,
                SlackConfiguration: &shared.SlackNotificationConfiguration{
                    Webhook: "repellat",
                },
            },
        },
        SecurityUpdates: sdk.Bool(false),
        WebhookConfigs: []shared.WebhookConfigWrite{
            shared.WebhookConfigWrite{
                AuthToken: sdk.String("libero"),
                Name: sdk.String("Alvin Runolfsdottir"),
                ValidationURL: sdk.String("a"),
            },
            shared.WebhookConfigWrite{
                AuthToken: sdk.String("tenetur"),
                Name: sdk.String("Mr. Bernadette Quigley"),
                ValidationURL: sdk.String("debitis"),
            },
            shared.WebhookConfigWrite{
                AuthToken: sdk.String("enim"),
                Name: sdk.String("Eloise Hintz"),
                ValidationURL: sdk.String("animi"),
            },
        },
        WorkspaceID: "45ac82b8-5f8b-4c2c-aba8-da4127dd597f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkspaceRead != nil {
        // handle response
    }
}
```

## UpdateWorkspaceFeedback

Update workspace feedback state

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Workspace.UpdateWorkspaceFeedback(ctx, shared.WorkspaceGiveFeedback{
        WorkspaceID: "f4711aa1-bc74-4b86-8ecc-74f77b4848bd",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateWorkspaceName

Update workspace name

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Workspace.UpdateWorkspaceName(ctx, shared.WorkspaceUpdateName{
        Name: "Angie Johnston I",
        WorkspaceID: "41d2c3b8-0809-4437-be06-0459bebbad02",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkspaceRead != nil {
        // handle response
    }
}
```
