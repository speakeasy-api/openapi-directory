# Properties

### Available Operations

* [DeleteCommitHostedPropertyValue](#deletecommithostedpropertyvalue) - Delete a commit application property
* [DeletePullRequestHostedPropertyValue](#deletepullrequesthostedpropertyvalue) - Delete a pull request application property
* [DeleteRepositoryHostedPropertyValue](#deleterepositoryhostedpropertyvalue) - Delete a repository application property
* [DeleteUserHostedPropertyValue](#deleteuserhostedpropertyvalue) - Delete a user application property
* [GetCommitHostedPropertyValue](#getcommithostedpropertyvalue) - Get a commit application property
* [GetPullRequestHostedPropertyValue](#getpullrequesthostedpropertyvalue) - Get a pull request application property
* [GetRepositoryHostedPropertyValue](#getrepositoryhostedpropertyvalue) - Get a repository application property
* [RetrieveUserHostedPropertyValue](#retrieveuserhostedpropertyvalue) - Get a user application property
* [UpdateCommitHostedPropertyValue](#updatecommithostedpropertyvalue) - Update a commit application property
* [UpdatePullRequestHostedPropertyValue](#updatepullrequesthostedpropertyvalue) - Update a pull request application property
* [UpdateRepositoryHostedPropertyValue](#updaterepositoryhostedpropertyvalue) - Update a repository application property
* [UpdateUserHostedPropertyValue](#updateuserhostedpropertyvalue) - Update a user application property

## DeleteCommitHostedPropertyValue

Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.

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
    res, err := s.Properties.DeleteCommitHostedPropertyValue(ctx, operations.DeleteCommitHostedPropertyValueRequest{
        AppKey: "aliquid",
        Commit: "officia",
        PropertyName: "suscipit",
        RepoSlug: "aliquid",
        Workspace: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePullRequestHostedPropertyValue

Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.

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
    res, err := s.Properties.DeletePullRequestHostedPropertyValue(ctx, operations.DeletePullRequestHostedPropertyValueRequest{
        AppKey: "eum",
        PropertyName: "voluptas",
        PullrequestID: "iste",
        RepoSlug: "id",
        Workspace: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteRepositoryHostedPropertyValue

Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.

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
    res, err := s.Properties.DeleteRepositoryHostedPropertyValue(ctx, operations.DeleteRepositoryHostedPropertyValueRequest{
        AppKey: "error",
        PropertyName: "possimus",
        RepoSlug: "voluptates",
        Workspace: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteUserHostedPropertyValue

Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a user.

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
    res, err := s.Properties.DeleteUserHostedPropertyValue(ctx, operations.DeleteUserHostedPropertyValueRequest{
        AppKey: "laborum",
        PropertyName: "libero",
        SelectedUser: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCommitHostedPropertyValue

Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.

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
    res, err := s.Properties.GetCommitHostedPropertyValue(ctx, operations.GetCommitHostedPropertyValueRequest{
        AppKey: "deleniti",
        Commit: "enim",
        PropertyName: "vitae",
        RepoSlug: "repellendus",
        Workspace: "ex",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationProperty != nil {
        // handle response
    }
}
```

## GetPullRequestHostedPropertyValue

Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.

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
    res, err := s.Properties.GetPullRequestHostedPropertyValue(ctx, operations.GetPullRequestHostedPropertyValueRequest{
        AppKey: "quo",
        PropertyName: "ex",
        PullrequestID: "ut",
        RepoSlug: "ad",
        Workspace: "expedita",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationProperty != nil {
        // handle response
    }
}
```

## GetRepositoryHostedPropertyValue

Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.

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
    res, err := s.Properties.GetRepositoryHostedPropertyValue(ctx, operations.GetRepositoryHostedPropertyValueRequest{
        AppKey: "voluptatem",
        PropertyName: "molestias",
        RepoSlug: "cum",
        Workspace: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationProperty != nil {
        // handle response
    }
}
```

## RetrieveUserHostedPropertyValue

Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a user.

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
    res, err := s.Properties.RetrieveUserHostedPropertyValue(ctx, operations.RetrieveUserHostedPropertyValueRequest{
        AppKey: "beatae",
        PropertyName: "voluptatum",
        SelectedUser: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationProperty != nil {
        // handle response
    }
}
```

## UpdateCommitHostedPropertyValue

Update an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.

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
    res, err := s.Properties.UpdateCommitHostedPropertyValue(ctx, operations.UpdateCommitHostedPropertyValueRequest{
        RequestBody: map[string]interface{}{
            "rerum": "est",
        },
        AppKey: "culpa",
        Commit: "voluptatem",
        PropertyName: "sapiente",
        RepoSlug: "officiis",
        Workspace: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdatePullRequestHostedPropertyValue

Update an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.

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
    res, err := s.Properties.UpdatePullRequestHostedPropertyValue(ctx, operations.UpdatePullRequestHostedPropertyValueRequest{
        RequestBody: map[string]interface{}{
            "pariatur": "debitis",
            "voluptatem": "alias",
            "deleniti": "earum",
        },
        AppKey: "ex",
        PropertyName: "sapiente",
        PullrequestID: "rem",
        RepoSlug: "minus",
        Workspace: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateRepositoryHostedPropertyValue

Update an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.

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
    res, err := s.Properties.UpdateRepositoryHostedPropertyValue(ctx, operations.UpdateRepositoryHostedPropertyValueRequest{
        RequestBody: map[string]interface{}{
            "ratione": "ullam",
            "perferendis": "illum",
            "totam": "impedit",
            "quibusdam": "nam",
        },
        AppKey: "ipsam",
        PropertyName: "culpa",
        RepoSlug: "dolor",
        Workspace: "aliquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateUserHostedPropertyValue

Update an [application property](/cloud/bitbucket/application-properties/) value stored against a user.

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
    res, err := s.Properties.UpdateUserHostedPropertyValue(ctx, operations.UpdateUserHostedPropertyValueRequest{
        RequestBody: map[string]interface{}{
            "deleniti": "veritatis",
        },
        AppKey: "tempora",
        PropertyName: "dolor",
        SelectedUser: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
