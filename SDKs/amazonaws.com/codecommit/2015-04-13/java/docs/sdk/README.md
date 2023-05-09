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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateApprovalRuleTemplateWithRepositoryRequest;
import org.openapis.openapi.models.operations.AssociateApprovalRuleTemplateWithRepositoryResponse;
import org.openapis.openapi.models.operations.AssociateApprovalRuleTemplateWithRepositoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateApprovalRuleTemplateWithRepositoryInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateApprovalRuleTemplateWithRepositoryRequest req = new AssociateApprovalRuleTemplateWithRepositoryRequest(                new AssociateApprovalRuleTemplateWithRepositoryInput("suscipit", "iure");, AssociateApprovalRuleTemplateWithRepositoryXAmzTargetEnum.CODE_COMMIT20150413_ASSOCIATE_APPROVAL_RULE_TEMPLATE_WITH_REPOSITORY) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            AssociateApprovalRuleTemplateWithRepositoryResponse res = sdk.sdk.associateApprovalRuleTemplateWithRepository(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchAssociateApprovalRuleTemplateWithRepositories

Creates an association between an approval rule template and one or more specified repositories. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchAssociateApprovalRuleTemplateWithRepositoriesRequest;
import org.openapis.openapi.models.operations.BatchAssociateApprovalRuleTemplateWithRepositoriesResponse;
import org.openapis.openapi.models.operations.BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchAssociateApprovalRuleTemplateWithRepositoriesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchAssociateApprovalRuleTemplateWithRepositoriesRequest req = new BatchAssociateApprovalRuleTemplateWithRepositoriesRequest(                new BatchAssociateApprovalRuleTemplateWithRepositoriesInput("placeat",                 new String[]{{
                                                add("iusto"),
                                                add("excepturi"),
                                                add("nisi"),
                                            }});, BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum.CODE_COMMIT20150413_BATCH_ASSOCIATE_APPROVAL_RULE_TEMPLATE_WITH_REPOSITORIES) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "ab";
                xAmzDate = "quis";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "perferendis";
            }};            

            BatchAssociateApprovalRuleTemplateWithRepositoriesResponse res = sdk.sdk.batchAssociateApprovalRuleTemplateWithRepositories(req);

            if (res.batchAssociateApprovalRuleTemplateWithRepositoriesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchDescribeMergeConflicts

Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDescribeMergeConflictsRequest;
import org.openapis.openapi.models.operations.BatchDescribeMergeConflictsResponse;
import org.openapis.openapi.models.operations.BatchDescribeMergeConflictsXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchDescribeMergeConflictsInput;
import org.openapis.openapi.models.shared.ConflictDetailLevelTypeEnumEnum;
import org.openapis.openapi.models.shared.ConflictResolutionStrategyTypeEnumEnum;
import org.openapis.openapi.models.shared.MergeOptionTypeEnumEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDescribeMergeConflictsRequest req = new BatchDescribeMergeConflictsRequest(                new BatchDescribeMergeConflictsInput("repellendus", MergeOptionTypeEnumEnum.THREE_WAY_MERGE, "quo", "odit") {{
                                conflictDetailLevel = ConflictDetailLevelTypeEnumEnum.LINE_LEVEL;
                                conflictResolutionStrategy = ConflictResolutionStrategyTypeEnumEnum.AUTOMERGE;
                                filePaths = new String[]{{
                                    add("molestiae"),
                                    add("quod"),
                                    add("quod"),
                                    add("esse"),
                                }};
                                maxConflictFiles = 520478L;
                                maxMergeHunks = 780529L;
                                nextToken = "dolorum";
                            }};, BatchDescribeMergeConflictsXAmzTargetEnum.CODE_COMMIT20150413_BATCH_DESCRIBE_MERGE_CONFLICTS) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "nam";
                xAmzCredential = "officia";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "hic";
            }};            

            BatchDescribeMergeConflictsResponse res = sdk.sdk.batchDescribeMergeConflicts(req);

            if (res.batchDescribeMergeConflictsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchDisassociateApprovalRuleTemplateFromRepositories

Removes the association between an approval rule template and one or more specified repositories. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDisassociateApprovalRuleTemplateFromRepositoriesRequest;
import org.openapis.openapi.models.operations.BatchDisassociateApprovalRuleTemplateFromRepositoriesResponse;
import org.openapis.openapi.models.operations.BatchDisassociateApprovalRuleTemplateFromRepositoriesXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchDisassociateApprovalRuleTemplateFromRepositoriesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDisassociateApprovalRuleTemplateFromRepositoriesRequest req = new BatchDisassociateApprovalRuleTemplateFromRepositoriesRequest(                new BatchDisassociateApprovalRuleTemplateFromRepositoriesInput("totam",                 new String[]{{
                                                add("commodi"),
                                            }});, BatchDisassociateApprovalRuleTemplateFromRepositoriesXAmzTargetEnum.CODE_COMMIT20150413_BATCH_DISASSOCIATE_APPROVAL_RULE_TEMPLATE_FROM_REPOSITORIES) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "modi";
                xAmzCredential = "qui";
                xAmzDate = "impedit";
                xAmzSecurityToken = "cum";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "ipsum";
            }};            

            BatchDisassociateApprovalRuleTemplateFromRepositoriesResponse res = sdk.sdk.batchDisassociateApprovalRuleTemplateFromRepositories(req);

            if (res.batchDisassociateApprovalRuleTemplateFromRepositoriesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetCommits

Returns information about the contents of one or more commits in a repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetCommitsRequest;
import org.openapis.openapi.models.operations.BatchGetCommitsResponse;
import org.openapis.openapi.models.operations.BatchGetCommitsXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchGetCommitsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetCommitsRequest req = new BatchGetCommitsRequest(                new BatchGetCommitsInput(                new String[]{{
                                                add("perferendis"),
                                            }}, "ad");, BatchGetCommitsXAmzTargetEnum.CODE_COMMIT20150413_BATCH_GET_COMMITS) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "sed";
                xAmzCredential = "iste";
                xAmzDate = "dolor";
                xAmzSecurityToken = "natus";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "hic";
            }};            

            BatchGetCommitsResponse res = sdk.sdk.batchGetCommits(req);

            if (res.batchGetCommitsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetRepositories

<p>Returns information about one or more repositories.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetRepositoriesRequest;
import org.openapis.openapi.models.operations.BatchGetRepositoriesResponse;
import org.openapis.openapi.models.operations.BatchGetRepositoriesXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchGetRepositoriesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetRepositoriesRequest req = new BatchGetRepositoriesRequest(                new BatchGetRepositoriesInput(                new String[]{{
                                                add("in"),
                                                add("corporis"),
                                                add("iste"),
                                            }});, BatchGetRepositoriesXAmzTargetEnum.CODE_COMMIT20150413_BATCH_GET_REPOSITORIES) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "quidem";
                xAmzDate = "architecto";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "est";
            }};            

            BatchGetRepositoriesResponse res = sdk.sdk.batchGetRepositories(req);

            if (res.batchGetRepositoriesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createApprovalRuleTemplate

Creates a template for approval rules that can then be associated with one or more repositories in your AWS account. When you associate a template with a repository, AWS CodeCommit creates an approval rule that matches the conditions of the template for all pull requests that meet the conditions of the template. For more information, see <a>AssociateApprovalRuleTemplateWithRepository</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApprovalRuleTemplateRequest;
import org.openapis.openapi.models.operations.CreateApprovalRuleTemplateResponse;
import org.openapis.openapi.models.operations.CreateApprovalRuleTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateApprovalRuleTemplateInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateApprovalRuleTemplateRequest req = new CreateApprovalRuleTemplateRequest(                new CreateApprovalRuleTemplateInput("laborum", "dolores") {{
                                approvalRuleTemplateDescription = "dolorem";
                            }};, CreateApprovalRuleTemplateXAmzTargetEnum.CODE_COMMIT20150413_CREATE_APPROVAL_RULE_TEMPLATE) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "nobis";
                xAmzDate = "enim";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "minima";
            }};            

            CreateApprovalRuleTemplateResponse res = sdk.sdk.createApprovalRuleTemplate(req);

            if (res.createApprovalRuleTemplateOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBranch

<p>Creates a branch in a repository and points the branch to a commit.</p> <note> <p>Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBranchRequest;
import org.openapis.openapi.models.operations.CreateBranchResponse;
import org.openapis.openapi.models.operations.CreateBranchXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateBranchInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBranchRequest req = new CreateBranchRequest(                new CreateBranchInput("accusantium", "iure", "culpa");, CreateBranchXAmzTargetEnum.CODE_COMMIT20150413_CREATE_BRANCH) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "architecto";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "consequuntur";
            }};            

            CreateBranchResponse res = sdk.sdk.createBranch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCommit

Creates a commit for a repository on the tip of a specified branch.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCommitRequest;
import org.openapis.openapi.models.operations.CreateCommitResponse;
import org.openapis.openapi.models.operations.CreateCommitXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateCommitInput;
import org.openapis.openapi.models.shared.DeleteFileEntry;
import org.openapis.openapi.models.shared.FileModeTypeEnumEnum;
import org.openapis.openapi.models.shared.PutFileEntry;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetFileModeEntry;
import org.openapis.openapi.models.shared.SourceFileSpecifier;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCommitRequest req = new CreateCommitRequest(                new CreateCommitInput("mollitia", "occaecati") {{
                                authorName = "numquam";
                                commitMessage = "commodi";
                                deleteFiles = new org.openapis.openapi.models.shared.DeleteFileEntry[]{{
                                    add(new DeleteFileEntry("velit") {{
                                        filePath = "molestiae";
                                    }}),
                                    add(new DeleteFileEntry("quia") {{
                                        filePath = "error";
                                    }}),
                                }};
                                email = "Bernie.Padberg@yahoo.com";
                                keepEmptyFolders = false;
                                parentCommitId = "odit";
                                putFiles = new org.openapis.openapi.models.shared.PutFileEntry[]{{
                                    add(new PutFileEntry("aut") {{
                                        fileContent = "sequi";
                                        fileMode = FileModeTypeEnumEnum.SYMLINK;
                                        filePath = "ipsam";
                                        sourceFile = new SourceFileSpecifier("possimus") {{
                                            filePath = "id";
                                            isMove = false;
                                        }};
                                    }}),
                                    add(new PutFileEntry("reiciendis") {{
                                        fileContent = "quasi";
                                        fileMode = FileModeTypeEnumEnum.NORMAL;
                                        filePath = "temporibus";
                                        sourceFile = new SourceFileSpecifier("quasi") {{
                                            filePath = "laborum";
                                            isMove = false;
                                        }};
                                    }}),
                                    add(new PutFileEntry("ipsa") {{
                                        fileContent = "voluptatibus";
                                        fileMode = FileModeTypeEnumEnum.SYMLINK;
                                        filePath = "nihil";
                                        sourceFile = new SourceFileSpecifier("voluptatibus") {{
                                            filePath = "praesentium";
                                            isMove = false;
                                        }};
                                    }}),
                                    add(new PutFileEntry("reprehenderit") {{
                                        fileContent = "omnis";
                                        fileMode = FileModeTypeEnumEnum.NORMAL;
                                        filePath = "cum";
                                        sourceFile = new SourceFileSpecifier("doloremque") {{
                                            filePath = "perferendis";
                                            isMove = false;
                                        }};
                                    }}),
                                }};
                                setFileModes = new org.openapis.openapi.models.shared.SetFileModeEntry[]{{
                                    add(new SetFileModeEntry(FileModeTypeEnumEnum.NORMAL, "dolore") {{
                                        fileMode = FileModeTypeEnumEnum.SYMLINK;
                                        filePath = "dicta";
                                    }}),
                                    add(new SetFileModeEntry(FileModeTypeEnumEnum.SYMLINK, "enim") {{
                                        fileMode = FileModeTypeEnumEnum.NORMAL;
                                        filePath = "dicta";
                                    }}),
                                }};
                            }};, CreateCommitXAmzTargetEnum.CODE_COMMIT20150413_CREATE_COMMIT) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "repudiandae";
                xAmzDate = "quae";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "molestias";
            }};            

            CreateCommitResponse res = sdk.sdk.createCommit(req);

            if (res.createCommitOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPullRequest

Creates a pull request in the specified repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePullRequestRequest;
import org.openapis.openapi.models.operations.CreatePullRequestResponse;
import org.openapis.openapi.models.operations.CreatePullRequestXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreatePullRequestInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Target;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePullRequestRequest req = new CreatePullRequestRequest(                new CreatePullRequestInput(                new org.openapis.openapi.models.shared.Target[]{{
                                                add(new Target("voluptates", "quasi") {{
                                                    destinationReference = "modi";
                                                    repositoryName = "praesentium";
                                                    sourceReference = "rem";
                                                }}),
                                                add(new Target("itaque", "incidunt") {{
                                                    destinationReference = "repudiandae";
                                                    repositoryName = "sint";
                                                    sourceReference = "veritatis";
                                                }}),
                                                add(new Target("quibusdam", "explicabo") {{
                                                    destinationReference = "enim";
                                                    repositoryName = "consequatur";
                                                    sourceReference = "est";
                                                }}),
                                                add(new Target("labore", "modi") {{
                                                    destinationReference = "deserunt";
                                                    repositoryName = "distinctio";
                                                    sourceReference = "quibusdam";
                                                }}),
                                            }}, "qui") {{
                                clientRequestToken = "aliquid";
                                description = "cupiditate";
                            }};, CreatePullRequestXAmzTargetEnum.CODE_COMMIT20150413_CREATE_PULL_REQUEST) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "magni";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "fugit";
            }};            

            CreatePullRequestResponse res = sdk.sdk.createPullRequest(req);

            if (res.createPullRequestOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPullRequestApprovalRule

Creates an approval rule for a pull request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePullRequestApprovalRuleRequest;
import org.openapis.openapi.models.operations.CreatePullRequestApprovalRuleResponse;
import org.openapis.openapi.models.operations.CreatePullRequestApprovalRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreatePullRequestApprovalRuleInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePullRequestApprovalRuleRequest req = new CreatePullRequestApprovalRuleRequest(                new CreatePullRequestApprovalRuleInput("excepturi", "tempora", "facilis");, CreatePullRequestApprovalRuleXAmzTargetEnum.CODE_COMMIT20150413_CREATE_PULL_REQUEST_APPROVAL_RULE) {{
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "labore";
                xAmzCredential = "delectus";
                xAmzDate = "eum";
                xAmzSecurityToken = "non";
                xAmzSignature = "eligendi";
                xAmzSignedHeaders = "sint";
            }};            

            CreatePullRequestApprovalRuleResponse res = sdk.sdk.createPullRequestApprovalRule(req);

            if (res.createPullRequestApprovalRuleOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRepository

Creates a new, empty repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRepositoryRequest;
import org.openapis.openapi.models.operations.CreateRepositoryResponse;
import org.openapis.openapi.models.operations.CreateRepositoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateRepositoryInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRepositoryRequest req = new CreateRepositoryRequest(                new CreateRepositoryInput("provident") {{
                                repositoryDescription = "necessitatibus";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("officia", "dolor");
                                    put("debitis", "a");
                                    put("dolorum", "in");
                                }};
                            }};, CreateRepositoryXAmzTargetEnum.CODE_COMMIT20150413_CREATE_REPOSITORY) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "illum";
                xAmzCredential = "maiores";
                xAmzDate = "rerum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "cumque";
            }};            

            CreateRepositoryResponse res = sdk.sdk.createRepository(req);

            if (res.createRepositoryOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUnreferencedMergeCommit

<p>Creates an unreferenced commit that represents the result of merging two branches using a specified merge strategy. This can help you determine the outcome of a potential merge. This API cannot be used with the fast-forward merge strategy because that strategy does not create a merge commit.</p> <note> <p>This unreferenced merge commit can only be accessed using the GetCommit API or through git commands such as git fetch. To retrieve this commit, you must specify its commit ID or otherwise reference it.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUnreferencedMergeCommitRequest;
import org.openapis.openapi.models.operations.CreateUnreferencedMergeCommitResponse;
import org.openapis.openapi.models.operations.CreateUnreferencedMergeCommitXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConflictDetailLevelTypeEnumEnum;
import org.openapis.openapi.models.shared.ConflictResolution;
import org.openapis.openapi.models.shared.ConflictResolutionStrategyTypeEnumEnum;
import org.openapis.openapi.models.shared.CreateUnreferencedMergeCommitInput;
import org.openapis.openapi.models.shared.DeleteFileEntry;
import org.openapis.openapi.models.shared.FileModeTypeEnumEnum;
import org.openapis.openapi.models.shared.MergeOptionTypeEnumEnum;
import org.openapis.openapi.models.shared.ReplaceContentEntry;
import org.openapis.openapi.models.shared.ReplacementTypeEnumEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetFileModeEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUnreferencedMergeCommitRequest req = new CreateUnreferencedMergeCommitRequest(                new CreateUnreferencedMergeCommitInput("ea", MergeOptionTypeEnumEnum.SQUASH_MERGE, "laborum", "accusamus") {{
                                authorName = "non";
                                commitMessage = "occaecati";
                                conflictDetailLevel = ConflictDetailLevelTypeEnumEnum.FILE_LEVEL;
                                conflictResolution = new ConflictResolution() {{
                                    deleteFiles = new org.openapis.openapi.models.shared.DeleteFileEntry[]{{
                                        add(new DeleteFileEntry("quidem") {{
                                            filePath = "delectus";
                                        }}),
                                        add(new DeleteFileEntry("nam") {{
                                            filePath = "provident";
                                        }}),
                                        add(new DeleteFileEntry("blanditiis") {{
                                            filePath = "id";
                                        }}),
                                        add(new DeleteFileEntry("sapiente") {{
                                            filePath = "deleniti";
                                        }}),
                                    }};
                                    replaceContents = new org.openapis.openapi.models.shared.ReplaceContentEntry[]{{
                                        add(new ReplaceContentEntry("omnis", ReplacementTypeEnumEnum.KEEP_SOURCE) {{
                                            content = "deserunt";
                                            fileMode = FileModeTypeEnumEnum.NORMAL;
                                            filePath = "vel";
                                            replacementType = ReplacementTypeEnumEnum.KEEP_DESTINATION;
                                        }}),
                                    }};
                                    setFileModes = new org.openapis.openapi.models.shared.SetFileModeEntry[]{{
                                        add(new SetFileModeEntry(FileModeTypeEnumEnum.SYMLINK, "id") {{
                                            fileMode = FileModeTypeEnumEnum.NORMAL;
                                            filePath = "magnam";
                                        }}),
                                    }};
                                }};;
                                conflictResolutionStrategy = ConflictResolutionStrategyTypeEnumEnum.ACCEPT_SOURCE;
                                email = "Geraldine.Mosciski87@gmail.com";
                                keepEmptyFolders = false;
                            }};, CreateUnreferencedMergeCommitXAmzTargetEnum.CODE_COMMIT20150413_CREATE_UNREFERENCED_MERGE_COMMIT) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "magnam";
                xAmzDate = "et";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "provident";
            }};            

            CreateUnreferencedMergeCommitResponse res = sdk.sdk.createUnreferencedMergeCommit(req);

            if (res.createUnreferencedMergeCommitOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApprovalRuleTemplate

Deletes a specified approval rule template. Deleting a template does not remove approval rules on pull requests already created with the template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApprovalRuleTemplateRequest;
import org.openapis.openapi.models.operations.DeleteApprovalRuleTemplateResponse;
import org.openapis.openapi.models.operations.DeleteApprovalRuleTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteApprovalRuleTemplateInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApprovalRuleTemplateRequest req = new DeleteApprovalRuleTemplateRequest(                new DeleteApprovalRuleTemplateInput("sint");, DeleteApprovalRuleTemplateXAmzTargetEnum.CODE_COMMIT20150413_DELETE_APPROVAL_RULE_TEMPLATE) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "reiciendis";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "ad";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "dolor";
            }};            

            DeleteApprovalRuleTemplateResponse res = sdk.sdk.deleteApprovalRuleTemplate(req);

            if (res.deleteApprovalRuleTemplateOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBranch

Deletes a branch from a repository, unless that branch is the default branch for the repository. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBranchRequest;
import org.openapis.openapi.models.operations.DeleteBranchResponse;
import org.openapis.openapi.models.operations.DeleteBranchXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteBranchInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteBranchRequest req = new DeleteBranchRequest(                new DeleteBranchInput("odit", "nemo");, DeleteBranchXAmzTargetEnum.CODE_COMMIT20150413_DELETE_BRANCH) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "iure";
                xAmzCredential = "doloribus";
                xAmzDate = "debitis";
                xAmzSecurityToken = "eius";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "deleniti";
            }};            

            DeleteBranchResponse res = sdk.sdk.deleteBranch(req);

            if (res.deleteBranchOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCommentContent

Deletes the content of a comment made on a change, file, or commit in a repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCommentContentRequest;
import org.openapis.openapi.models.operations.DeleteCommentContentResponse;
import org.openapis.openapi.models.operations.DeleteCommentContentXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteCommentContentInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCommentContentRequest req = new DeleteCommentContentRequest(                new DeleteCommentContentInput("in");, DeleteCommentContentXAmzTargetEnum.CODE_COMMIT20150413_DELETE_COMMENT_CONTENT) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "repudiandae";
                xAmzDate = "ullam";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "repellat";
            }};            

            DeleteCommentContentResponse res = sdk.sdk.deleteCommentContent(req);

            if (res.deleteCommentContentOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFile

Deletes a specified file from a specified branch. A commit is created on the branch that contains the revision. The file still exists in the commits earlier to the commit that contains the deletion.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFileRequest;
import org.openapis.openapi.models.operations.DeleteFileResponse;
import org.openapis.openapi.models.operations.DeleteFileXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteFileInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFileRequest req = new DeleteFileRequest(                new DeleteFileInput("sed", "saepe", "pariatur", "accusantium") {{
                                commitMessage = "consequuntur";
                                email = "Levi77@yahoo.com";
                                keepEmptyFolders = false;
                                name = "Ervin Schoen";
                            }};, DeleteFileXAmzTargetEnum.CODE_COMMIT20150413_DELETE_FILE) {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "ea";
                xAmzCredential = "accusantium";
                xAmzDate = "ab";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "ipsam";
            }};            

            DeleteFileResponse res = sdk.sdk.deleteFile(req);

            if (res.deleteFileOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePullRequestApprovalRule

Deletes an approval rule from a specified pull request. Approval rules can be deleted from a pull request only if the pull request is open, and if the approval rule was created specifically for a pull request and not generated from an approval rule template associated with the repository where the pull request was created. You cannot delete an approval rule from a merged or closed pull request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePullRequestApprovalRuleRequest;
import org.openapis.openapi.models.operations.DeletePullRequestApprovalRuleResponse;
import org.openapis.openapi.models.operations.DeletePullRequestApprovalRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeletePullRequestApprovalRuleInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePullRequestApprovalRuleRequest req = new DeletePullRequestApprovalRuleRequest(                new DeletePullRequestApprovalRuleInput("autem", "nam");, DeletePullRequestApprovalRuleXAmzTargetEnum.CODE_COMMIT20150413_DELETE_PULL_REQUEST_APPROVAL_RULE) {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "nemo";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "amet";
            }};            

            DeletePullRequestApprovalRuleResponse res = sdk.sdk.deletePullRequestApprovalRule(req);

            if (res.deletePullRequestApprovalRuleOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRepository

<p>Deletes a repository. If a specified repository was already deleted, a null repository ID is returned.</p> <important> <p>Deleting a repository also deletes all associated objects and metadata. After a repository is deleted, all future push calls to the deleted repository fail.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoryRequest;
import org.openapis.openapi.models.operations.DeleteRepositoryResponse;
import org.openapis.openapi.models.operations.DeleteRepositoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRepositoryInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRepositoryRequest req = new DeleteRepositoryRequest(                new DeleteRepositoryInput("cumque");, DeleteRepositoryXAmzTargetEnum.CODE_COMMIT20150413_DELETE_REPOSITORY) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "hic";
                xAmzCredential = "libero";
                xAmzDate = "nobis";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "totam";
            }};            

            DeleteRepositoryResponse res = sdk.sdk.deleteRepository(req);

            if (res.deleteRepositoryOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMergeConflicts

Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy. If the merge option for the attempted merge is specified as FAST_FORWARD_MERGE, an exception is thrown.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMergeConflictsRequest;
import org.openapis.openapi.models.operations.DescribeMergeConflictsResponse;
import org.openapis.openapi.models.operations.DescribeMergeConflictsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConflictDetailLevelTypeEnumEnum;
import org.openapis.openapi.models.shared.ConflictResolutionStrategyTypeEnumEnum;
import org.openapis.openapi.models.shared.DescribeMergeConflictsInput;
import org.openapis.openapi.models.shared.MergeOptionTypeEnumEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMergeConflictsRequest req = new DescribeMergeConflictsRequest(                new DescribeMergeConflictsInput("eaque", "quis", MergeOptionTypeEnumEnum.FAST_FORWARD_MERGE, "eos", "perferendis") {{
                                conflictDetailLevel = ConflictDetailLevelTypeEnumEnum.FILE_LEVEL;
                                conflictResolutionStrategy = ConflictResolutionStrategyTypeEnumEnum.AUTOMERGE;
                                maxMergeHunks = 463451L;
                                nextToken = "dolor";
                            }};, DescribeMergeConflictsXAmzTargetEnum.CODE_COMMIT20150413_DESCRIBE_MERGE_CONFLICTS) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "hic";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "perspiciatis";
                maxMergeHunks = "voluptatem";
                nextToken = "porro";
            }};            

            DescribeMergeConflictsResponse res = sdk.sdk.describeMergeConflicts(req);

            if (res.describeMergeConflictsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePullRequestEvents

Returns information about one or more pull request events.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePullRequestEventsRequest;
import org.openapis.openapi.models.operations.DescribePullRequestEventsResponse;
import org.openapis.openapi.models.operations.DescribePullRequestEventsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribePullRequestEventsInput;
import org.openapis.openapi.models.shared.PullRequestEventTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePullRequestEventsRequest req = new DescribePullRequestEventsRequest(                new DescribePullRequestEventsInput("blanditiis") {{
                                actorArn = "error";
                                maxResults = 50370L;
                                nextToken = "occaecati";
                                pullRequestEventType = PullRequestEventTypeEnum.PULL_REQUEST_APPROVAL_RULE_DELETED;
                            }};, DescribePullRequestEventsXAmzTargetEnum.CODE_COMMIT20150413_DESCRIBE_PULL_REQUEST_EVENTS) {{
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "earum";
                xAmzDate = "modi";
                xAmzSecurityToken = "iste";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "deleniti";
                maxResults = "pariatur";
                nextToken = "provident";
            }};            

            DescribePullRequestEventsResponse res = sdk.sdk.describePullRequestEvents(req);

            if (res.describePullRequestEventsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateApprovalRuleTemplateFromRepository

Removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository. This does not delete any approval rules previously created for pull requests through the template association.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateApprovalRuleTemplateFromRepositoryRequest;
import org.openapis.openapi.models.operations.DisassociateApprovalRuleTemplateFromRepositoryResponse;
import org.openapis.openapi.models.operations.DisassociateApprovalRuleTemplateFromRepositoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateApprovalRuleTemplateFromRepositoryInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateApprovalRuleTemplateFromRepositoryRequest req = new DisassociateApprovalRuleTemplateFromRepositoryRequest(                new DisassociateApprovalRuleTemplateFromRepositoryInput("libero", "delectus");, DisassociateApprovalRuleTemplateFromRepositoryXAmzTargetEnum.CODE_COMMIT20150413_DISASSOCIATE_APPROVAL_RULE_TEMPLATE_FROM_REPOSITORY) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "quos";
                xAmzCredential = "aliquid";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "qui";
            }};            

            DisassociateApprovalRuleTemplateFromRepositoryResponse res = sdk.sdk.disassociateApprovalRuleTemplateFromRepository(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## evaluatePullRequestApprovalRules

Evaluates whether a pull request has met all the conditions specified in its associated approval rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EvaluatePullRequestApprovalRulesRequest;
import org.openapis.openapi.models.operations.EvaluatePullRequestApprovalRulesResponse;
import org.openapis.openapi.models.operations.EvaluatePullRequestApprovalRulesXAmzTargetEnum;
import org.openapis.openapi.models.shared.EvaluatePullRequestApprovalRulesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EvaluatePullRequestApprovalRulesRequest req = new EvaluatePullRequestApprovalRulesRequest(                new EvaluatePullRequestApprovalRulesInput("hic", "excepturi");, EvaluatePullRequestApprovalRulesXAmzTargetEnum.CODE_COMMIT20150413_EVALUATE_PULL_REQUEST_APPROVAL_RULES) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "dignissimos";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "amet";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "numquam";
            }};            

            EvaluatePullRequestApprovalRulesResponse res = sdk.sdk.evaluatePullRequestApprovalRules(req);

            if (res.evaluatePullRequestApprovalRulesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApprovalRuleTemplate

Returns information about a specified approval rule template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApprovalRuleTemplateRequest;
import org.openapis.openapi.models.operations.GetApprovalRuleTemplateResponse;
import org.openapis.openapi.models.operations.GetApprovalRuleTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetApprovalRuleTemplateInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetApprovalRuleTemplateRequest req = new GetApprovalRuleTemplateRequest(                new GetApprovalRuleTemplateInput("ipsa");, GetApprovalRuleTemplateXAmzTargetEnum.CODE_COMMIT20150413_GET_APPROVAL_RULE_TEMPLATE) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "iure";
                xAmzCredential = "odio";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            GetApprovalRuleTemplateResponse res = sdk.sdk.getApprovalRuleTemplate(req);

            if (res.getApprovalRuleTemplateOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBlob

Returns the base-64 encoded content of an individual blob in a repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBlobRequest;
import org.openapis.openapi.models.operations.GetBlobResponse;
import org.openapis.openapi.models.operations.GetBlobXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetBlobInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBlobRequest req = new GetBlobRequest(                new GetBlobInput("natus", "eos");, GetBlobXAmzTargetEnum.CODE_COMMIT20150413_GET_BLOB) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "sit";
                xAmzCredential = "fugiat";
                xAmzDate = "ab";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "iusto";
            }};            

            GetBlobResponse res = sdk.sdk.getBlob(req);

            if (res.getBlobOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBranch

Returns information about a repository branch, including its name and the last commit ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBranchRequest;
import org.openapis.openapi.models.operations.GetBranchResponse;
import org.openapis.openapi.models.operations.GetBranchXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetBranchInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBranchRequest req = new GetBranchRequest(                new GetBranchInput() {{
                                branchName = "dolorum";
                                repositoryName = "deleniti";
                            }};, GetBranchXAmzTargetEnum.CODE_COMMIT20150413_GET_BRANCH) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "distinctio";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "voluptate";
            }};            

            GetBranchResponse res = sdk.sdk.getBranch(req);

            if (res.getBranchOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getComment

<p>Returns the content of a comment made on a change, file, or commit in a repository. </p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommentRequest;
import org.openapis.openapi.models.operations.GetCommentResponse;
import org.openapis.openapi.models.operations.GetCommentXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetCommentInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommentRequest req = new GetCommentRequest(                new GetCommentInput("saepe");, GetCommentXAmzTargetEnum.CODE_COMMIT20150413_GET_COMMENT) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "perferendis";
                xAmzDate = "amet";
                xAmzSecurityToken = "optio";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "ad";
            }};            

            GetCommentResponse res = sdk.sdk.getComment(req);

            if (res.getCommentOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommentReactions

Returns information about reactions to a specified comment ID. Reactions from users who have been deleted will not be included in the count.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommentReactionsRequest;
import org.openapis.openapi.models.operations.GetCommentReactionsResponse;
import org.openapis.openapi.models.operations.GetCommentReactionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetCommentReactionsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommentReactionsRequest req = new GetCommentReactionsRequest(                new GetCommentReactionsInput("suscipit") {{
                                maxResults = 645785L;
                                nextToken = "provident";
                                reactionUserArn = "minima";
                            }};, GetCommentReactionsXAmzTargetEnum.CODE_COMMIT20150413_GET_COMMENT_REACTIONS) {{
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "totam";
                xAmzCredential = "similique";
                xAmzDate = "alias";
                xAmzSecurityToken = "at";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "tempora";
                maxResults = "vel";
                nextToken = "quod";
            }};            

            GetCommentReactionsResponse res = sdk.sdk.getCommentReactions(req);

            if (res.getCommentReactionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommentsForComparedCommit

<p>Returns information about comments made on the comparison between two commits.</p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommentsForComparedCommitRequest;
import org.openapis.openapi.models.operations.GetCommentsForComparedCommitResponse;
import org.openapis.openapi.models.operations.GetCommentsForComparedCommitXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetCommentsForComparedCommitInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommentsForComparedCommitRequest req = new GetCommentsForComparedCommitRequest(                new GetCommentsForComparedCommitInput("qui", "dolorum") {{
                                beforeCommitId = "a";
                                maxResults = 456130L;
                                nextToken = "harum";
                            }};, GetCommentsForComparedCommitXAmzTargetEnum.CODE_COMMIT20150413_GET_COMMENTS_FOR_COMPARED_COMMIT) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "quisquam";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "amet";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "accusamus";
                maxResults = "numquam";
                nextToken = "enim";
            }};            

            GetCommentsForComparedCommitResponse res = sdk.sdk.getCommentsForComparedCommit(req);

            if (res.getCommentsForComparedCommitOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommentsForPullRequest

<p>Returns comments made on a pull request.</p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommentsForPullRequestRequest;
import org.openapis.openapi.models.operations.GetCommentsForPullRequestResponse;
import org.openapis.openapi.models.operations.GetCommentsForPullRequestXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetCommentsForPullRequestInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommentsForPullRequestRequest req = new GetCommentsForPullRequestRequest(                new GetCommentsForPullRequestInput("sapiente") {{
                                afterCommitId = "totam";
                                beforeCommitId = "nihil";
                                maxResults = 25662L;
                                nextToken = "expedita";
                                repositoryName = "neque";
                            }};, GetCommentsForPullRequestXAmzTargetEnum.CODE_COMMIT20150413_GET_COMMENTS_FOR_PULL_REQUEST) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "vel";
                xAmzCredential = "libero";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "ipsum";
                maxResults = "incidunt";
                nextToken = "qui";
            }};            

            GetCommentsForPullRequestResponse res = sdk.sdk.getCommentsForPullRequest(req);

            if (res.getCommentsForPullRequestOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommit

Returns information about a commit, including commit message and committer information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommitRequest;
import org.openapis.openapi.models.operations.GetCommitResponse;
import org.openapis.openapi.models.operations.GetCommitXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetCommitInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommitRequest req = new GetCommitRequest(                new GetCommitInput("maxime", "pariatur");, GetCommitXAmzTargetEnum.CODE_COMMIT20150413_GET_COMMIT) {{
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "laborum";
                xAmzDate = "totam";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "dolores";
            }};            

            GetCommitResponse res = sdk.sdk.getCommit(req);

            if (res.getCommitOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDifferences

Returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference). Results can be limited to a specified path.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDifferencesRequest;
import org.openapis.openapi.models.operations.GetDifferencesResponse;
import org.openapis.openapi.models.operations.GetDifferencesXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDifferencesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDifferencesRequest req = new GetDifferencesRequest(                new GetDifferencesInput("facilis", "aliquid") {{
                                maxResults = 463150L;
                                nextToken = "molestias";
                                afterPath = "temporibus";
                                beforeCommitSpecifier = "qui";
                                beforePath = "neque";
                            }};, GetDifferencesXAmzTargetEnum.CODE_COMMIT20150413_GET_DIFFERENCES) {{
                maxResults = "fugit";
                nextToken = "magni";
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "ullam";
                xAmzDate = "nam";
                xAmzSecurityToken = "hic";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "cumque";
            }};            

            GetDifferencesResponse res = sdk.sdk.getDifferences(req);

            if (res.getDifferencesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFile

Returns the base-64 encoded contents of a specified file and its metadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFileRequest;
import org.openapis.openapi.models.operations.GetFileResponse;
import org.openapis.openapi.models.operations.GetFileXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetFileInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFileRequest req = new GetFileRequest(                new GetFileInput("nobis", "et") {{
                                commitSpecifier = "saepe";
                            }};, GetFileXAmzTargetEnum.CODE_COMMIT20150413_GET_FILE) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "nobis";
                xAmzDate = "quos";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "aperiam";
            }};            

            GetFileResponse res = sdk.sdk.getFile(req);

            if (res.getFileOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFolder

Returns the contents of a specified folder in a repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFolderRequest;
import org.openapis.openapi.models.operations.GetFolderResponse;
import org.openapis.openapi.models.operations.GetFolderXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetFolderInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFolderRequest req = new GetFolderRequest(                new GetFolderInput("dolorem", "dolore") {{
                                commitSpecifier = "labore";
                            }};, GetFolderXAmzTargetEnum.CODE_COMMIT20150413_GET_FOLDER) {{
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "architecto";
                xAmzDate = "quae";
                xAmzSecurityToken = "aut";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "itaque";
            }};            

            GetFolderResponse res = sdk.sdk.getFolder(req);

            if (res.getFolderOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMergeCommit

Returns information about a specified merge commit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMergeCommitRequest;
import org.openapis.openapi.models.operations.GetMergeCommitResponse;
import org.openapis.openapi.models.operations.GetMergeCommitXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConflictDetailLevelTypeEnumEnum;
import org.openapis.openapi.models.shared.ConflictResolutionStrategyTypeEnumEnum;
import org.openapis.openapi.models.shared.GetMergeCommitInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMergeCommitRequest req = new GetMergeCommitRequest(                new GetMergeCommitInput("est", "repellendus", "porro") {{
                                conflictDetailLevel = ConflictDetailLevelTypeEnumEnum.LINE_LEVEL;
                                conflictResolutionStrategy = ConflictResolutionStrategyTypeEnumEnum.ACCEPT_SOURCE;
                            }};, GetMergeCommitXAmzTargetEnum.CODE_COMMIT20150413_GET_MERGE_COMMIT) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "qui";
                xAmzDate = "quae";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "occaecati";
            }};            

            GetMergeCommitResponse res = sdk.sdk.getMergeCommit(req);

            if (res.getMergeCommitOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMergeConflicts

Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMergeConflictsRequest;
import org.openapis.openapi.models.operations.GetMergeConflictsResponse;
import org.openapis.openapi.models.operations.GetMergeConflictsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConflictDetailLevelTypeEnumEnum;
import org.openapis.openapi.models.shared.ConflictResolutionStrategyTypeEnumEnum;
import org.openapis.openapi.models.shared.GetMergeConflictsInput;
import org.openapis.openapi.models.shared.MergeOptionTypeEnumEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMergeConflictsRequest req = new GetMergeConflictsRequest(                new GetMergeConflictsInput("quisquam", MergeOptionTypeEnumEnum.THREE_WAY_MERGE, "omnis", "quis") {{
                                conflictDetailLevel = ConflictDetailLevelTypeEnumEnum.FILE_LEVEL;
                                conflictResolutionStrategy = ConflictResolutionStrategyTypeEnumEnum.AUTOMERGE;
                                maxConflictFiles = 455169L;
                                nextToken = "consectetur";
                            }};, GetMergeConflictsXAmzTargetEnum.CODE_COMMIT20150413_GET_MERGE_CONFLICTS) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "dignissimos";
                xAmzDate = "hic";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "odio";
                maxConflictFiles = "similique";
                nextToken = "facilis";
            }};            

            GetMergeConflictsResponse res = sdk.sdk.getMergeConflicts(req);

            if (res.getMergeConflictsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMergeOptions

Returns information about the merge options available for merging two specified branches. For details about why a merge option is not available, use GetMergeConflicts or DescribeMergeConflicts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMergeOptionsRequest;
import org.openapis.openapi.models.operations.GetMergeOptionsResponse;
import org.openapis.openapi.models.operations.GetMergeOptionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConflictDetailLevelTypeEnumEnum;
import org.openapis.openapi.models.shared.ConflictResolutionStrategyTypeEnumEnum;
import org.openapis.openapi.models.shared.GetMergeOptionsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMergeOptionsRequest req = new GetMergeOptionsRequest(                new GetMergeOptionsInput("ducimus", "dolore", "quibusdam") {{
                                conflictDetailLevel = ConflictDetailLevelTypeEnumEnum.LINE_LEVEL;
                                conflictResolutionStrategy = ConflictResolutionStrategyTypeEnumEnum.NONE;
                            }};, GetMergeOptionsXAmzTargetEnum.CODE_COMMIT20150413_GET_MERGE_OPTIONS) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "aut";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "fugit";
            }};            

            GetMergeOptionsResponse res = sdk.sdk.getMergeOptions(req);

            if (res.getMergeOptionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPullRequest

Gets information about a pull request in a specified repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPullRequestRequest;
import org.openapis.openapi.models.operations.GetPullRequestResponse;
import org.openapis.openapi.models.operations.GetPullRequestXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetPullRequestInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPullRequestRequest req = new GetPullRequestRequest(                new GetPullRequestInput("maiores");, GetPullRequestXAmzTargetEnum.CODE_COMMIT20150413_GET_PULL_REQUEST) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "eligendi";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "alias";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "tempora";
            }};            

            GetPullRequestResponse res = sdk.sdk.getPullRequest(req);

            if (res.getPullRequestOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPullRequestApprovalStates

Gets information about the approval states for a specified pull request. Approval states only apply to pull requests that have one or more approval rules applied to them.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPullRequestApprovalStatesRequest;
import org.openapis.openapi.models.operations.GetPullRequestApprovalStatesResponse;
import org.openapis.openapi.models.operations.GetPullRequestApprovalStatesXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetPullRequestApprovalStatesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPullRequestApprovalStatesRequest req = new GetPullRequestApprovalStatesRequest(                new GetPullRequestApprovalStatesInput("ea", "aspernatur");, GetPullRequestApprovalStatesXAmzTargetEnum.CODE_COMMIT20150413_GET_PULL_REQUEST_APPROVAL_STATES) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "magnam";
                xAmzDate = "ratione";
                xAmzSecurityToken = "ex";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "dicta";
            }};            

            GetPullRequestApprovalStatesResponse res = sdk.sdk.getPullRequestApprovalStates(req);

            if (res.getPullRequestApprovalStatesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPullRequestOverrideState

Returns information about whether approval rules have been set aside (overridden) for a pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPullRequestOverrideStateRequest;
import org.openapis.openapi.models.operations.GetPullRequestOverrideStateResponse;
import org.openapis.openapi.models.operations.GetPullRequestOverrideStateXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetPullRequestOverrideStateInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPullRequestOverrideStateRequest req = new GetPullRequestOverrideStateRequest(                new GetPullRequestOverrideStateInput("maiores", "quasi");, GetPullRequestOverrideStateXAmzTargetEnum.CODE_COMMIT20150413_GET_PULL_REQUEST_OVERRIDE_STATE) {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "excepturi";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "quisquam";
            }};            

            GetPullRequestOverrideStateResponse res = sdk.sdk.getPullRequestOverrideState(req);

            if (res.getPullRequestOverrideStateOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepository

<p>Returns information about a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoryRequest;
import org.openapis.openapi.models.operations.GetRepositoryResponse;
import org.openapis.openapi.models.operations.GetRepositoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRepositoryInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRepositoryRequest req = new GetRepositoryRequest(                new GetRepositoryInput("ea");, GetRepositoryXAmzTargetEnum.CODE_COMMIT20150413_GET_REPOSITORY) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "veniam";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "inventore";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "ea";
            }};            

            GetRepositoryResponse res = sdk.sdk.getRepository(req);

            if (res.getRepositoryOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoryTriggers

Gets information about triggers configured for a repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoryTriggersRequest;
import org.openapis.openapi.models.operations.GetRepositoryTriggersResponse;
import org.openapis.openapi.models.operations.GetRepositoryTriggersXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRepositoryTriggersInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRepositoryTriggersRequest req = new GetRepositoryTriggersRequest(                new GetRepositoryTriggersInput("consectetur");, GetRepositoryTriggersXAmzTargetEnum.CODE_COMMIT20150413_GET_REPOSITORY_TRIGGERS) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "minima";
                xAmzDate = "eaque";
                xAmzSecurityToken = "a";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "aut";
            }};            

            GetRepositoryTriggersResponse res = sdk.sdk.getRepositoryTriggers(req);

            if (res.getRepositoryTriggersOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listApprovalRuleTemplates

Lists all approval rule templates in the specified AWS Region in your AWS account. If an AWS Region is not specified, the AWS Region where you are signed in is used.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListApprovalRuleTemplatesRequest;
import org.openapis.openapi.models.operations.ListApprovalRuleTemplatesResponse;
import org.openapis.openapi.models.operations.ListApprovalRuleTemplatesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListApprovalRuleTemplatesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListApprovalRuleTemplatesRequest req = new ListApprovalRuleTemplatesRequest(                new ListApprovalRuleTemplatesInput() {{
                                maxResults = 533466L;
                                nextToken = "impedit";
                            }};, ListApprovalRuleTemplatesXAmzTargetEnum.CODE_COMMIT20150413_LIST_APPROVAL_RULE_TEMPLATES) {{
                xAmzAlgorithm = "aliquam";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "accusamus";
                xAmzDate = "inventore";
                xAmzSecurityToken = "non";
                xAmzSignature = "et";
                xAmzSignedHeaders = "dolorum";
                maxResults = "laborum";
                nextToken = "placeat";
            }};            

            ListApprovalRuleTemplatesResponse res = sdk.sdk.listApprovalRuleTemplates(req);

            if (res.listApprovalRuleTemplatesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssociatedApprovalRuleTemplatesForRepository

Lists all approval rule templates that are associated with a specified repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssociatedApprovalRuleTemplatesForRepositoryRequest;
import org.openapis.openapi.models.operations.ListAssociatedApprovalRuleTemplatesForRepositoryResponse;
import org.openapis.openapi.models.operations.ListAssociatedApprovalRuleTemplatesForRepositoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAssociatedApprovalRuleTemplatesForRepositoryInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAssociatedApprovalRuleTemplatesForRepositoryRequest req = new ListAssociatedApprovalRuleTemplatesForRepositoryRequest(                new ListAssociatedApprovalRuleTemplatesForRepositoryInput("eum") {{
                                maxResults = 420539L;
                                nextToken = "nobis";
                            }};, ListAssociatedApprovalRuleTemplatesForRepositoryXAmzTargetEnum.CODE_COMMIT20150413_LIST_ASSOCIATED_APPROVAL_RULE_TEMPLATES_FOR_REPOSITORY) {{
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "nulla";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "libero";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "tempora";
                maxResults = "numquam";
                nextToken = "explicabo";
            }};            

            ListAssociatedApprovalRuleTemplatesForRepositoryResponse res = sdk.sdk.listAssociatedApprovalRuleTemplatesForRepository(req);

            if (res.listAssociatedApprovalRuleTemplatesForRepositoryOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBranches

Gets information about one or more branches in a repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBranchesRequest;
import org.openapis.openapi.models.operations.ListBranchesResponse;
import org.openapis.openapi.models.operations.ListBranchesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListBranchesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBranchesRequest req = new ListBranchesRequest(                new ListBranchesInput("ipsa") {{
                                nextToken = "molestiae";
                            }};, ListBranchesXAmzTargetEnum.CODE_COMMIT20150413_LIST_BRANCHES) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "odio";
                xAmzCredential = "eius";
                xAmzDate = "esse";
                xAmzSecurityToken = "esse";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "fuga";
                nextToken = "reprehenderit";
            }};            

            ListBranchesResponse res = sdk.sdk.listBranches(req);

            if (res.listBranchesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPullRequests

Returns a list of pull requests for a specified repository. The return list can be refined by pull request status or pull request author ARN.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPullRequestsRequest;
import org.openapis.openapi.models.operations.ListPullRequestsResponse;
import org.openapis.openapi.models.operations.ListPullRequestsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListPullRequestsInput;
import org.openapis.openapi.models.shared.PullRequestStatusEnumEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPullRequestsRequest req = new ListPullRequestsRequest(                new ListPullRequestsInput("fugiat") {{
                                authorArn = "ut";
                                maxResults = 433439L;
                                nextToken = "suscipit";
                                pullRequestStatus = PullRequestStatusEnumEnum.CLOSED;
                            }};, ListPullRequestsXAmzTargetEnum.CODE_COMMIT20150413_LIST_PULL_REQUESTS) {{
                xAmzAlgorithm = "eos";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "quisquam";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "id";
                xAmzSignedHeaders = "quidem";
                maxResults = "neque";
                nextToken = "quo";
            }};            

            ListPullRequestsResponse res = sdk.sdk.listPullRequests(req);

            if (res.listPullRequestsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRepositories

Gets information about one or more repositories.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRepositoriesRequest;
import org.openapis.openapi.models.operations.ListRepositoriesResponse;
import org.openapis.openapi.models.operations.ListRepositoriesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListRepositoriesInput;
import org.openapis.openapi.models.shared.OrderEnumEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortByEnumEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRepositoriesRequest req = new ListRepositoriesRequest(                new ListRepositoriesInput() {{
                                nextToken = "quo";
                                order = OrderEnumEnum.DESCENDING;
                                sortBy = SortByEnumEnum.REPOSITORY_NAME;
                            }};, ListRepositoriesXAmzTargetEnum.CODE_COMMIT20150413_LIST_REPOSITORIES) {{
                xAmzAlgorithm = "eos";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "ab";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "debitis";
                nextToken = "ipsam";
            }};            

            ListRepositoriesResponse res = sdk.sdk.listRepositories(req);

            if (res.listRepositoriesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRepositoriesForApprovalRuleTemplate

Lists all repositories associated with the specified approval rule template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRepositoriesForApprovalRuleTemplateRequest;
import org.openapis.openapi.models.operations.ListRepositoriesForApprovalRuleTemplateResponse;
import org.openapis.openapi.models.operations.ListRepositoriesForApprovalRuleTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListRepositoriesForApprovalRuleTemplateInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRepositoriesForApprovalRuleTemplateRequest req = new ListRepositoriesForApprovalRuleTemplateRequest(                new ListRepositoriesForApprovalRuleTemplateInput("sequi") {{
                                maxResults = 779192L;
                                nextToken = "esse";
                            }};, ListRepositoriesForApprovalRuleTemplateXAmzTargetEnum.CODE_COMMIT20150413_LIST_REPOSITORIES_FOR_APPROVAL_RULE_TEMPLATE) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "distinctio";
                xAmzDate = "quod";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "inventore";
                xAmzSignedHeaders = "nihil";
                maxResults = "totam";
                nextToken = "accusamus";
            }};            

            ListRepositoriesForApprovalRuleTemplateResponse res = sdk.sdk.listRepositoriesForApprovalRuleTemplate(req);

            if (res.listRepositoriesForApprovalRuleTemplateOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the<i> AWS CodeCommit User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceInput("odio") {{
                                nextToken = "occaecati";
                            }};, ListTagsForResourceXAmzTargetEnum.CODE_COMMIT20150413_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "dolores";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "porro";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mergeBranchesByFastForward

Merges two branches using the fast-forward merge strategy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MergeBranchesByFastForwardRequest;
import org.openapis.openapi.models.operations.MergeBranchesByFastForwardResponse;
import org.openapis.openapi.models.operations.MergeBranchesByFastForwardXAmzTargetEnum;
import org.openapis.openapi.models.shared.MergeBranchesByFastForwardInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            MergeBranchesByFastForwardRequest req = new MergeBranchesByFastForwardRequest(                new MergeBranchesByFastForwardInput("quas", "praesentium", "consequuntur") {{
                                targetBranch = "deleniti";
                            }};, MergeBranchesByFastForwardXAmzTargetEnum.CODE_COMMIT20150413_MERGE_BRANCHES_BY_FAST_FORWARD) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "mollitia";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "atque";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "minima";
            }};            

            MergeBranchesByFastForwardResponse res = sdk.sdk.mergeBranchesByFastForward(req);

            if (res.mergeBranchesByFastForwardOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mergeBranchesBySquash

Merges two branches using the squash merge strategy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MergeBranchesBySquashRequest;
import org.openapis.openapi.models.operations.MergeBranchesBySquashResponse;
import org.openapis.openapi.models.operations.MergeBranchesBySquashXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConflictDetailLevelTypeEnumEnum;
import org.openapis.openapi.models.shared.ConflictResolution;
import org.openapis.openapi.models.shared.ConflictResolutionStrategyTypeEnumEnum;
import org.openapis.openapi.models.shared.DeleteFileEntry;
import org.openapis.openapi.models.shared.FileModeTypeEnumEnum;
import org.openapis.openapi.models.shared.MergeBranchesBySquashInput;
import org.openapis.openapi.models.shared.ReplaceContentEntry;
import org.openapis.openapi.models.shared.ReplacementTypeEnumEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetFileModeEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            MergeBranchesBySquashRequest req = new MergeBranchesBySquashRequest(                new MergeBranchesBySquashInput("fugit", "sapiente", "consequuntur") {{
                                authorName = "ratione";
                                commitMessage = "explicabo";
                                conflictDetailLevel = ConflictDetailLevelTypeEnumEnum.LINE_LEVEL;
                                conflictResolution = new ConflictResolution() {{
                                    deleteFiles = new org.openapis.openapi.models.shared.DeleteFileEntry[]{{
                                        add(new DeleteFileEntry("et") {{
                                            filePath = "atque";
                                        }}),
                                        add(new DeleteFileEntry("eveniet") {{
                                            filePath = "esse";
                                        }}),
                                        add(new DeleteFileEntry("veritatis") {{
                                            filePath = "accusamus";
                                        }}),
                                    }};
                                    replaceContents = new org.openapis.openapi.models.shared.ReplaceContentEntry[]{{
                                        add(new ReplaceContentEntry("quasi", ReplacementTypeEnumEnum.USE_NEW_CONTENT) {{
                                            content = "quod";
                                            fileMode = FileModeTypeEnumEnum.SYMLINK;
                                            filePath = "vero";
                                            replacementType = ReplacementTypeEnumEnum.KEEP_SOURCE;
                                        }}),
                                        add(new ReplaceContentEntry("occaecati", ReplacementTypeEnumEnum.KEEP_SOURCE) {{
                                            content = "vel";
                                            fileMode = FileModeTypeEnumEnum.SYMLINK;
                                            filePath = "molestiae";
                                            replacementType = ReplacementTypeEnumEnum.KEEP_DESTINATION;
                                        }}),
                                    }};
                                    setFileModes = new org.openapis.openapi.models.shared.SetFileModeEntry[]{{
                                        add(new SetFileModeEntry(FileModeTypeEnumEnum.NORMAL, "tempore") {{
                                            fileMode = FileModeTypeEnumEnum.SYMLINK;
                                            filePath = "sit";
                                        }}),
                                        add(new SetFileModeEntry(FileModeTypeEnumEnum.EXECUTABLE, "consequatur") {{
                                            fileMode = FileModeTypeEnumEnum.EXECUTABLE;
                                            filePath = "cumque";
                                        }}),
                                        add(new SetFileModeEntry(FileModeTypeEnumEnum.SYMLINK, "consectetur") {{
                                            fileMode = FileModeTypeEnumEnum.SYMLINK;
                                            filePath = "quaerat";
                                        }}),
                                    }};
                                }};;
                                conflictResolutionStrategy = ConflictResolutionStrategyTypeEnumEnum.ACCEPT_SOURCE;
                                email = "Landen_Wilkinson45@yahoo.com";
                                keepEmptyFolders = false;
                                targetBranch = "quasi";
                            }};, MergeBranchesBySquashXAmzTargetEnum.CODE_COMMIT20150413_MERGE_BRANCHES_BY_SQUASH) {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "error";
                xAmzCredential = "sint";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "quia";
                xAmzSignedHeaders = "eveniet";
            }};            

            MergeBranchesBySquashResponse res = sdk.sdk.mergeBranchesBySquash(req);

            if (res.mergeBranchesBySquashOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mergeBranchesByThreeWay

Merges two specified branches using the three-way merge strategy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MergeBranchesByThreeWayRequest;
import org.openapis.openapi.models.operations.MergeBranchesByThreeWayResponse;
import org.openapis.openapi.models.operations.MergeBranchesByThreeWayXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConflictDetailLevelTypeEnumEnum;
import org.openapis.openapi.models.shared.ConflictResolution;
import org.openapis.openapi.models.shared.ConflictResolutionStrategyTypeEnumEnum;
import org.openapis.openapi.models.shared.DeleteFileEntry;
import org.openapis.openapi.models.shared.FileModeTypeEnumEnum;
import org.openapis.openapi.models.shared.MergeBranchesByThreeWayInput;
import org.openapis.openapi.models.shared.ReplaceContentEntry;
import org.openapis.openapi.models.shared.ReplacementTypeEnumEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetFileModeEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            MergeBranchesByThreeWayRequest req = new MergeBranchesByThreeWayRequest(                new MergeBranchesByThreeWayInput("facere", "veritatis", "consequuntur") {{
                                authorName = "quasi";
                                commitMessage = "similique";
                                conflictDetailLevel = ConflictDetailLevelTypeEnumEnum.LINE_LEVEL;
                                conflictResolution = new ConflictResolution() {{
                                    deleteFiles = new org.openapis.openapi.models.shared.DeleteFileEntry[]{{
                                        add(new DeleteFileEntry("quae") {{
                                            filePath = "tenetur";
                                        }}),
                                        add(new DeleteFileEntry("vel") {{
                                            filePath = "earum";
                                        }}),
                                    }};
                                    replaceContents = new org.openapis.openapi.models.shared.ReplaceContentEntry[]{{
                                        add(new ReplaceContentEntry("accusantium", ReplacementTypeEnumEnum.KEEP_SOURCE) {{
                                            content = "eius";
                                            fileMode = FileModeTypeEnumEnum.SYMLINK;
                                            filePath = "illum";
                                            replacementType = ReplacementTypeEnumEnum.KEEP_DESTINATION;
                                        }}),
                                        add(new ReplaceContentEntry("ullam", ReplacementTypeEnumEnum.KEEP_SOURCE) {{
                                            content = "sapiente";
                                            fileMode = FileModeTypeEnumEnum.EXECUTABLE;
                                            filePath = "ullam";
                                            replacementType = ReplacementTypeEnumEnum.KEEP_SOURCE;
                                        }}),
                                    }};
                                    setFileModes = new org.openapis.openapi.models.shared.SetFileModeEntry[]{{
                                        add(new SetFileModeEntry(FileModeTypeEnumEnum.SYMLINK, "ex") {{
                                            fileMode = FileModeTypeEnumEnum.NORMAL;
                                            filePath = "qui";
                                        }}),
                                    }};
                                }};;
                                conflictResolutionStrategy = ConflictResolutionStrategyTypeEnumEnum.ACCEPT_DESTINATION;
                                email = "Marilyne_Bradtke@hotmail.com";
                                keepEmptyFolders = false;
                                targetBranch = "quasi";
                            }};, MergeBranchesByThreeWayXAmzTargetEnum.CODE_COMMIT20150413_MERGE_BRANCHES_BY_THREE_WAY) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "et";
                xAmzCredential = "voluptate";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "minima";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "consectetur";
            }};            

            MergeBranchesByThreeWayResponse res = sdk.sdk.mergeBranchesByThreeWay(req);

            if (res.mergeBranchesByThreeWayOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mergePullRequestByFastForward

Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the fast-forward merge strategy. If the merge is successful, it closes the pull request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MergePullRequestByFastForwardRequest;
import org.openapis.openapi.models.operations.MergePullRequestByFastForwardResponse;
import org.openapis.openapi.models.operations.MergePullRequestByFastForwardXAmzTargetEnum;
import org.openapis.openapi.models.shared.MergePullRequestByFastForwardInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            MergePullRequestByFastForwardRequest req = new MergePullRequestByFastForwardRequest(                new MergePullRequestByFastForwardInput("iste", "temporibus") {{
                                sourceCommitId = "accusantium";
                            }};, MergePullRequestByFastForwardXAmzTargetEnum.CODE_COMMIT20150413_MERGE_PULL_REQUEST_BY_FAST_FORWARD) {{
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "aut";
                xAmzCredential = "laudantium";
                xAmzDate = "eum";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "corrupti";
            }};            

            MergePullRequestByFastForwardResponse res = sdk.sdk.mergePullRequestByFastForward(req);

            if (res.mergePullRequestByFastForwardOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mergePullRequestBySquash

Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the squash merge strategy. If the merge is successful, it closes the pull request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MergePullRequestBySquashRequest;
import org.openapis.openapi.models.operations.MergePullRequestBySquashResponse;
import org.openapis.openapi.models.operations.MergePullRequestBySquashXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConflictDetailLevelTypeEnumEnum;
import org.openapis.openapi.models.shared.ConflictResolution;
import org.openapis.openapi.models.shared.ConflictResolutionStrategyTypeEnumEnum;
import org.openapis.openapi.models.shared.DeleteFileEntry;
import org.openapis.openapi.models.shared.FileModeTypeEnumEnum;
import org.openapis.openapi.models.shared.MergePullRequestBySquashInput;
import org.openapis.openapi.models.shared.ReplaceContentEntry;
import org.openapis.openapi.models.shared.ReplacementTypeEnumEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetFileModeEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            MergePullRequestBySquashRequest req = new MergePullRequestBySquashRequest(                new MergePullRequestBySquashInput("voluptatem", "dolor") {{
                                authorName = "occaecati";
                                commitMessage = "numquam";
                                conflictDetailLevel = ConflictDetailLevelTypeEnumEnum.LINE_LEVEL;
                                conflictResolution = new ConflictResolution() {{
                                    deleteFiles = new org.openapis.openapi.models.shared.DeleteFileEntry[]{{
                                        add(new DeleteFileEntry("aut") {{
                                            filePath = "voluptas";
                                        }}),
                                    }};
                                    replaceContents = new org.openapis.openapi.models.shared.ReplaceContentEntry[]{{
                                        add(new ReplaceContentEntry("voluptatibus", ReplacementTypeEnumEnum.KEEP_SOURCE) {{
                                            content = "dicta";
                                            fileMode = FileModeTypeEnumEnum.SYMLINK;
                                            filePath = "natus";
                                            replacementType = ReplacementTypeEnumEnum.KEEP_BASE;
                                        }}),
                                        add(new ReplaceContentEntry("consequuntur", ReplacementTypeEnumEnum.USE_NEW_CONTENT) {{
                                            content = "asperiores";
                                            fileMode = FileModeTypeEnumEnum.EXECUTABLE;
                                            filePath = "ea";
                                            replacementType = ReplacementTypeEnumEnum.KEEP_SOURCE;
                                        }}),
                                    }};
                                    setFileModes = new org.openapis.openapi.models.shared.SetFileModeEntry[]{{
                                        add(new SetFileModeEntry(FileModeTypeEnumEnum.NORMAL, "asperiores") {{
                                            fileMode = FileModeTypeEnumEnum.SYMLINK;
                                            filePath = "dignissimos";
                                        }}),
                                        add(new SetFileModeEntry(FileModeTypeEnumEnum.EXECUTABLE, "porro") {{
                                            fileMode = FileModeTypeEnumEnum.NORMAL;
                                            filePath = "quae";
                                        }}),
                                        add(new SetFileModeEntry(FileModeTypeEnumEnum.EXECUTABLE, "adipisci") {{
                                            fileMode = FileModeTypeEnumEnum.SYMLINK;
                                            filePath = "labore";
                                        }}),
                                    }};
                                }};;
                                conflictResolutionStrategy = ConflictResolutionStrategyTypeEnumEnum.ACCEPT_DESTINATION;
                                email = "George_Franecki@yahoo.com";
                                keepEmptyFolders = false;
                                sourceCommitId = "recusandae";
                            }};, MergePullRequestBySquashXAmzTargetEnum.CODE_COMMIT20150413_MERGE_PULL_REQUEST_BY_SQUASH) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "vel";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "quos";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "labore";
            }};            

            MergePullRequestBySquashResponse res = sdk.sdk.mergePullRequestBySquash(req);

            if (res.mergePullRequestBySquashOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mergePullRequestByThreeWay

Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the three-way merge strategy. If the merge is successful, it closes the pull request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MergePullRequestByThreeWayRequest;
import org.openapis.openapi.models.operations.MergePullRequestByThreeWayResponse;
import org.openapis.openapi.models.operations.MergePullRequestByThreeWayXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConflictDetailLevelTypeEnumEnum;
import org.openapis.openapi.models.shared.ConflictResolution;
import org.openapis.openapi.models.shared.ConflictResolutionStrategyTypeEnumEnum;
import org.openapis.openapi.models.shared.DeleteFileEntry;
import org.openapis.openapi.models.shared.FileModeTypeEnumEnum;
import org.openapis.openapi.models.shared.MergePullRequestByThreeWayInput;
import org.openapis.openapi.models.shared.ReplaceContentEntry;
import org.openapis.openapi.models.shared.ReplacementTypeEnumEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetFileModeEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            MergePullRequestByThreeWayRequest req = new MergePullRequestByThreeWayRequest(                new MergePullRequestByThreeWayInput("facilis", "cum") {{
                                authorName = "commodi";
                                commitMessage = "in";
                                conflictDetailLevel = ConflictDetailLevelTypeEnumEnum.FILE_LEVEL;
                                conflictResolution = new ConflictResolution() {{
                                    deleteFiles = new org.openapis.openapi.models.shared.DeleteFileEntry[]{{
                                        add(new DeleteFileEntry("nemo") {{
                                            filePath = "assumenda";
                                        }}),
                                        add(new DeleteFileEntry("aliquid") {{
                                            filePath = "recusandae";
                                        }}),
                                        add(new DeleteFileEntry("cum") {{
                                            filePath = "aperiam";
                                        }}),
                                        add(new DeleteFileEntry("in") {{
                                            filePath = "consectetur";
                                        }}),
                                    }};
                                    replaceContents = new org.openapis.openapi.models.shared.ReplaceContentEntry[]{{
                                        add(new ReplaceContentEntry("suscipit", ReplacementTypeEnumEnum.USE_NEW_CONTENT) {{
                                            content = "earum";
                                            fileMode = FileModeTypeEnumEnum.SYMLINK;
                                            filePath = "numquam";
                                            replacementType = ReplacementTypeEnumEnum.USE_NEW_CONTENT;
                                        }}),
                                        add(new ReplaceContentEntry("sunt", ReplacementTypeEnumEnum.USE_NEW_CONTENT) {{
                                            content = "quidem";
                                            fileMode = FileModeTypeEnumEnum.SYMLINK;
                                            filePath = "necessitatibus";
                                            replacementType = ReplacementTypeEnumEnum.KEEP_SOURCE;
                                        }}),
                                    }};
                                    setFileModes = new org.openapis.openapi.models.shared.SetFileModeEntry[]{{
                                        add(new SetFileModeEntry(FileModeTypeEnumEnum.EXECUTABLE, "dignissimos") {{
                                            fileMode = FileModeTypeEnumEnum.EXECUTABLE;
                                            filePath = "amet";
                                        }}),
                                    }};
                                }};;
                                conflictResolutionStrategy = ConflictResolutionStrategyTypeEnumEnum.AUTOMERGE;
                                email = "Darrel.Herzog5@hotmail.com";
                                keepEmptyFolders = false;
                                sourceCommitId = "voluptates";
                            }};, MergePullRequestByThreeWayXAmzTargetEnum.CODE_COMMIT20150413_MERGE_PULL_REQUEST_BY_THREE_WAY) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "vitae";
                xAmzCredential = "accusamus";
                xAmzDate = "similique";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "voluptas";
            }};            

            MergePullRequestByThreeWayResponse res = sdk.sdk.mergePullRequestByThreeWay(req);

            if (res.mergePullRequestByThreeWayOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## overridePullRequestApprovalRules

Sets aside (overrides) all approval rule requirements for a specified pull request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OverridePullRequestApprovalRulesRequest;
import org.openapis.openapi.models.operations.OverridePullRequestApprovalRulesResponse;
import org.openapis.openapi.models.operations.OverridePullRequestApprovalRulesXAmzTargetEnum;
import org.openapis.openapi.models.shared.OverridePullRequestApprovalRulesInput;
import org.openapis.openapi.models.shared.OverrideStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            OverridePullRequestApprovalRulesRequest req = new OverridePullRequestApprovalRulesRequest(                new OverridePullRequestApprovalRulesInput(OverrideStatusEnum.OVERRIDE, "minima", "nobis");, OverridePullRequestApprovalRulesXAmzTargetEnum.CODE_COMMIT20150413_OVERRIDE_PULL_REQUEST_APPROVAL_RULES) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "minus";
                xAmzDate = "dolores";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "in";
                xAmzSignedHeaders = "dolore";
            }};            

            OverridePullRequestApprovalRulesResponse res = sdk.sdk.overridePullRequestApprovalRules(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCommentForComparedCommit

Posts a comment on the comparison between two commits.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCommentForComparedCommitRequest;
import org.openapis.openapi.models.operations.PostCommentForComparedCommitResponse;
import org.openapis.openapi.models.operations.PostCommentForComparedCommitXAmzTargetEnum;
import org.openapis.openapi.models.shared.Location;
import org.openapis.openapi.models.shared.PostCommentForComparedCommitInput;
import org.openapis.openapi.models.shared.RelativeFileVersionEnumEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostCommentForComparedCommitRequest req = new PostCommentForComparedCommitRequest(                new PostCommentForComparedCommitInput("officiis", "temporibus", "ullam") {{
                                beforeCommitId = "adipisci";
                                clientRequestToken = "cum";
                                location = new Location() {{
                                    filePath = "blanditiis";
                                    filePosition = 555361L;
                                    relativeFileVersion = RelativeFileVersionEnumEnum.AFTER;
                                }};;
                            }};, PostCommentForComparedCommitXAmzTargetEnum.CODE_COMMIT20150413_POST_COMMENT_FOR_COMPARED_COMMIT) {{
                xAmzAlgorithm = "nesciunt";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "corrupti";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "totam";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "exercitationem";
            }};            

            PostCommentForComparedCommitResponse res = sdk.sdk.postCommentForComparedCommit(req);

            if (res.postCommentForComparedCommitOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCommentForPullRequest

Posts a comment on a pull request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCommentForPullRequestRequest;
import org.openapis.openapi.models.operations.PostCommentForPullRequestResponse;
import org.openapis.openapi.models.operations.PostCommentForPullRequestXAmzTargetEnum;
import org.openapis.openapi.models.shared.Location;
import org.openapis.openapi.models.shared.PostCommentForPullRequestInput;
import org.openapis.openapi.models.shared.RelativeFileVersionEnumEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostCommentForPullRequestRequest req = new PostCommentForPullRequestRequest(                new PostCommentForPullRequestInput("sit", "rerum", "sed", "reiciendis", "explicabo") {{
                                clientRequestToken = "asperiores";
                                location = new Location() {{
                                    filePath = "facilis";
                                    filePosition = 451822L;
                                    relativeFileVersion = RelativeFileVersionEnumEnum.AFTER;
                                }};;
                            }};, PostCommentForPullRequestXAmzTargetEnum.CODE_COMMIT20150413_POST_COMMENT_FOR_PULL_REQUEST) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "iste";
                xAmzCredential = "dolore";
                xAmzDate = "laborum";
                xAmzSecurityToken = "sed";
                xAmzSignature = "in";
                xAmzSignedHeaders = "commodi";
            }};            

            PostCommentForPullRequestResponse res = sdk.sdk.postCommentForPullRequest(req);

            if (res.postCommentForPullRequestOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCommentReply

Posts a comment in reply to an existing comment on a comparison between commits or a pull request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCommentReplyRequest;
import org.openapis.openapi.models.operations.PostCommentReplyResponse;
import org.openapis.openapi.models.operations.PostCommentReplyXAmzTargetEnum;
import org.openapis.openapi.models.shared.PostCommentReplyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostCommentReplyRequest req = new PostCommentReplyRequest(                new PostCommentReplyInput("explicabo", "voluptas") {{
                                clientRequestToken = "unde";
                            }};, PostCommentReplyXAmzTargetEnum.CODE_COMMIT20150413_POST_COMMENT_REPLY) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "sapiente";
                xAmzDate = "debitis";
                xAmzSecurityToken = "illo";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "perferendis";
            }};            

            PostCommentReplyResponse res = sdk.sdk.postCommentReply(req);

            if (res.postCommentReplyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putCommentReaction

Adds or updates a reaction to a specified comment for the user whose identity is used to make the request. You can only add or update a reaction for yourself. You cannot add, modify, or delete a reaction for another user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutCommentReactionRequest;
import org.openapis.openapi.models.operations.PutCommentReactionResponse;
import org.openapis.openapi.models.operations.PutCommentReactionXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutCommentReactionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutCommentReactionRequest req = new PutCommentReactionRequest(                new PutCommentReactionInput("maiores", "incidunt");, PutCommentReactionXAmzTargetEnum.CODE_COMMIT20150413_PUT_COMMENT_REACTION) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "provident";
                xAmzCredential = "eius";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "occaecati";
            }};            

            PutCommentReactionResponse res = sdk.sdk.putCommentReaction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putFile

Adds or updates a file in a branch in an AWS CodeCommit repository, and generates a commit for the addition in the specified branch.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutFileRequest;
import org.openapis.openapi.models.operations.PutFileResponse;
import org.openapis.openapi.models.operations.PutFileXAmzTargetEnum;
import org.openapis.openapi.models.shared.FileModeTypeEnumEnum;
import org.openapis.openapi.models.shared.PutFileInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutFileRequest req = new PutFileRequest(                new PutFileInput("voluptatibus", "tempora", "tempora", "voluptate") {{
                                commitMessage = "reiciendis";
                                email = "Alda_Franey70@yahoo.com";
                                fileMode = FileModeTypeEnumEnum.EXECUTABLE;
                                name = "Brittany Tremblay DDS";
                                parentCommitId = "error";
                            }};, PutFileXAmzTargetEnum.CODE_COMMIT20150413_PUT_FILE) {{
                xAmzAlgorithm = "veniam";
                xAmzContentSha256 = "minima";
                xAmzCredential = "recusandae";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "aperiam";
            }};            

            PutFileResponse res = sdk.sdk.putFile(req);

            if (res.putFileOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRepositoryTriggers

Replaces all triggers for a repository. Used to create or delete triggers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRepositoryTriggersRequest;
import org.openapis.openapi.models.operations.PutRepositoryTriggersResponse;
import org.openapis.openapi.models.operations.PutRepositoryTriggersXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutRepositoryTriggersInput;
import org.openapis.openapi.models.shared.RepositoryTrigger;
import org.openapis.openapi.models.shared.RepositoryTriggerEventEnumEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutRepositoryTriggersRequest req = new PutRepositoryTriggersRequest(                new PutRepositoryTriggersInput("numquam",                 new org.openapis.openapi.models.shared.RepositoryTrigger[]{{
                                                add(new RepositoryTrigger("neque",                 new org.openapis.openapi.models.shared.RepositoryTriggerEventEnumEnum[]{{
                                                                    add(RepositoryTriggerEventEnumEnum.UPDATE_REFERENCE),
                                                                    add(RepositoryTriggerEventEnumEnum.CREATE_REFERENCE),
                                                                    add(RepositoryTriggerEventEnumEnum.CREATE_REFERENCE),
                                                                }}, "corrupti") {{
                                                    branches = new String[]{{
                                                        add("officiis"),
                                                        add("beatae"),
                                                    }};
                                                    customData = "laudantium";
                                                    destinationArn = "exercitationem";
                                                    events = new org.openapis.openapi.models.shared.RepositoryTriggerEventEnumEnum[]{{
                                                        add(RepositoryTriggerEventEnumEnum.CREATE_REFERENCE),
                                                        add(RepositoryTriggerEventEnumEnum.UPDATE_REFERENCE),
                                                        add(RepositoryTriggerEventEnumEnum.CREATE_REFERENCE),
                                                    }};
                                                    name = "Evan Welch";
                                                }}),
                                                add(new RepositoryTrigger("repudiandae",                 new org.openapis.openapi.models.shared.RepositoryTriggerEventEnumEnum[]{{
                                                                    add(RepositoryTriggerEventEnumEnum.ALL),
                                                                    add(RepositoryTriggerEventEnumEnum.CREATE_REFERENCE),
                                                                }}, "ex") {{
                                                    branches = new String[]{{
                                                        add("tempora"),
                                                        add("atque"),
                                                        add("fugit"),
                                                        add("ut"),
                                                    }};
                                                    customData = "fugiat";
                                                    destinationArn = "voluptatem";
                                                    events = new org.openapis.openapi.models.shared.RepositoryTriggerEventEnumEnum[]{{
                                                        add(RepositoryTriggerEventEnumEnum.CREATE_REFERENCE),
                                                        add(RepositoryTriggerEventEnumEnum.UPDATE_REFERENCE),
                                                        add(RepositoryTriggerEventEnumEnum.ALL),
                                                    }};
                                                    name = "Brittany Bailey";
                                                }}),
                                            }});, PutRepositoryTriggersXAmzTargetEnum.CODE_COMMIT20150413_PUT_REPOSITORY_TRIGGERS) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "sit";
                xAmzCredential = "vel";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "error";
                xAmzSignedHeaders = "consequatur";
            }};            

            PutRepositoryTriggersResponse res = sdk.sdk.putRepositoryTriggers(req);

            if (res.putRepositoryTriggersOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds or updates tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagResourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceInput("reiciendis",                 new java.util.HashMap<String, String>() {{
                                                put("harum", "dicta");
                                            }});, TagResourceXAmzTargetEnum.CODE_COMMIT20150413_TAG_RESOURCE) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "labore";
                xAmzDate = "quidem";
                xAmzSecurityToken = "atque";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "nam";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testRepositoryTriggers

Tests the functionality of repository triggers by sending information to the trigger target. If real data is available in the repository, the test sends data from the last commit. If no data is available, sample data is generated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestRepositoryTriggersRequest;
import org.openapis.openapi.models.operations.TestRepositoryTriggersResponse;
import org.openapis.openapi.models.operations.TestRepositoryTriggersXAmzTargetEnum;
import org.openapis.openapi.models.shared.RepositoryTrigger;
import org.openapis.openapi.models.shared.RepositoryTriggerEventEnumEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TestRepositoryTriggersInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TestRepositoryTriggersRequest req = new TestRepositoryTriggersRequest(                new TestRepositoryTriggersInput("laboriosam",                 new org.openapis.openapi.models.shared.RepositoryTrigger[]{{
                                                add(new RepositoryTrigger("fuga",                 new org.openapis.openapi.models.shared.RepositoryTriggerEventEnumEnum[]{{
                                                                    add(RepositoryTriggerEventEnumEnum.CREATE_REFERENCE),
                                                                    add(RepositoryTriggerEventEnumEnum.UPDATE_REFERENCE),
                                                                    add(RepositoryTriggerEventEnumEnum.ALL),
                                                                }}, "quisquam") {{
                                                    branches = new String[]{{
                                                        add("deserunt"),
                                                    }};
                                                    customData = "voluptate";
                                                    destinationArn = "unde";
                                                    events = new org.openapis.openapi.models.shared.RepositoryTriggerEventEnumEnum[]{{
                                                        add(RepositoryTriggerEventEnumEnum.CREATE_REFERENCE),
                                                        add(RepositoryTriggerEventEnumEnum.DELETE_REFERENCE),
                                                        add(RepositoryTriggerEventEnumEnum.DELETE_REFERENCE),
                                                        add(RepositoryTriggerEventEnumEnum.DELETE_REFERENCE),
                                                    }};
                                                    name = "Monique Predovic";
                                                }}),
                                            }});, TestRepositoryTriggersXAmzTargetEnum.CODE_COMMIT20150413_TEST_REPOSITORY_TRIGGERS) {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "atque";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "suscipit";
            }};            

            TestRepositoryTriggersResponse res = sdk.sdk.testRepositoryTriggers(req);

            if (res.testRepositoryTriggersOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceInput("maxime",                 new String[]{{
                                                add("esse"),
                                            }});, UntagResourceXAmzTargetEnum.CODE_COMMIT20150413_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "ea";
                xAmzDate = "atque";
                xAmzSecurityToken = "error";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "officiis";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateApprovalRuleTemplateContent

Updates the content of an approval rule template. You can change the number of required approvals, the membership of the approval rule, and whether an approval pool is defined.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApprovalRuleTemplateContentRequest;
import org.openapis.openapi.models.operations.UpdateApprovalRuleTemplateContentResponse;
import org.openapis.openapi.models.operations.UpdateApprovalRuleTemplateContentXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateApprovalRuleTemplateContentInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateApprovalRuleTemplateContentRequest req = new UpdateApprovalRuleTemplateContentRequest(                new UpdateApprovalRuleTemplateContentInput("natus", "minima") {{
                                existingRuleContentSha256 = "aspernatur";
                            }};, UpdateApprovalRuleTemplateContentXAmzTargetEnum.CODE_COMMIT20150413_UPDATE_APPROVAL_RULE_TEMPLATE_CONTENT) {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "corrupti";
                xAmzDate = "at";
                xAmzSecurityToken = "error";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "suscipit";
            }};            

            UpdateApprovalRuleTemplateContentResponse res = sdk.sdk.updateApprovalRuleTemplateContent(req);

            if (res.updateApprovalRuleTemplateContentOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateApprovalRuleTemplateDescription

Updates the description for a specified approval rule template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApprovalRuleTemplateDescriptionRequest;
import org.openapis.openapi.models.operations.UpdateApprovalRuleTemplateDescriptionResponse;
import org.openapis.openapi.models.operations.UpdateApprovalRuleTemplateDescriptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateApprovalRuleTemplateDescriptionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateApprovalRuleTemplateDescriptionRequest req = new UpdateApprovalRuleTemplateDescriptionRequest(                new UpdateApprovalRuleTemplateDescriptionInput("atque", "atque");, UpdateApprovalRuleTemplateDescriptionXAmzTargetEnum.CODE_COMMIT20150413_UPDATE_APPROVAL_RULE_TEMPLATE_DESCRIPTION) {{
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "dolorum";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "labore";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "doloremque";
            }};            

            UpdateApprovalRuleTemplateDescriptionResponse res = sdk.sdk.updateApprovalRuleTemplateDescription(req);

            if (res.updateApprovalRuleTemplateDescriptionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateApprovalRuleTemplateName

Updates the name of a specified approval rule template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApprovalRuleTemplateNameRequest;
import org.openapis.openapi.models.operations.UpdateApprovalRuleTemplateNameResponse;
import org.openapis.openapi.models.operations.UpdateApprovalRuleTemplateNameXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateApprovalRuleTemplateNameInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateApprovalRuleTemplateNameRequest req = new UpdateApprovalRuleTemplateNameRequest(                new UpdateApprovalRuleTemplateNameInput("dicta", "accusantium");, UpdateApprovalRuleTemplateNameXAmzTargetEnum.CODE_COMMIT20150413_UPDATE_APPROVAL_RULE_TEMPLATE_NAME) {{
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "enim";
                xAmzDate = "laboriosam";
                xAmzSecurityToken = "velit";
                xAmzSignature = "a";
                xAmzSignedHeaders = "molestias";
            }};            

            UpdateApprovalRuleTemplateNameResponse res = sdk.sdk.updateApprovalRuleTemplateName(req);

            if (res.updateApprovalRuleTemplateNameOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateComment

Replaces the contents of a comment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCommentRequest;
import org.openapis.openapi.models.operations.UpdateCommentResponse;
import org.openapis.openapi.models.operations.UpdateCommentXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateCommentInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCommentRequest req = new UpdateCommentRequest(                new UpdateCommentInput("saepe", "consequuntur");, UpdateCommentXAmzTargetEnum.CODE_COMMIT20150413_UPDATE_COMMENT) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "perspiciatis";
                xAmzDate = "in";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "eveniet";
                xAmzSignedHeaders = "occaecati";
            }};            

            UpdateCommentResponse res = sdk.sdk.updateComment(req);

            if (res.updateCommentOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDefaultBranch

<p>Sets or changes the default branch name for the specified repository.</p> <note> <p>If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDefaultBranchRequest;
import org.openapis.openapi.models.operations.UpdateDefaultBranchResponse;
import org.openapis.openapi.models.operations.UpdateDefaultBranchXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateDefaultBranchInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDefaultBranchRequest req = new UpdateDefaultBranchRequest(                new UpdateDefaultBranchInput("fugit", "id");, UpdateDefaultBranchXAmzTargetEnum.CODE_COMMIT20150413_UPDATE_DEFAULT_BRANCH) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "error";
                xAmzDate = "illo";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "eveniet";
            }};            

            UpdateDefaultBranchResponse res = sdk.sdk.updateDefaultBranch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePullRequestApprovalRuleContent

Updates the structure of an approval rule created specifically for a pull request. For example, you can change the number of required approvers and the approval pool for approvers. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePullRequestApprovalRuleContentRequest;
import org.openapis.openapi.models.operations.UpdatePullRequestApprovalRuleContentResponse;
import org.openapis.openapi.models.operations.UpdatePullRequestApprovalRuleContentXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdatePullRequestApprovalRuleContentInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePullRequestApprovalRuleContentRequest req = new UpdatePullRequestApprovalRuleContentRequest(                new UpdatePullRequestApprovalRuleContentInput("vero", "doloremque", "iure") {{
                                existingRuleContentSha256 = "ipsa";
                            }};, UpdatePullRequestApprovalRuleContentXAmzTargetEnum.CODE_COMMIT20150413_UPDATE_PULL_REQUEST_APPROVAL_RULE_CONTENT) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "quae";
                xAmzCredential = "molestiae";
                xAmzDate = "eveniet";
                xAmzSecurityToken = "qui";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "iure";
            }};            

            UpdatePullRequestApprovalRuleContentResponse res = sdk.sdk.updatePullRequestApprovalRuleContent(req);

            if (res.updatePullRequestApprovalRuleContentOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePullRequestApprovalState

Updates the state of a user's approval on a pull request. The user is derived from the signed-in account when the request is made.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePullRequestApprovalStateRequest;
import org.openapis.openapi.models.operations.UpdatePullRequestApprovalStateResponse;
import org.openapis.openapi.models.operations.UpdatePullRequestApprovalStateXAmzTargetEnum;
import org.openapis.openapi.models.shared.ApprovalStateEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdatePullRequestApprovalStateInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePullRequestApprovalStateRequest req = new UpdatePullRequestApprovalStateRequest(                new UpdatePullRequestApprovalStateInput(ApprovalStateEnum.APPROVE, "laborum", "distinctio");, UpdatePullRequestApprovalStateXAmzTargetEnum.CODE_COMMIT20150413_UPDATE_PULL_REQUEST_APPROVAL_STATE) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "rem";
                xAmzCredential = "aliquam";
                xAmzDate = "ad";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "corporis";
            }};            

            UpdatePullRequestApprovalStateResponse res = sdk.sdk.updatePullRequestApprovalState(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePullRequestDescription

Replaces the contents of the description of a pull request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePullRequestDescriptionRequest;
import org.openapis.openapi.models.operations.UpdatePullRequestDescriptionResponse;
import org.openapis.openapi.models.operations.UpdatePullRequestDescriptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdatePullRequestDescriptionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePullRequestDescriptionRequest req = new UpdatePullRequestDescriptionRequest(                new UpdatePullRequestDescriptionInput("nihil", "mollitia");, UpdatePullRequestDescriptionXAmzTargetEnum.CODE_COMMIT20150413_UPDATE_PULL_REQUEST_DESCRIPTION) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "alias";
                xAmzCredential = "maiores";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "id";
                xAmzSignedHeaders = "minima";
            }};            

            UpdatePullRequestDescriptionResponse res = sdk.sdk.updatePullRequestDescription(req);

            if (res.updatePullRequestDescriptionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePullRequestStatus

Updates the status of a pull request. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePullRequestStatusRequest;
import org.openapis.openapi.models.operations.UpdatePullRequestStatusResponse;
import org.openapis.openapi.models.operations.UpdatePullRequestStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.PullRequestStatusEnumEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdatePullRequestStatusInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePullRequestStatusRequest req = new UpdatePullRequestStatusRequest(                new UpdatePullRequestStatusInput("dolorum", PullRequestStatusEnumEnum.OPEN);, UpdatePullRequestStatusXAmzTargetEnum.CODE_COMMIT20150413_UPDATE_PULL_REQUEST_STATUS) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "omnis";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "ut";
            }};            

            UpdatePullRequestStatusResponse res = sdk.sdk.updatePullRequestStatus(req);

            if (res.updatePullRequestStatusOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePullRequestTitle

Replaces the title of a pull request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePullRequestTitleRequest;
import org.openapis.openapi.models.operations.UpdatePullRequestTitleResponse;
import org.openapis.openapi.models.operations.UpdatePullRequestTitleXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdatePullRequestTitleInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePullRequestTitleRequest req = new UpdatePullRequestTitleRequest(                new UpdatePullRequestTitleInput("adipisci", "debitis");, UpdatePullRequestTitleXAmzTargetEnum.CODE_COMMIT20150413_UPDATE_PULL_REQUEST_TITLE) {{
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "eum";
                xAmzCredential = "nemo";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "esse";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "quis";
            }};            

            UpdatePullRequestTitleResponse res = sdk.sdk.updatePullRequestTitle(req);

            if (res.updatePullRequestTitleOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRepositoryDescription

<p>Sets or changes the comment or description for a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRepositoryDescriptionRequest;
import org.openapis.openapi.models.operations.UpdateRepositoryDescriptionResponse;
import org.openapis.openapi.models.operations.UpdateRepositoryDescriptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateRepositoryDescriptionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRepositoryDescriptionRequest req = new UpdateRepositoryDescriptionRequest(                new UpdateRepositoryDescriptionInput("reiciendis") {{
                                repositoryDescription = "provident";
                            }};, UpdateRepositoryDescriptionXAmzTargetEnum.CODE_COMMIT20150413_UPDATE_REPOSITORY_DESCRIPTION) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "quasi";
                xAmzDate = "animi";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "provident";
            }};            

            UpdateRepositoryDescriptionResponse res = sdk.sdk.updateRepositoryDescription(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRepositoryName

Renames a repository. The repository name must be unique across the calling AWS account. Repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. The suffix .git is prohibited. For more information about the limits on repository names, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Limits</a> in the AWS CodeCommit User Guide.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRepositoryNameRequest;
import org.openapis.openapi.models.operations.UpdateRepositoryNameResponse;
import org.openapis.openapi.models.operations.UpdateRepositoryNameXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateRepositoryNameInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRepositoryNameRequest req = new UpdateRepositoryNameRequest(                new UpdateRepositoryNameInput("animi", "ex");, UpdateRepositoryNameXAmzTargetEnum.CODE_COMMIT20150413_UPDATE_REPOSITORY_NAME) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "repellat";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "in";
                xAmzSignedHeaders = "nam";
            }};            

            UpdateRepositoryNameResponse res = sdk.sdk.updateRepositoryName(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
