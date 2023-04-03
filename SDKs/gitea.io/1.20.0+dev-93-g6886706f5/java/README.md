# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ActivitypubPersonRequest;
import org.openapis.openapi.models.operations.ActivitypubPersonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ActivitypubPersonRequest req = new ActivitypubPersonRequest() {{
                username = "Katharina_Medhurst60";
            }}            

            ActivitypubPersonResponse res = sdk.activitypub.activitypubPerson(req);

            if (res.activityPub.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### activitypub

* `activitypubPerson` - Returns the Person actor for a user
* `activitypubPersonInbox` - Send to the inbox

### admin

* `adminAdoptRepository` - Adopt unadopted files as a repository
* `adminCreateHook` - Create a hook
* `adminCreateOrg` - Create an organization
* `adminCreatePublicKey` - Add a public key on behalf of a user
* `adminCreateRepo` - Create a repository on behalf of a user
* `adminCreateUser` - Create a user
* `adminCronList` - List cron tasks
* `adminCronRun` - Run cron task
* `adminDeleteHook` - Delete a hook
* `adminDeleteUnadoptedRepository` - Delete unadopted files
* `adminDeleteUser` - Delete a user
* `adminDeleteUserPublicKey` - Delete a user's public key
* `adminEditHook` - Update a hook
* `adminEditUser` - Edit an existing user
* `adminGetAllOrgs` - List all organizations
* `adminGetAllUsers` - List all users
* `adminGetHook` - Get a hook
* `adminListHooks` - List system's webhooks
* `adminUnadoptedList` - List unadopted repositories

### issue

* `issueAddLabel` - Add a label to an issue
* `issueAddSubscription` - Subscribe user to issue
* `issueAddTime` - Add tracked time to a issue
* `issueCheckSubscription` - Check if user is subscribed to an issue
* `issueClearLabels` - Remove all labels from an issue
* `issueCreateComment` - Add a comment to an issue
* `issueCreateIssue` - Create an issue. If using deadline only the date will be taken into account, and time of day ignored.
* `issueCreateIssueAttachment` - Create an issue attachment
* `issueCreateIssueCommentAttachment` - Create a comment attachment
* `issueCreateLabel` - Create a label
* `issueCreateMilestone` - Create a milestone
* `issueDelete` - Delete an issue
* `issueDeleteComment` - Delete a comment
* `issueDeleteCommentDeprecated` - Delete a comment
* `issueDeleteCommentReaction` - Remove a reaction from a comment of an issue
* `issueDeleteIssueAttachment` - Delete an issue attachment
* `issueDeleteIssueCommentAttachment` - Delete a comment attachment
* `issueDeleteIssueReaction` - Remove a reaction from an issue
* `issueDeleteLabel` - Delete a label
* `issueDeleteMilestone` - Delete a milestone
* `issueDeleteStopWatch` - Delete an issue's existing stopwatch.
* `issueDeleteSubscription` - Unsubscribe user from issue
* `issueDeleteTime` - Delete specific tracked time
* `issueEditComment` - Edit a comment
* `issueEditCommentDeprecated` - Edit a comment
* `issueEditIssue` - Edit an issue. If using deadline only the date will be taken into account, and time of day ignored.
* `issueEditIssueAttachment` - Edit an issue attachment
* `issueEditIssueCommentAttachment` - Edit a comment attachment
* `issueEditIssueDeadline` - Set an issue deadline. If set to null, the deadline is deleted. If using deadline only the date will be taken into account, and time of day ignored.
* `issueEditLabel` - Update a label
* `issueEditMilestone` - Update a milestone
* `issueGetComment` - Get a comment
* `issueGetCommentReactions` - Get a list of reactions from a comment of an issue
* `issueGetComments` - List all comments on an issue
* `issueGetCommentsAndTimeline` - List all comments and events on an issue
* `issueGetIssue` - Get an issue
* `issueGetIssueAttachment` - Get an issue attachment
* `issueGetIssueCommentAttachment` - Get a comment attachment
* `issueGetIssueReactions` - Get a list reactions of an issue
* `issueGetLabel` - Get a single label
* `issueGetLabels` - Get an issue's labels
* `issueGetMilestone` - Get a milestone
* `issueGetMilestonesList` - Get all of a repository's opened milestones
* `issueGetRepoComments` - List all comments in a repository
* `issueListIssueAttachments` - List issue's attachments
* `issueListIssueCommentAttachments` - List comment's attachments
* `issueListIssues` - List a repository's issues
* `issueListLabels` - Get all of a repository's labels
* `issuePostCommentReaction` - Add a reaction to a comment of an issue
* `issuePostIssueReaction` - Add a reaction to an issue
* `issueRemoveLabel` - Remove a label from an issue
* `issueReplaceLabels` - Replace an issue's labels
* `issueResetTime` - Reset a tracked time of an issue
* `issueSearchIssues` - Search for issues across the repositories that the user has access to
* `issueStartStopWatch` - Start stopwatch on an issue.
* `issueStopStopWatch` - Stop an issue's existing stopwatch.
* `issueSubscriptions` - Get users who subscribed on an issue.
* `issueTrackedTimes` - List an issue's tracked times

### miscellaneous

* `getNodeInfo` - Returns the nodeinfo of the Gitea application
* `getSigningKey` - Get default signing-key.gpg
* `getVersion` - Returns the version of the Gitea application
* `renderMarkdown` - Render a markdown document as HTML
* `renderMarkdownRaw` - Render raw markdown as HTML

### notification

* `notifyGetList` - List users's notification threads
* `notifyGetRepoList` - List users's notification threads on a specific repo
* `notifyGetThread` - Get notification thread by ID
* `notifyNewAvailable` - Check if unread notifications exist
* `notifyReadList` - Mark notification threads as read, pinned or unread
* `notifyReadRepoList` - Mark notification threads as read, pinned or unread on a specific repo
* `notifyReadThread` - Mark notification thread as read by ID

### organization

* `createOrgRepo` - Create a repository in an organization
* `createOrgRepoDeprecated` - Create a repository in an organization
* `orgAddTeamMember` - Add a team member
* `orgAddTeamRepository` - Add a repository to a team
* `orgConcealMember` - Conceal a user's membership
* `orgCreate` - Create an organization
* `orgCreateHook` - Create a hook
* `orgCreateLabel` - Create a label for an organization
* `orgCreateTeam` - Create a team
* `orgDelete` - Delete an organization
* `orgDeleteHook` - Delete a hook
* `orgDeleteLabel` - Delete a label
* `orgDeleteMember` - Remove a member from an organization
* `orgDeleteTeam` - Delete a team
* `orgEdit` - Edit an organization
* `orgEditHook` - Update a hook
* `orgEditLabel` - Update a label
* `orgEditTeam` - Edit a team
* `orgGet` - Get an organization
* `orgGetAll` - Get list of organizations
* `orgGetHook` - Get a hook
* `orgGetLabel` - Get a single label
* `orgGetTeam` - Get a team
* `orgGetUserPermissions` - Get user permissions in organization
* `orgIsMember` - Check if a user is a member of an organization
* `orgIsPublicMember` - Check if a user is a public member of an organization
* `orgListCurrentUserOrgs` - List the current user's organizations
* `orgListHooks` - List an organization's webhooks
* `orgListLabels` - List an organization's labels
* `orgListMembers` - List an organization's members
* `orgListPublicMembers` - List an organization's public members
* `orgListRepos` - List an organization's repos
* `orgListTeamMember` - List a particular member of team
* `orgListTeamMembers` - List a team's members
* `orgListTeamRepo` - List a particular repo of team
* `orgListTeamRepos` - List a team's repos
* `orgListTeams` - List an organization's teams
* `orgListUserOrgs` - List a user's organizations
* `orgPublicizeMember` - Publicize a user's membership
* `orgRemoveTeamMember` - Remove a team member
* `orgRemoveTeamRepository` - Remove a repository from a team
* `teamSearch` - Search for teams within an organization

### package_

* `deletePackage` - Delete a package
* `getPackage` - Gets a package
* `listPackageFiles` - Gets all files of a package
* `listPackages` - Gets all packages of an owner

### repository

* `getAnnotatedTag` - Gets the tag object of an annotated tag (not lightweight tags)
* `getBlob` - Gets the blob of a repository.
* `getTree` - Gets the tree of a repository.
* `acceptRepoTransfer` - Accept a repo transfer
* `createCurrentUserRepo` - Create a repository
* `createForkJson` - Fork a repository
* `createForkRaw` - Fork a repository
* `generateRepo` - Create a repository using a template
* `listForks` - List a repository's forks
* `rejectRepoTransfer` - Reject a repo transfer
* `repoAddCollaboratorJson` - Add a collaborator to a repository
* `repoAddCollaboratorRaw` - Add a collaborator to a repository
* `repoAddPushMirror` - add a push mirror to the repository
* `repoAddTeam` - Add a team to a repository
* `repoAddTopic` - Add a topic to a repository
* `repoApplyDiffPatch` - Apply diff patch to repository
* `repoCancelScheduledAutoMerge` - Cancel the scheduled auto merge for the given pull request
* `repoCheckCollaborator` - Check if a user is a collaborator of a repository
* `repoCheckTeam` - Check if a team is assigned to a repository
* `repoCreateBranch` - Create a branch
* `repoCreateBranchProtection` - Create a branch protections for a repository
* `repoCreateFile` - Create a file in a repository
* `repoCreateHook` - Create a hook
* `repoCreateKey` - Add a key to a repository
* `repoCreatePullRequest` - Create a pull request
* `repoCreatePullReviewRequestsJson` - create review requests for a pull request
* `repoCreatePullReviewRequestsRaw` - create review requests for a pull request
* `repoCreatePullReviewJson` - Create a review to an pull request
* `repoCreatePullReviewRaw` - Create a review to an pull request
* `repoCreateRelease` - Create a release
* `repoCreateReleaseAttachment` - Create a release attachment
* `repoCreateStatusJson` - Create a commit status
* `repoCreateStatusRaw` - Create a commit status
* `repoCreateTagJson` - Create a new git tag in a repository
* `repoCreateTagRaw` - Create a new git tag in a repository
* `repoCreateWikiPage` - Create a wiki page
* `repoDelete` - Delete a repository
* `repoDeleteBranch` - Delete a specific branch from a repository
* `repoDeleteBranchProtection` - Delete a specific branch protection for the repository
* `repoDeleteCollaborator` - Delete a collaborator from a repository
* `repoDeleteFile` - Delete a file in a repository
* `repoDeleteGitHook` - Delete a Git hook in a repository
* `repoDeleteHook` - Delete a hook in a repository
* `repoDeleteKey` - Delete a key from a repository
* `repoDeletePullReview` - Delete a specific review from a pull request
* `repoDeletePullReviewRequestsJson` - cancel review requests for a pull request
* `repoDeletePullReviewRequestsRaw` - cancel review requests for a pull request
* `repoDeletePushMirror` - deletes a push mirror from a repository by remoteName
* `repoDeleteRelease` - Delete a release
* `repoDeleteReleaseAttachment` - Delete a release attachment
* `repoDeleteReleaseByTag` - Delete a release by tag name
* `repoDeleteTag` - Delete a repository's tag by name
* `repoDeleteTeam` - Delete a team from a repository
* `repoDeleteTopic` - Delete a topic from a repository
* `repoDeleteWikiPage` - Delete a wiki page
* `repoDismissPullReviewJson` - Dismiss a review for a pull request
* `repoDismissPullReviewRaw` - Dismiss a review for a pull request
* `repoDownloadCommitDiffOrPatch` - Get a commit's diff or patch
* `repoDownloadPullDiffOrPatch` - Get a pull request diff or patch
* `repoEditBranchProtection` - Edit a branch protections for a repository. Only fields that are set will be changed
* `repoEditGitHookJson` - Edit a Git hook in a repository
* `repoEditGitHookRaw` - Edit a Git hook in a repository
* `repoEditHookJson` - Edit a hook in a repository
* `repoEditHookRaw` - Edit a hook in a repository
* `repoEditPullRequest` - Update a pull request. If using deadline only the date will be taken into account, and time of day ignored.
* `repoEditRelease` - Update a release
* `repoEditReleaseAttachment` - Edit a release attachment
* `repoEditWikiPage` - Edit a wiki page
* `repoEditJson` - Edit a repository's properties. Only fields that are set will be changed.
* `repoEditRaw` - Edit a repository's properties. Only fields that are set will be changed.
* `repoGet` - Get a repository
* `repoGetAllCommits` - Get a list of all commits from a repository
* `repoGetArchive` - Get an archive of a repository
* `repoGetAssignees` - Return all users that have write access and can be assigned to issues
* `repoGetBranch` - Retrieve a specific branch from a repository, including its effective branch protection
* `repoGetBranchProtection` - Get a specific branch protection for the repository
* `repoGetByID` - Get a repository by id
* `repoGetCombinedStatusByRef` - Get a commit's combined status, by branch/tag/commit reference
* `repoGetContents` - Gets the metadata and contents (if a file) of an entry in a repository, or a list of entries if a dir
* `repoGetContentsList` - Gets the metadata of all the entries of the root dir
* `repoGetEditorConfig` - Get the EditorConfig definitions of a file in a repository
* `repoGetGitHook` - Get a Git hook
* `repoGetHook` - Get a hook
* `repoGetIssueTemplates` - Get available issue templates for a repository
* `repoGetKey` - Get a repository's key by id
* `repoGetLanguages` - Get languages and number of bytes of code written
* `repoGetLatestRelease` - Gets the most recent non-prerelease, non-draft release of a repository, sorted by created_at
* `repoGetNote` - Get a note corresponding to a single commit from a repository
* `repoGetPullRequest` - Get a pull request
* `repoGetPullRequestCommits` - Get commits for a pull request
* `repoGetPullRequestFiles` - Get changed files for a pull request
* `repoGetPullReview` - Get a specific review for a pull request
* `repoGetPullReviewComments` - Get a specific review for a pull request
* `repoGetPushMirrorByRemoteName` - Get push mirror of the repository by remoteName
* `repoGetRawFile` - Get a file from a repository
* `repoGetRawFileOrLFS` - Get a file or it's LFS object from a repository
* `repoGetRelease` - Get a release
* `repoGetReleaseAttachment` - Get a release attachment
* `repoGetReleaseByTag` - Get a release by tag name
* `repoGetRepoPermissions` - Get repository permissions for a user
* `repoGetReviewers` - Return all users that can be requested to review in this repo
* `repoGetSingleCommit` - Get a single commit from a repository
* `repoGetTag` - Get the tag of a repository by tag name
* `repoGetWikiPage` - Get a wiki page
* `repoGetWikiPageRevisions` - Get revisions of a wiki page
* `repoGetWikiPages` - Get all wiki pages
* `repoListAllGitRefs` - Get specified ref or filtered repository's refs
* `repoListBranchProtection` - List branch protections for a repository
* `repoListBranches` - List a repository's branches
* `repoListCollaborators` - List a repository's collaborators
* `repoListGitHooks` - List the Git hooks in a repository
* `repoListGitRefs` - Get specified ref or filtered repository's refs
* `repoListHooks` - List the hooks in a repository
* `repoListKeys` - List a repository's keys
* `repoListPullRequests` - List a repo's pull requests
* `repoListPullReviews` - List all reviews for a pull request
* `repoListPushMirrors` - Get all push mirrors of the repository
* `repoListReleaseAttachments` - List release's attachments
* `repoListReleases` - List a repo's releases
* `repoListStargazers` - List a repo's stargazers
* `repoListStatuses` - Get a commit's statuses
* `repoListStatusesByRef` - Get a commit's statuses, by branch/tag/commit reference
* `repoListSubscribers` - List a repo's watchers
* `repoListTags` - List a repository's tags
* `repoListTeams` - List a repository's teams
* `repoListTopics` - Get list of topics that a repository has
* `repoMergePullRequestJson` - Merge a pull request
* `repoMergePullRequestRaw` - Merge a pull request
* `repoMigrate` - Migrate a remote git repository
* `repoMirrorSync` - Sync a mirrored repository
* `repoPullRequestIsMerged` - Check if a pull request has been merged
* `repoPushMirrorSync` - Sync all push mirrored repository
* `repoSearch` - Search for repositories
* `repoSigningKey` - Get signing-key.gpg for given repository
* `repoSubmitPullReviewJson` - Submit a pending review to an pull request
* `repoSubmitPullReviewRaw` - Submit a pending review to an pull request
* `repoTestHook` - Test a push webhook
* `repoTrackedTimes` - List a repo's tracked times
* `repoTransferJson` - Transfer a repo ownership
* `repoTransferRaw` - Transfer a repo ownership
* `repoUnDismissPullReview` - Cancel to dismiss a review for a pull request
* `repoUpdateFile` - Update a file in a repository
* `repoUpdatePullRequest` - Merge PR's baseBranch into headBranch
* `repoUpdateTopicsJson` - Replace list of topics for a repository
* `repoUpdateTopicsRaw` - Replace list of topics for a repository
* `topicSearch` - search topics via keyword
* `userCurrentCheckSubscription` - Check if the current user is watching a repo
* `userCurrentDeleteSubscription` - Unwatch a repo
* `userCurrentPutSubscription` - Watch a repo
* `userTrackedTimes` - List a user's tracked times in a repo

### settings

* `getGeneralAPISettings` - Get instance's global settings for api
* `getGeneralAttachmentSettings` - Get instance's global settings for Attachment
* `getGeneralRepositorySettings` - Get instance's global settings for repositories
* `getGeneralUISettings` - Get instance's global settings for ui

### user

* `createCurrentUserRepo` - Create a repository
* `getUserSettings` - Get user settings
* `getVerificationToken` - Get a Token to verify
* `updateUserSettingsJson` - Update user settings
* `updateUserSettingsRaw` - Update user settings
* `userAddEmailJson` - Add email addresses
* `userAddEmailRaw` - Add email addresses
* `userCheckFollowing` - Check if one user is following another user
* `userCreateOAuth2ApplicationJson` - creates a new OAuth2 application
* `userCreateOAuth2ApplicationRaw` - creates a new OAuth2 application
* `userCreateToken` - Create an access token
* `userCurrentCheckFollowing` - Check whether a user is followed by the authenticated user
* `userCurrentCheckStarring` - Whether the authenticated is starring the repo
* `userCurrentDeleteFollow` - Unfollow a user
* `userCurrentDeleteGPGKey` - Remove a GPG key
* `userCurrentDeleteKey` - Delete a public key
* `userCurrentDeleteStar` - Unstar the given repo
* `userCurrentGetGPGKey` - Get a GPG key
* `userCurrentGetKey` - Get a public key
* `userCurrentListFollowers` - List the authenticated user's followers
* `userCurrentListFollowing` - List the users that the authenticated user is following
* `userCurrentListGPGKeys` - List the authenticated user's GPG keys
* `userCurrentListKeys` - List the authenticated user's public keys
* `userCurrentListRepos` - List the repos that the authenticated user owns
* `userCurrentListStarred` - The repos that the authenticated user has starred
* `userCurrentListSubscriptions` - List repositories watched by the authenticated user
* `userCurrentPostGPGKey` - Create a GPG key
* `userCurrentPostKey` - Create a public key
* `userCurrentPutFollow` - Follow a user
* `userCurrentPutStar` - Star the given repo
* `userCurrentTrackedTimes` - List the current user's tracked times
* `userDeleteAccessToken` - delete an access token
* `userDeleteEmailJson` - Delete email addresses
* `userDeleteEmailRaw` - Delete email addresses
* `userDeleteOAuth2Application` - delete an OAuth2 Application
* `userGet` - Get a user
* `userGetCurrent` - Get the authenticated user
* `userGetHeatmapData` - Get a user's heatmap
* `userGetOAuth2Application` - get an OAuth2 Application
* `userGetOauth2Application` - List the authenticated user's oauth2 applications
* `userGetStopWatches` - Get list of all existing stopwatches
* `userGetTokens` - List the authenticated user's access tokens
* `userListEmails` - List the authenticated user's email addresses
* `userListFollowers` - List the given user's followers
* `userListFollowing` - List the users that the given user is following
* `userListGPGKeys` - List the given user's GPG keys
* `userListKeys` - List the given user's public keys
* `userListRepos` - List the repos owned by the given user
* `userListStarred` - The repos that the given user has starred
* `userListSubscriptions` - List the repositories watched by a user
* `userListTeams` - List all the teams a user belongs to
* `userSearch` - Search for users
* `userUpdateOAuth2ApplicationJson` - update an OAuth2 Application, this includes regenerating the client secret
* `userUpdateOAuth2ApplicationRaw` - update an OAuth2 Application, this includes regenerating the client secret
* `userVerifyGPGKey` - Verify a GPG key
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
