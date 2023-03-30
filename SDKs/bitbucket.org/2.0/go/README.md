# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/bitbucket.org/2.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DeleteAddonRequest{
        Security: operations.DeleteAddonSecurity{
            APIKey: &shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Addon.DeleteAddon(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Addon

* `DeleteAddon` - Delete an app
* `DeleteAddonLinkersLinkerKeyValues` - Delete all linker values
* `DeleteAddonLinkersLinkerKeyValuesValueID` - Delete a linker value
* `GetAddonLinkers` - List linkers for an app
* `GetAddonLinkersLinkerKey` - Get a linker for an app
* `GetAddonLinkersLinkerKeyValues` - List linker values for a linker
* `GetAddonLinkersLinkerKeyValuesValueID` - Get a linker value
* `PostAddonLinkersLinkerKeyValues` - Create a linker value
* `PutAddon` - Update an installed app
* `PutAddonLinkersLinkerKeyValues` - Update a linker value

### BranchRestrictions

* `DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsID` - Delete a branch restriction rule
* `GetRepositoriesWorkspaceRepoSlugBranchRestrictions` - List branch restrictions
* `GetRepositoriesWorkspaceRepoSlugBranchRestrictionsID` - Get a branch restriction rule
* `PostRepositoriesWorkspaceRepoSlugBranchRestrictions` - Create a branch restriction rule
* `PutRepositoriesWorkspaceRepoSlugBranchRestrictionsID` - Update a branch restriction rule

### BranchingModel

* `GetRepositoriesWorkspaceRepoSlugBranchingModel` - Get the branching model for a repository
* `GetRepositoriesWorkspaceRepoSlugBranchingModelSettings` - Get the branching model config for a repository
* `GetRepositoriesWorkspaceRepoSlugEffectiveBranchingModel` - Get the effective, or currently applied, branching model for a repository
* `GetWorkspacesWorkspaceProjectsProjectKeyBranchingModel` - Get the branching model for a project
* `GetWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings` - Get the branching model config for a project
* `PutRepositoriesWorkspaceRepoSlugBranchingModelSettings` - Update the branching model config for a repository
* `PutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings` - Update the branching model config for a project

### CommitStatuses

* `GetRepositoriesWorkspaceRepoSlugCommitCommitStatuses` - List commit statuses for a commit
* `GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey` - Get a build status for a commit
* `GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatuses` - List commit statuses for a pull request
* `PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild` - Create a build status for a commit
* `PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey` - Update a build status for a commit

### Commits

* `BulkCreateOrUpdateAnnotations` - Bulk create or update annotations
* `CreateOrUpdateAnnotation` - Create or update an annotation
* `CreateOrUpdateReport` - Create or update a report
* `DeleteAnnotation` - Delete an annotation
* `DeleteReport` - Delete a report
* `DeleteRepositoriesWorkspaceRepoSlugCommitCommitApprove` - Unapprove a commit
* `DeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentID` - Delete a commit comment
* `GetAnnotation` - Get an annotation
* `GetAnnotationsForReport` - List annotations
* `GetReport` - Get a report
* `GetReportsForCommit` - List reports
* `GetRepositoriesWorkspaceRepoSlugCommitCommit` - Get a commit
* `GetRepositoriesWorkspaceRepoSlugCommitCommitComments` - List a commit's comments
* `GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentID` - Get a commit comment
* `GetRepositoriesWorkspaceRepoSlugCommits` - List commits
* `GetRepositoriesWorkspaceRepoSlugCommitsRevision` - List commits for revision
* `GetRepositoriesWorkspaceRepoSlugDiffSpec` - Compare two commits
* `GetRepositoriesWorkspaceRepoSlugDiffstatSpec` - Compare two commit diff stats
* `GetRepositoriesWorkspaceRepoSlugMergeBaseRevspec` - Get the common ancestor between two commits
* `GetRepositoriesWorkspaceRepoSlugPatchSpec` - Get a patch for two commits
* `PostRepositoriesWorkspaceRepoSlugCommitCommitApprove` - Approve a commit
* `PostRepositoriesWorkspaceRepoSlugCommitCommitComments` - Create comment for a commit
* `PostRepositoriesWorkspaceRepoSlugCommits` - List commits with include/exclude
* `PostRepositoriesWorkspaceRepoSlugCommitsRevision` - List commits for revision using include/exclude
* `PutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentID` - Update a commit comment

### Deployments

* `CreateEnvironment` - Create an environment
* `DeleteEnvironmentForRepository` - Delete an environment
* `DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyID` - Delete a repository deploy key
* `DeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyID` - Delete a deploy key from a project
* `GetDeploymentForRepository` - Get a deployment
* `GetDeploymentsForRepository` - List deployments
* `GetEnvironmentForRepository` - Get an environment
* `GetEnvironmentsForRepository` - List environments
* `GetRepositoriesWorkspaceRepoSlugDeployKeys` - List repository deploy keys
* `GetRepositoriesWorkspaceRepoSlugDeployKeysKeyID` - Get a repository deploy key
* `GetWorkspacesWorkspaceProjectsProjectKeyDeployKeys` - List project deploy keys
* `GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyID` - Get a project deploy key
* `PostRepositoriesWorkspaceRepoSlugDeployKeys` - Add a repository deploy key
* `PostWorkspacesWorkspaceProjectsProjectKeyDeployKeys` - Create a project deploy key
* `PutRepositoriesWorkspaceRepoSlugDeployKeysKeyID` - Update a repository deploy key
* `UpdateEnvironmentForRepository` - Update an environment

### Downloads

* `DeleteRepositoriesWorkspaceRepoSlugDownloadsFilename` - Delete a download artifact
* `GetRepositoriesWorkspaceRepoSlugDownloads` - List download artifacts
* `GetRepositoriesWorkspaceRepoSlugDownloadsFilename` - Get a download artifact link
* `PostRepositoriesWorkspaceRepoSlugDownloads` - Upload a download artifact

### IssueTracker

* `DeleteRepositoriesWorkspaceRepoSlugIssuesIssueID` - Delete an issue
* `DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPath` - Delete an attachment for an issue
* `DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentID` - Delete a comment on an issue
* `DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDVote` - Remove vote for an issue
* `DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDWatch` - Stop watching an issue
* `GetRepositoriesWorkspaceRepoSlugComponents` - List components
* `GetRepositoriesWorkspaceRepoSlugComponentsComponentID` - Get a component for issues
* `GetRepositoriesWorkspaceRepoSlugIssues` - List issues
* `GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZip` - Check issue export status
* `GetRepositoriesWorkspaceRepoSlugIssuesImport` - Check issue import status
* `GetRepositoriesWorkspaceRepoSlugIssuesIssueID` - Get an issue
* `GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachments` - List attachments for an issue
* `GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPath` - Get attachment for an issue
* `GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChanges` - List changes on an issue
* `GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeID` - Get issue change object
* `GetRepositoriesWorkspaceRepoSlugIssuesIssueIDComments` - List comments on an issue
* `GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentID` - Get a comment on an issue
* `GetRepositoriesWorkspaceRepoSlugIssuesIssueIDVote` - Check if current user voted for an issue
* `GetRepositoriesWorkspaceRepoSlugIssuesIssueIDWatch` - Check if current user is watching a issue
* `GetRepositoriesWorkspaceRepoSlugMilestones` - List milestones
* `GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneID` - Get a milestone
* `GetRepositoriesWorkspaceRepoSlugVersions` - List defined versions for issues
* `GetRepositoriesWorkspaceRepoSlugVersionsVersionID` - Get a defined version for issues
* `PostRepositoriesWorkspaceRepoSlugIssues` - Create an issue
* `PostRepositoriesWorkspaceRepoSlugIssuesExport` - Export issues
* `PostRepositoriesWorkspaceRepoSlugIssuesImport` - Import issues
* `PostRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachments` - Upload an attachment to an issue
* `PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChanges` - Modify the state of an issue
* `PostRepositoriesWorkspaceRepoSlugIssuesIssueIDComments` - Create a comment on an issue
* `PutRepositoriesWorkspaceRepoSlugIssuesIssueID` - Update an issue
* `PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentID` - Update a comment on an issue
* `PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVote` - Vote for an issue
* `PutRepositoriesWorkspaceRepoSlugIssuesIssueIDWatch` - Watch an issue

### Pipelines

* `CreateDeploymentVariable` - Create a variable for an environment
* `CreatePipelineForRepository` - Run a pipeline
* `CreatePipelineVariableForTeam` - Create a variable for a user
* `CreatePipelineVariableForUser` - Create a variable for a user
* `CreatePipelineVariableForWorkspace` - Create a variable for a workspace
* `CreateRepositoryPipelineKnownHost` - Create a known host
* `CreateRepositoryPipelineSchedule` - Create a schedule
* `CreateRepositoryPipelineVariable` - Create a variable for a repository
* `DeleteDeploymentVariable` - Delete a variable for an environment
* `DeletePipelineVariableForTeam` - Delete a variable for a team
* `DeletePipelineVariableForUser` - Delete a variable for a user
* `DeletePipelineVariableForWorkspace` - Delete a variable for a workspace
* `DeleteRepositoryPipelineCache` - Delete a cache
* `DeleteRepositoryPipelineCaches` - Delete caches
* `DeleteRepositoryPipelineKeyPair` - Delete SSH key pair
* `DeleteRepositoryPipelineKnownHost` - Delete a known host
* `DeleteRepositoryPipelineSchedule` - Delete a schedule
* `DeleteRepositoryPipelineVariable` - Delete a variable for a repository
* `GetDeploymentVariables` - List variables for an environment
* `GetOIDCConfiguration` - Get OpenID configuration for OIDC in Pipelines
* `GetOIDCKeys` - Get keys for OIDC in Pipelines
* `GetPipelineContainerLog` - Get the logs for the build container or a service container for a given step of a pipeline.
* `GetPipelineForRepository` - Get a pipeline
* `GetPipelineStepForRepository` - Get a step of a pipeline
* `GetPipelineStepLogForRepository` - Get log file for a step
* `GetPipelineStepsForRepository` - List steps for a pipeline
* `GetPipelineTestReportTestCaseReasons` - Get test case reasons (output) for a given test case in a step of a pipeline.
* `GetPipelineTestReportTestCases` - Get test cases for a given step of a pipeline.
* `GetPipelineTestReports` - Get a summary of test reports for a given step of a pipeline.
* `GetPipelineVariableForTeam` - Get a variable for a team
* `GetPipelineVariableForUser` - Get a variable for a user
* `GetPipelineVariableForWorkspace` - Get variable for a workspace
* `GetPipelineVariablesForTeam` - List variables for an account
* `GetPipelineVariablesForUser` - List variables for a user
* `GetPipelineVariablesForWorkspace` - List variables for a workspace
* `GetPipelinesForRepository` - List pipelines
* `GetRepositoryPipelineCacheContentURI` - Get cache content URI
* `GetRepositoryPipelineCaches` - List caches
* `GetRepositoryPipelineConfig` - Get configuration
* `GetRepositoryPipelineKnownHost` - Get a known host
* `GetRepositoryPipelineKnownHosts` - List known hosts
* `GetRepositoryPipelineSchedule` - Get a schedule
* `GetRepositoryPipelineScheduleExecutions` - List executions of a schedule
* `GetRepositoryPipelineSchedules` - List schedules
* `GetRepositoryPipelineSSHKeyPair` - Get SSH key pair
* `GetRepositoryPipelineVariable` - Get a variable for a repository
* `GetRepositoryPipelineVariables` - List variables for a repository
* `StopPipeline` - Stop a pipeline
* `UpdateDeploymentVariable` - Update a variable for an environment
* `UpdatePipelineVariableForTeam` - Update a variable for a team
* `UpdatePipelineVariableForUser` - Update a variable for a user
* `UpdatePipelineVariableForWorkspace` - Update variable for a workspace
* `UpdateRepositoryBuildNumber` - Update the next build number
* `UpdateRepositoryPipelineConfig` - Update configuration
* `UpdateRepositoryPipelineKeyPair` - Update SSH key pair
* `UpdateRepositoryPipelineKnownHost` - Update a known host
* `UpdateRepositoryPipelineSchedule` - Update a schedule
* `UpdateRepositoryPipelineVariable` - Update a variable for a repository

### Projects

* `DeleteWorkspacesWorkspaceProjectsProjectKey` - Delete a project for a workspace
* `DeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser` - Remove the specific user from the project's default reviewers
* `GetWorkspacesWorkspaceProjectsProjectKey` - Get a project for a workspace
* `GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewers` - List the default reviewers in a project
* `GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser` - Get a default reviewer
* `PostWorkspacesWorkspaceProjects` - Create a project in a workspace
* `PutWorkspacesWorkspaceProjectsProjectKey` - Update a project for a workspace
* `PutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser` - Add the specific user as a default reviewer for the project

### Pullrequests

* `DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername` - Remove a user from the default reviewers
* `DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApprove` - Unapprove a pull request
* `DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID` - Delete a comment on a pull request
* `DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChanges` - Remove change request for a pull request
* `GetPullrequestsForCommit` - List pull requests that contain a commit
* `GetPullrequestsSelectedUser` - List pull requests for a user
* `GetRepositoriesWorkspaceRepoSlugDefaultReviewers` - List default reviewers
* `GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername` - Get a default reviewer
* `GetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewers` - List effective default reviewers
* `GetRepositoriesWorkspaceRepoSlugPullrequests` - List pull requests
* `GetRepositoriesWorkspaceRepoSlugPullrequestsActivity` - List a pull request activity log
* `GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestID` - Get a pull request
* `GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDActivity` - List a pull request activity log
* `GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDComments` - List comments on a pull request
* `GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID` - Get a comment on a pull request
* `GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommits` - List commits on a pull request
* `GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiff` - List changes in a pull request
* `GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstat` - Get the diff stat for a pull request
* `GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskID` - Get the merge task status for a pull request
* `GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatch` - Get the patch for a pull request
* `GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatuses` - List commit statuses for a pull request
* `PostRepositoriesWorkspaceRepoSlugPullrequests` - Create a pull request
* `PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApprove` - Approve a pull request
* `PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDComments` - Create a comment on a pull request
* `PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDecline` - Decline a pull request
* `PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMerge` - Merge a pull request
* `PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChanges` - Request changes for a pull request
* `PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername` - Add a user to the default reviewers
* `PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestID` - Update a pull request
* `PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID` - Update a comment on a pull request

### Refs

* `DeleteRepositoriesWorkspaceRepoSlugRefsBranchesName` - Delete a branch
* `DeleteRepositoriesWorkspaceRepoSlugRefsTagsName` - Delete a tag
* `GetRepositoriesWorkspaceRepoSlugRefs` - List branches and tags
* `GetRepositoriesWorkspaceRepoSlugRefsBranches` - List open branches
* `GetRepositoriesWorkspaceRepoSlugRefsBranchesName` - Get a branch
* `GetRepositoriesWorkspaceRepoSlugRefsTags` - List tags
* `GetRepositoriesWorkspaceRepoSlugRefsTagsName` - Get a tag
* `PostRepositoriesWorkspaceRepoSlugRefsBranches` - Create a branch
* `PostRepositoriesWorkspaceRepoSlugRefsTags` - Create a tag

### Reports

* `BulkCreateOrUpdateAnnotations` - Bulk create or update annotations
* `CreateOrUpdateAnnotation` - Create or update an annotation
* `CreateOrUpdateReport` - Create or update a report
* `DeleteAnnotation` - Delete an annotation
* `DeleteReport` - Delete a report
* `GetAnnotation` - Get an annotation
* `GetAnnotationsForReport` - List annotations
* `GetReport` - Get a report
* `GetReportsForCommit` - List reports

### Repositories

* `DeleteRepositoriesWorkspaceRepoSlug` - Delete a repository
* `DeleteRepositoriesWorkspaceRepoSlugHooksUID` - Delete a webhook for a repository
* `DeleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug` - Delete an explicit group permission for a repository
* `DeleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserID` - Delete an explicit user permission for a repository
* `GetRepositories` - List public repositories
* `GetRepositoriesWorkspace` - List repositories in a workspace
* `GetRepositoriesWorkspaceRepoSlug` - Get a repository
* `GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPath` - List commits that modified a file
* `GetRepositoriesWorkspaceRepoSlugForks` - List repository forks
* `GetRepositoriesWorkspaceRepoSlugHooks` - List webhooks for a repository
* `GetRepositoriesWorkspaceRepoSlugHooksUID` - Get a webhook for a repository
* `GetRepositoriesWorkspaceRepoSlugOverrideSettings` - Retrieve the inheritance state for repository settings
* `GetRepositoriesWorkspaceRepoSlugPermissionsConfigGroups` - List explicit group permissions for a repository
* `GetRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug` - Get an explicit group permission for a repository
* `GetRepositoriesWorkspaceRepoSlugPermissionsConfigUsers` - List explicit user permissions for a repository
* `GetRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserID` - Get an explicit user permission for a repository
* `GetRepositoriesWorkspaceRepoSlugSrc` - Get the root directory of the main branch
* `GetRepositoriesWorkspaceRepoSlugSrcCommitPath` - Get file or directory contents
* `GetRepositoriesWorkspaceRepoSlugWatchers` - List repositories watchers
* `GetUserPermissionsRepositories` - List repository permissions for a user
* `PostRepositoriesWorkspaceRepoSlug` - Create a repository
* `PostRepositoriesWorkspaceRepoSlugForks` - Fork a repository
* `PostRepositoriesWorkspaceRepoSlugHooks` - Create a webhook for a repository
* `PostRepositoriesWorkspaceRepoSlugSrc` - Create a commit by uploading a file
* `PutRepositoriesWorkspaceRepoSlug` - Update a repository
* `PutRepositoriesWorkspaceRepoSlugHooksUID` - Update a webhook for a repository
* `PutRepositoriesWorkspaceRepoSlugOverrideSettings` - Set the inheritance state for repository settings
                
* `PutRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug` - Update an explicit group permission for a repository
* `PutRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserID` - Update an explicit user permission for a repository

### Search

* `SearchAccount` - Search for code in a user's repositories
* `SearchTeam` - Search for code in a team's repositories
* `SearchWorkspace` - Search for code in a workspace

### Snippets

* `DeleteSnippetsWorkspaceEncodedID` - Delete a snippet
* `DeleteSnippetsWorkspaceEncodedIDCommentsCommentID` - Delete a comment on a snippet
* `DeleteSnippetsWorkspaceEncodedIDWatch` - Stop watching a snippet
* `DeleteSnippetsWorkspaceEncodedIDNodeID` - Delete a previous revision of a snippet
* `GetSnippets` - List snippets
* `GetSnippetsWorkspace` - List snippets in a workspace
* `GetSnippetsWorkspaceEncodedID` - Get a snippet
* `GetSnippetsWorkspaceEncodedIDComments` - List comments on a snippet
* `GetSnippetsWorkspaceEncodedIDCommentsCommentID` - Get a comment on a snippet
* `GetSnippetsWorkspaceEncodedIDCommits` - List snippet changes
* `GetSnippetsWorkspaceEncodedIDCommitsRevision` - Get a previous snippet change
* `GetSnippetsWorkspaceEncodedIDFilesPath` - Get a snippet's raw file at HEAD
* `GetSnippetsWorkspaceEncodedIDWatch` - Check if the current user is watching a snippet
* `GetSnippetsWorkspaceEncodedIDWatchers` - List users watching a snippet
* `GetSnippetsWorkspaceEncodedIDNodeID` - Get a previous revision of a snippet
* `GetSnippetsWorkspaceEncodedIDNodeIDFilesPath` - Get a snippet's raw file
* `GetSnippetsWorkspaceEncodedIDRevisionDiff` - Get snippet changes between versions
* `GetSnippetsWorkspaceEncodedIDRevisionPatch` - Get snippet patch between versions
* `PostSnippets` - Create a snippet
* `PostSnippetsWorkspace` - Create a snippet for a workspace
* `PostSnippetsWorkspaceEncodedIDComments` - Create a comment on a snippet
* `PutSnippetsWorkspaceEncodedID` - Update a snippet
* `PutSnippetsWorkspaceEncodedIDCommentsCommentID` - Update a comment on a snippet
* `PutSnippetsWorkspaceEncodedIDWatch` - Watch a snippet
* `PutSnippetsWorkspaceEncodedIDNodeID` - Update a previous revision of a snippet

### Source

* `GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPath` - List commits that modified a file
* `GetRepositoriesWorkspaceRepoSlugSrc` - Get the root directory of the main branch
* `GetRepositoriesWorkspaceRepoSlugSrcCommitPath` - Get file or directory contents
* `PostRepositoriesWorkspaceRepoSlugSrc` - Create a commit by uploading a file

### SSH

* `DeleteUsersSelectedUserSSHKeysKeyID` - Delete a SSH key
* `GetUsersSelectedUserSSHKeys` - List SSH keys
* `GetUsersSelectedUserSSHKeysKeyID` - Get a SSH key
* `PostUsersSelectedUserSSHKeys` - Add a new SSH key
* `PutUsersSelectedUserSSHKeysKeyID` - Update a SSH key

### Users

* `GetUser` - Get current user
* `GetUserEmails` - List email addresses for current user
* `GetUserEmailsEmail` - Get an email address for current user
* `GetUsersSelectedUser` - Get a user

### Webhooks

* `DeleteRepositoriesWorkspaceRepoSlugHooksUID` - Delete a webhook for a repository
* `DeleteWorkspacesWorkspaceHooksUID` - Delete a webhook for a workspace
* `GetHookEvents` - Get a webhook resource
* `GetHookEventsSubjectType` - List subscribable webhook types
* `GetRepositoriesWorkspaceRepoSlugHooks` - List webhooks for a repository
* `GetRepositoriesWorkspaceRepoSlugHooksUID` - Get a webhook for a repository
* `GetWorkspacesWorkspaceHooks` - List webhooks for a workspace
* `GetWorkspacesWorkspaceHooksUID` - Get a webhook for a workspace
* `PostRepositoriesWorkspaceRepoSlugHooks` - Create a webhook for a repository
* `PostWorkspacesWorkspaceHooks` - Create a webhook for a workspace
* `PutRepositoriesWorkspaceRepoSlugHooksUID` - Update a webhook for a repository
* `PutWorkspacesWorkspaceHooksUID` - Update a webhook for a workspace

### Workspaces

* `DeleteWorkspacesWorkspaceHooksUID` - Delete a webhook for a workspace
* `GetUserPermissionsWorkspaces` - List workspaces for the current user
* `GetWorkspaces` - List workspaces for user
* `GetWorkspacesWorkspace` - Get a workspace
* `GetWorkspacesWorkspaceHooks` - List webhooks for a workspace
* `GetWorkspacesWorkspaceHooksUID` - Get a webhook for a workspace
* `GetWorkspacesWorkspaceMembers` - List users in a workspace
* `GetWorkspacesWorkspaceMembersMember` - Get user membership for a workspace
* `GetWorkspacesWorkspacePermissions` - List user permissions in a workspace
* `GetWorkspacesWorkspacePermissionsRepositories` - List all repository permissions for a workspace
* `GetWorkspacesWorkspacePermissionsRepositoriesRepoSlug` - List a repository permissions for a workspace
* `GetWorkspacesWorkspaceProjects` - List projects in a workspace
* `GetWorkspacesWorkspaceProjectsProjectKey` - Get a project for a workspace
* `PostWorkspacesWorkspaceHooks` - Create a webhook for a workspace
* `PutWorkspacesWorkspaceHooksUID` - Update a webhook for a workspace

### Properties

* `DeleteCommitHostedPropertyValue` - Delete a commit application property
* `DeletePullRequestHostedPropertyValue` - Delete a pull request application property
* `DeleteRepositoryHostedPropertyValue` - Delete a repository application property
* `DeleteUserHostedPropertyValue` - Delete a user application property
* `GetCommitHostedPropertyValue` - Get a commit application property
* `GetPullRequestHostedPropertyValue` - Get a pull request application property
* `GetRepositoryHostedPropertyValue` - Get a repository application property
* `RetrieveUserHostedPropertyValue` - Get a user application property
* `UpdateCommitHostedPropertyValue` - Update a commit application property
* `UpdatePullRequestHostedPropertyValue` - Update a pull request application property
* `UpdateRepositoryHostedPropertyValue` - Update a repository application property
* `UpdateUserHostedPropertyValue` - Update a user application property
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
