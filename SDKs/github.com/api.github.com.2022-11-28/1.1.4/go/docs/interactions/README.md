# Interactions

## Overview

Owner or admin management of users interactions.

### Available Operations

* [InteractionsGetRestrictionsForAuthenticatedUser](#interactionsgetrestrictionsforauthenticateduser) - Get interaction restrictions for your public repositories
* [InteractionsGetRestrictionsForOrg](#interactionsgetrestrictionsfororg) - Get interaction restrictions for an organization
* [InteractionsGetRestrictionsForRepo](#interactionsgetrestrictionsforrepo) - Get interaction restrictions for a repository
* [InteractionsRemoveRestrictionsForAuthenticatedUser](#interactionsremoverestrictionsforauthenticateduser) - Remove interaction restrictions from your public repositories
* [InteractionsRemoveRestrictionsForOrg](#interactionsremoverestrictionsfororg) - Remove interaction restrictions for an organization
* [InteractionsRemoveRestrictionsForRepo](#interactionsremoverestrictionsforrepo) - Remove interaction restrictions for a repository
* [InteractionsSetRestrictionsForAuthenticatedUser](#interactionssetrestrictionsforauthenticateduser) - Set interaction restrictions for your public repositories
* [InteractionsSetRestrictionsForOrg](#interactionssetrestrictionsfororg) - Set interaction restrictions for an organization
* [InteractionsSetRestrictionsForRepo](#interactionssetrestrictionsforrepo) - Set interaction restrictions for a repository

## InteractionsGetRestrictionsForAuthenticatedUser

Shows which type of GitHub user can interact with your public repositories and when the restriction expires.

API method documentation
<https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-your-public-repositories>

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
    res, err := s.Interactions.InteractionsGetRestrictionsForAuthenticatedUser(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.InteractionsGetRestrictionsForAuthenticatedUser200ApplicationJSONAnyOf != nil {
        // handle response
    }
}
```

## InteractionsGetRestrictionsForOrg

Shows which type of GitHub user can interact with this organization and when the restriction expires. If there is no restrictions, you will see an empty response.

API method documentation
<https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-an-organization>

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
    res, err := s.Interactions.InteractionsGetRestrictionsForOrg(ctx, operations.InteractionsGetRestrictionsForOrgRequest{
        Org: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InteractionsGetRestrictionsForOrg200ApplicationJSONAnyOf != nil {
        // handle response
    }
}
```

## InteractionsGetRestrictionsForRepo

Shows which type of GitHub user can interact with this repository and when the restriction expires. If there are no restrictions, you will see an empty response.

API method documentation
<https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-a-repository>

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
    res, err := s.Interactions.InteractionsGetRestrictionsForRepo(ctx, operations.InteractionsGetRestrictionsForRepoRequest{
        Owner: "consectetur",
        Repo: "aperiam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InteractionsGetRestrictionsForRepo200ApplicationJSONAnyOf != nil {
        // handle response
    }
}
```

## InteractionsRemoveRestrictionsForAuthenticatedUser

Removes any interaction restrictions from your public repositories.

API method documentation
<https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-from-your-public-repositories>

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
    res, err := s.Interactions.InteractionsRemoveRestrictionsForAuthenticatedUser(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## InteractionsRemoveRestrictionsForOrg

Removes all interaction restrictions from public repositories in the given organization. You must be an organization owner to remove restrictions.

API method documentation
<https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-for-an-organization>

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
    res, err := s.Interactions.InteractionsRemoveRestrictionsForOrg(ctx, operations.InteractionsRemoveRestrictionsForOrgRequest{
        Org: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## InteractionsRemoveRestrictionsForRepo

Removes all interaction restrictions from the given repository. You must have owner or admin access to remove restrictions. If the interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.

API method documentation
<https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-for-a-repository>

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
    res, err := s.Interactions.InteractionsRemoveRestrictionsForRepo(ctx, operations.InteractionsRemoveRestrictionsForRepoRequest{
        Owner: "reiciendis",
        Repo: "soluta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## InteractionsSetRestrictionsForAuthenticatedUser

Temporarily restricts which type of GitHub user can interact with your public repositories. Setting the interaction limit at the user level will overwrite any interaction limits that are set for individual repositories owned by the user.

API method documentation
<https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-your-public-repositories>

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
    res, err := s.Interactions.InteractionsSetRestrictionsForAuthenticatedUser(ctx, shared.InteractionLimit{
        Expiry: shared.InteractionExpiryEnumOneMonth.ToPointer(),
        Limit: shared.InteractionGroupEnumCollaboratorsOnly,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InteractionLimitResponse != nil {
        // handle response
    }
}
```

## InteractionsSetRestrictionsForOrg

Temporarily restricts interactions to a certain type of GitHub user in any public repository in the given organization. You must be an organization owner to set these restrictions. Setting the interaction limit at the organization level will overwrite any interaction limits that are set for individual repositories owned by the organization.

API method documentation
<https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-an-organization>

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
    res, err := s.Interactions.InteractionsSetRestrictionsForOrg(ctx, operations.InteractionsSetRestrictionsForOrgRequest{
        InteractionLimit: shared.InteractionLimit{
            Expiry: shared.InteractionExpiryEnumOneMonth.ToPointer(),
            Limit: shared.InteractionGroupEnumCollaboratorsOnly,
        },
        Org: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InteractionLimitResponse != nil {
        // handle response
    }
}
```

## InteractionsSetRestrictionsForRepo

Temporarily restricts interactions to a certain type of GitHub user within the given repository. You must have owner or admin access to set these restrictions. If an interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.

API method documentation
<https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-a-repository>

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
    res, err := s.Interactions.InteractionsSetRestrictionsForRepo(ctx, operations.InteractionsSetRestrictionsForRepoRequest{
        InteractionLimit: shared.InteractionLimit{
            Expiry: shared.InteractionExpiryEnumOneMonth.ToPointer(),
            Limit: shared.InteractionGroupEnumCollaboratorsOnly,
        },
        Owner: "omnis",
        Repo: "eos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InteractionLimitResponse != nil {
        // handle response
    }
}
```
