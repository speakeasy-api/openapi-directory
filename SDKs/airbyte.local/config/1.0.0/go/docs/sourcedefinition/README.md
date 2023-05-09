# SourceDefinition

## Overview

SourceDefinition related resources.

### Available Operations

* [CreateCustomSourceDefinition](#createcustomsourcedefinition) - Creates a custom sourceDefinition for the given workspace
* [DeleteSourceDefinition](#deletesourcedefinition) - Delete a source definition
* [GetSourceDefinition](#getsourcedefinition) - Get source
* [GetSourceDefinitionForWorkspace](#getsourcedefinitionforworkspace) - Get a sourceDefinition that is configured for the given workspace
* [GrantSourceDefinitionToWorkspace](#grantsourcedefinitiontoworkspace) - grant a private, non-custom sourceDefinition to a given workspace
* [ListLatestSourceDefinitions](#listlatestsourcedefinitions) - List the latest sourceDefinitions Airbyte supports
* [ListPrivateSourceDefinitions](#listprivatesourcedefinitions) - List all private, non-custom sourceDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.
* [ListSourceDefinitions](#listsourcedefinitions) - List all the sourceDefinitions the current Airbyte deployment is configured to use
* [ListSourceDefinitionsForWorkspace](#listsourcedefinitionsforworkspace) - List all the sourceDefinitions the given workspace is configured to use
* [RevokeSourceDefinitionFromWorkspace](#revokesourcedefinitionfromworkspace) - revoke a grant to a private, non-custom sourceDefinition from a given workspace
* [UpdateSourceDefinition](#updatesourcedefinition) - Update a sourceDefinition

## CreateCustomSourceDefinition

Creates a custom sourceDefinition for the given workspace

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
    res, err := s.SourceDefinition.CreateCustomSourceDefinition(ctx, shared.CustomSourceDefinitionCreate{
        SourceDefinition: shared.SourceDefinitionCreate{
            DockerImageTag: "possimus",
            DockerRepository: "ipsam",
            DocumentationURL: "http://cool-cartilage.org",
            Icon: sdk.String("illum"),
            Name: "Kirk Heidenreich",
            ResourceRequirements: &shared.ActorDefinitionResourceRequirements{
                Default: &shared.ResourceRequirements{
                    CPULimit: sdk.String("facilis"),
                    CPURequest: sdk.String("placeat"),
                    MemoryLimit: sdk.String("reiciendis"),
                    MemoryRequest: sdk.String("dolores"),
                },
                JobSpecific: []shared.JobTypeResourceLimit{
                    shared.JobTypeResourceLimit{
                        JobType: shared.JobTypeEnumReplicate,
                        ResourceRequirements: shared.ResourceRequirements{
                            CPULimit: sdk.String("facilis"),
                            CPURequest: sdk.String("cupiditate"),
                            MemoryLimit: sdk.String("nemo"),
                            MemoryRequest: sdk.String("natus"),
                        },
                    },
                    shared.JobTypeResourceLimit{
                        JobType: shared.JobTypeEnumDiscoverSchema,
                        ResourceRequirements: shared.ResourceRequirements{
                            CPULimit: sdk.String("provident"),
                            CPURequest: sdk.String("amet"),
                            MemoryLimit: sdk.String("dolor"),
                            MemoryRequest: sdk.String("nostrum"),
                        },
                    },
                },
            },
        },
        WorkspaceID: "2f745339-94d7-48de-bb6e-9389f5abb7f6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceDefinitionRead != nil {
        // handle response
    }
}
```

## DeleteSourceDefinition

Delete a source definition

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
    res, err := s.SourceDefinition.DeleteSourceDefinition(ctx, shared.SourceDefinitionIDRequestBody{
        SourceDefinitionID: "62550a28-382a-4c48-bafd-2315bba65016",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSourceDefinition

Get source

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
    res, err := s.SourceDefinition.GetSourceDefinition(ctx, shared.SourceDefinitionIDRequestBody{
        SourceDefinitionID: "4e06f5bf-6ae5-491b-88bd-ef3612b63c20",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceDefinitionRead != nil {
        // handle response
    }
}
```

## GetSourceDefinitionForWorkspace

Get a sourceDefinition that is configured for the given workspace

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
    res, err := s.SourceDefinition.GetSourceDefinitionForWorkspace(ctx, shared.SourceDefinitionIDWithWorkspaceID{
        SourceDefinitionID: "5fda8407-74a6-48a9-a35d-086b6f66fef0",
        WorkspaceID: "20e9f443-b425-47b9-92c8-dbda6a61efa2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceDefinitionRead != nil {
        // handle response
    }
}
```

## GrantSourceDefinitionToWorkspace

grant a private, non-custom sourceDefinition to a given workspace

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
    res, err := s.SourceDefinition.GrantSourceDefinitionToWorkspace(ctx, shared.SourceDefinitionIDWithWorkspaceID{
        SourceDefinitionID: "198258fd-0a9e-4ba4-bf7d-3ef049640d6a",
        WorkspaceID: "1831c87a-df59-46fd-b1ad-837ae80c1c19",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PrivateSourceDefinitionRead != nil {
        // handle response
    }
}
```

## ListLatestSourceDefinitions

Guaranteed to retrieve the latest information on supported sources.

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
    res, err := s.SourceDefinition.ListLatestSourceDefinitions(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceDefinitionReadList != nil {
        // handle response
    }
}
```

## ListPrivateSourceDefinitions

List all private, non-custom sourceDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.

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
    res, err := s.SourceDefinition.ListPrivateSourceDefinitions(ctx, shared.WorkspaceIDRequestBody{
        WorkspaceID: "c95ba998-678f-4a3f-a969-91af388ce036",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PrivateSourceDefinitionReadList != nil {
        // handle response
    }
}
```

## ListSourceDefinitions

List all the sourceDefinitions the current Airbyte deployment is configured to use

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
    res, err := s.SourceDefinition.ListSourceDefinitions(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceDefinitionReadList != nil {
        // handle response
    }
}
```

## ListSourceDefinitionsForWorkspace

List all the sourceDefinitions the given workspace is configured to use

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
    res, err := s.SourceDefinition.ListSourceDefinitionsForWorkspace(ctx, shared.WorkspaceIDRequestBody{
        WorkspaceID: "14448c79-77a0-4ef2-b536-028efeef9341",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceDefinitionReadList != nil {
        // handle response
    }
}
```

## RevokeSourceDefinitionFromWorkspace

revoke a grant to a private, non-custom sourceDefinition from a given workspace

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
    res, err := s.SourceDefinition.RevokeSourceDefinitionFromWorkspace(ctx, shared.SourceDefinitionIDWithWorkspaceID{
        SourceDefinitionID: "52ed7e25-3f4c-4157-9eaa-7170f445accf",
        WorkspaceID: "667aaf9b-bad1-485f-a431-d6bf5c838fbb",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateSourceDefinition

Update a sourceDefinition

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
    res, err := s.SourceDefinition.UpdateSourceDefinition(ctx, shared.SourceDefinitionUpdate{
        DockerImageTag: "totam",
        ResourceRequirements: &shared.ActorDefinitionResourceRequirements{
            Default: &shared.ResourceRequirements{
                CPULimit: sdk.String("quod"),
                CPURequest: sdk.String("aspernatur"),
                MemoryLimit: sdk.String("eaque"),
                MemoryRequest: sdk.String("impedit"),
            },
            JobSpecific: []shared.JobTypeResourceLimit{
                shared.JobTypeResourceLimit{
                    JobType: shared.JobTypeEnumDiscoverSchema,
                    ResourceRequirements: shared.ResourceRequirements{
                        CPULimit: sdk.String("odio"),
                        CPURequest: sdk.String("delectus"),
                        MemoryLimit: sdk.String("minus"),
                        MemoryRequest: sdk.String("ut"),
                    },
                },
                shared.JobTypeResourceLimit{
                    JobType: shared.JobTypeEnumConnectionUpdater,
                    ResourceRequirements: shared.ResourceRequirements{
                        CPULimit: sdk.String("eius"),
                        CPURequest: sdk.String("eos"),
                        MemoryLimit: sdk.String("veniam"),
                        MemoryRequest: sdk.String("repudiandae"),
                    },
                },
                shared.JobTypeResourceLimit{
                    JobType: shared.JobTypeEnumResetConnection,
                    ResourceRequirements: shared.ResourceRequirements{
                        CPULimit: sdk.String("occaecati"),
                        CPURequest: sdk.String("debitis"),
                        MemoryLimit: sdk.String("laboriosam"),
                        MemoryRequest: sdk.String("eos"),
                    },
                },
            },
        },
        SourceDefinitionID: "34c9f7b7-9dfe-4b77-a5c3-8d4baf91e506",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceDefinitionRead != nil {
        // handle response
    }
}
```
