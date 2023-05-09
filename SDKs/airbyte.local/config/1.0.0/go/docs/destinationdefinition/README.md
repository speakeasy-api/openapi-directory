# DestinationDefinition

## Overview

DestinationDefinition related resources.

### Available Operations

* [CreateCustomDestinationDefinition](#createcustomdestinationdefinition) - Creates a custom destinationDefinition for the given workspace
* [DeleteDestinationDefinition](#deletedestinationdefinition) - Delete a destination definition
* [GetDestinationDefinition](#getdestinationdefinition) - Get destinationDefinition
* [GetDestinationDefinitionForWorkspace](#getdestinationdefinitionforworkspace) - Get a destinationDefinition that is configured for the given workspace
* [GrantDestinationDefinitionToWorkspace](#grantdestinationdefinitiontoworkspace) - grant a private, non-custom destinationDefinition to a given workspace
* [ListDestinationDefinitions](#listdestinationdefinitions) - List all the destinationDefinitions the current Airbyte deployment is configured to use
* [ListDestinationDefinitionsForWorkspace](#listdestinationdefinitionsforworkspace) - List all the destinationDefinitions the given workspace is configured to use
* [ListLatestDestinationDefinitions](#listlatestdestinationdefinitions) - List the latest destinationDefinitions Airbyte supports
* [ListPrivateDestinationDefinitions](#listprivatedestinationdefinitions) - List all private, non-custom destinationDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.
* [RevokeDestinationDefinitionFromWorkspace](#revokedestinationdefinitionfromworkspace) - revoke a grant to a private, non-custom destinationDefinition from a given workspace
* [UpdateDestinationDefinition](#updatedestinationdefinition) - Update destinationDefinition

## CreateCustomDestinationDefinition

Creates a custom destinationDefinition for the given workspace

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
    res, err := s.DestinationDefinition.CreateCustomDestinationDefinition(ctx, shared.CustomDestinationDefinitionCreate{
        DestinationDefinition: shared.DestinationDefinitionCreate{
            DockerImageTag: "repudiandae",
            DockerRepository: "accusantium",
            DocumentationURL: "https://uneven-codpiece.org",
            Icon: sdk.String("odio"),
            Name: "Fred Champlin",
            ResourceRequirements: &shared.ActorDefinitionResourceRequirements{
                Default: &shared.ResourceRequirements{
                    CPULimit: sdk.String("earum"),
                    CPURequest: sdk.String("adipisci"),
                    MemoryLimit: sdk.String("recusandae"),
                    MemoryRequest: sdk.String("similique"),
                },
                JobSpecific: []shared.JobTypeResourceLimit{
                    shared.JobTypeResourceLimit{
                        JobType: shared.JobTypeEnumResetConnection,
                        ResourceRequirements: shared.ResourceRequirements{
                            CPULimit: sdk.String("quis"),
                            CPURequest: sdk.String("beatae"),
                            MemoryLimit: sdk.String("unde"),
                            MemoryRequest: sdk.String("molestiae"),
                        },
                    },
                    shared.JobTypeResourceLimit{
                        JobType: shared.JobTypeEnumReplicate,
                        ResourceRequirements: shared.ResourceRequirements{
                            CPULimit: sdk.String("cupiditate"),
                            CPURequest: sdk.String("fugit"),
                            MemoryLimit: sdk.String("numquam"),
                            MemoryRequest: sdk.String("numquam"),
                        },
                    },
                },
            },
        },
        WorkspaceID: "3da7ce52-b895-4c53-bc64-54efb0b34896",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DestinationDefinitionRead != nil {
        // handle response
    }
}
```

## DeleteDestinationDefinition

Delete a destination definition

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
    res, err := s.DestinationDefinition.DeleteDestinationDefinition(ctx, shared.DestinationDefinitionIDRequestBody{
        DestinationDefinitionID: "c3ca5acf-be2f-4d57-8757-7929177deac6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDestinationDefinition

Get destinationDefinition

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
    res, err := s.DestinationDefinition.GetDestinationDefinition(ctx, shared.DestinationDefinitionIDRequestBody{
        DestinationDefinitionID: "46ecb573-409e-43eb-9e5a-2b12eb07f116",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DestinationDefinitionRead != nil {
        // handle response
    }
}
```

## GetDestinationDefinitionForWorkspace

Get a destinationDefinition that is configured for the given workspace

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
    res, err := s.DestinationDefinition.GetDestinationDefinitionForWorkspace(ctx, shared.DestinationDefinitionIDWithWorkspaceID{
        DestinationDefinitionID: "db99545f-c95f-4a88-970e-189dbb30fcb3",
        WorkspaceID: "3ea055b1-97cd-444e-af52-d82d3513bb6f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DestinationDefinitionRead != nil {
        // handle response
    }
}
```

## GrantDestinationDefinitionToWorkspace

grant a private, non-custom destinationDefinition to a given workspace

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
    res, err := s.DestinationDefinition.GrantDestinationDefinitionToWorkspace(ctx, shared.DestinationDefinitionIDWithWorkspaceID{
        DestinationDefinitionID: "48b656bc-db35-4ff2-a4b2-7537a8cd9e73",
        WorkspaceID: "19c177d5-25f7-47b1-94ee-b52ff785fc37",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PrivateDestinationDefinitionRead != nil {
        // handle response
    }
}
```

## ListDestinationDefinitions

List all the destinationDefinitions the current Airbyte deployment is configured to use

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
    res, err := s.DestinationDefinition.ListDestinationDefinitions(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.DestinationDefinitionReadList != nil {
        // handle response
    }
}
```

## ListDestinationDefinitionsForWorkspace

List all the destinationDefinitions the given workspace is configured to use

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
    res, err := s.DestinationDefinition.ListDestinationDefinitionsForWorkspace(ctx, shared.WorkspaceIDRequestBody{
        WorkspaceID: "814d4c98-e0c2-4bb8-9eb7-5dad636c6005",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DestinationDefinitionReadList != nil {
        // handle response
    }
}
```

## ListLatestDestinationDefinitions

Guaranteed to retrieve the latest information on supported destinations.

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
    res, err := s.DestinationDefinition.ListLatestDestinationDefinitions(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.DestinationDefinitionReadList != nil {
        // handle response
    }
}
```

## ListPrivateDestinationDefinitions

List all private, non-custom destinationDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.

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
    res, err := s.DestinationDefinition.ListPrivateDestinationDefinitions(ctx, shared.WorkspaceIDRequestBody{
        WorkspaceID: "03d8bb31-180f-4739-ae9e-057eb809e281",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PrivateDestinationDefinitionReadList != nil {
        // handle response
    }
}
```

## RevokeDestinationDefinitionFromWorkspace

revoke a grant to a private, non-custom destinationDefinition from a given workspace

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
    res, err := s.DestinationDefinition.RevokeDestinationDefinitionFromWorkspace(ctx, shared.DestinationDefinitionIDWithWorkspaceID{
        DestinationDefinitionID: "0331f398-1d4c-4700-b607-f3c93c73b9da",
        WorkspaceID: "3f2ceda7-e23f-4225-b411-faf4b7544e47",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateDestinationDefinition

Update destinationDefinition

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
    res, err := s.DestinationDefinition.UpdateDestinationDefinition(ctx, shared.DestinationDefinitionUpdate{
        DestinationDefinitionID: "2e802857-a5b4-4046-ba7d-575f1400e764",
        DockerImageTag: sdk.String("dolorum"),
        ResourceRequirements: &shared.ActorDefinitionResourceRequirements{
            Default: &shared.ResourceRequirements{
                CPULimit: sdk.String("possimus"),
                CPURequest: sdk.String("voluptate"),
                MemoryLimit: sdk.String("consectetur"),
                MemoryRequest: sdk.String("nesciunt"),
            },
            JobSpecific: []shared.JobTypeResourceLimit{
                shared.JobTypeResourceLimit{
                    JobType: shared.JobTypeEnumReplicate,
                    ResourceRequirements: shared.ResourceRequirements{
                        CPULimit: sdk.String("minus"),
                        CPURequest: sdk.String("sunt"),
                        MemoryLimit: sdk.String("distinctio"),
                        MemoryRequest: sdk.String("iusto"),
                    },
                },
                shared.JobTypeResourceLimit{
                    JobType: shared.JobTypeEnumSync,
                    ResourceRequirements: shared.ResourceRequirements{
                        CPULimit: sdk.String("et"),
                        CPURequest: sdk.String("facilis"),
                        MemoryLimit: sdk.String("amet"),
                        MemoryRequest: sdk.String("autem"),
                    },
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DestinationDefinitionRead != nil {
        // handle response
    }
}
```
