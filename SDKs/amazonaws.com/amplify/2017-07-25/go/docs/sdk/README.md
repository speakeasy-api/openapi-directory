# SDK

## Overview

Amplify enables developers to develop and deploy cloud-powered mobile and web apps. The Amplify Console provides a continuous delivery and hosting service for web applications. For more information, see the <a href="https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html">Amplify Console User Guide</a>. The Amplify Framework is a comprehensive set of SDKs, libraries, tools, and documentation for client app development. For more information, see the <a href="https://docs.amplify.aws/">Amplify Framework.</a> 

Amazon Web Services documentation
<https://docs.aws.amazon.com/amplify/>
### Available Operations

* [CreateApp](#createapp) -  Creates a new Amplify app. 
* [CreateBackendEnvironment](#createbackendenvironment) -  Creates a new backend environment for an Amplify app. 
* [CreateBranch](#createbranch) -  Creates a new branch for an Amplify app. 
* [CreateDeployment](#createdeployment) -  Creates a deployment for a manually deployed Amplify app. Manually deployed apps are not connected to a repository. 
* [CreateDomainAssociation](#createdomainassociation) -  Creates a new domain association for an Amplify app. This action associates a custom domain with the Amplify app 
* [CreateWebhook](#createwebhook) -  Creates a new webhook on an Amplify app. 
* [DeleteApp](#deleteapp) -  Deletes an existing Amplify app specified by an app ID. 
* [DeleteBackendEnvironment](#deletebackendenvironment) -  Deletes a backend environment for an Amplify app. 
* [DeleteBranch](#deletebranch) -  Deletes a branch for an Amplify app. 
* [DeleteDomainAssociation](#deletedomainassociation) -  Deletes a domain association for an Amplify app. 
* [DeleteJob](#deletejob) -  Deletes a job for a branch of an Amplify app. 
* [DeleteWebhook](#deletewebhook) -  Deletes a webhook. 
* [GenerateAccessLogs](#generateaccesslogs) -  Returns the website access logs for a specific time range using a presigned URL. 
* [GetApp](#getapp) -  Returns an existing Amplify app by appID. 
* [GetArtifactURL](#getartifacturl) -  Returns the artifact info that corresponds to an artifact id. 
* [GetBackendEnvironment](#getbackendenvironment) -  Returns a backend environment for an Amplify app. 
* [GetBranch](#getbranch) -  Returns a branch for an Amplify app. 
* [GetDomainAssociation](#getdomainassociation) -  Returns the domain information for an Amplify app. 
* [GetJob](#getjob) -  Returns a job for a branch of an Amplify app. 
* [GetWebhook](#getwebhook) -  Returns the webhook information that corresponds to a specified webhook ID. 
* [ListApps](#listapps) -  Returns a list of the existing Amplify apps. 
* [ListArtifacts](#listartifacts) -  Returns a list of artifacts for a specified app, branch, and job. 
* [ListBackendEnvironments](#listbackendenvironments) -  Lists the backend environments for an Amplify app. 
* [ListBranches](#listbranches) -  Lists the branches of an Amplify app. 
* [ListDomainAssociations](#listdomainassociations) -  Returns the domain associations for an Amplify app. 
* [ListJobs](#listjobs) -  Lists the jobs for a branch of an Amplify app. 
* [ListTagsForResource](#listtagsforresource) -  Returns a list of tags for a specified Amazon Resource Name (ARN). 
* [ListWebhooks](#listwebhooks) -  Returns a list of webhooks for an Amplify app. 
* [StartDeployment](#startdeployment) -  Starts a deployment for a manually deployed app. Manually deployed apps are not connected to a repository. 
* [StartJob](#startjob) -  Starts a new job for a branch of an Amplify app. 
* [StopJob](#stopjob) -  Stops a job that is in progress for a branch of an Amplify app. 
* [TagResource](#tagresource) -  Tags the resource with a tag key and value. 
* [UntagResource](#untagresource) -  Untags a resource with a specified Amazon Resource Name (ARN). 
* [UpdateApp](#updateapp) -  Updates an existing Amplify app. 
* [UpdateBranch](#updatebranch) -  Updates a branch for an Amplify app. 
* [UpdateDomainAssociation](#updatedomainassociation) -  Creates a new domain association for an Amplify app.
* [UpdateWebhook](#updatewebhook) -  Updates a webhook. 

## CreateApp

 Creates a new Amplify app. 

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
    res, err := s.SDK.CreateApp(ctx, operations.CreateAppRequest{
        RequestBody: operations.CreateAppRequestBody{
            AccessToken: sdk.String("natus"),
            AutoBranchCreationConfig: &operations.CreateAppRequestBodyAutoBranchCreationConfig{
                BasicAuthCredentials: sdk.String("sed"),
                BuildSpec: sdk.String("iste"),
                EnableAutoBuild: sdk.Bool(false),
                EnableBasicAuth: sdk.Bool(false),
                EnablePerformanceMode: sdk.Bool(false),
                EnablePullRequestPreview: sdk.Bool(false),
                EnvironmentVariables: map[string]string{
                    "natus": "laboriosam",
                },
                Framework: sdk.String("hic"),
                PullRequestEnvironmentName: sdk.String("saepe"),
                Stage: shared.StageEnumExperimental.ToPointer(),
            },
            AutoBranchCreationPatterns: []string{
                "corporis",
                "iste",
            },
            BasicAuthCredentials: sdk.String("iure"),
            BuildSpec: sdk.String("saepe"),
            CustomHeaders: sdk.String("quidem"),
            CustomRules: []shared.CustomRule{
                shared.CustomRule{
                    Condition: sdk.String("ipsa"),
                    Source: "reiciendis",
                    Status: sdk.String("est"),
                    Target: "mollitia",
                },
            },
            Description: sdk.String("laborum"),
            EnableAutoBranchCreation: sdk.Bool(false),
            EnableBasicAuth: sdk.Bool(false),
            EnableBranchAutoBuild: sdk.Bool(false),
            EnableBranchAutoDeletion: sdk.Bool(false),
            EnvironmentVariables: map[string]string{
                "dolorem": "corporis",
            },
            IamServiceRoleArn: sdk.String("explicabo"),
            Name: "Ronnie Mohr",
            OauthToken: sdk.String("excepturi"),
            Platform: operations.CreateAppRequestBodyPlatformEnumWeb.ToPointer(),
            Repository: sdk.String("iure"),
            Tags: map[string]string{
                "doloribus": "sapiente",
                "architecto": "mollitia",
                "dolorem": "culpa",
            },
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("repellat"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("quam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAppResult != nil {
        // handle response
    }
}
```

## CreateBackendEnvironment

 Creates a new backend environment for an Amplify app. 

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
    res, err := s.SDK.CreateBackendEnvironment(ctx, operations.CreateBackendEnvironmentRequest{
        RequestBody: operations.CreateBackendEnvironmentRequestBody{
            DeploymentArtifacts: sdk.String("molestiae"),
            EnvironmentName: "velit",
            StackName: sdk.String("error"),
        },
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("vitae"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("odit"),
        AppID: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBackendEnvironmentResult != nil {
        // handle response
    }
}
```

## CreateBranch

 Creates a new branch for an Amplify app. 

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
    res, err := s.SDK.CreateBranch(ctx, operations.CreateBranchRequest{
        RequestBody: operations.CreateBranchRequestBody{
            BackendEnvironmentArn: sdk.String("sequi"),
            BasicAuthCredentials: sdk.String("tenetur"),
            BranchName: "ipsam",
            BuildSpec: sdk.String("id"),
            Description: sdk.String("possimus"),
            DisplayName: sdk.String("aut"),
            EnableAutoBuild: sdk.Bool(false),
            EnableBasicAuth: sdk.Bool(false),
            EnableNotification: sdk.Bool(false),
            EnablePerformanceMode: sdk.Bool(false),
            EnablePullRequestPreview: sdk.Bool(false),
            EnvironmentVariables: map[string]string{
                "error": "temporibus",
            },
            Framework: sdk.String("laborum"),
            PullRequestEnvironmentName: sdk.String("quasi"),
            Stage: operations.CreateBranchRequestBodyStageEnumPullRequest.ToPointer(),
            Tags: map[string]string{
                "vero": "nihil",
                "praesentium": "voluptatibus",
                "ipsa": "omnis",
                "voluptate": "cum",
            },
            TTL: sdk.String("perferendis"),
        },
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("dolore"),
        AppID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBranchResult != nil {
        // handle response
    }
}
```

## CreateDeployment

 Creates a deployment for a manually deployed Amplify app. Manually deployed apps are not connected to a repository. 

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
    res, err := s.SDK.CreateDeployment(ctx, operations.CreateDeploymentRequest{
        RequestBody: operations.CreateDeploymentRequestBody{
            FileMap: map[string]string{
                "harum": "enim",
            },
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("molestias"),
        AppID: "excepturi",
        BranchName: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeploymentResult != nil {
        // handle response
    }
}
```

## CreateDomainAssociation

 Creates a new domain association for an Amplify app. This action associates a custom domain with the Amplify app 

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
    res, err := s.SDK.CreateDomainAssociation(ctx, operations.CreateDomainAssociationRequest{
        RequestBody: operations.CreateDomainAssociationRequestBody{
            AutoSubDomainCreationPatterns: []string{
                "praesentium",
                "rem",
            },
            AutoSubDomainIAMRole: sdk.String("voluptates"),
            DomainName: "quasi",
            EnableAutoSubDomain: sdk.Bool(false),
            SubDomainSettings: []shared.SubDomainSetting{
                shared.SubDomainSetting{
                    BranchName: "sint",
                    Prefix: "veritatis",
                },
                shared.SubDomainSetting{
                    BranchName: "itaque",
                    Prefix: "incidunt",
                },
                shared.SubDomainSetting{
                    BranchName: "enim",
                    Prefix: "consequatur",
                },
                shared.SubDomainSetting{
                    BranchName: "est",
                    Prefix: "quibusdam",
                },
            },
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("qui"),
        AppID: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDomainAssociationResult != nil {
        // handle response
    }
}
```

## CreateWebhook

 Creates a new webhook on an Amplify app. 

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
    res, err := s.SDK.CreateWebhook(ctx, operations.CreateWebhookRequest{
        RequestBody: operations.CreateWebhookRequestBody{
            BranchName: "cupiditate",
            Description: sdk.String("quos"),
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        AppID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWebhookResult != nil {
        // handle response
    }
}
```

## DeleteApp

 Deletes an existing Amplify app specified by an app ID. 

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
    res, err := s.SDK.DeleteApp(ctx, operations.DeleteAppRequest{
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("non"),
        AppID: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAppResult != nil {
        // handle response
    }
}
```

## DeleteBackendEnvironment

 Deletes a backend environment for an Amplify app. 

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
    res, err := s.SDK.DeleteBackendEnvironment(ctx, operations.DeleteBackendEnvironmentRequest{
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("dolor"),
        AppID: "debitis",
        EnvironmentName: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteBackendEnvironmentResult != nil {
        // handle response
    }
}
```

## DeleteBranch

 Deletes a branch for an Amplify app. 

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
    res, err := s.SDK.DeleteBranch(ctx, operations.DeleteBranchRequest{
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("dicta"),
        AppID: "magnam",
        BranchName: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteBranchResult != nil {
        // handle response
    }
}
```

## DeleteDomainAssociation

 Deletes a domain association for an Amplify app. 

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
    res, err := s.SDK.DeleteDomainAssociation(ctx, operations.DeleteDomainAssociationRequest{
        XAmzAlgorithm: sdk.String("facere"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        AppID: "enim",
        DomainName: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDomainAssociationResult != nil {
        // handle response
    }
}
```

## DeleteJob

 Deletes a job for a branch of an Amplify app. 

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
    res, err := s.SDK.DeleteJob(ctx, operations.DeleteJobRequest{
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        AppID: "sapiente",
        BranchName: "amet",
        JobID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteJobResult != nil {
        // handle response
    }
}
```

## DeleteWebhook

 Deletes a webhook. 

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
    res, err := s.SDK.DeleteWebhook(ctx, operations.DeleteWebhookRequest{
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("nihil"),
        WebhookID: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteWebhookResult != nil {
        // handle response
    }
}
```

## GenerateAccessLogs

 Returns the website access logs for a specific time range using a presigned URL. 

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
    res, err := s.SDK.GenerateAccessLogs(ctx, operations.GenerateAccessLogsRequest{
        RequestBody: operations.GenerateAccessLogsRequestBody{
            DomainName: "distinctio",
            EndTime: types.MustTimeFromString("2022-06-04T18:23:50.695Z"),
            StartTime: types.MustTimeFromString("2022-08-14T00:52:14.624Z"),
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("magnam"),
        AppID: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateAccessLogsResult != nil {
        // handle response
    }
}
```

## GetApp

 Returns an existing Amplify app by appID. 

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
    res, err := s.SDK.GetApp(ctx, operations.GetAppRequest{
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        AppID: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAppResult != nil {
        // handle response
    }
}
```

## GetArtifactURL

 Returns the artifact info that corresponds to an artifact id. 

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
    res, err := s.SDK.GetArtifactURL(ctx, operations.GetArtifactURLRequest{
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("nemo"),
        ArtifactID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetArtifactURLResult != nil {
        // handle response
    }
}
```

## GetBackendEnvironment

 Returns a backend environment for an Amplify app. 

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
    res, err := s.SDK.GetBackendEnvironment(ctx, operations.GetBackendEnvironmentRequest{
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("facilis"),
        AppID: "in",
        EnvironmentName: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBackendEnvironmentResult != nil {
        // handle response
    }
}
```

## GetBranch

 Returns a branch for an Amplify app. 

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
    res, err := s.SDK.GetBranch(ctx, operations.GetBranchRequest{
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        AppID: "sed",
        BranchName: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBranchResult != nil {
        // handle response
    }
}
```

## GetDomainAssociation

 Returns the domain information for an Amplify app. 

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
    res, err := s.SDK.GetDomainAssociation(ctx, operations.GetDomainAssociationRequest{
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("sunt"),
        AppID: "quo",
        DomainName: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDomainAssociationResult != nil {
        // handle response
    }
}
```

## GetJob

 Returns a job for a branch of an Amplify app. 

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
    res, err := s.SDK.GetJob(ctx, operations.GetJobRequest{
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        AppID: "ab",
        BranchName: "maiores",
        JobID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetJobResult != nil {
        // handle response
    }
}
```

## GetWebhook

 Returns the webhook information that corresponds to a specified webhook ID. 

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
    res, err := s.SDK.GetWebhook(ctx, operations.GetWebhookRequest{
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("nemo"),
        WebhookID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWebhookResult != nil {
        // handle response
    }
}
```

## ListApps

 Returns a list of the existing Amplify apps. 

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
    res, err := s.SDK.ListApps(ctx, operations.ListAppsRequest{
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("hic"),
        MaxResults: sdk.Int64(729991),
        NextToken: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAppsResult != nil {
        // handle response
    }
}
```

## ListArtifacts

 Returns a list of artifacts for a specified app, branch, and job. 

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
    res, err := s.SDK.ListArtifacts(ctx, operations.ListArtifactsRequest{
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("nesciunt"),
        AppID: "eos",
        BranchName: "perferendis",
        JobID: "dolores",
        MaxResults: sdk.Int64(793698),
        NextToken: sdk.String("quam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListArtifactsResult != nil {
        // handle response
    }
}
```

## ListBackendEnvironments

 Lists the backend environments for an Amplify app. 

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
    res, err := s.SDK.ListBackendEnvironments(ctx, operations.ListBackendEnvironmentsRequest{
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("facilis"),
        AppID: "perspiciatis",
        EnvironmentName: sdk.String("voluptatem"),
        MaxResults: sdk.Int64(783645),
        NextToken: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBackendEnvironmentsResult != nil {
        // handle response
    }
}
```

## ListBranches

 Lists the branches of an Amplify app. 

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
    res, err := s.SDK.ListBranches(ctx, operations.ListBranchesRequest{
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        AppID: "earum",
        MaxResults: sdk.Int64(267262),
        NextToken: sdk.String("iste"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBranchesResult != nil {
        // handle response
    }
}
```

## ListDomainAssociations

 Returns the domain associations for an Amplify app. 

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
    res, err := s.SDK.ListDomainAssociations(ctx, operations.ListDomainAssociationsRequest{
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("delectus"),
        AppID: "quaerat",
        MaxResults: sdk.Int64(554242),
        NextToken: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDomainAssociationsResult != nil {
        // handle response
    }
}
```

## ListJobs

 Lists the jobs for a branch of an Amplify app. 

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
    res, err := s.SDK.ListJobs(ctx, operations.ListJobsRequest{
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        AppID: "cum",
        BranchName: "voluptate",
        MaxResults: sdk.Int64(490459),
        NextToken: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobsResult != nil {
        // handle response
    }
}
```

## ListTagsForResource

 Returns a list of tags for a specified Amazon Resource Name (ARN). 

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
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("iure"),
        ResourceArn: "odio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListWebhooks

 Returns a list of webhooks for an Amplify app. 

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
    res, err := s.SDK.ListWebhooks(ctx, operations.ListWebhooksRequest{
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("eos"),
        AppID: "atque",
        MaxResults: sdk.Int64(24678),
        NextToken: sdk.String("fugiat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWebhooksResult != nil {
        // handle response
    }
}
```

## StartDeployment

 Starts a deployment for a manually deployed app. Manually deployed apps are not connected to a repository. 

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
    res, err := s.SDK.StartDeployment(ctx, operations.StartDeploymentRequest{
        RequestBody: operations.StartDeploymentRequestBody{
            JobID: sdk.String("ab"),
            SourceURL: sdk.String("soluta"),
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        AppID: "distinctio",
        BranchName: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartDeploymentResult != nil {
        // handle response
    }
}
```

## StartJob

 Starts a new job for a branch of an Amplify app. 

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
    res, err := s.SDK.StartJob(ctx, operations.StartJobRequest{
        RequestBody: operations.StartJobRequestBody{
            CommitID: sdk.String("nihil"),
            CommitMessage: sdk.String("ipsum"),
            CommitTime: types.MustTimeFromString("2022-05-03T23:26:05.435Z"),
            JobID: sdk.String("saepe"),
            JobReason: sdk.String("eius"),
            JobType: operations.StartJobRequestBodyJobTypeEnumRelease,
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        AppID: "deserunt",
        BranchName: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartJobResult != nil {
        // handle response
    }
}
```

## StopJob

 Stops a job that is in progress for a branch of an Amplify app. 

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
    res, err := s.SDK.StopJob(ctx, operations.StopJobRequest{
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("similique"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        AppID: "tempora",
        BranchName: "vel",
        JobID: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopJobResult != nil {
        // handle response
    }
}
```

## TagResource

 Tags the resource with a tag key and value. 

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
                "qui": "dolorum",
                "a": "esse",
                "harum": "iusto",
                "ipsum": "quisquam",
            },
        },
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        ResourceArn: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

 Untags a resource with a specified Amazon Resource Name (ARN). 

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
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("vel"),
        ResourceArn: "libero",
        TagKeys: []string{
            "deserunt",
            "quam",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateApp

 Updates an existing Amplify app. 

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
    res, err := s.SDK.UpdateApp(ctx, operations.UpdateAppRequest{
        RequestBody: operations.UpdateAppRequestBody{
            AccessToken: sdk.String("ipsum"),
            AutoBranchCreationConfig: &operations.UpdateAppRequestBodyAutoBranchCreationConfig{
                BasicAuthCredentials: sdk.String("incidunt"),
                BuildSpec: sdk.String("qui"),
                EnableAutoBuild: sdk.Bool(false),
                EnableBasicAuth: sdk.Bool(false),
                EnablePerformanceMode: sdk.Bool(false),
                EnablePullRequestPreview: sdk.Bool(false),
                EnvironmentVariables: map[string]string{
                    "maxime": "pariatur",
                    "soluta": "dicta",
                    "laborum": "totam",
                },
                Framework: sdk.String("incidunt"),
                PullRequestEnvironmentName: sdk.String("aspernatur"),
                Stage: shared.StageEnumProduction.ToPointer(),
            },
            AutoBranchCreationPatterns: []string{
                "facilis",
                "aliquid",
                "quam",
            },
            BasicAuthCredentials: sdk.String("molestias"),
            BuildSpec: sdk.String("temporibus"),
            CustomHeaders: sdk.String("qui"),
            CustomRules: []shared.CustomRule{
                shared.CustomRule{
                    Condition: sdk.String("fugit"),
                    Source: "magni",
                    Status: sdk.String("odio"),
                    Target: "sunt",
                },
            },
            Description: sdk.String("ullam"),
            EnableAutoBranchCreation: sdk.Bool(false),
            EnableBasicAuth: sdk.Bool(false),
            EnableBranchAutoBuild: sdk.Bool(false),
            EnableBranchAutoDeletion: sdk.Bool(false),
            EnvironmentVariables: map[string]string{
                "hic": "voluptatem",
                "cumque": "soluta",
                "nobis": "et",
            },
            IamServiceRoleArn: sdk.String("saepe"),
            Name: sdk.String("Carolyn Rohan"),
            OauthToken: sdk.String("cupiditate"),
            Platform: operations.UpdateAppRequestBodyPlatformEnumWeb.ToPointer(),
            Repository: sdk.String("delectus"),
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("quae"),
        AppID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAppResult != nil {
        // handle response
    }
}
```

## UpdateBranch

 Updates a branch for an Amplify app. 

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
    res, err := s.SDK.UpdateBranch(ctx, operations.UpdateBranchRequest{
        RequestBody: operations.UpdateBranchRequestBody{
            BackendEnvironmentArn: sdk.String("quas"),
            BasicAuthCredentials: sdk.String("itaque"),
            BuildSpec: sdk.String("consequatur"),
            Description: sdk.String("est"),
            DisplayName: sdk.String("repellendus"),
            EnableAutoBuild: sdk.Bool(false),
            EnableBasicAuth: sdk.Bool(false),
            EnableNotification: sdk.Bool(false),
            EnablePerformanceMode: sdk.Bool(false),
            EnablePullRequestPreview: sdk.Bool(false),
            EnvironmentVariables: map[string]string{
                "doloribus": "ut",
                "facilis": "cupiditate",
                "qui": "quae",
                "laudantium": "odio",
            },
            Framework: sdk.String("occaecati"),
            PullRequestEnvironmentName: sdk.String("voluptatibus"),
            Stage: operations.UpdateBranchRequestBodyStageEnumExperimental.ToPointer(),
            TTL: sdk.String("vero"),
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("vero"),
        AppID: "tenetur",
        BranchName: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBranchResult != nil {
        // handle response
    }
}
```

## UpdateDomainAssociation

 Creates a new domain association for an Amplify app.

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
    res, err := s.SDK.UpdateDomainAssociation(ctx, operations.UpdateDomainAssociationRequest{
        RequestBody: operations.UpdateDomainAssociationRequestBody{
            AutoSubDomainCreationPatterns: []string{
                "distinctio",
                "quod",
                "odio",
                "similique",
            },
            AutoSubDomainIAMRole: sdk.String("facilis"),
            EnableAutoSubDomain: sdk.Bool(false),
            SubDomainSettings: []shared.SubDomainSetting{
                shared.SubDomainSetting{
                    BranchName: "ducimus",
                    Prefix: "dolore",
                },
                shared.SubDomainSetting{
                    BranchName: "quibusdam",
                    Prefix: "illum",
                },
                shared.SubDomainSetting{
                    BranchName: "sequi",
                    Prefix: "natus",
                },
                shared.SubDomainSetting{
                    BranchName: "impedit",
                    Prefix: "aut",
                },
            },
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("exercitationem"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        AppID: "iusto",
        DomainName: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDomainAssociationResult != nil {
        // handle response
    }
}
```

## UpdateWebhook

 Updates a webhook. 

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
    res, err := s.SDK.UpdateWebhook(ctx, operations.UpdateWebhookRequest{
        RequestBody: operations.UpdateWebhookRequestBody{
            BranchName: sdk.String("ducimus"),
            Description: sdk.String("alias"),
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("possimus"),
        WebhookID: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateWebhookResult != nil {
        // handle response
    }
}
```
