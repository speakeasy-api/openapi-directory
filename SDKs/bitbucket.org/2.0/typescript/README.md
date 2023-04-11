# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/bitbucket.org/2.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/bitbucket.org/2.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteAddonResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.addon.deleteAddon().then((res: DeleteAddonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### addon

* `deleteAddon` - Delete an app
* `deleteAddonLinkersLinkerKeyValues` - Delete all linker values
* `deleteAddonLinkersLinkerKeyValuesValueId` - Delete a linker value
* `getAddonLinkers` - List linkers for an app
* `getAddonLinkersLinkerKey` - Get a linker for an app
* `getAddonLinkersLinkerKeyValues` - List linker values for a linker
* `getAddonLinkersLinkerKeyValuesValueId` - Get a linker value
* `postAddonLinkersLinkerKeyValues` - Create a linker value
* `putAddon` - Update an installed app
* `putAddonLinkersLinkerKeyValues` - Update a linker value

### branchRestrictions

* `deleteRepositoriesWorkspaceRepoSlugBranchRestrictionsId` - Delete a branch restriction rule
* `getRepositoriesWorkspaceRepoSlugBranchRestrictions` - List branch restrictions
* `getRepositoriesWorkspaceRepoSlugBranchRestrictionsId` - Get a branch restriction rule
* `postRepositoriesWorkspaceRepoSlugBranchRestrictions` - Create a branch restriction rule
* `putRepositoriesWorkspaceRepoSlugBranchRestrictionsId` - Update a branch restriction rule

### branchingModel

* `getRepositoriesWorkspaceRepoSlugBranchingModel` - Get the branching model for a repository
* `getRepositoriesWorkspaceRepoSlugBranchingModelSettings` - Get the branching model config for a repository
* `getRepositoriesWorkspaceRepoSlugEffectiveBranchingModel` - Get the effective, or currently applied, branching model for a repository
* `getWorkspacesWorkspaceProjectsProjectKeyBranchingModel` - Get the branching model for a project
* `getWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings` - Get the branching model config for a project
* `putRepositoriesWorkspaceRepoSlugBranchingModelSettings` - Update the branching model config for a repository
* `putWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings` - Update the branching model config for a project

### commitStatuses

* `getRepositoriesWorkspaceRepoSlugCommitCommitStatuses` - List commit statuses for a commit
* `getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey` - Get a build status for a commit
* `getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses` - List commit statuses for a pull request
* `postRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild` - Create a build status for a commit
* `putRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey` - Update a build status for a commit

### commits

* `bulkCreateOrUpdateAnnotations` - Bulk create or update annotations
* `createOrUpdateAnnotation` - Create or update an annotation
* `createOrUpdateReport` - Create or update a report
* `deleteAnnotation` - Delete an annotation
* `deleteReport` - Delete a report
* `deleteRepositoriesWorkspaceRepoSlugCommitCommitApprove` - Unapprove a commit
* `deleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId` - Delete a commit comment
* `getAnnotation` - Get an annotation
* `getAnnotationsForReport` - List annotations
* `getReport` - Get a report
* `getReportsForCommit` - List reports
* `getRepositoriesWorkspaceRepoSlugCommitCommit` - Get a commit
* `getRepositoriesWorkspaceRepoSlugCommitCommitComments` - List a commit's comments
* `getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId` - Get a commit comment
* `getRepositoriesWorkspaceRepoSlugCommits` - List commits
* `getRepositoriesWorkspaceRepoSlugCommitsRevision` - List commits for revision
* `getRepositoriesWorkspaceRepoSlugDiffSpec` - Compare two commits
* `getRepositoriesWorkspaceRepoSlugDiffstatSpec` - Compare two commit diff stats
* `getRepositoriesWorkspaceRepoSlugMergeBaseRevspec` - Get the common ancestor between two commits
* `getRepositoriesWorkspaceRepoSlugPatchSpec` - Get a patch for two commits
* `postRepositoriesWorkspaceRepoSlugCommitCommitApprove` - Approve a commit
* `postRepositoriesWorkspaceRepoSlugCommitCommitComments` - Create comment for a commit
* `postRepositoriesWorkspaceRepoSlugCommits` - List commits with include/exclude
* `postRepositoriesWorkspaceRepoSlugCommitsRevision` - List commits for revision using include/exclude
* `putRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId` - Update a commit comment

### deployments

* `createEnvironment` - Create an environment
* `deleteEnvironmentForRepository` - Delete an environment
* `deleteRepositoriesWorkspaceRepoSlugDeployKeysKeyId` - Delete a repository deploy key
* `deleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId` - Delete a deploy key from a project
* `getDeploymentForRepository` - Get a deployment
* `getDeploymentsForRepository` - List deployments
* `getEnvironmentForRepository` - Get an environment
* `getEnvironmentsForRepository` - List environments
* `getRepositoriesWorkspaceRepoSlugDeployKeys` - List repository deploy keys
* `getRepositoriesWorkspaceRepoSlugDeployKeysKeyId` - Get a repository deploy key
* `getWorkspacesWorkspaceProjectsProjectKeyDeployKeys` - List project deploy keys
* `getWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId` - Get a project deploy key
* `postRepositoriesWorkspaceRepoSlugDeployKeys` - Add a repository deploy key
* `postWorkspacesWorkspaceProjectsProjectKeyDeployKeys` - Create a project deploy key
* `putRepositoriesWorkspaceRepoSlugDeployKeysKeyId` - Update a repository deploy key
* `updateEnvironmentForRepository` - Update an environment

### downloads

* `deleteRepositoriesWorkspaceRepoSlugDownloadsFilename` - Delete a download artifact
* `getRepositoriesWorkspaceRepoSlugDownloads` - List download artifacts
* `getRepositoriesWorkspaceRepoSlugDownloadsFilename` - Get a download artifact link
* `postRepositoriesWorkspaceRepoSlugDownloads` - Upload a download artifact

### issueTracker

* `deleteRepositoriesWorkspaceRepoSlugIssuesIssueId` - Delete an issue
* `deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath` - Delete an attachment for an issue
* `deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId` - Delete a comment on an issue
* `deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVote` - Remove vote for an issue
* `deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch` - Stop watching an issue
* `getRepositoriesWorkspaceRepoSlugComponents` - List components
* `getRepositoriesWorkspaceRepoSlugComponentsComponentId` - Get a component for issues
* `getRepositoriesWorkspaceRepoSlugIssues` - List issues
* `getRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZip` - Check issue export status
* `getRepositoriesWorkspaceRepoSlugIssuesImport` - Check issue import status
* `getRepositoriesWorkspaceRepoSlugIssuesIssueId` - Get an issue
* `getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments` - List attachments for an issue
* `getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath` - Get attachment for an issue
* `getRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges` - List changes on an issue
* `getRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeId` - Get issue change object
* `getRepositoriesWorkspaceRepoSlugIssuesIssueIdComments` - List comments on an issue
* `getRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId` - Get a comment on an issue
* `getRepositoriesWorkspaceRepoSlugIssuesIssueIdVote` - Check if current user voted for an issue
* `getRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch` - Check if current user is watching a issue
* `getRepositoriesWorkspaceRepoSlugMilestones` - List milestones
* `getRepositoriesWorkspaceRepoSlugMilestonesMilestoneId` - Get a milestone
* `getRepositoriesWorkspaceRepoSlugVersions` - List defined versions for issues
* `getRepositoriesWorkspaceRepoSlugVersionsVersionId` - Get a defined version for issues
* `postRepositoriesWorkspaceRepoSlugIssues` - Create an issue
* `postRepositoriesWorkspaceRepoSlugIssuesExport` - Export issues
* `postRepositoriesWorkspaceRepoSlugIssuesImport` - Import issues
* `postRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments` - Upload an attachment to an issue
* `postRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges` - Modify the state of an issue
* `postRepositoriesWorkspaceRepoSlugIssuesIssueIdComments` - Create a comment on an issue
* `putRepositoriesWorkspaceRepoSlugIssuesIssueId` - Update an issue
* `putRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId` - Update a comment on an issue
* `putRepositoriesWorkspaceRepoSlugIssuesIssueIdVote` - Vote for an issue
* `putRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch` - Watch an issue

### pipelines

* `createDeploymentVariable` - Create a variable for an environment
* `createPipelineForRepository` - Run a pipeline
* `createPipelineVariableForTeam` - Create a variable for a user
* `createPipelineVariableForUser` - Create a variable for a user
* `createPipelineVariableForWorkspace` - Create a variable for a workspace
* `createRepositoryPipelineKnownHost` - Create a known host
* `createRepositoryPipelineSchedule` - Create a schedule
* `createRepositoryPipelineVariable` - Create a variable for a repository
* `deleteDeploymentVariable` - Delete a variable for an environment
* `deletePipelineVariableForTeam` - Delete a variable for a team
* `deletePipelineVariableForUser` - Delete a variable for a user
* `deletePipelineVariableForWorkspace` - Delete a variable for a workspace
* `deleteRepositoryPipelineCache` - Delete a cache
* `deleteRepositoryPipelineCaches` - Delete caches
* `deleteRepositoryPipelineKeyPair` - Delete SSH key pair
* `deleteRepositoryPipelineKnownHost` - Delete a known host
* `deleteRepositoryPipelineSchedule` - Delete a schedule
* `deleteRepositoryPipelineVariable` - Delete a variable for a repository
* `getDeploymentVariables` - List variables for an environment
* `getOIDCConfiguration` - Get OpenID configuration for OIDC in Pipelines
* `getOIDCKeys` - Get keys for OIDC in Pipelines
* `getPipelineContainerLog` - Get the logs for the build container or a service container for a given step of a pipeline.
* `getPipelineForRepository` - Get a pipeline
* `getPipelineStepForRepository` - Get a step of a pipeline
* `getPipelineStepLogForRepository` - Get log file for a step
* `getPipelineStepsForRepository` - List steps for a pipeline
* `getPipelineTestReportTestCaseReasons` - Get test case reasons (output) for a given test case in a step of a pipeline.
* `getPipelineTestReportTestCases` - Get test cases for a given step of a pipeline.
* `getPipelineTestReports` - Get a summary of test reports for a given step of a pipeline.
* `getPipelineVariableForTeam` - Get a variable for a team
* `getPipelineVariableForUser` - Get a variable for a user
* `getPipelineVariableForWorkspace` - Get variable for a workspace
* `getPipelineVariablesForTeam` - List variables for an account
* `getPipelineVariablesForUser` - List variables for a user
* `getPipelineVariablesForWorkspace` - List variables for a workspace
* `getPipelinesForRepository` - List pipelines
* `getRepositoryPipelineCacheContentURI` - Get cache content URI
* `getRepositoryPipelineCaches` - List caches
* `getRepositoryPipelineConfig` - Get configuration
* `getRepositoryPipelineKnownHost` - Get a known host
* `getRepositoryPipelineKnownHosts` - List known hosts
* `getRepositoryPipelineSchedule` - Get a schedule
* `getRepositoryPipelineScheduleExecutions` - List executions of a schedule
* `getRepositoryPipelineSchedules` - List schedules
* `getRepositoryPipelineSshKeyPair` - Get SSH key pair
* `getRepositoryPipelineVariable` - Get a variable for a repository
* `getRepositoryPipelineVariables` - List variables for a repository
* `stopPipeline` - Stop a pipeline
* `updateDeploymentVariable` - Update a variable for an environment
* `updatePipelineVariableForTeam` - Update a variable for a team
* `updatePipelineVariableForUser` - Update a variable for a user
* `updatePipelineVariableForWorkspace` - Update variable for a workspace
* `updateRepositoryBuildNumber` - Update the next build number
* `updateRepositoryPipelineConfig` - Update configuration
* `updateRepositoryPipelineKeyPair` - Update SSH key pair
* `updateRepositoryPipelineKnownHost` - Update a known host
* `updateRepositoryPipelineSchedule` - Update a schedule
* `updateRepositoryPipelineVariable` - Update a variable for a repository

### projects

* `deleteWorkspacesWorkspaceProjectsProjectKey` - Delete a project for a workspace
* `deleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser` - Remove the specific user from the project's default reviewers
* `getWorkspacesWorkspaceProjectsProjectKey` - Get a project for a workspace
* `getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewers` - List the default reviewers in a project
* `getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser` - Get a default reviewer
* `postWorkspacesWorkspaceProjects` - Create a project in a workspace
* `putWorkspacesWorkspaceProjectsProjectKey` - Update a project for a workspace
* `putWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser` - Add the specific user as a default reviewer for the project

### pullrequests

* `deleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername` - Remove a user from the default reviewers
* `deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove` - Unapprove a pull request
* `deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId` - Delete a comment on a pull request
* `deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges` - Remove change request for a pull request
* `getPullrequestsForCommit` - List pull requests that contain a commit
* `getPullrequestsSelectedUser` - List pull requests for a user
* `getRepositoriesWorkspaceRepoSlugDefaultReviewers` - List default reviewers
* `getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername` - Get a default reviewer
* `getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewers` - List effective default reviewers
* `getRepositoriesWorkspaceRepoSlugPullrequests` - List pull requests
* `getRepositoriesWorkspaceRepoSlugPullrequestsActivity` - List a pull request activity log
* `getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId` - Get a pull request
* `getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivity` - List a pull request activity log
* `getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments` - List comments on a pull request
* `getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId` - Get a comment on a pull request
* `getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommits` - List commits on a pull request
* `getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiff` - List changes in a pull request
* `getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstat` - Get the diff stat for a pull request
* `getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskId` - Get the merge task status for a pull request
* `getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatch` - Get the patch for a pull request
* `getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses` - List commit statuses for a pull request
* `postRepositoriesWorkspaceRepoSlugPullrequests` - Create a pull request
* `postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove` - Approve a pull request
* `postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments` - Create a comment on a pull request
* `postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDecline` - Decline a pull request
* `postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMerge` - Merge a pull request
* `postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges` - Request changes for a pull request
* `putRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername` - Add a user to the default reviewers
* `putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId` - Update a pull request
* `putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId` - Update a comment on a pull request

### refs

* `deleteRepositoriesWorkspaceRepoSlugRefsBranchesName` - Delete a branch
* `deleteRepositoriesWorkspaceRepoSlugRefsTagsName` - Delete a tag
* `getRepositoriesWorkspaceRepoSlugRefs` - List branches and tags
* `getRepositoriesWorkspaceRepoSlugRefsBranches` - List open branches
* `getRepositoriesWorkspaceRepoSlugRefsBranchesName` - Get a branch
* `getRepositoriesWorkspaceRepoSlugRefsTags` - List tags
* `getRepositoriesWorkspaceRepoSlugRefsTagsName` - Get a tag
* `postRepositoriesWorkspaceRepoSlugRefsBranches` - Create a branch
* `postRepositoriesWorkspaceRepoSlugRefsTags` - Create a tag

### reports

* `bulkCreateOrUpdateAnnotations` - Bulk create or update annotations
* `createOrUpdateAnnotation` - Create or update an annotation
* `createOrUpdateReport` - Create or update a report
* `deleteAnnotation` - Delete an annotation
* `deleteReport` - Delete a report
* `getAnnotation` - Get an annotation
* `getAnnotationsForReport` - List annotations
* `getReport` - Get a report
* `getReportsForCommit` - List reports

### repositories

* `deleteRepositoriesWorkspaceRepoSlug` - Delete a repository
* `deleteRepositoriesWorkspaceRepoSlugHooksUid` - Delete a webhook for a repository
* `deleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug` - Delete an explicit group permission for a repository
* `deleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserId` - Delete an explicit user permission for a repository
* `getRepositories` - List public repositories
* `getRepositoriesWorkspace` - List repositories in a workspace
* `getRepositoriesWorkspaceRepoSlug` - Get a repository
* `getRepositoriesWorkspaceRepoSlugFilehistoryCommitPath` - List commits that modified a file
* `getRepositoriesWorkspaceRepoSlugForks` - List repository forks
* `getRepositoriesWorkspaceRepoSlugHooks` - List webhooks for a repository
* `getRepositoriesWorkspaceRepoSlugHooksUid` - Get a webhook for a repository
* `getRepositoriesWorkspaceRepoSlugOverrideSettings` - Retrieve the inheritance state for repository settings
* `getRepositoriesWorkspaceRepoSlugPermissionsConfigGroups` - List explicit group permissions for a repository
* `getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug` - Get an explicit group permission for a repository
* `getRepositoriesWorkspaceRepoSlugPermissionsConfigUsers` - List explicit user permissions for a repository
* `getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserId` - Get an explicit user permission for a repository
* `getRepositoriesWorkspaceRepoSlugSrc` - Get the root directory of the main branch
* `getRepositoriesWorkspaceRepoSlugSrcCommitPath` - Get file or directory contents
* `getRepositoriesWorkspaceRepoSlugWatchers` - List repositories watchers
* `getUserPermissionsRepositories` - List repository permissions for a user
* `postRepositoriesWorkspaceRepoSlug` - Create a repository
* `postRepositoriesWorkspaceRepoSlugForks` - Fork a repository
* `postRepositoriesWorkspaceRepoSlugHooks` - Create a webhook for a repository
* `postRepositoriesWorkspaceRepoSlugSrc` - Create a commit by uploading a file
* `putRepositoriesWorkspaceRepoSlug` - Update a repository
* `putRepositoriesWorkspaceRepoSlugHooksUid` - Update a webhook for a repository
* `putRepositoriesWorkspaceRepoSlugOverrideSettings` - Set the inheritance state for repository settings
                
* `putRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug` - Update an explicit group permission for a repository
* `putRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserId` - Update an explicit user permission for a repository

### search

* `searchAccount` - Search for code in a user's repositories
* `searchTeam` - Search for code in a team's repositories
* `searchWorkspace` - Search for code in a workspace

### snippets

* `deleteSnippetsWorkspaceEncodedId` - Delete a snippet
* `deleteSnippetsWorkspaceEncodedIdCommentsCommentId` - Delete a comment on a snippet
* `deleteSnippetsWorkspaceEncodedIdWatch` - Stop watching a snippet
* `deleteSnippetsWorkspaceEncodedIdNodeId` - Delete a previous revision of a snippet
* `getSnippets` - List snippets
* `getSnippetsWorkspace` - List snippets in a workspace
* `getSnippetsWorkspaceEncodedId` - Get a snippet
* `getSnippetsWorkspaceEncodedIdComments` - List comments on a snippet
* `getSnippetsWorkspaceEncodedIdCommentsCommentId` - Get a comment on a snippet
* `getSnippetsWorkspaceEncodedIdCommits` - List snippet changes
* `getSnippetsWorkspaceEncodedIdCommitsRevision` - Get a previous snippet change
* `getSnippetsWorkspaceEncodedIdFilesPath` - Get a snippet's raw file at HEAD
* `getSnippetsWorkspaceEncodedIdWatch` - Check if the current user is watching a snippet
* `getSnippetsWorkspaceEncodedIdWatchers` - List users watching a snippet
* `getSnippetsWorkspaceEncodedIdNodeId` - Get a previous revision of a snippet
* `getSnippetsWorkspaceEncodedIdNodeIdFilesPath` - Get a snippet's raw file
* `getSnippetsWorkspaceEncodedIdRevisionDiff` - Get snippet changes between versions
* `getSnippetsWorkspaceEncodedIdRevisionPatch` - Get snippet patch between versions
* `postSnippets` - Create a snippet
* `postSnippetsWorkspace` - Create a snippet for a workspace
* `postSnippetsWorkspaceEncodedIdComments` - Create a comment on a snippet
* `putSnippetsWorkspaceEncodedId` - Update a snippet
* `putSnippetsWorkspaceEncodedIdCommentsCommentId` - Update a comment on a snippet
* `putSnippetsWorkspaceEncodedIdWatch` - Watch a snippet
* `putSnippetsWorkspaceEncodedIdNodeId` - Update a previous revision of a snippet

### source

* `getRepositoriesWorkspaceRepoSlugFilehistoryCommitPath` - List commits that modified a file
* `getRepositoriesWorkspaceRepoSlugSrc` - Get the root directory of the main branch
* `getRepositoriesWorkspaceRepoSlugSrcCommitPath` - Get file or directory contents
* `postRepositoriesWorkspaceRepoSlugSrc` - Create a commit by uploading a file

### ssh

* `deleteUsersSelectedUserSshKeysKeyId` - Delete a SSH key
* `getUsersSelectedUserSshKeys` - List SSH keys
* `getUsersSelectedUserSshKeysKeyId` - Get a SSH key
* `postUsersSelectedUserSshKeys` - Add a new SSH key
* `putUsersSelectedUserSshKeysKeyId` - Update a SSH key

### users

* `getUser` - Get current user
* `getUserEmails` - List email addresses for current user
* `getUserEmailsEmail` - Get an email address for current user
* `getUsersSelectedUser` - Get a user

### webhooks

* `deleteRepositoriesWorkspaceRepoSlugHooksUid` - Delete a webhook for a repository
* `deleteWorkspacesWorkspaceHooksUid` - Delete a webhook for a workspace
* `getHookEvents` - Get a webhook resource
* `getHookEventsSubjectType` - List subscribable webhook types
* `getRepositoriesWorkspaceRepoSlugHooks` - List webhooks for a repository
* `getRepositoriesWorkspaceRepoSlugHooksUid` - Get a webhook for a repository
* `getWorkspacesWorkspaceHooks` - List webhooks for a workspace
* `getWorkspacesWorkspaceHooksUid` - Get a webhook for a workspace
* `postRepositoriesWorkspaceRepoSlugHooks` - Create a webhook for a repository
* `postWorkspacesWorkspaceHooks` - Create a webhook for a workspace
* `putRepositoriesWorkspaceRepoSlugHooksUid` - Update a webhook for a repository
* `putWorkspacesWorkspaceHooksUid` - Update a webhook for a workspace

### workspaces

* `deleteWorkspacesWorkspaceHooksUid` - Delete a webhook for a workspace
* `getUserPermissionsWorkspaces` - List workspaces for the current user
* `getWorkspaces` - List workspaces for user
* `getWorkspacesWorkspace` - Get a workspace
* `getWorkspacesWorkspaceHooks` - List webhooks for a workspace
* `getWorkspacesWorkspaceHooksUid` - Get a webhook for a workspace
* `getWorkspacesWorkspaceMembers` - List users in a workspace
* `getWorkspacesWorkspaceMembersMember` - Get user membership for a workspace
* `getWorkspacesWorkspacePermissions` - List user permissions in a workspace
* `getWorkspacesWorkspacePermissionsRepositories` - List all repository permissions for a workspace
* `getWorkspacesWorkspacePermissionsRepositoriesRepoSlug` - List a repository permissions for a workspace
* `getWorkspacesWorkspaceProjects` - List projects in a workspace
* `getWorkspacesWorkspaceProjectsProjectKey` - Get a project for a workspace
* `postWorkspacesWorkspaceHooks` - Create a webhook for a workspace
* `putWorkspacesWorkspaceHooksUid` - Update a webhook for a workspace

### properties

* `deleteCommitHostedPropertyValue` - Delete a commit application property
* `deletePullRequestHostedPropertyValue` - Delete a pull request application property
* `deleteRepositoryHostedPropertyValue` - Delete a repository application property
* `deleteUserHostedPropertyValue` - Delete a user application property
* `getCommitHostedPropertyValue` - Get a commit application property
* `getPullRequestHostedPropertyValue` - Get a pull request application property
* `getRepositoryHostedPropertyValue` - Get a repository application property
* `retrieveUserHostedPropertyValue` - Get a user application property
* `updateCommitHostedPropertyValue` - Update a commit application property
* `updatePullRequestHostedPropertyValue` - Update a pull request application property
* `updateRepositoryHostedPropertyValue` - Update a repository application property
* `updateUserHostedPropertyValue` - Update a user application property
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

