# SDK

## Overview

<fullname>AWS CodeCommit</fullname> <p>This is the <i>AWS CodeCommit API Reference</i>. This reference provides descriptions of the operations and data types for AWS CodeCommit API along with usage examples.</p> <p>You can use the AWS CodeCommit API to work with the following objects:</p> <p>Repositories, by calling the following:</p> <ul> <li> <p> <a>BatchGetRepositories</a>, which returns information about one or more repositories associated with your AWS account.</p> </li> <li> <p> <a>CreateRepository</a>, which creates an AWS CodeCommit repository.</p> </li> <li> <p> <a>DeleteRepository</a>, which deletes an AWS CodeCommit repository.</p> </li> <li> <p> <a>GetRepository</a>, which returns information about a specified repository.</p> </li> <li> <p> <a>ListRepositories</a>, which lists all AWS CodeCommit repositories associated with your AWS account.</p> </li> <li> <p> <a>UpdateRepositoryDescription</a>, which sets or updates the description of the repository.</p> </li> <li> <p> <a>UpdateRepositoryName</a>, which changes the name of the repository. If you change the name of a repository, no other users of that repository can access it until you send them the new HTTPS or SSH URL to use.</p> </li> </ul> <p>Branches, by calling the following:</p> <ul> <li> <p> <a>CreateBranch</a>, which creates a branch in a specified repository.</p> </li> <li> <p> <a>DeleteBranch</a>, which deletes the specified branch in a repository unless it is the default branch.</p> </li> <li> <p> <a>GetBranch</a>, which returns information about a specified branch.</p> </li> <li> <p> <a>ListBranches</a>, which lists all branches for a specified repository.</p> </li> <li> <p> <a>UpdateDefaultBranch</a>, which changes the default branch for a repository.</p> </li> </ul> <p>Files, by calling the following:</p> <ul> <li> <p> <a>DeleteFile</a>, which deletes the content of a specified file from a specified branch.</p> </li> <li> <p> <a>GetBlob</a>, which returns the base-64 encoded content of an individual Git blob object in a repository.</p> </li> <li> <p> <a>GetFile</a>, which returns the base-64 encoded content of a specified file.</p> </li> <li> <p> <a>GetFolder</a>, which returns the contents of a specified folder or directory.</p> </li> <li> <p> <a>PutFile</a>, which adds or modifies a single file in a specified repository and branch.</p> </li> </ul> <p>Commits, by calling the following:</p> <ul> <li> <p> <a>BatchGetCommits</a>, which returns information about one or more commits in a repository.</p> </li> <li> <p> <a>CreateCommit</a>, which creates a commit for changes to a repository.</p> </li> <li> <p> <a>GetCommit</a>, which returns information about a commit, including commit messages and author and committer information.</p> </li> <li> <p> <a>GetDifferences</a>, which returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference).</p> </li> </ul> <p>Merges, by calling the following:</p> <ul> <li> <p> <a>BatchDescribeMergeConflicts</a>, which returns information about conflicts in a merge between commits in a repository.</p> </li> <li> <p> <a>CreateUnreferencedMergeCommit</a>, which creates an unreferenced commit between two branches or commits for the purpose of comparing them and identifying any potential conflicts.</p> </li> <li> <p> <a>DescribeMergeConflicts</a>, which returns information about merge conflicts between the base, source, and destination versions of a file in a potential merge.</p> </li> <li> <p> <a>GetMergeCommit</a>, which returns information about the merge between a source and destination commit. </p> </li> <li> <p> <a>GetMergeConflicts</a>, which returns information about merge conflicts between the source and destination branch in a pull request.</p> </li> <li> <p> <a>GetMergeOptions</a>, which returns information about the available merge options between two branches or commit specifiers.</p> </li> <li> <p> <a>MergeBranchesByFastForward</a>, which merges two branches using the fast-forward merge option.</p> </li> <li> <p> <a>MergeBranchesBySquash</a>, which merges two branches using the squash merge option.</p> </li> <li> <p> <a>MergeBranchesByThreeWay</a>, which merges two branches using the three-way merge option.</p> </li> </ul> <p>Pull requests, by calling the following:</p> <ul> <li> <p> <a>CreatePullRequest</a>, which creates a pull request in a specified repository.</p> </li> <li> <p> <a>CreatePullRequestApprovalRule</a>, which creates an approval rule for a specified pull request.</p> </li> <li> <p> <a>DeletePullRequestApprovalRule</a>, which deletes an approval rule for a specified pull request.</p> </li> <li> <p> <a>DescribePullRequestEvents</a>, which returns information about one or more pull request events.</p> </li> <li> <p> <a>EvaluatePullRequestApprovalRules</a>, which evaluates whether a pull request has met all the conditions specified in its associated approval rules.</p> </li> <li> <p> <a>GetCommentsForPullRequest</a>, which returns information about comments on a specified pull request.</p> </li> <li> <p> <a>GetPullRequest</a>, which returns information about a specified pull request.</p> </li> <li> <p> <a>GetPullRequestApprovalStates</a>, which returns information about the approval states for a specified pull request.</p> </li> <li> <p> <a>GetPullRequestOverrideState</a>, which returns information about whether approval rules have been set aside (overriden) for a pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.</p> </li> <li> <p> <a>ListPullRequests</a>, which lists all pull requests for a repository.</p> </li> <li> <p> <a>MergePullRequestByFastForward</a>, which merges the source destination branch of a pull request into the specified destination branch for that pull request using the fast-forward merge option.</p> </li> <li> <p> <a>MergePullRequestBySquash</a>, which merges the source destination branch of a pull request into the specified destination branch for that pull request using the squash merge option.</p> </li> <li> <p> <a>MergePullRequestByThreeWay</a>. which merges the source destination branch of a pull request into the specified destination branch for that pull request using the three-way merge option.</p> </li> <li> <p> <a>OverridePullRequestApprovalRules</a>, which sets aside all approval rule requirements for a pull request.</p> </li> <li> <p> <a>PostCommentForPullRequest</a>, which posts a comment to a pull request at the specified line, file, or request.</p> </li> <li> <p> <a>UpdatePullRequestApprovalRuleContent</a>, which updates the structure of an approval rule for a pull request.</p> </li> <li> <p> <a>UpdatePullRequestApprovalState</a>, which updates the state of an approval on a pull request.</p> </li> <li> <p> <a>UpdatePullRequestDescription</a>, which updates the description of a pull request.</p> </li> <li> <p> <a>UpdatePullRequestStatus</a>, which updates the status of a pull request.</p> </li> <li> <p> <a>UpdatePullRequestTitle</a>, which updates the title of a pull request.</p> </li> </ul> <p>Approval rule templates, by calling the following:</p> <ul> <li> <p> <a>AssociateApprovalRuleTemplateWithRepository</a>, which associates a template with a specified repository. After the template is associated with a repository, AWS CodeCommit creates approval rules that match the template conditions on every pull request created in the specified repository.</p> </li> <li> <p> <a>BatchAssociateApprovalRuleTemplateWithRepositories</a>, which associates a template with one or more specified repositories. After the template is associated with a repository, AWS CodeCommit creates approval rules that match the template conditions on every pull request created in the specified repositories.</p> </li> <li> <p> <a>BatchDisassociateApprovalRuleTemplateFromRepositories</a>, which removes the association between a template and specified repositories so that approval rules based on the template are not automatically created when pull requests are created in those repositories.</p> </li> <li> <p> <a>CreateApprovalRuleTemplate</a>, which creates a template for approval rules that can then be associated with one or more repositories in your AWS account.</p> </li> <li> <p> <a>DeleteApprovalRuleTemplate</a>, which deletes the specified template. It does not remove approval rules on pull requests already created with the template.</p> </li> <li> <p> <a>DisassociateApprovalRuleTemplateFromRepository</a>, which removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository.</p> </li> <li> <p> <a>GetApprovalRuleTemplate</a>, which returns information about an approval rule template.</p> </li> <li> <p> <a>ListApprovalRuleTemplates</a>, which lists all approval rule templates in the AWS Region in your AWS account.</p> </li> <li> <p> <a>ListAssociatedApprovalRuleTemplatesForRepository</a>, which lists all approval rule templates that are associated with a specified repository.</p> </li> <li> <p> <a>ListRepositoriesForApprovalRuleTemplate</a>, which lists all repositories associated with the specified approval rule template.</p> </li> <li> <p> <a>UpdateApprovalRuleTemplateDescription</a>, which updates the description of an approval rule template.</p> </li> <li> <p> <a>UpdateApprovalRuleTemplateName</a>, which updates the name of an approval rule template.</p> </li> <li> <p> <a>UpdateApprovalRuleTemplateContent</a>, which updates the content of an approval rule template.</p> </li> </ul> <p>Comments in a repository, by calling the following:</p> <ul> <li> <p> <a>DeleteCommentContent</a>, which deletes the content of a comment on a commit in a repository.</p> </li> <li> <p> <a>GetComment</a>, which returns information about a comment on a commit.</p> </li> <li> <p> <a>GetCommentReactions</a>, which returns information about emoji reactions to comments.</p> </li> <li> <p> <a>GetCommentsForComparedCommit</a>, which returns information about comments on the comparison between two commit specifiers in a repository.</p> </li> <li> <p> <a>PostCommentForComparedCommit</a>, which creates a comment on the comparison between two commit specifiers in a repository.</p> </li> <li> <p> <a>PostCommentReply</a>, which creates a reply to a comment.</p> </li> <li> <p> <a>PutCommentReaction</a>, which creates or updates an emoji reaction to a comment.</p> </li> <li> <p> <a>UpdateComment</a>, which updates the content of a comment on a commit in a repository.</p> </li> </ul> <p>Tags used to tag resources in AWS CodeCommit (not Git tags), by calling the following:</p> <ul> <li> <p> <a>ListTagsForResource</a>, which gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeCommit.</p> </li> <li> <p> <a>TagResource</a>, which adds or updates tags for a resource in AWS CodeCommit.</p> </li> <li> <p> <a>UntagResource</a>, which removes tags for a resource in AWS CodeCommit.</p> </li> </ul> <p>Triggers, by calling the following:</p> <ul> <li> <p> <a>GetRepositoryTriggers</a>, which returns information about triggers configured for a repository.</p> </li> <li> <p> <a>PutRepositoryTriggers</a>, which replaces all triggers for a repository and can be used to create or delete triggers.</p> </li> <li> <p> <a>TestRepositoryTriggers</a>, which tests the functionality of a repository trigger by sending data to the trigger target.</p> </li> </ul> <p>For information about how to use AWS CodeCommit, see the <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/codecommit/>
### Available Operations

* [associateApprovalRuleTemplateWithRepository](#associateapprovalruletemplatewithrepository) - Creates an association between an approval rule template and a specified repository. Then, the next time a pull request is created in the repository where the destination reference (if specified) matches the destination reference (branch) for the pull request, an approval rule that matches the template conditions is automatically created for that pull request. If no destination references are specified in the template, an approval rule that matches the template contents is created for all pull requests in that repository.
* [batchAssociateApprovalRuleTemplateWithRepositories](#batchassociateapprovalruletemplatewithrepositories) - Creates an association between an approval rule template and one or more specified repositories. 
* [batchDescribeMergeConflicts](#batchdescribemergeconflicts) - Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy.
* [batchDisassociateApprovalRuleTemplateFromRepositories](#batchdisassociateapprovalruletemplatefromrepositories) - Removes the association between an approval rule template and one or more specified repositories. 
* [batchGetCommits](#batchgetcommits) - Returns information about the contents of one or more commits in a repository.
* [batchGetRepositories](#batchgetrepositories) - <p>Returns information about one or more repositories.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
* [createApprovalRuleTemplate](#createapprovalruletemplate) - Creates a template for approval rules that can then be associated with one or more repositories in your AWS account. When you associate a template with a repository, AWS CodeCommit creates an approval rule that matches the conditions of the template for all pull requests that meet the conditions of the template. For more information, see <a>AssociateApprovalRuleTemplateWithRepository</a>.
* [createBranch](#createbranch) - <p>Creates a branch in a repository and points the branch to a commit.</p> <note> <p>Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.</p> </note>
* [createCommit](#createcommit) - Creates a commit for a repository on the tip of a specified branch.
* [createPullRequest](#createpullrequest) - Creates a pull request in the specified repository.
* [createPullRequestApprovalRule](#createpullrequestapprovalrule) - Creates an approval rule for a pull request.
* [createRepository](#createrepository) - Creates a new, empty repository.
* [createUnreferencedMergeCommit](#createunreferencedmergecommit) - <p>Creates an unreferenced commit that represents the result of merging two branches using a specified merge strategy. This can help you determine the outcome of a potential merge. This API cannot be used with the fast-forward merge strategy because that strategy does not create a merge commit.</p> <note> <p>This unreferenced merge commit can only be accessed using the GetCommit API or through git commands such as git fetch. To retrieve this commit, you must specify its commit ID or otherwise reference it.</p> </note>
* [deleteApprovalRuleTemplate](#deleteapprovalruletemplate) - Deletes a specified approval rule template. Deleting a template does not remove approval rules on pull requests already created with the template.
* [deleteBranch](#deletebranch) - Deletes a branch from a repository, unless that branch is the default branch for the repository. 
* [deleteCommentContent](#deletecommentcontent) - Deletes the content of a comment made on a change, file, or commit in a repository.
* [deleteFile](#deletefile) - Deletes a specified file from a specified branch. A commit is created on the branch that contains the revision. The file still exists in the commits earlier to the commit that contains the deletion.
* [deletePullRequestApprovalRule](#deletepullrequestapprovalrule) - Deletes an approval rule from a specified pull request. Approval rules can be deleted from a pull request only if the pull request is open, and if the approval rule was created specifically for a pull request and not generated from an approval rule template associated with the repository where the pull request was created. You cannot delete an approval rule from a merged or closed pull request.
* [deleteRepository](#deleterepository) - <p>Deletes a repository. If a specified repository was already deleted, a null repository ID is returned.</p> <important> <p>Deleting a repository also deletes all associated objects and metadata. After a repository is deleted, all future push calls to the deleted repository fail.</p> </important>
* [describeMergeConflicts](#describemergeconflicts) - Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy. If the merge option for the attempted merge is specified as FAST_FORWARD_MERGE, an exception is thrown.
* [describePullRequestEvents](#describepullrequestevents) - Returns information about one or more pull request events.
* [disassociateApprovalRuleTemplateFromRepository](#disassociateapprovalruletemplatefromrepository) - Removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository. This does not delete any approval rules previously created for pull requests through the template association.
* [evaluatePullRequestApprovalRules](#evaluatepullrequestapprovalrules) - Evaluates whether a pull request has met all the conditions specified in its associated approval rules.
* [getApprovalRuleTemplate](#getapprovalruletemplate) - Returns information about a specified approval rule template.
* [getBlob](#getblob) - Returns the base-64 encoded content of an individual blob in a repository.
* [getBranch](#getbranch) - Returns information about a repository branch, including its name and the last commit ID.
* [getComment](#getcomment) - <p>Returns the content of a comment made on a change, file, or commit in a repository. </p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>
* [getCommentReactions](#getcommentreactions) - Returns information about reactions to a specified comment ID. Reactions from users who have been deleted will not be included in the count.
* [getCommentsForComparedCommit](#getcommentsforcomparedcommit) - <p>Returns information about comments made on the comparison between two commits.</p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>
* [getCommentsForPullRequest](#getcommentsforpullrequest) - <p>Returns comments made on a pull request.</p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>
* [getCommit](#getcommit) - Returns information about a commit, including commit message and committer information.
* [getDifferences](#getdifferences) - Returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference). Results can be limited to a specified path.
* [getFile](#getfile) - Returns the base-64 encoded contents of a specified file and its metadata.
* [getFolder](#getfolder) - Returns the contents of a specified folder in a repository.
* [getMergeCommit](#getmergecommit) - Returns information about a specified merge commit.
* [getMergeConflicts](#getmergeconflicts) - Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.
* [getMergeOptions](#getmergeoptions) - Returns information about the merge options available for merging two specified branches. For details about why a merge option is not available, use GetMergeConflicts or DescribeMergeConflicts.
* [getPullRequest](#getpullrequest) - Gets information about a pull request in a specified repository.
* [getPullRequestApprovalStates](#getpullrequestapprovalstates) - Gets information about the approval states for a specified pull request. Approval states only apply to pull requests that have one or more approval rules applied to them.
* [getPullRequestOverrideState](#getpullrequestoverridestate) - Returns information about whether approval rules have been set aside (overridden) for a pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.
* [getRepository](#getrepository) - <p>Returns information about a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
* [getRepositoryTriggers](#getrepositorytriggers) - Gets information about triggers configured for a repository.
* [listApprovalRuleTemplates](#listapprovalruletemplates) - Lists all approval rule templates in the specified AWS Region in your AWS account. If an AWS Region is not specified, the AWS Region where you are signed in is used.
* [listAssociatedApprovalRuleTemplatesForRepository](#listassociatedapprovalruletemplatesforrepository) - Lists all approval rule templates that are associated with a specified repository.
* [listBranches](#listbranches) - Gets information about one or more branches in a repository.
* [listPullRequests](#listpullrequests) - Returns a list of pull requests for a specified repository. The return list can be refined by pull request status or pull request author ARN.
* [listRepositories](#listrepositories) - Gets information about one or more repositories.
* [listRepositoriesForApprovalRuleTemplate](#listrepositoriesforapprovalruletemplate) - Lists all repositories associated with the specified approval rule template.
* [listTagsForResource](#listtagsforresource) - Gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the<i> AWS CodeCommit User Guide</i>.
* [mergeBranchesByFastForward](#mergebranchesbyfastforward) - Merges two branches using the fast-forward merge strategy.
* [mergeBranchesBySquash](#mergebranchesbysquash) - Merges two branches using the squash merge strategy.
* [mergeBranchesByThreeWay](#mergebranchesbythreeway) - Merges two specified branches using the three-way merge strategy.
* [mergePullRequestByFastForward](#mergepullrequestbyfastforward) - Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the fast-forward merge strategy. If the merge is successful, it closes the pull request.
* [mergePullRequestBySquash](#mergepullrequestbysquash) - Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the squash merge strategy. If the merge is successful, it closes the pull request.
* [mergePullRequestByThreeWay](#mergepullrequestbythreeway) - Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the three-way merge strategy. If the merge is successful, it closes the pull request.
* [overridePullRequestApprovalRules](#overridepullrequestapprovalrules) - Sets aside (overrides) all approval rule requirements for a specified pull request.
* [postCommentForComparedCommit](#postcommentforcomparedcommit) - Posts a comment on the comparison between two commits.
* [postCommentForPullRequest](#postcommentforpullrequest) - Posts a comment on a pull request.
* [postCommentReply](#postcommentreply) - Posts a comment in reply to an existing comment on a comparison between commits or a pull request.
* [putCommentReaction](#putcommentreaction) - Adds or updates a reaction to a specified comment for the user whose identity is used to make the request. You can only add or update a reaction for yourself. You cannot add, modify, or delete a reaction for another user.
* [putFile](#putfile) - Adds or updates a file in a branch in an AWS CodeCommit repository, and generates a commit for the addition in the specified branch.
* [putRepositoryTriggers](#putrepositorytriggers) - Replaces all triggers for a repository. Used to create or delete triggers.
* [tagResource](#tagresource) - Adds or updates tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.
* [testRepositoryTriggers](#testrepositorytriggers) - Tests the functionality of repository triggers by sending information to the trigger target. If real data is available in the repository, the test sends data from the last commit. If no data is available, sample data is generated.
* [untagResource](#untagresource) - Removes tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.
* [updateApprovalRuleTemplateContent](#updateapprovalruletemplatecontent) - Updates the content of an approval rule template. You can change the number of required approvals, the membership of the approval rule, and whether an approval pool is defined.
* [updateApprovalRuleTemplateDescription](#updateapprovalruletemplatedescription) - Updates the description for a specified approval rule template.
* [updateApprovalRuleTemplateName](#updateapprovalruletemplatename) - Updates the name of a specified approval rule template.
* [updateComment](#updatecomment) - Replaces the contents of a comment.
* [updateDefaultBranch](#updatedefaultbranch) - <p>Sets or changes the default branch name for the specified repository.</p> <note> <p>If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.</p> </note>
* [updatePullRequestApprovalRuleContent](#updatepullrequestapprovalrulecontent) - Updates the structure of an approval rule created specifically for a pull request. For example, you can change the number of required approvers and the approval pool for approvers. 
* [updatePullRequestApprovalState](#updatepullrequestapprovalstate) - Updates the state of a user's approval on a pull request. The user is derived from the signed-in account when the request is made.
* [updatePullRequestDescription](#updatepullrequestdescription) - Replaces the contents of the description of a pull request.
* [updatePullRequestStatus](#updatepullrequeststatus) - Updates the status of a pull request. 
* [updatePullRequestTitle](#updatepullrequesttitle) - Replaces the title of a pull request.
* [updateRepositoryDescription](#updaterepositorydescription) - <p>Sets or changes the comment or description for a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
* [updateRepositoryName](#updaterepositoryname) - Renames a repository. The repository name must be unique across the calling AWS account. Repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. The suffix .git is prohibited. For more information about the limits on repository names, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Limits</a> in the AWS CodeCommit User Guide.

## associateApprovalRuleTemplateWithRepository

Creates an association between an approval rule template and a specified repository. Then, the next time a pull request is created in the repository where the destination reference (if specified) matches the destination reference (branch) for the pull request, an approval rule that matches the template conditions is automatically created for that pull request. If no destination references are specified in the template, an approval rule that matches the template contents is created for all pull requests in that repository.

### Example Usage

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
    $request->associateApprovalRuleTemplateWithRepositoryInput->approvalRuleTemplateName = 'error';
    $request->associateApprovalRuleTemplateWithRepositoryInput->repositoryName = 'deserunt';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = AssociateApprovalRuleTemplateWithRepositoryXAmzTargetEnum::CODE_COMMIT20150413_ASSOCIATE_APPROVAL_RULE_TEMPLATE_WITH_REPOSITORY;

    $response = $sdk->sdk->associateApprovalRuleTemplateWithRepository($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchAssociateApprovalRuleTemplateWithRepositories

Creates an association between an approval rule template and one or more specified repositories. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchAssociateApprovalRuleTemplateWithRepositoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchAssociateApprovalRuleTemplateWithRepositoriesInput;
use \OpenAPI\OpenAPI\Models\Operations\BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchAssociateApprovalRuleTemplateWithRepositoriesRequest();
    $request->batchAssociateApprovalRuleTemplateWithRepositoriesInput = new BatchAssociateApprovalRuleTemplateWithRepositoriesInput();
    $request->batchAssociateApprovalRuleTemplateWithRepositoriesInput->approvalRuleTemplateName = 'suscipit';
    $request->batchAssociateApprovalRuleTemplateWithRepositoriesInput->repositoryNames = [
        'minus',
        'placeat',
    ];
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmzTarget = BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum::CODE_COMMIT20150413_BATCH_ASSOCIATE_APPROVAL_RULE_TEMPLATE_WITH_REPOSITORIES;

    $response = $sdk->sdk->batchAssociateApprovalRuleTemplateWithRepositories($request);

    if ($response->batchAssociateApprovalRuleTemplateWithRepositoriesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDescribeMergeConflicts

Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDescribeMergeConflictsRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchDescribeMergeConflictsInput;
use \OpenAPI\OpenAPI\Models\Shared\ConflictDetailLevelTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConflictResolutionStrategyTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\MergeOptionTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchDescribeMergeConflictsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDescribeMergeConflictsRequest();
    $request->batchDescribeMergeConflictsInput = new BatchDescribeMergeConflictsInput();
    $request->batchDescribeMergeConflictsInput->conflictDetailLevel = ConflictDetailLevelTypeEnumEnum::FILE_LEVEL;
    $request->batchDescribeMergeConflictsInput->conflictResolutionStrategy = ConflictResolutionStrategyTypeEnumEnum::NONE;
    $request->batchDescribeMergeConflictsInput->destinationCommitSpecifier = 'deserunt';
    $request->batchDescribeMergeConflictsInput->filePaths = [
        'ipsam',
    ];
    $request->batchDescribeMergeConflictsInput->maxConflictFiles = 832620;
    $request->batchDescribeMergeConflictsInput->maxMergeHunks = 957156;
    $request->batchDescribeMergeConflictsInput->mergeOption = MergeOptionTypeEnumEnum::THREE_WAY_MERGE;
    $request->batchDescribeMergeConflictsInput->nextToken = 'odit';
    $request->batchDescribeMergeConflictsInput->repositoryName = 'at';
    $request->batchDescribeMergeConflictsInput->sourceCommitSpecifier = 'at';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'porro';
    $request->xAmzTarget = BatchDescribeMergeConflictsXAmzTargetEnum::CODE_COMMIT20150413_BATCH_DESCRIBE_MERGE_CONFLICTS;

    $response = $sdk->sdk->batchDescribeMergeConflicts($request);

    if ($response->batchDescribeMergeConflictsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDisassociateApprovalRuleTemplateFromRepositories

Removes the association between an approval rule template and one or more specified repositories. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDisassociateApprovalRuleTemplateFromRepositoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchDisassociateApprovalRuleTemplateFromRepositoriesInput;
use \OpenAPI\OpenAPI\Models\Operations\BatchDisassociateApprovalRuleTemplateFromRepositoriesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDisassociateApprovalRuleTemplateFromRepositoriesRequest();
    $request->batchDisassociateApprovalRuleTemplateFromRepositoriesInput = new BatchDisassociateApprovalRuleTemplateFromRepositoriesInput();
    $request->batchDisassociateApprovalRuleTemplateFromRepositoriesInput->approvalRuleTemplateName = 'dolorum';
    $request->batchDisassociateApprovalRuleTemplateFromRepositoriesInput->repositoryNames = [
        'nam',
    ];
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = BatchDisassociateApprovalRuleTemplateFromRepositoriesXAmzTargetEnum::CODE_COMMIT20150413_BATCH_DISASSOCIATE_APPROVAL_RULE_TEMPLATE_FROM_REPOSITORIES;

    $response = $sdk->sdk->batchDisassociateApprovalRuleTemplateFromRepositories($request);

    if ($response->batchDisassociateApprovalRuleTemplateFromRepositoriesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetCommits

Returns information about the contents of one or more commits in a repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetCommitsRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetCommitsInput;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetCommitsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetCommitsRequest();
    $request->batchGetCommitsInput = new BatchGetCommitsInput();
    $request->batchGetCommitsInput->commitIds = [
        'commodi',
    ];
    $request->batchGetCommitsInput->repositoryName = 'molestiae';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = BatchGetCommitsXAmzTargetEnum::CODE_COMMIT20150413_BATCH_GET_COMMITS;

    $response = $sdk->sdk->batchGetCommits($request);

    if ($response->batchGetCommitsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetRepositories

<p>Returns information about one or more repositories.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetRepositoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetRepositoriesInput;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetRepositoriesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetRepositoriesRequest();
    $request->batchGetRepositoriesInput = new BatchGetRepositoriesInput();
    $request->batchGetRepositoriesInput->repositoryNames = [
        'perferendis',
    ];
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'laboriosam';
    $request->xAmzTarget = BatchGetRepositoriesXAmzTargetEnum::CODE_COMMIT20150413_BATCH_GET_REPOSITORIES;

    $response = $sdk->sdk->batchGetRepositories($request);

    if ($response->batchGetRepositoriesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createApprovalRuleTemplate

Creates a template for approval rules that can then be associated with one or more repositories in your AWS account. When you associate a template with a repository, AWS CodeCommit creates an approval rule that matches the conditions of the template for all pull requests that meet the conditions of the template. For more information, see <a>AssociateApprovalRuleTemplateWithRepository</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateApprovalRuleTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateApprovalRuleTemplateInput;
use \OpenAPI\OpenAPI\Models\Operations\CreateApprovalRuleTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApprovalRuleTemplateRequest();
    $request->createApprovalRuleTemplateInput = new CreateApprovalRuleTemplateInput();
    $request->createApprovalRuleTemplateInput->approvalRuleTemplateContent = 'hic';
    $request->createApprovalRuleTemplateInput->approvalRuleTemplateDescription = 'saepe';
    $request->createApprovalRuleTemplateInput->approvalRuleTemplateName = 'fuga';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = CreateApprovalRuleTemplateXAmzTargetEnum::CODE_COMMIT20150413_CREATE_APPROVAL_RULE_TEMPLATE;

    $response = $sdk->sdk->createApprovalRuleTemplate($request);

    if ($response->createApprovalRuleTemplateOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBranch

<p>Creates a branch in a repository and points the branch to a commit.</p> <note> <p>Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBranchRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateBranchInput;
use \OpenAPI\OpenAPI\Models\Operations\CreateBranchXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBranchRequest();
    $request->createBranchInput = new CreateBranchInput();
    $request->createBranchInput->branchName = 'ipsa';
    $request->createBranchInput->commitId = 'reiciendis';
    $request->createBranchInput->repositoryName = 'est';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = CreateBranchXAmzTargetEnum::CODE_COMMIT20150413_CREATE_BRANCH;

    $response = $sdk->sdk->createBranch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCommit

Creates a commit for a repository on the tip of a specified branch.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCommitRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCommitInput;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFileEntry;
use \OpenAPI\OpenAPI\Models\Shared\PutFileEntry;
use \OpenAPI\OpenAPI\Models\Shared\FileModeTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceFileSpecifier;
use \OpenAPI\OpenAPI\Models\Shared\SetFileModeEntry;
use \OpenAPI\OpenAPI\Models\Operations\CreateCommitXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCommitRequest();
    $request->createCommitInput = new CreateCommitInput();
    $request->createCommitInput->authorName = 'enim';
    $request->createCommitInput->branchName = 'omnis';
    $request->createCommitInput->commitMessage = 'nemo';
    $request->createCommitInput->deleteFiles = [
        new DeleteFileEntry(),
        new DeleteFileEntry(),
    ];
    $request->createCommitInput->email = 'Alisa_Kessler@yahoo.com';
    $request->createCommitInput->keepEmptyFolders = false;
    $request->createCommitInput->parentCommitId = 'sapiente';
    $request->createCommitInput->putFiles = [
        new PutFileEntry(),
    ];
    $request->createCommitInput->repositoryName = 'mollitia';
    $request->createCommitInput->setFileModes = [
        new SetFileModeEntry(),
    ];
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = CreateCommitXAmzTargetEnum::CODE_COMMIT20150413_CREATE_COMMIT;

    $response = $sdk->sdk->createCommit($request);

    if ($response->createCommitOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPullRequest

Creates a pull request in the specified repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePullRequestRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePullRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Operations\CreatePullRequestXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePullRequestRequest();
    $request->createPullRequestInput = new CreatePullRequestInput();
    $request->createPullRequestInput->clientRequestToken = 'quam';
    $request->createPullRequestInput->description = 'molestiae';
    $request->createPullRequestInput->targets = [
        new Target(),
    ];
    $request->createPullRequestInput->title = 'Miss';
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';
    $request->xAmzTarget = CreatePullRequestXAmzTargetEnum::CODE_COMMIT20150413_CREATE_PULL_REQUEST;

    $response = $sdk->sdk->createPullRequest($request);

    if ($response->createPullRequestOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPullRequestApprovalRule

Creates an approval rule for a pull request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePullRequestApprovalRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePullRequestApprovalRuleInput;
use \OpenAPI\OpenAPI\Models\Operations\CreatePullRequestApprovalRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePullRequestApprovalRuleRequest();
    $request->createPullRequestApprovalRuleInput = new CreatePullRequestApprovalRuleInput();
    $request->createPullRequestApprovalRuleInput->approvalRuleContent = 'quo';
    $request->createPullRequestApprovalRuleInput->approvalRuleName = 'sequi';
    $request->createPullRequestApprovalRuleInput->pullRequestId = 'tenetur';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'temporibus';
    $request->xAmzTarget = CreatePullRequestApprovalRuleXAmzTargetEnum::CODE_COMMIT20150413_CREATE_PULL_REQUEST_APPROVAL_RULE;

    $response = $sdk->sdk->createPullRequestApprovalRule($request);

    if ($response->createPullRequestApprovalRuleOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRepository

Creates a new, empty repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRepositoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateRepositoryInput;
use \OpenAPI\OpenAPI\Models\Operations\CreateRepositoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRepositoryRequest();
    $request->createRepositoryInput = new CreateRepositoryInput();
    $request->createRepositoryInput->repositoryDescription = 'laborum';
    $request->createRepositoryInput->repositoryName = 'quasi';
    $request->createRepositoryInput->tags = [
        'voluptatibus' => 'vero',
        'nihil' => 'praesentium',
        'voluptatibus' => 'ipsa',
        'omnis' => 'voluptate',
    ];
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'doloremque';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = CreateRepositoryXAmzTargetEnum::CODE_COMMIT20150413_CREATE_REPOSITORY;

    $response = $sdk->sdk->createRepository($request);

    if ($response->createRepositoryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUnreferencedMergeCommit

<p>Creates an unreferenced commit that represents the result of merging two branches using a specified merge strategy. This can help you determine the outcome of a potential merge. This API cannot be used with the fast-forward merge strategy because that strategy does not create a merge commit.</p> <note> <p>This unreferenced merge commit can only be accessed using the GetCommit API or through git commands such as git fetch. To retrieve this commit, you must specify its commit ID or otherwise reference it.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUnreferencedMergeCommitRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateUnreferencedMergeCommitInput;
use \OpenAPI\OpenAPI\Models\Shared\ConflictDetailLevelTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConflictResolution;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFileEntry;
use \OpenAPI\OpenAPI\Models\Shared\ReplaceContentEntry;
use \OpenAPI\OpenAPI\Models\Shared\FileModeTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReplacementTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetFileModeEntry;
use \OpenAPI\OpenAPI\Models\Shared\ConflictResolutionStrategyTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\MergeOptionTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateUnreferencedMergeCommitXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUnreferencedMergeCommitRequest();
    $request->createUnreferencedMergeCommitInput = new CreateUnreferencedMergeCommitInput();
    $request->createUnreferencedMergeCommitInput->authorName = 'corporis';
    $request->createUnreferencedMergeCommitInput->commitMessage = 'dolore';
    $request->createUnreferencedMergeCommitInput->conflictDetailLevel = ConflictDetailLevelTypeEnumEnum::FILE_LEVEL;
    $request->createUnreferencedMergeCommitInput->conflictResolution = new ConflictResolution();
    $request->createUnreferencedMergeCommitInput->conflictResolution->deleteFiles = [
        new DeleteFileEntry(),
    ];
    $request->createUnreferencedMergeCommitInput->conflictResolution->replaceContents = [
        new ReplaceContentEntry(),
        new ReplaceContentEntry(),
        new ReplaceContentEntry(),
    ];
    $request->createUnreferencedMergeCommitInput->conflictResolution->setFileModes = [
        new SetFileModeEntry(),
        new SetFileModeEntry(),
    ];
    $request->createUnreferencedMergeCommitInput->conflictResolutionStrategy = ConflictResolutionStrategyTypeEnumEnum::AUTOMERGE;
    $request->createUnreferencedMergeCommitInput->destinationCommitSpecifier = 'commodi';
    $request->createUnreferencedMergeCommitInput->email = 'Anissa_Emmerich56@hotmail.com';
    $request->createUnreferencedMergeCommitInput->keepEmptyFolders = false;
    $request->createUnreferencedMergeCommitInput->mergeOption = MergeOptionTypeEnumEnum::THREE_WAY_MERGE;
    $request->createUnreferencedMergeCommitInput->repositoryName = 'modi';
    $request->createUnreferencedMergeCommitInput->sourceCommitSpecifier = 'praesentium';
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'voluptates';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'itaque';
    $request->xAmzTarget = CreateUnreferencedMergeCommitXAmzTargetEnum::CODE_COMMIT20150413_CREATE_UNREFERENCED_MERGE_COMMIT;

    $response = $sdk->sdk->createUnreferencedMergeCommit($request);

    if ($response->createUnreferencedMergeCommitOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApprovalRuleTemplate

Deletes a specified approval rule template. Deleting a template does not remove approval rules on pull requests already created with the template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApprovalRuleTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteApprovalRuleTemplateInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApprovalRuleTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApprovalRuleTemplateRequest();
    $request->deleteApprovalRuleTemplateInput = new DeleteApprovalRuleTemplateInput();
    $request->deleteApprovalRuleTemplateInput->approvalRuleTemplateName = 'incidunt';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->xAmzTarget = DeleteApprovalRuleTemplateXAmzTargetEnum::CODE_COMMIT20150413_DELETE_APPROVAL_RULE_TEMPLATE;

    $response = $sdk->sdk->deleteApprovalRuleTemplate($request);

    if ($response->deleteApprovalRuleTemplateOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBranch

Deletes a branch from a repository, unless that branch is the default branch for the repository. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBranchRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteBranchInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBranchXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBranchRequest();
    $request->deleteBranchInput = new DeleteBranchInput();
    $request->deleteBranchInput->branchName = 'quibusdam';
    $request->deleteBranchInput->repositoryName = 'labore';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'magni';
    $request->xAmzTarget = DeleteBranchXAmzTargetEnum::CODE_COMMIT20150413_DELETE_BRANCH;

    $response = $sdk->sdk->deleteBranch($request);

    if ($response->deleteBranchOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCommentContent

Deletes the content of a comment made on a change, file, or commit in a repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCommentContentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteCommentContentInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCommentContentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCommentContentRequest();
    $request->deleteCommentContentInput = new DeleteCommentContentInput();
    $request->deleteCommentContentInput->commentId = 'assumenda';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = DeleteCommentContentXAmzTargetEnum::CODE_COMMIT20150413_DELETE_COMMENT_CONTENT;

    $response = $sdk->sdk->deleteCommentContent($request);

    if ($response->deleteCommentContentOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFile

Deletes a specified file from a specified branch. A commit is created on the branch that contains the revision. The file still exists in the commits earlier to the commit that contains the deletion.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFileRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFileInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFileRequest();
    $request->deleteFileInput = new DeleteFileInput();
    $request->deleteFileInput->branchName = 'tempore';
    $request->deleteFileInput->commitMessage = 'labore';
    $request->deleteFileInput->email = 'Horacio_Franey39@hotmail.com';
    $request->deleteFileInput->filePath = 'provident';
    $request->deleteFileInput->keepEmptyFolders = false;
    $request->deleteFileInput->name = 'Perry Nikolaus';
    $request->deleteFileInput->parentCommitId = 'a';
    $request->deleteFileInput->repositoryName = 'dolorum';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = DeleteFileXAmzTargetEnum::CODE_COMMIT20150413_DELETE_FILE;

    $response = $sdk->sdk->deleteFile($request);

    if ($response->deleteFileOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePullRequestApprovalRule

Deletes an approval rule from a specified pull request. Approval rules can be deleted from a pull request only if the pull request is open, and if the approval rule was created specifically for a pull request and not generated from an approval rule template associated with the repository where the pull request was created. You cannot delete an approval rule from a merged or closed pull request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePullRequestApprovalRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeletePullRequestApprovalRuleInput;
use \OpenAPI\OpenAPI\Models\Operations\DeletePullRequestApprovalRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePullRequestApprovalRuleRequest();
    $request->deletePullRequestApprovalRuleInput = new DeletePullRequestApprovalRuleInput();
    $request->deletePullRequestApprovalRuleInput->approvalRuleName = 'cumque';
    $request->deletePullRequestApprovalRuleInput->pullRequestId = 'facere';
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = DeletePullRequestApprovalRuleXAmzTargetEnum::CODE_COMMIT20150413_DELETE_PULL_REQUEST_APPROVAL_RULE;

    $response = $sdk->sdk->deletePullRequestApprovalRule($request);

    if ($response->deletePullRequestApprovalRuleOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRepository

<p>Deletes a repository. If a specified repository was already deleted, a null repository ID is returned.</p> <important> <p>Deleting a repository also deletes all associated objects and metadata. After a repository is deleted, all future push calls to the deleted repository fail.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRepositoryInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoryRequest();
    $request->deleteRepositoryInput = new DeleteRepositoryInput();
    $request->deleteRepositoryInput->repositoryName = 'accusamus';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = DeleteRepositoryXAmzTargetEnum::CODE_COMMIT20150413_DELETE_REPOSITORY;

    $response = $sdk->sdk->deleteRepository($request);

    if ($response->deleteRepositoryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMergeConflicts

Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy. If the merge option for the attempted merge is specified as FAST_FORWARD_MERGE, an exception is thrown.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMergeConflictsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeMergeConflictsInput;
use \OpenAPI\OpenAPI\Models\Shared\ConflictDetailLevelTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConflictResolutionStrategyTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\MergeOptionTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMergeConflictsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMergeConflictsRequest();
    $request->describeMergeConflictsInput = new DescribeMergeConflictsInput();
    $request->describeMergeConflictsInput->conflictDetailLevel = ConflictDetailLevelTypeEnumEnum::LINE_LEVEL;
    $request->describeMergeConflictsInput->conflictResolutionStrategy = ConflictResolutionStrategyTypeEnumEnum::NONE;
    $request->describeMergeConflictsInput->destinationCommitSpecifier = 'deserunt';
    $request->describeMergeConflictsInput->filePath = 'nisi';
    $request->describeMergeConflictsInput->maxMergeHunks = 423855;
    $request->describeMergeConflictsInput->mergeOption = MergeOptionTypeEnumEnum::SQUASH_MERGE;
    $request->describeMergeConflictsInput->nextToken = 'omnis';
    $request->describeMergeConflictsInput->repositoryName = 'molestiae';
    $request->describeMergeConflictsInput->sourceCommitSpecifier = 'perferendis';
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = DescribeMergeConflictsXAmzTargetEnum::CODE_COMMIT20150413_DESCRIBE_MERGE_CONFLICTS;
    $request->maxMergeHunks = 'natus';
    $request->nextToken = 'nobis';

    $response = $sdk->sdk->describeMergeConflicts($request);

    if ($response->describeMergeConflictsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePullRequestEvents

Returns information about one or more pull request events.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePullRequestEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePullRequestEventsInput;
use \OpenAPI\OpenAPI\Models\Shared\PullRequestEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribePullRequestEventsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePullRequestEventsRequest();
    $request->describePullRequestEventsInput = new DescribePullRequestEventsInput();
    $request->describePullRequestEventsInput->actorArn = 'eum';
    $request->describePullRequestEventsInput->maxResults = 878453;
    $request->describePullRequestEventsInput->nextToken = 'aspernatur';
    $request->describePullRequestEventsInput->pullRequestEventType = PullRequestEventTypeEnum::PULL_REQUEST_CREATED;
    $request->describePullRequestEventsInput->pullRequestId = 'magnam';
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = DescribePullRequestEventsXAmzTargetEnum::CODE_COMMIT20150413_DESCRIBE_PULL_REQUEST_EVENTS;
    $request->maxResults = 'mollitia';
    $request->nextToken = 'reiciendis';

    $response = $sdk->sdk->describePullRequestEvents($request);

    if ($response->describePullRequestEventsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateApprovalRuleTemplateFromRepository

Removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository. This does not delete any approval rules previously created for pull requests through the template association.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateApprovalRuleTemplateFromRepositoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateApprovalRuleTemplateFromRepositoryInput;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateApprovalRuleTemplateFromRepositoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateApprovalRuleTemplateFromRepositoryRequest();
    $request->disassociateApprovalRuleTemplateFromRepositoryInput = new DisassociateApprovalRuleTemplateFromRepositoryInput();
    $request->disassociateApprovalRuleTemplateFromRepositoryInput->approvalRuleTemplateName = 'mollitia';
    $request->disassociateApprovalRuleTemplateFromRepositoryInput->repositoryName = 'ad';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = DisassociateApprovalRuleTemplateFromRepositoryXAmzTargetEnum::CODE_COMMIT20150413_DISASSOCIATE_APPROVAL_RULE_TEMPLATE_FROM_REPOSITORY;

    $response = $sdk->sdk->disassociateApprovalRuleTemplateFromRepository($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## evaluatePullRequestApprovalRules

Evaluates whether a pull request has met all the conditions specified in its associated approval rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EvaluatePullRequestApprovalRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\EvaluatePullRequestApprovalRulesInput;
use \OpenAPI\OpenAPI\Models\Operations\EvaluatePullRequestApprovalRulesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EvaluatePullRequestApprovalRulesRequest();
    $request->evaluatePullRequestApprovalRulesInput = new EvaluatePullRequestApprovalRulesInput();
    $request->evaluatePullRequestApprovalRulesInput->pullRequestId = 'doloribus';
    $request->evaluatePullRequestApprovalRulesInput->revisionId = 'debitis';
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = EvaluatePullRequestApprovalRulesXAmzTargetEnum::CODE_COMMIT20150413_EVALUATE_PULL_REQUEST_APPROVAL_RULES;

    $response = $sdk->sdk->evaluatePullRequestApprovalRules($request);

    if ($response->evaluatePullRequestApprovalRulesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApprovalRuleTemplate

Returns information about a specified approval rule template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApprovalRuleTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetApprovalRuleTemplateInput;
use \OpenAPI\OpenAPI\Models\Operations\GetApprovalRuleTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApprovalRuleTemplateRequest();
    $request->getApprovalRuleTemplateInput = new GetApprovalRuleTemplateInput();
    $request->getApprovalRuleTemplateInput->approvalRuleTemplateName = 'repudiandae';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = GetApprovalRuleTemplateXAmzTargetEnum::CODE_COMMIT20150413_GET_APPROVAL_RULE_TEMPLATE;

    $response = $sdk->sdk->getApprovalRuleTemplate($request);

    if ($response->getApprovalRuleTemplateOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBlob

Returns the base-64 encoded content of an individual blob in a repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBlobRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetBlobInput;
use \OpenAPI\OpenAPI\Models\Operations\GetBlobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBlobRequest();
    $request->getBlobInput = new GetBlobInput();
    $request->getBlobInput->blobId = 'pariatur';
    $request->getBlobInput->repositoryName = 'accusantium';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = GetBlobXAmzTargetEnum::CODE_COMMIT20150413_GET_BLOB;

    $response = $sdk->sdk->getBlob($request);

    if ($response->getBlobOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBranch

Returns information about a repository branch, including its name and the last commit ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBranchRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetBranchInput;
use \OpenAPI\OpenAPI\Models\Operations\GetBranchXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBranchRequest();
    $request->getBranchInput = new GetBranchInput();
    $request->getBranchInput->branchName = 'pariatur';
    $request->getBranchInput->repositoryName = 'maxime';
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = GetBranchXAmzTargetEnum::CODE_COMMIT20150413_GET_BRANCH;

    $response = $sdk->sdk->getBranch($request);

    if ($response->getBranchOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getComment

<p>Returns the content of a comment made on a change, file, or commit in a repository. </p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCommentInput;
use \OpenAPI\OpenAPI\Models\Operations\GetCommentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommentRequest();
    $request->getCommentInput = new GetCommentInput();
    $request->getCommentInput->commentId = 'quidem';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmzTarget = GetCommentXAmzTargetEnum::CODE_COMMIT20150413_GET_COMMENT;

    $response = $sdk->sdk->getComment($request);

    if ($response->getCommentOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommentReactions

Returns information about reactions to a specified comment ID. Reactions from users who have been deleted will not be included in the count.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommentReactionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCommentReactionsInput;
use \OpenAPI\OpenAPI\Models\Operations\GetCommentReactionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommentReactionsRequest();
    $request->getCommentReactionsInput = new GetCommentReactionsInput();
    $request->getCommentReactionsInput->commentId = 'voluptatibus';
    $request->getCommentReactionsInput->maxResults = 16627;
    $request->getCommentReactionsInput->nextToken = 'fugiat';
    $request->getCommentReactionsInput->reactionUserArn = 'amet';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = GetCommentReactionsXAmzTargetEnum::CODE_COMMIT20150413_GET_COMMENT_REACTIONS;
    $request->maxResults = 'quis';
    $request->nextToken = 'totam';

    $response = $sdk->sdk->getCommentReactions($request);

    if ($response->getCommentReactionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommentsForComparedCommit

<p>Returns information about comments made on the comparison between two commits.</p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommentsForComparedCommitRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCommentsForComparedCommitInput;
use \OpenAPI\OpenAPI\Models\Operations\GetCommentsForComparedCommitXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommentsForComparedCommitRequest();
    $request->getCommentsForComparedCommitInput = new GetCommentsForComparedCommitInput();
    $request->getCommentsForComparedCommitInput->afterCommitId = 'dignissimos';
    $request->getCommentsForComparedCommitInput->beforeCommitId = 'eaque';
    $request->getCommentsForComparedCommitInput->maxResults = 338985;
    $request->getCommentsForComparedCommitInput->nextToken = 'nesciunt';
    $request->getCommentsForComparedCommitInput->repositoryName = 'eos';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nostrum';
    $request->xAmzTarget = GetCommentsForComparedCommitXAmzTargetEnum::CODE_COMMIT20150413_GET_COMMENTS_FOR_COMPARED_COMMIT;
    $request->maxResults = 'hic';
    $request->nextToken = 'recusandae';

    $response = $sdk->sdk->getCommentsForComparedCommit($request);

    if ($response->getCommentsForComparedCommitOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommentsForPullRequest

<p>Returns comments made on a pull request.</p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommentsForPullRequestRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCommentsForPullRequestInput;
use \OpenAPI\OpenAPI\Models\Operations\GetCommentsForPullRequestXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommentsForPullRequestRequest();
    $request->getCommentsForPullRequestInput = new GetCommentsForPullRequestInput();
    $request->getCommentsForPullRequestInput->afterCommitId = 'omnis';
    $request->getCommentsForPullRequestInput->beforeCommitId = 'facilis';
    $request->getCommentsForPullRequestInput->maxResults = 596656;
    $request->getCommentsForPullRequestInput->nextToken = 'voluptatem';
    $request->getCommentsForPullRequestInput->pullRequestId = 'porro';
    $request->getCommentsForPullRequestInput->repositoryName = 'consequuntur';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->xAmzTarget = GetCommentsForPullRequestXAmzTargetEnum::CODE_COMMIT20150413_GET_COMMENTS_FOR_PULL_REQUEST;
    $request->maxResults = 'earum';
    $request->nextToken = 'modi';

    $response = $sdk->sdk->getCommentsForPullRequest($request);

    if ($response->getCommentsForPullRequestOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommit

Returns information about a commit, including commit message and committer information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCommitInput;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommitRequest();
    $request->getCommitInput = new GetCommitInput();
    $request->getCommitInput->commitId = 'iste';
    $request->getCommitInput->repositoryName = 'dolorum';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = GetCommitXAmzTargetEnum::CODE_COMMIT20150413_GET_COMMIT;

    $response = $sdk->sdk->getCommit($request);

    if ($response->getCommitOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDifferences

Returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference). Results can be limited to a specified path.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDifferencesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDifferencesInput;
use \OpenAPI\OpenAPI\Models\Operations\GetDifferencesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDifferencesRequest();
    $request->getDifferencesInput = new GetDifferencesInput();
    $request->getDifferencesInput->maxResults = 554242;
    $request->getDifferencesInput->nextToken = 'aliquid';
    $request->getDifferencesInput->afterCommitSpecifier = 'dolorem';
    $request->getDifferencesInput->afterPath = 'dolorem';
    $request->getDifferencesInput->beforeCommitSpecifier = 'dolor';
    $request->getDifferencesInput->beforePath = 'qui';
    $request->getDifferencesInput->repositoryName = 'ipsum';
    $request->maxResults = 'hic';
    $request->nextToken = 'excepturi';
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'numquam';
    $request->xAmzTarget = GetDifferencesXAmzTargetEnum::CODE_COMMIT20150413_GET_DIFFERENCES;

    $response = $sdk->sdk->getDifferences($request);

    if ($response->getDifferencesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFile

Returns the base-64 encoded contents of a specified file and its metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFileRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetFileInput;
use \OpenAPI\OpenAPI\Models\Operations\GetFileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFileRequest();
    $request->getFileInput = new GetFileInput();
    $request->getFileInput->commitSpecifier = 'veritatis';
    $request->getFileInput->filePath = 'ipsa';
    $request->getFileInput->repositoryName = 'ipsa';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->xAmzTarget = GetFileXAmzTargetEnum::CODE_COMMIT20150413_GET_FILE;

    $response = $sdk->sdk->getFile($request);

    if ($response->getFileOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFolder

Returns the contents of a specified folder in a repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFolderRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetFolderInput;
use \OpenAPI\OpenAPI\Models\Operations\GetFolderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFolderRequest();
    $request->getFolderInput = new GetFolderInput();
    $request->getFolderInput->commitSpecifier = 'natus';
    $request->getFolderInput->folderPath = 'eos';
    $request->getFolderInput->repositoryName = 'atque';
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = GetFolderXAmzTargetEnum::CODE_COMMIT20150413_GET_FOLDER;

    $response = $sdk->sdk->getFolder($request);

    if ($response->getFolderOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMergeCommit

Returns information about a specified merge commit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMergeCommitRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetMergeCommitInput;
use \OpenAPI\OpenAPI\Models\Shared\ConflictDetailLevelTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConflictResolutionStrategyTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMergeCommitXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMergeCommitRequest();
    $request->getMergeCommitInput = new GetMergeCommitInput();
    $request->getMergeCommitInput->conflictDetailLevel = ConflictDetailLevelTypeEnumEnum::LINE_LEVEL;
    $request->getMergeCommitInput->conflictResolutionStrategy = ConflictResolutionStrategyTypeEnumEnum::ACCEPT_DESTINATION;
    $request->getMergeCommitInput->destinationCommitSpecifier = 'omnis';
    $request->getMergeCommitInput->repositoryName = 'necessitatibus';
    $request->getMergeCommitInput->sourceCommitSpecifier = 'distinctio';
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = GetMergeCommitXAmzTargetEnum::CODE_COMMIT20150413_GET_MERGE_COMMIT;

    $response = $sdk->sdk->getMergeCommit($request);

    if ($response->getMergeCommitOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMergeConflicts

Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMergeConflictsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetMergeConflictsInput;
use \OpenAPI\OpenAPI\Models\Shared\ConflictDetailLevelTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConflictResolutionStrategyTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\MergeOptionTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMergeConflictsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMergeConflictsRequest();
    $request->getMergeConflictsInput = new GetMergeConflictsInput();
    $request->getMergeConflictsInput->conflictDetailLevel = ConflictDetailLevelTypeEnumEnum::FILE_LEVEL;
    $request->getMergeConflictsInput->conflictResolutionStrategy = ConflictResolutionStrategyTypeEnumEnum::NONE;
    $request->getMergeConflictsInput->destinationCommitSpecifier = 'amet';
    $request->getMergeConflictsInput->maxConflictFiles = 758379;
    $request->getMergeConflictsInput->mergeOption = MergeOptionTypeEnumEnum::THREE_WAY_MERGE;
    $request->getMergeConflictsInput->nextToken = 'ad';
    $request->getMergeConflictsInput->repositoryName = 'saepe';
    $request->getMergeConflictsInput->sourceCommitSpecifier = 'suscipit';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'similique';
    $request->xAmzSignedHeaders = 'alias';
    $request->xAmzTarget = GetMergeConflictsXAmzTargetEnum::CODE_COMMIT20150413_GET_MERGE_CONFLICTS;
    $request->maxConflictFiles = 'at';
    $request->nextToken = 'quaerat';

    $response = $sdk->sdk->getMergeConflicts($request);

    if ($response->getMergeConflictsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMergeOptions

Returns information about the merge options available for merging two specified branches. For details about why a merge option is not available, use GetMergeConflicts or DescribeMergeConflicts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMergeOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetMergeOptionsInput;
use \OpenAPI\OpenAPI\Models\Shared\ConflictDetailLevelTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConflictResolutionStrategyTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMergeOptionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMergeOptionsRequest();
    $request->getMergeOptionsInput = new GetMergeOptionsInput();
    $request->getMergeOptionsInput->conflictDetailLevel = ConflictDetailLevelTypeEnumEnum::FILE_LEVEL;
    $request->getMergeOptionsInput->conflictResolutionStrategy = ConflictResolutionStrategyTypeEnumEnum::ACCEPT_SOURCE;
    $request->getMergeOptionsInput->destinationCommitSpecifier = 'quod';
    $request->getMergeOptionsInput->repositoryName = 'officiis';
    $request->getMergeOptionsInput->sourceCommitSpecifier = 'qui';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'a';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'quisquam';
    $request->xAmzTarget = GetMergeOptionsXAmzTargetEnum::CODE_COMMIT20150413_GET_MERGE_OPTIONS;

    $response = $sdk->sdk->getMergeOptions($request);

    if ($response->getMergeOptionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPullRequest

Gets information about a pull request in a specified repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPullRequestRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPullRequestInput;
use \OpenAPI\OpenAPI\Models\Operations\GetPullRequestXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPullRequestRequest();
    $request->getPullRequestInput = new GetPullRequestInput();
    $request->getPullRequestInput->pullRequestId = 'tenetur';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = GetPullRequestXAmzTargetEnum::CODE_COMMIT20150413_GET_PULL_REQUEST;

    $response = $sdk->sdk->getPullRequest($request);

    if ($response->getPullRequestOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPullRequestApprovalStates

Gets information about the approval states for a specified pull request. Approval states only apply to pull requests that have one or more approval rules applied to them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPullRequestApprovalStatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPullRequestApprovalStatesInput;
use \OpenAPI\OpenAPI\Models\Operations\GetPullRequestApprovalStatesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPullRequestApprovalStatesRequest();
    $request->getPullRequestApprovalStatesInput = new GetPullRequestApprovalStatesInput();
    $request->getPullRequestApprovalStatesInput->pullRequestId = 'totam';
    $request->getPullRequestApprovalStatesInput->revisionId = 'nihil';
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->xAmzTarget = GetPullRequestApprovalStatesXAmzTargetEnum::CODE_COMMIT20150413_GET_PULL_REQUEST_APPROVAL_STATES;

    $response = $sdk->sdk->getPullRequestApprovalStates($request);

    if ($response->getPullRequestApprovalStatesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPullRequestOverrideState

Returns information about whether approval rules have been set aside (overridden) for a pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPullRequestOverrideStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPullRequestOverrideStateInput;
use \OpenAPI\OpenAPI\Models\Operations\GetPullRequestOverrideStateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPullRequestOverrideStateRequest();
    $request->getPullRequestOverrideStateInput = new GetPullRequestOverrideStateInput();
    $request->getPullRequestOverrideStateInput->pullRequestId = 'deserunt';
    $request->getPullRequestOverrideStateInput->revisionId = 'quam';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'soluta';
    $request->xAmzTarget = GetPullRequestOverrideStateXAmzTargetEnum::CODE_COMMIT20150413_GET_PULL_REQUEST_OVERRIDE_STATE;

    $response = $sdk->sdk->getPullRequestOverrideState($request);

    if ($response->getPullRequestOverrideStateOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepository

<p>Returns information about a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRepositoryInput;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoryRequest();
    $request->getRepositoryInput = new GetRepositoryInput();
    $request->getRepositoryInput->repositoryName = 'dicta';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = GetRepositoryXAmzTargetEnum::CODE_COMMIT20150413_GET_REPOSITORY;

    $response = $sdk->sdk->getRepository($request);

    if ($response->getRepositoryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoryTriggers

Gets information about triggers configured for a repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoryTriggersRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRepositoryTriggersInput;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoryTriggersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoryTriggersRequest();
    $request->getRepositoryTriggersInput = new GetRepositoryTriggersInput();
    $request->getRepositoryTriggersInput->repositoryName = 'aliquid';
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'magni';
    $request->xAmzTarget = GetRepositoryTriggersXAmzTargetEnum::CODE_COMMIT20150413_GET_REPOSITORY_TRIGGERS;

    $response = $sdk->sdk->getRepositoryTriggers($request);

    if ($response->getRepositoryTriggersOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApprovalRuleTemplates

Lists all approval rule templates in the specified AWS Region in your AWS account. If an AWS Region is not specified, the AWS Region where you are signed in is used.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListApprovalRuleTemplatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListApprovalRuleTemplatesInput;
use \OpenAPI\OpenAPI\Models\Operations\ListApprovalRuleTemplatesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListApprovalRuleTemplatesRequest();
    $request->listApprovalRuleTemplatesInput = new ListApprovalRuleTemplatesInput();
    $request->listApprovalRuleTemplatesInput->maxResults = 488056;
    $request->listApprovalRuleTemplatesInput->nextToken = 'sunt';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = ListApprovalRuleTemplatesXAmzTargetEnum::CODE_COMMIT20150413_LIST_APPROVAL_RULE_TEMPLATES;
    $request->maxResults = 'et';
    $request->nextToken = 'saepe';

    $response = $sdk->sdk->listApprovalRuleTemplates($request);

    if ($response->listApprovalRuleTemplatesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssociatedApprovalRuleTemplatesForRepository

Lists all approval rule templates that are associated with a specified repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAssociatedApprovalRuleTemplatesForRepositoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAssociatedApprovalRuleTemplatesForRepositoryInput;
use \OpenAPI\OpenAPI\Models\Operations\ListAssociatedApprovalRuleTemplatesForRepositoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssociatedApprovalRuleTemplatesForRepositoryRequest();
    $request->listAssociatedApprovalRuleTemplatesForRepositoryInput = new ListAssociatedApprovalRuleTemplatesForRepositoryInput();
    $request->listAssociatedApprovalRuleTemplatesForRepositoryInput->maxResults = 217450;
    $request->listAssociatedApprovalRuleTemplatesForRepositoryInput->nextToken = 'veritatis';
    $request->listAssociatedApprovalRuleTemplatesForRepositoryInput->repositoryName = 'nobis';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolore';
    $request->xAmzTarget = ListAssociatedApprovalRuleTemplatesForRepositoryXAmzTargetEnum::CODE_COMMIT20150413_LIST_ASSOCIATED_APPROVAL_RULE_TEMPLATES_FOR_REPOSITORY;
    $request->maxResults = 'labore';
    $request->nextToken = 'adipisci';

    $response = $sdk->sdk->listAssociatedApprovalRuleTemplatesForRepository($request);

    if ($response->listAssociatedApprovalRuleTemplatesForRepositoryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBranches

Gets information about one or more branches in a repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBranchesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListBranchesInput;
use \OpenAPI\OpenAPI\Models\Operations\ListBranchesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBranchesRequest();
    $request->listBranchesInput = new ListBranchesInput();
    $request->listBranchesInput->nextToken = 'dolorum';
    $request->listBranchesInput->repositoryName = 'architecto';
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'repellendus';
    $request->xAmzTarget = ListBranchesXAmzTargetEnum::CODE_COMMIT20150413_LIST_BRANCHES;
    $request->nextToken = 'porro';

    $response = $sdk->sdk->listBranches($request);

    if ($response->listBranchesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPullRequests

Returns a list of pull requests for a specified repository. The return list can be refined by pull request status or pull request author ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPullRequestsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPullRequestsInput;
use \OpenAPI\OpenAPI\Models\Shared\PullRequestStatusEnumEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListPullRequestsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPullRequestsRequest();
    $request->listPullRequestsInput = new ListPullRequestsInput();
    $request->listPullRequestsInput->authorArn = 'doloribus';
    $request->listPullRequestsInput->maxResults = 281730;
    $request->listPullRequestsInput->nextToken = 'facilis';
    $request->listPullRequestsInput->pullRequestStatus = PullRequestStatusEnumEnum::CLOSED;
    $request->listPullRequestsInput->repositoryName = 'qui';
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = ListPullRequestsXAmzTargetEnum::CODE_COMMIT20150413_LIST_PULL_REQUESTS;
    $request->maxResults = 'omnis';
    $request->nextToken = 'quis';

    $response = $sdk->sdk->listPullRequests($request);

    if ($response->listPullRequestsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRepositories

Gets information about one or more repositories.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRepositoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListRepositoriesInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortByEnumEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListRepositoriesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRepositoriesRequest();
    $request->listRepositoriesInput = new ListRepositoriesInput();
    $request->listRepositoriesInput->nextToken = 'ipsum';
    $request->listRepositoriesInput->order = OrderEnumEnum::DESCENDING;
    $request->listRepositoriesInput->sortBy = SortByEnumEnum::REPOSITORY_NAME;
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = ListRepositoriesXAmzTargetEnum::CODE_COMMIT20150413_LIST_REPOSITORIES;
    $request->nextToken = 'odio';

    $response = $sdk->sdk->listRepositories($request);

    if ($response->listRepositoriesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRepositoriesForApprovalRuleTemplate

Lists all repositories associated with the specified approval rule template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRepositoriesForApprovalRuleTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListRepositoriesForApprovalRuleTemplateInput;
use \OpenAPI\OpenAPI\Models\Operations\ListRepositoriesForApprovalRuleTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRepositoriesForApprovalRuleTemplateRequest();
    $request->listRepositoriesForApprovalRuleTemplateInput = new ListRepositoriesForApprovalRuleTemplateInput();
    $request->listRepositoriesForApprovalRuleTemplateInput->approvalRuleTemplateName = 'similique';
    $request->listRepositoriesForApprovalRuleTemplateInput->maxResults = 708548;
    $request->listRepositoriesForApprovalRuleTemplateInput->nextToken = 'vero';
    $request->xAmzAlgorithm = 'ducimus';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'impedit';
    $request->xAmzTarget = ListRepositoriesForApprovalRuleTemplateXAmzTargetEnum::CODE_COMMIT20150413_LIST_REPOSITORIES_FOR_APPROVAL_RULE_TEMPLATE;
    $request->maxResults = 'aut';
    $request->nextToken = 'voluptatibus';

    $response = $sdk->sdk->listRepositoriesForApprovalRuleTemplate($request);

    if ($response->listRepositoriesForApprovalRuleTemplateOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the<i> AWS CodeCommit User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceInput = new ListTagsForResourceInput();
    $request->listTagsForResourceInput->nextToken = 'exercitationem';
    $request->listTagsForResourceInput->resourceArn = 'nulla';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'eligendi';
    $request->xAmzSignedHeaders = 'ducimus';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::CODE_COMMIT20150413_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mergeBranchesByFastForward

Merges two branches using the fast-forward merge strategy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MergeBranchesByFastForwardRequest;
use \OpenAPI\OpenAPI\Models\Shared\MergeBranchesByFastForwardInput;
use \OpenAPI\OpenAPI\Models\Operations\MergeBranchesByFastForwardXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MergeBranchesByFastForwardRequest();
    $request->mergeBranchesByFastForwardInput = new MergeBranchesByFastForwardInput();
    $request->mergeBranchesByFastForwardInput->destinationCommitSpecifier = 'alias';
    $request->mergeBranchesByFastForwardInput->repositoryName = 'officia';
    $request->mergeBranchesByFastForwardInput->sourceCommitSpecifier = 'tempora';
    $request->mergeBranchesByFastForwardInput->targetBranch = 'ipsam';
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'possimus';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'ratione';
    $request->xAmzSignedHeaders = 'ex';
    $request->xAmzTarget = MergeBranchesByFastForwardXAmzTargetEnum::CODE_COMMIT20150413_MERGE_BRANCHES_BY_FAST_FORWARD;

    $response = $sdk->sdk->mergeBranchesByFastForward($request);

    if ($response->mergeBranchesByFastForwardOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mergeBranchesBySquash

Merges two branches using the squash merge strategy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MergeBranchesBySquashRequest;
use \OpenAPI\OpenAPI\Models\Shared\MergeBranchesBySquashInput;
use \OpenAPI\OpenAPI\Models\Shared\ConflictDetailLevelTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConflictResolution;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFileEntry;
use \OpenAPI\OpenAPI\Models\Shared\ReplaceContentEntry;
use \OpenAPI\OpenAPI\Models\Shared\FileModeTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReplacementTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetFileModeEntry;
use \OpenAPI\OpenAPI\Models\Shared\ConflictResolutionStrategyTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Operations\MergeBranchesBySquashXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MergeBranchesBySquashRequest();
    $request->mergeBranchesBySquashInput = new MergeBranchesBySquashInput();
    $request->mergeBranchesBySquashInput->authorName = 'laudantium';
    $request->mergeBranchesBySquashInput->commitMessage = 'dicta';
    $request->mergeBranchesBySquashInput->conflictDetailLevel = ConflictDetailLevelTypeEnumEnum::FILE_LEVEL;
    $request->mergeBranchesBySquashInput->conflictResolution = new ConflictResolution();
    $request->mergeBranchesBySquashInput->conflictResolution->deleteFiles = [
        new DeleteFileEntry(),
        new DeleteFileEntry(),
        new DeleteFileEntry(),
        new DeleteFileEntry(),
    ];
    $request->mergeBranchesBySquashInput->conflictResolution->replaceContents = [
        new ReplaceContentEntry(),
    ];
    $request->mergeBranchesBySquashInput->conflictResolution->setFileModes = [
        new SetFileModeEntry(),
        new SetFileModeEntry(),
    ];
    $request->mergeBranchesBySquashInput->conflictResolutionStrategy = ConflictResolutionStrategyTypeEnumEnum::AUTOMERGE;
    $request->mergeBranchesBySquashInput->destinationCommitSpecifier = 'excepturi';
    $request->mergeBranchesBySquashInput->email = 'Everett_Willms41@hotmail.com';
    $request->mergeBranchesBySquashInput->keepEmptyFolders = false;
    $request->mergeBranchesBySquashInput->repositoryName = 'impedit';
    $request->mergeBranchesBySquashInput->sourceCommitSpecifier = 'corporis';
    $request->mergeBranchesBySquashInput->targetBranch = 'veniam';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'inventore';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = MergeBranchesBySquashXAmzTargetEnum::CODE_COMMIT20150413_MERGE_BRANCHES_BY_SQUASH;

    $response = $sdk->sdk->mergeBranchesBySquash($request);

    if ($response->mergeBranchesBySquashOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mergeBranchesByThreeWay

Merges two specified branches using the three-way merge strategy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MergeBranchesByThreeWayRequest;
use \OpenAPI\OpenAPI\Models\Shared\MergeBranchesByThreeWayInput;
use \OpenAPI\OpenAPI\Models\Shared\ConflictDetailLevelTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConflictResolution;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFileEntry;
use \OpenAPI\OpenAPI\Models\Shared\ReplaceContentEntry;
use \OpenAPI\OpenAPI\Models\Shared\FileModeTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReplacementTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetFileModeEntry;
use \OpenAPI\OpenAPI\Models\Shared\ConflictResolutionStrategyTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Operations\MergeBranchesByThreeWayXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MergeBranchesByThreeWayRequest();
    $request->mergeBranchesByThreeWayInput = new MergeBranchesByThreeWayInput();
    $request->mergeBranchesByThreeWayInput->authorName = 'aspernatur';
    $request->mergeBranchesByThreeWayInput->commitMessage = 'minima';
    $request->mergeBranchesByThreeWayInput->conflictDetailLevel = ConflictDetailLevelTypeEnumEnum::FILE_LEVEL;
    $request->mergeBranchesByThreeWayInput->conflictResolution = new ConflictResolution();
    $request->mergeBranchesByThreeWayInput->conflictResolution->deleteFiles = [
        new DeleteFileEntry(),
        new DeleteFileEntry(),
        new DeleteFileEntry(),
        new DeleteFileEntry(),
    ];
    $request->mergeBranchesByThreeWayInput->conflictResolution->replaceContents = [
        new ReplaceContentEntry(),
        new ReplaceContentEntry(),
        new ReplaceContentEntry(),
    ];
    $request->mergeBranchesByThreeWayInput->conflictResolution->setFileModes = [
        new SetFileModeEntry(),
    ];
    $request->mergeBranchesByThreeWayInput->conflictResolutionStrategy = ConflictResolutionStrategyTypeEnumEnum::NONE;
    $request->mergeBranchesByThreeWayInput->destinationCommitSpecifier = 'deleniti';
    $request->mergeBranchesByThreeWayInput->email = 'Ellis.Corkery25@hotmail.com';
    $request->mergeBranchesByThreeWayInput->keepEmptyFolders = false;
    $request->mergeBranchesByThreeWayInput->repositoryName = 'et';
    $request->mergeBranchesByThreeWayInput->sourceCommitSpecifier = 'dolorum';
    $request->mergeBranchesByThreeWayInput->targetBranch = 'laborum';
    $request->xAmzAlgorithm = 'placeat';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'autem';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'quas';
    $request->xAmzSignedHeaders = 'assumenda';
    $request->xAmzTarget = MergeBranchesByThreeWayXAmzTargetEnum::CODE_COMMIT20150413_MERGE_BRANCHES_BY_THREE_WAY;

    $response = $sdk->sdk->mergeBranchesByThreeWay($request);

    if ($response->mergeBranchesByThreeWayOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mergePullRequestByFastForward

Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the fast-forward merge strategy. If the merge is successful, it closes the pull request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MergePullRequestByFastForwardRequest;
use \OpenAPI\OpenAPI\Models\Shared\MergePullRequestByFastForwardInput;
use \OpenAPI\OpenAPI\Models\Operations\MergePullRequestByFastForwardXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MergePullRequestByFastForwardRequest();
    $request->mergePullRequestByFastForwardInput = new MergePullRequestByFastForwardInput();
    $request->mergePullRequestByFastForwardInput->pullRequestId = 'nulla';
    $request->mergePullRequestByFastForwardInput->repositoryName = 'voluptas';
    $request->mergePullRequestByFastForwardInput->sourceCommitId = 'libero';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = MergePullRequestByFastForwardXAmzTargetEnum::CODE_COMMIT20150413_MERGE_PULL_REQUEST_BY_FAST_FORWARD;

    $response = $sdk->sdk->mergePullRequestByFastForward($request);

    if ($response->mergePullRequestByFastForwardOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mergePullRequestBySquash

Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the squash merge strategy. If the merge is successful, it closes the pull request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MergePullRequestBySquashRequest;
use \OpenAPI\OpenAPI\Models\Shared\MergePullRequestBySquashInput;
use \OpenAPI\OpenAPI\Models\Shared\ConflictDetailLevelTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConflictResolution;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFileEntry;
use \OpenAPI\OpenAPI\Models\Shared\ReplaceContentEntry;
use \OpenAPI\OpenAPI\Models\Shared\FileModeTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReplacementTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetFileModeEntry;
use \OpenAPI\OpenAPI\Models\Shared\ConflictResolutionStrategyTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Operations\MergePullRequestBySquashXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MergePullRequestBySquashRequest();
    $request->mergePullRequestBySquashInput = new MergePullRequestBySquashInput();
    $request->mergePullRequestBySquashInput->authorName = 'magnam';
    $request->mergePullRequestBySquashInput->commitMessage = 'odio';
    $request->mergePullRequestBySquashInput->conflictDetailLevel = ConflictDetailLevelTypeEnumEnum::FILE_LEVEL;
    $request->mergePullRequestBySquashInput->conflictResolution = new ConflictResolution();
    $request->mergePullRequestBySquashInput->conflictResolution->deleteFiles = [
        new DeleteFileEntry(),
        new DeleteFileEntry(),
    ];
    $request->mergePullRequestBySquashInput->conflictResolution->replaceContents = [
        new ReplaceContentEntry(),
        new ReplaceContentEntry(),
    ];
    $request->mergePullRequestBySquashInput->conflictResolution->setFileModes = [
        new SetFileModeEntry(),
        new SetFileModeEntry(),
        new SetFileModeEntry(),
    ];
    $request->mergePullRequestBySquashInput->conflictResolutionStrategy = ConflictResolutionStrategyTypeEnumEnum::ACCEPT_DESTINATION;
    $request->mergePullRequestBySquashInput->email = 'Maurice43@yahoo.com';
    $request->mergePullRequestBySquashInput->keepEmptyFolders = false;
    $request->mergePullRequestBySquashInput->pullRequestId = 'suscipit';
    $request->mergePullRequestBySquashInput->repositoryName = 'assumenda';
    $request->mergePullRequestBySquashInput->sourceCommitId = 'eos';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'neque';
    $request->xAmzTarget = MergePullRequestBySquashXAmzTargetEnum::CODE_COMMIT20150413_MERGE_PULL_REQUEST_BY_SQUASH;

    $response = $sdk->sdk->mergePullRequestBySquash($request);

    if ($response->mergePullRequestBySquashOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mergePullRequestByThreeWay

Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the three-way merge strategy. If the merge is successful, it closes the pull request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MergePullRequestByThreeWayRequest;
use \OpenAPI\OpenAPI\Models\Shared\MergePullRequestByThreeWayInput;
use \OpenAPI\OpenAPI\Models\Shared\ConflictDetailLevelTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConflictResolution;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFileEntry;
use \OpenAPI\OpenAPI\Models\Shared\ReplaceContentEntry;
use \OpenAPI\OpenAPI\Models\Shared\FileModeTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReplacementTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetFileModeEntry;
use \OpenAPI\OpenAPI\Models\Shared\ConflictResolutionStrategyTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Operations\MergePullRequestByThreeWayXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MergePullRequestByThreeWayRequest();
    $request->mergePullRequestByThreeWayInput = new MergePullRequestByThreeWayInput();
    $request->mergePullRequestByThreeWayInput->authorName = 'quo';
    $request->mergePullRequestByThreeWayInput->commitMessage = 'illum';
    $request->mergePullRequestByThreeWayInput->conflictDetailLevel = ConflictDetailLevelTypeEnumEnum::LINE_LEVEL;
    $request->mergePullRequestByThreeWayInput->conflictResolution = new ConflictResolution();
    $request->mergePullRequestByThreeWayInput->conflictResolution->deleteFiles = [
        new DeleteFileEntry(),
        new DeleteFileEntry(),
        new DeleteFileEntry(),
    ];
    $request->mergePullRequestByThreeWayInput->conflictResolution->replaceContents = [
        new ReplaceContentEntry(),
        new ReplaceContentEntry(),
    ];
    $request->mergePullRequestByThreeWayInput->conflictResolution->setFileModes = [
        new SetFileModeEntry(),
    ];
    $request->mergePullRequestByThreeWayInput->conflictResolutionStrategy = ConflictResolutionStrategyTypeEnumEnum::ACCEPT_SOURCE;
    $request->mergePullRequestByThreeWayInput->email = 'Lacey89@gmail.com';
    $request->mergePullRequestByThreeWayInput->keepEmptyFolders = false;
    $request->mergePullRequestByThreeWayInput->pullRequestId = 'ipsam';
    $request->mergePullRequestByThreeWayInput->repositoryName = 'aspernatur';
    $request->mergePullRequestByThreeWayInput->sourceCommitId = 'sequi';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->xAmzTarget = MergePullRequestByThreeWayXAmzTargetEnum::CODE_COMMIT20150413_MERGE_PULL_REQUEST_BY_THREE_WAY;

    $response = $sdk->sdk->mergePullRequestByThreeWay($request);

    if ($response->mergePullRequestByThreeWayOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## overridePullRequestApprovalRules

Sets aside (overrides) all approval rule requirements for a specified pull request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OverridePullRequestApprovalRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\OverridePullRequestApprovalRulesInput;
use \OpenAPI\OpenAPI\Models\Shared\OverrideStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\OverridePullRequestApprovalRulesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OverridePullRequestApprovalRulesRequest();
    $request->overridePullRequestApprovalRulesInput = new OverridePullRequestApprovalRulesInput();
    $request->overridePullRequestApprovalRulesInput->overrideStatus = OverrideStatusEnum::OVERRIDE;
    $request->overridePullRequestApprovalRulesInput->pullRequestId = 'nihil';
    $request->overridePullRequestApprovalRulesInput->revisionId = 'totam';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'aliquam';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = OverridePullRequestApprovalRulesXAmzTargetEnum::CODE_COMMIT20150413_OVERRIDE_PULL_REQUEST_APPROVAL_RULES;

    $response = $sdk->sdk->overridePullRequestApprovalRules($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCommentForComparedCommit

Posts a comment on the comparison between two commits.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostCommentForComparedCommitRequest;
use \OpenAPI\OpenAPI\Models\Shared\PostCommentForComparedCommitInput;
use \OpenAPI\OpenAPI\Models\Shared\Location;
use \OpenAPI\OpenAPI\Models\Shared\RelativeFileVersionEnumEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostCommentForComparedCommitXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCommentForComparedCommitRequest();
    $request->postCommentForComparedCommitInput = new PostCommentForComparedCommitInput();
    $request->postCommentForComparedCommitInput->afterCommitId = 'deserunt';
    $request->postCommentForComparedCommitInput->beforeCommitId = 'molestiae';
    $request->postCommentForComparedCommitInput->clientRequestToken = 'accusantium';
    $request->postCommentForComparedCommitInput->content = 'porro';
    $request->postCommentForComparedCommitInput->location = new Location();
    $request->postCommentForComparedCommitInput->location->filePath = 'eum';
    $request->postCommentForComparedCommitInput->location->filePosition = 556429;
    $request->postCommentForComparedCommitInput->location->relativeFileVersion = RelativeFileVersionEnumEnum::AFTER;
    $request->postCommentForComparedCommitInput->repositoryName = 'consequuntur';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzTarget = PostCommentForComparedCommitXAmzTargetEnum::CODE_COMMIT20150413_POST_COMMENT_FOR_COMPARED_COMMIT;

    $response = $sdk->sdk->postCommentForComparedCommit($request);

    if ($response->postCommentForComparedCommitOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCommentForPullRequest

Posts a comment on a pull request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostCommentForPullRequestRequest;
use \OpenAPI\OpenAPI\Models\Shared\PostCommentForPullRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\Location;
use \OpenAPI\OpenAPI\Models\Shared\RelativeFileVersionEnumEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostCommentForPullRequestXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCommentForPullRequestRequest();
    $request->postCommentForPullRequestInput = new PostCommentForPullRequestInput();
    $request->postCommentForPullRequestInput->afterCommitId = 'minima';
    $request->postCommentForPullRequestInput->beforeCommitId = 'nisi';
    $request->postCommentForPullRequestInput->clientRequestToken = 'fugit';
    $request->postCommentForPullRequestInput->content = 'sapiente';
    $request->postCommentForPullRequestInput->location = new Location();
    $request->postCommentForPullRequestInput->location->filePath = 'consequuntur';
    $request->postCommentForPullRequestInput->location->filePosition = 187131;
    $request->postCommentForPullRequestInput->location->relativeFileVersion = RelativeFileVersionEnumEnum::BEFORE;
    $request->postCommentForPullRequestInput->pullRequestId = 'saepe';
    $request->postCommentForPullRequestInput->repositoryName = 'occaecati';
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'eveniet';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = PostCommentForPullRequestXAmzTargetEnum::CODE_COMMIT20150413_POST_COMMENT_FOR_PULL_REQUEST;

    $response = $sdk->sdk->postCommentForPullRequest($request);

    if ($response->postCommentForPullRequestOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCommentReply

Posts a comment in reply to an existing comment on a comparison between commits or a pull request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostCommentReplyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PostCommentReplyInput;
use \OpenAPI\OpenAPI\Models\Operations\PostCommentReplyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCommentReplyRequest();
    $request->postCommentReplyInput = new PostCommentReplyInput();
    $request->postCommentReplyInput->clientRequestToken = 'quod';
    $request->postCommentReplyInput->content = 'nam';
    $request->postCommentReplyInput->inReplyTo = 'vero';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'rerum';
    $request->xAmzTarget = PostCommentReplyXAmzTargetEnum::CODE_COMMIT20150413_POST_COMMENT_REPLY;

    $response = $sdk->sdk->postCommentReply($request);

    if ($response->postCommentReplyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putCommentReaction

Adds or updates a reaction to a specified comment for the user whose identity is used to make the request. You can only add or update a reaction for yourself. You cannot add, modify, or delete a reaction for another user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutCommentReactionRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutCommentReactionInput;
use \OpenAPI\OpenAPI\Models\Operations\PutCommentReactionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutCommentReactionRequest();
    $request->putCommentReactionInput = new PutCommentReactionInput();
    $request->putCommentReactionInput->commentId = 'occaecati';
    $request->putCommentReactionInput->reactionValue = 'minima';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'cumque';
    $request->xAmzTarget = PutCommentReactionXAmzTargetEnum::CODE_COMMIT20150413_PUT_COMMENT_REACTION;

    $response = $sdk->sdk->putCommentReaction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putFile

Adds or updates a file in a branch in an AWS CodeCommit repository, and generates a commit for the addition in the specified branch.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutFileRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutFileInput;
use \OpenAPI\OpenAPI\Models\Shared\FileModeTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutFileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutFileRequest();
    $request->putFileInput = new PutFileInput();
    $request->putFileInput->branchName = 'consequuntur';
    $request->putFileInput->commitMessage = 'consequatur';
    $request->putFileInput->email = 'Elouise45@hotmail.com';
    $request->putFileInput->fileContent = 'blanditiis';
    $request->putFileInput->fileMode = FileModeTypeEnumEnum::NORMAL;
    $request->putFileInput->filePath = 'a';
    $request->putFileInput->name = 'Dr. Clifton Koch';
    $request->putFileInput->parentCommitId = 'sint';
    $request->putFileInput->repositoryName = 'pariatur';
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'quia';
    $request->xAmzCredential = 'eveniet';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->xAmzTarget = PutFileXAmzTargetEnum::CODE_COMMIT20150413_PUT_FILE;

    $response = $sdk->sdk->putFile($request);

    if ($response->putFileOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRepositoryTriggers

Replaces all triggers for a repository. Used to create or delete triggers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoryTriggersRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutRepositoryTriggersInput;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryTrigger;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryTriggerEventEnumEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoryTriggersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRepositoryTriggersRequest();
    $request->putRepositoryTriggersInput = new PutRepositoryTriggersInput();
    $request->putRepositoryTriggersInput->repositoryName = 'quasi';
    $request->putRepositoryTriggersInput->triggers = [
        new RepositoryTrigger(),
        new RepositoryTrigger(),
        new RepositoryTrigger(),
    ];
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = PutRepositoryTriggersXAmzTargetEnum::CODE_COMMIT20150413_PUT_REPOSITORY_TRIGGERS;

    $response = $sdk->sdk->putRepositoryTriggers($request);

    if ($response->putRepositoryTriggersOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds or updates tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceInput = new TagResourceInput();
    $request->tagResourceInput->resourceArn = 'eius';
    $request->tagResourceInput->tags = [
        'illum' => 'soluta',
        'accusantium' => 'aliquam',
        'sapiente' => 'dicta',
    ];
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::CODE_COMMIT20150413_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testRepositoryTriggers

Tests the functionality of repository triggers by sending information to the trigger target. If real data is available in the repository, the test sends data from the last commit. If no data is available, sample data is generated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TestRepositoryTriggersRequest;
use \OpenAPI\OpenAPI\Models\Shared\TestRepositoryTriggersInput;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryTrigger;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryTriggerEventEnumEnum;
use \OpenAPI\OpenAPI\Models\Operations\TestRepositoryTriggersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestRepositoryTriggersRequest();
    $request->testRepositoryTriggersInput = new TestRepositoryTriggersInput();
    $request->testRepositoryTriggersInput->repositoryName = 'quibusdam';
    $request->testRepositoryTriggersInput->triggers = [
        new RepositoryTrigger(),
        new RepositoryTrigger(),
    ];
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = TestRepositoryTriggersXAmzTargetEnum::CODE_COMMIT20150413_TEST_REPOSITORY_TRIGGERS;

    $response = $sdk->sdk->testRepositoryTriggers($request);

    if ($response->testRepositoryTriggersOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceInput = new UntagResourceInput();
    $request->untagResourceInput->resourceArn = 'at';
    $request->untagResourceInput->tagKeys = [
        'voluptate',
    ];
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'temporibus';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::CODE_COMMIT20150413_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApprovalRuleTemplateContent

Updates the content of an approval rule template. You can change the number of required approvals, the membership of the approval rule, and whether an approval pool is defined.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApprovalRuleTemplateContentRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateApprovalRuleTemplateContentInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApprovalRuleTemplateContentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApprovalRuleTemplateContentRequest();
    $request->updateApprovalRuleTemplateContentInput = new UpdateApprovalRuleTemplateContentInput();
    $request->updateApprovalRuleTemplateContentInput->approvalRuleTemplateName = 'accusantium';
    $request->updateApprovalRuleTemplateContentInput->existingRuleContentSha256 = 'rem';
    $request->updateApprovalRuleTemplateContentInput->newRuleContent = 'aut';
    $request->xAmzAlgorithm = 'laudantium';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'voluptatem';
    $request->xAmzTarget = UpdateApprovalRuleTemplateContentXAmzTargetEnum::CODE_COMMIT20150413_UPDATE_APPROVAL_RULE_TEMPLATE_CONTENT;

    $response = $sdk->sdk->updateApprovalRuleTemplateContent($request);

    if ($response->updateApprovalRuleTemplateContentOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApprovalRuleTemplateDescription

Updates the description for a specified approval rule template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApprovalRuleTemplateDescriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateApprovalRuleTemplateDescriptionInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApprovalRuleTemplateDescriptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApprovalRuleTemplateDescriptionRequest();
    $request->updateApprovalRuleTemplateDescriptionInput = new UpdateApprovalRuleTemplateDescriptionInput();
    $request->updateApprovalRuleTemplateDescriptionInput->approvalRuleTemplateDescription = 'dolor';
    $request->updateApprovalRuleTemplateDescriptionInput->approvalRuleTemplateName = 'occaecati';
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = UpdateApprovalRuleTemplateDescriptionXAmzTargetEnum::CODE_COMMIT20150413_UPDATE_APPROVAL_RULE_TEMPLATE_DESCRIPTION;

    $response = $sdk->sdk->updateApprovalRuleTemplateDescription($request);

    if ($response->updateApprovalRuleTemplateDescriptionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApprovalRuleTemplateName

Updates the name of a specified approval rule template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApprovalRuleTemplateNameRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateApprovalRuleTemplateNameInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApprovalRuleTemplateNameXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApprovalRuleTemplateNameRequest();
    $request->updateApprovalRuleTemplateNameInput = new UpdateApprovalRuleTemplateNameInput();
    $request->updateApprovalRuleTemplateNameInput->newApprovalRuleTemplateName = 'maiores';
    $request->updateApprovalRuleTemplateNameInput->oldApprovalRuleTemplateName = 'natus';
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'aperiam';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = UpdateApprovalRuleTemplateNameXAmzTargetEnum::CODE_COMMIT20150413_UPDATE_APPROVAL_RULE_TEMPLATE_NAME;

    $response = $sdk->sdk->updateApprovalRuleTemplateName($request);

    if ($response->updateApprovalRuleTemplateNameOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateComment

Replaces the contents of a comment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCommentRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCommentInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCommentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCommentRequest();
    $request->updateCommentInput = new UpdateCommentInput();
    $request->updateCommentInput->commentId = 'consequuntur';
    $request->updateCommentInput->content = 'repellendus';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'quae';
    $request->xAmzTarget = UpdateCommentXAmzTargetEnum::CODE_COMMIT20150413_UPDATE_COMMENT;

    $response = $sdk->sdk->updateComment($request);

    if ($response->updateCommentOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDefaultBranch

<p>Sets or changes the default branch name for the specified repository.</p> <note> <p>If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDefaultBranchRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDefaultBranchInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDefaultBranchXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDefaultBranchRequest();
    $request->updateDefaultBranchInput = new UpdateDefaultBranchInput();
    $request->updateDefaultBranchInput->defaultBranchName = 'quaerat';
    $request->updateDefaultBranchInput->repositoryName = 'porro';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = UpdateDefaultBranchXAmzTargetEnum::CODE_COMMIT20150413_UPDATE_DEFAULT_BRANCH;

    $response = $sdk->sdk->updateDefaultBranch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePullRequestApprovalRuleContent

Updates the structure of an approval rule created specifically for a pull request. For example, you can change the number of required approvers and the approval pool for approvers. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePullRequestApprovalRuleContentRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePullRequestApprovalRuleContentInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePullRequestApprovalRuleContentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePullRequestApprovalRuleContentRequest();
    $request->updatePullRequestApprovalRuleContentInput = new UpdatePullRequestApprovalRuleContentInput();
    $request->updatePullRequestApprovalRuleContentInput->approvalRuleName = 'velit';
    $request->updatePullRequestApprovalRuleContentInput->existingRuleContentSha256 = 'culpa';
    $request->updatePullRequestApprovalRuleContentInput->newRuleContent = 'est';
    $request->updatePullRequestApprovalRuleContentInput->pullRequestId = 'recusandae';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'ducimus';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = UpdatePullRequestApprovalRuleContentXAmzTargetEnum::CODE_COMMIT20150413_UPDATE_PULL_REQUEST_APPROVAL_RULE_CONTENT;

    $response = $sdk->sdk->updatePullRequestApprovalRuleContent($request);

    if ($response->updatePullRequestApprovalRuleContentOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePullRequestApprovalState

Updates the state of a user's approval on a pull request. The user is derived from the signed-in account when the request is made.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePullRequestApprovalStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePullRequestApprovalStateInput;
use \OpenAPI\OpenAPI\Models\Shared\ApprovalStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePullRequestApprovalStateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePullRequestApprovalStateRequest();
    $request->updatePullRequestApprovalStateInput = new UpdatePullRequestApprovalStateInput();
    $request->updatePullRequestApprovalStateInput->approvalState = ApprovalStateEnum::REVOKE;
    $request->updatePullRequestApprovalStateInput->pullRequestId = 'facilis';
    $request->updatePullRequestApprovalStateInput->revisionId = 'cum';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = UpdatePullRequestApprovalStateXAmzTargetEnum::CODE_COMMIT20150413_UPDATE_PULL_REQUEST_APPROVAL_STATE;

    $response = $sdk->sdk->updatePullRequestApprovalState($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePullRequestDescription

Replaces the contents of the description of a pull request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePullRequestDescriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePullRequestDescriptionInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePullRequestDescriptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePullRequestDescriptionRequest();
    $request->updatePullRequestDescriptionInput = new UpdatePullRequestDescriptionInput();
    $request->updatePullRequestDescriptionInput->description = 'aliquid';
    $request->updatePullRequestDescriptionInput->pullRequestId = 'aperiam';
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'exercitationem';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'numquam';
    $request->xAmzTarget = UpdatePullRequestDescriptionXAmzTargetEnum::CODE_COMMIT20150413_UPDATE_PULL_REQUEST_DESCRIPTION;

    $response = $sdk->sdk->updatePullRequestDescription($request);

    if ($response->updatePullRequestDescriptionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePullRequestStatus

Updates the status of a pull request. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePullRequestStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePullRequestStatusInput;
use \OpenAPI\OpenAPI\Models\Shared\PullRequestStatusEnumEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePullRequestStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePullRequestStatusRequest();
    $request->updatePullRequestStatusInput = new UpdatePullRequestStatusInput();
    $request->updatePullRequestStatusInput->pullRequestId = 'doloribus';
    $request->updatePullRequestStatusInput->pullRequestStatus = PullRequestStatusEnumEnum::OPEN;
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->xAmzTarget = UpdatePullRequestStatusXAmzTargetEnum::CODE_COMMIT20150413_UPDATE_PULL_REQUEST_STATUS;

    $response = $sdk->sdk->updatePullRequestStatus($request);

    if ($response->updatePullRequestStatusOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePullRequestTitle

Replaces the title of a pull request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePullRequestTitleRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePullRequestTitleInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePullRequestTitleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePullRequestTitleRequest();
    $request->updatePullRequestTitleInput = new UpdatePullRequestTitleInput();
    $request->updatePullRequestTitleInput->pullRequestId = 'adipisci';
    $request->updatePullRequestTitleInput->title = 'Mrs.';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = UpdatePullRequestTitleXAmzTargetEnum::CODE_COMMIT20150413_UPDATE_PULL_REQUEST_TITLE;

    $response = $sdk->sdk->updatePullRequestTitle($request);

    if ($response->updatePullRequestTitleOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRepositoryDescription

<p>Sets or changes the comment or description for a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRepositoryDescriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateRepositoryDescriptionInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRepositoryDescriptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRepositoryDescriptionRequest();
    $request->updateRepositoryDescriptionInput = new UpdateRepositoryDescriptionInput();
    $request->updateRepositoryDescriptionInput->repositoryDescription = 'harum';
    $request->updateRepositoryDescriptionInput->repositoryName = 'laboriosam';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'voluptates';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'vitae';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'similique';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = UpdateRepositoryDescriptionXAmzTargetEnum::CODE_COMMIT20150413_UPDATE_REPOSITORY_DESCRIPTION;

    $response = $sdk->sdk->updateRepositoryDescription($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRepositoryName

Renames a repository. The repository name must be unique across the calling AWS account. Repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. The suffix .git is prohibited. For more information about the limits on repository names, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Limits</a> in the AWS CodeCommit User Guide.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRepositoryNameRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateRepositoryNameInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRepositoryNameXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRepositoryNameRequest();
    $request->updateRepositoryNameInput = new UpdateRepositoryNameInput();
    $request->updateRepositoryNameInput->newName = 'aspernatur';
    $request->updateRepositoryNameInput->oldName = 'voluptas';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'minus';
    $request->xAmzTarget = UpdateRepositoryNameXAmzTargetEnum::CODE_COMMIT20150413_UPDATE_REPOSITORY_NAME;

    $response = $sdk->sdk->updateRepositoryName($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
