# repos

## Overview

Interact with GitHub Repos.

### Available Operations

* [reposAcceptInvitation](#reposacceptinvitation) - Accept a repository invitation
* [reposAddAppAccessRestrictions](#reposaddappaccessrestrictions) - Add app access restrictions
* [reposAddCollaborator](#reposaddcollaborator) - Add a repository collaborator
* [reposAddStatusCheckContexts](#reposaddstatuscheckcontexts) - Add status check contexts
* [reposAddTeamAccessRestrictions](#reposaddteamaccessrestrictions) - Add team access restrictions
* [reposAddUserAccessRestrictions](#reposadduseraccessrestrictions) - Add user access restrictions
* [reposCheckCollaborator](#reposcheckcollaborator) - Check if a user is a repository collaborator
* [reposCompareCommits](#reposcomparecommits) - Compare two commits
* [reposCreateCommitComment](#reposcreatecommitcomment) - Create a commit comment
* [reposCreateCommitSignatureProtection](#reposcreatecommitsignatureprotection) - Create commit signature protection
* [reposCreateCommitStatus](#reposcreatecommitstatus) - Create a commit status
* [reposCreateDeployKey](#reposcreatedeploykey) - Create a deploy key
* [reposCreateDeployment](#reposcreatedeployment) - Create a deployment
* [reposCreateDeploymentStatus](#reposcreatedeploymentstatus) - Create a deployment status
* [reposCreateForAuthenticatedUser](#reposcreateforauthenticateduser) - Create a repository for the authenticated user
* [reposCreateFork](#reposcreatefork) - Create a fork
* [reposCreateInOrg](#reposcreateinorg) - Create an organization repository
* [reposCreateOrUpdateFileContents](#reposcreateorupdatefilecontents) - Create or update file contents
* [reposCreatePagesSite](#reposcreatepagessite) - Create a GitHub Pages site
* [reposCreateRelease](#reposcreaterelease) - Create a release
* [reposCreateUsingTemplate](#reposcreateusingtemplate) - Create a repository using a template
* [reposCreateWebhook](#reposcreatewebhook) - Create a repository webhook
* [reposDeclineInvitation](#reposdeclineinvitation) - Decline a repository invitation
* [reposDelete](#reposdelete) - Delete a repository
* [reposDeleteAccessRestrictions](#reposdeleteaccessrestrictions) - Delete access restrictions
* [reposDeleteAdminBranchProtection](#reposdeleteadminbranchprotection) - Delete admin branch protection
* [reposDeleteBranchProtection](#reposdeletebranchprotection) - Delete branch protection
* [reposDeleteCommitComment](#reposdeletecommitcomment) - Delete a commit comment
* [reposDeleteCommitSignatureProtection](#reposdeletecommitsignatureprotection) - Delete commit signature protection
* [reposDeleteDeployKey](#reposdeletedeploykey) - Delete a deploy key
* [reposDeleteFile](#reposdeletefile) - Delete a file
* [reposDeleteInvitation](#reposdeleteinvitation) - Delete a repository invitation
* [reposDeletePagesSite](#reposdeletepagessite) - Delete a GitHub Enterprise Server Pages site
* [reposDeletePullRequestReviewProtection](#reposdeletepullrequestreviewprotection) - Delete pull request review protection
* [reposDeleteRelease](#reposdeleterelease) - Delete a release
* [reposDeleteReleaseAsset](#reposdeletereleaseasset) - Delete a release asset
* [reposDeleteWebhook](#reposdeletewebhook) - Delete a repository webhook
* [reposDownloadTarballArchive](#reposdownloadtarballarchive) - Download a repository archive (tar)
* [reposDownloadZipballArchive](#reposdownloadzipballarchive) - Download a repository archive (zip)
* [reposGet](#reposget) - Get a repository
* [reposGetAccessRestrictions](#reposgetaccessrestrictions) - Get access restrictions
* [reposGetAdminBranchProtection](#reposgetadminbranchprotection) - Get admin branch protection
* [reposGetAllStatusCheckContexts](#reposgetallstatuscheckcontexts) - Get all status check contexts
* [reposGetAllTopics](#reposgetalltopics) - Get all repository topics
* [reposGetAppsWithAccessToProtectedBranch](#reposgetappswithaccesstoprotectedbranch) - Get apps with access to the protected branch
* [reposGetBranch](#reposgetbranch) - Get a branch
* [reposGetBranchProtection](#reposgetbranchprotection) - Get branch protection
* [reposGetCodeFrequencyStats](#reposgetcodefrequencystats) - Get the weekly commit activity
* [reposGetCollaboratorPermissionLevel](#reposgetcollaboratorpermissionlevel) - Get repository permissions for a user
* [reposGetCombinedStatusForRef](#reposgetcombinedstatusforref) - Get the combined status for a specific reference
* [reposGetCommit](#reposgetcommit) - Get a commit
* [reposGetCommitActivityStats](#reposgetcommitactivitystats) - Get the last year of commit activity
* [reposGetCommitComment](#reposgetcommitcomment) - Get a commit comment
* [reposGetCommitSignatureProtection](#reposgetcommitsignatureprotection) - Get commit signature protection
* [reposGetContent](#reposgetcontent) - Get repository content
* [reposGetContributorsStats](#reposgetcontributorsstats) - Get all contributor commit activity
* [reposGetDeployKey](#reposgetdeploykey) - Get a deploy key
* [reposGetDeployment](#reposgetdeployment) - Get a deployment
* [reposGetDeploymentStatus](#reposgetdeploymentstatus) - Get a deployment status
* [reposGetLatestPagesBuild](#reposgetlatestpagesbuild) - Get latest Pages build
* [reposGetLatestRelease](#reposgetlatestrelease) - Get the latest release
* [reposGetPages](#reposgetpages) - Get a GitHub Enterprise Server Pages site
* [reposGetPagesBuild](#reposgetpagesbuild) - Get GitHub Enterprise Server Pages build
* [reposGetParticipationStats](#reposgetparticipationstats) - Get the weekly commit count
* [reposGetPullRequestReviewProtection](#reposgetpullrequestreviewprotection) - Get pull request review protection
* [reposGetPunchCardStats](#reposgetpunchcardstats) - Get the hourly commit count for each day
* [reposGetReadme](#reposgetreadme) - Get a repository README
* [reposGetReadmeInDirectory](#reposgetreadmeindirectory) - Get a repository README for a directory
* [reposGetRelease](#reposgetrelease) - Get a release
* [reposGetReleaseAsset](#reposgetreleaseasset) - Get a release asset
* [reposGetReleaseByTag](#reposgetreleasebytag) - Get a release by tag name
* [reposGetStatusChecksProtection](#reposgetstatuschecksprotection) - Get status checks protection
* [reposGetTeamsWithAccessToProtectedBranch](#reposgetteamswithaccesstoprotectedbranch) - Get teams with access to the protected branch
* [reposGetUsersWithAccessToProtectedBranch](#reposgetuserswithaccesstoprotectedbranch) - Get users with access to the protected branch
* [reposGetWebhook](#reposgetwebhook) - Get a repository webhook
* [reposListBranches](#reposlistbranches) - List branches
* [reposListBranchesForHeadCommit](#reposlistbranchesforheadcommit) - List branches for HEAD commit
* [reposListCollaborators](#reposlistcollaborators) - List repository collaborators
* [reposListCommentsForCommit](#reposlistcommentsforcommit) - List commit comments
* [reposListCommitCommentsForRepo](#reposlistcommitcommentsforrepo) - List commit comments for a repository
* [reposListCommitStatusesForRef](#reposlistcommitstatusesforref) - List commit statuses for a reference
* [reposListCommits](#reposlistcommits) - List commits
* [reposListContributors](#reposlistcontributors) - List repository contributors
* [reposListDeployKeys](#reposlistdeploykeys) - List deploy keys
* [reposListDeploymentStatuses](#reposlistdeploymentstatuses) - List deployment statuses
* [reposListDeployments](#reposlistdeployments) - List deployments
* [reposListForAuthenticatedUser](#reposlistforauthenticateduser) - List repositories for the authenticated user
* [reposListForOrg](#reposlistfororg) - List organization repositories
* [reposListForUser](#reposlistforuser) - List repositories for a user
* [reposListForks](#reposlistforks) - List forks
* [reposListInvitations](#reposlistinvitations) - List repository invitations
* [reposListInvitationsForAuthenticatedUser](#reposlistinvitationsforauthenticateduser) - List repository invitations for the authenticated user
* [reposListLanguages](#reposlistlanguages) - List repository languages
* [reposListPagesBuilds](#reposlistpagesbuilds) - List GitHub Enterprise Server Pages builds
* [reposListPublic](#reposlistpublic) - List public repositories
* [reposListPullRequestsAssociatedWithCommit](#reposlistpullrequestsassociatedwithcommit) - List pull requests associated with a commit
* [reposListReleaseAssets](#reposlistreleaseassets) - List release assets
* [reposListReleases](#reposlistreleases) - List releases
* [reposListTags](#reposlisttags) - List repository tags
* [reposListTeams](#reposlistteams) - List repository teams
* [reposListWebhooks](#reposlistwebhooks) - List repository webhooks
* [reposMerge](#reposmerge) - Merge a branch
* [reposPingWebhook](#repospingwebhook) - Ping a repository webhook
* [reposRemoveAppAccessRestrictions](#reposremoveappaccessrestrictions) - Remove app access restrictions
* [reposRemoveCollaborator](#reposremovecollaborator) - Remove a repository collaborator
* [reposRemoveStatusCheckContexts](#reposremovestatuscheckcontexts) - Remove status check contexts
* [reposRemoveStatusCheckProtection](#reposremovestatuscheckprotection) - Remove status check protection
* [reposRemoveTeamAccessRestrictions](#reposremoveteamaccessrestrictions) - Remove team access restrictions
* [reposRemoveUserAccessRestrictions](#reposremoveuseraccessrestrictions) - Remove user access restrictions
* [reposReplaceAllTopics](#reposreplacealltopics) - Replace all repository topics
* [reposRequestPagesBuild](#reposrequestpagesbuild) - Request a GitHub Enterprise Server Pages build
* [reposSetAdminBranchProtection](#repossetadminbranchprotection) - Set admin branch protection
* [reposSetAppAccessRestrictions](#repossetappaccessrestrictions) - Set app access restrictions
* [reposSetStatusCheckContexts](#repossetstatuscheckcontexts) - Set status check contexts
* [reposSetTeamAccessRestrictions](#repossetteamaccessrestrictions) - Set team access restrictions
* [reposSetUserAccessRestrictions](#repossetuseraccessrestrictions) - Set user access restrictions
* [reposTestPushWebhook](#repostestpushwebhook) - Test the push repository webhook
* [reposTransfer](#repostransfer) - Transfer a repository
* [reposUpdate](#reposupdate) - Update a repository
* [reposUpdateBranchProtection](#reposupdatebranchprotection) - Update branch protection
* [reposUpdateCommitComment](#reposupdatecommitcomment) - Update a commit comment
* [reposUpdateInformationAboutPagesSite](#reposupdateinformationaboutpagessite) - Update information about a GitHub Pages site
* [reposUpdateInvitation](#reposupdateinvitation) - Update a repository invitation
* [reposUpdatePullRequestReviewProtection](#reposupdatepullrequestreviewprotection) - Update pull request review protection
* [reposUpdateRelease](#reposupdaterelease) - Update a release
* [reposUpdateReleaseAsset](#reposupdatereleaseasset) - Update a release asset
* [reposUpdateStatusCheckProtection](#reposupdatestatuscheckprotection) - Update status check protection
* [reposUpdateWebhook](#reposupdatewebhook) - Update a repository webhook
* [reposUploadReleaseAsset](#reposuploadreleaseasset) - Upload a release asset

## reposAcceptInvitation

Accept a repository invitation

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#accept-a-repository-invitation>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposAcceptInvitationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposAcceptInvitationRequest();
    $request->invitationId = 1207;

    $response = $sdk->repos->reposAcceptInvitation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposAddAppAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Grants the specified apps push access for this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

| Type    | Description                                                                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#add-app-access-restrictions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposAddAppAccessRestrictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposAddAppAccessRestrictionsRequest();
    $request->requestBody = [
        'ex',
        'sapiente',
        'rem',
        'minus',
    ];
    $request->branch = 'nemo';
    $request->owner = 'asperiores';
    $request->repo = 'ratione';

    $response = $sdk->repos->reposAddAppAccessRestrictions($request);

    if ($response->integrations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposAddCollaborator

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.20/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

For more information the permission levels, see "[Repository permission levels for an organization](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)".

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#http-verbs)."

The invitee will receive a notification that they have been invited to the repository, which they must accept or decline. They may do this via the notifications page, the email they receive, or by using the [repository invitations API endpoints](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#invitations).

**Rate limits**

You are limited to sending 50 invitations to a repository per 24 hour period. Note there is no limit if you are inviting organization members to an organization repository.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#add-a-repository-collaborator>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposAddCollaboratorRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposAddCollaboratorRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReposAddCollaboratorRequestBodyPermissionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposAddCollaboratorRequest();
    $request->requestBody = new ReposAddCollaboratorRequestBody();
    $request->requestBody->permission = ReposAddCollaboratorRequestBodyPermissionEnum::PUSH;
    $request->requestBody->permissions = '"push"';
    $request->owner = 'perferendis';
    $request->repo = 'illum';
    $request->username = 'Joshua_Russel37';

    $response = $sdk->repos->reposAddCollaborator($request);

    if ($response->repositoryInvitation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposAddStatusCheckContexts

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#add-status-check-contexts>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposAddStatusCheckContextsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposAddStatusCheckContextsRequest();
    $request->requestBody = [
        'aliquam',
    ];
    $request->branch = 'inventore';
    $request->owner = 'deleniti';
    $request->repo = 'veritatis';

    $response = $sdk->repos->reposAddStatusCheckContexts($request);

    if ($response->reposAddStatusCheckContexts200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposAddTeamAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Grants the specified teams push access for this branch. You can also give push access to child teams.

| Type    | Description                                                                                                                                |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#add-team-access-restrictions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposAddTeamAccessRestrictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposAddTeamAccessRestrictionsRequest();
    $request->requestBody = new ReposAddTeamAccessRestrictionsRequestBody1();
    $request->requestBody->teams = [
        'consequatur',
    ];
    $request->branch = 'architecto';
    $request->owner = 'sit';
    $request->repo = 'modi';

    $response = $sdk->repos->reposAddTeamAccessRestrictions($request);

    if ($response->teams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposAddUserAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Grants the specified people push access for this branch.

| Type    | Description                                                                                                                   |
| ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#add-user-access-restrictions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposAddUserAccessRestrictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposAddUserAccessRestrictionsRequest();
    $request->requestBody = new ReposAddUserAccessRestrictionsRequestBody1();
    $request->requestBody->users = [
        'laudantium',
    ];
    $request->branch = 'quae';
    $request->owner = 'dolor';
    $request->repo = 'fugiat';

    $response = $sdk->repos->reposAddUserAccessRestrictions($request);

    if ($response->simpleUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCheckCollaborator

For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.

Team members will include the members of child teams.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#check-if-a-user-is-a-repository-collaborator>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCheckCollaboratorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCheckCollaboratorRequest();
    $request->owner = 'ipsam';
    $request->repo = 'consequuntur';
    $request->username = 'Amy_Macejkovic88';

    $response = $sdk->repos->reposCheckCollaborator($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCompareCommits

The `basehead` param is comprised of two parts: `base` and `head`. Both must be branch names in `repo`. To compare branches across other repositories in the same network as `repo`, use the format `<USERNAME>:branch`.

The response from the API is equivalent to running the `git log base..head` command; however, commits are returned in chronological order. Pass the appropriate [media type](https://docs.github.com/enterprise-server@2.20/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.

The response also includes details on the files that were changed between the two commits. This includes the status of the change (for example, if a file was added, removed, modified, or renamed), and details of the change itself. For example, files with a `renamed` status have a `previous_filename` field showing the previous filename of the file, and files with a `modified` status have a `patch` field showing the changes made to the file.

**Working with large comparisons**

The response will include a comparison of up to 250 commits. If you are working with a larger commit range, you can use the [List commits](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-commits) to enumerate all commits in the range.

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
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#compare-two-commits>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCompareCommitsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCompareCommitsRequest();
    $request->basehead = 'esse';
    $request->owner = 'necessitatibus';
    $request->repo = 'sed';

    $response = $sdk->repos->reposCompareCommits($request);

    if ($response->commitComparison !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateCommitComment

Create a comment for a commit using its `:commit_sha`.

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.20/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-commit-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateCommitCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateCommitCommentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateCommitCommentRequest();
    $request->requestBody = new ReposCreateCommitCommentRequestBody();
    $request->requestBody->body = 'veniam';
    $request->requestBody->line = 199596;
    $request->requestBody->path = 'expedita';
    $request->requestBody->position = 432984;
    $request->commitSha = 'vel';
    $request->owner = 'voluptatum';
    $request->repo = 'magnam';

    $response = $sdk->repos->reposCreateCommitComment($request);

    if ($response->commitComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateCommitSignatureProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to require signed commits on a branch. You must enable branch protection to require signed commits.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-commit-signature-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateCommitSignatureProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateCommitSignatureProtectionRequest();
    $request->branch = 'exercitationem';
    $request->owner = 'ab';
    $request->repo = 'porro';

    $response = $sdk->repos->reposCreateCommitSignatureProtection($request);

    if ($response->protectedBranchAdminEnforced !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateCommitStatus

Users with push access in a repository can create commit statuses for a given SHA.

Note: there is a limit of 1000 statuses per `sha` and `context` within a repository. Attempts to create more than 1000 statuses will result in a validation error.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-commit-status>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateCommitStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateCommitStatusRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateCommitStatusRequestBodyStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateCommitStatusRequest();
    $request->requestBody = new ReposCreateCommitStatusRequestBody();
    $request->requestBody->context = 'autem';
    $request->requestBody->description = 'nobis';
    $request->requestBody->state = ReposCreateCommitStatusRequestBodyStateEnum::FAILURE;
    $request->requestBody->targetUrl = 'recusandae';
    $request->owner = 'consequuntur';
    $request->repo = 'voluptatem';
    $request->sha = 'exercitationem';

    $response = $sdk->repos->reposCreateCommitStatus($request);

    if ($response->status !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateDeployKey

You can create a read-only deploy key.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-deploy-key>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateDeployKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateDeployKeyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateDeployKeyRequest();
    $request->requestBody = new ReposCreateDeployKeyRequestBody();
    $request->requestBody->key = 'necessitatibus';
    $request->requestBody->readOnly = false;
    $request->requestBody->title = 'Mr.';
    $request->owner = 'nisi';
    $request->repo = 'at';

    $response = $sdk->repos->reposCreateDeployKey($request);

    if ($response->deployKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateDeployment

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

By default, [commit statuses](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#statuses) for every submitted context must be in a `success`
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
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-deployment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateDeploymentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateDeploymentRequest();
    $request->requestBody = new ReposCreateDeploymentRequestBody();
    $request->requestBody->autoMerge = false;
    $request->requestBody->description = 'vero';
    $request->requestBody->environment = 'est';
    $request->requestBody->payload = 'sequi';
    $request->requestBody->productionEnvironment = false;
    $request->requestBody->ref = 'doloribus';
    $request->requestBody->requiredContexts = [
        'optio',
        'occaecati',
        'nemo',
        'voluptate',
    ];
    $request->requestBody->task = 'blanditiis';
    $request->requestBody->transientEnvironment = false;
    $request->owner = 'officia';
    $request->repo = 'voluptas';

    $response = $sdk->repos->reposCreateDeployment($request);

    if ($response->deployment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateDeploymentStatus

Users with `push` access can create deployment statuses for a given deployment.

GitHub Apps require `read & write` access to "Deployments" and `read-only` access to "Repo contents" (for private repos). OAuth Apps require the `repo_deployment` scope.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-deployment-status>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateDeploymentStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateDeploymentStatusRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateDeploymentStatusRequestBodyEnvironmentEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateDeploymentStatusRequestBodyStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateDeploymentStatusRequest();
    $request->requestBody = new ReposCreateDeploymentStatusRequestBody();
    $request->requestBody->autoInactive = false;
    $request->requestBody->description = 'numquam';
    $request->requestBody->environment = ReposCreateDeploymentStatusRequestBodyEnvironmentEnum::STAGING;
    $request->requestBody->environmentUrl = 'quos';
    $request->requestBody->logUrl = 'eius';
    $request->requestBody->state = ReposCreateDeploymentStatusRequestBodyStateEnum::ERROR;
    $request->requestBody->targetUrl = 'ducimus';
    $request->deploymentId = 200516;
    $request->owner = 'fuga';
    $request->repo = 'laudantium';

    $response = $sdk->repos->reposCreateDeploymentStatus($request);

    if ($response->deploymentStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateForAuthenticatedUser

Creates a new repository for the authenticated user.

**OAuth scope requirements**

When using [OAuth](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

*   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
*   `repo` scope to create a private repository.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-repository-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateForAuthenticatedUserRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateForAuthenticatedUserRequestBody();
    $request->allowMergeCommit = true;
    $request->allowRebaseMerge = true;
    $request->allowSquashMerge = true;
    $request->autoInit = false;
    $request->deleteBranchOnMerge = false;
    $request->description = 'incidunt';
    $request->gitignoreTemplate = 'Haskell';
    $request->hasDownloads = true;
    $request->hasIssues = true;
    $request->hasProjects = true;
    $request->hasWiki = true;
    $request->homepage = 'quasi';
    $request->isTemplate = true;
    $request->licenseTemplate = 'mit';
    $request->name = 'Team Environment';
    $request->private = false;
    $request->teamId = 524380;

    $response = $sdk->repos->reposCreateForAuthenticatedUser($request);

    if ($response->repository !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateFork

Create a fork for the authenticated user.

**Note**: Forking a Repository happens asynchronously. You may have to wait a short period of time before you can access the git objects. If this takes longer than 5 minutes, be sure to contact [GitHub Enterprise Server Support](https://support.github.com/contact?tags=dotcom-rest-api).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-fork>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateForkRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateForkRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateForkRequest();
    $request->requestBody = new ReposCreateForkRequestBody();
    $request->requestBody->organization = 'fugiat';
    $request->owner = 'dicta';
    $request->repo = 'nisi';

    $response = $sdk->repos->reposCreateFork($request);

    if ($response->fullRepository !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateInOrg

Creates a new repository in the specified organization. The authenticated user must be a member of the organization.

**OAuth scope requirements**

When using [OAuth](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

*   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
*   `repo` scope to create a private repository

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-an-organization-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateInOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateInOrgRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateInOrgRequestBodyVisibilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateInOrgRequest();
    $request->requestBody = new ReposCreateInOrgRequestBody();
    $request->requestBody->allowMergeCommit = false;
    $request->requestBody->allowRebaseMerge = false;
    $request->requestBody->allowSquashMerge = false;
    $request->requestBody->autoInit = false;
    $request->requestBody->deleteBranchOnMerge = false;
    $request->requestBody->description = 'consequuntur';
    $request->requestBody->gitignoreTemplate = 'consectetur';
    $request->requestBody->hasIssues = false;
    $request->requestBody->hasProjects = false;
    $request->requestBody->hasWiki = false;
    $request->requestBody->homepage = 'aperiam';
    $request->requestBody->isTemplate = false;
    $request->requestBody->licenseTemplate = 'cupiditate';
    $request->requestBody->name = 'Dominic Abernathy';
    $request->requestBody->private = false;
    $request->requestBody->teamId = 579011;
    $request->requestBody->visibility = ReposCreateInOrgRequestBodyVisibilityEnum::VISIBILITY;
    $request->org = 'magni';

    $response = $sdk->repos->reposCreateInOrg($request);

    if ($response->repository !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateOrUpdateFileContents

Creates a new file or replaces an existing file in a repository.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-or-update-file-contents>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateOrUpdateFileContentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateOrUpdateFileContentsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateOrUpdateFileContentsRequestBodyAuthor;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateOrUpdateFileContentsRequestBodyCommitter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateOrUpdateFileContentsRequest();
    $request->requestBody = new ReposCreateOrUpdateFileContentsRequestBody();
    $request->requestBody->author = new ReposCreateOrUpdateFileContentsRequestBodyAuthor();
    $request->requestBody->author->date = '"2013-01-15T17:13:22+05:00"';
    $request->requestBody->author->email = 'Marques_Tillman60@gmail.com';
    $request->requestBody->author->name = 'Darrell Lang';
    $request->requestBody->branch = 'temporibus';
    $request->requestBody->committer = new ReposCreateOrUpdateFileContentsRequestBodyCommitter();
    $request->requestBody->committer->date = '"2013-01-05T13:13:22+05:00"';
    $request->requestBody->committer->email = 'Hassan_Waters@yahoo.com';
    $request->requestBody->committer->name = 'Edwin Reichert III';
    $request->requestBody->content = 'vel';
    $request->requestBody->message = 'alias';
    $request->requestBody->sha = 'quasi';
    $request->owner = 'non';
    $request->path = 'maiores';
    $request->repo = 'enim';

    $response = $sdk->repos->reposCreateOrUpdateFileContents($request);

    if ($response->fileCommit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreatePagesSite

Configures a GitHub Enterprise Server Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages)."

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-github-pages-site>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreatePagesSiteRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreatePagesSiteRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreatePagesSiteRequestBodySource;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreatePagesSiteRequestBodySourceBranchEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreatePagesSiteRequestBodySourcePathEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreatePagesSiteRequest();
    $request->requestBody = new ReposCreatePagesSiteRequestBody();
    $request->requestBody->source = new ReposCreatePagesSiteRequestBodySource();
    $request->requestBody->source->branch = ReposCreatePagesSiteRequestBodySourceBranchEnum::GH_PAGES;
    $request->requestBody->source->path = ReposCreatePagesSiteRequestBodySourcePathEnum::ROOT_DOCS;
    $request->owner = 'deserunt';
    $request->repo = 'esse';

    $response = $sdk->repos->reposCreatePagesSite($request);

    if ($response->page !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateRelease

Users with push access to the repository can create a release.

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.20/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-release>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateReleaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateReleaseRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateReleaseRequest();
    $request->requestBody = new ReposCreateReleaseRequestBody();
    $request->requestBody->body = 'nemo';
    $request->requestBody->draft = false;
    $request->requestBody->name = 'Monique Harvey';
    $request->requestBody->prerelease = false;
    $request->requestBody->tagName = 'impedit';
    $request->requestBody->targetCommitish = 'hic';
    $request->owner = 'necessitatibus';
    $request->repo = 'asperiores';

    $response = $sdk->repos->reposCreateRelease($request);

    if ($response->release !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateUsingTemplate

Creates a new repository using a repository template. Use the `template_owner` and `template_repo` route parameters to specify the repository to use as the template. The authenticated user must own or be a member of an organization that owns the repository. To check if a repository is available to use as a template, get the repository's information using the [Get a repository](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-repository) endpoint and check that the `is_template` key is `true`.

**OAuth scope requirements**

When using [OAuth](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

*   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
*   `repo` scope to create a private repository

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-repository-using-a-template>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateUsingTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateUsingTemplateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateUsingTemplateRequest();
    $request->requestBody = new ReposCreateUsingTemplateRequestBody();
    $request->requestBody->description = 'ex';
    $request->requestBody->includeAllBranches = false;
    $request->requestBody->name = 'Miss Alyssa Wintheiser';
    $request->requestBody->owner = 'laborum';
    $request->requestBody->private = false;
    $request->templateOwner = 'consectetur';
    $request->templateRepo = 'velit';

    $response = $sdk->repos->reposCreateUsingTemplate($request);

    if ($response->repository !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposCreateWebhook

Repositories can have multiple webhooks installed. Each webhook should have a unique `config`. Multiple webhooks can
share the same `config` as long as those webhooks do not have any `events` that overlap.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-repository-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateWebhookRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReposCreateWebhookRequestBodyConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposCreateWebhookRequest();
    $request->requestBody = new ReposCreateWebhookRequestBody();
    $request->requestBody->active = false;
    $request->requestBody->config = new ReposCreateWebhookRequestBodyConfig();
    $request->requestBody->config->contentType = '"json"';
    $request->requestBody->config->digest = '"sha256"';
    $request->requestBody->config->insecureSsl = 2164.57;
    $request->requestBody->config->secret = '"********"';
    $request->requestBody->config->token = '"abc"';
    $request->requestBody->config->url = 'https://example.com/webhook';
    $request->requestBody->events = [
        'magni',
        'soluta',
        'repudiandae',
        'nam',
    ];
    $request->requestBody->name = 'Glenda Kling';
    $request->owner = 'neque';
    $request->repo = 'quo';

    $response = $sdk->repos->reposCreateWebhook($request);

    if ($response->hook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeclineInvitation

Decline a repository invitation

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#decline-a-repository-invitation>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeclineInvitationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeclineInvitationRequest();
    $request->invitationId = 535468;

    $response = $sdk->repos->reposDeclineInvitation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDelete

Deleting a repository requires admin access. If OAuth is used, the `delete_repo` scope is required.

If an organization owner has configured the organization to prevent members from deleting organization-owned
repositories, you will get a `403 Forbidden` response.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteRequest();
    $request->owner = 'quibusdam';
    $request->repo = 'iure';

    $response = $sdk->repos->reposDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Disables the ability to restrict who can push to this branch.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-access-restrictions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteAccessRestrictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteAccessRestrictionsRequest();
    $request->branch = 'odit';
    $request->owner = 'voluptatibus';
    $request->repo = 'vel';

    $response = $sdk->repos->reposDeleteAccessRestrictions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteAdminBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removing admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-admin-branch-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteAdminBranchProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteAdminBranchProtectionRequest();
    $request->branch = 'magnam';
    $request->owner = 'quibusdam';
    $request->repo = 'inventore';

    $response = $sdk->repos->reposDeleteAdminBranchProtection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-branch-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteBranchProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteBranchProtectionRequest();
    $request->branch = 'facere';
    $request->owner = 'libero';
    $request->repo = 'architecto';

    $response = $sdk->repos->reposDeleteBranchProtection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteCommitComment

Delete a commit comment

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-a-commit-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteCommitCommentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteCommitCommentRequest();
    $request->commentId = 975425;
    $request->owner = 'quia';
    $request->repo = 'porro';

    $response = $sdk->repos->reposDeleteCommitComment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteCommitSignatureProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to disable required signed commits on a branch. You must enable branch protection to require signed commits.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-commit-signature-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteCommitSignatureProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteCommitSignatureProtectionRequest();
    $request->branch = 'aliquam';
    $request->owner = 'velit';
    $request->repo = 'illo';

    $response = $sdk->repos->reposDeleteCommitSignatureProtection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteDeployKey

Deploy keys are immutable. If you need to update a key, remove the key and create a new one instead.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-a-deploy-key>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteDeployKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteDeployKeyRequest();
    $request->keyId = 36561;
    $request->owner = 'vel';
    $request->repo = 'ea';

    $response = $sdk->repos->reposDeleteDeployKey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteFile

Deletes a file in a repository.

You can provide an additional `committer` parameter, which is an object containing information about the committer. Or, you can provide an `author` parameter, which is an object containing information about the author.

The `author` section is optional and is filled in with the `committer` information if omitted. If the `committer` information is omitted, the authenticated user's information is used.

You must provide values for both `name` and `email`, whether you choose to use `author` or `committer`. Otherwise, you'll receive a `422` status code.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-a-file>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteFileRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteFileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteFileRequestBodyAuthor;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteFileRequestBodyCommitter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteFileRequest();
    $request->requestBody = new ReposDeleteFileRequestBody();
    $request->requestBody->author = new ReposDeleteFileRequestBodyAuthor();
    $request->requestBody->author->email = 'Seth.Mante@gmail.com';
    $request->requestBody->author->name = 'Miss Katrina Weber';
    $request->requestBody->branch = 'iste';
    $request->requestBody->committer = new ReposDeleteFileRequestBodyCommitter();
    $request->requestBody->committer->email = 'Abdul.Huel67@hotmail.com';
    $request->requestBody->committer->name = 'Mr. Cindy Kub MD';
    $request->requestBody->message = 'recusandae';
    $request->requestBody->sha = 'ea';
    $request->owner = 'quidem';
    $request->path = 'voluptas';
    $request->repo = 'facilis';

    $response = $sdk->repos->reposDeleteFile($request);

    if ($response->fileCommit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteInvitation

Delete a repository invitation

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-a-repository-invitation>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteInvitationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteInvitationRequest();
    $request->invitationId = 809365;
    $request->owner = 'perspiciatis';
    $request->repo = 'expedita';

    $response = $sdk->repos->reposDeleteInvitation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeletePagesSite

Delete a GitHub Enterprise Server Pages site

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-a-github-pages-site>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeletePagesSiteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeletePagesSiteRequest();
    $request->owner = 'deleniti';
    $request->repo = 'a';

    $response = $sdk->repos->reposDeletePagesSite($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeletePullRequestReviewProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-pull-request-review-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeletePullRequestReviewProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeletePullRequestReviewProtectionRequest();
    $request->branch = 'voluptate';
    $request->owner = 'ullam';
    $request->repo = 'unde';

    $response = $sdk->repos->reposDeletePullRequestReviewProtection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteRelease

Users with push access to the repository can delete a release.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-a-release>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteReleaseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteReleaseRequest();
    $request->owner = 'necessitatibus';
    $request->releaseId = 654082;
    $request->repo = 'impedit';

    $response = $sdk->repos->reposDeleteRelease($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteReleaseAsset

Delete a release asset

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-a-release-asset>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteReleaseAssetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteReleaseAssetRequest();
    $request->assetId = 373040;
    $request->owner = 'corporis';
    $request->repo = 'est';

    $response = $sdk->repos->reposDeleteReleaseAsset($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDeleteWebhook

Delete a repository webhook

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-a-repository-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDeleteWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDeleteWebhookRequest();
    $request->hookId = 621666;
    $request->owner = 'esse';
    $request->repo = 'labore';

    $response = $sdk->repos->reposDeleteWebhook($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDownloadTarballArchive

Gets a redirect URL to download a tar archive for a repository. If you omit `:ref`, the repository’s default branch (usually
`master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
the `Location` header to make a second `GET` request.
**Note**: For private repositories, these links are temporary and expire after five minutes.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#download-a-repository-archive>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDownloadTarballArchiveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDownloadTarballArchiveRequest();
    $request->owner = 'veritatis';
    $request->ref = 'vero';
    $request->repo = 'consectetur';

    $response = $sdk->repos->reposDownloadTarballArchive($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposDownloadZipballArchive

Gets a redirect URL to download a zip archive for a repository. If you omit `:ref`, the repository’s default branch (usually
`master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
the `Location` header to make a second `GET` request.
**Note**: For private repositories, these links are temporary and expire after five minutes.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#download-a-repository-archive>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposDownloadZipballArchiveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposDownloadZipballArchiveRequest();
    $request->owner = 'vitae';
    $request->ref = 'inventore';
    $request->repo = 'dolorem';

    $response = $sdk->repos->reposDownloadZipballArchive($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGet

When you pass the `scarlet-witch-preview` media type, requests to get a repository will also return the repository's code of conduct if it can be detected from the repository's code of conduct file.

The `parent` and `source` objects are present when the repository is a fork. `parent` is the repository this repository was forked from, `source` is the ultimate source for the network.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetRequest();
    $request->owner = 'ad';
    $request->repo = 'qui';

    $response = $sdk->repos->reposGet($request);

    if ($response->fullRepository !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists who has access to this protected branch.

**Note**: Users, apps, and teams `restrictions` are only available for organization-owned repositories.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-access-restrictions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetAccessRestrictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetAccessRestrictionsRequest();
    $request->branch = 'iste';
    $request->owner = 'ex';
    $request->repo = 'nemo';

    $response = $sdk->repos->reposGetAccessRestrictions($request);

    if ($response->branchRestrictionPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetAdminBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-admin-branch-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetAdminBranchProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetAdminBranchProtectionRequest();
    $request->branch = 'soluta';
    $request->owner = 'libero';
    $request->repo = 'rem';

    $response = $sdk->repos->reposGetAdminBranchProtection($request);

    if ($response->protectedBranchAdminEnforced !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetAllStatusCheckContexts

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-all-status-check-contexts>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetAllStatusCheckContextsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetAllStatusCheckContextsRequest();
    $request->branch = 'dolorum';
    $request->owner = 'odio';
    $request->repo = 'fugit';

    $response = $sdk->repos->reposGetAllStatusCheckContexts($request);

    if ($response->reposGetAllStatusCheckContexts200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetAllTopics

Get all repository topics

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-all-repository-topics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetAllTopicsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetAllTopicsRequest();
    $request->owner = 'alias';
    $request->page = 168042;
    $request->perPage = 425402;
    $request->repo = 'quae';

    $response = $sdk->repos->reposGetAllTopics($request);

    if ($response->topic !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetAppsWithAccessToProtectedBranch

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists the GitHub Apps that have push access to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-apps-with-access-to-the-protected-branch>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetAppsWithAccessToProtectedBranchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetAppsWithAccessToProtectedBranchRequest();
    $request->branch = 'quae';
    $request->owner = 'modi';
    $request->repo = 'neque';

    $response = $sdk->repos->reposGetAppsWithAccessToProtectedBranch($request);

    if ($response->integrations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetBranch

Get a branch

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-branch>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetBranchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetBranchRequest();
    $request->branch = 'exercitationem';
    $request->owner = 'itaque';
    $request->repo = 'et';

    $response = $sdk->repos->reposGetBranch($request);

    if ($response->branchWithProtection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-branch-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetBranchProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetBranchProtectionRequest();
    $request->branch = 'ipsum';
    $request->owner = 'unde';
    $request->repo = 'nulla';

    $response = $sdk->repos->reposGetBranchProtection($request);

    if ($response->branchProtection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetCodeFrequencyStats

Returns a weekly aggregate of the number of additions and deletions pushed to a repository.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-the-weekly-commit-activity>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetCodeFrequencyStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetCodeFrequencyStatsRequest();
    $request->owner = 'distinctio';
    $request->repo = 'maxime';

    $response = $sdk->repos->reposGetCodeFrequencyStats($request);

    if ($response->codeFrequencyStats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetCollaboratorPermissionLevel

Checks the repository permission of a collaborator. The possible repository permissions are `admin`, `write`, `read`, and `none`.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-repository-permissions-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetCollaboratorPermissionLevelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetCollaboratorPermissionLevelRequest();
    $request->owner = 'quia';
    $request->repo = 'quia';
    $request->username = 'Eve.Moen66';

    $response = $sdk->repos->reposGetCollaboratorPermissionLevel($request);

    if ($response->repositoryCollaboratorPermission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetCombinedStatusForRef

Users with pull access in a repository can access a combined view of commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name.

The most recent status for each context is returned, up to 100. This field [paginates](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#pagination) if there are over 100 contexts.

Additionally, a combined `state` is returned. The `state` is one of:

*   **failure** if any of the contexts report as `error` or `failure`
*   **pending** if there are no statuses or a context is `pending`
*   **success** if the latest status for all contexts is `success`

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-the-combined-status-for-a-specific-reference>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetCombinedStatusForRefRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetCombinedStatusForRefRequest();
    $request->owner = 'libero';
    $request->page = 854460;
    $request->perPage = 637462;
    $request->ref = 'quos';
    $request->repo = 'placeat';

    $response = $sdk->repos->reposGetCombinedStatusForRef($request);

    if ($response->combinedCommitStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetCommit

Returns the contents of a single commit reference. You must have `read` access for the repository to use this endpoint.

**Note:** If there are more than 300 files in the commit diff, the response will include pagination link headers for the remaining files, up to a limit of 3000 files. Each page contains the static commit information, and the only changes are to the file listing.

You can pass the appropriate [media type](https://docs.github.com/enterprise-server@2.20/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to  fetch `diff` and `patch` formats. Diffs with binary data will have no `patch` property.

To return only the SHA-1 hash of the commit reference, you can provide the `sha` custom [media type](https://docs.github.com/enterprise-server@2.20/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) in the `Accept` header. You can use this endpoint to check if a remote reference's SHA-1 hash is the same as your local reference's SHA-1 hash by providing the local SHA-1 reference as the ETag.

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
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-commit>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetCommitRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetCommitRequest();
    $request->owner = 'sit';
    $request->page = 479385;
    $request->perPage = 57320;
    $request->ref = 'voluptates';
    $request->repo = 'inventore';

    $response = $sdk->repos->reposGetCommit($request);

    if ($response->commit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetCommitActivityStats

Returns the last year of commit activity grouped by week. The `days` array is a group of commits per day, starting on `Sunday`.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-the-last-year-of-commit-activity>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetCommitActivityStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetCommitActivityStatsRequest();
    $request->owner = 'aperiam';
    $request->repo = 'totam';

    $response = $sdk->repos->reposGetCommitActivityStats($request);

    if ($response->commitActivities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetCommitComment

Get a commit comment

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-commit-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetCommitCommentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetCommitCommentRequest();
    $request->commentId = 292888;
    $request->owner = 'eligendi';
    $request->repo = 'distinctio';

    $response = $sdk->repos->reposGetCommitComment($request);

    if ($response->commitComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetCommitSignatureProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to check whether a branch requires signed commits. An enabled status of `true` indicates you must sign commits on this branch. For more information, see [Signing commits with GPG](https://help.github.com/articles/signing-commits-with-gpg) in GitHub Help.

**Note**: You must enable branch protection to require signed commits.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-commit-signature-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetCommitSignatureProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetCommitSignatureProtectionRequest();
    $request->branch = 'voluptatem';
    $request->owner = 'autem';
    $request->repo = 'esse';

    $response = $sdk->repos->reposGetCommitSignatureProtection($request);

    if ($response->protectedBranchAdminEnforced !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetContent

Gets the contents of a file or directory in a repository. Specify the file path or directory in `:path`. If you omit
`:path`, you will receive the contents of the repository's root directory. See the description below regarding what the API response includes for directories. 

Files and symlinks support [a custom media type](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#custom-media-types) for
retrieving the raw content or rendered HTML (when supported). All content types support [a custom media
type](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#custom-media-types) to ensure the content is returned in a consistent
object format.

**Note**:
*   To get a repository's contents recursively, you can [recursively get the tree](https://docs.github.com/enterprise-server@2.20/rest/reference/git#trees).
*   This API has an upper limit of 1,000 files for a directory. If you need to retrieve more files, use the [Git Trees
API](https://docs.github.com/enterprise-server@2.20/rest/reference/git#get-a-tree).
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
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-repository-content>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetContentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetContentRequest();
    $request->owner = 'dolores';
    $request->path = 'assumenda';
    $request->ref = 'beatae';
    $request->repo = 'est';

    $response = $sdk->repos->reposGetContent($request);

    if ($response->reposGetContent200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetContributorsStats


Returns the `total` number of commits authored by the contributor. In addition, the response includes a Weekly Hash (`weeks` array) with the following information:

*   `w` - Start of the week, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time).
*   `a` - Number of additions
*   `d` - Number of deletions
*   `c` - Number of commits

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-all-contributor-commit-activity>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetContributorsStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetContributorsStatsRequest();
    $request->owner = 'facere';
    $request->repo = 'corrupti';

    $response = $sdk->repos->reposGetContributorsStats($request);

    if ($response->contributorActivities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetDeployKey

Get a deploy key

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-deploy-key>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetDeployKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetDeployKeyRequest();
    $request->keyId = 473143;
    $request->owner = 'provident';
    $request->repo = 'accusamus';

    $response = $sdk->repos->reposGetDeployKey($request);

    if ($response->deployKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetDeployment

Get a deployment

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-deployment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetDeploymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetDeploymentRequest();
    $request->deploymentId = 896480;
    $request->owner = 'tempore';
    $request->repo = 'sint';

    $response = $sdk->repos->reposGetDeployment($request);

    if ($response->deployment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetDeploymentStatus

Users with pull access can view a deployment status for a deployment:

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-deployment-status>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetDeploymentStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetDeploymentStatusRequest();
    $request->deploymentId = 409726;
    $request->owner = 'autem';
    $request->repo = 'ipsam';
    $request->statusId = 702952;

    $response = $sdk->repos->reposGetDeploymentStatus($request);

    if ($response->deploymentStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetLatestPagesBuild

Get latest Pages build

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-latest-pages-build>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetLatestPagesBuildRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetLatestPagesBuildRequest();
    $request->owner = 'laudantium';
    $request->repo = 'corporis';

    $response = $sdk->repos->reposGetLatestPagesBuild($request);

    if ($response->pageBuild !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetLatestRelease

View the latest published full release for the repository.

The latest release is the most recent non-prerelease, non-draft release, sorted by the `created_at` attribute. The `created_at` attribute is the date of the commit used for the release, and not the date when the release was drafted or published.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-the-latest-release>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetLatestReleaseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetLatestReleaseRequest();
    $request->owner = 'officiis';
    $request->repo = 'voluptatibus';

    $response = $sdk->repos->reposGetLatestRelease($request);

    if ($response->release !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetPages

Get a GitHub Enterprise Server Pages site

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-github-pages-site>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetPagesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetPagesRequest();
    $request->owner = 'cum';
    $request->repo = 'at';

    $response = $sdk->repos->reposGetPages($request);

    if ($response->page !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetPagesBuild

Get GitHub Enterprise Server Pages build

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-github-pages-build>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetPagesBuildRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetPagesBuildRequest();
    $request->buildId = 5152;
    $request->owner = 'quia';
    $request->repo = 'quidem';

    $response = $sdk->repos->reposGetPagesBuild($request);

    if ($response->pageBuild !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetParticipationStats

Returns the total commit counts for the `owner` and total commit counts in `all`. `all` is everyone combined, including the `owner` in the last 52 weeks. If you'd like to get the commit counts for non-owners, you can subtract `owner` from `all`.

The array order is oldest week (index 0) to most recent week.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-the-weekly-commit-count>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetParticipationStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetParticipationStatsRequest();
    $request->owner = 'fuga';
    $request->repo = 'repudiandae';

    $response = $sdk->repos->reposGetParticipationStats($request);

    if ($response->participationStats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetPullRequestReviewProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-pull-request-review-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetPullRequestReviewProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetPullRequestReviewProtectionRequest();
    $request->branch = 'accusantium';
    $request->owner = 'expedita';
    $request->repo = 'officiis';

    $response = $sdk->repos->reposGetPullRequestReviewProtection($request);

    if ($response->protectedBranchPullRequestReview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetPunchCardStats

Each array contains the day number, hour number, and number of commits:

*   `0-6`: Sunday - Saturday
*   `0-23`: Hour of day
*   Number of commits

For example, `[2, 14, 25]` indicates that there were 25 total commits, during the 2:00pm hour on Tuesdays. All times are based on the time zone of individual commits.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-the-hourly-commit-count-for-each-day>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetPunchCardStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetPunchCardStatsRequest();
    $request->owner = 'eos';
    $request->repo = 'quibusdam';

    $response = $sdk->repos->reposGetPunchCardStats($request);

    if ($response->codeFrequencyStats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetReadme

Gets the preferred README for a repository.

READMEs support [custom media types](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-repository-readme>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetReadmeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetReadmeRequest();
    $request->owner = 'odio';
    $request->ref = 'praesentium';
    $request->repo = 'odit';

    $response = $sdk->repos->reposGetReadme($request);

    if ($response->contentFile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetReadmeInDirectory

Gets the README from a repository directory.

READMEs support [custom media types](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-repository-directory-readme>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetReadmeInDirectoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetReadmeInDirectoryRequest();
    $request->dir = 'explicabo';
    $request->owner = 'corporis';
    $request->ref = 'error';
    $request->repo = 'earum';

    $response = $sdk->repos->reposGetReadmeInDirectory($request);

    if ($response->contentFile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetRelease

**Note:** This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a [hypermedia resource](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#hypermedia).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-release>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetReleaseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetReleaseRequest();
    $request->owner = 'adipisci';
    $request->releaseId = 923306;
    $request->repo = 'similique';

    $response = $sdk->repos->reposGetRelease($request);

    if ($response->release !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetReleaseAsset

To download the asset's binary content, set the `Accept` header of the request to [`application/octet-stream`](https://docs.github.com/enterprise-server@2.20/rest/overview/media-types). The API will either redirect the client to the location, or stream it directly if possible. API clients should handle both a `200` or `302` response.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-release-asset>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetReleaseAssetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetReleaseAssetRequest();
    $request->assetId = 282837;
    $request->owner = 'quidem';
    $request->repo = 'quis';

    $response = $sdk->repos->reposGetReleaseAsset($request);

    if ($response->releaseAsset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetReleaseByTag

Get a published release with the specified tag.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-release-by-tag-name>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetReleaseByTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetReleaseByTagRequest();
    $request->owner = 'beatae';
    $request->repo = 'unde';
    $request->tag = 'molestiae';

    $response = $sdk->repos->reposGetReleaseByTag($request);

    if ($response->release !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetStatusChecksProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-status-checks-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetStatusChecksProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetStatusChecksProtectionRequest();
    $request->branch = 'delectus';
    $request->owner = 'cupiditate';
    $request->repo = 'fugit';

    $response = $sdk->repos->reposGetStatusChecksProtection($request);

    if ($response->statusCheckPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetTeamsWithAccessToProtectedBranch

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists the teams who have push access to this branch. The list includes child teams.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-teams-with-access-to-the-protected-branch>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetTeamsWithAccessToProtectedBranchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetTeamsWithAccessToProtectedBranchRequest();
    $request->branch = 'numquam';
    $request->owner = 'numquam';
    $request->repo = 'nesciunt';

    $response = $sdk->repos->reposGetTeamsWithAccessToProtectedBranch($request);

    if ($response->teams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetUsersWithAccessToProtectedBranch

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists the people who have push access to this branch.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-users-with-access-to-the-protected-branch>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetUsersWithAccessToProtectedBranchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetUsersWithAccessToProtectedBranchRequest();
    $request->branch = 'at';
    $request->owner = 'officia';
    $request->repo = 'dignissimos';

    $response = $sdk->repos->reposGetUsersWithAccessToProtectedBranch($request);

    if ($response->simpleUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposGetWebhook

Returns a webhook configured in a repository. To get only the webhook `config` properties, see "[Get a webhook configuration for a repository](/rest/reference/repos#get-a-webhook-configuration-for-a-repository)."

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-repository-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposGetWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposGetWebhookRequest();
    $request->hookId = 760744;
    $request->owner = 'necessitatibus';
    $request->repo = 'corporis';

    $response = $sdk->repos->reposGetWebhook($request);

    if ($response->hook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListBranches

List branches

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-branches>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListBranchesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListBranchesRequest();
    $request->owner = 'qui';
    $request->page = 708898;
    $request->perPage = 532669;
    $request->protected = false;
    $request->repo = 'cupiditate';

    $response = $sdk->repos->reposListBranches($request);

    if ($response->shortBranches !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListBranchesForHeadCommit

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Returns all branches where the given commit SHA is the HEAD, or latest commit for the branch.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-branches-for-head-commit>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListBranchesForHeadCommitRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListBranchesForHeadCommitRequest();
    $request->commitSha = 'minima';
    $request->owner = 'placeat';
    $request->repo = 'enim';

    $response = $sdk->repos->reposListBranchesForHeadCommit($request);

    if ($response->branchShorts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListCollaborators

For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.

Team members will include the members of child teams.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-repository-collaborators>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListCollaboratorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposListCollaboratorsAffiliationEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListCollaboratorsRequest();
    $request->affiliation = ReposListCollaboratorsAffiliationEnum::OUTSIDE;
    $request->owner = 'in';
    $request->page = 796397;
    $request->perPage = 433077;
    $request->repo = 'modi';

    $response = $sdk->repos->reposListCollaborators($request);

    if ($response->collaborators !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListCommentsForCommit

Use the `:commit_sha` to specify the commit that will have its comments listed.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-commit-comments>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListCommentsForCommitRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListCommentsForCommitRequest();
    $request->commitSha = 'corporis';
    $request->owner = 'magnam';
    $request->page = 914971;
    $request->perPage = 978173;
    $request->repo = 'tempore';

    $response = $sdk->repos->reposListCommentsForCommit($request);

    if ($response->commitComments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListCommitCommentsForRepo

Commit Comments use [these custom media types](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#custom-media-types). You can read more about the use of media types in the API [here](https://docs.github.com/enterprise-server@2.20/rest/overview/media-types/).

Comments are ordered by ascending ID.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-commit-comments-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListCommitCommentsForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListCommitCommentsForRepoRequest();
    $request->owner = 'aperiam';
    $request->page = 727547;
    $request->perPage = 189753;
    $request->repo = 'labore';

    $response = $sdk->repos->reposListCommitCommentsForRepo($request);

    if ($response->commitComments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListCommitStatusesForRef

Users with pull access in a repository can view commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name. Statuses are returned in reverse chronological order. The first status in the list will be the latest one.

This resource is also available via a legacy route: `GET /repos/:owner/:repo/statuses/:ref`.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-commit-statuses-for-a-reference>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListCommitStatusesForRefRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListCommitStatusesForRefRequest();
    $request->owner = 'totam';
    $request->page = 577709;
    $request->perPage = 375994;
    $request->ref = 'quo';
    $request->repo = 'velit';

    $response = $sdk->repos->reposListCommitStatusesForRef($request);

    if ($response->statuses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListCommits

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
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-commits>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListCommitsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListCommitsRequest();
    $request->author = 'minus';
    $request->owner = 'fuga';
    $request->page = 344530;
    $request->path = 'est';
    $request->perPage = 770873;
    $request->repo = 'delectus';
    $request->sha = 'tempore';
    $request->since = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-30T01:12:33.967Z');
    $request->until = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-05-27T18:57:10.901Z');

    $response = $sdk->repos->reposListCommits($request);

    if ($response->commits !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListContributors

Lists contributors to the specified repository and sorts them by the number of commits per contributor in descending order. This endpoint may return information that is a few hours old because the GitHub REST API v3 caches contributor data to improve performance.

GitHub identifies contributors by author email address. This endpoint groups contribution counts by GitHub user, which includes all associated email addresses. To improve performance, only the first 500 author email addresses in the repository link to GitHub users. The rest will appear as anonymous contributors without associated GitHub user information.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-repository-contributors>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListContributorsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListContributorsRequest();
    $request->anon = 'nemo';
    $request->owner = 'reprehenderit';
    $request->page = 45234;
    $request->perPage = 486410;
    $request->repo = 'minima';

    $response = $sdk->repos->reposListContributors($request);

    if ($response->contributors !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListDeployKeys

List deploy keys

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-deploy-keys>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListDeployKeysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListDeployKeysRequest();
    $request->owner = 'in';
    $request->page = 496915;
    $request->perPage = 567846;
    $request->repo = 'dolores';

    $response = $sdk->repos->reposListDeployKeys($request);

    if ($response->deployKeys !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListDeploymentStatuses

Users with pull access can view deployment statuses for a deployment:

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-deployment-statuses>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListDeploymentStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListDeploymentStatusesRequest();
    $request->deploymentId = 621169;
    $request->owner = 'veritatis';
    $request->page = 498180;
    $request->perPage = 452729;
    $request->repo = 'pariatur';

    $response = $sdk->repos->reposListDeploymentStatuses($request);

    if ($response->deploymentStatuses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListDeployments

Simple filtering of deployments is available via query parameters:

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-deployments>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListDeploymentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListDeploymentsRequest();
    $request->environment = 'itaque';
    $request->owner = 'similique';
    $request->page = 763165;
    $request->perPage = 401428;
    $request->ref = 'quaerat';
    $request->repo = 'commodi';
    $request->sha = 'officiis';
    $request->task = 'placeat';

    $response = $sdk->repos->reposListDeployments($request);

    if ($response->deployments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListForAuthenticatedUser

Lists repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-repositories-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForAuthenticatedUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForAuthenticatedUserDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForAuthenticatedUserSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForAuthenticatedUserTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForAuthenticatedUserVisibilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListForAuthenticatedUserRequest();
    $request->affiliation = 'quidem';
    $request->before = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-15T21:06:22.424Z');
    $request->direction = ReposListForAuthenticatedUserDirectionEnum::ASC;
    $request->page = 264619;
    $request->perPage = 59383;
    $request->since = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-01T12:00:34.439Z');
    $request->sort = ReposListForAuthenticatedUserSortEnum::CREATED;
    $request->type = ReposListForAuthenticatedUserTypeEnum::MEMBER;
    $request->visibility = ReposListForAuthenticatedUserVisibilityEnum::PRIVATE;

    $response = $sdk->repos->reposListForAuthenticatedUser($request);

    if ($response->repositories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListForOrg

Lists repositories for the specified organization.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-organization-repositories>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForOrgDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForOrgSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForOrgTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListForOrgRequest();
    $request->direction = ReposListForOrgDirectionEnum::ASC;
    $request->org = 'earum';
    $request->page = 334474;
    $request->perPage = 659268;
    $request->sort = ReposListForOrgSortEnum::CREATED;
    $request->type = ReposListForOrgTypeEnum::MEMBER;

    $response = $sdk->repos->reposListForOrg($request);

    if ($response->minimalRepositories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListForUser

Lists public repositories for the specified user. Note: For GitHub AE, this endpoint will list internal repositories for the specified user.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-repositories-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForUserDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForUserSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForUserTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListForUserRequest();
    $request->direction = ReposListForUserDirectionEnum::ASC;
    $request->page = 164488;
    $request->perPage = 899867;
    $request->sort = ReposListForUserSortEnum::PUSHED;
    $request->type = ReposListForUserTypeEnum::ALL;
    $request->username = 'Jess9';

    $response = $sdk->repos->reposListForUser($request);

    if ($response->minimalRepositories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListForks

List forks

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-forks>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForksRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposListForksSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListForksRequest();
    $request->owner = 'laboriosam';
    $request->page = 863471;
    $request->perPage = 729448;
    $request->repo = 'excepturi';
    $request->sort = ReposListForksSortEnum::STARGAZERS;

    $response = $sdk->repos->reposListForks($request);

    if ($response->minimalRepositories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListInvitations

When authenticating as a user with admin rights to a repository, this endpoint will list all currently open repository invitations.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-repository-invitations>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListInvitationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListInvitationsRequest();
    $request->owner = 'nemo';
    $request->page = 306382;
    $request->perPage = 342342;
    $request->repo = 'doloribus';

    $response = $sdk->repos->reposListInvitations($request);

    if ($response->repositoryInvitations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListInvitationsForAuthenticatedUser

When authenticating as a user, this endpoint will list all currently open repository invitations for that user.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-repository-invitations-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListInvitationsForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListInvitationsForAuthenticatedUserRequest();
    $request->page = 757364;
    $request->perPage = 574032;

    $response = $sdk->repos->reposListInvitationsForAuthenticatedUser($request);

    if ($response->repositoryInvitations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListLanguages

Lists languages for the specified repository. The value shown for each language is the number of bytes of code written in that language.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-repository-languages>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListLanguagesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListLanguagesRequest();
    $request->owner = 'enim';
    $request->repo = 'hic';

    $response = $sdk->repos->reposListLanguages($request);

    if ($response->language !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListPagesBuilds

List GitHub Enterprise Server Pages builds

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-github-pages-builds>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListPagesBuildsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListPagesBuildsRequest();
    $request->owner = 'animi';
    $request->page = 559774;
    $request->perPage = 517326;
    $request->repo = 'molestias';

    $response = $sdk->repos->reposListPagesBuilds($request);

    if ($response->pageBuilds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListPublic

Lists all public repositories in the order that they were created.

Note:
- For GitHub Enterprise Server, this endpoint will only list repositories available to all users on the enterprise.
- Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of repositories.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-public-repositories>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListPublicRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposListPublicVisibilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListPublicRequest();
    $request->since = 484966;
    $request->visibility = ReposListPublicVisibilityEnum::ALL;

    $response = $sdk->repos->reposListPublic($request);

    if ($response->minimalRepositories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListPullRequestsAssociatedWithCommit

Lists the merged pull request that introduced the commit to the repository. If the commit is not present in the default branch, additionally returns open pull requests associated with the commit. The results may include open and closed pull requests. Additional preview headers may be required to see certain details for associated pull requests, such as whether a pull request is in a draft state. For more information about previews that might affect this endpoint, see the [List pull requests](https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#list-pull-requests) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-pull-requests-associated-with-a-commit>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListPullRequestsAssociatedWithCommitRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListPullRequestsAssociatedWithCommitRequest();
    $request->commitSha = 'eaque';
    $request->owner = 'saepe';
    $request->page = 104078;
    $request->perPage = 554645;
    $request->repo = 'iste';

    $response = $sdk->repos->reposListPullRequestsAssociatedWithCommit($request);

    if ($response->pullRequestSimples !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListReleaseAssets

List release assets

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-release-assets>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListReleaseAssetsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListReleaseAssetsRequest();
    $request->owner = 'assumenda';
    $request->page = 731634;
    $request->perPage = 725574;
    $request->releaseId = 244032;
    $request->repo = 'doloremque';

    $response = $sdk->repos->reposListReleaseAssets($request);

    if ($response->releaseAssets !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListReleases

This returns a list of releases, which does not include regular Git tags that have not been associated with a release. To get a list of Git tags, use the [Repository Tags API](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-repository-tags).

Information about published releases are available to everyone. Only users with push access will receive listings for draft releases.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-releases>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListReleasesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListReleasesRequest();
    $request->owner = 'delectus';
    $request->page = 773110;
    $request->perPage = 741238;
    $request->repo = 'ipsum';

    $response = $sdk->repos->reposListReleases($request);

    if ($response->releases !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListTags

List repository tags

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-repository-tags>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListTagsRequest();
    $request->owner = 'adipisci';
    $request->page = 903150;
    $request->perPage = 644420;
    $request->repo = 'doloremque';

    $response = $sdk->repos->reposListTags($request);

    if ($response->tags !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListTeams

List repository teams

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-repository-teams>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListTeamsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListTeamsRequest();
    $request->owner = 'quis';
    $request->page = 333072;
    $request->perPage = 727481;
    $request->repo = 'architecto';

    $response = $sdk->repos->reposListTeams($request);

    if ($response->teams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposListWebhooks

List repository webhooks

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-repository-webhooks>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposListWebhooksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposListWebhooksRequest();
    $request->owner = 'cupiditate';
    $request->page = 475589;
    $request->perPage = 756654;
    $request->repo = 'possimus';

    $response = $sdk->repos->reposListWebhooks($request);

    if ($response->hooks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposMerge

Merge a branch

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#merge-a-branch>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposMergeRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposMergeRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposMergeRequest();
    $request->requestBody = new ReposMergeRequestBody();
    $request->requestBody->base = 'non';
    $request->requestBody->commitMessage = 'magnam';
    $request->requestBody->head = 'itaque';
    $request->owner = 'sed';
    $request->repo = 'asperiores';

    $response = $sdk->repos->reposMerge($request);

    if ($response->commit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposPingWebhook

This will trigger a [ping event](https://docs.github.com/enterprise-server@2.20/webhooks/#ping-event) to be sent to the hook.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#ping-a-repository-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposPingWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposPingWebhookRequest();
    $request->hookId = 330267;
    $request->owner = 'consequuntur';
    $request->repo = 'facere';

    $response = $sdk->repos->reposPingWebhook($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposRemoveAppAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removes the ability of an app to push to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

| Type    | Description                                                                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#remove-app-access-restrictions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposRemoveAppAccessRestrictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposRemoveAppAccessRestrictionsRequest();
    $request->requestBody = [
        'pariatur',
    ];
    $request->branch = 'amet';
    $request->owner = 'exercitationem';
    $request->repo = 'ab';

    $response = $sdk->repos->reposRemoveAppAccessRestrictions($request);

    if ($response->integrations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposRemoveCollaborator

Remove a repository collaborator

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#remove-a-repository-collaborator>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposRemoveCollaboratorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposRemoveCollaboratorRequest();
    $request->owner = 'velit';
    $request->repo = 'facilis';
    $request->username = 'Mortimer.Huels50';

    $response = $sdk->repos->reposRemoveCollaborator($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposRemoveStatusCheckContexts

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#remove-status-check-contexts>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposRemoveStatusCheckContextsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposRemoveStatusCheckContextsRequest();
    $request->requestBody = [
        'quis',
        'nisi',
    ];
    $request->branch = 'libero';
    $request->owner = 'minus';
    $request->repo = 'facere';

    $response = $sdk->repos->reposRemoveStatusCheckContexts($request);

    if ($response->reposRemoveStatusCheckContexts200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposRemoveStatusCheckProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#remove-status-check-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposRemoveStatusCheckProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposRemoveStatusCheckProtectionRequest();
    $request->branch = 'facilis';
    $request->owner = 'ipsum';
    $request->repo = 'ad';

    $response = $sdk->repos->reposRemoveStatusCheckProtection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposRemoveTeamAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removes the ability of a team to push to this branch. You can also remove push access for child teams.

| Type    | Description                                                                                                                                         |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | Teams that should no longer have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#remove-team-access-restrictions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposRemoveTeamAccessRestrictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposRemoveTeamAccessRestrictionsRequest();
    $request->requestBody = [
        'consequuntur',
        'debitis',
        'labore',
        'rerum',
    ];
    $request->branch = 'eos';
    $request->owner = 'reprehenderit';
    $request->repo = 'nostrum';

    $response = $sdk->repos->reposRemoveTeamAccessRestrictions($request);

    if ($response->teams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposRemoveUserAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removes the ability of a user to push to this branch.

| Type    | Description                                                                                                                                   |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames of the people who should no longer have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#remove-user-access-restrictions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposRemoveUserAccessRestrictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposRemoveUserAccessRestrictionsRequest();
    $request->requestBody = new ReposRemoveUserAccessRestrictionsRequestBody1();
    $request->requestBody->users = [
        'est',
        'rem',
    ];
    $request->branch = 'eligendi';
    $request->owner = 'fugiat';
    $request->repo = 'unde';

    $response = $sdk->repos->reposRemoveUserAccessRestrictions($request);

    if ($response->simpleUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposReplaceAllTopics

Replace all repository topics

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#replace-all-repository-topics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposReplaceAllTopicsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposReplaceAllTopicsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposReplaceAllTopicsRequest();
    $request->requestBody = new ReposReplaceAllTopicsRequestBody();
    $request->requestBody->names = [
        'ducimus',
        'dolor',
        'dicta',
        'error',
    ];
    $request->owner = 'porro';
    $request->repo = 'vitae';

    $response = $sdk->repos->reposReplaceAllTopics($request);

    if ($response->topic !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposRequestPagesBuild

You can request that your site be built from the latest revision on the default branch. This has the same effect as pushing a commit to your default branch, but does not require an additional commit. Manually triggering page builds can be helpful when diagnosing build warnings and failures.

Build requests are limited to one concurrent build per repository and one concurrent build per requester. If you request a build while another is still in progress, the second request will be queued until the first completes.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#request-a-github-pages-build>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposRequestPagesBuildRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposRequestPagesBuildRequest();
    $request->owner = 'dignissimos';
    $request->repo = 'esse';

    $response = $sdk->repos->reposRequestPagesBuild($request);

    if ($response->pageBuildStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposSetAdminBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Adding admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#set-admin-branch-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposSetAdminBranchProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposSetAdminBranchProtectionRequest();
    $request->branch = 'fugiat';
    $request->owner = 'ad';
    $request->repo = 'aspernatur';

    $response = $sdk->repos->reposSetAdminBranchProtection($request);

    if ($response->protectedBranchAdminEnforced !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposSetAppAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Replaces the list of apps that have push access to this branch. This removes all apps that previously had push access and grants push access to the new list of apps. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

| Type    | Description                                                                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#set-app-access-restrictions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposSetAppAccessRestrictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposSetAppAccessRestrictionsRequest();
    $request->requestBody = new ReposSetAppAccessRestrictionsRequestBody1();
    $request->requestBody->apps = [
        'iusto',
        'dignissimos',
        'libero',
        'illo',
    ];
    $request->branch = 'ab';
    $request->owner = 'incidunt';
    $request->repo = 'accusamus';

    $response = $sdk->repos->reposSetAppAccessRestrictions($request);

    if ($response->integrations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposSetStatusCheckContexts

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#set-status-check-contexts>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposSetStatusCheckContextsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposSetStatusCheckContextsRequest();
    $request->requestBody = [
        'veniam',
        'eos',
        'reiciendis',
    ];
    $request->branch = 'earum';
    $request->owner = 'reprehenderit';
    $request->repo = 'praesentium';

    $response = $sdk->repos->reposSetStatusCheckContexts($request);

    if ($response->reposSetStatusCheckContexts200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposSetTeamAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Replaces the list of teams that have push access to this branch. This removes all teams that previously had push access and grants push access to the new list of teams. Team restrictions include child teams.

| Type    | Description                                                                                                                                |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#set-team-access-restrictions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposSetTeamAccessRestrictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposSetTeamAccessRestrictionsRequest();
    $request->requestBody = new ReposSetTeamAccessRestrictionsRequestBody1();
    $request->requestBody->teams = [
        'quisquam',
        'sequi',
        'nihil',
        'deleniti',
    ];
    $request->branch = 'illo';
    $request->owner = 'labore';
    $request->repo = 'assumenda';

    $response = $sdk->repos->reposSetTeamAccessRestrictions($request);

    if ($response->teams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposSetUserAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Replaces the list of people that have push access to this branch. This removes all people that previously had push access and grants push access to the new list of people.

| Type    | Description                                                                                                                   |
| ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#set-user-access-restrictions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposSetUserAccessRestrictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposSetUserAccessRestrictionsRequest();
    $request->requestBody = new ReposSetUserAccessRestrictionsRequestBody1();
    $request->requestBody->users = [
        'provident',
        'laudantium',
        'repudiandae',
        'consequatur',
    ];
    $request->branch = 'maxime';
    $request->owner = 'aspernatur';
    $request->repo = 'nam';

    $response = $sdk->repos->reposSetUserAccessRestrictions($request);

    if ($response->simpleUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposTestPushWebhook

This will trigger the hook with the latest push to the current repository if the hook is subscribed to `push` events. If the hook is not subscribed to `push` events, the server will respond with 204 but no test POST will be generated.

**Note**: Previously `/repos/:owner/:repo/hooks/:hook_id/test`

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#test-the-push-repository-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposTestPushWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposTestPushWebhookRequest();
    $request->hookId = 711991;
    $request->owner = 'quas';
    $request->repo = 'provident';

    $response = $sdk->repos->reposTestPushWebhook($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposTransfer

A transfer request will need to be accepted by the new owner when transferring a personal repository to another user. The response will contain the original `owner`, and the transfer will continue asynchronously. For more details on the requirements to transfer personal and organization-owned repositories, see [about repository transfers](https://help.github.com/articles/about-repository-transfers/).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#transfer-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposTransferRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposTransferRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposTransferRequest();
    $request->requestBody = new ReposTransferRequestBody();
    $request->requestBody->newOwner = 'repudiandae';
    $request->requestBody->teamIds = [
        492361,
        360934,
        873833,
    ];
    $request->owner = 'similique';
    $request->repo = 'repellendus';

    $response = $sdk->repos->reposTransfer($request);

    if ($response->minimalRepository !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposUpdate

**Note**: To edit a repository's topics, use the [Replace all repository topics](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#replace-all-repository-topics) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos/#update-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateRequestBodyVisibilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposUpdateRequest();
    $request->requestBody = new ReposUpdateRequestBody();
    $request->requestBody->allowForking = false;
    $request->requestBody->allowMergeCommit = false;
    $request->requestBody->allowRebaseMerge = false;
    $request->requestBody->allowSquashMerge = false;
    $request->requestBody->archived = false;
    $request->requestBody->defaultBranch = 'iure';
    $request->requestBody->deleteBranchOnMerge = false;
    $request->requestBody->description = 'dolorem';
    $request->requestBody->hasIssues = false;
    $request->requestBody->hasProjects = false;
    $request->requestBody->hasWiki = false;
    $request->requestBody->homepage = 'commodi';
    $request->requestBody->isTemplate = false;
    $request->requestBody->name = 'Mrs. Leslie Anderson I';
    $request->requestBody->private = false;
    $request->requestBody->visibility = ReposUpdateRequestBodyVisibilityEnum::INTERNAL;
    $request->owner = 'praesentium';
    $request->repo = 'quidem';

    $response = $sdk->repos->reposUpdate($request);

    if ($response->fullRepository !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposUpdateBranchProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Protecting a branch requires admin or owner permissions to the repository.

**Note**: Passing new arrays of `users` and `teams` replaces their previous values.

**Note**: The list of users, apps, and teams in total is limited to 100 items.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#update-branch-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateBranchProtectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateBranchProtectionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateBranchProtectionRequestBodyRestrictions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposUpdateBranchProtectionRequest();
    $request->requestBody = new ReposUpdateBranchProtectionRequestBody();
    $request->requestBody->allowDeletions = false;
    $request->requestBody->allowForcePushes = false;
    $request->requestBody->enforceAdmins = false;
    $request->requestBody->requiredConversationResolution = false;
    $request->requestBody->requiredLinearHistory = false;
    $request->requestBody->requiredPullRequestReviews = new ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews();
    $request->requestBody->requiredPullRequestReviews->dismissStaleReviews = false;
    $request->requestBody->requiredPullRequestReviews->dismissalRestrictions = new ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions();
    $request->requestBody->requiredPullRequestReviews->dismissalRestrictions->teams = [
        'amet',
        'quasi',
        'dicta',
    ];
    $request->requestBody->requiredPullRequestReviews->dismissalRestrictions->users = [
        'doloremque',
        'earum',
        'iusto',
    ];
    $request->requestBody->requiredPullRequestReviews->requireCodeOwnerReviews = false;
    $request->requestBody->requiredPullRequestReviews->requiredApprovingReviewCount = 228646;
    $request->requestBody->requiredStatusChecks = new ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks();
    $request->requestBody->requiredStatusChecks->contexts = [
        'dolorum',
        'necessitatibus',
        'provident',
    ];
    $request->requestBody->requiredStatusChecks->strict = false;
    $request->requestBody->restrictions = new ReposUpdateBranchProtectionRequestBodyRestrictions();
    $request->requestBody->restrictions->apps = [
        'consequatur',
        'nemo',
        'molestiae',
        'itaque',
    ];
    $request->requestBody->restrictions->teams = [
        'corrupti',
        'aperiam',
        'sint',
    ];
    $request->requestBody->restrictions->users = [
        'eos',
        'totam',
        'dicta',
        'voluptatem',
    ];
    $request->branch = 'velit';
    $request->owner = 'dolor';
    $request->repo = 'sunt';

    $response = $sdk->repos->reposUpdateBranchProtection($request);

    if ($response->protectedBranch !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposUpdateCommitComment

Update a commit comment

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#update-a-commit-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateCommitCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateCommitCommentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposUpdateCommitCommentRequest();
    $request->requestBody = new ReposUpdateCommitCommentRequestBody();
    $request->requestBody->body = 'a';
    $request->commentId = 223291;
    $request->owner = 'occaecati';
    $request->repo = 'atque';

    $response = $sdk->repos->reposUpdateCommitComment($request);

    if ($response->commitComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposUpdateInformationAboutPagesSite

Updates information for a GitHub Enterprise Server Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#update-information-about-a-github-pages-site>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateInformationAboutPagesSiteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposUpdateInformationAboutPagesSiteRequest();
    $request->requestBody = new ReposUpdateInformationAboutPagesSiteRequestBody1();
    $request->requestBody->httpsEnforced = false;
    $request->requestBody->public = false;
    $request->requestBody->source = ReposUpdateInformationAboutPagesSiteRequestBody1Source2Enum::GH_PAGES;
    $request->owner = 'minus';
    $request->repo = 'esse';

    $response = $sdk->repos->reposUpdateInformationAboutPagesSite($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposUpdateInvitation

Update a repository invitation

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#update-a-repository-invitation>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateInvitationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateInvitationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateInvitationRequestBodyPermissionsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposUpdateInvitationRequest();
    $request->requestBody = new ReposUpdateInvitationRequestBody();
    $request->requestBody->permissions = ReposUpdateInvitationRequestBodyPermissionsEnum::READ;
    $request->invitationId = 20950;
    $request->owner = 'rerum';
    $request->repo = 'ea';

    $response = $sdk->repos->reposUpdateInvitation($request);

    if ($response->repositoryInvitation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposUpdatePullRequestReviewProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Updating pull request review enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

**Note**: Passing new arrays of `users` and `teams` replaces their previous values.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#update-pull-request-review-protection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdatePullRequestReviewProtectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdatePullRequestReviewProtectionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposUpdatePullRequestReviewProtectionRequest();
    $request->requestBody = new ReposUpdatePullRequestReviewProtectionRequestBody();
    $request->requestBody->dismissStaleReviews = false;
    $request->requestBody->dismissalRestrictions = new ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions();
    $request->requestBody->dismissalRestrictions->teams = [
        'dignissimos',
    ];
    $request->requestBody->dismissalRestrictions->users = [
        'velit',
        'porro',
        'provident',
        'consectetur',
    ];
    $request->requestBody->requireCodeOwnerReviews = false;
    $request->requestBody->requiredApprovingReviewCount = 753240;
    $request->branch = 'dignissimos';
    $request->owner = 'consectetur';
    $request->repo = 'soluta';

    $response = $sdk->repos->reposUpdatePullRequestReviewProtection($request);

    if ($response->protectedBranchPullRequestReview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposUpdateRelease

Users with push access to the repository can edit a release.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#update-a-release>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateReleaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateReleaseRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposUpdateReleaseRequest();
    $request->requestBody = new ReposUpdateReleaseRequestBody();
    $request->requestBody->body = 'natus';
    $request->requestBody->draft = false;
    $request->requestBody->name = 'Luke Fay';
    $request->requestBody->prerelease = false;
    $request->requestBody->tagName = 'quo';
    $request->requestBody->targetCommitish = 'itaque';
    $request->owner = 'illum';
    $request->releaseId = 670762;
    $request->repo = 'dignissimos';

    $response = $sdk->repos->reposUpdateRelease($request);

    if ($response->release !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposUpdateReleaseAsset

Users with push access to the repository can edit a release asset.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#update-a-release-asset>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateReleaseAssetRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateReleaseAssetRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposUpdateReleaseAssetRequest();
    $request->requestBody = new ReposUpdateReleaseAssetRequestBody();
    $request->requestBody->label = 'vero';
    $request->requestBody->name = 'Mr. Edith Zieme';
    $request->requestBody->state = '"uploaded"';
    $request->assetId = 471457;
    $request->owner = 'non';
    $request->repo = 'ab';

    $response = $sdk->repos->reposUpdateReleaseAsset($request);

    if ($response->releaseAsset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposUpdateStatusCheckProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Updating required status checks requires admin or owner permissions to the repository and branch protection to be enabled.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#update-status-check-potection>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateStatusCheckProtectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateStatusCheckProtectionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposUpdateStatusCheckProtectionRequest();
    $request->requestBody = new ReposUpdateStatusCheckProtectionRequestBody();
    $request->requestBody->contexts = [
        'hic',
    ];
    $request->requestBody->strict = false;
    $request->branch = 'deserunt';
    $request->owner = 'delectus';
    $request->repo = 'non';

    $response = $sdk->repos->reposUpdateStatusCheckProtection($request);

    if ($response->statusCheckPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposUpdateWebhook

Updates a webhook configured in a repository. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for a repository](/rest/reference/repos#update-a-webhook-configuration-for-a-repository)."

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#update-a-repository-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateWebhookRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReposUpdateWebhookRequestBodyConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposUpdateWebhookRequest();
    $request->requestBody = new ReposUpdateWebhookRequestBody();
    $request->requestBody->active = false;
    $request->requestBody->addEvents = [
        'in',
        'exercitationem',
        'labore',
    ];
    $request->requestBody->config = new ReposUpdateWebhookRequestBodyConfig();
    $request->requestBody->config->address = '"bar@example.com"';
    $request->requestBody->config->contentType = '"json"';
    $request->requestBody->config->insecureSsl = '"0"';
    $request->requestBody->config->room = '"The Serious Room"';
    $request->requestBody->config->secret = '"********"';
    $request->requestBody->config->url = 'https://example.com/webhook';
    $request->requestBody->events = [
        'modi',
        'in',
        'explicabo',
        'accusamus',
    ];
    $request->requestBody->removeEvents = [
        'aperiam',
        'odit',
        'deleniti',
    ];
    $request->hookId = 316730;
    $request->owner = 'voluptate';
    $request->repo = 'similique';

    $response = $sdk->repos->reposUpdateWebhook($request);

    if ($response->hook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reposUploadReleaseAsset

This endpoint makes use of [a Hypermedia relation](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#hypermedia) to determine which URL to access. The endpoint you call to upload release assets is specific to your release. Use the `upload_url` returned in
the response of the [Create a release endpoint](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-release) to upload a release asset.

You need to use an HTTP client which supports [SNI](http://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.

Most libraries will set the required `Content-Length` header automatically. Use the required `Content-Type` header to provide the media type of the asset. For a list of media types, see [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). For example: 

`application/zip`

GitHub Enterprise Server expects the asset data in its raw binary form, rather than JSON. You will send the raw binary content of the asset as the request body. Everything else about the endpoint is the same as the rest of the API. For example,
you'll still need to pass your authentication to be able to upload an asset.

When an upstream failure occurs, you will receive a `502 Bad Gateway` status. This may leave an empty asset with a state of `starter`. It can be safely deleted.

**Notes:**
*   GitHub Enterprise Server renames asset filenames that have special characters, non-alphanumeric characters, and leading or trailing periods. The "[List assets for a release](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-assets-for-a-release)"
endpoint lists the renamed filenames. For more information and help, contact [GitHub Enterprise Server Support](https://support.github.com/contact?tags=dotcom-rest-api).
*   If you upload an asset with the same filename as another uploaded asset, you'll receive an error and must delete the old file before you can re-upload the new asset.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/repos#upload-a-release-asset>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReposUploadReleaseAssetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReposUploadReleaseAssetRequest();
    $request->requestBody = 'minima';
    $request->label = 'libero';
    $request->name = 'Karen Gleichner';
    $request->owner = 'mollitia';
    $request->releaseId = 492632;
    $request->repo = 'fugiat';

    $response = $sdk->repos->reposUploadReleaseAsset($request);

    if ($response->releaseAsset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
