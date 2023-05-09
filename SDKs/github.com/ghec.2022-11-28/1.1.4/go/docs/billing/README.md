# Billing

## Overview

Monitor charges and usage from Actions and Packages.

### Available Operations

* [BillingGetGithubActionsBillingGhe](#billinggetgithubactionsbillingghe) - Get GitHub Actions billing for an enterprise
* [BillingGetGithubActionsBillingOrg](#billinggetgithubactionsbillingorg) - Get GitHub Actions billing for an organization
* [BillingGetGithubActionsBillingUser](#billinggetgithubactionsbillinguser) - Get GitHub Actions billing for a user
* [BillingGetGithubAdvancedSecurityBillingGhe](#billinggetgithubadvancedsecuritybillingghe) - Get GitHub Advanced Security active committers for an enterprise
* [BillingGetGithubAdvancedSecurityBillingOrg](#billinggetgithubadvancedsecuritybillingorg) - Get GitHub Advanced Security active committers for an organization
* [BillingGetGithubPackagesBillingGhe](#billinggetgithubpackagesbillingghe) - Get GitHub Packages billing for an enterprise
* [BillingGetGithubPackagesBillingOrg](#billinggetgithubpackagesbillingorg) - Get GitHub Packages billing for an organization
* [BillingGetGithubPackagesBillingUser](#billinggetgithubpackagesbillinguser) - Get GitHub Packages billing for a user
* [BillingGetSharedStorageBillingGhe](#billinggetsharedstoragebillingghe) - Get shared storage billing for an enterprise
* [BillingGetSharedStorageBillingOrg](#billinggetsharedstoragebillingorg) - Get shared storage billing for an organization
* [BillingGetSharedStorageBillingUser](#billinggetsharedstoragebillinguser) - Get shared storage billing for a user

## BillingGetGithubActionsBillingGhe

Gets the summary of the free and paid GitHub Actions minutes used.

Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/enterprise-cloud@latest//github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".

The authenticated user must be an enterprise admin.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/billing#get-github-actions-billing-for-an-enterprise>

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
    res, err := s.Billing.BillingGetGithubActionsBillingGhe(ctx, operations.BillingGetGithubActionsBillingGheRequest{
        Enterprise: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsBillingUsage != nil {
        // handle response
    }
}
```

## BillingGetGithubActionsBillingOrg

Gets the summary of the free and paid GitHub Actions minutes used.

Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/enterprise-cloud@latest//github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".

Access tokens must have the `repo` or `admin:org` scope.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/billing#get-github-actions-billing-for-an-organization>

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
        Org: "exercitationem",
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

Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/enterprise-cloud@latest//github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".

Access tokens must have the `user` scope.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/billing#get-github-actions-billing-for-a-user>

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
        Username: "Tressa98",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsBillingUsage != nil {
        // handle response
    }
}
```

## BillingGetGithubAdvancedSecurityBillingGhe

Gets the GitHub Advanced Security active committers for an enterprise per repository.

Each distinct user login across all repositories is counted as a single Advanced Security seat, so the `total_advanced_security_committers` is not the sum of active_users for each repository.

The total number of repositories with committer information is tracked by the `total_count` field.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/billing#export-advanced-security-active-committers-data-for-enterprise>

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
    res, err := s.Billing.BillingGetGithubAdvancedSecurityBillingGhe(ctx, operations.BillingGetGithubAdvancedSecurityBillingGheRequest{
        Enterprise: "suscipit",
        Page: sdk.Int64(968972),
        PerPage: sdk.Int64(697142),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdvancedSecurityActiveCommitters != nil {
        // handle response
    }
}
```

## BillingGetGithubAdvancedSecurityBillingOrg

Gets the GitHub Advanced Security active committers for an organization per repository.

Each distinct user login across all repositories is counted as a single Advanced Security seat, so the `total_advanced_security_committers` is not the sum of advanced_security_committers for each repository.

If this organization defers to an enterprise for billing, the `total_advanced_security_committers` returned from the organization API may include some users that are in more than one organization, so they will only consume a single Advanced Security seat at the enterprise level.

The total number of repositories with committer information is tracked by the `total_count` field.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/billing#get-github-advanced-security-active-committers-for-an-organization>

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
    res, err := s.Billing.BillingGetGithubAdvancedSecurityBillingOrg(ctx, operations.BillingGetGithubAdvancedSecurityBillingOrgRequest{
        Org: "saepe",
        Page: sdk.Int64(897071),
        PerPage: sdk.Int64(296556),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdvancedSecurityActiveCommitters != nil {
        // handle response
    }
}
```

## BillingGetGithubPackagesBillingGhe

Gets the free and paid storage used for GitHub Packages in gigabytes.

Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/enterprise-cloud@latest//github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."

The authenticated user must be an enterprise admin.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/billing#get-github-packages-billing-for-an-enterprise>

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
    res, err := s.Billing.BillingGetGithubPackagesBillingGhe(ctx, operations.BillingGetGithubPackagesBillingGheRequest{
        Enterprise: "sunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PackagesBillingUsage != nil {
        // handle response
    }
}
```

## BillingGetGithubPackagesBillingOrg

Gets the free and paid storage used for GitHub Packages in gigabytes.

Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/enterprise-cloud@latest//github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."

Access tokens must have the `repo` or `admin:org` scope.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/billing#get-github-packages-billing-for-an-organization>

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
        Org: "asperiores",
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

Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/enterprise-cloud@latest//github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."

Access tokens must have the `user` scope.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/billing#get-github-packages-billing-for-a-user>

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
        Username: "Dayton10",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PackagesBillingUsage != nil {
        // handle response
    }
}
```

## BillingGetSharedStorageBillingGhe

Gets the estimated paid and estimated total storage used for GitHub Actions and GitHub Packages.

Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/enterprise-cloud@latest//github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."

The authenticated user must be an enterprise admin.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/billing#get-shared-storage-billing-for-an-enterprise>

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
    res, err := s.Billing.BillingGetSharedStorageBillingGhe(ctx, operations.BillingGetSharedStorageBillingGheRequest{
        Enterprise: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CombinedBillingUsage != nil {
        // handle response
    }
}
```

## BillingGetSharedStorageBillingOrg

Gets the estimated paid and estimated total storage used for GitHub Actions and GitHub Packages.

Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/enterprise-cloud@latest//github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."

Access tokens must have the `repo` or `admin:org` scope.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/billing#get-shared-storage-billing-for-an-organization>

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
        Org: "a",
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

Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/enterprise-cloud@latest//github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."

Access tokens must have the `user` scope.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/billing#get-shared-storage-billing-for-a-user>

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
        Username: "Sim_Feest",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CombinedBillingUsage != nil {
        // handle response
    }
}
```
