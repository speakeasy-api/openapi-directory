# SDK

## Overview

<p/>

Amazon Web Services documentation
<https://docs.aws.amazon.com/gamesparks/>
### Available Operations

* [CreateGame](#creategame) -  Creates a new game with an empty configuration. After creating your game, you can update the configuration using <code>UpdateGameConfiguration</code> or <code>ImportGameConfiguration</code>. 
* [CreateSnapshot](#createsnapshot) - Creates a snapshot of the game configuration.
* [CreateStage](#createstage) - Creates a new stage for stage-by-stage game development and deployment.
* [DeleteGame](#deletegame) - Deletes a game.
* [DeleteStage](#deletestage) - Deletes a stage from a game, along with the associated game runtime.
* [DisconnectPlayer](#disconnectplayer) - <p>Disconnects a player from the game runtime.</p> <p> If a player has multiple connections, this operation attempts to close all of them. </p>
* [ExportSnapshot](#exportsnapshot) - Exports a game configuration snapshot.
* [GetExtension](#getextension) - Gets details about a specified extension.
* [GetExtensionVersion](#getextensionversion) - Gets details about a specified extension version.
* [GetGame](#getgame) - Gets details about a game.
* [GetGameConfiguration](#getgameconfiguration) - Gets the configuration of the game.
* [GetGeneratedCodeJob](#getgeneratedcodejob) - Gets details about a job that is generating code for a snapshot.
* [GetPlayerConnectionStatus](#getplayerconnectionstatus) - <p>Gets the status of a player's connection to the game runtime.</p> <p> It's possible for a single player to have multiple connections to the game runtime. If a player is not connected, this operation returns an empty list. </p>
* [GetSnapshot](#getsnapshot) - Gets a copy of the game configuration in a snapshot.
* [GetStage](#getstage) - Gets information about a stage.
* [GetStageDeployment](#getstagedeployment) - Gets information about a stage deployment.
* [ImportGameConfiguration](#importgameconfiguration) - <p>Imports a game configuration.</p> <p> This operation replaces the current configuration of the game with the provided input. This is not a reversible operation. If you want to preserve the previous configuration, use <code>CreateSnapshot</code> to make a new snapshot before importing. </p>
* [ListExtensionVersions](#listextensionversions) - <p>Gets a paginated list of available versions for the extension.</p> <p> Each time an API change is made to an extension, the version is incremented. The list retrieved by this operation shows the versions that are currently available. </p>
* [ListExtensions](#listextensions) - <p>Gets a paginated list of available extensions.</p> <p> Extensions provide features that games can use from scripts. </p>
* [ListGames](#listgames) - Gets a paginated list of games.
* [ListGeneratedCodeJobs](#listgeneratedcodejobs) - Gets a paginated list of code generation jobs for a snapshot.
* [ListSnapshots](#listsnapshots) - Gets a paginated list of snapshot summaries from the game.
* [ListStageDeployments](#liststagedeployments) - Gets a paginated list of stage deployment summaries from the game.
* [ListStages](#liststages) - Gets a paginated list of stage summaries from the game.
* [ListTagsForResource](#listtagsforresource) - Lists the tags associated with a GameSparks resource.
* [StartGeneratedCodeJob](#startgeneratedcodejob) -  Starts an asynchronous process that generates client code for system-defined and custom messages. The resulting code is collected as a .zip file and uploaded to a pre-signed Amazon S3 URL. 
* [StartStageDeployment](#startstagedeployment) - <p>Deploys a snapshot to the stage and creates a new game runtime.</p> <p> After you call this operation, you can check the deployment status by using <code>GetStageDeployment</code>. </p> <p> If there are any players connected to the previous game runtime, then both runtimes persist. Existing connections to the previous runtime are maintained. When players disconnect and reconnect, they connect to the new runtime. After there are no connections to the previous game runtime, it is deleted. </p>
* [TagResource](#tagresource) - Adds tags to a GameSparks resource.
* [UntagResource](#untagresource) - Removes tags from a GameSparks resource.
* [UpdateGame](#updategame) - Updates details of the game.
* [UpdateGameConfiguration](#updategameconfiguration) - Updates one or more sections of the game configuration.
* [UpdateSnapshot](#updatesnapshot) - Updates the metadata of a GameSparks snapshot.
* [UpdateStage](#updatestage) - Updates the metadata of a stage.

## CreateGame

 Creates a new game with an empty configuration. After creating your game, you can update the configuration using <code>UpdateGameConfiguration</code> or <code>ImportGameConfiguration</code>. 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateGame(ctx, operations.CreateGameRequest{
        RequestBody: operations.CreateGameRequestBody{
            ClientToken: sdk.String("molestiae"),
            Description: sdk.String("minus"),
            GameName: "placeat",
            Tags: map[string]string{
                "iusto": "excepturi",
                "nisi": "recusandae",
                "temporibus": "ab",
            },
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGameResult != nil {
        // handle response
    }
}
```

## CreateSnapshot

Creates a snapshot of the game configuration.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateSnapshot(ctx, operations.CreateSnapshotRequest{
        GameName: "quo",
        RequestBody: operations.CreateSnapshotRequestBody{
            Description: sdk.String("odit"),
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSnapshotResult != nil {
        // handle response
    }
}
```

## CreateStage

Creates a new stage for stage-by-stage game development and deployment.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateStage(ctx, operations.CreateStageRequest{
        GameName: "totam",
        RequestBody: operations.CreateStageRequestBody{
            ClientToken: sdk.String("porro"),
            Description: sdk.String("dolorum"),
            Role: "dicta",
            StageName: "nam",
            Tags: map[string]string{
                "occaecati": "fugit",
                "deleniti": "hic",
                "optio": "totam",
            },
        },
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("cum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateStageResult != nil {
        // handle response
    }
}
```

## DeleteGame

Deletes a game.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteGame(ctx, operations.DeleteGameRequest{
        GameName: "esse",
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteGameResult != nil {
        // handle response
    }
}
```

## DeleteStage

Deletes a stage from a game, along with the associated game runtime.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteStage(ctx, operations.DeleteStageRequest{
        GameName: "iste",
        StageName: "dolor",
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteStageResult != nil {
        // handle response
    }
}
```

## DisconnectPlayer

<p>Disconnects a player from the game runtime.</p> <p> If a player has multiple connections, this operation attempts to close all of them. </p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisconnectPlayer(ctx, operations.DisconnectPlayerRequest{
        GameName: "iste",
        PlayerID: "iure",
        StageName: "saepe",
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisconnectPlayerResult != nil {
        // handle response
    }
}
```

## ExportSnapshot

Exports a game configuration snapshot.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ExportSnapshot(ctx, operations.ExportSnapshotRequest{
        GameName: "dolores",
        SnapshotID: "dolorem",
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportSnapshotResult != nil {
        // handle response
    }
}
```

## GetExtension

Gets details about a specified extension.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetExtension(ctx, operations.GetExtensionRequest{
        Name: "Brian Kessler",
        Namespace: "sapiente",
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetExtensionResult != nil {
        // handle response
    }
}
```

## GetExtensionVersion

Gets details about a specified extension version.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetExtensionVersion(ctx, operations.GetExtensionVersionRequest{
        ExtensionVersion: "occaecati",
        Name: "Lucy Konopelski",
        Namespace: "error",
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("vitae"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetExtensionVersionResult != nil {
        // handle response
    }
}
```

## GetGame

Gets details about a game.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetGame(ctx, operations.GetGameRequest{
        GameName: "quo",
        XAmzAlgorithm: sdk.String("sequi"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGameResult != nil {
        // handle response
    }
}
```

## GetGameConfiguration

Gets the configuration of the game.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetGameConfiguration(ctx, operations.GetGameConfigurationRequest{
        GameName: "error",
        Sections: []string{
            "laborum",
            "quasi",
            "reiciendis",
            "voluptatibus",
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGameConfigurationResult != nil {
        // handle response
    }
}
```

## GetGeneratedCodeJob

Gets details about a job that is generating code for a snapshot.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetGeneratedCodeJob(ctx, operations.GetGeneratedCodeJobRequest{
        GameName: "cum",
        JobID: "perferendis",
        SnapshotID: "doloremque",
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGeneratedCodeJobResult != nil {
        // handle response
    }
}
```

## GetPlayerConnectionStatus

<p>Gets the status of a player's connection to the game runtime.</p> <p> It's possible for a single player to have multiple connections to the game runtime. If a player is not connected, this operation returns an empty list. </p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetPlayerConnectionStatus(ctx, operations.GetPlayerConnectionStatusRequest{
        GameName: "dicta",
        PlayerID: "harum",
        StageName: "enim",
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("molestias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPlayerConnectionStatusResult != nil {
        // handle response
    }
}
```

## GetSnapshot

Gets a copy of the game configuration in a snapshot.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSnapshot(ctx, operations.GetSnapshotRequest{
        GameName: "excepturi",
        Sections: []string{
            "modi",
            "praesentium",
            "rem",
            "voluptates",
        },
        SnapshotID: "quasi",
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("consequatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSnapshotResult != nil {
        // handle response
    }
}
```

## GetStage

Gets information about a stage.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetStage(ctx, operations.GetStageRequest{
        GameName: "est",
        StageName: "quibusdam",
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStageResult != nil {
        // handle response
    }
}
```

## GetStageDeployment

Gets information about a stage deployment.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetStageDeployment(ctx, operations.GetStageDeploymentRequest{
        DeploymentID: sdk.String("aliquid"),
        GameName: "cupiditate",
        StageName: "quos",
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStageDeploymentResult != nil {
        // handle response
    }
}
```

## ImportGameConfiguration

<p>Imports a game configuration.</p> <p> This operation replaces the current configuration of the game with the provided input. This is not a reversible operation. If you want to preserve the previous configuration, use <code>CreateSnapshot</code> to make a new snapshot before importing. </p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ImportGameConfiguration(ctx, operations.ImportGameConfigurationRequest{
        GameName: "excepturi",
        RequestBody: operations.ImportGameConfigurationRequestBody{
            ImportSource: operations.ImportGameConfigurationRequestBodyImportSource{
                File: sdk.String("tempora"),
            },
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("tempore"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("eligendi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportGameConfigurationResult != nil {
        // handle response
    }
}
```

## ListExtensionVersions

<p>Gets a paginated list of available versions for the extension.</p> <p> Each time an API change is made to an extension, the version is incremented. The list retrieved by this operation shows the versions that are currently available. </p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListExtensionVersions(ctx, operations.ListExtensionVersionsRequest{
        MaxResults: sdk.Int64(576157),
        Name: "Sherri Tremblay",
        Namespace: "dolor",
        NextToken: sdk.String("debitis"),
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("rerum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExtensionVersionsResult != nil {
        // handle response
    }
}
```

## ListExtensions

<p>Gets a paginated list of available extensions.</p> <p> Extensions provide features that games can use from scripts. </p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListExtensions(ctx, operations.ListExtensionsRequest{
        MaxResults: sdk.Int64(116202),
        NextToken: sdk.String("magnam"),
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("non"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExtensionsResult != nil {
        // handle response
    }
}
```

## ListGames

Gets a paginated list of games.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListGames(ctx, operations.ListGamesRequest{
        MaxResults: sdk.Int64(581273),
        NextToken: sdk.String("enim"),
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGamesResult != nil {
        // handle response
    }
}
```

## ListGeneratedCodeJobs

Gets a paginated list of code generation jobs for a snapshot.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListGeneratedCodeJobs(ctx, operations.ListGeneratedCodeJobsRequest{
        GameName: "deleniti",
        MaxResults: sdk.Int64(956084),
        NextToken: sdk.String("amet"),
        SnapshotID: "deserunt",
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGeneratedCodeJobsResult != nil {
        // handle response
    }
}
```

## ListSnapshots

Gets a paginated list of snapshot summaries from the game.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListSnapshots(ctx, operations.ListSnapshotsRequest{
        GameName: "magnam",
        MaxResults: sdk.Int64(716075),
        NextToken: sdk.String("id"),
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSnapshotsResult != nil {
        // handle response
    }
}
```

## ListStageDeployments

Gets a paginated list of stage deployment summaries from the game.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListStageDeployments(ctx, operations.ListStageDeploymentsRequest{
        GameName: "aspernatur",
        MaxResults: sdk.Int64(102863),
        NextToken: sdk.String("magnam"),
        StageName: "et",
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStageDeploymentsResult != nil {
        // handle response
    }
}
```

## ListStages

Gets a paginated list of stage summaries from the game.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListStages(ctx, operations.ListStagesRequest{
        GameName: "reiciendis",
        MaxResults: sdk.Int64(652103),
        NextToken: sdk.String("ad"),
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStagesResult != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags associated with a GameSparks resource.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ResourceArn: "doloribus",
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResult != nil {
        // handle response
    }
}
```

## StartGeneratedCodeJob

 Starts an asynchronous process that generates client code for system-defined and custom messages. The resulting code is collected as a .zip file and uploaded to a pre-signed Amazon S3 URL. 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartGeneratedCodeJob(ctx, operations.StartGeneratedCodeJobRequest{
        GameName: "architecto",
        RequestBody: operations.StartGeneratedCodeJobRequestBody{
            Generator: operations.StartGeneratedCodeJobRequestBodyGenerator{
                GameSDKVersion: sdk.String("repudiandae"),
                Language: sdk.String("ullam"),
                TargetPlatform: sdk.String("expedita"),
            },
        },
        SnapshotID: "nihil",
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartGeneratedCodeJobResult != nil {
        // handle response
    }
}
```

## StartStageDeployment

<p>Deploys a snapshot to the stage and creates a new game runtime.</p> <p> After you call this operation, you can check the deployment status by using <code>GetStageDeployment</code>. </p> <p> If there are any players connected to the previous game runtime, then both runtimes persist. Existing connections to the previous runtime are maintained. When players disconnect and reconnect, they connect to the new runtime. After there are no connections to the previous game runtime, it is deleted. </p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartStageDeployment(ctx, operations.StartStageDeploymentRequest{
        GameName: "praesentium",
        RequestBody: operations.StartStageDeploymentRequestBody{
            ClientToken: sdk.String("natus"),
            SnapshotID: "magni",
        },
        StageName: "sunt",
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartStageDeploymentResult != nil {
        // handle response
    }
}
```

## TagResource

Adds tags to a GameSparks resource.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "accusantium": "ab",
                "maiores": "quidem",
            },
        },
        ResourceArn: "ipsam",
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("autem"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResult != nil {
        // handle response
    }
}
```

## UntagResource

Removes tags from a GameSparks resource.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        ResourceArn: "perferendis",
        XAmzAlgorithm: sdk.String("fugiat"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("libero"),
        TagKeys: []string{
            "dolores",
            "quis",
            "totam",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResult != nil {
        // handle response
    }
}
```

## UpdateGame

Updates details of the game.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateGame(ctx, operations.UpdateGameRequest{
        GameName: "dignissimos",
        RequestBody: operations.UpdateGameRequestBody{
            Description: sdk.String("eaque"),
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("nesciunt"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("quam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateGameResult != nil {
        // handle response
    }
}
```

## UpdateGameConfiguration

Updates one or more sections of the game configuration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateGameConfiguration(ctx, operations.UpdateGameConfigurationRequest{
        GameName: "dolor",
        RequestBody: operations.UpdateGameConfigurationRequestBody{
            Modifications: []shared.SectionModification{
                shared.SectionModification{
                    Operation: shared.OperationEnumRemove,
                    Path: "hic",
                    Section: "recusandae",
                    Value: map[string]interface{}{
                        "facilis": "perspiciatis",
                        "voluptatem": "porro",
                        "consequuntur": "blanditiis",
                    },
                },
                shared.SectionModification{
                    Operation: shared.OperationEnumRemove,
                    Path: "eaque",
                    Section: "occaecati",
                    Value: map[string]interface{}{
                        "adipisci": "asperiores",
                        "earum": "modi",
                        "iste": "dolorum",
                    },
                },
                shared.SectionModification{
                    Operation: shared.OperationEnumRemove,
                    Path: "pariatur",
                    Section: "provident",
                    Value: map[string]interface{}{
                        "libero": "delectus",
                        "quaerat": "quos",
                        "aliquid": "dolorem",
                        "dolorem": "dolor",
                    },
                },
                shared.SectionModification{
                    Operation: shared.OperationEnumAdd,
                    Path: "ipsum",
                    Section: "hic",
                    Value: map[string]interface{}{
                        "cum": "voluptate",
                        "dignissimos": "reiciendis",
                        "amet": "dolorum",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("quaerat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateGameConfigurationResult != nil {
        // handle response
    }
}
```

## UpdateSnapshot

Updates the metadata of a GameSparks snapshot.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateSnapshot(ctx, operations.UpdateSnapshotRequest{
        GameName: "accusamus",
        RequestBody: operations.UpdateSnapshotRequestBody{
            Description: sdk.String("quidem"),
        },
        SnapshotID: "voluptatibus",
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("ab"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSnapshotResult != nil {
        // handle response
    }
}
```

## UpdateStage

Updates the metadata of a stage.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateStage(ctx, operations.UpdateStageRequest{
        GameName: "soluta",
        RequestBody: operations.UpdateStageRequestBody{
            Description: sdk.String("dolorum"),
            Role: sdk.String("iusto"),
        },
        StageName: "voluptate",
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateStageResult != nil {
        // handle response
    }
}
```
