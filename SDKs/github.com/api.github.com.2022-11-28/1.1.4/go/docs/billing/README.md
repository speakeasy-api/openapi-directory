# Billing

## Overview

Monitor charges and usage from Actions and Packages.

### Available Operations

* [BillingGetGithubActionsBillingOrg](#billinggetgithubactionsbillingorg) - Get GitHub Actions billing for an organization
* [BillingGetGithubActionsBillingUser](#billinggetgithubactionsbillinguser) - Get GitHub Actions billing for a user
* [BillingGetGithubPackagesBillingOrg](#billinggetgithubpackagesbillingorg) - Get GitHub Packages billing for an organization
* [BillingGetGithubPackagesBillingUser](#billinggetgithubpackagesbillinguser) - Get GitHub Packages billing for a user
* [BillingGetSharedStorageBillingOrg](#billinggetsharedstoragebillingorg) - Get shared storage billing for an organization
* [BillingGetSharedStorageBillingUser](#billinggetsharedstoragebillinguser) - Get shared storage billing for a user

## BillingGetGithubActionsBillingOrg

Gets the summary of the free and paid GitHub Actions minutes used.

Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".

Access tokens must have the `repo` or `admin:org` scope.

API method documentation
<https://docs.github.com/rest/reference/billing#get-github-actions-billing-for-an-organization>

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
    res, err := s.Billing.BillingGetGithubActionsBillingOrg(ctx, operations.BillingGetGithubActionsBillingOrgRequest{
        Org: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsBillingUsage != nil {
        // handle response
    }
}
```

## BillingGetGithubActionsBillingUser

Gets the summary of the free and paid GitHub Actions minutes used.

Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".

Access tokens must have the `user` scope.

API method documentation
<https://docs.github.com/rest/reference/billing#get-github-actions-billing-for-a-user>

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
    res, err := s.Billing.BillingGetGithubActionsBillingUser(ctx, operations.BillingGetGithubActionsBillingUserRequest{
        Username: "Anabel23",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsBillingUsage != nil {
        // handle response
    }
}
```

## BillingGetGithubPackagesBillingOrg

Gets the free and paid storage used for GitHub Packages in gigabytes.

Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."

Access tokens must have the `repo` or `admin:org` scope.

API method documentation
<https://docs.github.com/rest/reference/billing#get-github-packages-billing-for-an-organization>

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
    res, err := s.Billing.BillingGetGithubPackagesBillingOrg(ctx, operations.BillingGetGithubPackagesBillingOrgRequest{
        Org: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PackagesBillingUsage != nil {
        // handle response
    }
}
```

## BillingGetGithubPackagesBillingUser

Gets the free and paid storage used for GitHub Packages in gigabytes.

Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."

Access tokens must have the `user` scope.

API method documentation
<https://docs.github.com/rest/reference/billing#get-github-packages-billing-for-a-user>

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
    res, err := s.Billing.BillingGetGithubPackagesBillingUser(ctx, operations.BillingGetGithubPackagesBillingUserRequest{
        Username: "Leta52",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PackagesBillingUsage != nil {
        // handle response
    }
}
```

## BillingGetSharedStorageBillingOrg

Gets the estimated paid and estimated total storage used for GitHub Actions and GitHub Packages.

Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."

Access tokens must have the `repo` or `admin:org` scope.

API method documentation
<https://docs.github.com/rest/reference/billing#get-shared-storage-billing-for-an-organization>

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
    res, err := s.Billing.BillingGetSharedStorageBillingOrg(ctx, operations.BillingGetSharedStorageBillingOrgRequest{
        Org: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CombinedBillingUsage != nil {
        // handle response
    }
}
```

## BillingGetSharedStorageBillingUser

Gets the estimated paid and estimated total storage used for GitHub Actions and GitHub Packages.

Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."

Access tokens must have the `user` scope.

API method documentation
<https://docs.github.com/rest/reference/billing#get-shared-storage-billing-for-a-user>

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
    res, err := s.Billing.BillingGetSharedStorageBillingUser(ctx, operations.BillingGetSharedStorageBillingUserRequest{
        Username: "Jonatan.Keebler",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CombinedBillingUsage != nil {
        // handle response
    }
}
```
