# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAddonSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new DeleteAddonSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->addon->deleteAddon($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [addon](docs/addon/README.md)

* [deleteAddon](docs/addon/README.md#deleteaddon) - Delete an app
* [deleteAddonLinkersLinkerKeyValues](docs/addon/README.md#deleteaddonlinkerslinkerkeyvalues) - Delete all linker values
* [deleteAddonLinkersLinkerKeyValuesValueId](docs/addon/README.md#deleteaddonlinkerslinkerkeyvaluesvalueid) - Delete a linker value
* [getAddonLinkers](docs/addon/README.md#getaddonlinkers) - List linkers for an app
* [getAddonLinkersLinkerKey](docs/addon/README.md#getaddonlinkerslinkerkey) - Get a linker for an app
* [getAddonLinkersLinkerKeyValues](docs/addon/README.md#getaddonlinkerslinkerkeyvalues) - List linker values for a linker
* [getAddonLinkersLinkerKeyValuesValueId](docs/addon/README.md#getaddonlinkerslinkerkeyvaluesvalueid) - Get a linker value
* [postAddonLinkersLinkerKeyValues](docs/addon/README.md#postaddonlinkerslinkerkeyvalues) - Create a linker value
* [putAddon](docs/addon/README.md#putaddon) - Update an installed app
* [putAddonLinkersLinkerKeyValues](docs/addon/README.md#putaddonlinkerslinkerkeyvalues) - Update a linker value

### [branchRestrictions](docs/branchrestrictions/README.md)

* [deleteRepositoriesWorkspaceRepoSlugBranchRestrictionsId](docs/branchrestrictions/README.md#deleterepositoriesworkspacereposlugbranchrestrictionsid) - Delete a branch restriction rule
* [getRepositoriesWorkspaceRepoSlugBranchRestrictions](docs/branchrestrictions/README.md#getrepositoriesworkspacereposlugbranchrestrictions) - List branch restrictions
* [getRepositoriesWorkspaceRepoSlugBranchRestrictionsId](docs/branchrestrictions/README.md#getrepositoriesworkspacereposlugbranchrestrictionsid) - Get a branch restriction rule
* [postRepositoriesWorkspaceRepoSlugBranchRestrictions](docs/branchrestrictions/README.md#postrepositoriesworkspacereposlugbranchrestrictions) - Create a branch restriction rule
* [putRepositoriesWorkspaceRepoSlugBranchRestrictionsId](docs/branchrestrictions/README.md#putrepositoriesworkspacereposlugbranchrestrictionsid) - Update a branch restriction rule

### [branchingModel](docs/branchingmodel/README.md)

* [getRepositoriesWorkspaceRepoSlugBranchingModel](docs/branchingmodel/README.md#getrepositoriesworkspacereposlugbranchingmodel) - Get the branching model for a repository
* [getRepositoriesWorkspaceRepoSlugBranchingModelSettings](docs/branchingmodel/README.md#getrepositoriesworkspacereposlugbranchingmodelsettings) - Get the branching model config for a repository
* [getRepositoriesWorkspaceRepoSlugEffectiveBranchingModel](docs/branchingmodel/README.md#getrepositoriesworkspacereposlugeffectivebranchingmodel) - Get the effective, or currently applied, branching model for a repository
* [getWorkspacesWorkspaceProjectsProjectKeyBranchingModel](docs/branchingmodel/README.md#getworkspacesworkspaceprojectsprojectkeybranchingmodel) - Get the branching model for a project
* [getWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings](docs/branchingmodel/README.md#getworkspacesworkspaceprojectsprojectkeybranchingmodelsettings) - Get the branching model config for a project
* [putRepositoriesWorkspaceRepoSlugBranchingModelSettings](docs/branchingmodel/README.md#putrepositoriesworkspacereposlugbranchingmodelsettings) - Update the branching model config for a repository
* [putWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings](docs/branchingmodel/README.md#putworkspacesworkspaceprojectsprojectkeybranchingmodelsettings) - Update the branching model config for a project

### [commitStatuses](docs/commitstatuses/README.md)

* [getRepositoriesWorkspaceRepoSlugCommitCommitStatuses](docs/commitstatuses/README.md#getrepositoriesworkspacereposlugcommitcommitstatuses) - List commit statuses for a commit
* [getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey](docs/commitstatuses/README.md#getrepositoriesworkspacereposlugcommitcommitstatusesbuildkey) - Get a build status for a commit
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses](docs/commitstatuses/README.md#getrepositoriesworkspacereposlugpullrequestspullrequestidstatuses) - List commit statuses for a pull request
* [postRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild](docs/commitstatuses/README.md#postrepositoriesworkspacereposlugcommitcommitstatusesbuild) - Create a build status for a commit
* [putRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey](docs/commitstatuses/README.md#putrepositoriesworkspacereposlugcommitcommitstatusesbuildkey) - Update a build status for a commit

### [commits](docs/commits/README.md)

* [bulkCreateOrUpdateAnnotations](docs/commits/README.md#bulkcreateorupdateannotations) - Bulk create or update annotations
* [createOrUpdateAnnotation](docs/commits/README.md#createorupdateannotation) - Create or update an annotation
* [createOrUpdateReport](docs/commits/README.md#createorupdatereport) - Create or update a report
* [deleteAnnotation](docs/commits/README.md#deleteannotation) - Delete an annotation
* [deleteReport](docs/commits/README.md#deletereport) - Delete a report
* [deleteRepositoriesWorkspaceRepoSlugCommitCommitApprove](docs/commits/README.md#deleterepositoriesworkspacereposlugcommitcommitapprove) - Unapprove a commit
* [deleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId](docs/commits/README.md#deleterepositoriesworkspacereposlugcommitcommitcommentscommentid) - Delete a commit comment
* [getAnnotation](docs/commits/README.md#getannotation) - Get an annotation
* [getAnnotationsForReport](docs/commits/README.md#getannotationsforreport) - List annotations
* [getReport](docs/commits/README.md#getreport) - Get a report
* [getReportsForCommit](docs/commits/README.md#getreportsforcommit) - List reports
* [getRepositoriesWorkspaceRepoSlugCommitCommit](docs/commits/README.md#getrepositoriesworkspacereposlugcommitcommit) - Get a commit
* [getRepositoriesWorkspaceRepoSlugCommitCommitComments](docs/commits/README.md#getrepositoriesworkspacereposlugcommitcommitcomments) - List a commit's comments
* [getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId](docs/commits/README.md#getrepositoriesworkspacereposlugcommitcommitcommentscommentid) - Get a commit comment
* [getRepositoriesWorkspaceRepoSlugCommits](docs/commits/README.md#getrepositoriesworkspacereposlugcommits) - List commits
* [getRepositoriesWorkspaceRepoSlugCommitsRevision](docs/commits/README.md#getrepositoriesworkspacereposlugcommitsrevision) - List commits for revision
* [getRepositoriesWorkspaceRepoSlugDiffSpec](docs/commits/README.md#getrepositoriesworkspacereposlugdiffspec) - Compare two commits
* [getRepositoriesWorkspaceRepoSlugDiffstatSpec](docs/commits/README.md#getrepositoriesworkspacereposlugdiffstatspec) - Compare two commit diff stats
* [getRepositoriesWorkspaceRepoSlugMergeBaseRevspec](docs/commits/README.md#getrepositoriesworkspacereposlugmergebaserevspec) - Get the common ancestor between two commits
* [getRepositoriesWorkspaceRepoSlugPatchSpec](docs/commits/README.md#getrepositoriesworkspacereposlugpatchspec) - Get a patch for two commits
* [postRepositoriesWorkspaceRepoSlugCommitCommitApprove](docs/commits/README.md#postrepositoriesworkspacereposlugcommitcommitapprove) - Approve a commit
* [postRepositoriesWorkspaceRepoSlugCommitCommitComments](docs/commits/README.md#postrepositoriesworkspacereposlugcommitcommitcomments) - Create comment for a commit
* [postRepositoriesWorkspaceRepoSlugCommits](docs/commits/README.md#postrepositoriesworkspacereposlugcommits) - List commits with include/exclude
* [postRepositoriesWorkspaceRepoSlugCommitsRevision](docs/commits/README.md#postrepositoriesworkspacereposlugcommitsrevision) - List commits for revision using include/exclude
* [putRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId](docs/commits/README.md#putrepositoriesworkspacereposlugcommitcommitcommentscommentid) - Update a commit comment

### [deployments](docs/deployments/README.md)

* [createEnvironment](docs/deployments/README.md#createenvironment) - Create an environment
* [deleteEnvironmentForRepository](docs/deployments/README.md#deleteenvironmentforrepository) - Delete an environment
* [deleteRepositoriesWorkspaceRepoSlugDeployKeysKeyId](docs/deployments/README.md#deleterepositoriesworkspacereposlugdeploykeyskeyid) - Delete a repository deploy key
* [deleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId](docs/deployments/README.md#deleteworkspacesworkspaceprojectsprojectkeydeploykeyskeyid) - Delete a deploy key from a project
* [getDeploymentForRepository](docs/deployments/README.md#getdeploymentforrepository) - Get a deployment
* [getDeploymentsForRepository](docs/deployments/README.md#getdeploymentsforrepository) - List deployments
* [getEnvironmentForRepository](docs/deployments/README.md#getenvironmentforrepository) - Get an environment
* [getEnvironmentsForRepository](docs/deployments/README.md#getenvironmentsforrepository) - List environments
* [getRepositoriesWorkspaceRepoSlugDeployKeys](docs/deployments/README.md#getrepositoriesworkspacereposlugdeploykeys) - List repository deploy keys
* [getRepositoriesWorkspaceRepoSlugDeployKeysKeyId](docs/deployments/README.md#getrepositoriesworkspacereposlugdeploykeyskeyid) - Get a repository deploy key
* [getWorkspacesWorkspaceProjectsProjectKeyDeployKeys](docs/deployments/README.md#getworkspacesworkspaceprojectsprojectkeydeploykeys) - List project deploy keys
* [getWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId](docs/deployments/README.md#getworkspacesworkspaceprojectsprojectkeydeploykeyskeyid) - Get a project deploy key
* [postRepositoriesWorkspaceRepoSlugDeployKeys](docs/deployments/README.md#postrepositoriesworkspacereposlugdeploykeys) - Add a repository deploy key
* [postWorkspacesWorkspaceProjectsProjectKeyDeployKeys](docs/deployments/README.md#postworkspacesworkspaceprojectsprojectkeydeploykeys) - Create a project deploy key
* [putRepositoriesWorkspaceRepoSlugDeployKeysKeyId](docs/deployments/README.md#putrepositoriesworkspacereposlugdeploykeyskeyid) - Update a repository deploy key
* [updateEnvironmentForRepository](docs/deployments/README.md#updateenvironmentforrepository) - Update an environment

### [downloads](docs/downloads/README.md)

* [deleteRepositoriesWorkspaceRepoSlugDownloadsFilename](docs/downloads/README.md#deleterepositoriesworkspacereposlugdownloadsfilename) - Delete a download artifact
* [getRepositoriesWorkspaceRepoSlugDownloads](docs/downloads/README.md#getrepositoriesworkspacereposlugdownloads) - List download artifacts
* [getRepositoriesWorkspaceRepoSlugDownloadsFilename](docs/downloads/README.md#getrepositoriesworkspacereposlugdownloadsfilename) - Get a download artifact link
* [postRepositoriesWorkspaceRepoSlugDownloads](docs/downloads/README.md#postrepositoriesworkspacereposlugdownloads) - Upload a download artifact

### [issueTracker](docs/issuetracker/README.md)

* [deleteRepositoriesWorkspaceRepoSlugIssuesIssueId](docs/issuetracker/README.md#deleterepositoriesworkspacereposlugissuesissueid) - Delete an issue
* [deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath](docs/issuetracker/README.md#deleterepositoriesworkspacereposlugissuesissueidattachmentspath) - Delete an attachment for an issue
* [deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId](docs/issuetracker/README.md#deleterepositoriesworkspacereposlugissuesissueidcommentscommentid) - Delete a comment on an issue
* [deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVote](docs/issuetracker/README.md#deleterepositoriesworkspacereposlugissuesissueidvote) - Remove vote for an issue
* [deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch](docs/issuetracker/README.md#deleterepositoriesworkspacereposlugissuesissueidwatch) - Stop watching an issue
* [getRepositoriesWorkspaceRepoSlugComponents](docs/issuetracker/README.md#getrepositoriesworkspacereposlugcomponents) - List components
* [getRepositoriesWorkspaceRepoSlugComponentsComponentId](docs/issuetracker/README.md#getrepositoriesworkspacereposlugcomponentscomponentid) - Get a component for issues
* [getRepositoriesWorkspaceRepoSlugIssues](docs/issuetracker/README.md#getrepositoriesworkspacereposlugissues) - List issues
* [getRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZip](docs/issuetracker/README.md#getrepositoriesworkspacereposlugissuesexportreponameissuestaskidzip) - Check issue export status
* [getRepositoriesWorkspaceRepoSlugIssuesImport](docs/issuetracker/README.md#getrepositoriesworkspacereposlugissuesimport) - Check issue import status
* [getRepositoriesWorkspaceRepoSlugIssuesIssueId](docs/issuetracker/README.md#getrepositoriesworkspacereposlugissuesissueid) - Get an issue
* [getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments](docs/issuetracker/README.md#getrepositoriesworkspacereposlugissuesissueidattachments) - List attachments for an issue
* [getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath](docs/issuetracker/README.md#getrepositoriesworkspacereposlugissuesissueidattachmentspath) - Get attachment for an issue
* [getRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges](docs/issuetracker/README.md#getrepositoriesworkspacereposlugissuesissueidchanges) - List changes on an issue
* [getRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeId](docs/issuetracker/README.md#getrepositoriesworkspacereposlugissuesissueidchangeschangeid) - Get issue change object
* [getRepositoriesWorkspaceRepoSlugIssuesIssueIdComments](docs/issuetracker/README.md#getrepositoriesworkspacereposlugissuesissueidcomments) - List comments on an issue
* [getRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId](docs/issuetracker/README.md#getrepositoriesworkspacereposlugissuesissueidcommentscommentid) - Get a comment on an issue
* [getRepositoriesWorkspaceRepoSlugIssuesIssueIdVote](docs/issuetracker/README.md#getrepositoriesworkspacereposlugissuesissueidvote) - Check if current user voted for an issue
* [getRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch](docs/issuetracker/README.md#getrepositoriesworkspacereposlugissuesissueidwatch) - Check if current user is watching a issue
* [getRepositoriesWorkspaceRepoSlugMilestones](docs/issuetracker/README.md#getrepositoriesworkspacereposlugmilestones) - List milestones
* [getRepositoriesWorkspaceRepoSlugMilestonesMilestoneId](docs/issuetracker/README.md#getrepositoriesworkspacereposlugmilestonesmilestoneid) - Get a milestone
* [getRepositoriesWorkspaceRepoSlugVersions](docs/issuetracker/README.md#getrepositoriesworkspacereposlugversions) - List defined versions for issues
* [getRepositoriesWorkspaceRepoSlugVersionsVersionId](docs/issuetracker/README.md#getrepositoriesworkspacereposlugversionsversionid) - Get a defined version for issues
* [postRepositoriesWorkspaceRepoSlugIssues](docs/issuetracker/README.md#postrepositoriesworkspacereposlugissues) - Create an issue
* [postRepositoriesWorkspaceRepoSlugIssuesExport](docs/issuetracker/README.md#postrepositoriesworkspacereposlugissuesexport) - Export issues
* [postRepositoriesWorkspaceRepoSlugIssuesImport](docs/issuetracker/README.md#postrepositoriesworkspacereposlugissuesimport) - Import issues
* [postRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments](docs/issuetracker/README.md#postrepositoriesworkspacereposlugissuesissueidattachments) - Upload an attachment to an issue
* [postRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges](docs/issuetracker/README.md#postrepositoriesworkspacereposlugissuesissueidchanges) - Modify the state of an issue
* [postRepositoriesWorkspaceRepoSlugIssuesIssueIdComments](docs/issuetracker/README.md#postrepositoriesworkspacereposlugissuesissueidcomments) - Create a comment on an issue
* [putRepositoriesWorkspaceRepoSlugIssuesIssueId](docs/issuetracker/README.md#putrepositoriesworkspacereposlugissuesissueid) - Update an issue
* [putRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId](docs/issuetracker/README.md#putrepositoriesworkspacereposlugissuesissueidcommentscommentid) - Update a comment on an issue
* [putRepositoriesWorkspaceRepoSlugIssuesIssueIdVote](docs/issuetracker/README.md#putrepositoriesworkspacereposlugissuesissueidvote) - Vote for an issue
* [putRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch](docs/issuetracker/README.md#putrepositoriesworkspacereposlugissuesissueidwatch) - Watch an issue

### [pipelines](docs/pipelines/README.md)

* [createDeploymentVariable](docs/pipelines/README.md#createdeploymentvariable) - Create a variable for an environment
* [createPipelineForRepository](docs/pipelines/README.md#createpipelineforrepository) - Run a pipeline
* [~~createPipelineVariableForTeam~~](docs/pipelines/README.md#createpipelinevariableforteam) - Create a variable for a user :warning: **Deprecated**
* [~~createPipelineVariableForUser~~](docs/pipelines/README.md#createpipelinevariableforuser) - Create a variable for a user :warning: **Deprecated**
* [createPipelineVariableForWorkspace](docs/pipelines/README.md#createpipelinevariableforworkspace) - Create a variable for a workspace
* [createRepositoryPipelineKnownHost](docs/pipelines/README.md#createrepositorypipelineknownhost) - Create a known host
* [createRepositoryPipelineSchedule](docs/pipelines/README.md#createrepositorypipelineschedule) - Create a schedule
* [createRepositoryPipelineVariable](docs/pipelines/README.md#createrepositorypipelinevariable) - Create a variable for a repository
* [deleteDeploymentVariable](docs/pipelines/README.md#deletedeploymentvariable) - Delete a variable for an environment
* [~~deletePipelineVariableForTeam~~](docs/pipelines/README.md#deletepipelinevariableforteam) - Delete a variable for a team :warning: **Deprecated**
* [~~deletePipelineVariableForUser~~](docs/pipelines/README.md#deletepipelinevariableforuser) - Delete a variable for a user :warning: **Deprecated**
* [deletePipelineVariableForWorkspace](docs/pipelines/README.md#deletepipelinevariableforworkspace) - Delete a variable for a workspace
* [deleteRepositoryPipelineCache](docs/pipelines/README.md#deleterepositorypipelinecache) - Delete a cache
* [deleteRepositoryPipelineCaches](docs/pipelines/README.md#deleterepositorypipelinecaches) - Delete caches
* [deleteRepositoryPipelineKeyPair](docs/pipelines/README.md#deleterepositorypipelinekeypair) - Delete SSH key pair
* [deleteRepositoryPipelineKnownHost](docs/pipelines/README.md#deleterepositorypipelineknownhost) - Delete a known host
* [deleteRepositoryPipelineSchedule](docs/pipelines/README.md#deleterepositorypipelineschedule) - Delete a schedule
* [deleteRepositoryPipelineVariable](docs/pipelines/README.md#deleterepositorypipelinevariable) - Delete a variable for a repository
* [getDeploymentVariables](docs/pipelines/README.md#getdeploymentvariables) - List variables for an environment
* [getOIDCConfiguration](docs/pipelines/README.md#getoidcconfiguration) - Get OpenID configuration for OIDC in Pipelines
* [getOIDCKeys](docs/pipelines/README.md#getoidckeys) - Get keys for OIDC in Pipelines
* [getPipelineContainerLog](docs/pipelines/README.md#getpipelinecontainerlog) - Get the logs for the build container or a service container for a given step of a pipeline.
* [getPipelineForRepository](docs/pipelines/README.md#getpipelineforrepository) - Get a pipeline
* [getPipelineStepForRepository](docs/pipelines/README.md#getpipelinestepforrepository) - Get a step of a pipeline
* [getPipelineStepLogForRepository](docs/pipelines/README.md#getpipelinesteplogforrepository) - Get log file for a step
* [getPipelineStepsForRepository](docs/pipelines/README.md#getpipelinestepsforrepository) - List steps for a pipeline
* [getPipelineTestReportTestCaseReasons](docs/pipelines/README.md#getpipelinetestreporttestcasereasons) - Get test case reasons (output) for a given test case in a step of a pipeline.
* [getPipelineTestReportTestCases](docs/pipelines/README.md#getpipelinetestreporttestcases) - Get test cases for a given step of a pipeline.
* [getPipelineTestReports](docs/pipelines/README.md#getpipelinetestreports) - Get a summary of test reports for a given step of a pipeline.
* [~~getPipelineVariableForTeam~~](docs/pipelines/README.md#getpipelinevariableforteam) - Get a variable for a team :warning: **Deprecated**
* [~~getPipelineVariableForUser~~](docs/pipelines/README.md#getpipelinevariableforuser) - Get a variable for a user :warning: **Deprecated**
* [getPipelineVariableForWorkspace](docs/pipelines/README.md#getpipelinevariableforworkspace) - Get variable for a workspace
* [~~getPipelineVariablesForTeam~~](docs/pipelines/README.md#getpipelinevariablesforteam) - List variables for an account :warning: **Deprecated**
* [~~getPipelineVariablesForUser~~](docs/pipelines/README.md#getpipelinevariablesforuser) - List variables for a user :warning: **Deprecated**
* [getPipelineVariablesForWorkspace](docs/pipelines/README.md#getpipelinevariablesforworkspace) - List variables for a workspace
* [getPipelinesForRepository](docs/pipelines/README.md#getpipelinesforrepository) - List pipelines
* [getRepositoryPipelineCacheContentURI](docs/pipelines/README.md#getrepositorypipelinecachecontenturi) - Get cache content URI
* [getRepositoryPipelineCaches](docs/pipelines/README.md#getrepositorypipelinecaches) - List caches
* [getRepositoryPipelineConfig](docs/pipelines/README.md#getrepositorypipelineconfig) - Get configuration
* [getRepositoryPipelineKnownHost](docs/pipelines/README.md#getrepositorypipelineknownhost) - Get a known host
* [getRepositoryPipelineKnownHosts](docs/pipelines/README.md#getrepositorypipelineknownhosts) - List known hosts
* [getRepositoryPipelineSchedule](docs/pipelines/README.md#getrepositorypipelineschedule) - Get a schedule
* [getRepositoryPipelineScheduleExecutions](docs/pipelines/README.md#getrepositorypipelinescheduleexecutions) - List executions of a schedule
* [getRepositoryPipelineSchedules](docs/pipelines/README.md#getrepositorypipelineschedules) - List schedules
* [getRepositoryPipelineSshKeyPair](docs/pipelines/README.md#getrepositorypipelinesshkeypair) - Get SSH key pair
* [getRepositoryPipelineVariable](docs/pipelines/README.md#getrepositorypipelinevariable) - Get a variable for a repository
* [getRepositoryPipelineVariables](docs/pipelines/README.md#getrepositorypipelinevariables) - List variables for a repository
* [stopPipeline](docs/pipelines/README.md#stoppipeline) - Stop a pipeline
* [updateDeploymentVariable](docs/pipelines/README.md#updatedeploymentvariable) - Update a variable for an environment
* [~~updatePipelineVariableForTeam~~](docs/pipelines/README.md#updatepipelinevariableforteam) - Update a variable for a team :warning: **Deprecated**
* [~~updatePipelineVariableForUser~~](docs/pipelines/README.md#updatepipelinevariableforuser) - Update a variable for a user :warning: **Deprecated**
* [updatePipelineVariableForWorkspace](docs/pipelines/README.md#updatepipelinevariableforworkspace) - Update variable for a workspace
* [updateRepositoryBuildNumber](docs/pipelines/README.md#updaterepositorybuildnumber) - Update the next build number
* [updateRepositoryPipelineConfig](docs/pipelines/README.md#updaterepositorypipelineconfig) - Update configuration
* [updateRepositoryPipelineKeyPair](docs/pipelines/README.md#updaterepositorypipelinekeypair) - Update SSH key pair
* [updateRepositoryPipelineKnownHost](docs/pipelines/README.md#updaterepositorypipelineknownhost) - Update a known host
* [updateRepositoryPipelineSchedule](docs/pipelines/README.md#updaterepositorypipelineschedule) - Update a schedule
* [updateRepositoryPipelineVariable](docs/pipelines/README.md#updaterepositorypipelinevariable) - Update a variable for a repository

### [projects](docs/projects/README.md)

* [deleteWorkspacesWorkspaceProjectsProjectKey](docs/projects/README.md#deleteworkspacesworkspaceprojectsprojectkey) - Delete a project for a workspace
* [deleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser](docs/projects/README.md#deleteworkspacesworkspaceprojectsprojectkeydefaultreviewersselecteduser) - Remove the specific user from the project's default reviewers
* [getWorkspacesWorkspaceProjectsProjectKey](docs/projects/README.md#getworkspacesworkspaceprojectsprojectkey) - Get a project for a workspace
* [getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewers](docs/projects/README.md#getworkspacesworkspaceprojectsprojectkeydefaultreviewers) - List the default reviewers in a project
* [getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser](docs/projects/README.md#getworkspacesworkspaceprojectsprojectkeydefaultreviewersselecteduser) - Get a default reviewer
* [postWorkspacesWorkspaceProjects](docs/projects/README.md#postworkspacesworkspaceprojects) - Create a project in a workspace
* [putWorkspacesWorkspaceProjectsProjectKey](docs/projects/README.md#putworkspacesworkspaceprojectsprojectkey) - Update a project for a workspace
* [putWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser](docs/projects/README.md#putworkspacesworkspaceprojectsprojectkeydefaultreviewersselecteduser) - Add the specific user as a default reviewer for the project

### [pullrequests](docs/pullrequests/README.md)

* [deleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername](docs/pullrequests/README.md#deleterepositoriesworkspacereposlugdefaultreviewerstargetusername) - Remove a user from the default reviewers
* [deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove](docs/pullrequests/README.md#deleterepositoriesworkspacereposlugpullrequestspullrequestidapprove) - Unapprove a pull request
* [deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId](docs/pullrequests/README.md#deleterepositoriesworkspacereposlugpullrequestspullrequestidcommentscommentid) - Delete a comment on a pull request
* [deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolve](docs/pullrequests/README.md#deleterepositoriesworkspacereposlugpullrequestspullrequestidcommentscommentidresolve) - Reopen a comment thread
* [deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges](docs/pullrequests/README.md#deleterepositoriesworkspacereposlugpullrequestspullrequestidrequestchanges) - Remove change request for a pull request
* [getPullrequestsForCommit](docs/pullrequests/README.md#getpullrequestsforcommit) - List pull requests that contain a commit
* [getPullrequestsSelectedUser](docs/pullrequests/README.md#getpullrequestsselecteduser) - List pull requests for a user
* [getRepositoriesWorkspaceRepoSlugDefaultReviewers](docs/pullrequests/README.md#getrepositoriesworkspacereposlugdefaultreviewers) - List default reviewers
* [getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername](docs/pullrequests/README.md#getrepositoriesworkspacereposlugdefaultreviewerstargetusername) - Get a default reviewer
* [getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewers](docs/pullrequests/README.md#getrepositoriesworkspacereposlugeffectivedefaultreviewers) - List effective default reviewers
* [getRepositoriesWorkspaceRepoSlugPullrequests](docs/pullrequests/README.md#getrepositoriesworkspacereposlugpullrequests) - List pull requests
* [getRepositoriesWorkspaceRepoSlugPullrequestsActivity](docs/pullrequests/README.md#getrepositoriesworkspacereposlugpullrequestsactivity) - List a pull request activity log
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId](docs/pullrequests/README.md#getrepositoriesworkspacereposlugpullrequestspullrequestid) - Get a pull request
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivity](docs/pullrequests/README.md#getrepositoriesworkspacereposlugpullrequestspullrequestidactivity) - List a pull request activity log
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments](docs/pullrequests/README.md#getrepositoriesworkspacereposlugpullrequestspullrequestidcomments) - List comments on a pull request
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId](docs/pullrequests/README.md#getrepositoriesworkspacereposlugpullrequestspullrequestidcommentscommentid) - Get a comment on a pull request
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommits](docs/pullrequests/README.md#getrepositoriesworkspacereposlugpullrequestspullrequestidcommits) - List commits on a pull request
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiff](docs/pullrequests/README.md#getrepositoriesworkspacereposlugpullrequestspullrequestiddiff) - List changes in a pull request
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstat](docs/pullrequests/README.md#getrepositoriesworkspacereposlugpullrequestspullrequestiddiffstat) - Get the diff stat for a pull request
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskId](docs/pullrequests/README.md#getrepositoriesworkspacereposlugpullrequestspullrequestidmergetaskstatustaskid) - Get the merge task status for a pull request
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatch](docs/pullrequests/README.md#getrepositoriesworkspacereposlugpullrequestspullrequestidpatch) - Get the patch for a pull request
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses](docs/pullrequests/README.md#getrepositoriesworkspacereposlugpullrequestspullrequestidstatuses) - List commit statuses for a pull request
* [postRepositoriesWorkspaceRepoSlugPullrequests](docs/pullrequests/README.md#postrepositoriesworkspacereposlugpullrequests) - Create a pull request
* [postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove](docs/pullrequests/README.md#postrepositoriesworkspacereposlugpullrequestspullrequestidapprove) - Approve a pull request
* [postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments](docs/pullrequests/README.md#postrepositoriesworkspacereposlugpullrequestspullrequestidcomments) - Create a comment on a pull request
* [postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolve](docs/pullrequests/README.md#postrepositoriesworkspacereposlugpullrequestspullrequestidcommentscommentidresolve) - Resolve a comment thread
* [postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDecline](docs/pullrequests/README.md#postrepositoriesworkspacereposlugpullrequestspullrequestiddecline) - Decline a pull request
* [postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMerge](docs/pullrequests/README.md#postrepositoriesworkspacereposlugpullrequestspullrequestidmerge) - Merge a pull request
* [postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges](docs/pullrequests/README.md#postrepositoriesworkspacereposlugpullrequestspullrequestidrequestchanges) - Request changes for a pull request
* [putRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername](docs/pullrequests/README.md#putrepositoriesworkspacereposlugdefaultreviewerstargetusername) - Add a user to the default reviewers
* [putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId](docs/pullrequests/README.md#putrepositoriesworkspacereposlugpullrequestspullrequestid) - Update a pull request
* [putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId](docs/pullrequests/README.md#putrepositoriesworkspacereposlugpullrequestspullrequestidcommentscommentid) - Update a comment on a pull request

### [refs](docs/refs/README.md)

* [deleteRepositoriesWorkspaceRepoSlugRefsBranchesName](docs/refs/README.md#deleterepositoriesworkspacereposlugrefsbranchesname) - Delete a branch
* [deleteRepositoriesWorkspaceRepoSlugRefsTagsName](docs/refs/README.md#deleterepositoriesworkspacereposlugrefstagsname) - Delete a tag
* [getRepositoriesWorkspaceRepoSlugRefs](docs/refs/README.md#getrepositoriesworkspacereposlugrefs) - List branches and tags
* [getRepositoriesWorkspaceRepoSlugRefsBranches](docs/refs/README.md#getrepositoriesworkspacereposlugrefsbranches) - List open branches
* [getRepositoriesWorkspaceRepoSlugRefsBranchesName](docs/refs/README.md#getrepositoriesworkspacereposlugrefsbranchesname) - Get a branch
* [getRepositoriesWorkspaceRepoSlugRefsTags](docs/refs/README.md#getrepositoriesworkspacereposlugrefstags) - List tags
* [getRepositoriesWorkspaceRepoSlugRefsTagsName](docs/refs/README.md#getrepositoriesworkspacereposlugrefstagsname) - Get a tag
* [postRepositoriesWorkspaceRepoSlugRefsBranches](docs/refs/README.md#postrepositoriesworkspacereposlugrefsbranches) - Create a branch
* [postRepositoriesWorkspaceRepoSlugRefsTags](docs/refs/README.md#postrepositoriesworkspacereposlugrefstags) - Create a tag

### [reports](docs/reports/README.md)

* [bulkCreateOrUpdateAnnotations](docs/reports/README.md#bulkcreateorupdateannotations) - Bulk create or update annotations
* [createOrUpdateAnnotation](docs/reports/README.md#createorupdateannotation) - Create or update an annotation
* [createOrUpdateReport](docs/reports/README.md#createorupdatereport) - Create or update a report
* [deleteAnnotation](docs/reports/README.md#deleteannotation) - Delete an annotation
* [deleteReport](docs/reports/README.md#deletereport) - Delete a report
* [getAnnotation](docs/reports/README.md#getannotation) - Get an annotation
* [getAnnotationsForReport](docs/reports/README.md#getannotationsforreport) - List annotations
* [getReport](docs/reports/README.md#getreport) - Get a report
* [getReportsForCommit](docs/reports/README.md#getreportsforcommit) - List reports

### [repositories](docs/repositories/README.md)

* [deleteRepositoriesWorkspaceRepoSlug](docs/repositories/README.md#deleterepositoriesworkspacereposlug) - Delete a repository
* [deleteRepositoriesWorkspaceRepoSlugHooksUid](docs/repositories/README.md#deleterepositoriesworkspacereposlughooksuid) - Delete a webhook for a repository
* [deleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug](docs/repositories/README.md#deleterepositoriesworkspacereposlugpermissionsconfiggroupsgroupslug) - Delete an explicit group permission for a repository
* [deleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserId](docs/repositories/README.md#deleterepositoriesworkspacereposlugpermissionsconfigusersselecteduserid) - Delete an explicit user permission for a repository
* [getRepositories](docs/repositories/README.md#getrepositories) - List public repositories
* [getRepositoriesWorkspace](docs/repositories/README.md#getrepositoriesworkspace) - List repositories in a workspace
* [getRepositoriesWorkspaceRepoSlug](docs/repositories/README.md#getrepositoriesworkspacereposlug) - Get a repository
* [getRepositoriesWorkspaceRepoSlugFilehistoryCommitPath](docs/repositories/README.md#getrepositoriesworkspacereposlugfilehistorycommitpath) - List commits that modified a file
* [getRepositoriesWorkspaceRepoSlugForks](docs/repositories/README.md#getrepositoriesworkspacereposlugforks) - List repository forks
* [getRepositoriesWorkspaceRepoSlugHooks](docs/repositories/README.md#getrepositoriesworkspacereposlughooks) - List webhooks for a repository
* [getRepositoriesWorkspaceRepoSlugHooksUid](docs/repositories/README.md#getrepositoriesworkspacereposlughooksuid) - Get a webhook for a repository
* [getRepositoriesWorkspaceRepoSlugOverrideSettings](docs/repositories/README.md#getrepositoriesworkspacereposlugoverridesettings) - Retrieve the inheritance state for repository settings
* [getRepositoriesWorkspaceRepoSlugPermissionsConfigGroups](docs/repositories/README.md#getrepositoriesworkspacereposlugpermissionsconfiggroups) - List explicit group permissions for a repository
* [getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug](docs/repositories/README.md#getrepositoriesworkspacereposlugpermissionsconfiggroupsgroupslug) - Get an explicit group permission for a repository
* [getRepositoriesWorkspaceRepoSlugPermissionsConfigUsers](docs/repositories/README.md#getrepositoriesworkspacereposlugpermissionsconfigusers) - List explicit user permissions for a repository
* [getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserId](docs/repositories/README.md#getrepositoriesworkspacereposlugpermissionsconfigusersselecteduserid) - Get an explicit user permission for a repository
* [getRepositoriesWorkspaceRepoSlugSrc](docs/repositories/README.md#getrepositoriesworkspacereposlugsrc) - Get the root directory of the main branch
* [getRepositoriesWorkspaceRepoSlugSrcCommitPath](docs/repositories/README.md#getrepositoriesworkspacereposlugsrccommitpath) - Get file or directory contents
* [getRepositoriesWorkspaceRepoSlugWatchers](docs/repositories/README.md#getrepositoriesworkspacereposlugwatchers) - List repositories watchers
* [getUserPermissionsRepositories](docs/repositories/README.md#getuserpermissionsrepositories) - List repository permissions for a user
* [postRepositoriesWorkspaceRepoSlug](docs/repositories/README.md#postrepositoriesworkspacereposlug) - Create a repository
* [postRepositoriesWorkspaceRepoSlugForks](docs/repositories/README.md#postrepositoriesworkspacereposlugforks) - Fork a repository
* [postRepositoriesWorkspaceRepoSlugHooks](docs/repositories/README.md#postrepositoriesworkspacereposlughooks) - Create a webhook for a repository
* [postRepositoriesWorkspaceRepoSlugSrc](docs/repositories/README.md#postrepositoriesworkspacereposlugsrc) - Create a commit by uploading a file
* [putRepositoriesWorkspaceRepoSlug](docs/repositories/README.md#putrepositoriesworkspacereposlug) - Update a repository
* [putRepositoriesWorkspaceRepoSlugHooksUid](docs/repositories/README.md#putrepositoriesworkspacereposlughooksuid) - Update a webhook for a repository
* [putRepositoriesWorkspaceRepoSlugOverrideSettings](docs/repositories/README.md#putrepositoriesworkspacereposlugoverridesettings) - Set the inheritance state for repository settings
                
* [putRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug](docs/repositories/README.md#putrepositoriesworkspacereposlugpermissionsconfiggroupsgroupslug) - Update an explicit group permission for a repository
* [putRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserId](docs/repositories/README.md#putrepositoriesworkspacereposlugpermissionsconfigusersselecteduserid) - Update an explicit user permission for a repository

### [search](docs/search/README.md)

* [searchAccount](docs/search/README.md#searchaccount) - Search for code in a user's repositories
* [searchTeam](docs/search/README.md#searchteam) - Search for code in a team's repositories
* [searchWorkspace](docs/search/README.md#searchworkspace) - Search for code in a workspace

### [snippets](docs/snippets/README.md)

* [deleteSnippetsWorkspaceEncodedId](docs/snippets/README.md#deletesnippetsworkspaceencodedid) - Delete a snippet
* [deleteSnippetsWorkspaceEncodedIdCommentsCommentId](docs/snippets/README.md#deletesnippetsworkspaceencodedidcommentscommentid) - Delete a comment on a snippet
* [deleteSnippetsWorkspaceEncodedIdWatch](docs/snippets/README.md#deletesnippetsworkspaceencodedidwatch) - Stop watching a snippet
* [deleteSnippetsWorkspaceEncodedIdNodeId](docs/snippets/README.md#deletesnippetsworkspaceencodedidnodeid) - Delete a previous revision of a snippet
* [getSnippets](docs/snippets/README.md#getsnippets) - List snippets
* [getSnippetsWorkspace](docs/snippets/README.md#getsnippetsworkspace) - List snippets in a workspace
* [getSnippetsWorkspaceEncodedId](docs/snippets/README.md#getsnippetsworkspaceencodedid) - Get a snippet
* [getSnippetsWorkspaceEncodedIdComments](docs/snippets/README.md#getsnippetsworkspaceencodedidcomments) - List comments on a snippet
* [getSnippetsWorkspaceEncodedIdCommentsCommentId](docs/snippets/README.md#getsnippetsworkspaceencodedidcommentscommentid) - Get a comment on a snippet
* [getSnippetsWorkspaceEncodedIdCommits](docs/snippets/README.md#getsnippetsworkspaceencodedidcommits) - List snippet changes
* [getSnippetsWorkspaceEncodedIdCommitsRevision](docs/snippets/README.md#getsnippetsworkspaceencodedidcommitsrevision) - Get a previous snippet change
* [getSnippetsWorkspaceEncodedIdFilesPath](docs/snippets/README.md#getsnippetsworkspaceencodedidfilespath) - Get a snippet's raw file at HEAD
* [getSnippetsWorkspaceEncodedIdWatch](docs/snippets/README.md#getsnippetsworkspaceencodedidwatch) - Check if the current user is watching a snippet
* [~~getSnippetsWorkspaceEncodedIdWatchers~~](docs/snippets/README.md#getsnippetsworkspaceencodedidwatchers) - List users watching a snippet :warning: **Deprecated**
* [getSnippetsWorkspaceEncodedIdNodeId](docs/snippets/README.md#getsnippetsworkspaceencodedidnodeid) - Get a previous revision of a snippet
* [getSnippetsWorkspaceEncodedIdNodeIdFilesPath](docs/snippets/README.md#getsnippetsworkspaceencodedidnodeidfilespath) - Get a snippet's raw file
* [getSnippetsWorkspaceEncodedIdRevisionDiff](docs/snippets/README.md#getsnippetsworkspaceencodedidrevisiondiff) - Get snippet changes between versions
* [getSnippetsWorkspaceEncodedIdRevisionPatch](docs/snippets/README.md#getsnippetsworkspaceencodedidrevisionpatch) - Get snippet patch between versions
* [postSnippets](docs/snippets/README.md#postsnippets) - Create a snippet
* [postSnippetsWorkspace](docs/snippets/README.md#postsnippetsworkspace) - Create a snippet for a workspace
* [postSnippetsWorkspaceEncodedIdComments](docs/snippets/README.md#postsnippetsworkspaceencodedidcomments) - Create a comment on a snippet
* [putSnippetsWorkspaceEncodedId](docs/snippets/README.md#putsnippetsworkspaceencodedid) - Update a snippet
* [putSnippetsWorkspaceEncodedIdCommentsCommentId](docs/snippets/README.md#putsnippetsworkspaceencodedidcommentscommentid) - Update a comment on a snippet
* [putSnippetsWorkspaceEncodedIdWatch](docs/snippets/README.md#putsnippetsworkspaceencodedidwatch) - Watch a snippet
* [putSnippetsWorkspaceEncodedIdNodeId](docs/snippets/README.md#putsnippetsworkspaceencodedidnodeid) - Update a previous revision of a snippet

### [source](docs/source/README.md)

* [getRepositoriesWorkspaceRepoSlugFilehistoryCommitPath](docs/source/README.md#getrepositoriesworkspacereposlugfilehistorycommitpath) - List commits that modified a file
* [getRepositoriesWorkspaceRepoSlugSrc](docs/source/README.md#getrepositoriesworkspacereposlugsrc) - Get the root directory of the main branch
* [getRepositoriesWorkspaceRepoSlugSrcCommitPath](docs/source/README.md#getrepositoriesworkspacereposlugsrccommitpath) - Get file or directory contents
* [postRepositoriesWorkspaceRepoSlugSrc](docs/source/README.md#postrepositoriesworkspacereposlugsrc) - Create a commit by uploading a file

### [ssh](docs/ssh/README.md)

* [deleteUsersSelectedUserSshKeysKeyId](docs/ssh/README.md#deleteusersselectedusersshkeyskeyid) - Delete a SSH key
* [getUsersSelectedUserSshKeys](docs/ssh/README.md#getusersselectedusersshkeys) - List SSH keys
* [getUsersSelectedUserSshKeysKeyId](docs/ssh/README.md#getusersselectedusersshkeyskeyid) - Get a SSH key
* [postUsersSelectedUserSshKeys](docs/ssh/README.md#postusersselectedusersshkeys) - Add a new SSH key
* [putUsersSelectedUserSshKeysKeyId](docs/ssh/README.md#putusersselectedusersshkeyskeyid) - Update a SSH key

### [users](docs/users/README.md)

* [getUser](docs/users/README.md#getuser) - Get current user
* [getUserEmails](docs/users/README.md#getuseremails) - List email addresses for current user
* [getUserEmailsEmail](docs/users/README.md#getuseremailsemail) - Get an email address for current user
* [getUsersSelectedUser](docs/users/README.md#getusersselecteduser) - Get a user

### [webhooks](docs/webhooks/README.md)

* [deleteRepositoriesWorkspaceRepoSlugHooksUid](docs/webhooks/README.md#deleterepositoriesworkspacereposlughooksuid) - Delete a webhook for a repository
* [deleteWorkspacesWorkspaceHooksUid](docs/webhooks/README.md#deleteworkspacesworkspacehooksuid) - Delete a webhook for a workspace
* [getHookEvents](docs/webhooks/README.md#gethookevents) - Get a webhook resource
* [getHookEventsSubjectType](docs/webhooks/README.md#gethookeventssubjecttype) - List subscribable webhook types
* [getRepositoriesWorkspaceRepoSlugHooks](docs/webhooks/README.md#getrepositoriesworkspacereposlughooks) - List webhooks for a repository
* [getRepositoriesWorkspaceRepoSlugHooksUid](docs/webhooks/README.md#getrepositoriesworkspacereposlughooksuid) - Get a webhook for a repository
* [getWorkspacesWorkspaceHooks](docs/webhooks/README.md#getworkspacesworkspacehooks) - List webhooks for a workspace
* [getWorkspacesWorkspaceHooksUid](docs/webhooks/README.md#getworkspacesworkspacehooksuid) - Get a webhook for a workspace
* [postRepositoriesWorkspaceRepoSlugHooks](docs/webhooks/README.md#postrepositoriesworkspacereposlughooks) - Create a webhook for a repository
* [postWorkspacesWorkspaceHooks](docs/webhooks/README.md#postworkspacesworkspacehooks) - Create a webhook for a workspace
* [putRepositoriesWorkspaceRepoSlugHooksUid](docs/webhooks/README.md#putrepositoriesworkspacereposlughooksuid) - Update a webhook for a repository
* [putWorkspacesWorkspaceHooksUid](docs/webhooks/README.md#putworkspacesworkspacehooksuid) - Update a webhook for a workspace

### [workspaces](docs/workspaces/README.md)

* [deleteWorkspacesWorkspaceHooksUid](docs/workspaces/README.md#deleteworkspacesworkspacehooksuid) - Delete a webhook for a workspace
* [getUserPermissionsWorkspaces](docs/workspaces/README.md#getuserpermissionsworkspaces) - List workspaces for the current user
* [getWorkspaces](docs/workspaces/README.md#getworkspaces) - List workspaces for user
* [getWorkspacesWorkspace](docs/workspaces/README.md#getworkspacesworkspace) - Get a workspace
* [getWorkspacesWorkspaceHooks](docs/workspaces/README.md#getworkspacesworkspacehooks) - List webhooks for a workspace
* [getWorkspacesWorkspaceHooksUid](docs/workspaces/README.md#getworkspacesworkspacehooksuid) - Get a webhook for a workspace
* [getWorkspacesWorkspaceMembers](docs/workspaces/README.md#getworkspacesworkspacemembers) - List users in a workspace
* [getWorkspacesWorkspaceMembersMember](docs/workspaces/README.md#getworkspacesworkspacemembersmember) - Get user membership for a workspace
* [getWorkspacesWorkspacePermissions](docs/workspaces/README.md#getworkspacesworkspacepermissions) - List user permissions in a workspace
* [getWorkspacesWorkspacePermissionsRepositories](docs/workspaces/README.md#getworkspacesworkspacepermissionsrepositories) - List all repository permissions for a workspace
* [getWorkspacesWorkspacePermissionsRepositoriesRepoSlug](docs/workspaces/README.md#getworkspacesworkspacepermissionsrepositoriesreposlug) - List a repository permissions for a workspace
* [getWorkspacesWorkspaceProjects](docs/workspaces/README.md#getworkspacesworkspaceprojects) - List projects in a workspace
* [getWorkspacesWorkspaceProjectsProjectKey](docs/workspaces/README.md#getworkspacesworkspaceprojectsprojectkey) - Get a project for a workspace
* [postWorkspacesWorkspaceHooks](docs/workspaces/README.md#postworkspacesworkspacehooks) - Create a webhook for a workspace
* [putWorkspacesWorkspaceHooksUid](docs/workspaces/README.md#putworkspacesworkspacehooksuid) - Update a webhook for a workspace

### [properties](docs/properties/README.md)

* [deleteCommitHostedPropertyValue](docs/properties/README.md#deletecommithostedpropertyvalue) - Delete a commit application property
* [deletePullRequestHostedPropertyValue](docs/properties/README.md#deletepullrequesthostedpropertyvalue) - Delete a pull request application property
* [deleteRepositoryHostedPropertyValue](docs/properties/README.md#deleterepositoryhostedpropertyvalue) - Delete a repository application property
* [deleteUserHostedPropertyValue](docs/properties/README.md#deleteuserhostedpropertyvalue) - Delete a user application property
* [getCommitHostedPropertyValue](docs/properties/README.md#getcommithostedpropertyvalue) - Get a commit application property
* [getPullRequestHostedPropertyValue](docs/properties/README.md#getpullrequesthostedpropertyvalue) - Get a pull request application property
* [getRepositoryHostedPropertyValue](docs/properties/README.md#getrepositoryhostedpropertyvalue) - Get a repository application property
* [retrieveUserHostedPropertyValue](docs/properties/README.md#retrieveuserhostedpropertyvalue) - Get a user application property
* [updateCommitHostedPropertyValue](docs/properties/README.md#updatecommithostedpropertyvalue) - Update a commit application property
* [updatePullRequestHostedPropertyValue](docs/properties/README.md#updatepullrequesthostedpropertyvalue) - Update a pull request application property
* [updateRepositoryHostedPropertyValue](docs/properties/README.md#updaterepositoryhostedpropertyvalue) - Update a repository application property
* [updateUserHostedPropertyValue](docs/properties/README.md#updateuserhostedpropertyvalue) - Update a user application property
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
