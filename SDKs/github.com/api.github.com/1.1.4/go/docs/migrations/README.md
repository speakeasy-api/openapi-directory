# Migrations

## Overview

Move projects to or from GitHub.

### Available Operations

* [MigrationsCancelImport](#migrationscancelimport) - Cancel an import
* [MigrationsDeleteArchiveForAuthenticatedUser](#migrationsdeletearchiveforauthenticateduser) - Delete a user migration archive
* [MigrationsDeleteArchiveForOrg](#migrationsdeletearchivefororg) - Delete an organization migration archive
* [MigrationsDownloadArchiveForOrg](#migrationsdownloadarchivefororg) - Download an organization migration archive
* [MigrationsGetArchiveForAuthenticatedUser](#migrationsgetarchiveforauthenticateduser) - Download a user migration archive
* [MigrationsGetCommitAuthors](#migrationsgetcommitauthors) - Get commit authors
* [MigrationsGetImportStatus](#migrationsgetimportstatus) - Get an import status
* [MigrationsGetLargeFiles](#migrationsgetlargefiles) - Get large files
* [MigrationsGetStatusForAuthenticatedUser](#migrationsgetstatusforauthenticateduser) - Get a user migration status
* [MigrationsGetStatusForOrg](#migrationsgetstatusfororg) - Get an organization migration status
* [MigrationsListForAuthenticatedUser](#migrationslistforauthenticateduser) - List user migrations
* [MigrationsListForOrg](#migrationslistfororg) - List organization migrations
* [MigrationsListReposForAuthenticatedUser](#migrationslistreposforauthenticateduser) - List repositories for a user migration
* [MigrationsListReposForOrg](#migrationslistreposfororg) - List repositories in an organization migration
* [MigrationsMapCommitAuthor](#migrationsmapcommitauthor) - Map a commit author
* [MigrationsSetLfsPreference](#migrationssetlfspreference) - Update Git LFS preference
* [MigrationsStartForAuthenticatedUser](#migrationsstartforauthenticateduser) - Start a user migration
* [MigrationsStartForOrg](#migrationsstartfororg) - Start an organization migration
* [MigrationsStartImport](#migrationsstartimport) - Start an import
* [MigrationsUnlockRepoForAuthenticatedUser](#migrationsunlockrepoforauthenticateduser) - Unlock a user repository
* [MigrationsUnlockRepoForOrg](#migrationsunlockrepofororg) - Unlock an organization repository
* [MigrationsUpdateImport](#migrationsupdateimport) - Update an import

## MigrationsCancelImport

Stop an import for a repository.

API method documentation
<https://docs.github.com/rest/migrations/source-imports#cancel-an-import>

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
    res, err := s.Migrations.MigrationsCancelImport(ctx, operations.MigrationsCancelImportRequest{
        Owner: "fugit",
        Repo: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MigrationsDeleteArchiveForAuthenticatedUser

Deletes a previous migration archive. Downloadable migration archives are automatically deleted after seven days. Migration metadata, which is returned in the [List user migrations](https://docs.github.com/rest/migrations/users#list-user-migrations) and [Get a user migration status](https://docs.github.com/rest/migrations/users#get-a-user-migration-status) endpoints, will continue to be available even after an archive is deleted.

API method documentation
<https://docs.github.com/rest/migrations/users#delete-a-user-migration-archive>

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
    res, err := s.Migrations.MigrationsDeleteArchiveForAuthenticatedUser(ctx, operations.MigrationsDeleteArchiveForAuthenticatedUserRequest{
        MigrationID: 256916,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MigrationsDeleteArchiveForOrg

Deletes a previous migration archive. Migration archives are automatically deleted after seven days.

API method documentation
<https://docs.github.com/rest/migrations/orgs#delete-an-organization-migration-archive>

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
    res, err := s.Migrations.MigrationsDeleteArchiveForOrg(ctx, operations.MigrationsDeleteArchiveForOrgRequest{
        MigrationID: 201010,
        Org: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MigrationsDownloadArchiveForOrg

Fetches the URL to a migration archive.

API method documentation
<https://docs.github.com/rest/migrations/orgs#download-an-organization-migration-archive>

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
    res, err := s.Migrations.MigrationsDownloadArchiveForOrg(ctx, operations.MigrationsDownloadArchiveForOrgRequest{
        MigrationID: 637856,
        Org: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MigrationsGetArchiveForAuthenticatedUser

Fetches the URL to download the migration archive as a `tar.gz` file. Depending on the resources your repository uses, the migration archive can contain JSON files with data for these objects:

*   attachments
*   bases
*   commit\_comments
*   issue\_comments
*   issue\_events
*   issues
*   milestones
*   organizations
*   projects
*   protected\_branches
*   pull\_request\_reviews
*   pull\_requests
*   releases
*   repositories
*   review\_comments
*   schema
*   users

The archive will also contain an `attachments` directory that includes all attachment files uploaded to GitHub.com and a `repositories` directory that contains the repository's Git data.

API method documentation
<https://docs.github.com/rest/migrations/users#download-a-user-migration-archive>

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
    res, err := s.Migrations.MigrationsGetArchiveForAuthenticatedUser(ctx, operations.MigrationsGetArchiveForAuthenticatedUserRequest{
        MigrationID: 760744,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MigrationsGetCommitAuthors

Each type of source control system represents authors in a different way. For example, a Git commit author has a display name and an email address, but a Subversion commit author just has a username. The GitHub Importer will make the author information valid, but the author might not be correct. For example, it will change the bare Subversion username `hubot` into something like `hubot <hubot@12341234-abab-fefe-8787-fedcba987654>`.

This endpoint and the [Map a commit author](https://docs.github.com/rest/migrations/source-imports#map-a-commit-author) endpoint allow you to provide correct Git author information.

API method documentation
<https://docs.github.com/rest/migrations/source-imports#get-commit-authors>

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
    res, err := s.Migrations.MigrationsGetCommitAuthors(ctx, operations.MigrationsGetCommitAuthorsRequest{
        Owner: "necessitatibus",
        Repo: "corporis",
        Since: sdk.Int64(185518),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PorterAuthors != nil {
        // handle response
    }
}
```

## MigrationsGetImportStatus

View the progress of an import.

**Import status**

This section includes details about the possible values of the `status` field of the Import Progress response.

An import that does not have errors will progress through these steps:

*   `detecting` - the "detection" step of the import is in progress because the request did not include a `vcs` parameter. The import is identifying the type of source control present at the URL.
*   `importing` - the "raw" step of the import is in progress. This is where commit data is fetched from the original repository. The import progress response will include `commit_count` (the total number of raw commits that will be imported) and `percent` (0 - 100, the current progress through the import).
*   `mapping` - the "rewrite" step of the import is in progress. This is where SVN branches are converted to Git branches, and where author updates are applied. The import progress response does not include progress information.
*   `pushing` - the "push" step of the import is in progress. This is where the importer updates the repository on GitHub. The import progress response will include `push_percent`, which is the percent value reported by `git push` when it is "Writing objects".
*   `complete` - the import is complete, and the repository is ready on GitHub.

If there are problems, you will see one of these in the `status` field:

*   `auth_failed` - the import requires authentication in order to connect to the original repository. To update authentication for the import, please see the [Update an import](https://docs.github.com/rest/migrations/source-imports#update-an-import) section.
*   `error` - the import encountered an error. The import progress response will include the `failed_step` and an error message. Contact [GitHub Support](https://support.github.com/contact?tags=dotcom-rest-api) for more information.
*   `detection_needs_auth` - the importer requires authentication for the originating repository to continue detection. To update authentication for the import, please see the [Update an import](https://docs.github.com/rest/migrations/source-imports#update-an-import) section.
*   `detection_found_nothing` - the importer didn't recognize any source control at the URL. To resolve, [Cancel the import](https://docs.github.com/rest/migrations/source-imports#cancel-an-import) and [retry](https://docs.github.com/rest/migrations/source-imports#start-an-import) with the correct URL.
*   `detection_found_multiple` - the importer found several projects or repositories at the provided URL. When this is the case, the Import Progress response will also include a `project_choices` field with the possible project choices as values. To update project choice, please see the [Update an import](https://docs.github.com/rest/migrations/source-imports#update-an-import) section.

**The project_choices field**

When multiple projects are found at the provided URL, the response hash will include a `project_choices` field, the value of which is an array of hashes each representing a project choice. The exact key/value pairs of the project hashes will differ depending on the version control type.

**Git LFS related fields**

This section includes details about Git LFS related fields that may be present in the Import Progress response.

*   `use_lfs` - describes whether the import has been opted in or out of using Git LFS. The value can be `opt_in`, `opt_out`, or `undecided` if no action has been taken.
*   `has_large_files` - the boolean value describing whether files larger than 100MB were found during the `importing` step.
*   `large_files_size` - the total size in gigabytes of files larger than 100MB found in the originating repository.
*   `large_files_count` - the total number of files larger than 100MB found in the originating repository. To see a list of these files, make a "Get Large Files" request.

API method documentation
<https://docs.github.com/rest/migrations/source-imports#get-an-import-status>

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
    res, err := s.Migrations.MigrationsGetImportStatus(ctx, operations.MigrationsGetImportStatusRequest{
        Owner: "expedita",
        Repo: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Import != nil {
        // handle response
    }
}
```

## MigrationsGetLargeFiles

List files larger than 100MB found during the import

API method documentation
<https://docs.github.com/rest/migrations/source-imports#get-large-files>

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
    res, err := s.Migrations.MigrationsGetLargeFiles(ctx, operations.MigrationsGetLargeFilesRequest{
        Owner: "cupiditate",
        Repo: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PorterLargeFiles != nil {
        // handle response
    }
}
```

## MigrationsGetStatusForAuthenticatedUser

Fetches a single user migration. The response includes the `state` of the migration, which can be one of the following values:

*   `pending` - the migration hasn't started yet.
*   `exporting` - the migration is in progress.
*   `exported` - the migration finished successfully.
*   `failed` - the migration failed.

Once the migration has been `exported` you can [download the migration archive](https://docs.github.com/rest/migrations/users#download-a-user-migration-archive).

API method documentation
<https://docs.github.com/rest/migrations/users#get-a-user-migration-status>

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
    res, err := s.Migrations.MigrationsGetStatusForAuthenticatedUser(ctx, operations.MigrationsGetStatusForAuthenticatedUserRequest{
        Exclude: []string{
            "enim",
            "neque",
            "in",
            "minus",
        },
        MigrationID: 433077,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Migration != nil {
        // handle response
    }
}
```

## MigrationsGetStatusForOrg

Fetches the status of a migration.

The `state` of a migration can be one of the following values:

*   `pending`, which means the migration hasn't started yet.
*   `exporting`, which means the migration is in progress.
*   `exported`, which means the migration finished successfully.
*   `failed`, which means the migration failed.

API method documentation
<https://docs.github.com/rest/migrations/orgs#get-an-organization-migration-status>

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
    res, err := s.Migrations.MigrationsGetStatusForOrg(ctx, operations.MigrationsGetStatusForOrgRequest{
        Exclude: []MigrationsGetStatusForOrgExcludeEnum{
            operations.MigrationsGetStatusForOrgExcludeEnumRepositories,
            operations.MigrationsGetStatusForOrgExcludeEnumRepositories,
        },
        MigrationID: 357347,
        Org: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Migration != nil {
        // handle response
    }
}
```

## MigrationsListForAuthenticatedUser

Lists all migrations a user has started.

API method documentation
<https://docs.github.com/rest/migrations/users#list-user-migrations>

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
    res, err := s.Migrations.MigrationsListForAuthenticatedUser(ctx, operations.MigrationsListForAuthenticatedUserRequest{
        Page: sdk.Int64(914971),
        PerPage: sdk.Int64(978173),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Migrations != nil {
        // handle response
    }
}
```

## MigrationsListForOrg

Lists the most recent migrations, including both exports (which can be started through the REST API) and imports (which cannot be started using the REST API).

A list of `repositories` is only returned for export migrations.

API method documentation
<https://docs.github.com/rest/migrations/orgs#list-organization-migrations>

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
    res, err := s.Migrations.MigrationsListForOrg(ctx, operations.MigrationsListForOrgRequest{
        Exclude: []MigrationsListForOrgExcludeEnum{
            operations.MigrationsListForOrgExcludeEnumRepositories,
            operations.MigrationsListForOrgExcludeEnumRepositories,
            operations.MigrationsListForOrgExcludeEnumRepositories,
        },
        Org: "aperiam",
        Page: sdk.Int64(727547),
        PerPage: sdk.Int64(189753),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Migrations != nil {
        // handle response
    }
}
```

## MigrationsListReposForAuthenticatedUser

Lists all the repositories for this user migration.

API method documentation
<https://docs.github.com/rest/migrations/users#list-repositories-for-a-user-migration>

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
    res, err := s.Migrations.MigrationsListReposForAuthenticatedUser(ctx, operations.MigrationsListReposForAuthenticatedUserRequest{
        MigrationID: 289913,
        Page: sdk.Int64(520875),
        PerPage: sdk.Int64(577709),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MinimalRepositories != nil {
        // handle response
    }
}
```

## MigrationsListReposForOrg

List all the repositories for this organization migration.

API method documentation
<https://docs.github.com/rest/migrations/orgs#list-repositories-in-an-organization-migration>

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
    res, err := s.Migrations.MigrationsListReposForOrg(ctx, operations.MigrationsListReposForOrgRequest{
        MigrationID: 375994,
        Org: "quo",
        Page: sdk.Int64(242099),
        PerPage: sdk.Int64(795591),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MinimalRepositories != nil {
        // handle response
    }
}
```

## MigrationsMapCommitAuthor

Update an author's identity for the import. Your application can continue updating authors any time before you push new commits to the repository.

API method documentation
<https://docs.github.com/rest/migrations/source-imports#map-a-commit-author>

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
    res, err := s.Migrations.MigrationsMapCommitAuthor(ctx, operations.MigrationsMapCommitAuthorRequest{
        RequestBody: &operations.MigrationsMapCommitAuthorRequestBody{
            Email: sdk.String("Evie_Ortiz73@hotmail.com"),
            Name: sdk.String("Fred Zieme"),
        },
        AuthorID: 441321,
        Owner: "aperiam",
        Repo: "odio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PorterAuthor != nil {
        // handle response
    }
}
```

## MigrationsSetLfsPreference

You can import repositories from Subversion, Mercurial, and TFS that include files larger than 100MB. This ability is powered by [Git LFS](https://git-lfs.com). You can learn more about our LFS feature and working with large files [on our help site](https://docs.github.com/repositories/working-with-files/managing-large-files).

API method documentation
<https://docs.github.com/rest/migrations/source-imports#update-git-lfs-preference>

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
    res, err := s.Migrations.MigrationsSetLfsPreference(ctx, operations.MigrationsSetLfsPreferenceRequest{
        RequestBody: operations.MigrationsSetLfsPreferenceRequestBody{
            UseLfs: operations.MigrationsSetLfsPreferenceRequestBodyUseLfsEnumOptIn,
        },
        Owner: "in",
        Repo: "ducimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Import != nil {
        // handle response
    }
}
```

## MigrationsStartForAuthenticatedUser

Initiates the generation of a user migration archive.

API method documentation
<https://docs.github.com/rest/migrations/users#start-a-user-migration>

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
    res, err := s.Migrations.MigrationsStartForAuthenticatedUser(ctx, operations.MigrationsStartForAuthenticatedUserRequestBody{
        Exclude: []MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum{
            operations.MigrationsStartForAuthenticatedUserRequestBodyExcludeEnumRepositories,
            operations.MigrationsStartForAuthenticatedUserRequestBodyExcludeEnumRepositories,
            operations.MigrationsStartForAuthenticatedUserRequestBodyExcludeEnumRepositories,
        },
        ExcludeAttachments: sdk.Bool(true),
        ExcludeGitData: sdk.Bool(true),
        ExcludeMetadata: sdk.Bool(true),
        ExcludeOwnerProjects: sdk.Bool(true),
        ExcludeReleases: sdk.Bool(true),
        LockRepositories: sdk.Bool(true),
        OrgMetadataOnly: sdk.Bool(true),
        Repositories: []string{
            "acme/widgets",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Migration != nil {
        // handle response
    }
}
```

## MigrationsStartForOrg

Initiates the generation of a migration archive.

API method documentation
<https://docs.github.com/rest/migrations/orgs#start-an-organization-migration>

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
    res, err := s.Migrations.MigrationsStartForOrg(ctx, operations.MigrationsStartForOrgRequest{
        RequestBody: operations.MigrationsStartForOrgRequestBody{
            Exclude: []MigrationsStartForOrgRequestBodyExcludeEnum{
                operations.MigrationsStartForOrgRequestBodyExcludeEnumRepositories,
                operations.MigrationsStartForOrgRequestBodyExcludeEnumRepositories,
                operations.MigrationsStartForOrgRequestBodyExcludeEnumRepositories,
            },
            ExcludeAttachments: sdk.Bool(true),
            ExcludeGitData: sdk.Bool(false),
            ExcludeMetadata: sdk.Bool(false),
            ExcludeOwnerProjects: sdk.Bool(true),
            ExcludeReleases: sdk.Bool(true),
            LockRepositories: sdk.Bool(true),
            OrgMetadataOnly: sdk.Bool(true),
            Repositories: []string{
                "ducimus",
            },
        },
        Org: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Migration != nil {
        // handle response
    }
}
```

## MigrationsStartImport

Start a source import to a GitHub repository using GitHub Importer. Importing into a GitHub repository with GitHub Actions enabled is not supported and will return a status `422 Unprocessable Entity` response.

API method documentation
<https://docs.github.com/rest/migrations/source-imports#start-an-import>

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
    res, err := s.Migrations.MigrationsStartImport(ctx, operations.MigrationsStartImportRequest{
        RequestBody: operations.MigrationsStartImportRequestBody{
            TfvcProject: sdk.String("pariatur"),
            Vcs: operations.MigrationsStartImportRequestBodyVcsEnumTfvc.ToPointer(),
            VcsPassword: sdk.String("similique"),
            VcsURL: "optio",
            VcsUsername: sdk.String("ex"),
        },
        Owner: "quaerat",
        Repo: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Import != nil {
        // handle response
    }
}
```

## MigrationsUnlockRepoForAuthenticatedUser

Unlocks a repository. You can lock repositories when you [start a user migration](https://docs.github.com/rest/migrations/users#start-a-user-migration). Once the migration is complete you can unlock each repository to begin using it again or [delete the repository](https://docs.github.com/rest/repos/repos#delete-a-repository) if you no longer need the source data. Returns a status of `404 Not Found` if the repository is not locked.

API method documentation
<https://docs.github.com/rest/migrations/users#unlock-a-user-repository>

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
    res, err := s.Migrations.MigrationsUnlockRepoForAuthenticatedUser(ctx, operations.MigrationsUnlockRepoForAuthenticatedUserRequest{
        MigrationID: 888616,
        RepoName: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MigrationsUnlockRepoForOrg

Unlocks a repository that was locked for migration. You should unlock each migrated repository and [delete them](https://docs.github.com/rest/repos/repos#delete-a-repository) when the migration is complete and you no longer need the source data.

API method documentation
<https://docs.github.com/rest/migrations/orgs#unlock-an-organization-repository>

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
    res, err := s.Migrations.MigrationsUnlockRepoForOrg(ctx, operations.MigrationsUnlockRepoForOrgRequest{
        MigrationID: 697274,
        Org: "exercitationem",
        RepoName: "quam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MigrationsUpdateImport

An import can be updated with credentials or a project choice by passing in the appropriate parameters in this API
request. If no parameters are provided, the import will be restarted.

Some servers (e.g. TFS servers) can have several projects at a single URL. In those cases the import progress will
have the status `detection_found_multiple` and the Import Progress response will include a `project_choices` array.
You can select the project to import by providing one of the objects in the `project_choices` array in the update request.

API method documentation
<https://docs.github.com/rest/migrations/source-imports#update-an-import>

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
    res, err := s.Migrations.MigrationsUpdateImport(ctx, operations.MigrationsUpdateImportRequest{
        RequestBody: &operations.MigrationsUpdateImportRequestBody{
            TfvcProject: sdk.String(""project1""),
            Vcs: operations.MigrationsUpdateImportRequestBodyVcsEnumSubversion.ToPointer(),
            VcsPassword: sdk.String("modi"),
            VcsUsername: sdk.String("ipsa"),
        },
        Owner: "sint",
        Repo: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Import != nil {
        // handle response
    }
}
```
