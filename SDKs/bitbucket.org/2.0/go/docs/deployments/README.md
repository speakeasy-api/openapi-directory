# Deployments

## Overview

Teams are deploying code faster than ever, thanks to continuous
delivery practices and tools like Bitbucket Pipelines. Bitbucket
Deployments gives teams visibility into their deployment
environments and helps teams to track how far changes have
progressed in their deployment pipeline.


### Available Operations

* [CreateEnvironment](#createenvironment) - Create an environment
* [DeleteEnvironmentForRepository](#deleteenvironmentforrepository) - Delete an environment
* [DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyID](#deleterepositoriesworkspacereposlugdeploykeyskeyid) - Delete a repository deploy key
* [DeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyID](#deleteworkspacesworkspaceprojectsprojectkeydeploykeyskeyid) - Delete a deploy key from a project
* [GetDeploymentForRepository](#getdeploymentforrepository) - Get a deployment
* [GetDeploymentsForRepository](#getdeploymentsforrepository) - List deployments
* [GetEnvironmentForRepository](#getenvironmentforrepository) - Get an environment
* [GetEnvironmentsForRepository](#getenvironmentsforrepository) - List environments
* [GetRepositoriesWorkspaceRepoSlugDeployKeys](#getrepositoriesworkspacereposlugdeploykeys) - List repository deploy keys
* [GetRepositoriesWorkspaceRepoSlugDeployKeysKeyID](#getrepositoriesworkspacereposlugdeploykeyskeyid) - Get a repository deploy key
* [GetWorkspacesWorkspaceProjectsProjectKeyDeployKeys](#getworkspacesworkspaceprojectsprojectkeydeploykeys) - List project deploy keys
* [GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyID](#getworkspacesworkspaceprojectsprojectkeydeploykeyskeyid) - Get a project deploy key
* [PostRepositoriesWorkspaceRepoSlugDeployKeys](#postrepositoriesworkspacereposlugdeploykeys) - Add a repository deploy key
* [PostWorkspacesWorkspaceProjectsProjectKeyDeployKeys](#postworkspacesworkspaceprojectsprojectkeydeploykeys) - Create a project deploy key
* [PutRepositoriesWorkspaceRepoSlugDeployKeysKeyID](#putrepositoriesworkspacereposlugdeploykeyskeyid) - Update a repository deploy key
* [UpdateEnvironmentForRepository](#updateenvironmentforrepository) - Update an environment

## CreateEnvironment

Create an environment.

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
    res, err := s.Deployments.CreateEnvironment(ctx, operations.CreateEnvironmentRequest{
        RequestBody: map[string]interface{}{
            "repudiandae": "ullam",
        },
        RepoSlug: "expedita",
        Workspace: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeploymentEnvironment != nil {
        // handle response
    }
}
```

## DeleteEnvironmentForRepository

Delete an environment

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
    res, err := s.Deployments.DeleteEnvironmentForRepository(ctx, operations.DeleteEnvironmentForRepositoryRequest{
        EnvironmentUUID: "repellat",
        RepoSlug: "quibusdam",
        Workspace: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyID

This deletes a deploy key from a repository.

Example:
```
$ curl -XDELETE \
-H "Authorization <auth header>" \
https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234
```

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Deployments.DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyID(ctx, operations.DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDRequest{
        KeyID: "saepe",
        RepoSlug: "pariatur",
        Workspace: "accusantium",
    }, operations.DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyID

This deletes a deploy key from a project.

Example:
```
$ curl -XDELETE \
-H "Authorization <auth header>" \
https://api.bitbucket.org/2.0/workspaces/jzeng/projects/JZ/deploy-keys/1234
```

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Deployments.DeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyID(ctx, operations.DeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIDRequest{
        KeyID: "consequuntur",
        ProjectKey: "praesentium",
        Workspace: "natus",
    }, operations.DeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDeploymentForRepository

Retrieve a deployment

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
    res, err := s.Deployments.GetDeploymentForRepository(ctx, operations.GetDeploymentForRepositoryRequest{
        DeploymentUUID: "magni",
        RepoSlug: "sunt",
        Workspace: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deployment != nil {
        // handle response
    }
}
```

## GetDeploymentsForRepository

Find deployments

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
    res, err := s.Deployments.GetDeploymentsForRepository(ctx, operations.GetDeploymentsForRepositoryRequest{
        RepoSlug: "illum",
        Workspace: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedDeployments != nil {
        // handle response
    }
}
```

## GetEnvironmentForRepository

Retrieve an environment

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
    res, err := s.Deployments.GetEnvironmentForRepository(ctx, operations.GetEnvironmentForRepositoryRequest{
        EnvironmentUUID: "maxime",
        RepoSlug: "ea",
        Workspace: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeploymentEnvironment != nil {
        // handle response
    }
}
```

## GetEnvironmentsForRepository

Find environments

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
    res, err := s.Deployments.GetEnvironmentsForRepository(ctx, operations.GetEnvironmentsForRepositoryRequest{
        RepoSlug: "odit",
        Workspace: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedEnvironments != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugDeployKeys

Returns all deploy-keys belonging to a repository.

Example:
```
$ curl -H "Authorization <auth header>" \
https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys

Output:
{
    "pagelen": 10,
    "values": [
        {
            "id": 123,
            "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
            "label": "mykey",
            "type": "deploy_key",
            "created_on": "2018-08-15T23:50:59.993890+00:00",
            "repository": {
                "full_name": "mleu/test",
                "name": "test",
                "type": "repository",
                "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
            },
            "links":{
                "self":{
                    "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/123"
                }
            }
            "last_used": null,
            "comment": "mleu@C02W454JHTD8"
        }
    ],
    "page": 1,
    "size": 1
}
```

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Deployments.GetRepositoriesWorkspaceRepoSlugDeployKeys(ctx, operations.GetRepositoriesWorkspaceRepoSlugDeployKeysRequest{
        RepoSlug: "accusantium",
        Workspace: "ab",
    }, operations.GetRepositoriesWorkspaceRepoSlugDeployKeysSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedDeployKeys != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugDeployKeysKeyID

Returns the deploy key belonging to a specific key.

Example:
```
$ curl -H "Authorization <auth header>" \
https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-key/1234

Output:
{
    "comment": "mleu@C02W454JHTD8",
    "last_used": null,
    "links": {
        "self": {
            "href": https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-key/1234"
        }
    },
    "repository": {
        "full_name": "mleu/test",
        "name": "test",
        "type": "repository",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
    },
    "label": "mykey",
    "created_on": "2018-08-15T23:50:59.993890+00:00",
    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
    "id": 1234,
    "type": "deploy_key"
}
```

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Deployments.GetRepositoriesWorkspaceRepoSlugDeployKeysKeyID(ctx, operations.GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDRequest{
        KeyID: "maiores",
        RepoSlug: "quidem",
        Workspace: "ipsam",
    }, operations.GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeployKey != nil {
        // handle response
    }
}
```

## GetWorkspacesWorkspaceProjectsProjectKeyDeployKeys

Returns all deploy keys belonging to a project.

Example:
```
$ curl -H "Authorization <auth header>" \
https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys

Output:
{
    "pagelen":10,
    "values":[
        {
            "comment":"thakseth@C02W454JHTD8",
            "last_used":null,
            "links":{
                "self":{
                    "href":"https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys/1234"
                }
            },
            "label":"test",
            "project":{
                "links":{
                    "self":{
                        "href":"https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT"
                    }
                },
                "type":"project",
                "name":"cooperative standard",
                "key":"TEST_PROJECT",
                "uuid":"{3b3e510b-7f2b-414d-a2b7-76c4e405c1c0}"
            },
            "created_on":"2021-07-28T21:20:19.491721+00:00",
            "key":"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDX5yfMOEw6HG9jKTYTisbmDTJ4MCUTSVGr5e4OWvY3UuI2A6F8SdzQqa2f5BABA/4g5Sk5awJrYHlNu3EzV1V2I44tR3A4fnZAG71ZKyDPi1wvdO7UYmFgxV/Vd18H9QZFFjICGDM7W0PT2mI0kON/jN3qNWi+GiB/xgaeQKSqynysdysDp8lnnI/8Sh3ikURP9UP83ShRCpAXszOUNaa+UUlcYQYBDLIGowsg51c4PCkC3DNhAMxppkNRKoSOWwyl+oRVXHSDylkiJSBHW3HH4Q6WHieD54kGrjbhWBKdnnxKX7QAAZBDseY+t01N36m6/ljvXSUEcBWtHxBYye0r",
            "type":"project_deploy_key",
            "id":1234
        }
    ],
    "page":1,
    "size":1
}
```

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Deployments.GetWorkspacesWorkspaceProjectsProjectKeyDeployKeys(ctx, operations.GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysRequest{
        ProjectKey: "voluptate",
        Workspace: "autem",
    }, operations.GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedProjectDeployKeys != nil {
        // handle response
    }
}
```

## GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyID

Returns the deploy key belonging to a specific key ID.

Example:
```
$ curl -H "Authorization <auth header>" \
https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys/1234

Output:
{
    "pagelen":10,
    "values":[
        {
            "comment":"thakseth@C02W454JHTD8",
            "last_used":null,
            "links":{
                "self":{
                    "href":"https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys/1234"
                }
            },
            "label":"test",
            "project":{
                "links":{
                    "self":{
                        "href":"https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT"
                    }
                },
                "type":"project",
                "name":"cooperative standard",
                "key":"TEST_PROJECT",
                "uuid":"{3b3e510b-7f2b-414d-a2b7-76c4e405c1c0}"
            },
            "created_on":"2021-07-28T21:20:19.491721+00:00",
            "key":"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDX5yfMOEw6HG9jKTYTisbmDTJ4MCUTSVGr5e4OWvY3UuI2A6F8SdzQqa2f5BABA/4g5Sk5awJrYHlNu3EzV1V2I44tR3A4fnZAG71ZKyDPi1wvdO7UYmFgxV/Vd18H9QZFFjICGDM7W0PT2mI0kON/jN3qNWi+GiB/xgaeQKSqynysdysDp8lnnI/8Sh3ikURP9UP83ShRCpAXszOUNaa+UUlcYQYBDLIGowsg51c4PCkC3DNhAMxppkNRKoSOWwyl+oRVXHSDylkiJSBHW3HH4Q6WHieD54kGrjbhWBKdnnxKX7QAAZBDseY+t01N36m6/ljvXSUEcBWtHxBYye0r",
            "type":"project_deploy_key",
            "id":1234
        }
    ],
}
```

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Deployments.GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyID(ctx, operations.GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIDRequest{
        KeyID: "nam",
        ProjectKey: "eaque",
        Workspace: "pariatur",
    }, operations.GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectDeployKey != nil {
        // handle response
    }
}
```

## PostRepositoriesWorkspaceRepoSlugDeployKeys

Create a new deploy key in a repository. Note: If authenticating a deploy key
with an OAuth consumer, any changes to the OAuth consumer will subsequently
invalidate the deploy key.


Example:
```
$ curl -XPOST \
-H "Authorization <auth header>" \
-H "Content-type: application/json" \
https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys -d \
'{
    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 mleu@C02W454JHTD8",
    "label": "mydeploykey"
}'

Output:
{
    "id": 123,
    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
    "label": "mydeploykey",
    "type": "deploy_key",
    "created_on": "2018-08-15T23:50:59.993890+00:00",
    "repository": {
        "full_name": "mleu/test",
        "name": "test",
        "type": "repository",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
    },
    "links":{
        "self":{
            "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/123"
        }
    }
    "last_used": null,
    "comment": "mleu@C02W454JHTD8"
}
```

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Deployments.PostRepositoriesWorkspaceRepoSlugDeployKeys(ctx, operations.PostRepositoriesWorkspaceRepoSlugDeployKeysRequest{
        RepoSlug: "nemo",
        Workspace: "voluptatibus",
    }, operations.PostRepositoriesWorkspaceRepoSlugDeployKeysSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeployKey != nil {
        // handle response
    }
}
```

## PostWorkspacesWorkspaceProjectsProjectKeyDeployKeys

Create a new deploy key in a project.

Example:
```
$ curl -XPOST \
-H "Authorization <auth header>" \
-H "Content-type: application/json" \
https://api.bitbucket.org/2.0/workspaces/jzeng/projects/JZ/deploy-keys/ -d \
'{
    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 mleu@C02W454JHTD8",
    "label": "mydeploykey"
}'

Output:
{
    "comment": "mleu@C02W454JHTD8",
    "last_used": null,
    "links": {
        "self": {
            "href": "https://api.bitbucket.org/2.0/workspaces/testadfsa/projects/ASDF/deploy-keys/5/"
        }
    },
    "label": "myprojectkey",
    "project": {
        ...
    },
    "created_on": "2021-08-10T05:28:00.570859+00:00",
    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
    "type": "project_deploy_key",
    "id": 5
}
```

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Deployments.PostWorkspacesWorkspaceProjectsProjectKeyDeployKeys(ctx, operations.PostWorkspacesWorkspaceProjectsProjectKeyDeployKeysRequest{
        ProjectKey: "perferendis",
        Workspace: "fugiat",
    }, operations.PostWorkspacesWorkspaceProjectsProjectKeyDeployKeysSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectDeployKey != nil {
        // handle response
    }
}
```

## PutRepositoriesWorkspaceRepoSlugDeployKeysKeyID

Create a new deploy key in a repository.

The same key needs to be passed in but the comment and label can change.

Example:
```
$ curl -XPUT \
-H "Authorization <auth header>" \
-H "Content-type: application/json" \
https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234 -d \
'{
    "label": "newlabel",
    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 newcomment",
}'

Output:
{
    "comment": "newcomment",
    "last_used": null,
    "links": {
        "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234"
        }
    },
    "repository": {
        "full_name": "mleu/test",
        "name": "test",
        "type": "repository",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
    },
    "label": "newlabel",
    "created_on": "2018-08-15T23:50:59.993890+00:00",
    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
    "id": 1234,
    "type": "deploy_key"
}
```

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Deployments.PutRepositoriesWorkspaceRepoSlugDeployKeysKeyID(ctx, operations.PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDRequest{
        KeyID: "amet",
        RepoSlug: "aut",
        Workspace: "cumque",
    }, operations.PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeployKey != nil {
        // handle response
    }
}
```

## UpdateEnvironmentForRepository

Update an environment

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
    res, err := s.Deployments.UpdateEnvironmentForRepository(ctx, operations.UpdateEnvironmentForRepositoryRequest{
        EnvironmentUUID: "corporis",
        RepoSlug: "hic",
        Workspace: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
