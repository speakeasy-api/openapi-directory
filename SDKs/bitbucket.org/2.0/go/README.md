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
    res, err := s.Addon.DeleteAddon(ctx, operations.DeleteAddonSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
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
## Available Resources and Operations


### [Addon](docs/addon/README.md)

* [DeleteAddon](docs/addon/README.md#deleteaddon) - Delete an app
* [DeleteAddonLinkersLinkerKeyValues](docs/addon/README.md#deleteaddonlinkerslinkerkeyvalues) - Delete all linker values
* [DeleteAddonLinkersLinkerKeyValuesValueID](docs/addon/README.md#deleteaddonlinkerslinkerkeyvaluesvalueid) - Delete a linker value
* [GetAddonLinkers](docs/addon/README.md#getaddonlinkers) - List linkers for an app
* [GetAddonLinkersLinkerKey](docs/addon/README.md#getaddonlinkerslinkerkey) - Get a linker for an app
* [GetAddonLinkersLinkerKeyValues](docs/addon/README.md#getaddonlinkerslinkerkeyvalues) - List linker values for a linker
* [GetAddonLinkersLinkerKeyValuesValueID](docs/addon/README.md#getaddonlinkerslinkerkeyvaluesvalueid) - Get a linker value
* [PostAddonLinkersLinkerKeyValues](docs/addon/README.md#postaddonlinkerslinkerkeyvalues) - Create a linker value
* [PutAddon](docs/addon/README.md#putaddon) - Update an installed app
* [PutAddonLinkersLinkerKeyValues](docs/addon/README.md#putaddonlinkerslinkerkeyvalues) - Update a linker value

### [BranchRestrictions](docs/branchrestrictions/README.md)

* [DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsID](docs/branchrestrictions/README.md#deleterepositoriesworkspacereposlugbranchrestrictionsid) - Delete a branch restriction rule
* [GetRepositoriesWorkspaceRepoSlugBranchRestrictions](docs/branchrestrictions/README.md#getrepositoriesworkspacereposlugbranchrestrictions) - List branch restrictions
* [GetRepositoriesWorkspaceRepoSlugBranchRestrictionsID](docs/branchrestrictions/README.md#getrepositoriesworkspacereposlugbranchrestrictionsid) - Get a branch restriction rule
* [PostRepositoriesWorkspaceRepoSlugBranchRestrictions](docs/branchrestrictions/README.md#postrepositoriesworkspacereposlugbranchrestrictions) - Create a branch restriction rule
* [PutRepositoriesWorkspaceRepoSlugBranchRestrictionsID](docs/branchrestrictions/README.md#putrepositoriesworkspacereposlugbranchrestrictionsid) - Update a branch restriction rule

### [BranchingModel](docs/branchingmodel/README.md)

* [GetRepositoriesWorkspaceRepoSlugBranchingModel](docs/branchingmodel/README.md#getrepositoriesworkspacereposlugbranchingmodel) - Get the branching model for a repository
* [GetRepositoriesWorkspaceRepoSlugBranchingModelSettings](docs/branchingmodel/README.md#getrepositoriesworkspacereposlugbranchingmodelsettings) - Get the branching model config for a repository
* [GetRepositoriesWorkspaceRepoSlugEffectiveBranchingModel](docs/branchingmodel/README.md#getrepositoriesworkspacereposlugeffectivebranchingmodel) - Get the effective, or currently applied, branching model for a repository
* [GetWorkspacesWorkspaceProjectsProjectKeyBranchingModel](docs/branchingmodel/README.md#getworkspacesworkspaceprojectsprojectkeybranchingmodel) - Get the branching model for a project
* [GetWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings](docs/branchingmodel/README.md#getworkspacesworkspaceprojectsprojectkeybranchingmodelsettings) - Get the branching model config for a project
* [PutRepositoriesWorkspaceRepoSlugBranchingModelSettings](docs/branchingmodel/README.md#putrepositoriesworkspacereposlugbranchingmodelsettings) - Update the branching model config for a repository
* [PutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings](docs/branchingmodel/README.md#putworkspacesworkspaceprojectsprojectkeybranchingmodelsettings) - Update the branching model config for a project

### [CommitStatuses](docs/commitstatuses/README.md)

* [GetRepositoriesWorkspaceRepoSlugCommitCommitStatuses](docs/commitstatuses/README.md#getrepositoriesworkspacereposlugcommitcommitstatuses) - List commit statuses for a commit
* [GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey](docs/commitstatuses/README.md#getrepositoriesworkspacereposlugcommitcommitstatusesbuildkey) - Get a build status for a commit
* [GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatuses](docs/commitstatuses/README.md#getrepositoriesworkspacereposlugpullrequestspullrequestidstatuses) - List commit statuses for a pull request
* [PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild](docs/commitstatuses/README.md#postrepositoriesworkspacereposlugcommitcommitstatusesbuild) - Create a build status for a commit
* [PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey](docs/commitstatuses/README.md#putrepositoriesworkspacereposlugcommitcommitstatusesbuildkey) - Update a build status for a commit

### [Commits](docs/commits/README.md)

* [BulkCreateOrUpdateAnnotations](docs/commits/README.md#bulkcreateorupdateannotations) - Bulk create or update annotations
* [CreateOrUpdateAnnotation](docs/commits/README.md#createorupdateannotation) - Create or update an annotation
* [CreateOrUpdateReport](docs/commits/README.md#createorupdatereport) - Create or update a report
* [DeleteAnnotation](docs/commits/README.md#deleteannotation) - Delete an annotation
* [DeleteReport](docs/commits/README.md#deletereport) - Delete a report
* [DeleteRepositoriesWorkspaceRepoSlugCommitCommitApprove](docs/commits/README.md#deleterepositoriesworkspacereposlugcommitcommitapprove) - Unapprove a commit
* [DeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentID](docs/commits/README.md#deleterepositoriesworkspacereposlugcommitcommitcommentscommentid) - Delete a commit comment
* [GetAnnotation](docs/commits/README.md#getannotation) - Get an annotation
* [GetAnnotationsForReport](docs/commits/README.md#getannotationsforreport) - List annotations
* [GetReport](docs/commits/README.md#getreport) - Get a report
* [GetReportsForCommit](docs/commits/README.md#getreportsforcommit) - List reports
* [GetRepositoriesWorkspaceRepoSlugCommitCommit](docs/commits/README.md#getrepositoriesworkspacereposlugcommitcommit) - Get a commit
* [GetRepositoriesWorkspaceRepoSlugCommitCommitComments](docs/commits/README.md#getrepositoriesworkspacereposlugcommitcommitcomments) - List a commit's comments
* [GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentID](docs/commits/README.md#getrepositoriesworkspacereposlugcommitcommitcommentscommentid) - Get a commit comment
* [GetRepositoriesWorkspaceRepoSlugCommits](docs/commits/README.md#getrepositoriesworkspacereposlugcommits) - List commits
* [GetRepositoriesWorkspaceRepoSlugCommitsRevision](docs/commits/README.md#getrepositoriesworkspacereposlugcommitsrevision) - List commits for revision
* [GetRepositoriesWorkspaceRepoSlugDiffSpec](docs/commits/README.md#getrepositoriesworkspacereposlugdiffspec) - Compare two commits
* [GetRepositoriesWorkspaceRepoSlugDiffstatSpec](docs/commits/README.md#getrepositoriesworkspacereposlugdiffstatspec) - Compare two commit diff stats
* [GetRepositoriesWorkspaceRepoSlugMergeBaseRevspec](docs/commits/README.md#getrepositoriesworkspacereposlugmergebaserevspec) - Get the common ancestor between two commits
* [GetRepositoriesWorkspaceRepoSlugPatchSpec](docs/commits/README.md#getrepositoriesworkspacereposlugpatchspec) - Get a patch for two commits
* [PostRepositoriesWorkspaceRepoSlugCommitCommitApprove](docs/commits/README.md#postrepositoriesworkspacereposlugcommitcommitapprove) - Approve a commit
* [PostRepositoriesWorkspaceRepoSlugCommitCommitComments](docs/commits/README.md#postrepositoriesworkspacereposlugcommitcommitcomments) - Create comment for a commit
* [PostRepositoriesWorkspaceRepoSlugCommits](docs/commits/README.md#postrepositoriesworkspacereposlugcommits) - List commits with include/exclude
* [PostRepositoriesWorkspaceRepoSlugCommitsRevision](docs/commits/README.md#postrepositoriesworkspacereposlugcommitsrevision) - List commits for revision using include/exclude
* [PutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentID](docs/commits/README.md#putrepositoriesworkspacereposlugcommitcommitcommentscommentid) - Update a commit comment

### [Deployments](docs/deployments/README.md)

* [CreateEnvironment](docs/deployments/README.md#createenvironment) - Create an environment
* [DeleteEnvironmentForRepository](docs/deployments/README.md#deleteenvironmentforrepository) - Delete an environment
* [DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyID](docs/deployments/README.md#deleterepositoriesworkspacereposlugdeploykeyskeyid) - Delete a repository deploy key
* [DeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyID](docs/deployments/README.md#deleteworkspacesworkspaceprojectsprojectkeydeploykeyskeyid) - Delete a deploy key from a project
* [GetDeploymentForRepository](docs/deployments/README.md#getdeploymentforrepository) - Get a deployment
* [GetDeploymentsForRepository](docs/deployments/README.md#getdeploymentsforrepository) - List deployments
* [GetEnvironmentForRepository](docs/deployments/README.md#getenvironmentforrepository) - Get an environment
* [GetEnvironmentsForRepository](docs/deployments/README.md#getenvironmentsforrepository) - List environments
* [GetRepositoriesWorkspaceRepoSlugDeployKeys](docs/deployments/README.md#getrepositoriesworkspacereposlugdeploykeys) - List repository deploy keys
* [GetRepositoriesWorkspaceRepoSlugDeployKeysKeyID](docs/deployments/README.md#getrepositoriesworkspacereposlugdeploykeyskeyid) - Get a repository deploy key
* [GetWorkspacesWorkspaceProjectsProjectKeyDeployKeys](docs/deployments/README.md#getworkspacesworkspaceprojectsprojectkeydeploykeys) - List project deploy keys
* [GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyID](docs/deployments/README.md#getworkspacesworkspaceprojectsprojectkeydeploykeyskeyid) - Get a project deploy key
* [PostRepositoriesWorkspaceRepoSlugDeployKeys](docs/deployments/README.md#postrepositoriesworkspacereposlugdeploykeys) - Add a repository deploy key
* [PostWorkspacesWorkspaceProjectsProjectKeyDeployKeys](docs/deployments/README.md#postworkspacesworkspaceprojectsprojectkeydeploykeys) - Create a project deploy key
* [PutRepositoriesWorkspaceRepoSlugDeployKeysKeyID](docs/deployments/README.md#putrepositoriesworkspacereposlugdeploykeyskeyid) - Update a repository deploy key
* [UpdateEnvironmentForRepository](docs/deployments/README.md#updateenvironmentforrepository) - Update an environment

### [Downloads](docs/downloads/README.md)

* [DeleteRepositoriesWorkspaceRepoSlugDownloadsFilename](docs/downloads/README.md#deleterepositoriesworkspacereposlugdownloadsfilename) - Delete a download artifact
* [GetRepositoriesWorkspaceRepoSlugDownloads](docs/downloads/README.md#getrepositoriesworkspacereposlugdownloads) - List download artifacts
* [GetRepositoriesWorkspaceRepoSlugDownloadsFilename](docs/downloads/README.md#getrepositoriesworkspacereposlugdownloadsfilename) - Get a download artifact link
* [PostRepositoriesWorkspaceRepoSlugDownloads](docs/downloads/README.md#postrepositoriesworkspacereposlugdownloads) - Upload a download artifact

### [IssueTracker](docs/issuetracker/README.md)

* [DeleteRepositoriesWorkspaceRepoSlugIssuesIssueID](docs/issuetracker/README.md#deleterepositoriesworkspacereposlugissuesissueid) - Delete an issue
* [DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPath](docs/issuetracker/README.md#deleterepositoriesworkspacereposlugissuesissueidattachmentspath) - Delete an attachment for an issue
* [DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentID](docs/issuetracker/README.md#deleterepositoriesworkspacereposlugissuesissueidcommentscommentid) - Delete a comment on an issue
* [DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDVote](docs/issuetracker/README.md#deleterepositoriesworkspacereposlugissuesissueidvote) - Remove vote for an issue
* [DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDWatch](docs/issuetracker/README.md#deleterepositoriesworkspacereposlugissuesissueidwatch) - Stop watching an issue
* [GetRepositoriesWorkspaceRepoSlugComponents](docs/issuetracker/README.md#getrepositoriesworkspacereposlugcomponents) - List components
* [GetRepositoriesWorkspaceRepoSlugComponentsComponentID](docs/issuetracker/README.md#getrepositoriesworkspacereposlugcomponentscomponentid) - Get a component for issues
* [GetRepositoriesWorkspaceRepoSlugIssues](docs/issuetracker/README.md#getrepositoriesworkspacereposlugissues) - List issues
* [GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZip](docs/issuetracker/README.md#getrepositoriesworkspacereposlugissuesexportreponameissuestaskidzip) - Check issue export status
* [GetRepositoriesWorkspaceRepoSlugIssuesImport](docs/issuetracker/README.md#getrepositoriesworkspacereposlugissuesimport) - Check issue import status
* [GetRepositoriesWorkspaceRepoSlugIssuesIssueID](docs/issuetracker/README.md#getrepositoriesworkspacereposlugissuesissueid) - Get an issue
* [GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachments](docs/issuetracker/README.md#getrepositoriesworkspacereposlugissuesissueidattachments) - List attachments for an issue
* [GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPath](docs/issuetracker/README.md#getrepositoriesworkspacereposlugissuesissueidattachmentspath) - Get attachment for an issue
* [GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChanges](docs/issuetracker/README.md#getrepositoriesworkspacereposlugissuesissueidchanges) - List changes on an issue
* [GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeID](docs/issuetracker/README.md#getrepositoriesworkspacereposlugissuesissueidchangeschangeid) - Get issue change object
* [GetRepositoriesWorkspaceRepoSlugIssuesIssueIDComments](docs/issuetracker/README.md#getrepositoriesworkspacereposlugissuesissueidcomments) - List comments on an issue
* [GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentID](docs/issuetracker/README.md#getrepositoriesworkspacereposlugissuesissueidcommentscommentid) - Get a comment on an issue
* [GetRepositoriesWorkspaceRepoSlugIssuesIssueIDVote](docs/issuetracker/README.md#getrepositoriesworkspacereposlugissuesissueidvote) - Check if current user voted for an issue
* [GetRepositoriesWorkspaceRepoSlugIssuesIssueIDWatch](docs/issuetracker/README.md#getrepositoriesworkspacereposlugissuesissueidwatch) - Check if current user is watching a issue
* [GetRepositoriesWorkspaceRepoSlugMilestones](docs/issuetracker/README.md#getrepositoriesworkspacereposlugmilestones) - List milestones
* [GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneID](docs/issuetracker/README.md#getrepositoriesworkspacereposlugmilestonesmilestoneid) - Get a milestone
* [GetRepositoriesWorkspaceRepoSlugVersions](docs/issuetracker/README.md#getrepositoriesworkspacereposlugversions) - List defined versions for issues
* [GetRepositoriesWorkspaceRepoSlugVersionsVersionID](docs/issuetracker/README.md#getrepositoriesworkspacereposlugversionsversionid) - Get a defined version for issues
* [PostRepositoriesWorkspaceRepoSlugIssues](docs/issuetracker/README.md#postrepositoriesworkspacereposlugissues) - Create an issue
* [PostRepositoriesWorkspaceRepoSlugIssuesExport](docs/issuetracker/README.md#postrepositoriesworkspacereposlugissuesexport) - Export issues
* [PostRepositoriesWorkspaceRepoSlugIssuesImport](docs/issuetracker/README.md#postrepositoriesworkspacereposlugissuesimport) - Import issues
* [PostRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachments](docs/issuetracker/README.md#postrepositoriesworkspacereposlugissuesissueidattachments) - Upload an attachment to an issue
* [PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChanges](docs/issuetracker/README.md#postrepositoriesworkspacereposlugissuesissueidchanges) - Modify the state of an issue
* [PostRepositoriesWorkspaceRepoSlugIssuesIssueIDComments](docs/issuetracker/README.md#postrepositoriesworkspacereposlugissuesissueidcomments) - Create a comment on an issue
* [PutRepositoriesWorkspaceRepoSlugIssuesIssueID](docs/issuetracker/README.md#putrepositoriesworkspacereposlugissuesissueid) - Update an issue
* [PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentID](docs/issuetracker/README.md#putrepositoriesworkspacereposlugissuesissueidcommentscommentid) - Update a comment on an issue
* [PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVote](docs/issuetracker/README.md#putrepositoriesworkspacereposlugissuesissueidvote) - Vote for an issue
* [PutRepositoriesWorkspaceRepoSlugIssuesIssueIDWatch](docs/issuetracker/README.md#putrepositoriesworkspacereposlugissuesissueidwatch) - Watch an issue

### [Pipelines](docs/pipelines/README.md)

* [CreateDeploymentVariable](docs/pipelines/README.md#createdeploymentvariable) - Create a variable for an environment
* [CreatePipelineForRepository](docs/pipelines/README.md#createpipelineforrepository) - Run a pipeline
* [~~CreatePipelineVariableForTeam~~](docs/pipelines/README.md#createpipelinevariableforteam) - Create a variable for a user :warning: **Deprecated**
* [~~CreatePipelineVariableForUser~~](docs/pipelines/README.md#createpipelinevariableforuser) - Create a variable for a user :warning: **Deprecated**
* [CreatePipelineVariableForWorkspace](docs/pipelines/README.md#createpipelinevariableforworkspace) - Create a variable for a workspace
* [CreateRepositoryPipelineKnownHost](docs/pipelines/README.md#createrepositorypipelineknownhost) - Create a known host
* [CreateRepositoryPipelineSchedule](docs/pipelines/README.md#createrepositorypipelineschedule) - Create a schedule
* [CreateRepositoryPipelineVariable](docs/pipelines/README.md#createrepositorypipelinevariable) - Create a variable for a repository
* [DeleteDeploymentVariable](docs/pipelines/README.md#deletedeploymentvariable) - Delete a variable for an environment
* [~~DeletePipelineVariableForTeam~~](docs/pipelines/README.md#deletepipelinevariableforteam) - Delete a variable for a team :warning: **Deprecated**
* [~~DeletePipelineVariableForUser~~](docs/pipelines/README.md#deletepipelinevariableforuser) - Delete a variable for a user :warning: **Deprecated**
* [DeletePipelineVariableForWorkspace](docs/pipelines/README.md#deletepipelinevariableforworkspace) - Delete a variable for a workspace
* [DeleteRepositoryPipelineCache](docs/pipelines/README.md#deleterepositorypipelinecache) - Delete a cache
* [DeleteRepositoryPipelineCaches](docs/pipelines/README.md#deleterepositorypipelinecaches) - Delete caches
* [DeleteRepositoryPipelineKeyPair](docs/pipelines/README.md#deleterepositorypipelinekeypair) - Delete SSH key pair
* [DeleteRepositoryPipelineKnownHost](docs/pipelines/README.md#deleterepositorypipelineknownhost) - Delete a known host
* [DeleteRepositoryPipelineSchedule](docs/pipelines/README.md#deleterepositorypipelineschedule) - Delete a schedule
* [DeleteRepositoryPipelineVariable](docs/pipelines/README.md#deleterepositorypipelinevariable) - Delete a variable for a repository
* [GetDeploymentVariables](docs/pipelines/README.md#getdeploymentvariables) - List variables for an environment
* [GetOIDCConfiguration](docs/pipelines/README.md#getoidcconfiguration) - Get OpenID configuration for OIDC in Pipelines
* [GetOIDCKeys](docs/pipelines/README.md#getoidckeys) - Get keys for OIDC in Pipelines
* [GetPipelineContainerLog](docs/pipelines/README.md#getpipelinecontainerlog) - Get the logs for the build container or a service container for a given step of a pipeline.
* [GetPipelineForRepository](docs/pipelines/README.md#getpipelineforrepository) - Get a pipeline
* [GetPipelineStepForRepository](docs/pipelines/README.md#getpipelinestepforrepository) - Get a step of a pipeline
* [GetPipelineStepLogForRepository](docs/pipelines/README.md#getpipelinesteplogforrepository) - Get log file for a step
* [GetPipelineStepsForRepository](docs/pipelines/README.md#getpipelinestepsforrepository) - List steps for a pipeline
* [GetPipelineTestReportTestCaseReasons](docs/pipelines/README.md#getpipelinetestreporttestcasereasons) - Get test case reasons (output) for a given test case in a step of a pipeline.
* [GetPipelineTestReportTestCases](docs/pipelines/README.md#getpipelinetestreporttestcases) - Get test cases for a given step of a pipeline.
* [GetPipelineTestReports](docs/pipelines/README.md#getpipelinetestreports) - Get a summary of test reports for a given step of a pipeline.
* [~~GetPipelineVariableForTeam~~](docs/pipelines/README.md#getpipelinevariableforteam) - Get a variable for a team :warning: **Deprecated**
* [~~GetPipelineVariableForUser~~](docs/pipelines/README.md#getpipelinevariableforuser) - Get a variable for a user :warning: **Deprecated**
* [GetPipelineVariableForWorkspace](docs/pipelines/README.md#getpipelinevariableforworkspace) - Get variable for a workspace
* [~~GetPipelineVariablesForTeam~~](docs/pipelines/README.md#getpipelinevariablesforteam) - List variables for an account :warning: **Deprecated**
* [~~GetPipelineVariablesForUser~~](docs/pipelines/README.md#getpipelinevariablesforuser) - List variables for a user :warning: **Deprecated**
* [GetPipelineVariablesForWorkspace](docs/pipelines/README.md#getpipelinevariablesforworkspace) - List variables for a workspace
* [GetPipelinesForRepository](docs/pipelines/README.md#getpipelinesforrepository) - List pipelines
* [GetRepositoryPipelineCacheContentURI](docs/pipelines/README.md#getrepositorypipelinecachecontenturi) - Get cache content URI
* [GetRepositoryPipelineCaches](docs/pipelines/README.md#getrepositorypipelinecaches) - List caches
* [GetRepositoryPipelineConfig](docs/pipelines/README.md#getrepositorypipelineconfig) - Get configuration
* [GetRepositoryPipelineKnownHost](docs/pipelines/README.md#getrepositorypipelineknownhost) - Get a known host
* [GetRepositoryPipelineKnownHosts](docs/pipelines/README.md#getrepositorypipelineknownhosts) - List known hosts
* [GetRepositoryPipelineSchedule](docs/pipelines/README.md#getrepositorypipelineschedule) - Get a schedule
* [GetRepositoryPipelineScheduleExecutions](docs/pipelines/README.md#getrepositorypipelinescheduleexecutions) - List executions of a schedule
* [GetRepositoryPipelineSchedules](docs/pipelines/README.md#getrepositorypipelineschedules) - List schedules
* [GetRepositoryPipelineSSHKeyPair](docs/pipelines/README.md#getrepositorypipelinesshkeypair) - Get SSH key pair
* [GetRepositoryPipelineVariable](docs/pipelines/README.md#getrepositorypipelinevariable) - Get a variable for a repository
* [GetRepositoryPipelineVariables](docs/pipelines/README.md#getrepositorypipelinevariables) - List variables for a repository
* [StopPipeline](docs/pipelines/README.md#stoppipeline) - Stop a pipeline
* [UpdateDeploymentVariable](docs/pipelines/README.md#updatedeploymentvariable) - Update a variable for an environment
* [~~UpdatePipelineVariableForTeam~~](docs/pipelines/README.md#updatepipelinevariableforteam) - Update a variable for a team :warning: **Deprecated**
* [~~UpdatePipelineVariableForUser~~](docs/pipelines/README.md#updatepipelinevariableforuser) - Update a variable for a user :warning: **Deprecated**
* [UpdatePipelineVariableForWorkspace](docs/pipelines/README.md#updatepipelinevariableforworkspace) - Update variable for a workspace
* [UpdateRepositoryBuildNumber](docs/pipelines/README.md#updaterepositorybuildnumber) - Update the next build number
* [UpdateRepositoryPipelineConfig](docs/pipelines/README.md#updaterepositorypipelineconfig) - Update configuration
* [UpdateRepositoryPipelineKeyPair](docs/pipelines/README.md#updaterepositorypipelinekeypair) - Update SSH key pair
* [UpdateRepositoryPipelineKnownHost](docs/pipelines/README.md#updaterepositorypipelineknownhost) - Update a known host
* [UpdateRepositoryPipelineSchedule](docs/pipelines/README.md#updaterepositorypipelineschedule) - Update a schedule
* [UpdateRepositoryPipelineVariable](docs/pipelines/README.md#updaterepositorypipelinevariable) - Update a variable for a repository

### [Projects](docs/projects/README.md)

* [DeleteWorkspacesWorkspaceProjectsProjectKey](docs/projects/README.md#deleteworkspacesworkspaceprojectsprojectkey) - Delete a project for a workspace
* [DeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser](docs/projects/README.md#deleteworkspacesworkspaceprojectsprojectkeydefaultreviewersselecteduser) - Remove the specific user from the project's default reviewers
* [GetWorkspacesWorkspaceProjectsProjectKey](docs/projects/README.md#getworkspacesworkspaceprojectsprojectkey) - Get a project for a workspace
* [GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewers](docs/projects/README.md#getworkspacesworkspaceprojectsprojectkeydefaultreviewers) - List the default reviewers in a project
* [GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser](docs/projects/README.md#getworkspacesworkspaceprojectsprojectkeydefaultreviewersselecteduser) - Get a default reviewer
* [PostWorkspacesWorkspaceProjects](docs/projects/README.md#postworkspacesworkspaceprojects) - Create a project in a workspace
* [PutWorkspacesWorkspaceProjectsProjectKey](docs/projects/README.md#putworkspacesworkspaceprojectsprojectkey) - Update a project for a workspace
* [PutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser](docs/projects/README.md#putworkspacesworkspaceprojectsprojectkeydefaultreviewersselecteduser) - Add the specific user as a default reviewer for the project

### [Pullrequests](docs/pullrequests/README.md)

* [DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername](docs/pullrequests/README.md#deleterepositoriesworkspacereposlugdefaultreviewerstargetusername) - Remove a user from the default reviewers
* [DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApprove](docs/pullrequests/README.md#deleterepositoriesworkspacereposlugpullrequestspullrequestidapprove) - Unapprove a pull request
* [DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID](docs/pullrequests/README.md#deleterepositoriesworkspacereposlugpullrequestspullrequestidcommentscommentid) - Delete a comment on a pull request
* [DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResolve](docs/pullrequests/README.md#deleterepositoriesworkspacereposlugpullrequestspullrequestidcommentscommentidresolve) - Reopen a comment thread
* [DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChanges](docs/pullrequests/README.md#deleterepositoriesworkspacereposlugpullrequestspullrequestidrequestchanges) - Remove change request for a pull request
* [GetPullrequestsForCommit](docs/pullrequests/README.md#getpullrequestsforcommit) - List pull requests that contain a commit
* [GetPullrequestsSelectedUser](docs/pullrequests/README.md#getpullrequestsselecteduser) - List pull requests for a user
* [GetRepositoriesWorkspaceRepoSlugDefaultReviewers](docs/pullrequests/README.md#getrepositoriesworkspacereposlugdefaultreviewers) - List default reviewers
* [GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername](docs/pullrequests/README.md#getrepositoriesworkspacereposlugdefaultreviewerstargetusername) - Get a default reviewer
* [GetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewers](docs/pullrequests/README.md#getrepositoriesworkspacereposlugeffectivedefaultreviewers) - List effective default reviewers
* [GetRepositoriesWorkspaceRepoSlugPullrequests](docs/pullrequests/README.md#getrepositoriesworkspacereposlugpullrequests) - List pull requests
* [GetRepositoriesWorkspaceRepoSlugPullrequestsActivity](docs/pullrequests/README.md#getrepositoriesworkspacereposlugpullrequestsactivity) - List a pull request activity log
* [GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestID](docs/pullrequests/README.md#getrepositoriesworkspacereposlugpullrequestspullrequestid) - Get a pull request
* [GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDActivity](docs/pullrequests/README.md#getrepositoriesworkspacereposlugpullrequestspullrequestidactivity) - List a pull request activity log
* [GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDComments](docs/pullrequests/README.md#getrepositoriesworkspacereposlugpullrequestspullrequestidcomments) - List comments on a pull request
* [GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID](docs/pullrequests/README.md#getrepositoriesworkspacereposlugpullrequestspullrequestidcommentscommentid) - Get a comment on a pull request
* [GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommits](docs/pullrequests/README.md#getrepositoriesworkspacereposlugpullrequestspullrequestidcommits) - List commits on a pull request
* [GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiff](docs/pullrequests/README.md#getrepositoriesworkspacereposlugpullrequestspullrequestiddiff) - List changes in a pull request
* [GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstat](docs/pullrequests/README.md#getrepositoriesworkspacereposlugpullrequestspullrequestiddiffstat) - Get the diff stat for a pull request
* [GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskID](docs/pullrequests/README.md#getrepositoriesworkspacereposlugpullrequestspullrequestidmergetaskstatustaskid) - Get the merge task status for a pull request
* [GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatch](docs/pullrequests/README.md#getrepositoriesworkspacereposlugpullrequestspullrequestidpatch) - Get the patch for a pull request
* [GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatuses](docs/pullrequests/README.md#getrepositoriesworkspacereposlugpullrequestspullrequestidstatuses) - List commit statuses for a pull request
* [PostRepositoriesWorkspaceRepoSlugPullrequests](docs/pullrequests/README.md#postrepositoriesworkspacereposlugpullrequests) - Create a pull request
* [PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApprove](docs/pullrequests/README.md#postrepositoriesworkspacereposlugpullrequestspullrequestidapprove) - Approve a pull request
* [PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDComments](docs/pullrequests/README.md#postrepositoriesworkspacereposlugpullrequestspullrequestidcomments) - Create a comment on a pull request
* [PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResolve](docs/pullrequests/README.md#postrepositoriesworkspacereposlugpullrequestspullrequestidcommentscommentidresolve) - Resolve a comment thread
* [PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDecline](docs/pullrequests/README.md#postrepositoriesworkspacereposlugpullrequestspullrequestiddecline) - Decline a pull request
* [PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMerge](docs/pullrequests/README.md#postrepositoriesworkspacereposlugpullrequestspullrequestidmerge) - Merge a pull request
* [PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChanges](docs/pullrequests/README.md#postrepositoriesworkspacereposlugpullrequestspullrequestidrequestchanges) - Request changes for a pull request
* [PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername](docs/pullrequests/README.md#putrepositoriesworkspacereposlugdefaultreviewerstargetusername) - Add a user to the default reviewers
* [PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestID](docs/pullrequests/README.md#putrepositoriesworkspacereposlugpullrequestspullrequestid) - Update a pull request
* [PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID](docs/pullrequests/README.md#putrepositoriesworkspacereposlugpullrequestspullrequestidcommentscommentid) - Update a comment on a pull request

### [Refs](docs/refs/README.md)

* [DeleteRepositoriesWorkspaceRepoSlugRefsBranchesName](docs/refs/README.md#deleterepositoriesworkspacereposlugrefsbranchesname) - Delete a branch
* [DeleteRepositoriesWorkspaceRepoSlugRefsTagsName](docs/refs/README.md#deleterepositoriesworkspacereposlugrefstagsname) - Delete a tag
* [GetRepositoriesWorkspaceRepoSlugRefs](docs/refs/README.md#getrepositoriesworkspacereposlugrefs) - List branches and tags
* [GetRepositoriesWorkspaceRepoSlugRefsBranches](docs/refs/README.md#getrepositoriesworkspacereposlugrefsbranches) - List open branches
* [GetRepositoriesWorkspaceRepoSlugRefsBranchesName](docs/refs/README.md#getrepositoriesworkspacereposlugrefsbranchesname) - Get a branch
* [GetRepositoriesWorkspaceRepoSlugRefsTags](docs/refs/README.md#getrepositoriesworkspacereposlugrefstags) - List tags
* [GetRepositoriesWorkspaceRepoSlugRefsTagsName](docs/refs/README.md#getrepositoriesworkspacereposlugrefstagsname) - Get a tag
* [PostRepositoriesWorkspaceRepoSlugRefsBranches](docs/refs/README.md#postrepositoriesworkspacereposlugrefsbranches) - Create a branch
* [PostRepositoriesWorkspaceRepoSlugRefsTags](docs/refs/README.md#postrepositoriesworkspacereposlugrefstags) - Create a tag

### [Reports](docs/reports/README.md)

* [BulkCreateOrUpdateAnnotations](docs/reports/README.md#bulkcreateorupdateannotations) - Bulk create or update annotations
* [CreateOrUpdateAnnotation](docs/reports/README.md#createorupdateannotation) - Create or update an annotation
* [CreateOrUpdateReport](docs/reports/README.md#createorupdatereport) - Create or update a report
* [DeleteAnnotation](docs/reports/README.md#deleteannotation) - Delete an annotation
* [DeleteReport](docs/reports/README.md#deletereport) - Delete a report
* [GetAnnotation](docs/reports/README.md#getannotation) - Get an annotation
* [GetAnnotationsForReport](docs/reports/README.md#getannotationsforreport) - List annotations
* [GetReport](docs/reports/README.md#getreport) - Get a report
* [GetReportsForCommit](docs/reports/README.md#getreportsforcommit) - List reports

### [Repositories](docs/repositories/README.md)

* [DeleteRepositoriesWorkspaceRepoSlug](docs/repositories/README.md#deleterepositoriesworkspacereposlug) - Delete a repository
* [DeleteRepositoriesWorkspaceRepoSlugHooksUID](docs/repositories/README.md#deleterepositoriesworkspacereposlughooksuid) - Delete a webhook for a repository
* [DeleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug](docs/repositories/README.md#deleterepositoriesworkspacereposlugpermissionsconfiggroupsgroupslug) - Delete an explicit group permission for a repository
* [DeleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserID](docs/repositories/README.md#deleterepositoriesworkspacereposlugpermissionsconfigusersselecteduserid) - Delete an explicit user permission for a repository
* [GetRepositories](docs/repositories/README.md#getrepositories) - List public repositories
* [GetRepositoriesWorkspace](docs/repositories/README.md#getrepositoriesworkspace) - List repositories in a workspace
* [GetRepositoriesWorkspaceRepoSlug](docs/repositories/README.md#getrepositoriesworkspacereposlug) - Get a repository
* [GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPath](docs/repositories/README.md#getrepositoriesworkspacereposlugfilehistorycommitpath) - List commits that modified a file
* [GetRepositoriesWorkspaceRepoSlugForks](docs/repositories/README.md#getrepositoriesworkspacereposlugforks) - List repository forks
* [GetRepositoriesWorkspaceRepoSlugHooks](docs/repositories/README.md#getrepositoriesworkspacereposlughooks) - List webhooks for a repository
* [GetRepositoriesWorkspaceRepoSlugHooksUID](docs/repositories/README.md#getrepositoriesworkspacereposlughooksuid) - Get a webhook for a repository
* [GetRepositoriesWorkspaceRepoSlugOverrideSettings](docs/repositories/README.md#getrepositoriesworkspacereposlugoverridesettings) - Retrieve the inheritance state for repository settings
* [GetRepositoriesWorkspaceRepoSlugPermissionsConfigGroups](docs/repositories/README.md#getrepositoriesworkspacereposlugpermissionsconfiggroups) - List explicit group permissions for a repository
* [GetRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug](docs/repositories/README.md#getrepositoriesworkspacereposlugpermissionsconfiggroupsgroupslug) - Get an explicit group permission for a repository
* [GetRepositoriesWorkspaceRepoSlugPermissionsConfigUsers](docs/repositories/README.md#getrepositoriesworkspacereposlugpermissionsconfigusers) - List explicit user permissions for a repository
* [GetRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserID](docs/repositories/README.md#getrepositoriesworkspacereposlugpermissionsconfigusersselecteduserid) - Get an explicit user permission for a repository
* [GetRepositoriesWorkspaceRepoSlugSrc](docs/repositories/README.md#getrepositoriesworkspacereposlugsrc) - Get the root directory of the main branch
* [GetRepositoriesWorkspaceRepoSlugSrcCommitPath](docs/repositories/README.md#getrepositoriesworkspacereposlugsrccommitpath) - Get file or directory contents
* [GetRepositoriesWorkspaceRepoSlugWatchers](docs/repositories/README.md#getrepositoriesworkspacereposlugwatchers) - List repositories watchers
* [GetUserPermissionsRepositories](docs/repositories/README.md#getuserpermissionsrepositories) - List repository permissions for a user
* [PostRepositoriesWorkspaceRepoSlug](docs/repositories/README.md#postrepositoriesworkspacereposlug) - Create a repository
* [PostRepositoriesWorkspaceRepoSlugForks](docs/repositories/README.md#postrepositoriesworkspacereposlugforks) - Fork a repository
* [PostRepositoriesWorkspaceRepoSlugHooks](docs/repositories/README.md#postrepositoriesworkspacereposlughooks) - Create a webhook for a repository
* [PostRepositoriesWorkspaceRepoSlugSrc](docs/repositories/README.md#postrepositoriesworkspacereposlugsrc) - Create a commit by uploading a file
* [PutRepositoriesWorkspaceRepoSlug](docs/repositories/README.md#putrepositoriesworkspacereposlug) - Update a repository
* [PutRepositoriesWorkspaceRepoSlugHooksUID](docs/repositories/README.md#putrepositoriesworkspacereposlughooksuid) - Update a webhook for a repository
* [PutRepositoriesWorkspaceRepoSlugOverrideSettings](docs/repositories/README.md#putrepositoriesworkspacereposlugoverridesettings) - Set the inheritance state for repository settings
                
* [PutRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug](docs/repositories/README.md#putrepositoriesworkspacereposlugpermissionsconfiggroupsgroupslug) - Update an explicit group permission for a repository
* [PutRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserID](docs/repositories/README.md#putrepositoriesworkspacereposlugpermissionsconfigusersselecteduserid) - Update an explicit user permission for a repository

### [Search](docs/search/README.md)

* [SearchAccount](docs/search/README.md#searchaccount) - Search for code in a user's repositories
* [SearchTeam](docs/search/README.md#searchteam) - Search for code in a team's repositories
* [SearchWorkspace](docs/search/README.md#searchworkspace) - Search for code in a workspace

### [Snippets](docs/snippets/README.md)

* [DeleteSnippetsWorkspaceEncodedID](docs/snippets/README.md#deletesnippetsworkspaceencodedid) - Delete a snippet
* [DeleteSnippetsWorkspaceEncodedIDCommentsCommentID](docs/snippets/README.md#deletesnippetsworkspaceencodedidcommentscommentid) - Delete a comment on a snippet
* [DeleteSnippetsWorkspaceEncodedIDWatch](docs/snippets/README.md#deletesnippetsworkspaceencodedidwatch) - Stop watching a snippet
* [DeleteSnippetsWorkspaceEncodedIDNodeID](docs/snippets/README.md#deletesnippetsworkspaceencodedidnodeid) - Delete a previous revision of a snippet
* [GetSnippets](docs/snippets/README.md#getsnippets) - List snippets
* [GetSnippetsWorkspace](docs/snippets/README.md#getsnippetsworkspace) - List snippets in a workspace
* [GetSnippetsWorkspaceEncodedID](docs/snippets/README.md#getsnippetsworkspaceencodedid) - Get a snippet
* [GetSnippetsWorkspaceEncodedIDComments](docs/snippets/README.md#getsnippetsworkspaceencodedidcomments) - List comments on a snippet
* [GetSnippetsWorkspaceEncodedIDCommentsCommentID](docs/snippets/README.md#getsnippetsworkspaceencodedidcommentscommentid) - Get a comment on a snippet
* [GetSnippetsWorkspaceEncodedIDCommits](docs/snippets/README.md#getsnippetsworkspaceencodedidcommits) - List snippet changes
* [GetSnippetsWorkspaceEncodedIDCommitsRevision](docs/snippets/README.md#getsnippetsworkspaceencodedidcommitsrevision) - Get a previous snippet change
* [GetSnippetsWorkspaceEncodedIDFilesPath](docs/snippets/README.md#getsnippetsworkspaceencodedidfilespath) - Get a snippet's raw file at HEAD
* [GetSnippetsWorkspaceEncodedIDWatch](docs/snippets/README.md#getsnippetsworkspaceencodedidwatch) - Check if the current user is watching a snippet
* [~~GetSnippetsWorkspaceEncodedIDWatchers~~](docs/snippets/README.md#getsnippetsworkspaceencodedidwatchers) - List users watching a snippet :warning: **Deprecated**
* [GetSnippetsWorkspaceEncodedIDNodeID](docs/snippets/README.md#getsnippetsworkspaceencodedidnodeid) - Get a previous revision of a snippet
* [GetSnippetsWorkspaceEncodedIDNodeIDFilesPath](docs/snippets/README.md#getsnippetsworkspaceencodedidnodeidfilespath) - Get a snippet's raw file
* [GetSnippetsWorkspaceEncodedIDRevisionDiff](docs/snippets/README.md#getsnippetsworkspaceencodedidrevisiondiff) - Get snippet changes between versions
* [GetSnippetsWorkspaceEncodedIDRevisionPatch](docs/snippets/README.md#getsnippetsworkspaceencodedidrevisionpatch) - Get snippet patch between versions
* [PostSnippets](docs/snippets/README.md#postsnippets) - Create a snippet
* [PostSnippetsWorkspace](docs/snippets/README.md#postsnippetsworkspace) - Create a snippet for a workspace
* [PostSnippetsWorkspaceEncodedIDComments](docs/snippets/README.md#postsnippetsworkspaceencodedidcomments) - Create a comment on a snippet
* [PutSnippetsWorkspaceEncodedID](docs/snippets/README.md#putsnippetsworkspaceencodedid) - Update a snippet
* [PutSnippetsWorkspaceEncodedIDCommentsCommentID](docs/snippets/README.md#putsnippetsworkspaceencodedidcommentscommentid) - Update a comment on a snippet
* [PutSnippetsWorkspaceEncodedIDWatch](docs/snippets/README.md#putsnippetsworkspaceencodedidwatch) - Watch a snippet
* [PutSnippetsWorkspaceEncodedIDNodeID](docs/snippets/README.md#putsnippetsworkspaceencodedidnodeid) - Update a previous revision of a snippet

### [Source](docs/source/README.md)

* [GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPath](docs/source/README.md#getrepositoriesworkspacereposlugfilehistorycommitpath) - List commits that modified a file
* [GetRepositoriesWorkspaceRepoSlugSrc](docs/source/README.md#getrepositoriesworkspacereposlugsrc) - Get the root directory of the main branch
* [GetRepositoriesWorkspaceRepoSlugSrcCommitPath](docs/source/README.md#getrepositoriesworkspacereposlugsrccommitpath) - Get file or directory contents
* [PostRepositoriesWorkspaceRepoSlugSrc](docs/source/README.md#postrepositoriesworkspacereposlugsrc) - Create a commit by uploading a file

### [SSH](docs/ssh/README.md)

* [DeleteUsersSelectedUserSSHKeysKeyID](docs/ssh/README.md#deleteusersselectedusersshkeyskeyid) - Delete a SSH key
* [GetUsersSelectedUserSSHKeys](docs/ssh/README.md#getusersselectedusersshkeys) - List SSH keys
* [GetUsersSelectedUserSSHKeysKeyID](docs/ssh/README.md#getusersselectedusersshkeyskeyid) - Get a SSH key
* [PostUsersSelectedUserSSHKeys](docs/ssh/README.md#postusersselectedusersshkeys) - Add a new SSH key
* [PutUsersSelectedUserSSHKeysKeyID](docs/ssh/README.md#putusersselectedusersshkeyskeyid) - Update a SSH key

### [Users](docs/users/README.md)

* [GetUser](docs/users/README.md#getuser) - Get current user
* [GetUserEmails](docs/users/README.md#getuseremails) - List email addresses for current user
* [GetUserEmailsEmail](docs/users/README.md#getuseremailsemail) - Get an email address for current user
* [GetUsersSelectedUser](docs/users/README.md#getusersselecteduser) - Get a user

### [Webhooks](docs/webhooks/README.md)

* [DeleteRepositoriesWorkspaceRepoSlugHooksUID](docs/webhooks/README.md#deleterepositoriesworkspacereposlughooksuid) - Delete a webhook for a repository
* [DeleteWorkspacesWorkspaceHooksUID](docs/webhooks/README.md#deleteworkspacesworkspacehooksuid) - Delete a webhook for a workspace
* [GetHookEvents](docs/webhooks/README.md#gethookevents) - Get a webhook resource
* [GetHookEventsSubjectType](docs/webhooks/README.md#gethookeventssubjecttype) - List subscribable webhook types
* [GetRepositoriesWorkspaceRepoSlugHooks](docs/webhooks/README.md#getrepositoriesworkspacereposlughooks) - List webhooks for a repository
* [GetRepositoriesWorkspaceRepoSlugHooksUID](docs/webhooks/README.md#getrepositoriesworkspacereposlughooksuid) - Get a webhook for a repository
* [GetWorkspacesWorkspaceHooks](docs/webhooks/README.md#getworkspacesworkspacehooks) - List webhooks for a workspace
* [GetWorkspacesWorkspaceHooksUID](docs/webhooks/README.md#getworkspacesworkspacehooksuid) - Get a webhook for a workspace
* [PostRepositoriesWorkspaceRepoSlugHooks](docs/webhooks/README.md#postrepositoriesworkspacereposlughooks) - Create a webhook for a repository
* [PostWorkspacesWorkspaceHooks](docs/webhooks/README.md#postworkspacesworkspacehooks) - Create a webhook for a workspace
* [PutRepositoriesWorkspaceRepoSlugHooksUID](docs/webhooks/README.md#putrepositoriesworkspacereposlughooksuid) - Update a webhook for a repository
* [PutWorkspacesWorkspaceHooksUID](docs/webhooks/README.md#putworkspacesworkspacehooksuid) - Update a webhook for a workspace

### [Workspaces](docs/workspaces/README.md)

* [DeleteWorkspacesWorkspaceHooksUID](docs/workspaces/README.md#deleteworkspacesworkspacehooksuid) - Delete a webhook for a workspace
* [GetUserPermissionsWorkspaces](docs/workspaces/README.md#getuserpermissionsworkspaces) - List workspaces for the current user
* [GetWorkspaces](docs/workspaces/README.md#getworkspaces) - List workspaces for user
* [GetWorkspacesWorkspace](docs/workspaces/README.md#getworkspacesworkspace) - Get a workspace
* [GetWorkspacesWorkspaceHooks](docs/workspaces/README.md#getworkspacesworkspacehooks) - List webhooks for a workspace
* [GetWorkspacesWorkspaceHooksUID](docs/workspaces/README.md#getworkspacesworkspacehooksuid) - Get a webhook for a workspace
* [GetWorkspacesWorkspaceMembers](docs/workspaces/README.md#getworkspacesworkspacemembers) - List users in a workspace
* [GetWorkspacesWorkspaceMembersMember](docs/workspaces/README.md#getworkspacesworkspacemembersmember) - Get user membership for a workspace
* [GetWorkspacesWorkspacePermissions](docs/workspaces/README.md#getworkspacesworkspacepermissions) - List user permissions in a workspace
* [GetWorkspacesWorkspacePermissionsRepositories](docs/workspaces/README.md#getworkspacesworkspacepermissionsrepositories) - List all repository permissions for a workspace
* [GetWorkspacesWorkspacePermissionsRepositoriesRepoSlug](docs/workspaces/README.md#getworkspacesworkspacepermissionsrepositoriesreposlug) - List a repository permissions for a workspace
* [GetWorkspacesWorkspaceProjects](docs/workspaces/README.md#getworkspacesworkspaceprojects) - List projects in a workspace
* [GetWorkspacesWorkspaceProjectsProjectKey](docs/workspaces/README.md#getworkspacesworkspaceprojectsprojectkey) - Get a project for a workspace
* [PostWorkspacesWorkspaceHooks](docs/workspaces/README.md#postworkspacesworkspacehooks) - Create a webhook for a workspace
* [PutWorkspacesWorkspaceHooksUID](docs/workspaces/README.md#putworkspacesworkspacehooksuid) - Update a webhook for a workspace

### [Properties](docs/properties/README.md)

* [DeleteCommitHostedPropertyValue](docs/properties/README.md#deletecommithostedpropertyvalue) - Delete a commit application property
* [DeletePullRequestHostedPropertyValue](docs/properties/README.md#deletepullrequesthostedpropertyvalue) - Delete a pull request application property
* [DeleteRepositoryHostedPropertyValue](docs/properties/README.md#deleterepositoryhostedpropertyvalue) - Delete a repository application property
* [DeleteUserHostedPropertyValue](docs/properties/README.md#deleteuserhostedpropertyvalue) - Delete a user application property
* [GetCommitHostedPropertyValue](docs/properties/README.md#getcommithostedpropertyvalue) - Get a commit application property
* [GetPullRequestHostedPropertyValue](docs/properties/README.md#getpullrequesthostedpropertyvalue) - Get a pull request application property
* [GetRepositoryHostedPropertyValue](docs/properties/README.md#getrepositoryhostedpropertyvalue) - Get a repository application property
* [RetrieveUserHostedPropertyValue](docs/properties/README.md#retrieveuserhostedpropertyvalue) - Get a user application property
* [UpdateCommitHostedPropertyValue](docs/properties/README.md#updatecommithostedpropertyvalue) - Update a commit application property
* [UpdatePullRequestHostedPropertyValue](docs/properties/README.md#updatepullrequesthostedpropertyvalue) - Update a pull request application property
* [UpdateRepositoryHostedPropertyValue](docs/properties/README.md#updaterepositoryhostedpropertyvalue) - Update a repository application property
* [UpdateUserHostedPropertyValue](docs/properties/README.md#updateuserhostedpropertyvalue) - Update a user application property
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
