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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateApprovalRuleTemplateWithRepositoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateApprovalRuleTemplateWithRepositoryInput;
use \OpenAPI\OpenAPI\Models\Operations\AssociateApprovalRuleTemplateWithRepositoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateApprovalRuleTemplateWithRepositoryRequest();
    $request->associateApprovalRuleTemplateWithRepositoryInput = new AssociateApprovalRuleTemplateWithRepositoryInput();
    $request->associateApprovalRuleTemplateWithRepositoryInput->approvalRuleTemplateName = 'corrupti';
    $request->associateApprovalRuleTemplateWithRepositoryInput->repositoryName = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = AssociateApprovalRuleTemplateWithRepositoryXAmzTargetEnum::CODE_COMMIT20150413_ASSOCIATE_APPROVAL_RULE_TEMPLATE_WITH_REPOSITORY;

    $response = $sdk->associateApprovalRuleTemplateWithRepository($request);

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

### [SDK](docs/sdk/README.md)

* [associateApprovalRuleTemplateWithRepository](docs/sdk/README.md#associateapprovalruletemplatewithrepository) - Creates an association between an approval rule template and a specified repository. Then, the next time a pull request is created in the repository where the destination reference (if specified) matches the destination reference (branch) for the pull request, an approval rule that matches the template conditions is automatically created for that pull request. If no destination references are specified in the template, an approval rule that matches the template contents is created for all pull requests in that repository.
* [batchAssociateApprovalRuleTemplateWithRepositories](docs/sdk/README.md#batchassociateapprovalruletemplatewithrepositories) - Creates an association between an approval rule template and one or more specified repositories. 
* [batchDescribeMergeConflicts](docs/sdk/README.md#batchdescribemergeconflicts) - Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy.
* [batchDisassociateApprovalRuleTemplateFromRepositories](docs/sdk/README.md#batchdisassociateapprovalruletemplatefromrepositories) - Removes the association between an approval rule template and one or more specified repositories. 
* [batchGetCommits](docs/sdk/README.md#batchgetcommits) - Returns information about the contents of one or more commits in a repository.
* [batchGetRepositories](docs/sdk/README.md#batchgetrepositories) - <p>Returns information about one or more repositories.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
* [createApprovalRuleTemplate](docs/sdk/README.md#createapprovalruletemplate) - Creates a template for approval rules that can then be associated with one or more repositories in your AWS account. When you associate a template with a repository, AWS CodeCommit creates an approval rule that matches the conditions of the template for all pull requests that meet the conditions of the template. For more information, see <a>AssociateApprovalRuleTemplateWithRepository</a>.
* [createBranch](docs/sdk/README.md#createbranch) - <p>Creates a branch in a repository and points the branch to a commit.</p> <note> <p>Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.</p> </note>
* [createCommit](docs/sdk/README.md#createcommit) - Creates a commit for a repository on the tip of a specified branch.
* [createPullRequest](docs/sdk/README.md#createpullrequest) - Creates a pull request in the specified repository.
* [createPullRequestApprovalRule](docs/sdk/README.md#createpullrequestapprovalrule) - Creates an approval rule for a pull request.
* [createRepository](docs/sdk/README.md#createrepository) - Creates a new, empty repository.
* [createUnreferencedMergeCommit](docs/sdk/README.md#createunreferencedmergecommit) - <p>Creates an unreferenced commit that represents the result of merging two branches using a specified merge strategy. This can help you determine the outcome of a potential merge. This API cannot be used with the fast-forward merge strategy because that strategy does not create a merge commit.</p> <note> <p>This unreferenced merge commit can only be accessed using the GetCommit API or through git commands such as git fetch. To retrieve this commit, you must specify its commit ID or otherwise reference it.</p> </note>
* [deleteApprovalRuleTemplate](docs/sdk/README.md#deleteapprovalruletemplate) - Deletes a specified approval rule template. Deleting a template does not remove approval rules on pull requests already created with the template.
* [deleteBranch](docs/sdk/README.md#deletebranch) - Deletes a branch from a repository, unless that branch is the default branch for the repository. 
* [deleteCommentContent](docs/sdk/README.md#deletecommentcontent) - Deletes the content of a comment made on a change, file, or commit in a repository.
* [deleteFile](docs/sdk/README.md#deletefile) - Deletes a specified file from a specified branch. A commit is created on the branch that contains the revision. The file still exists in the commits earlier to the commit that contains the deletion.
* [deletePullRequestApprovalRule](docs/sdk/README.md#deletepullrequestapprovalrule) - Deletes an approval rule from a specified pull request. Approval rules can be deleted from a pull request only if the pull request is open, and if the approval rule was created specifically for a pull request and not generated from an approval rule template associated with the repository where the pull request was created. You cannot delete an approval rule from a merged or closed pull request.
* [deleteRepository](docs/sdk/README.md#deleterepository) - <p>Deletes a repository. If a specified repository was already deleted, a null repository ID is returned.</p> <important> <p>Deleting a repository also deletes all associated objects and metadata. After a repository is deleted, all future push calls to the deleted repository fail.</p> </important>
* [describeMergeConflicts](docs/sdk/README.md#describemergeconflicts) - Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy. If the merge option for the attempted merge is specified as FAST_FORWARD_MERGE, an exception is thrown.
* [describePullRequestEvents](docs/sdk/README.md#describepullrequestevents) - Returns information about one or more pull request events.
* [disassociateApprovalRuleTemplateFromRepository](docs/sdk/README.md#disassociateapprovalruletemplatefromrepository) - Removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository. This does not delete any approval rules previously created for pull requests through the template association.
* [evaluatePullRequestApprovalRules](docs/sdk/README.md#evaluatepullrequestapprovalrules) - Evaluates whether a pull request has met all the conditions specified in its associated approval rules.
* [getApprovalRuleTemplate](docs/sdk/README.md#getapprovalruletemplate) - Returns information about a specified approval rule template.
* [getBlob](docs/sdk/README.md#getblob) - Returns the base-64 encoded content of an individual blob in a repository.
* [getBranch](docs/sdk/README.md#getbranch) - Returns information about a repository branch, including its name and the last commit ID.
* [getComment](docs/sdk/README.md#getcomment) - <p>Returns the content of a comment made on a change, file, or commit in a repository. </p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>
* [getCommentReactions](docs/sdk/README.md#getcommentreactions) - Returns information about reactions to a specified comment ID. Reactions from users who have been deleted will not be included in the count.
* [getCommentsForComparedCommit](docs/sdk/README.md#getcommentsforcomparedcommit) - <p>Returns information about comments made on the comparison between two commits.</p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>
* [getCommentsForPullRequest](docs/sdk/README.md#getcommentsforpullrequest) - <p>Returns comments made on a pull request.</p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>
* [getCommit](docs/sdk/README.md#getcommit) - Returns information about a commit, including commit message and committer information.
* [getDifferences](docs/sdk/README.md#getdifferences) - Returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference). Results can be limited to a specified path.
* [getFile](docs/sdk/README.md#getfile) - Returns the base-64 encoded contents of a specified file and its metadata.
* [getFolder](docs/sdk/README.md#getfolder) - Returns the contents of a specified folder in a repository.
* [getMergeCommit](docs/sdk/README.md#getmergecommit) - Returns information about a specified merge commit.
* [getMergeConflicts](docs/sdk/README.md#getmergeconflicts) - Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.
* [getMergeOptions](docs/sdk/README.md#getmergeoptions) - Returns information about the merge options available for merging two specified branches. For details about why a merge option is not available, use GetMergeConflicts or DescribeMergeConflicts.
* [getPullRequest](docs/sdk/README.md#getpullrequest) - Gets information about a pull request in a specified repository.
* [getPullRequestApprovalStates](docs/sdk/README.md#getpullrequestapprovalstates) - Gets information about the approval states for a specified pull request. Approval states only apply to pull requests that have one or more approval rules applied to them.
* [getPullRequestOverrideState](docs/sdk/README.md#getpullrequestoverridestate) - Returns information about whether approval rules have been set aside (overridden) for a pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.
* [getRepository](docs/sdk/README.md#getrepository) - <p>Returns information about a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
* [getRepositoryTriggers](docs/sdk/README.md#getrepositorytriggers) - Gets information about triggers configured for a repository.
* [listApprovalRuleTemplates](docs/sdk/README.md#listapprovalruletemplates) - Lists all approval rule templates in the specified AWS Region in your AWS account. If an AWS Region is not specified, the AWS Region where you are signed in is used.
* [listAssociatedApprovalRuleTemplatesForRepository](docs/sdk/README.md#listassociatedapprovalruletemplatesforrepository) - Lists all approval rule templates that are associated with a specified repository.
* [listBranches](docs/sdk/README.md#listbranches) - Gets information about one or more branches in a repository.
* [listPullRequests](docs/sdk/README.md#listpullrequests) - Returns a list of pull requests for a specified repository. The return list can be refined by pull request status or pull request author ARN.
* [listRepositories](docs/sdk/README.md#listrepositories) - Gets information about one or more repositories.
* [listRepositoriesForApprovalRuleTemplate](docs/sdk/README.md#listrepositoriesforapprovalruletemplate) - Lists all repositories associated with the specified approval rule template.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the<i> AWS CodeCommit User Guide</i>.
* [mergeBranchesByFastForward](docs/sdk/README.md#mergebranchesbyfastforward) - Merges two branches using the fast-forward merge strategy.
* [mergeBranchesBySquash](docs/sdk/README.md#mergebranchesbysquash) - Merges two branches using the squash merge strategy.
* [mergeBranchesByThreeWay](docs/sdk/README.md#mergebranchesbythreeway) - Merges two specified branches using the three-way merge strategy.
* [mergePullRequestByFastForward](docs/sdk/README.md#mergepullrequestbyfastforward) - Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the fast-forward merge strategy. If the merge is successful, it closes the pull request.
* [mergePullRequestBySquash](docs/sdk/README.md#mergepullrequestbysquash) - Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the squash merge strategy. If the merge is successful, it closes the pull request.
* [mergePullRequestByThreeWay](docs/sdk/README.md#mergepullrequestbythreeway) - Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the three-way merge strategy. If the merge is successful, it closes the pull request.
* [overridePullRequestApprovalRules](docs/sdk/README.md#overridepullrequestapprovalrules) - Sets aside (overrides) all approval rule requirements for a specified pull request.
* [postCommentForComparedCommit](docs/sdk/README.md#postcommentforcomparedcommit) - Posts a comment on the comparison between two commits.
* [postCommentForPullRequest](docs/sdk/README.md#postcommentforpullrequest) - Posts a comment on a pull request.
* [postCommentReply](docs/sdk/README.md#postcommentreply) - Posts a comment in reply to an existing comment on a comparison between commits or a pull request.
* [putCommentReaction](docs/sdk/README.md#putcommentreaction) - Adds or updates a reaction to a specified comment for the user whose identity is used to make the request. You can only add or update a reaction for yourself. You cannot add, modify, or delete a reaction for another user.
* [putFile](docs/sdk/README.md#putfile) - Adds or updates a file in a branch in an AWS CodeCommit repository, and generates a commit for the addition in the specified branch.
* [putRepositoryTriggers](docs/sdk/README.md#putrepositorytriggers) - Replaces all triggers for a repository. Used to create or delete triggers.
* [tagResource](docs/sdk/README.md#tagresource) - Adds or updates tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.
* [testRepositoryTriggers](docs/sdk/README.md#testrepositorytriggers) - Tests the functionality of repository triggers by sending information to the trigger target. If real data is available in the repository, the test sends data from the last commit. If no data is available, sample data is generated.
* [untagResource](docs/sdk/README.md#untagresource) - Removes tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.
* [updateApprovalRuleTemplateContent](docs/sdk/README.md#updateapprovalruletemplatecontent) - Updates the content of an approval rule template. You can change the number of required approvals, the membership of the approval rule, and whether an approval pool is defined.
* [updateApprovalRuleTemplateDescription](docs/sdk/README.md#updateapprovalruletemplatedescription) - Updates the description for a specified approval rule template.
* [updateApprovalRuleTemplateName](docs/sdk/README.md#updateapprovalruletemplatename) - Updates the name of a specified approval rule template.
* [updateComment](docs/sdk/README.md#updatecomment) - Replaces the contents of a comment.
* [updateDefaultBranch](docs/sdk/README.md#updatedefaultbranch) - <p>Sets or changes the default branch name for the specified repository.</p> <note> <p>If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.</p> </note>
* [updatePullRequestApprovalRuleContent](docs/sdk/README.md#updatepullrequestapprovalrulecontent) - Updates the structure of an approval rule created specifically for a pull request. For example, you can change the number of required approvers and the approval pool for approvers. 
* [updatePullRequestApprovalState](docs/sdk/README.md#updatepullrequestapprovalstate) - Updates the state of a user's approval on a pull request. The user is derived from the signed-in account when the request is made.
* [updatePullRequestDescription](docs/sdk/README.md#updatepullrequestdescription) - Replaces the contents of the description of a pull request.
* [updatePullRequestStatus](docs/sdk/README.md#updatepullrequeststatus) - Updates the status of a pull request. 
* [updatePullRequestTitle](docs/sdk/README.md#updatepullrequesttitle) - Replaces the title of a pull request.
* [updateRepositoryDescription](docs/sdk/README.md#updaterepositorydescription) - <p>Sets or changes the comment or description for a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
* [updateRepositoryName](docs/sdk/README.md#updaterepositoryname) - Renames a repository. The repository name must be unique across the calling AWS account. Repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. The suffix .git is prohibited. For more information about the limits on repository names, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Limits</a> in the AWS CodeCommit User Guide.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
