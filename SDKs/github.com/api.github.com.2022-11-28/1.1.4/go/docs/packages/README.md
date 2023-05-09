# Packages

## Overview

Manage packages for authenticated users and organizations.

### Available Operations

* [PackagesDeletePackageForAuthenticatedUser](#packagesdeletepackageforauthenticateduser) - Delete a package for the authenticated user
* [PackagesDeletePackageForOrg](#packagesdeletepackagefororg) - Delete a package for an organization
* [PackagesDeletePackageForUser](#packagesdeletepackageforuser) - Delete a package for a user
* [PackagesDeletePackageVersionForAuthenticatedUser](#packagesdeletepackageversionforauthenticateduser) - Delete a package version for the authenticated user
* [PackagesDeletePackageVersionForOrg](#packagesdeletepackageversionfororg) - Delete package version for an organization
* [PackagesDeletePackageVersionForUser](#packagesdeletepackageversionforuser) - Delete package version for a user
* [PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUser](#packagesgetallpackageversionsforpackageownedbyauthenticateduser) - List package versions for a package owned by the authenticated user
* [PackagesGetAllPackageVersionsForPackageOwnedByOrg](#packagesgetallpackageversionsforpackageownedbyorg) - List package versions for a package owned by an organization
* [PackagesGetAllPackageVersionsForPackageOwnedByUser](#packagesgetallpackageversionsforpackageownedbyuser) - List package versions for a package owned by a user
* [PackagesGetPackageForAuthenticatedUser](#packagesgetpackageforauthenticateduser) - Get a package for the authenticated user
* [PackagesGetPackageForOrganization](#packagesgetpackagefororganization) - Get a package for an organization
* [PackagesGetPackageForUser](#packagesgetpackageforuser) - Get a package for a user
* [PackagesGetPackageVersionForAuthenticatedUser](#packagesgetpackageversionforauthenticateduser) - Get a package version for the authenticated user
* [PackagesGetPackageVersionForOrganization](#packagesgetpackageversionfororganization) - Get a package version for an organization
* [PackagesGetPackageVersionForUser](#packagesgetpackageversionforuser) - Get a package version for a user
* [PackagesListPackagesForAuthenticatedUser](#packageslistpackagesforauthenticateduser) - List packages for the authenticated user's namespace
* [PackagesListPackagesForOrganization](#packageslistpackagesfororganization) - List packages for an organization
* [PackagesListPackagesForUser](#packageslistpackagesforuser) - List packages for a user
* [PackagesRestorePackageForAuthenticatedUser](#packagesrestorepackageforauthenticateduser) - Restore a package for the authenticated user
* [PackagesRestorePackageForOrg](#packagesrestorepackagefororg) - Restore a package for an organization
* [PackagesRestorePackageForUser](#packagesrestorepackageforuser) - Restore a package for a user
* [PackagesRestorePackageVersionForAuthenticatedUser](#packagesrestorepackageversionforauthenticateduser) - Restore a package version for the authenticated user
* [PackagesRestorePackageVersionForOrg](#packagesrestorepackageversionfororg) - Restore package version for an organization
* [PackagesRestorePackageVersionForUser](#packagesrestorepackageversionforuser) - Restore package version for a user

## PackagesDeletePackageForAuthenticatedUser

Deletes a package owned by the authenticated user. You cannot delete a public package if any version of the package has more than 5,000 downloads. In this scenario, contact GitHub support for further assistance.

To use this endpoint, you must authenticate using an access token with the `read:packages` and `delete:packages` scopes.
If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

API method documentation
<https://docs.github.com/rest/reference/packages#delete-a-package-for-the-authenticated-user>

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
    res, err := s.Packages.PackagesDeletePackageForAuthenticatedUser(ctx, operations.PackagesDeletePackageForAuthenticatedUserRequest{
        PackageName: "sunt",
        PackageType: shared.PackageTypeEnumContainer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PackagesDeletePackageForOrg

Deletes an entire package in an organization. You cannot delete a public package if any version of the package has more than 5,000 downloads. In this scenario, contact GitHub support for further assistance.

To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `read:packages` and `delete:packages` scopes. In addition:
- If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
- If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package you want to delete. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."

API method documentation
<https://docs.github.com/rest/reference/packages#delete-a-package-for-an-organization>

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
    res, err := s.Packages.PackagesDeletePackageForOrg(ctx, operations.PackagesDeletePackageForOrgRequest{
        Org: "dolor",
        PackageName: "occaecati",
        PackageType: shared.PackageTypeEnumDocker,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PackagesDeletePackageForUser

Deletes an entire package for a user. You cannot delete a public package if any version of the package has more than 5,000 downloads. In this scenario, contact GitHub support for further assistance.

To use this endpoint, you must authenticate using an access token with the `read:packages` and `delete:packages` scopes. In addition:
- If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
- If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package you want to delete. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."

API method documentation
<https://docs.github.com/rest/reference/packages#delete-a-package-for-a-user>

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
    res, err := s.Packages.PackagesDeletePackageForUser(ctx, operations.PackagesDeletePackageForUserRequest{
        PackageName: "beatae",
        PackageType: shared.PackageTypeEnumContainer,
        Username: "Eduardo.Schinner",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PackagesDeletePackageVersionForAuthenticatedUser

Deletes a specific package version for a package owned by the authenticated user.  If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.

To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `read:packages` and `delete:packages` scopes.
If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

API method documentation
<https://docs.github.com/rest/reference/packages#delete-a-package-version-for-the-authenticated-user>

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
    res, err := s.Packages.PackagesDeletePackageVersionForAuthenticatedUser(ctx, operations.PackagesDeletePackageVersionForAuthenticatedUserRequest{
        PackageName: "perferendis",
        PackageType: shared.PackageTypeEnumNuget,
        PackageVersionID: 411615,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PackagesDeletePackageVersionForOrg

Deletes a specific package version in an organization. If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.

To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `read:packages` and `delete:packages` scopes. In addition:
- If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
- If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package whose version you want to delete. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."

API method documentation
<https://docs.github.com/rest/reference/packages#delete-a-package-version-for-an-organization>

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
    res, err := s.Packages.PackagesDeletePackageVersionForOrg(ctx, operations.PackagesDeletePackageVersionForOrgRequest{
        Org: "aperiam",
        PackageName: "dignissimos",
        PackageType: shared.PackageTypeEnumContainer,
        PackageVersionID: 243678,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PackagesDeletePackageVersionForUser

Deletes a specific package version for a user. If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.

To use this endpoint, you must authenticate using an access token with the `read:packages` and `delete:packages` scopes. In addition:
- If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
- If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package whose version you want to delete. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."

API method documentation
<https://docs.github.com/rest/reference/packages#delete-a-package-version-for-a-user>

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
    res, err := s.Packages.PackagesDeletePackageVersionForUser(ctx, operations.PackagesDeletePackageVersionForUserRequest{
        PackageName: "porro",
        PackageType: shared.PackageTypeEnumDocker,
        PackageVersionID: 231382,
        Username: "Nichole74",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUser

Lists package versions for a package owned by the authenticated user.

To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

API method documentation
<https://docs.github.com/rest/packages#get-all-package-versions-for-a-package-owned-by-the-authenticated-user>

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
    res, err := s.Packages.PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUser(ctx, operations.PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserRequest{
        PackageName: "natus",
        PackageType: shared.PackageTypeEnumContainer,
        Page: sdk.Int64(639622),
        PerPage: sdk.Int64(228857),
        State: operations.PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserStateEnumDeleted.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PackageVersions != nil {
        // handle response
    }
}
```

## PackagesGetAllPackageVersionsForPackageOwnedByOrg

Lists package versions for a package owned by an organization.

If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

API method documentation
<https://docs.github.com/rest/packages#get-all-package-versions-for-a-package-owned-by-an-organization>

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
    res, err := s.Packages.PackagesGetAllPackageVersionsForPackageOwnedByOrg(ctx, operations.PackagesGetAllPackageVersionsForPackageOwnedByOrgRequest{
        Org: "aspernatur",
        PackageName: "quo",
        PackageType: shared.PackageTypeEnumContainer,
        Page: sdk.Int64(848346),
        PerPage: sdk.Int64(670762),
        State: operations.PackagesGetAllPackageVersionsForPackageOwnedByOrgStateEnumActive.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PackageVersions != nil {
        // handle response
    }
}
```

## PackagesGetAllPackageVersionsForPackageOwnedByUser

Lists package versions for a public package owned by a specified user.

To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

API method documentation
<https://docs.github.com/rest/packages#get-all-package-versions-for-a-package-owned-by-a-user>

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
    res, err := s.Packages.PackagesGetAllPackageVersionsForPackageOwnedByUser(ctx, operations.PackagesGetAllPackageVersionsForPackageOwnedByUserRequest{
        PackageName: "vero",
        PackageType: shared.PackageTypeEnumMaven,
        Username: "Darius12",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PackageVersions != nil {
        // handle response
    }
}
```

## PackagesGetPackageForAuthenticatedUser

Gets a specific package for a package owned by the authenticated user.

To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

API method documentation
<https://docs.github.com/rest/reference/packages#get-a-package-for-the-authenticated-user>

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
    res, err := s.Packages.PackagesGetPackageForAuthenticatedUser(ctx, operations.PackagesGetPackageForAuthenticatedUserRequest{
        PackageName: "exercitationem",
        PackageType: shared.PackageTypeEnumRubygems,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Package != nil {
        // handle response
    }
}
```

## PackagesGetPackageForOrganization

Gets a specific package in an organization.

To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

API method documentation
<https://docs.github.com/rest/reference/packages#get-a-package-for-an-organization>

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
    res, err := s.Packages.PackagesGetPackageForOrganization(ctx, operations.PackagesGetPackageForOrganizationRequest{
        Org: "non",
        PackageName: "ab",
        PackageType: shared.PackageTypeEnumNpm,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Package != nil {
        // handle response
    }
}
```

## PackagesGetPackageForUser

Gets a specific package metadata for a public package owned by a user.

To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

API method documentation
<https://docs.github.com/rest/reference/packages#get-a-package-for-a-user>

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
    res, err := s.Packages.PackagesGetPackageForUser(ctx, operations.PackagesGetPackageForUserRequest{
        PackageName: "hic",
        PackageType: shared.PackageTypeEnumDocker,
        Username: "Violette.Friesen34",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Package != nil {
        // handle response
    }
}
```

## PackagesGetPackageVersionForAuthenticatedUser

Gets a specific package version for a package owned by the authenticated user.

To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

API method documentation
<https://docs.github.com/rest/reference/packages#get-a-package-version-for-the-authenticated-user>

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
    res, err := s.Packages.PackagesGetPackageVersionForAuthenticatedUser(ctx, operations.PackagesGetPackageVersionForAuthenticatedUserRequest{
        PackageName: "labore",
        PackageType: shared.PackageTypeEnumMaven,
        PackageVersionID: 921193,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PackageVersion != nil {
        // handle response
    }
}
```

## PackagesGetPackageVersionForOrganization

Gets a specific package version in an organization.

You must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

API method documentation
<https://docs.github.com/rest/reference/packages#get-a-package-version-for-an-organization>

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
    res, err := s.Packages.PackagesGetPackageVersionForOrganization(ctx, operations.PackagesGetPackageVersionForOrganizationRequest{
        Org: "modi",
        PackageName: "in",
        PackageType: shared.PackageTypeEnumNpm,
        PackageVersionID: 879857,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PackageVersion != nil {
        // handle response
    }
}
```

## PackagesGetPackageVersionForUser

Gets a specific package version for a public package owned by a specified user.

At this time, to use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

API method documentation
<https://docs.github.com/rest/reference/packages#get-a-package-version-for-a-user>

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
    res, err := s.Packages.PackagesGetPackageVersionForUser(ctx, operations.PackagesGetPackageVersionForUserRequest{
        PackageName: "rem",
        PackageType: shared.PackageTypeEnumNpm,
        PackageVersionID: 141817,
        Username: "Kailey_Halvorson",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PackageVersion != nil {
        // handle response
    }
}
```

## PackagesListPackagesForAuthenticatedUser

Lists packages owned by the authenticated user within the user's namespace.

To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

API method documentation
<https://docs.github.com/rest/reference/packages#list-packages-for-the-authenticated-user>

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
    res, err := s.Packages.PackagesListPackagesForAuthenticatedUser(ctx, operations.PackagesListPackagesForAuthenticatedUserRequest{
        PackageType: operations.PackagesListPackagesForAuthenticatedUserPackageTypeEnumMaven,
        Visibility: shared.PackageVisibilityEnumInternal.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Packages != nil {
        // handle response
    }
}
```

## PackagesListPackagesForOrganization

Lists packages in an organization readable by the user.

To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

API method documentation
<https://docs.github.com/rest/reference/packages#list-packages-for-an-organization>

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
    res, err := s.Packages.PackagesListPackagesForOrganization(ctx, operations.PackagesListPackagesForOrganizationRequest{
        Org: "magnam",
        PackageType: operations.PackagesListPackagesForOrganizationPackageTypeEnumNpm,
        Page: sdk.Int64(266788),
        PerPage: sdk.Int64(430116),
        Visibility: shared.PackageVisibilityEnumPublic.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Packages != nil {
        // handle response
    }
}
```

## PackagesListPackagesForUser

Lists all packages in a user's namespace for which the requesting user has access.

To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

API method documentation
<https://docs.github.com/rest/reference/packages#list-packages-for-user>

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
    res, err := s.Packages.PackagesListPackagesForUser(ctx, operations.PackagesListPackagesForUserRequest{
        PackageType: operations.PackagesListPackagesForUserPackageTypeEnumDocker,
        Username: "Jeramy.Stehr",
        Visibility: shared.PackageVisibilityEnumPublic.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Packages != nil {
        // handle response
    }
}
```

## PackagesRestorePackageForAuthenticatedUser

Restores a package owned by the authenticated user.

You can restore a deleted package under the following conditions:
  - The package was deleted within the last 30 days.
  - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.

To use this endpoint, you must authenticate using an access token with the `read:packages` and `write:packages` scopes. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

API method documentation
<https://docs.github.com/rest/reference/packages#restore-a-package-for-the-authenticated-user>

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
    res, err := s.Packages.PackagesRestorePackageForAuthenticatedUser(ctx, operations.PackagesRestorePackageForAuthenticatedUserRequest{
        PackageName: "reiciendis",
        PackageType: shared.PackageTypeEnumNpm,
        Token: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PackagesRestorePackageForOrg

Restores an entire package in an organization.

You can restore a deleted package under the following conditions:
  - The package was deleted within the last 30 days.
  - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.

To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `read:packages` and `write:packages` scopes. In addition:
- If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
- If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package you want to restore. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."

API method documentation
<https://docs.github.com/rest/reference/packages#restore-a-package-for-an-organization>

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
    res, err := s.Packages.PackagesRestorePackageForOrg(ctx, operations.PackagesRestorePackageForOrgRequest{
        Org: "aut",
        PackageName: "aut",
        PackageType: shared.PackageTypeEnumContainer,
        Token: sdk.String("odio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PackagesRestorePackageForUser

Restores an entire package for a user.

You can restore a deleted package under the following conditions:
  - The package was deleted within the last 30 days.
  - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.

To use this endpoint, you must authenticate using an access token with the `read:packages` and `write:packages` scopes. In addition:
- If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
- If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package you want to restore. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."

API method documentation
<https://docs.github.com/rest/reference/packages#restore-a-package-for-a-user>

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
    res, err := s.Packages.PackagesRestorePackageForUser(ctx, operations.PackagesRestorePackageForUserRequest{
        PackageName: "commodi",
        PackageType: shared.PackageTypeEnumMaven,
        Token: sdk.String("dolorum"),
        Username: "Reta20",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PackagesRestorePackageVersionForAuthenticatedUser

Restores a package version owned by the authenticated user.

You can restore a deleted package version under the following conditions:
  - The package was deleted within the last 30 days.
  - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.

To use this endpoint, you must authenticate using an access token with the `read:packages` and `write:packages` scopes. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

API method documentation
<https://docs.github.com/rest/reference/packages#restore-a-package-version-for-the-authenticated-user>

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
    res, err := s.Packages.PackagesRestorePackageVersionForAuthenticatedUser(ctx, operations.PackagesRestorePackageVersionForAuthenticatedUserRequest{
        PackageName: "quaerat",
        PackageType: shared.PackageTypeEnumContainer,
        PackageVersionID: 791228,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PackagesRestorePackageVersionForOrg

Restores a specific package version in an organization.

You can restore a deleted package under the following conditions:
  - The package was deleted within the last 30 days.
  - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.

To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `read:packages` and `write:packages` scopes. In addition:
- If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
- If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package whose version you want to restore. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."

API method documentation
<https://docs.github.com/rest/reference/packages#restore-a-package-version-for-an-organization>

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
    res, err := s.Packages.PackagesRestorePackageVersionForOrg(ctx, operations.PackagesRestorePackageVersionForOrgRequest{
        Org: "sunt",
        PackageName: "distinctio",
        PackageType: shared.PackageTypeEnumRubygems,
        PackageVersionID: 558051,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PackagesRestorePackageVersionForUser

Restores a specific package version for a user.

You can restore a deleted package under the following conditions:
  - The package was deleted within the last 30 days.
  - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.

To use this endpoint, you must authenticate using an access token with the `read:packages` and `write:packages` scopes. In addition:
- If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
- If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package whose version you want to restore. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."

API method documentation
<https://docs.github.com/rest/reference/packages#restore-a-package-version-for-a-user>

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
    res, err := s.Packages.PackagesRestorePackageVersionForUser(ctx, operations.PackagesRestorePackageVersionForUserRequest{
        PackageName: "et",
        PackageType: shared.PackageTypeEnumNuget,
        PackageVersionID: 229276,
        Username: "Heather52",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
