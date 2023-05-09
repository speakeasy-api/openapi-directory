# Repos

## Overview

Interact with GitHub Repos.

### Available Operations

* [ReposAcceptInvitationForAuthenticatedUser](#reposacceptinvitationforauthenticateduser) - Accept a repository invitation
* [ReposAddAppAccessRestrictions](#reposaddappaccessrestrictions) - Add app access restrictions
* [ReposAddCollaborator](#reposaddcollaborator) - Add a repository collaborator
* [ReposAddStatusCheckContexts](#reposaddstatuscheckcontexts) - Add status check contexts
* [ReposAddTeamAccessRestrictions](#reposaddteamaccessrestrictions) - Add team access restrictions
* [ReposAddUserAccessRestrictions](#reposadduseraccessrestrictions) - Add user access restrictions
* [ReposCheckCollaborator](#reposcheckcollaborator) - Check if a user is a repository collaborator
* [ReposCompareCommits](#reposcomparecommits) - Compare two commits
* [ReposCreateCommitComment](#reposcreatecommitcomment) - Create a commit comment
* [ReposCreateCommitSignatureProtection](#reposcreatecommitsignatureprotection) - Create commit signature protection
* [ReposCreateCommitStatus](#reposcreatecommitstatus) - Create a commit status
* [ReposCreateDeployKey](#reposcreatedeploykey) - Create a deploy key
* [ReposCreateDeployment](#reposcreatedeployment) - Create a deployment
* [ReposCreateDeploymentStatus](#reposcreatedeploymentstatus) - Create a deployment status
* [ReposCreateDispatchEvent](#reposcreatedispatchevent) - Create a repository dispatch event
* [ReposCreateForAuthenticatedUser](#reposcreateforauthenticateduser) - Create a repository for the authenticated user
* [ReposCreateFork](#reposcreatefork) - Create a fork
* [ReposCreateInOrg](#reposcreateinorg) - Create an organization repository
* [ReposCreateOrUpdateFileContents](#reposcreateorupdatefilecontents) - Create or update file contents
* [ReposCreatePagesSite](#reposcreatepagessite) - Create a GitHub Enterprise Server Pages site
* [ReposCreateRelease](#reposcreaterelease) - Create a release
* [ReposCreateUsingTemplate](#reposcreateusingtemplate) - Create a repository using a template
* [ReposCreateWebhook](#reposcreatewebhook) - Create a repository webhook
* [ReposDeclineInvitationForAuthenticatedUser](#reposdeclineinvitationforauthenticateduser) - Decline a repository invitation
* [ReposDelete](#reposdelete) - Delete a repository
* [ReposDeleteAccessRestrictions](#reposdeleteaccessrestrictions) - Delete access restrictions
* [ReposDeleteAdminBranchProtection](#reposdeleteadminbranchprotection) - Delete admin branch protection
* [ReposDeleteBranchProtection](#reposdeletebranchprotection) - Delete branch protection
* [ReposDeleteCommitComment](#reposdeletecommitcomment) - Delete a commit comment
* [ReposDeleteCommitSignatureProtection](#reposdeletecommitsignatureprotection) - Delete commit signature protection
* [ReposDeleteDeployKey](#reposdeletedeploykey) - Delete a deploy key
* [ReposDeleteDeployment](#reposdeletedeployment) - Delete a deployment
* [ReposDeleteFile](#reposdeletefile) - Delete a file
* [ReposDeleteInvitation](#reposdeleteinvitation) - Delete a repository invitation
* [ReposDeletePagesSite](#reposdeletepagessite) - Delete a GitHub Enterprise Server Pages site
* [ReposDeletePullRequestReviewProtection](#reposdeletepullrequestreviewprotection) - Delete pull request review protection
* [ReposDeleteRelease](#reposdeleterelease) - Delete a release
* [ReposDeleteReleaseAsset](#reposdeletereleaseasset) - Delete a release asset
* [ReposDeleteWebhook](#reposdeletewebhook) - Delete a repository webhook
* [ReposDownloadTarballArchive](#reposdownloadtarballarchive) - Download a repository archive (tar)
* [ReposDownloadZipballArchive](#reposdownloadzipballarchive) - Download a repository archive (zip)
* [ReposGet](#reposget) - Get a repository
* [ReposGetAccessRestrictions](#reposgetaccessrestrictions) - Get access restrictions
* [ReposGetAdminBranchProtection](#reposgetadminbranchprotection) - Get admin branch protection
* [ReposGetAllStatusCheckContexts](#reposgetallstatuscheckcontexts) - Get all status check contexts
* [ReposGetAllTopics](#reposgetalltopics) - Get all repository topics
* [ReposGetAppsWithAccessToProtectedBranch](#reposgetappswithaccesstoprotectedbranch) - Get apps with access to the protected branch
* [ReposGetBranch](#reposgetbranch) - Get a branch
* [ReposGetBranchProtection](#reposgetbranchprotection) - Get branch protection
* [ReposGetCodeFrequencyStats](#reposgetcodefrequencystats) - Get the weekly commit activity
* [ReposGetCollaboratorPermissionLevel](#reposgetcollaboratorpermissionlevel) - Get repository permissions for a user
* [ReposGetCombinedStatusForRef](#reposgetcombinedstatusforref) - Get the combined status for a specific reference
* [ReposGetCommit](#reposgetcommit) - Get a commit
* [ReposGetCommitActivityStats](#reposgetcommitactivitystats) - Get the last year of commit activity
* [ReposGetCommitComment](#reposgetcommitcomment) - Get a commit comment
* [ReposGetCommitSignatureProtection](#reposgetcommitsignatureprotection) - Get commit signature protection
* [ReposGetContent](#reposgetcontent) - Get repository content
* [ReposGetContributorsStats](#reposgetcontributorsstats) - Get all contributor commit activity
* [ReposGetDeployKey](#reposgetdeploykey) - Get a deploy key
* [ReposGetDeployment](#reposgetdeployment) - Get a deployment
* [ReposGetDeploymentStatus](#reposgetdeploymentstatus) - Get a deployment status
* [ReposGetLatestPagesBuild](#reposgetlatestpagesbuild) - Get latest Pages build
* [ReposGetLatestRelease](#reposgetlatestrelease) - Get the latest release
* [ReposGetPages](#reposgetpages) - Get a GitHub Enterprise Server Pages site
* [ReposGetPagesBuild](#reposgetpagesbuild) - Get GitHub Enterprise Server Pages build
* [ReposGetParticipationStats](#reposgetparticipationstats) - Get the weekly commit count
* [ReposGetPullRequestReviewProtection](#reposgetpullrequestreviewprotection) - Get pull request review protection
* [ReposGetPunchCardStats](#reposgetpunchcardstats) - Get the hourly commit count for each day
* [ReposGetReadme](#reposgetreadme) - Get a repository README
* [ReposGetReadmeInDirectory](#reposgetreadmeindirectory) - Get a repository README for a directory
* [ReposGetRelease](#reposgetrelease) - Get a release
* [ReposGetReleaseAsset](#reposgetreleaseasset) - Get a release asset
* [ReposGetReleaseByTag](#reposgetreleasebytag) - Get a release by tag name
* [ReposGetStatusChecksProtection](#reposgetstatuschecksprotection) - Get status checks protection
* [ReposGetTeamsWithAccessToProtectedBranch](#reposgetteamswithaccesstoprotectedbranch) - Get teams with access to the protected branch
* [ReposGetUsersWithAccessToProtectedBranch](#reposgetuserswithaccesstoprotectedbranch) - Get users with access to the protected branch
* [ReposGetWebhook](#reposgetwebhook) - Get a repository webhook
* [ReposGetWebhookConfigForRepo](#reposgetwebhookconfigforrepo) - Get a webhook configuration for a repository
* [ReposListBranches](#reposlistbranches) - List branches
* [ReposListBranchesForHeadCommit](#reposlistbranchesforheadcommit) - List branches for HEAD commit
* [ReposListCollaborators](#reposlistcollaborators) - List repository collaborators
* [ReposListCommentsForCommit](#reposlistcommentsforcommit) - List commit comments
* [ReposListCommitCommentsForRepo](#reposlistcommitcommentsforrepo) - List commit comments for a repository
* [ReposListCommitStatusesForRef](#reposlistcommitstatusesforref) - List commit statuses for a reference
* [ReposListCommits](#reposlistcommits) - List commits
* [ReposListContributors](#reposlistcontributors) - List repository contributors
* [ReposListDeployKeys](#reposlistdeploykeys) - List deploy keys
* [ReposListDeploymentStatuses](#reposlistdeploymentstatuses) - List deployment statuses
* [ReposListDeployments](#reposlistdeployments) - List deployments
* [ReposListForAuthenticatedUser](#reposlistforauthenticateduser) - List repositories for the authenticated user
* [ReposListForOrg](#reposlistfororg) - List organization repositories
* [ReposListForUser](#reposlistforuser) - List repositories for a user
* [ReposListForks](#reposlistforks) - List forks
* [ReposListInvitations](#reposlistinvitations) - List repository invitations
* [ReposListInvitationsForAuthenticatedUser](#reposlistinvitationsforauthenticateduser) - List repository invitations for the authenticated user
* [ReposListLanguages](#reposlistlanguages) - List repository languages
* [ReposListPagesBuilds](#reposlistpagesbuilds) - List GitHub Enterprise Server Pages builds
* [ReposListPublic](#reposlistpublic) - List public repositories
* [ReposListPullRequestsAssociatedWithCommit](#reposlistpullrequestsassociatedwithcommit) - List pull requests associated with a commit
* [ReposListReleaseAssets](#reposlistreleaseassets) - List release assets
* [ReposListReleases](#reposlistreleases) - List releases
* [ReposListTags](#reposlisttags) - List repository tags
* [ReposListTeams](#reposlistteams) - List repository teams
* [ReposListWebhooks](#reposlistwebhooks) - List repository webhooks
* [ReposMerge](#reposmerge) - Merge a branch
* [ReposPingWebhook](#repospingwebhook) - Ping a repository webhook
* [ReposRemoveAppAccessRestrictions](#reposremoveappaccessrestrictions) - Remove app access restrictions
* [ReposRemoveCollaborator](#reposremovecollaborator) - Remove a repository collaborator
* [ReposRemoveStatusCheckContexts](#reposremovestatuscheckcontexts) - Remove status check contexts
* [ReposRemoveStatusCheckProtection](#reposremovestatuscheckprotection) - Remove status check protection
* [ReposRemoveTeamAccessRestrictions](#reposremoveteamaccessrestrictions) - Remove team access restrictions
* [ReposRemoveUserAccessRestrictions](#reposremoveuseraccessrestrictions) - Remove user access restrictions
* [ReposReplaceAllTopics](#reposreplacealltopics) - Replace all repository topics
* [ReposRequestPagesBuild](#reposrequestpagesbuild) - Request a GitHub Enterprise Server Pages build
* [ReposSetAdminBranchProtection](#repossetadminbranchprotection) - Set admin branch protection
* [ReposSetAppAccessRestrictions](#repossetappaccessrestrictions) - Set app access restrictions
* [ReposSetStatusCheckContexts](#repossetstatuscheckcontexts) - Set status check contexts
* [ReposSetTeamAccessRestrictions](#repossetteamaccessrestrictions) - Set team access restrictions
* [ReposSetUserAccessRestrictions](#repossetuseraccessrestrictions) - Set user access restrictions
* [ReposTestPushWebhook](#repostestpushwebhook) - Test the push repository webhook
* [ReposTransfer](#repostransfer) - Transfer a repository
* [ReposUpdate](#reposupdate) - Update a repository
* [ReposUpdateBranchProtection](#reposupdatebranchprotection) - Update branch protection
* [ReposUpdateCommitComment](#reposupdatecommitcomment) - Update a commit comment
* [ReposUpdateInformationAboutPagesSite](#reposupdateinformationaboutpagessite) - Update information about a GitHub Enterprise Server Pages site
* [ReposUpdateInvitation](#reposupdateinvitation) - Update a repository invitation
* [ReposUpdatePullRequestReviewProtection](#reposupdatepullrequestreviewprotection) - Update pull request review protection
* [ReposUpdateRelease](#reposupdaterelease) - Update a release
* [ReposUpdateReleaseAsset](#reposupdatereleaseasset) - Update a release asset
* [ReposUpdateStatusCheckProtection](#reposupdatestatuscheckprotection) - Update status check protection
* [ReposUpdateWebhook](#reposupdatewebhook) - Update a repository webhook
* [ReposUpdateWebhookConfigForRepo](#reposupdatewebhookconfigforrepo) - Update a webhook configuration for a repository
* [ReposUploadReleaseAsset](#reposuploadreleaseasset) - Upload a release asset

## ReposAcceptInvitationForAuthenticatedUser

Accept a repository invitation

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#accept-a-repository-invitation>

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
    res, err := s.Repos.ReposAcceptInvitationForAuthenticatedUser(ctx, operations.ReposAcceptInvitationForAuthenticatedUserRequest{
        InvitationID: 96450,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposAddAppAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Grants the specified apps push access for this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

| Type    | Description                                                                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#add-app-access-restrictions>

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
    res, err := s.Repos.ReposAddAppAccessRestrictions(ctx, operations.ReposAddAppAccessRestrictionsRequest{
        RequestBody: &operations.ReposAddAppAccessRestrictionsRequestBody{},
        Branch: "laboriosam",
        Owner: "pariatur",
        Repo: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Integrations != nil {
        // handle response
    }
}
```

## ReposAddCollaborator

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

For more information on permission levels, see "[Repository permission levels for an organization](https://docs.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)". There are restrictions on which permissions can be granted to organization members when an organization base role is in place. In this case, the permission being given must be equal to or higher than the org base permission. Otherwise, the request will fail with:

```
Cannot assign {member} permission of {role name}
```

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#http-verbs)."

The invitee will receive a notification that they have been invited to the repository, which they must accept or decline. They may do this via the notifications page, the email they receive, or by using the [repository invitations API endpoints](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#invitations).

**Rate limits**

You are limited to sending 50 invitations to a repository per 24 hour period. Note there is no limit if you are inviting organization members to an organization repository.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#add-a-repository-collaborator>

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
    res, err := s.Repos.ReposAddCollaborator(ctx, operations.ReposAddCollaboratorRequest{
        RequestBody: &operations.ReposAddCollaboratorRequestBody{
            Permission: operations.ReposAddCollaboratorRequestBodyPermissionEnumAdmin.ToPointer(),
            Permissions: sdk.String(""push""),
        },
        Owner: "occaecati",
        Repo: "nemo",
        Username: "Elmore_Heaney57",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryInvitation != nil {
        // handle response
    }
}
```

## ReposAddStatusCheckContexts

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#add-status-check-contexts>

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
    res, err := s.Repos.ReposAddStatusCheckContexts(ctx, operations.ReposAddStatusCheckContextsRequest{
        RequestBody: &operations.ReposAddStatusCheckContextsRequestBody{},
        Branch: "enim",
        Owner: "hic",
        Repo: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReposAddStatusCheckContexts200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ReposAddTeamAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Grants the specified teams push access for this branch. You can also give push access to child teams.

| Type    | Description                                                                                                                                |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#add-team-access-restrictions>

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
    res, err := s.Repos.ReposAddTeamAccessRestrictions(ctx, operations.ReposAddTeamAccessRestrictionsRequest{
        RequestBody: &operations.ReposAddTeamAccessRestrictionsRequestBody{},
        Branch: "quas",
        Owner: "totam",
        Repo: "molestias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## ReposAddUserAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Grants the specified people push access for this branch.

| Type    | Description                                                                                                                   |
| ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#add-user-access-restrictions>

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
    res, err := s.Repos.ReposAddUserAccessRestrictions(ctx, operations.ReposAddUserAccessRestrictionsRequest{
        RequestBody: &operations.ReposAddUserAccessRestrictionsRequestBody{},
        Branch: "odio",
        Owner: "eaque",
        Repo: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## ReposCheckCollaborator

For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.

Team members will include the members of child teams.

You must authenticate using an access token with the `read:org` and `repo` scopes with push access to use this
endpoint. GitHub Apps must have the `members` organization permission and `metadata` repository permission to use this
endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#check-if-a-user-is-a-repository-collaborator>

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
    res, err := s.Repos.ReposCheckCollaborator(ctx, operations.ReposCheckCollaboratorRequest{
        Owner: "architecto",
        Repo: "quos",
        Username: "Leta_Shields24",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposCompareCommits

The `basehead` param is comprised of two parts: `base` and `head`. Both must be branch names in `repo`. To compare branches across other repositories in the same network as `repo`, use the format `<USERNAME>:branch`.

The response from the API is equivalent to running the `git log base..head` command; however, commits are returned in chronological order. Pass the appropriate [media type](https://docs.github.com/enterprise-server@3.0/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.

The response also includes details on the files that were changed between the two commits. This includes the status of the change (for example, if a file was added, removed, modified, or renamed), and details of the change itself. For example, files with a `renamed` status have a `previous_filename` field showing the previous filename of the file, and files with a `modified` status have a `patch` field showing the changes made to the file.

**Working with large comparisons**

The response will include a comparison of up to 250 commits. If you are working with a larger commit range, you can use the [List commits](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-commits) to enumerate all commits in the range.

For comparisons with extremely large diffs, you may receive an error response indicating that the diff took too long
to generate. You can typically resolve this error by using a smaller commit range.

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

| Name | Type | Description |
| ---- | ---- | ----------- |
| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
| `signature` | `string` | The signature that was extracted from the commit. |
| `payload` | `string` | The value that was signed. |

These are the possible values for `reason` in the `verification` object:

| Value | Description |
| ----- | ----------- |
| `expired_key` | The key that made the signature is expired. |
| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
| `gpgverify_error` | There was an error communicating with the signature verification service. |
| `gpgverify_unavailable` | The signature verification service is currently unavailable. |
| `unsigned` | The object does not include a signature. |
| `unknown_signature_type` | A non-PGP signature was found in the commit. |
| `no_user` | No user was associated with the `committer` email address in the commit. |
| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
| `unknown_key` | The key that made the signature has not been registered with any user's account. |
| `malformed_signature` | There was an error parsing the signature. |
| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
| `valid` | None of the above errors applied, so the signature is considered to be verified. |

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#compare-two-commits>

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
    res, err := s.Repos.ReposCompareCommits(ctx, operations.ReposCompareCommitsRequest{
        Basehead: "doloremque",
        Owner: "delectus",
        Repo: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommitComparison != nil {
        // handle response
    }
}
```

## ReposCreateCommitComment

Create a comment for a commit using its `:commit_sha`.

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-commit-comment>

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
    res, err := s.Repos.ReposCreateCommitComment(ctx, operations.ReposCreateCommitCommentRequest{
        RequestBody: operations.ReposCreateCommitCommentRequestBody{
            Body: "cum",
            Line: sdk.Int64(216870),
            Path: sdk.String("adipisci"),
            Position: sdk.Int64(903150),
        },
        CommitSha: "deserunt",
        Owner: "doloremque",
        Repo: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommitComment != nil {
        // handle response
    }
}
```

## ReposCreateCommitSignatureProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to require signed commits on a branch. You must enable branch protection to require signed commits.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-commit-signature-protection>

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
    res, err := s.Repos.ReposCreateCommitSignatureProtection(ctx, operations.ReposCreateCommitSignatureProtectionRequest{
        Branch: "veniam",
        Owner: "libero",
        Repo: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtectedBranchAdminEnforced != nil {
        // handle response
    }
}
```

## ReposCreateCommitStatus

Users with push access in a repository can create commit statuses for a given SHA.

Note: there is a limit of 1000 statuses per `sha` and `context` within a repository. Attempts to create more than 1000 statuses will result in a validation error.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-commit-status>

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
    res, err := s.Repos.ReposCreateCommitStatus(ctx, operations.ReposCreateCommitStatusRequest{
        RequestBody: operations.ReposCreateCommitStatusRequestBody{
            Context: sdk.String("cupiditate"),
            Description: sdk.String("molestiae"),
            State: operations.ReposCreateCommitStatusRequestBodyStateEnumSuccess,
            TargetURL: sdk.String("possimus"),
        },
        Owner: "non",
        Repo: "magnam",
        Sha: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Status != nil {
        // handle response
    }
}
```

## ReposCreateDeployKey

You can create a read-only deploy key.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-deploy-key>

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
    res, err := s.Repos.ReposCreateDeployKey(ctx, operations.ReposCreateDeployKeyRequest{
        RequestBody: operations.ReposCreateDeployKeyRequestBody{
            Key: "sed",
            ReadOnly: sdk.Bool(false),
            Title: sdk.String("Dr."),
        },
        Owner: "veniam",
        Repo: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeployKey != nil {
        // handle response
    }
}
```

## ReposCreateDeployment

Deployments offer a few configurable parameters with certain defaults.

The `ref` parameter can be any named branch, tag, or SHA. At GitHub Enterprise Server we often deploy branches and verify them
before we merge a pull request.

The `environment` parameter allows deployments to be issued to different runtime environments. Teams often have
multiple environments for verifying their applications, such as `production`, `staging`, and `qa`. This parameter
makes it easier to track which environments have requested deployments. The default environment is `production`.

The `auto_merge` parameter is used to ensure that the requested ref is not behind the repository's default branch. If
the ref _is_ behind the default branch for the repository, we will attempt to merge it for you. If the merge succeeds,
the API will return a successful merge commit. If merge conflicts prevent the merge from succeeding, the API will
return a failure response.

By default, [commit statuses](https://docs.github.com/enterprise-server@3.0/rest/reference/commits#commit-statuses) for every submitted context must be in a `success`
state. The `required_contexts` parameter allows you to specify a subset of contexts that must be `success`, or to
specify contexts that have not yet been submitted. You are not required to use commit statuses to deploy. If you do
not require any contexts or create any commit statuses, the deployment will always succeed.

The `payload` parameter is available for any extra information that a deployment system might need. It is a JSON text
field that will be passed on when a deployment event is dispatched.

The `task` parameter is used by the deployment system to allow different execution paths. In the web world this might
be `deploy:migrations` to run schema changes on the system. In the compiled world this could be a flag to compile an
application with debugging enabled.

Users with `repo` or `repo_deployment` scopes can create a deployment for a given ref.

#### Merged branch response
You will see this response when GitHub automatically merges the base branch into the topic branch instead of creating
a deployment. This auto-merge happens when:
*   Auto-merge option is enabled in the repository
*   Topic branch does not include the latest changes on the base branch, which is `master` in the response example
*   There are no merge conflicts

If there are no new commits in the base branch, a new request to create a deployment should give a successful
response.

#### Merge conflict response
This error happens when the `auto_merge` option is enabled and when the default branch (in this case `master`), can't
be merged into the branch that's being deployed (in this case `topic-branch`), due to merge conflicts.

#### Failed commit status checks
This error happens when the `required_contexts` parameter indicates that one or more contexts need to have a `success`
status for the commit to be deployed, but one or more of the required contexts do not have a state of `success`.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-deployment>

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
    res, err := s.Repos.ReposCreateDeployment(ctx, operations.ReposCreateDeploymentRequest{
        RequestBody: operations.ReposCreateDeploymentRequestBody{
            AutoMerge: sdk.Bool(false),
            Description: sdk.String("facere"),
            Environment: sdk.String("laudantium"),
            Payload: &operations.ReposCreateDeploymentRequestBodyPayload{},
            ProductionEnvironment: sdk.Bool(false),
            Ref: "odit",
            RequiredContexts: []string{
                "amet",
                "exercitationem",
                "ab",
                "velit",
            },
            Task: sdk.String("facilis"),
            TransientEnvironment: sdk.Bool(false),
        },
        Owner: "tempore",
        Repo: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deployment != nil {
        // handle response
    }
}
```

## ReposCreateDeploymentStatus

Users with `push` access can create deployment statuses for a given deployment.

GitHub Apps require `read & write` access to "Deployments" and `read-only` access to "Repo contents" (for private repos). OAuth Apps require the `repo_deployment` scope.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-deployment-status>

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
    res, err := s.Repos.ReposCreateDeploymentStatus(ctx, operations.ReposCreateDeploymentStatusRequest{
        RequestBody: operations.ReposCreateDeploymentStatusRequestBody{
            AutoInactive: sdk.Bool(false),
            Description: sdk.String("voluptatibus"),
            Environment: operations.ReposCreateDeploymentStatusRequestBodyEnvironmentEnumProduction.ToPointer(),
            EnvironmentURL: sdk.String("blanditiis"),
            LogURL: sdk.String("distinctio"),
            State: operations.ReposCreateDeploymentStatusRequestBodyStateEnumInactive,
            TargetURL: sdk.String("quis"),
        },
        DeploymentID: 391933,
        Owner: "libero",
        Repo: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeploymentStatus != nil {
        // handle response
    }
}
```

## ReposCreateDispatchEvent

You can use this endpoint to trigger a webhook event called `repository_dispatch` when you want activity that happens outside of GitHub Enterprise Server to trigger a GitHub Actions workflow or GitHub App webhook. You must configure your GitHub Actions workflow or GitHub App to run when the `repository_dispatch` event occurs. For an example `repository_dispatch` webhook payload, see "[RepositoryDispatchEvent](https://docs.github.com/enterprise-server@3.0/webhooks/event-payloads/#repository_dispatch)."

The `client_payload` parameter is available for any extra information that your workflow might need. This parameter is a JSON payload that will be passed on when the webhook event is dispatched. For example, the `client_payload` can include a message that a user would like to send using a GitHub Actions workflow. Or the `client_payload` can be used as a test to debug your workflow.

This endpoint requires write access to the repository by providing either:

  - Personal access tokens with `repo` scope. For more information, see "[Creating a personal access token for the command line](https://docs.github.com/articles/creating-a-personal-access-token-for-the-command-line)" in the GitHub Help documentation.
  - GitHub Apps with both `metadata:read` and `contents:read&write` permissions.

This input example shows how you can use the `client_payload` as a test to debug your workflow.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-repository-dispatch-event>

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
    res, err := s.Repos.ReposCreateDispatchEvent(ctx, operations.ReposCreateDispatchEventRequest{
        RequestBody: operations.ReposCreateDispatchEventRequestBody{
            ClientPayload: map[string]interface{}{
                "facilis": "ipsum",
                "ad": "voluptatibus",
                "voluptatibus": "consequuntur",
                "debitis": "labore",
            },
            EventType: "rerum",
        },
        Owner: "eos",
        Repo: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposCreateForAuthenticatedUser

Creates a new repository for the authenticated user.

**OAuth scope requirements**

When using [OAuth](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

*   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
*   `repo` scope to create a private repository.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-repository-for-the-authenticated-user>

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
    res, err := s.Repos.ReposCreateForAuthenticatedUser(ctx, operations.ReposCreateForAuthenticatedUserRequestBody{
        AllowMergeCommit: sdk.Bool(true),
        AllowRebaseMerge: sdk.Bool(true),
        AllowSquashMerge: sdk.Bool(true),
        AutoInit: sdk.Bool(false),
        DeleteBranchOnMerge: sdk.Bool(false),
        Description: sdk.String("nostrum"),
        GitignoreTemplate: sdk.String("Haskell"),
        HasDownloads: sdk.Bool(true),
        HasIssues: sdk.Bool(true),
        HasProjects: sdk.Bool(true),
        HasWiki: sdk.Bool(true),
        Homepage: sdk.String("neque"),
        IsTemplate: sdk.Bool(true),
        LicenseTemplate: sdk.String("mit"),
        Name: "Team Environment",
        Private: sdk.Bool(false),
        TeamID: sdk.Int64(480061),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Repository != nil {
        // handle response
    }
}
```

## ReposCreateFork

Create a fork for the authenticated user.

**Note**: Forking a Repository happens asynchronously. You may have to wait a short period of time before you can access the git objects. If this takes longer than 5 minutes, be sure to contact [GitHub Enterprise Server Support](https://support.github.com/contact?tags=dotcom-rest-api).

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-fork>

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
    res, err := s.Repos.ReposCreateFork(ctx, operations.ReposCreateForkRequest{
        RequestBody: &operations.ReposCreateForkRequestBody{
            Organization: sdk.String("est"),
        },
        Owner: "rem",
        Repo: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FullRepository != nil {
        // handle response
    }
}
```

## ReposCreateInOrg

Creates a new repository in the specified organization. The authenticated user must be a member of the organization.

**OAuth scope requirements**

When using [OAuth](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

*   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
*   `repo` scope to create a private repository

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-an-organization-repository>

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
    res, err := s.Repos.ReposCreateInOrg(ctx, operations.ReposCreateInOrgRequest{
        RequestBody: operations.ReposCreateInOrgRequestBody{
            AllowMergeCommit: sdk.Bool(false),
            AllowRebaseMerge: sdk.Bool(false),
            AllowSquashMerge: sdk.Bool(false),
            AutoInit: sdk.Bool(false),
            DeleteBranchOnMerge: sdk.Bool(false),
            Description: sdk.String("fugiat"),
            GitignoreTemplate: sdk.String("unde"),
            HasIssues: sdk.Bool(false),
            HasProjects: sdk.Bool(false),
            HasWiki: sdk.Bool(false),
            Homepage: sdk.String("officiis"),
            IsTemplate: sdk.Bool(false),
            LicenseTemplate: sdk.String("ducimus"),
            Name: "Mildred Mueller IV",
            Private: sdk.Bool(false),
            TeamID: sdk.Int64(458970),
            Visibility: operations.ReposCreateInOrgRequestBodyVisibilityEnumInternal.ToPointer(),
        },
        Org: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Repository != nil {
        // handle response
    }
}
```

## ReposCreateOrUpdateFileContents

Creates a new file or replaces an existing file in a repository.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-or-update-file-contents>

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
    res, err := s.Repos.ReposCreateOrUpdateFileContents(ctx, operations.ReposCreateOrUpdateFileContentsRequest{
        RequestBody: operations.ReposCreateOrUpdateFileContentsRequestBody{
            Author: &operations.ReposCreateOrUpdateFileContentsRequestBodyAuthor{
                Date: sdk.String(""2013-01-15T17:13:22+05:00""),
                Email: "Emil.Wintheiser@gmail.com",
                Name: "Gregory Bernhard",
            },
            Branch: sdk.String("saepe"),
            Committer: &operations.ReposCreateOrUpdateFileContentsRequestBodyCommitter{
                Date: sdk.String(""2013-01-05T13:13:22+05:00""),
                Email: "Estella_Dare44@hotmail.com",
                Name: "Maurice Zulauf",
            },
            Content: "nihil",
            Message: "deleniti",
            Sha: sdk.String("illo"),
        },
        Owner: "labore",
        Path: "assumenda",
        Repo: "aliquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileCommit != nil {
        // handle response
    }
}
```

## ReposCreatePagesSite

Configures a GitHub Enterprise Server Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages)."

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-github-pages-site>

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
    res, err := s.Repos.ReposCreatePagesSite(ctx, operations.ReposCreatePagesSiteRequest{
        RequestBody: operations.ReposCreatePagesSiteRequestBody{
            Source: operations.ReposCreatePagesSiteRequestBodySource{
                Branch: "quisquam",
                Path: operations.ReposCreatePagesSiteRequestBodySourcePathEnumRootDocs.ToPointer(),
            },
        },
        Owner: "laudantium",
        Repo: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Page != nil {
        // handle response
    }
}
```

## ReposCreateRelease

Users with push access to the repository can create a release.

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-release>

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
    res, err := s.Repos.ReposCreateRelease(ctx, operations.ReposCreateReleaseRequest{
        RequestBody: operations.ReposCreateReleaseRequestBody{
            Body: sdk.String("consequatur"),
            Draft: sdk.Bool(false),
            Name: sdk.String("Adam Reilly"),
            Prerelease: sdk.Bool(false),
            TagName: "provident",
            TargetCommitish: sdk.String("repudiandae"),
        },
        Owner: "rerum",
        Repo: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Release != nil {
        // handle response
    }
}
```

## ReposCreateUsingTemplate

Creates a new repository using a repository template. Use the `template_owner` and `template_repo` route parameters to specify the repository to use as the template. The authenticated user must own or be a member of an organization that owns the repository. To check if a repository is available to use as a template, get the repository's information using the [Get a repository](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-repository) endpoint and check that the `is_template` key is `true`.

**OAuth scope requirements**

When using [OAuth](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

*   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
*   `repo` scope to create a private repository

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-repository-using-a-template>

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
    res, err := s.Repos.ReposCreateUsingTemplate(ctx, operations.ReposCreateUsingTemplateRequest{
        RequestBody: operations.ReposCreateUsingTemplateRequestBody{
            Description: sdk.String("corporis"),
            IncludeAllBranches: sdk.Bool(false),
            Name: "Donnie Skiles",
            Owner: sdk.String("commodi"),
            Private: sdk.Bool(false),
        },
        TemplateOwner: "impedit",
        TemplateRepo: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Repository != nil {
        // handle response
    }
}
```

## ReposCreateWebhook

Repositories can have multiple webhooks installed. Each webhook should have a unique `config`. Multiple webhooks can
share the same `config` as long as those webhooks do not have any `events` that overlap.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-repository-webhook>

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
    res, err := s.Repos.ReposCreateWebhook(ctx, operations.ReposCreateWebhookRequest{
        RequestBody: &operations.ReposCreateWebhookRequestBody{
            Active: sdk.Bool(false),
            Config: &operations.ReposCreateWebhookRequestBodyConfig{
                ContentType: sdk.String(""json""),
                Digest: sdk.String(""sha256""),
                InsecureSsl: &shared.WebhookConfigInsecureSsl{},
                Secret: sdk.String(""********""),
                Token: sdk.String(""abc""),
                URL: sdk.String("https://example.com/webhook"),
            },
            Events: []string{
                "voluptatem",
            },
            Name: sdk.String("Brenda Fay"),
        },
        Owner: "quidem",
        Repo: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Hook != nil {
        // handle response
    }
}
```

## ReposDeclineInvitationForAuthenticatedUser

Decline a repository invitation

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#decline-a-repository-invitation>

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
    res, err := s.Repos.ReposDeclineInvitationForAuthenticatedUser(ctx, operations.ReposDeclineInvitationForAuthenticatedUserRequest{
        InvitationID: 230411,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDelete

Deleting a repository requires admin access. If OAuth is used, the `delete_repo` scope is required.

If an organization owner has configured the organization to prevent members from deleting organization-owned
repositories, you will get a `403 Forbidden` response.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-a-repository>

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
    res, err := s.Repos.ReposDelete(ctx, operations.ReposDeleteRequest{
        Owner: "quasi",
        Repo: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeleteAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Disables the ability to restrict who can push to this branch.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-access-restrictions>

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
    res, err := s.Repos.ReposDeleteAccessRestrictions(ctx, operations.ReposDeleteAccessRestrictionsRequest{
        Branch: "laudantium",
        Owner: "doloremque",
        Repo: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeleteAdminBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removing admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-admin-branch-protection>

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
    res, err := s.Repos.ReposDeleteAdminBranchProtection(ctx, operations.ReposDeleteAdminBranchProtectionRequest{
        Branch: "iusto",
        Owner: "amet",
        Repo: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeleteBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-branch-protection>

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
    res, err := s.Repos.ReposDeleteBranchProtection(ctx, operations.ReposDeleteBranchProtectionRequest{
        Branch: "dolorum",
        Owner: "necessitatibus",
        Repo: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeleteCommitComment

Delete a commit comment

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-a-commit-comment>

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
    res, err := s.Repos.ReposDeleteCommitComment(ctx, operations.ReposDeleteCommitCommentRequest{
        CommentID: 920272,
        Owner: "consequatur",
        Repo: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeleteCommitSignatureProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to disable required signed commits on a branch. You must enable branch protection to require signed commits.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-commit-signature-protection>

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
    res, err := s.Repos.ReposDeleteCommitSignatureProtection(ctx, operations.ReposDeleteCommitSignatureProtectionRequest{
        Branch: "molestiae",
        Owner: "itaque",
        Repo: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeleteDeployKey

Deploy keys are immutable. If you need to update a key, remove the key and create a new one instead.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-a-deploy-key>

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
    res, err := s.Repos.ReposDeleteDeployKey(ctx, operations.ReposDeleteDeployKeyRequest{
        KeyID: 545779,
        Owner: "aperiam",
        Repo: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeleteDeployment

If the repository only has one deployment, you can delete the deployment regardless of its status. If the repository has more than one deployment, you can only delete inactive deployments. This ensures that repositories with multiple deployments will always have an active deployment. Anyone with `repo` or `repo_deployment` scopes can delete a deployment.

To set a deployment as inactive, you must:

*   Create a new deployment that is active so that the system has a record of the current state, then delete the previously active deployment.
*   Mark the active deployment as inactive by adding any non-successful deployment status.

For more information, see "[Create a deployment](https://docs.github.com/enterprise-server@3.0/rest/reference/repos/#create-a-deployment)" and "[Create a deployment status](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-deployment-status)."

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-a-deployment>

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
    res, err := s.Repos.ReposDeleteDeployment(ctx, operations.ReposDeleteDeploymentRequest{
        DeploymentID: 879522,
        Owner: "eos",
        Repo: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeleteFile

Deletes a file in a repository.

You can provide an additional `committer` parameter, which is an object containing information about the committer. Or, you can provide an `author` parameter, which is an object containing information about the author.

The `author` section is optional and is filled in with the `committer` information if omitted. If the `committer` information is omitted, the authenticated user's information is used.

You must provide values for both `name` and `email`, whether you choose to use `author` or `committer`. Otherwise, you'll receive a `422` status code.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-a-file>

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
    res, err := s.Repos.ReposDeleteFile(ctx, operations.ReposDeleteFileRequest{
        RequestBody: operations.ReposDeleteFileRequestBody{
            Author: &operations.ReposDeleteFileRequestBodyAuthor{
                Email: sdk.String("Alexandra12@gmail.com"),
                Name: sdk.String("Curtis McCullough PhD"),
            },
            Branch: sdk.String("labore"),
            Committer: &operations.ReposDeleteFileRequestBodyCommitter{
                Email: sdk.String("Jacquelyn69@hotmail.com"),
                Name: sdk.String("Kimberly Kuhn"),
            },
            Message: "porro",
            Sha: "provident",
        },
        Owner: "consectetur",
        Path: "eligendi",
        Repo: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileCommit != nil {
        // handle response
    }
}
```

## ReposDeleteInvitation

Delete a repository invitation

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-a-repository-invitation>

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
    res, err := s.Repos.ReposDeleteInvitation(ctx, operations.ReposDeleteInvitationRequest{
        InvitationID: 235834,
        Owner: "soluta",
        Repo: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeletePagesSite

Delete a GitHub Enterprise Server Pages site

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-a-github-pages-site>

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
    res, err := s.Repos.ReposDeletePagesSite(ctx, operations.ReposDeletePagesSiteRequest{
        Owner: "temporibus",
        Repo: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeletePullRequestReviewProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-pull-request-review-protection>

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
    res, err := s.Repos.ReposDeletePullRequestReviewProtection(ctx, operations.ReposDeletePullRequestReviewProtectionRequest{
        Branch: "amet",
        Owner: "tenetur",
        Repo: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeleteRelease

Users with push access to the repository can delete a release.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-a-release>

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
    res, err := s.Repos.ReposDeleteRelease(ctx, operations.ReposDeleteReleaseRequest{
        Owner: "quo",
        ReleaseID: 931077,
        Repo: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeleteReleaseAsset

Delete a release asset

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-a-release-asset>

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
    res, err := s.Repos.ReposDeleteReleaseAsset(ctx, operations.ReposDeleteReleaseAssetRequest{
        AssetID: 670762,
        Owner: "dignissimos",
        Repo: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDeleteWebhook

Delete a repository webhook

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#delete-a-repository-webhook>

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
    res, err := s.Repos.ReposDeleteWebhook(ctx, operations.ReposDeleteWebhookRequest{
        HookID: 185348,
        Owner: "consectetur",
        Repo: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDownloadTarballArchive

Gets a redirect URL to download a tar archive for a repository. If you omit `:ref`, the repository’s default branch (usually
`master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
the `Location` header to make a second `GET` request.
**Note**: For private repositories, these links are temporary and expire after five minutes.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#download-a-repository-archive>

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
    res, err := s.Repos.ReposDownloadTarballArchive(ctx, operations.ReposDownloadTarballArchiveRequest{
        Owner: "explicabo",
        Ref: "explicabo",
        Repo: "exercitationem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposDownloadZipballArchive

Gets a redirect URL to download a zip archive for a repository. If you omit `:ref`, the repository’s default branch (usually
`master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
the `Location` header to make a second `GET` request.
**Note**: For private repositories, these links are temporary and expire after five minutes.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#download-a-repository-archive>

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
    res, err := s.Repos.ReposDownloadZipballArchive(ctx, operations.ReposDownloadZipballArchiveRequest{
        Owner: "nihil",
        Ref: "non",
        Repo: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposGet

When you pass the `scarlet-witch-preview` media type, requests to get a repository will also return the repository's code of conduct if it can be detected from the repository's code of conduct file.

The `parent` and `source` objects are present when the repository is a fork. `parent` is the repository this repository was forked from, `source` is the ultimate source for the network.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-repository>

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
    res, err := s.Repos.ReposGet(ctx, operations.ReposGetRequest{
        Owner: "illo",
        Repo: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FullRepository != nil {
        // handle response
    }
}
```

## ReposGetAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists who has access to this protected branch.

**Note**: Users, apps, and teams `restrictions` are only available for organization-owned repositories.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-access-restrictions>

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
    res, err := s.Repos.ReposGetAccessRestrictions(ctx, operations.ReposGetAccessRestrictionsRequest{
        Branch: "deserunt",
        Owner: "delectus",
        Repo: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BranchRestrictionPolicy != nil {
        // handle response
    }
}
```

## ReposGetAdminBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-admin-branch-protection>

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
    res, err := s.Repos.ReposGetAdminBranchProtection(ctx, operations.ReposGetAdminBranchProtectionRequest{
        Branch: "distinctio",
        Owner: "in",
        Repo: "exercitationem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtectedBranchAdminEnforced != nil {
        // handle response
    }
}
```

## ReposGetAllStatusCheckContexts

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-all-status-check-contexts>

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
    res, err := s.Repos.ReposGetAllStatusCheckContexts(ctx, operations.ReposGetAllStatusCheckContextsRequest{
        Branch: "labore",
        Owner: "numquam",
        Repo: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReposGetAllStatusCheckContexts200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ReposGetAllTopics

Get all repository topics

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-all-repository-topics>

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
    res, err := s.Repos.ReposGetAllTopics(ctx, operations.ReposGetAllTopicsRequest{
        Owner: "modi",
        Page: sdk.Int64(450209),
        PerPage: sdk.Int64(127294),
        Repo: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Topic != nil {
        // handle response
    }
}
```

## ReposGetAppsWithAccessToProtectedBranch

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists the GitHub Apps that have push access to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-apps-with-access-to-the-protected-branch>

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
    res, err := s.Repos.ReposGetAppsWithAccessToProtectedBranch(ctx, operations.ReposGetAppsWithAccessToProtectedBranchRequest{
        Branch: "rem",
        Owner: "aperiam",
        Repo: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Integrations != nil {
        // handle response
    }
}
```

## ReposGetBranch

Get a branch

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-branch>

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
    res, err := s.Repos.ReposGetBranch(ctx, operations.ReposGetBranchRequest{
        Branch: "deleniti",
        Owner: "enim",
        Repo: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BranchWithProtection != nil {
        // handle response
    }
}
```

## ReposGetBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-branch-protection>

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
    res, err := s.Repos.ReposGetBranchProtection(ctx, operations.ReposGetBranchProtectionRequest{
        Branch: "similique",
        Owner: "minima",
        Repo: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BranchProtection != nil {
        // handle response
    }
}
```

## ReposGetCodeFrequencyStats

Returns a weekly aggregate of the number of additions and deletions pushed to a repository.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-the-weekly-commit-activity>

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
    res, err := s.Repos.ReposGetCodeFrequencyStats(ctx, operations.ReposGetCodeFrequencyStatsRequest{
        Owner: "magnam",
        Repo: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodeFrequencyStats != nil {
        // handle response
    }
}
```

## ReposGetCollaboratorPermissionLevel

Checks the repository permission of a collaborator. The possible repository permissions are `admin`, `write`, `read`, and `none`.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-repository-permissions-for-a-user>

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
    res, err := s.Repos.ReposGetCollaboratorPermissionLevel(ctx, operations.ReposGetCollaboratorPermissionLevelRequest{
        Owner: "modi",
        Repo: "eum",
        Username: "Coby_OHara",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryCollaboratorPermission != nil {
        // handle response
    }
}
```

## ReposGetCombinedStatusForRef

Users with pull access in a repository can access a combined view of commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name.


Additionally, a combined `state` is returned. The `state` is one of:

*   **failure** if any of the contexts report as `error` or `failure`
*   **pending** if there are no statuses or a context is `pending`
*   **success** if the latest status for all contexts is `success`

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-the-combined-status-for-a-specific-reference>

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
    res, err := s.Repos.ReposGetCombinedStatusForRef(ctx, operations.ReposGetCombinedStatusForRefRequest{
        Owner: "nostrum",
        Page: sdk.Int64(475325),
        PerPage: sdk.Int64(330600),
        Ref: "reiciendis",
        Repo: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CombinedCommitStatus != nil {
        // handle response
    }
}
```

## ReposGetCommit

Returns the contents of a single commit reference. You must have `read` access for the repository to use this endpoint.

**Note:** If there are more than 300 files in the commit diff, the response will include pagination link headers for the remaining files, up to a limit of 3000 files. Each page contains the static commit information, and the only changes are to the file listing.

You can pass the appropriate [media type](https://docs.github.com/enterprise-server@3.0/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to  fetch `diff` and `patch` formats. Diffs with binary data will have no `patch` property.

To return only the SHA-1 hash of the commit reference, you can provide the `sha` custom [media type](https://docs.github.com/enterprise-server@3.0/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) in the `Accept` header. You can use this endpoint to check if a remote reference's SHA-1 hash is the same as your local reference's SHA-1 hash by providing the local SHA-1 reference as the ETag.

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

| Name | Type | Description |
| ---- | ---- | ----------- |
| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
| `signature` | `string` | The signature that was extracted from the commit. |
| `payload` | `string` | The value that was signed. |

These are the possible values for `reason` in the `verification` object:

| Value | Description |
| ----- | ----------- |
| `expired_key` | The key that made the signature is expired. |
| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
| `gpgverify_error` | There was an error communicating with the signature verification service. |
| `gpgverify_unavailable` | The signature verification service is currently unavailable. |
| `unsigned` | The object does not include a signature. |
| `unknown_signature_type` | A non-PGP signature was found in the commit. |
| `no_user` | No user was associated with the `committer` email address in the commit. |
| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
| `unknown_key` | The key that made the signature has not been registered with any user's account. |
| `malformed_signature` | There was an error parsing the signature. |
| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
| `valid` | None of the above errors applied, so the signature is considered to be verified. |

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-commit>

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
    res, err := s.Repos.ReposGetCommit(ctx, operations.ReposGetCommitRequest{
        Owner: "modi",
        Page: sdk.Int64(13865),
        PerPage: sdk.Int64(13508),
        Ref: "eveniet",
        Repo: "odio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Commit != nil {
        // handle response
    }
}
```

## ReposGetCommitActivityStats

Returns the last year of commit activity grouped by week. The `days` array is a group of commits per day, starting on `Sunday`.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-the-last-year-of-commit-activity>

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
    res, err := s.Repos.ReposGetCommitActivityStats(ctx, operations.ReposGetCommitActivityStatsRequest{
        Owner: "commodi",
        Repo: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommitActivities != nil {
        // handle response
    }
}
```

## ReposGetCommitComment

Get a commit comment

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-commit-comment>

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
    res, err := s.Repos.ReposGetCommitComment(ctx, operations.ReposGetCommitCommentRequest{
        CommentID: 677045,
        Owner: "possimus",
        Repo: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommitComment != nil {
        // handle response
    }
}
```

## ReposGetCommitSignatureProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to check whether a branch requires signed commits. An enabled status of `true` indicates you must sign commits on this branch. For more information, see [Signing commits with GPG](https://docs.github.com/articles/signing-commits-with-gpg) in GitHub Help.

**Note**: You must enable branch protection to require signed commits.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-commit-signature-protection>

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
    res, err := s.Repos.ReposGetCommitSignatureProtection(ctx, operations.ReposGetCommitSignatureProtectionRequest{
        Branch: "consectetur",
        Owner: "nesciunt",
        Repo: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtectedBranchAdminEnforced != nil {
        // handle response
    }
}
```

## ReposGetContent

Gets the contents of a file or directory in a repository. Specify the file path or directory in `:path`. If you omit
`:path`, you will receive the contents of the repository's root directory. See the description below regarding what the API response includes for directories. 

Files and symlinks support [a custom media type](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#custom-media-types) for
retrieving the raw content or rendered HTML (when supported). All content types support [a custom media
type](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#custom-media-types) to ensure the content is returned in a consistent
object format.

**Note**:
*   To get a repository's contents recursively, you can [recursively get the tree](https://docs.github.com/enterprise-server@3.0/rest/reference/git#trees).
*   This API has an upper limit of 1,000 files for a directory. If you need to retrieve more files, use the [Git Trees
API](https://docs.github.com/enterprise-server@3.0/rest/reference/git#get-a-tree).
*   This API supports files up to 1 megabyte in size.

#### If the content is a directory
The response will be an array of objects, one object for each item in the directory.
When listing the contents of a directory, submodules have their "type" specified as "file". Logically, the value
_should_ be "submodule". This behavior exists in API v3 [for backwards compatibility purposes](https://git.io/v1YCW).
In the next major version of the API, the type will be returned as "submodule".

#### If the content is a symlink 
If the requested `:path` points to a symlink, and the symlink's target is a normal file in the repository, then the
API responds with the content of the file (in the format shown in the example. Otherwise, the API responds with an object 
describing the symlink itself.

#### If the content is a submodule
The `submodule_git_url` identifies the location of the submodule repository, and the `sha` identifies a specific
commit within the submodule repository. Git uses the given URL when cloning the submodule repository, and checks out
the submodule at that specific commit.

If the submodule repository is not hosted on github.com, the Git URLs (`git_url` and `_links["git"]`) and the
github.com URLs (`html_url` and `_links["html"]`) will have null values.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-repository-content>

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
    res, err := s.Repos.ReposGetContent(ctx, operations.ReposGetContentRequest{
        Owner: "itaque",
        Path: "minus",
        Ref: sdk.String("sunt"),
        Repo: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReposGetContent200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## ReposGetContributorsStats


Returns the `total` number of commits authored by the contributor. In addition, the response includes a Weekly Hash (`weeks` array) with the following information:

*   `w` - Start of the week, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time).
*   `a` - Number of additions
*   `d` - Number of deletions
*   `c` - Number of commits

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-all-contributor-commit-activity>

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
    res, err := s.Repos.ReposGetContributorsStats(ctx, operations.ReposGetContributorsStatsRequest{
        Owner: "iusto",
        Repo: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContributorActivities != nil {
        // handle response
    }
}
```

## ReposGetDeployKey

Get a deploy key

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-deploy-key>

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
    res, err := s.Repos.ReposGetDeployKey(ctx, operations.ReposGetDeployKeyRequest{
        KeyID: 91728,
        Owner: "facilis",
        Repo: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeployKey != nil {
        // handle response
    }
}
```

## ReposGetDeployment

Get a deployment

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-deployment>

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
    res, err := s.Repos.ReposGetDeployment(ctx, operations.ReposGetDeploymentRequest{
        DeploymentID: 418637,
        Owner: "fuga",
        Repo: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deployment != nil {
        // handle response
    }
}
```

## ReposGetDeploymentStatus

Users with pull access can view a deployment status for a deployment:

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-deployment-status>

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
    res, err := s.Repos.ReposGetDeploymentStatus(ctx, operations.ReposGetDeploymentStatusRequest{
        DeploymentID: 526413,
        Owner: "aut",
        Repo: "quos",
        StatusID: 511222,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeploymentStatus != nil {
        // handle response
    }
}
```

## ReposGetLatestPagesBuild

Get latest Pages build

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-latest-pages-build>

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
    res, err := s.Repos.ReposGetLatestPagesBuild(ctx, operations.ReposGetLatestPagesBuildRequest{
        Owner: "repellendus",
        Repo: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PageBuild != nil {
        // handle response
    }
}
```

## ReposGetLatestRelease

View the latest published full release for the repository.

The latest release is the most recent non-prerelease, non-draft release, sorted by the `created_at` attribute. The `created_at` attribute is the date of the commit used for the release, and not the date when the release was drafted or published.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-the-latest-release>

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
    res, err := s.Repos.ReposGetLatestRelease(ctx, operations.ReposGetLatestReleaseRequest{
        Owner: "quae",
        Repo: "eaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Release != nil {
        // handle response
    }
}
```

## ReposGetPages

Get a GitHub Enterprise Server Pages site

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-github-pages-site>

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
    res, err := s.Repos.ReposGetPages(ctx, operations.ReposGetPagesRequest{
        Owner: "saepe",
        Repo: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Page != nil {
        // handle response
    }
}
```

## ReposGetPagesBuild

Get GitHub Enterprise Server Pages build

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-github-pages-build>

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
    res, err := s.Repos.ReposGetPagesBuild(ctx, operations.ReposGetPagesBuildRequest{
        BuildID: 651228,
        Owner: "nulla",
        Repo: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PageBuild != nil {
        // handle response
    }
}
```

## ReposGetParticipationStats

Returns the total commit counts for the `owner` and total commit counts in `all`. `all` is everyone combined, including the `owner` in the last 52 weeks. If you'd like to get the commit counts for non-owners, you can subtract `owner` from `all`.

The array order is oldest week (index 0) to most recent week.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-the-weekly-commit-count>

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
    res, err := s.Repos.ReposGetParticipationStats(ctx, operations.ReposGetParticipationStatsRequest{
        Owner: "sed",
        Repo: "voluptatem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ParticipationStats != nil {
        // handle response
    }
}
```

## ReposGetPullRequestReviewProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-pull-request-review-protection>

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
    res, err := s.Repos.ReposGetPullRequestReviewProtection(ctx, operations.ReposGetPullRequestReviewProtectionRequest{
        Branch: "alias",
        Owner: "eveniet",
        Repo: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtectedBranchPullRequestReview != nil {
        // handle response
    }
}
```

## ReposGetPunchCardStats

Each array contains the day number, hour number, and number of commits:

*   `0-6`: Sunday - Saturday
*   `0-23`: Hour of day
*   Number of commits

For example, `[2, 14, 25]` indicates that there were 25 total commits, during the 2:00pm hour on Tuesdays. All times are based on the time zone of individual commits.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-the-hourly-commit-count-for-each-day>

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
    res, err := s.Repos.ReposGetPunchCardStats(ctx, operations.ReposGetPunchCardStatsRequest{
        Owner: "voluptatem",
        Repo: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodeFrequencyStats != nil {
        // handle response
    }
}
```

## ReposGetReadme

Gets the preferred README for a repository.

READMEs support [custom media types](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-repository-readme>

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
    res, err := s.Repos.ReposGetReadme(ctx, operations.ReposGetReadmeRequest{
        Owner: "qui",
        Ref: sdk.String("qui"),
        Repo: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContentFile != nil {
        // handle response
    }
}
```

## ReposGetReadmeInDirectory

Gets the README from a repository directory.

READMEs support [custom media types](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-repository-directory-readme>

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
    res, err := s.Repos.ReposGetReadmeInDirectory(ctx, operations.ReposGetReadmeInDirectoryRequest{
        Dir: "harum",
        Owner: "explicabo",
        Ref: sdk.String("beatae"),
        Repo: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContentFile != nil {
        // handle response
    }
}
```

## ReposGetRelease

**Note:** This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a [hypermedia resource](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#hypermedia).

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-release>

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
    res, err := s.Repos.ReposGetRelease(ctx, operations.ReposGetReleaseRequest{
        Owner: "modi",
        ReleaseID: 760049,
        Repo: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Release != nil {
        // handle response
    }
}
```

## ReposGetReleaseAsset

To download the asset's binary content, set the `Accept` header of the request to [`application/octet-stream`](https://docs.github.com/enterprise-server@3.0/rest/overview/media-types). The API will either redirect the client to the location, or stream it directly if possible. API clients should handle both a `200` or `302` response.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-release-asset>

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
    res, err := s.Repos.ReposGetReleaseAsset(ctx, operations.ReposGetReleaseAssetRequest{
        AssetID: 562948,
        Owner: "officia",
        Repo: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleaseAsset != nil {
        // handle response
    }
}
```

## ReposGetReleaseByTag

Get a published release with the specified tag.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-release-by-tag-name>

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
    res, err := s.Repos.ReposGetReleaseByTag(ctx, operations.ReposGetReleaseByTagRequest{
        Owner: "totam",
        Repo: "sequi",
        Tag: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Release != nil {
        // handle response
    }
}
```

## ReposGetStatusChecksProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-status-checks-protection>

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
    res, err := s.Repos.ReposGetStatusChecksProtection(ctx, operations.ReposGetStatusChecksProtectionRequest{
        Branch: "ea",
        Owner: "impedit",
        Repo: "ducimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCheckPolicy != nil {
        // handle response
    }
}
```

## ReposGetTeamsWithAccessToProtectedBranch

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists the teams who have push access to this branch. The list includes child teams.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-teams-with-access-to-the-protected-branch>

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
    res, err := s.Repos.ReposGetTeamsWithAccessToProtectedBranch(ctx, operations.ReposGetTeamsWithAccessToProtectedBranchRequest{
        Branch: "odit",
        Owner: "velit",
        Repo: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## ReposGetUsersWithAccessToProtectedBranch

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists the people who have push access to this branch.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-users-with-access-to-the-protected-branch>

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
    res, err := s.Repos.ReposGetUsersWithAccessToProtectedBranch(ctx, operations.ReposGetUsersWithAccessToProtectedBranchRequest{
        Branch: "repellat",
        Owner: "nulla",
        Repo: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## ReposGetWebhook

Returns a webhook configured in a repository. To get only the webhook `config` properties, see "[Get a webhook configuration for a repository](/rest/reference/repos#get-a-webhook-configuration-for-a-repository)."

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-repository-webhook>

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
    res, err := s.Repos.ReposGetWebhook(ctx, operations.ReposGetWebhookRequest{
        HookID: 617657,
        Owner: "accusamus",
        Repo: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Hook != nil {
        // handle response
    }
}
```

## ReposGetWebhookConfigForRepo

Returns the webhook configuration for a repository. To get more information about the webhook, including the `active` state and `events`, use "[Get a repository webhook](/rest/reference/orgs#get-a-repository-webhook)."

Access tokens must have the `read:repo_hook` or `repo` scope, and GitHub Apps must have the `repository_hooks:read` permission.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-a-webhook-configuration-for-a-repository>

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
    res, err := s.Repos.ReposGetWebhookConfigForRepo(ctx, operations.ReposGetWebhookConfigForRepoRequest{
        HookID: 392967,
        Owner: "rerum",
        Repo: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookConfig != nil {
        // handle response
    }
}
```

## ReposListBranches

List branches

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-branches>

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
    res, err := s.Repos.ReposListBranches(ctx, operations.ReposListBranchesRequest{
        Owner: "voluptates",
        Page: sdk.Int64(251627),
        PerPage: sdk.Int64(524577),
        Protected: sdk.Bool(false),
        Repo: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShortBranches != nil {
        // handle response
    }
}
```

## ReposListBranchesForHeadCommit

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Returns all branches where the given commit SHA is the HEAD, or latest commit for the branch.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-branches-for-head-commit>

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
    res, err := s.Repos.ReposListBranchesForHeadCommit(ctx, operations.ReposListBranchesForHeadCommitRequest{
        CommitSha: "ullam",
        Owner: "quisquam",
        Repo: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BranchShorts != nil {
        // handle response
    }
}
```

## ReposListCollaborators

For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.

Team members will include the members of child teams.

You must authenticate using an access token with the `read:org` and `repo` scopes with push access to use this
endpoint. GitHub Apps must have the `members` organization permission and `metadata` repository permission to use this
endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-repository-collaborators>

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
    res, err := s.Repos.ReposListCollaborators(ctx, operations.ReposListCollaboratorsRequest{
        Affiliation: operations.ReposListCollaboratorsAffiliationEnumAll.ToPointer(),
        Owner: "eligendi",
        Page: sdk.Int64(62035),
        PerPage: sdk.Int64(885022),
        Repo: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Collaborators != nil {
        // handle response
    }
}
```

## ReposListCommentsForCommit

Use the `:commit_sha` to specify the commit that will have its comments listed.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-commit-comments>

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
    res, err := s.Repos.ReposListCommentsForCommit(ctx, operations.ReposListCommentsForCommitRequest{
        CommitSha: "architecto",
        Owner: "enim",
        Page: sdk.Int64(758985),
        PerPage: sdk.Int64(525951),
        Repo: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommitComments != nil {
        // handle response
    }
}
```

## ReposListCommitCommentsForRepo

Commit Comments use [these custom media types](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#custom-media-types). You can read more about the use of media types in the API [here](https://docs.github.com/enterprise-server@3.0/rest/overview/media-types/).

Comments are ordered by ascending ID.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-commit-comments-for-a-repository>

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
    res, err := s.Repos.ReposListCommitCommentsForRepo(ctx, operations.ReposListCommitCommentsForRepoRequest{
        Owner: "facilis",
        Page: sdk.Int64(967055),
        PerPage: sdk.Int64(955551),
        Repo: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommitComments != nil {
        // handle response
    }
}
```

## ReposListCommitStatusesForRef

Users with pull access in a repository can view commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name. Statuses are returned in reverse chronological order. The first status in the list will be the latest one.

This resource is also available via a legacy route: `GET /repos/:owner/:repo/statuses/:ref`.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-commit-statuses-for-a-reference>

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
    res, err := s.Repos.ReposListCommitStatusesForRef(ctx, operations.ReposListCommitStatusesForRefRequest{
        Owner: "dicta",
        Page: sdk.Int64(552439),
        PerPage: sdk.Int64(356315),
        Ref: "dolore",
        Repo: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Statuses != nil {
        // handle response
    }
}
```

## ReposListCommits

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

| Name | Type | Description |
| ---- | ---- | ----------- |
| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
| `signature` | `string` | The signature that was extracted from the commit. |
| `payload` | `string` | The value that was signed. |

These are the possible values for `reason` in the `verification` object:

| Value | Description |
| ----- | ----------- |
| `expired_key` | The key that made the signature is expired. |
| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
| `gpgverify_error` | There was an error communicating with the signature verification service. |
| `gpgverify_unavailable` | The signature verification service is currently unavailable. |
| `unsigned` | The object does not include a signature. |
| `unknown_signature_type` | A non-PGP signature was found in the commit. |
| `no_user` | No user was associated with the `committer` email address in the commit. |
| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
| `unknown_key` | The key that made the signature has not been registered with any user's account. |
| `malformed_signature` | There was an error parsing the signature. |
| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
| `valid` | None of the above errors applied, so the signature is considered to be verified. |

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-commits>

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Repos.ReposListCommits(ctx, operations.ReposListCommitsRequest{
        Author: sdk.String("itaque"),
        Owner: "maxime",
        Page: sdk.Int64(265905),
        Path: sdk.String("consequuntur"),
        PerPage: sdk.Int64(828147),
        Repo: "vero",
        Sha: sdk.String("doloribus"),
        Since: types.MustTimeFromString("2020-08-26T04:20:10.413Z"),
        Until: types.MustTimeFromString("2021-06-11T16:56:41.770Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Commits != nil {
        // handle response
    }
}
```

## ReposListContributors

Lists contributors to the specified repository and sorts them by the number of commits per contributor in descending order. This endpoint may return information that is a few hours old because the GitHub REST API v3 caches contributor data to improve performance.

GitHub identifies contributors by author email address. This endpoint groups contribution counts by GitHub user, which includes all associated email addresses. To improve performance, only the first 500 author email addresses in the repository link to GitHub users. The rest will appear as anonymous contributors without associated GitHub user information.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-repository-contributors>

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
    res, err := s.Repos.ReposListContributors(ctx, operations.ReposListContributorsRequest{
        Anon: sdk.String("reiciendis"),
        Owner: "ab",
        Page: sdk.Int64(573444),
        PerPage: sdk.Int64(472414),
        Repo: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Contributors != nil {
        // handle response
    }
}
```

## ReposListDeployKeys

List deploy keys

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-deploy-keys>

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
    res, err := s.Repos.ReposListDeployKeys(ctx, operations.ReposListDeployKeysRequest{
        Owner: "iure",
        Page: sdk.Int64(485031),
        PerPage: sdk.Int64(202796),
        Repo: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeployKeys != nil {
        // handle response
    }
}
```

## ReposListDeploymentStatuses

Users with pull access can view deployment statuses for a deployment:

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-deployment-statuses>

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
    res, err := s.Repos.ReposListDeploymentStatuses(ctx, operations.ReposListDeploymentStatusesRequest{
        DeploymentID: 423588,
        Owner: "neque",
        Page: sdk.Int64(357758),
        PerPage: sdk.Int64(375350),
        Repo: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeploymentStatuses != nil {
        // handle response
    }
}
```

## ReposListDeployments

Simple filtering of deployments is available via query parameters:

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-deployments>

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
    res, err := s.Repos.ReposListDeployments(ctx, operations.ReposListDeploymentsRequest{
        Environment: sdk.String("officia"),
        Owner: "reprehenderit",
        Page: sdk.Int64(716033),
        PerPage: sdk.Int64(262800),
        Ref: sdk.String("ipsa"),
        Repo: "rem",
        Sha: sdk.String("maiores"),
        Task: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deployments != nil {
        // handle response
    }
}
```

## ReposListForAuthenticatedUser

Lists repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-repositories-for-the-authenticated-user>

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Repos.ReposListForAuthenticatedUser(ctx, operations.ReposListForAuthenticatedUserRequest{
        Affiliation: sdk.String("veniam"),
        Before: types.MustTimeFromString("2022-05-20T08:39:00.501Z"),
        Direction: operations.ReposListForAuthenticatedUserDirectionEnumDesc.ToPointer(),
        Page: sdk.Int64(307173),
        PerPage: sdk.Int64(552581),
        Since: types.MustTimeFromString("2020-06-12T06:28:13.330Z"),
        Sort: operations.ReposListForAuthenticatedUserSortEnumPushed.ToPointer(),
        Type: operations.ReposListForAuthenticatedUserTypeEnumMember.ToPointer(),
        Visibility: operations.ReposListForAuthenticatedUserVisibilityEnumAll.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Repositories != nil {
        // handle response
    }
}
```

## ReposListForOrg

Lists repositories for the specified organization.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-organization-repositories>

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
    res, err := s.Repos.ReposListForOrg(ctx, operations.ReposListForOrgRequest{
        Direction: operations.ReposListForOrgDirectionEnumAsc.ToPointer(),
        Org: "nesciunt",
        Page: sdk.Int64(630832),
        PerPage: sdk.Int64(74895),
        Sort: operations.ReposListForOrgSortEnumFullName.ToPointer(),
        Type: operations.ReposListForOrgTypeEnumPrivate.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MinimalRepositories != nil {
        // handle response
    }
}
```

## ReposListForUser

Lists public repositories for the specified user. Note: For GitHub AE, this endpoint will list internal repositories for the specified user.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-repositories-for-a-user>

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
    res, err := s.Repos.ReposListForUser(ctx, operations.ReposListForUserRequest{
        Direction: operations.ReposListForUserDirectionEnumDesc.ToPointer(),
        Page: sdk.Int64(823753),
        PerPage: sdk.Int64(603323),
        Sort: operations.ReposListForUserSortEnumUpdated.ToPointer(),
        Type: operations.ReposListForUserTypeEnumAll.ToPointer(),
        Username: "Freeman.McCullough69",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MinimalRepositories != nil {
        // handle response
    }
}
```

## ReposListForks

List forks

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-forks>

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
    res, err := s.Repos.ReposListForks(ctx, operations.ReposListForksRequest{
        Owner: "nesciunt",
        Page: sdk.Int64(412433),
        PerPage: sdk.Int64(956124),
        Repo: "consequuntur",
        Sort: operations.ReposListForksSortEnumOldest.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MinimalRepositories != nil {
        // handle response
    }
}
```

## ReposListInvitations

When authenticating as a user with admin rights to a repository, this endpoint will list all currently open repository invitations.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-repository-invitations>

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
    res, err := s.Repos.ReposListInvitations(ctx, operations.ReposListInvitationsRequest{
        Owner: "debitis",
        Page: sdk.Int64(638390),
        PerPage: sdk.Int64(575062),
        Repo: "ut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryInvitations != nil {
        // handle response
    }
}
```

## ReposListInvitationsForAuthenticatedUser

When authenticating as a user, this endpoint will list all currently open repository invitations for that user.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-repository-invitations-for-the-authenticated-user>

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
    res, err := s.Repos.ReposListInvitationsForAuthenticatedUser(ctx, operations.ReposListInvitationsForAuthenticatedUserRequest{
        Page: sdk.Int64(256768),
        PerPage: sdk.Int64(947822),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryInvitations != nil {
        // handle response
    }
}
```

## ReposListLanguages

Lists languages for the specified repository. The value shown for each language is the number of bytes of code written in that language.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-repository-languages>

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
    res, err := s.Repos.ReposListLanguages(ctx, operations.ReposListLanguagesRequest{
        Owner: "adipisci",
        Repo: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Language != nil {
        // handle response
    }
}
```

## ReposListPagesBuilds

List GitHub Enterprise Server Pages builds

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-github-pages-builds>

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
    res, err := s.Repos.ReposListPagesBuilds(ctx, operations.ReposListPagesBuildsRequest{
        Owner: "in",
        Page: sdk.Int64(329651),
        PerPage: sdk.Int64(403147),
        Repo: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PageBuilds != nil {
        // handle response
    }
}
```

## ReposListPublic

Lists all public repositories in the order that they were created.

Note:
- For GitHub Enterprise Server, this endpoint will only list repositories available to all users on the enterprise.
- Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of repositories.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-public-repositories>

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
    res, err := s.Repos.ReposListPublic(ctx, operations.ReposListPublicRequest{
        Since: sdk.Int64(68880),
        Visibility: operations.ReposListPublicVisibilityEnumAll.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MinimalRepositories != nil {
        // handle response
    }
}
```

## ReposListPullRequestsAssociatedWithCommit

Lists the merged pull request that introduced the commit to the repository. If the commit is not present in the default branch, additionally returns open pull requests associated with the commit. The results may include open and closed pull requests. Additional preview headers may be required to see certain details for associated pull requests, such as whether a pull request is in a draft state. For more information about previews that might affect this endpoint, see the [List pull requests](https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-pull-requests) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-pull-requests-associated-with-a-commit>

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
    res, err := s.Repos.ReposListPullRequestsAssociatedWithCommit(ctx, operations.ReposListPullRequestsAssociatedWithCommitRequest{
        CommitSha: "beatae",
        Owner: "hic",
        Page: sdk.Int64(392319),
        PerPage: sdk.Int64(786954),
        Repo: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullRequestSimples != nil {
        // handle response
    }
}
```

## ReposListReleaseAssets

List release assets

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-release-assets>

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
    res, err := s.Repos.ReposListReleaseAssets(ctx, operations.ReposListReleaseAssetsRequest{
        Owner: "ducimus",
        Page: sdk.Int64(683727),
        PerPage: sdk.Int64(326903),
        ReleaseID: 102446,
        Repo: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleaseAssets != nil {
        // handle response
    }
}
```

## ReposListReleases

This returns a list of releases, which does not include regular Git tags that have not been associated with a release. To get a list of Git tags, use the [Repository Tags API](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-repository-tags).

Information about published releases are available to everyone. Only users with push access will receive listings for draft releases.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-releases>

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
    res, err := s.Repos.ReposListReleases(ctx, operations.ReposListReleasesRequest{
        Owner: "aliquid",
        Page: sdk.Int64(166289),
        PerPage: sdk.Int64(276650),
        Repo: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Releases != nil {
        // handle response
    }
}
```

## ReposListTags

List repository tags

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-repository-tags>

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
    res, err := s.Repos.ReposListTags(ctx, operations.ReposListTagsRequest{
        Owner: "praesentium",
        Page: sdk.Int64(220528),
        PerPage: sdk.Int64(349898),
        Repo: "expedita",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tags != nil {
        // handle response
    }
}
```

## ReposListTeams

List repository teams

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-repository-teams>

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
    res, err := s.Repos.ReposListTeams(ctx, operations.ReposListTeamsRequest{
        Owner: "facilis",
        Page: sdk.Int64(769634),
        PerPage: sdk.Int64(24577),
        Repo: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## ReposListWebhooks

List repository webhooks

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-repository-webhooks>

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
    res, err := s.Repos.ReposListWebhooks(ctx, operations.ReposListWebhooksRequest{
        Owner: "culpa",
        Page: sdk.Int64(159393),
        PerPage: sdk.Int64(230571),
        Repo: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Hooks != nil {
        // handle response
    }
}
```

## ReposMerge

Merge a branch

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#merge-a-branch>

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
    res, err := s.Repos.ReposMerge(ctx, operations.ReposMergeRequest{
        RequestBody: operations.ReposMergeRequestBody{
            Base: "modi",
            CommitMessage: sdk.String("veniam"),
            Head: "quod",
        },
        Owner: "itaque",
        Repo: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Commit != nil {
        // handle response
    }
}
```

## ReposPingWebhook

This will trigger a [ping event](https://docs.github.com/enterprise-server@3.0/webhooks/#ping-event) to be sent to the hook.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#ping-a-repository-webhook>

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
    res, err := s.Repos.ReposPingWebhook(ctx, operations.ReposPingWebhookRequest{
        HookID: 788661,
        Owner: "enim",
        Repo: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposRemoveAppAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removes the ability of an app to push to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

| Type    | Description                                                                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#remove-app-access-restrictions>

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
    res, err := s.Repos.ReposRemoveAppAccessRestrictions(ctx, operations.ReposRemoveAppAccessRestrictionsRequest{
        RequestBody: &operations.ReposRemoveAppAccessRestrictionsRequestBody{},
        Branch: "assumenda",
        Owner: "officiis",
        Repo: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Integrations != nil {
        // handle response
    }
}
```

## ReposRemoveCollaborator

Remove a repository collaborator

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#remove-a-repository-collaborator>

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
    res, err := s.Repos.ReposRemoveCollaborator(ctx, operations.ReposRemoveCollaboratorRequest{
        Owner: "alias",
        Repo: "culpa",
        Username: "Angel.Rolfson11",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposRemoveStatusCheckContexts

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#remove-status-check-contexts>

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
    res, err := s.Repos.ReposRemoveStatusCheckContexts(ctx, operations.ReposRemoveStatusCheckContextsRequest{
        RequestBody: &operations.ReposRemoveStatusCheckContextsRequestBody{},
        Branch: "vel",
        Owner: "perspiciatis",
        Repo: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReposRemoveStatusCheckContexts200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ReposRemoveStatusCheckProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#remove-status-check-protection>

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
    res, err := s.Repos.ReposRemoveStatusCheckProtection(ctx, operations.ReposRemoveStatusCheckProtectionRequest{
        Branch: "ullam",
        Owner: "architecto",
        Repo: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposRemoveTeamAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removes the ability of a team to push to this branch. You can also remove push access for child teams.

| Type    | Description                                                                                                                                         |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | Teams that should no longer have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#remove-team-access-restrictions>

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
    res, err := s.Repos.ReposRemoveTeamAccessRestrictions(ctx, operations.ReposRemoveTeamAccessRestrictionsRequest{
        RequestBody: &operations.ReposRemoveTeamAccessRestrictionsRequestBody{},
        Branch: "perferendis",
        Owner: "veritatis",
        Repo: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## ReposRemoveUserAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removes the ability of a user to push to this branch.

| Type    | Description                                                                                                                                   |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames of the people who should no longer have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#remove-user-access-restrictions>

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
    res, err := s.Repos.ReposRemoveUserAccessRestrictions(ctx, operations.ReposRemoveUserAccessRestrictionsRequest{
        RequestBody: &operations.ReposRemoveUserAccessRestrictionsRequestBody{},
        Branch: "cumque",
        Owner: "iure",
        Repo: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## ReposReplaceAllTopics

Replace all repository topics

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#replace-all-repository-topics>

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
    res, err := s.Repos.ReposReplaceAllTopics(ctx, operations.ReposReplaceAllTopicsRequest{
        RequestBody: operations.ReposReplaceAllTopicsRequestBody{
            Names: []string{
                "nemo",
                "recusandae",
                "velit",
                "magnam",
            },
        },
        Owner: "dignissimos",
        Repo: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Topic != nil {
        // handle response
    }
}
```

## ReposRequestPagesBuild

You can request that your site be built from the latest revision on the default branch. This has the same effect as pushing a commit to your default branch, but does not require an additional commit. Manually triggering page builds can be helpful when diagnosing build warnings and failures.

Build requests are limited to one concurrent build per repository and one concurrent build per requester. If you request a build while another is still in progress, the second request will be queued until the first completes.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#request-a-github-pages-build>

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
    res, err := s.Repos.ReposRequestPagesBuild(ctx, operations.ReposRequestPagesBuildRequest{
        Owner: "sed",
        Repo: "odio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PageBuildStatus != nil {
        // handle response
    }
}
```

## ReposSetAdminBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Adding admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#set-admin-branch-protection>

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
    res, err := s.Repos.ReposSetAdminBranchProtection(ctx, operations.ReposSetAdminBranchProtectionRequest{
        Branch: "natus",
        Owner: "provident",
        Repo: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtectedBranchAdminEnforced != nil {
        // handle response
    }
}
```

## ReposSetAppAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Replaces the list of apps that have push access to this branch. This removes all apps that previously had push access and grants push access to the new list of apps. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

| Type    | Description                                                                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#set-app-access-restrictions>

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
    res, err := s.Repos.ReposSetAppAccessRestrictions(ctx, operations.ReposSetAppAccessRestrictionsRequest{
        RequestBody: &operations.ReposSetAppAccessRestrictionsRequestBody{},
        Branch: "doloribus",
        Owner: "facilis",
        Repo: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Integrations != nil {
        // handle response
    }
}
```

## ReposSetStatusCheckContexts

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#set-status-check-contexts>

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
    res, err := s.Repos.ReposSetStatusCheckContexts(ctx, operations.ReposSetStatusCheckContextsRequest{
        RequestBody: &operations.ReposSetStatusCheckContextsRequestBody{},
        Branch: "itaque",
        Owner: "laboriosam",
        Repo: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReposSetStatusCheckContexts200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ReposSetTeamAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Replaces the list of teams that have push access to this branch. This removes all teams that previously had push access and grants push access to the new list of teams. Team restrictions include child teams.

| Type    | Description                                                                                                                                |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#set-team-access-restrictions>

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
    res, err := s.Repos.ReposSetTeamAccessRestrictions(ctx, operations.ReposSetTeamAccessRestrictionsRequest{
        RequestBody: &operations.ReposSetTeamAccessRestrictionsRequestBody{},
        Branch: "modi",
        Owner: "perspiciatis",
        Repo: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## ReposSetUserAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Replaces the list of people that have push access to this branch. This removes all people that previously had push access and grants push access to the new list of people.

| Type    | Description                                                                                                                   |
| ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#set-user-access-restrictions>

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
    res, err := s.Repos.ReposSetUserAccessRestrictions(ctx, operations.ReposSetUserAccessRestrictionsRequest{
        RequestBody: &operations.ReposSetUserAccessRestrictionsRequestBody{},
        Branch: "cum",
        Owner: "aspernatur",
        Repo: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## ReposTestPushWebhook

This will trigger the hook with the latest push to the current repository if the hook is subscribed to `push` events. If the hook is not subscribed to `push` events, the server will respond with 204 but no test POST will be generated.

**Note**: Previously `/repos/:owner/:repo/hooks/:hook_id/test`

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#test-the-push-repository-webhook>

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
    res, err := s.Repos.ReposTestPushWebhook(ctx, operations.ReposTestPushWebhookRequest{
        HookID: 720266,
        Owner: "incidunt",
        Repo: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposTransfer

A transfer request will need to be accepted by the new owner when transferring a personal repository to another user. The response will contain the original `owner`, and the transfer will continue asynchronously. For more details on the requirements to transfer personal and organization-owned repositories, see [about repository transfers](https://docs.github.com/articles/about-repository-transfers/).

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#transfer-a-repository>

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
    res, err := s.Repos.ReposTransfer(ctx, operations.ReposTransferRequest{
        RequestBody: operations.ReposTransferRequestBody{
            NewOwner: "quod",
            TeamIds: []int64{
                904440,
                423054,
                779409,
            },
        },
        Owner: "nesciunt",
        Repo: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MinimalRepository != nil {
        // handle response
    }
}
```

## ReposUpdate

**Note**: To edit a repository's topics, use the [Replace all repository topics](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#replace-all-repository-topics) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos/#update-a-repository>

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
    res, err := s.Repos.ReposUpdate(ctx, operations.ReposUpdateRequest{
        RequestBody: &operations.ReposUpdateRequestBody{
            AllowForking: sdk.Bool(false),
            AllowMergeCommit: sdk.Bool(false),
            AllowRebaseMerge: sdk.Bool(false),
            AllowSquashMerge: sdk.Bool(false),
            Archived: sdk.Bool(false),
            DefaultBranch: sdk.String("nemo"),
            DeleteBranchOnMerge: sdk.Bool(false),
            Description: sdk.String("illum"),
            HasIssues: sdk.Bool(false),
            HasProjects: sdk.Bool(false),
            HasWiki: sdk.Bool(false),
            Homepage: sdk.String("facilis"),
            IsTemplate: sdk.Bool(false),
            Name: sdk.String("Iris Shields"),
            Private: sdk.Bool(false),
            Visibility: operations.ReposUpdateRequestBodyVisibilityEnumInternal.ToPointer(),
        },
        Owner: "ad",
        Repo: "facere",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FullRepository != nil {
        // handle response
    }
}
```

## ReposUpdateBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Protecting a branch requires admin or owner permissions to the repository.

**Note**: Passing new arrays of `users` and `teams` replaces their previous values.

**Note**: The list of users, apps, and teams in total is limited to 100 items.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#update-branch-protection>

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
    res, err := s.Repos.ReposUpdateBranchProtection(ctx, operations.ReposUpdateBranchProtectionRequest{
        RequestBody: operations.ReposUpdateBranchProtectionRequestBody{
            AllowDeletions: sdk.Bool(false),
            AllowForcePushes: sdk.Bool(false),
            Contexts: []string{
                "eveniet",
                "laborum",
                "incidunt",
            },
            EnforceAdmins: false,
            RequiredConversationResolution: sdk.Bool(false),
            RequiredLinearHistory: sdk.Bool(false),
            RequiredPullRequestReviews: operations.ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews{
                DismissStaleReviews: sdk.Bool(false),
                DismissalRestrictions: &operations.ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions{
                    Teams: []string{
                        "ipsam",
                        "alias",
                        "suscipit",
                        "deserunt",
                    },
                    Users: []string{
                        "laborum",
                        "est",
                        "occaecati",
                    },
                },
                RequireCodeOwnerReviews: sdk.Bool(false),
                RequiredApprovingReviewCount: sdk.Int64(286716),
            },
            RequiredStatusChecks: operations.ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks{
                Checks: []ReposUpdateBranchProtectionRequestBodyRequiredStatusChecksChecks{
                    operations.ReposUpdateBranchProtectionRequestBodyRequiredStatusChecksChecks{
                        AppID: sdk.Int64(19462),
                        Context: "fugit",
                    },
                    operations.ReposUpdateBranchProtectionRequestBodyRequiredStatusChecksChecks{
                        AppID: sdk.Int64(399222),
                        Context: "magnam",
                    },
                    operations.ReposUpdateBranchProtectionRequestBodyRequiredStatusChecksChecks{
                        AppID: sdk.Int64(308528),
                        Context: "eligendi",
                    },
                    operations.ReposUpdateBranchProtectionRequestBodyRequiredStatusChecksChecks{
                        AppID: sdk.Int64(942185),
                        Context: "nostrum",
                    },
                },
                Contexts: []string{
                    "unde",
                    "nulla",
                    "error",
                    "mollitia",
                },
                Strict: false,
            },
            Restrictions: operations.ReposUpdateBranchProtectionRequestBodyRestrictions{
                Apps: []string{
                    "nostrum",
                    "esse",
                },
                Teams: []string{
                    "fuga",
                    "facere",
                    "impedit",
                },
                Users: []string{
                    "deserunt",
                },
            },
        },
        Branch: "quod",
        Owner: "laboriosam",
        Repo: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtectedBranch != nil {
        // handle response
    }
}
```

## ReposUpdateCommitComment

Update a commit comment

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#update-a-commit-comment>

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
    res, err := s.Repos.ReposUpdateCommitComment(ctx, operations.ReposUpdateCommitCommentRequest{
        RequestBody: operations.ReposUpdateCommitCommentRequestBody{
            Body: "voluptatem",
        },
        CommentID: 816421,
        Owner: "necessitatibus",
        Repo: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommitComment != nil {
        // handle response
    }
}
```

## ReposUpdateInformationAboutPagesSite

Updates information for a GitHub Enterprise Server Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages).

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#update-information-about-a-github-pages-site>

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
    res, err := s.Repos.ReposUpdateInformationAboutPagesSite(ctx, operations.ReposUpdateInformationAboutPagesSiteRequest{
        RequestBody: operations.ReposUpdateInformationAboutPagesSiteRequestBody1{
            Cname: sdk.String("eaque"),
            HTTPSEnforced: sdk.Bool(false),
            Public: sdk.Bool(false),
            Source: operations.ReposUpdateInformationAboutPagesSiteRequestBody1Source1EnumMaster,
        },
        Owner: "porro",
        Repo: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReposUpdateInvitation

Update a repository invitation

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#update-a-repository-invitation>

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
    res, err := s.Repos.ReposUpdateInvitation(ctx, operations.ReposUpdateInvitationRequest{
        RequestBody: &operations.ReposUpdateInvitationRequestBody{
            Permissions: operations.ReposUpdateInvitationRequestBodyPermissionsEnumRead.ToPointer(),
        },
        InvitationID: 169819,
        Owner: "officiis",
        Repo: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryInvitation != nil {
        // handle response
    }
}
```

## ReposUpdatePullRequestReviewProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Updating pull request review enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

**Note**: Passing new arrays of `users` and `teams` replaces their previous values.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#update-pull-request-review-protection>

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
    res, err := s.Repos.ReposUpdatePullRequestReviewProtection(ctx, operations.ReposUpdatePullRequestReviewProtectionRequest{
        RequestBody: &operations.ReposUpdatePullRequestReviewProtectionRequestBody{
            DismissStaleReviews: sdk.Bool(false),
            DismissalRestrictions: &operations.ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions{
                Teams: []string{
                    "impedit",
                    "ipsa",
                    "excepturi",
                    "a",
                },
                Users: []string{
                    "laudantium",
                    "maiores",
                    "alias",
                    "asperiores",
                },
            },
            RequireCodeOwnerReviews: sdk.Bool(false),
            RequiredApprovingReviewCount: sdk.Int64(523365),
        },
        Branch: "dicta",
        Owner: "suscipit",
        Repo: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtectedBranchPullRequestReview != nil {
        // handle response
    }
}
```

## ReposUpdateRelease

Users with push access to the repository can edit a release.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#update-a-release>

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
    res, err := s.Repos.ReposUpdateRelease(ctx, operations.ReposUpdateReleaseRequest{
        RequestBody: &operations.ReposUpdateReleaseRequestBody{
            Body: sdk.String("doloribus"),
            Draft: sdk.Bool(false),
            Name: sdk.String("Monica Koch"),
            Prerelease: sdk.Bool(false),
            TagName: sdk.String("quasi"),
            TargetCommitish: sdk.String("neque"),
        },
        Owner: "vero",
        ReleaseID: 566312,
        Repo: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Release != nil {
        // handle response
    }
}
```

## ReposUpdateReleaseAsset

Users with push access to the repository can edit a release asset.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#update-a-release-asset>

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
    res, err := s.Repos.ReposUpdateReleaseAsset(ctx, operations.ReposUpdateReleaseAssetRequest{
        RequestBody: &operations.ReposUpdateReleaseAssetRequestBody{
            Label: sdk.String("qui"),
            Name: sdk.String("Mr. Jack Gottlieb"),
            State: sdk.String(""uploaded""),
        },
        AssetID: 701441,
        Owner: "alias",
        Repo: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleaseAsset != nil {
        // handle response
    }
}
```

## ReposUpdateStatusCheckProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Updating required status checks requires admin or owner permissions to the repository and branch protection to be enabled.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#update-status-check-protection>

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
    res, err := s.Repos.ReposUpdateStatusCheckProtection(ctx, operations.ReposUpdateStatusCheckProtectionRequest{
        RequestBody: &operations.ReposUpdateStatusCheckProtectionRequestBody{
            Contexts: []string{
                "accusantium",
                "id",
            },
            Strict: sdk.Bool(false),
        },
        Branch: "laboriosam",
        Owner: "ex",
        Repo: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCheckPolicy != nil {
        // handle response
    }
}
```

## ReposUpdateWebhook

Updates a webhook configured in a repository. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for a repository](/rest/reference/repos#update-a-webhook-configuration-for-a-repository)."

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#update-a-repository-webhook>

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
    res, err := s.Repos.ReposUpdateWebhook(ctx, operations.ReposUpdateWebhookRequest{
        RequestBody: operations.ReposUpdateWebhookRequestBody{
            Active: sdk.Bool(false),
            AddEvents: []string{
                "ullam",
            },
            Config: &operations.ReposUpdateWebhookRequestBodyConfig{
                Address: sdk.String(""bar@example.com""),
                ContentType: sdk.String(""json""),
                InsecureSsl: &shared.WebhookConfigInsecureSsl{},
                Room: sdk.String(""The Serious Room""),
                Secret: sdk.String(""********""),
                URL: "https://example.com/webhook",
            },
            Events: []string{
                "similique",
            },
            RemoveEvents: []string{
                "quam",
                "magni",
            },
        },
        HookID: 646329,
        Owner: "delectus",
        Repo: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Hook != nil {
        // handle response
    }
}
```

## ReposUpdateWebhookConfigForRepo

Updates the webhook configuration for a repository. To update more information about the webhook, including the `active` state and `events`, use "[Update a repository webhook](/rest/reference/orgs#update-a-repository-webhook)."

Access tokens must have the `write:repo_hook` or `repo` scope, and GitHub Apps must have the `repository_hooks:write` permission.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#update-a-webhook-configuration-for-a-repository>

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
    res, err := s.Repos.ReposUpdateWebhookConfigForRepo(ctx, operations.ReposUpdateWebhookConfigForRepoRequest{
        RequestBody: &operations.ReposUpdateWebhookConfigForRepoRequestBody{
            ContentType: sdk.String(""json""),
            InsecureSsl: &shared.WebhookConfigInsecureSsl{},
            Secret: sdk.String(""********""),
            URL: sdk.String("https://example.com/webhook"),
        },
        HookID: 151230,
        Owner: "nesciunt",
        Repo: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookConfig != nil {
        // handle response
    }
}
```

## ReposUploadReleaseAsset

This endpoint makes use of [a Hypermedia relation](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#hypermedia) to determine which URL to access. The endpoint you call to upload release assets is specific to your release. Use the `upload_url` returned in
the response of the [Create a release endpoint](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-a-release) to upload a release asset.

You need to use an HTTP client which supports [SNI](http://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.

Most libraries will set the required `Content-Length` header automatically. Use the required `Content-Type` header to provide the media type of the asset. For a list of media types, see [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). For example: 

`application/zip`

GitHub Enterprise Server expects the asset data in its raw binary form, rather than JSON. You will send the raw binary content of the asset as the request body. Everything else about the endpoint is the same as the rest of the API. For example,
you'll still need to pass your authentication to be able to upload an asset.

When an upstream failure occurs, you will receive a `502 Bad Gateway` status. This may leave an empty asset with a state of `starter`. It can be safely deleted.

**Notes:**
*   GitHub Enterprise Server renames asset filenames that have special characters, non-alphanumeric characters, and leading or trailing periods. The "[List assets for a release](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-assets-for-a-release)"
endpoint lists the renamed filenames. For more information and help, contact [GitHub Enterprise Server Support](https://support.github.com/contact?tags=dotcom-rest-api).
*   If you upload an asset with the same filename as another uploaded asset, you'll receive an error and must delete the old file before you can re-upload the new asset.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/repos#upload-a-release-asset>

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
    res, err := s.Repos.ReposUploadReleaseAsset(ctx, operations.ReposUploadReleaseAssetRequest{
        RequestBody: sdk.String("quis"),
        Label: sdk.String("cupiditate"),
        Name: "Miriam Wuckert",
        Owner: "reiciendis",
        ReleaseID: 230305,
        Repo: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleaseAsset != nil {
        // handle response
    }
}
```
