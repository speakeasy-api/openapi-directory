# SDK

## Overview

The CircleCI API is a RESTful, fully-featured API that allows you to do almost anything in CircleCI.
You can access all information and trigger all actions.
The only thing we don’t provide access to is billing functions, which must be done from the CircleCI web UI.


### Available Operations

* [DeleteProjectUsernameProjectBuildCache](#deleteprojectusernameprojectbuildcache) - Clears the cache for a project.

* [DeleteProjectUsernameProjectCheckoutKeyFingerprint](#deleteprojectusernameprojectcheckoutkeyfingerprint) - Delete a checkout key.

* [DeleteProjectUsernameProjectEnvvarName](#deleteprojectusernameprojectenvvarname) - Deletes the environment variable named ':name'

* [GetMe](#getme) - Provides information about the signed in user.

* [GetProjectUsernameProject](#getprojectusernameproject) - Build summary for each of the last 30 builds for a single git repo.

* [GetProjectUsernameProjectCheckoutKey](#getprojectusernameprojectcheckoutkey) - Lists checkout keys.

* [GetProjectUsernameProjectCheckoutKeyFingerprint](#getprojectusernameprojectcheckoutkeyfingerprint) - Get a checkout key.

* [GetProjectUsernameProjectEnvvar](#getprojectusernameprojectenvvar) - Lists the environment variables for :project

* [GetProjectUsernameProjectEnvvarName](#getprojectusernameprojectenvvarname) - Gets the hidden value of environment variable :name

* [GetProjectUsernameProjectBuildNum](#getprojectusernameprojectbuildnum) - Full details for a single build. The response includes all of the fields from the build summary.
This is also the payload for the [notification webhooks](/docs/configuration/#notify), in which case this object is the value to a key named 'payload'.

* [GetProjectUsernameProjectBuildNumArtifacts](#getprojectusernameprojectbuildnumartifacts) - List the artifacts produced by a given build.

* [GetProjectUsernameProjectBuildNumTests](#getprojectusernameprojectbuildnumtests) - Provides test metadata for a build
Note: [Learn how to set up your builds to collect test metadata](https://circleci.com/docs/test-metadata/)

* [GetProjects](#getprojects) - List of all the projects you're following on CircleCI, with build information organized by branch.

* [GetRecentBuilds](#getrecentbuilds) - Build summary for each of the last 30 recent builds, ordered by build_num.

* [PostProjectUsernameProject](#postprojectusernameproject) - Triggers a new build, returns a summary of the build.

* [PostProjectUsernameProjectCheckoutKey](#postprojectusernameprojectcheckoutkey) - Creates a new checkout key.
Only usable with a user API token.

* [PostProjectUsernameProjectEnvvar](#postprojectusernameprojectenvvar) - Creates a new environment variable

* [PostProjectUsernameProjectSSHKey](#postprojectusernameprojectsshkey) - Create an ssh key used to access external systems that require SSH key-based authentication

* [PostProjectUsernameProjectTreeBranch](#postprojectusernameprojecttreebranch) - Triggers a new build, returns a summary of the build.
Optional build parameters can be set using an experimental API.

Note: For more about build parameters, read about [using parameterized builds](https://circleci.com/docs/parameterized-builds/)

* [PostProjectUsernameProjectBuildNumCancel](#postprojectusernameprojectbuildnumcancel) - Cancels the build, returns a summary of the build.

* [PostProjectUsernameProjectBuildNumRetry](#postprojectusernameprojectbuildnumretry) - Retries the build, returns a summary of the new build.

* [PostUserHerokuKey](#postuserherokukey) - Adds your Heroku API key to CircleCI, takes apikey as form param name.


## DeleteProjectUsernameProjectBuildCache

Clears the cache for a project.


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
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteProjectUsernameProjectBuildCache(ctx, operations.DeleteProjectUsernameProjectBuildCacheRequest{
        Project: "corrupti",
        Username: "Roselyn_Kassulke",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProjectUsernameProjectBuildCache200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteProjectUsernameProjectCheckoutKeyFingerprint

Delete a checkout key.


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
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteProjectUsernameProjectCheckoutKeyFingerprint(ctx, operations.DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest{
        Fingerprint: "suscipit",
        Project: "iure",
        Username: "Eli96",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteProjectUsernameProjectEnvvarName

Deletes the environment variable named ':name'


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
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteProjectUsernameProjectEnvvarName(ctx, operations.DeleteProjectUsernameProjectEnvvarNameRequest{
        Name: "Laurie Kreiger",
        Project: "voluptatum",
        Username: "Jaycee_Mante",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProjectUsernameProjectEnvvarName200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetMe

Provides information about the signed in user.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetMe(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## GetProjectUsernameProject

Build summary for each of the last 30 builds for a single git repo.


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
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetProjectUsernameProject(ctx, operations.GetProjectUsernameProjectRequest{
        Filter: shared.FilterEnumRunning.ToPointer(),
        Limit: sdk.Int64(71036),
        Offset: sdk.Int64(337396),
        Project: "veritatis",
        Username: "Lydia_Aufderhar",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Builds != nil {
        // handle response
    }
}
```

## GetProjectUsernameProjectCheckoutKey

Lists checkout keys.


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
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetProjectUsernameProjectCheckoutKey(ctx, operations.GetProjectUsernameProjectCheckoutKeyRequest{
        Project: "sapiente",
        Username: "Orlando_Connelly97",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Keys != nil {
        // handle response
    }
}
```

## GetProjectUsernameProjectCheckoutKeyFingerprint

Get a checkout key.


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
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetProjectUsernameProjectCheckoutKeyFingerprint(ctx, operations.GetProjectUsernameProjectCheckoutKeyFingerprintRequest{
        Fingerprint: "molestiae",
        Project: "quod",
        Username: "Presley_Koepp",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Key != nil {
        // handle response
    }
}
```

## GetProjectUsernameProjectEnvvar

Lists the environment variables for :project


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
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetProjectUsernameProjectEnvvar(ctx, operations.GetProjectUsernameProjectEnvvarRequest{
        Project: "dolorum",
        Username: "Billy_Reichel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Envvars != nil {
        // handle response
    }
}
```

## GetProjectUsernameProjectEnvvarName

Gets the hidden value of environment variable :name


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
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetProjectUsernameProjectEnvvarName(ctx, operations.GetProjectUsernameProjectEnvvarNameRequest{
        Name: "Cassandra Welch",
        Project: "beatae",
        Username: "Haskell18",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Envvar != nil {
        // handle response
    }
}
```

## GetProjectUsernameProjectBuildNum

Full details for a single build. The response includes all of the fields from the build summary.
This is also the payload for the [notification webhooks](/docs/configuration/#notify), in which case this object is the value to a key named 'payload'.


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
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetProjectUsernameProjectBuildNum(ctx, operations.GetProjectUsernameProjectBuildNumRequest{
        BuildNum: 774234,
        Project: "cum",
        Username: "Jacky.Emmerich",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BuildDetail != nil {
        // handle response
    }
}
```

## GetProjectUsernameProjectBuildNumArtifacts

List the artifacts produced by a given build.


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
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetProjectUsernameProjectBuildNumArtifacts(ctx, operations.GetProjectUsernameProjectBuildNumArtifactsRequest{
        BuildNum: 18789,
        Project: "ad",
        Username: "Lia.Cormier",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Artifacts != nil {
        // handle response
    }
}
```

## GetProjectUsernameProjectBuildNumTests

Provides test metadata for a build
Note: [Learn how to set up your builds to collect test metadata](https://circleci.com/docs/test-metadata/)


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
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetProjectUsernameProjectBuildNumTests(ctx, operations.GetProjectUsernameProjectBuildNumTestsRequest{
        BuildNum: 616934,
        Project: "laboriosam",
        Username: "Tyra.Turcotte35",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tests != nil {
        // handle response
    }
}
```

## GetProjects

List of all the projects you're following on CircleCI, with build information organized by branch.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetProjects(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Projects != nil {
        // handle response
    }
}
```

## GetRecentBuilds

Build summary for each of the last 30 recent builds, ordered by build_num.


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
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetRecentBuilds(ctx, operations.GetRecentBuildsRequest{
        Limit: sdk.Int64(613064),
        Offset: sdk.Int64(437032),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Builds != nil {
        // handle response
    }
}
```

## PostProjectUsernameProject

Triggers a new build, returns a summary of the build.


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
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PostProjectUsernameProject(ctx, operations.PostProjectUsernameProjectRequest{
        RequestBody: &operations.PostProjectUsernameProjectRequestBody{
            BuildParameters: map[string]interface{}{
                "quidem": "architecto",
                "ipsa": "reiciendis",
                "est": "mollitia",
                "laborum": "dolores",
            },
            Parallel: sdk.String("dolorem"),
            Revision: sdk.String("corporis"),
            Tag: sdk.String("explicabo"),
        },
        Project: "nobis",
        Username: "Emerald.Mohr",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BuildSummary != nil {
        // handle response
    }
}
```

## PostProjectUsernameProjectCheckoutKey

Creates a new checkout key.
Only usable with a user API token.


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
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PostProjectUsernameProjectCheckoutKey(ctx, operations.PostProjectUsernameProjectCheckoutKeyRequest{
        RequestBody: operations.PostProjectUsernameProjectCheckoutKeyRequestBodyEnumGithubUserKey.ToPointer(),
        Project: "accusantium",
        Username: "Ibrahim_Nicolas10",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Key != nil {
        // handle response
    }
}
```

## PostProjectUsernameProjectEnvvar

Creates a new environment variable


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
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PostProjectUsernameProjectEnvvar(ctx, operations.PostProjectUsernameProjectEnvvarRequest{
        Project: "mollitia",
        Username: "Cordie99",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Envvar != nil {
        // handle response
    }
}
```

## PostProjectUsernameProjectSSHKey

Create an ssh key used to access external systems that require SSH key-based authentication


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
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PostProjectUsernameProjectSSHKey(ctx, operations.PostProjectUsernameProjectSSHKeyRequest{
        ContentType: operations.PostProjectUsernameProjectSSHKeyContentTypeEnumApplicationJSON,
        RequestBody: operations.PostProjectUsernameProjectSSHKeyRequestBody{
            Hostname: sdk.String("prize-mud.biz"),
            PrivateKey: sdk.String("commodi"),
        },
        Project: "quam",
        Username: "Jarred.Frami",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostProjectUsernameProjectTreeBranch

Triggers a new build, returns a summary of the build.
Optional build parameters can be set using an experimental API.

Note: For more about build parameters, read about [using parameterized builds](https://circleci.com/docs/parameterized-builds/)


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
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PostProjectUsernameProjectTreeBranch(ctx, operations.PostProjectUsernameProjectTreeBranchRequest{
        RequestBody: &operations.PostProjectUsernameProjectTreeBranchRequestBody{
            BuildParameters: map[string]interface{}{
                "vitae": "laborum",
                "animi": "enim",
            },
            Parallel: sdk.String("odit"),
            Revision: sdk.String("quo"),
        },
        Branch: "sequi",
        Project: "tenetur",
        Username: "Freida.Ondricka9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Build != nil {
        // handle response
    }
}
```

## PostProjectUsernameProjectBuildNumCancel

Cancels the build, returns a summary of the build.


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
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PostProjectUsernameProjectBuildNumCancel(ctx, operations.PostProjectUsernameProjectBuildNumCancelRequest{
        BuildNum: 622846,
        Project: "temporibus",
        Username: "Margie_Boyer87",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Build != nil {
        // handle response
    }
}
```

## PostProjectUsernameProjectBuildNumRetry

Retries the build, returns a summary of the new build.


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
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PostProjectUsernameProjectBuildNumRetry(ctx, operations.PostProjectUsernameProjectBuildNumRetryRequest{
        BuildNum: 468651,
        Project: "praesentium",
        Username: "Whitney.Bednar",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Build != nil {
        // handle response
    }
}
```

## PostUserHerokuKey

Adds your Heroku API key to CircleCI, takes apikey as form param name.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PostUserHerokuKey(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
