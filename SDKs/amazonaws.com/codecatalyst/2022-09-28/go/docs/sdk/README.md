# SDK

## Overview

<p>Welcome to the Amazon CodeCatalyst API reference. This reference provides descriptions of operations and data types for Amazon CodeCatalyst. You can use the Amazon CodeCatalyst API to work with the following objects. </p> <p>Dev Environments and the Amazon Web Services Toolkits, by calling the following:</p> <ul> <li> <p> <a>CreateAccessToken</a>, which creates a personal access token (PAT) for the current user.</p> </li> <li> <p> <a>CreateDevEnvironment</a>, which creates a Dev Environment, where you can quickly work on the code stored in the source repositories of your project.</p> </li> <li> <p> <a>CreateProject</a> which creates a project in a specified space.</p> </li> <li> <p> <a>CreateSourceRepositoryBranch</a>, which creates a branch in a specified repository where you can work on code.</p> </li> <li> <p> <a>DeleteDevEnvironment</a>, which deletes a Dev Environment.</p> </li> <li> <p> <a>GetDevEnvironment</a>, which returns information about a Dev Environment.</p> </li> <li> <p> <a>GetProject</a>, which returns information about a project.</p> </li> <li> <p> <a>GetSourceRepositoryCloneUrls</a>, which returns information about the URLs that can be used with a Git client to clone a source repository.</p> </li> <li> <p> <a>GetSpace</a>, which returns information about a space.</p> </li> <li> <p> <a>GetSubscription</a>, which returns information about the Amazon Web Services account used for billing purposes and the billing plan for the space.</p> </li> <li> <p> <a>GetUserDetails</a>, which returns information about a user in Amazon CodeCatalyst.</p> </li> <li> <p> <a>ListDevEnvironments</a>, which retrieves a list of Dev Environments in a project.</p> </li> <li> <p> <a>ListProjects</a>, which retrieves a list of projects in a space.</p> </li> <li> <p> <a>ListSourceRepositories</a>, which retrieves a list of source repositories in a project.</p> </li> <li> <p> <a>ListSourceRepositoryBranches</a>, which retrieves a list of branches in a source repository.</p> </li> <li> <p> <a>ListSpaces</a>, which retrieves a list of spaces.</p> </li> <li> <p> <a>StartDevEnvironment</a>, which starts a specified Dev Environment and puts it into an active state.</p> </li> <li> <p> <a>StartDevEnvironmentSession</a>, which starts a session to a specified Dev Environment.</p> </li> <li> <p> <a>StopDevEnvironment</a>, which stops a specified Dev Environment and puts it into an stopped state.</p> </li> <li> <p> <a>StopDevEnvironmentSession</a>, which stops a session for a specified Dev Environment.</p> </li> <li> <p> <a>UpdateDevEnvironment</a>, which changes one or more values for a Dev Environment.</p> </li> <li> <p> <a>VerifySession</a>, which verifies whether the calling user has a valid Amazon CodeCatalyst login and session.</p> </li> </ul> <p>Security, activity, and resource management in Amazon CodeCatalyst, by calling the following:</p> <ul> <li> <p> <a>DeleteAccessToken</a>, which deletes a specified personal access token (PAT).</p> </li> <li> <p> <a>ListAccessTokens</a>, which lists all personal access tokens (PATs) associated with a user.</p> </li> <li> <p> <a>ListEventLogs</a>, which retrieves a list of events that occurred during a specified time period in a space.</p> </li> </ul> <note> <p>If you are using the Amazon CodeCatalyst APIs with an SDK or the CLI, you must configure your computer to work with Amazon CodeCatalyst and single sign-on (SSO). For more information, see <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/set-up-cli.html">Setting up to use the CLI with Amazon CodeCatalyst</a> and the SSO documentation for your SDK.</p> </note>

Amazon Web Services documentation
<https://docs.aws.amazon.com/codecatalyst/>
### Available Operations

* [CreateAccessToken](#createaccesstoken) - Creates a personal access token (PAT) for the current user. A personal access token (PAT) is similar to a password. It is associated with your user identity for use across all spaces and projects in Amazon CodeCatalyst. You use PATs to access CodeCatalyst from resources that include integrated development environments (IDEs) and Git-based source repositories. PATs represent you in Amazon CodeCatalyst and you can manage them in your user settings.For more information, see <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/ipa-tokens-keys.html">Managing personal access tokens in Amazon CodeCatalyst</a>.
* [CreateDevEnvironment](#createdevenvironment) - <p>Creates a Dev Environment in Amazon CodeCatalyst, a cloud-based development environment that you can use to quickly work on the code stored in the source repositories of your project. </p> <note> <p>When created in the Amazon CodeCatalyst console, by default a Dev Environment is configured to have a 2 core processor, 4GB of RAM, and 16GB of persistent storage. None of these defaults apply to a Dev Environment created programmatically.</p> </note>
* [CreateProject](#createproject) - Creates a project in a specified space.
* [CreateSourceRepositoryBranch](#createsourcerepositorybranch) - <p>Creates a branch in a specified source repository in Amazon CodeCatalyst. </p> <note> <p>This API only creates a branch in a source repository hosted in Amazon CodeCatalyst. You cannot use this API to create a branch in a linked repository.</p> </note>
* [DeleteAccessToken](#deleteaccesstoken) - Deletes a specified personal access token (PAT). A personal access token can only be deleted by the user who created it.
* [DeleteDevEnvironment](#deletedevenvironment) - Deletes a Dev Environment. 
* [GetDevEnvironment](#getdevenvironment) - Returns information about a Dev Environment for a source repository in a project. Dev Environments are specific to the user who creates them.
* [GetProject](#getproject) - Returns information about a project.
* [GetSourceRepositoryCloneUrls](#getsourcerepositorycloneurls) - Returns information about the URLs that can be used with a Git client to clone a source repository.
* [GetSpace](#getspace) - Returns information about an space.
* [GetSubscription](#getsubscription) - Returns information about the Amazon Web Services account used for billing purposes and the billing plan for the space.
* [GetUserDetails](#getuserdetails) - Returns information about a user. 
* [ListAccessTokens](#listaccesstokens) - Lists all personal access tokens (PATs) associated with the user who calls the API. You can only list PATs associated with your Amazon Web Services Builder ID.
* [ListDevEnvironments](#listdevenvironments) - Retrieves a list of Dev Environments in a project.
* [ListEventLogs](#listeventlogs) - Retrieves a list of events that occurred during a specified time period in a space. You can use these events to audit user and system activity in a space.
* [ListProjects](#listprojects) - Retrieves a list of projects.
* [ListSourceRepositories](#listsourcerepositories) - Retrieves a list of source repositories in a project.
* [ListSourceRepositoryBranches](#listsourcerepositorybranches) - Retrieves a list of branches in a specified source repository.
* [ListSpaces](#listspaces) - Retrieves a list of spaces.
* [StartDevEnvironment](#startdevenvironment) - Starts a specified Dev Environment and puts it into an active state. 
* [StartDevEnvironmentSession](#startdevenvironmentsession) - Starts a session for a specified Dev Environment.
* [StopDevEnvironment](#stopdevenvironment) - Pauses a specified Dev Environment and places it in a non-running state. Stopped Dev Environments do not consume compute minutes.
* [StopDevEnvironmentSession](#stopdevenvironmentsession) - Stops a session for a specified Dev Environment.
* [UpdateDevEnvironment](#updatedevenvironment) - Changes one or more values for a Dev Environment. Updating certain values of the Dev Environment will cause a restart.
* [VerifySession](#verifysession) - Verifies whether the calling user has a valid Amazon CodeCatalyst login and session. If successful, this returns the ID of the user in Amazon CodeCatalyst.

## CreateAccessToken

Creates a personal access token (PAT) for the current user. A personal access token (PAT) is similar to a password. It is associated with your user identity for use across all spaces and projects in Amazon CodeCatalyst. You use PATs to access CodeCatalyst from resources that include integrated development environments (IDEs) and Git-based source repositories. PATs represent you in Amazon CodeCatalyst and you can manage them in your user settings.For more information, see <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/ipa-tokens-keys.html">Managing personal access tokens in Amazon CodeCatalyst</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateAccessToken(ctx, operations.CreateAccessTokenRequestBody{
        ExpiresTime: types.MustTimeFromString("2021-09-24T02:21:06.409Z"),
        Name: "Doug Hoppe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAccessTokenResponse != nil {
        // handle response
    }
}
```

## CreateDevEnvironment

<p>Creates a Dev Environment in Amazon CodeCatalyst, a cloud-based development environment that you can use to quickly work on the code stored in the source repositories of your project. </p> <note> <p>When created in the Amazon CodeCatalyst console, by default a Dev Environment is configured to have a 2 core processor, 4GB of RAM, and 16GB of persistent storage. None of these defaults apply to a Dev Environment created programmatically.</p> </note>

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
    res, err := s.SDK.CreateDevEnvironment(ctx, operations.CreateDevEnvironmentRequest{
        RequestBody: operations.CreateDevEnvironmentRequestBody{
            Alias: sdk.String("debitis"),
            ClientToken: sdk.String("ipsa"),
            Ides: []shared.IdeConfiguration{
                shared.IdeConfiguration{
                    Name: sdk.String("Laurie Kreiger"),
                    Runtime: sdk.String("voluptatum"),
                },
                shared.IdeConfiguration{
                    Name: sdk.String("Miriam Huel"),
                    Runtime: sdk.String("ab"),
                },
                shared.IdeConfiguration{
                    Name: sdk.String("Mrs. Marie O'Connell"),
                    Runtime: sdk.String("sapiente"),
                },
                shared.IdeConfiguration{
                    Name: sdk.String("Fred Strosin"),
                    Runtime: sdk.String("molestiae"),
                },
            },
            InactivityTimeoutMinutes: sdk.Int64(799159),
            InstanceType: operations.CreateDevEnvironmentRequestBodyInstanceTypeEnumDevStandard1Xlarge,
            PersistentStorage: operations.CreateDevEnvironmentRequestBodyPersistentStorage{
                SizeInGiB: sdk.Int64(461479),
            },
            Repositories: []shared.RepositoryInput{
                shared.RepositoryInput{
                    BranchName: sdk.String("porro"),
                    RepositoryName: "dolorum",
                },
                shared.RepositoryInput{
                    BranchName: sdk.String("dicta"),
                    RepositoryName: "nam",
                },
                shared.RepositoryInput{
                    BranchName: sdk.String("officia"),
                    RepositoryName: "occaecati",
                },
            },
        },
        ProjectName: "fugit",
        SpaceName: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDevEnvironmentResponse != nil {
        // handle response
    }
}
```

## CreateProject

Creates a project in a specified space.

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
    res, err := s.SDK.CreateProject(ctx, operations.CreateProjectRequest{
        RequestBody: operations.CreateProjectRequestBody{
            Description: sdk.String("hic"),
            DisplayName: "optio",
        },
        SpaceName: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProjectResponse != nil {
        // handle response
    }
}
```

## CreateSourceRepositoryBranch

<p>Creates a branch in a specified source repository in Amazon CodeCatalyst. </p> <note> <p>This API only creates a branch in a source repository hosted in Amazon CodeCatalyst. You cannot use this API to create a branch in a linked repository.</p> </note>

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
    res, err := s.SDK.CreateSourceRepositoryBranch(ctx, operations.CreateSourceRepositoryBranchRequest{
        RequestBody: operations.CreateSourceRepositoryBranchRequestBody{
            HeadCommitID: sdk.String("beatae"),
        },
        Name: "Tanya Gleason",
        ProjectName: "cum",
        SourceRepositoryName: "esse",
        SpaceName: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSourceRepositoryBranchResponse != nil {
        // handle response
    }
}
```

## DeleteAccessToken

Deletes a specified personal access token (PAT). A personal access token can only be deleted by the user who created it.

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
    res, err := s.SDK.DeleteAccessToken(ctx, operations.DeleteAccessTokenRequest{
        ID: "92059293-96fe-4a75-96eb-10faaa2352c5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAccessTokenResponse != nil {
        // handle response
    }
}
```

## DeleteDevEnvironment

Deletes a Dev Environment. 

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
    res, err := s.SDK.DeleteDevEnvironment(ctx, operations.DeleteDevEnvironmentRequest{
        ID: "955907af-f1a3-4a2f-a946-7739251aa52c",
        ProjectName: "sequi",
        SpaceName: "tenetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDevEnvironmentResponse != nil {
        // handle response
    }
}
```

## GetDevEnvironment

Returns information about a Dev Environment for a source repository in a project. Dev Environments are specific to the user who creates them.

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
    res, err := s.SDK.GetDevEnvironment(ctx, operations.GetDevEnvironmentRequest{
        ID: "5ad019da-1ffe-478f-897b-0074f15471b5",
        ProjectName: "accusamus",
        SpaceName: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDevEnvironmentResponse != nil {
        // handle response
    }
}
```

## GetProject

Returns information about a project.

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
    res, err := s.SDK.GetProject(ctx, operations.GetProjectRequest{
        Name: "Eric Emmerich",
        SpaceName: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProjectResponse != nil {
        // handle response
    }
}
```

## GetSourceRepositoryCloneUrls

Returns information about the URLs that can be used with a Git client to clone a source repository.

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
    res, err := s.SDK.GetSourceRepositoryCloneUrls(ctx, operations.GetSourceRepositoryCloneUrlsRequest{
        ProjectName: "pariatur",
        SourceRepositoryName: "modi",
        SpaceName: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSourceRepositoryCloneUrlsResponse != nil {
        // handle response
    }
}
```

## GetSpace

Returns information about an space.

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
    res, err := s.SDK.GetSpace(ctx, operations.GetSpaceRequest{
        Name: "Grady Botsford",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpaceResponse != nil {
        // handle response
    }
}
```

## GetSubscription

Returns information about the Amazon Web Services account used for billing purposes and the billing plan for the space.

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
    res, err := s.SDK.GetSubscription(ctx, operations.GetSubscriptionRequest{
        SpaceName: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSubscriptionResponse != nil {
        // handle response
    }
}
```

## GetUserDetails

Returns information about a user. 

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
    res, err := s.SDK.GetUserDetails(ctx, operations.GetUserDetailsRequest{
        ID: sdk.String("e450ad2a-bd44-4269-802d-502a94bb4f63"),
        UserName: sdk.String("Nigel_Mayer"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUserDetailsResponse != nil {
        // handle response
    }
}
```

## ListAccessTokens

Lists all personal access tokens (PATs) associated with the user who calls the API. You can only list PATs associated with your Amazon Web Services Builder ID.

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
    res, err := s.SDK.ListAccessTokens(ctx, operations.ListAccessTokensRequest{
        RequestBody: operations.ListAccessTokensRequestBody{
            MaxResults: sdk.Int64(896039),
            NextToken: sdk.String("sint"),
        },
        MaxResults: sdk.String("officia"),
        NextToken: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccessTokensResponse != nil {
        // handle response
    }
}
```

## ListDevEnvironments

Retrieves a list of Dev Environments in a project.

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
    res, err := s.SDK.ListDevEnvironments(ctx, operations.ListDevEnvironmentsRequest{
        RequestBody: operations.ListDevEnvironmentsRequestBody{
            Filters: []shared.Filter{
                shared.Filter{
                    ComparisonOperator: sdk.String("a"),
                    Key: "dolorum",
                    Values: []string{
                        "in",
                        "illum",
                    },
                },
                shared.Filter{
                    ComparisonOperator: sdk.String("maiores"),
                    Key: "rerum",
                    Values: []string{
                        "magnam",
                    },
                },
                shared.Filter{
                    ComparisonOperator: sdk.String("cumque"),
                    Key: "facere",
                    Values: []string{
                        "aliquid",
                        "laborum",
                    },
                },
                shared.Filter{
                    ComparisonOperator: sdk.String("accusamus"),
                    Key: "non",
                    Values: []string{
                        "enim",
                        "accusamus",
                        "delectus",
                    },
                },
            },
            MaxResults: sdk.Int64(692532),
            NextToken: sdk.String("provident"),
        },
        MaxResults: sdk.String("nam"),
        NextToken: sdk.String("id"),
        ProjectName: "blanditiis",
        SpaceName: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDevEnvironmentsResponse != nil {
        // handle response
    }
}
```

## ListEventLogs

Retrieves a list of events that occurred during a specified time period in a space. You can use these events to audit user and system activity in a space.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListEventLogs(ctx, operations.ListEventLogsRequest{
        RequestBody: operations.ListEventLogsRequestBody{
            EndTime: types.MustTimeFromString("2022-04-23T13:35:30.978Z"),
            EventName: sdk.String("deserunt"),
            MaxResults: sdk.Int64(394869),
            NextToken: sdk.String("vel"),
            StartTime: types.MustTimeFromString("2021-10-15T07:59:26.631Z"),
        },
        MaxResults: sdk.String("molestiae"),
        NextToken: sdk.String("perferendis"),
        SpaceName: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEventLogsResponse != nil {
        // handle response
    }
}
```

## ListProjects

Retrieves a list of projects.

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
    res, err := s.SDK.ListProjects(ctx, operations.ListProjectsRequest{
        RequestBody: operations.ListProjectsRequestBody{
            Filters: []shared.ProjectListFilter{
                shared.ProjectListFilter{
                    ComparisonOperator: shared.ComparisonOperatorEnumLt.ToPointer(),
                    Key: shared.FilterKeyEnumHasAccessTo,
                    Values: []string{
                        "labore",
                        "labore",
                        "suscipit",
                    },
                },
                shared.ProjectListFilter{
                    ComparisonOperator: shared.ComparisonOperatorEnumLt.ToPointer(),
                    Key: shared.FilterKeyEnumHasAccessTo,
                    Values: []string{
                        "eum",
                        "vero",
                        "aspernatur",
                    },
                },
            },
            MaxResults: sdk.Int64(102863),
            NextToken: sdk.String("magnam"),
        },
        MaxResults: sdk.String("et"),
        NextToken: sdk.String("excepturi"),
        SpaceName: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProjectsResponse != nil {
        // handle response
    }
}
```

## ListSourceRepositories

Retrieves a list of source repositories in a project.

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
    res, err := s.SDK.ListSourceRepositories(ctx, operations.ListSourceRepositoriesRequest{
        RequestBody: operations.ListSourceRepositoriesRequestBody{
            MaxResults: sdk.Int64(590873),
            NextToken: sdk.String("quos"),
        },
        MaxResults: sdk.String("sint"),
        NextToken: sdk.String("accusantium"),
        ProjectName: "mollitia",
        SpaceName: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSourceRepositoriesResponse != nil {
        // handle response
    }
}
```

## ListSourceRepositoryBranches

Retrieves a list of branches in a specified source repository.

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
    res, err := s.SDK.ListSourceRepositoryBranches(ctx, operations.ListSourceRepositoryBranchesRequest{
        RequestBody: operations.ListSourceRepositoryBranchesRequestBody{
            MaxResults: sdk.Int64(652103),
            NextToken: sdk.String("ad"),
        },
        MaxResults: sdk.String("eum"),
        NextToken: sdk.String("dolor"),
        ProjectName: "necessitatibus",
        SourceRepositoryName: "odit",
        SpaceName: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSourceRepositoryBranchesResponse != nil {
        // handle response
    }
}
```

## ListSpaces

Retrieves a list of spaces.

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
    res, err := s.SDK.ListSpaces(ctx, operations.ListSpacesRequest{
        RequestBody: operations.ListSpacesRequestBody{
            NextToken: sdk.String("quasi"),
        },
        NextToken: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSpacesResponse != nil {
        // handle response
    }
}
```

## StartDevEnvironment

Starts a specified Dev Environment and puts it into an active state. 

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
    res, err := s.SDK.StartDevEnvironment(ctx, operations.StartDevEnvironmentRequest{
        RequestBody: operations.StartDevEnvironmentRequestBody{
            Ides: []shared.IdeConfiguration{
                shared.IdeConfiguration{
                    Name: sdk.String("Frederick Schoen"),
                    Runtime: sdk.String("in"),
                },
                shared.IdeConfiguration{
                    Name: sdk.String("Diane VonRueden"),
                    Runtime: sdk.String("nihil"),
                },
                shared.IdeConfiguration{
                    Name: sdk.String("Marty Cormier"),
                    Runtime: sdk.String("accusantium"),
                },
                shared.IdeConfiguration{
                    Name: sdk.String("Irma Morissette DDS"),
                    Runtime: sdk.String("illum"),
                },
            },
            InactivityTimeoutMinutes: sdk.Int64(864934),
            InstanceType: operations.StartDevEnvironmentRequestBodyInstanceTypeEnumDevStandard1Xlarge.ToPointer(),
        },
        ID: "692601fb-576b-40d5-b0d3-0c5fbb258705",
        ProjectName: "nesciunt",
        SpaceName: "eos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartDevEnvironmentResponse != nil {
        // handle response
    }
}
```

## StartDevEnvironmentSession

Starts a session for a specified Dev Environment.

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
    res, err := s.SDK.StartDevEnvironmentSession(ctx, operations.StartDevEnvironmentSessionRequest{
        RequestBody: operations.StartDevEnvironmentSessionRequestBody{
            SessionConfiguration: operations.StartDevEnvironmentSessionRequestBodySessionConfiguration{
                ExecuteCommandSessionConfiguration: &shared.ExecuteCommandSessionConfiguration{
                    Arguments: []string{
                        "dolores",
                    },
                    Command: "minus",
                },
                SessionType: shared.DevEnvironmentSessionTypeEnumSsm.ToPointer(),
            },
        },
        ID: "3d5fe9b9-0c28-4909-b3fe-49a8d9cbf486",
        ProjectName: "dolorem",
        SpaceName: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartDevEnvironmentSessionResponse != nil {
        // handle response
    }
}
```

## StopDevEnvironment

Pauses a specified Dev Environment and places it in a non-running state. Stopped Dev Environments do not consume compute minutes.

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
    res, err := s.SDK.StopDevEnvironment(ctx, operations.StopDevEnvironmentRequest{
        ID: "323f9b77-f3a4-4100-a74e-bf69280d1ba7",
        ProjectName: "voluptate",
        SpaceName: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopDevEnvironmentResponse != nil {
        // handle response
    }
}
```

## StopDevEnvironmentSession

Stops a session for a specified Dev Environment.

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
    res, err := s.SDK.StopDevEnvironmentSession(ctx, operations.StopDevEnvironmentSessionRequest{
        ID: "89ebf737-ae42-403c-a5e6-a95d8a0d446c",
        ProjectName: "officiis",
        SessionID: "qui",
        SpaceName: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopDevEnvironmentSessionResponse != nil {
        // handle response
    }
}
```

## UpdateDevEnvironment

Changes one or more values for a Dev Environment. Updating certain values of the Dev Environment will cause a restart.

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
    res, err := s.SDK.UpdateDevEnvironment(ctx, operations.UpdateDevEnvironmentRequest{
        RequestBody: operations.UpdateDevEnvironmentRequestBody{
            Alias: sdk.String("a"),
            ClientToken: sdk.String("esse"),
            Ides: []shared.IdeConfiguration{
                shared.IdeConfiguration{
                    Name: sdk.String("Tracy Schamberger"),
                    Runtime: sdk.String("tempore"),
                },
                shared.IdeConfiguration{
                    Name: sdk.String("Francis Haley"),
                    Runtime: sdk.String("totam"),
                },
                shared.IdeConfiguration{
                    Name: sdk.String("Karen Rath"),
                    Runtime: sdk.String("vel"),
                },
            },
            InactivityTimeoutMinutes: sdk.Int64(730442),
            InstanceType: operations.UpdateDevEnvironmentRequestBodyInstanceTypeEnumDevStandard1Medium.ToPointer(),
        },
        ID: "a73429cd-b1a8-4422-bb67-9d2322715bf0",
        ProjectName: "cumque",
        SpaceName: "soluta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDevEnvironmentResponse != nil {
        // handle response
    }
}
```

## VerifySession

Verifies whether the calling user has a valid Amazon CodeCatalyst login and session. If successful, this returns the ID of the user in Amazon CodeCatalyst.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.VerifySession(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifySessionResponse != nil {
        // handle response
    }
}
```
