# SDK

## Overview

<fullname>AWS CodeCommit</fullname> <p>This is the <i>AWS CodeCommit API Reference</i>. This reference provides descriptions of the operations and data types for AWS CodeCommit API along with usage examples.</p> <p>You can use the AWS CodeCommit API to work with the following objects:</p> <p>Repositories, by calling the following:</p> <ul> <li> <p> <a>BatchGetRepositories</a>, which returns information about one or more repositories associated with your AWS account.</p> </li> <li> <p> <a>CreateRepository</a>, which creates an AWS CodeCommit repository.</p> </li> <li> <p> <a>DeleteRepository</a>, which deletes an AWS CodeCommit repository.</p> </li> <li> <p> <a>GetRepository</a>, which returns information about a specified repository.</p> </li> <li> <p> <a>ListRepositories</a>, which lists all AWS CodeCommit repositories associated with your AWS account.</p> </li> <li> <p> <a>UpdateRepositoryDescription</a>, which sets or updates the description of the repository.</p> </li> <li> <p> <a>UpdateRepositoryName</a>, which changes the name of the repository. If you change the name of a repository, no other users of that repository can access it until you send them the new HTTPS or SSH URL to use.</p> </li> </ul> <p>Branches, by calling the following:</p> <ul> <li> <p> <a>CreateBranch</a>, which creates a branch in a specified repository.</p> </li> <li> <p> <a>DeleteBranch</a>, which deletes the specified branch in a repository unless it is the default branch.</p> </li> <li> <p> <a>GetBranch</a>, which returns information about a specified branch.</p> </li> <li> <p> <a>ListBranches</a>, which lists all branches for a specified repository.</p> </li> <li> <p> <a>UpdateDefaultBranch</a>, which changes the default branch for a repository.</p> </li> </ul> <p>Files, by calling the following:</p> <ul> <li> <p> <a>DeleteFile</a>, which deletes the content of a specified file from a specified branch.</p> </li> <li> <p> <a>GetBlob</a>, which returns the base-64 encoded content of an individual Git blob object in a repository.</p> </li> <li> <p> <a>GetFile</a>, which returns the base-64 encoded content of a specified file.</p> </li> <li> <p> <a>GetFolder</a>, which returns the contents of a specified folder or directory.</p> </li> <li> <p> <a>PutFile</a>, which adds or modifies a single file in a specified repository and branch.</p> </li> </ul> <p>Commits, by calling the following:</p> <ul> <li> <p> <a>BatchGetCommits</a>, which returns information about one or more commits in a repository.</p> </li> <li> <p> <a>CreateCommit</a>, which creates a commit for changes to a repository.</p> </li> <li> <p> <a>GetCommit</a>, which returns information about a commit, including commit messages and author and committer information.</p> </li> <li> <p> <a>GetDifferences</a>, which returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference).</p> </li> </ul> <p>Merges, by calling the following:</p> <ul> <li> <p> <a>BatchDescribeMergeConflicts</a>, which returns information about conflicts in a merge between commits in a repository.</p> </li> <li> <p> <a>CreateUnreferencedMergeCommit</a>, which creates an unreferenced commit between two branches or commits for the purpose of comparing them and identifying any potential conflicts.</p> </li> <li> <p> <a>DescribeMergeConflicts</a>, which returns information about merge conflicts between the base, source, and destination versions of a file in a potential merge.</p> </li> <li> <p> <a>GetMergeCommit</a>, which returns information about the merge between a source and destination commit. </p> </li> <li> <p> <a>GetMergeConflicts</a>, which returns information about merge conflicts between the source and destination branch in a pull request.</p> </li> <li> <p> <a>GetMergeOptions</a>, which returns information about the available merge options between two branches or commit specifiers.</p> </li> <li> <p> <a>MergeBranchesByFastForward</a>, which merges two branches using the fast-forward merge option.</p> </li> <li> <p> <a>MergeBranchesBySquash</a>, which merges two branches using the squash merge option.</p> </li> <li> <p> <a>MergeBranchesByThreeWay</a>, which merges two branches using the three-way merge option.</p> </li> </ul> <p>Pull requests, by calling the following:</p> <ul> <li> <p> <a>CreatePullRequest</a>, which creates a pull request in a specified repository.</p> </li> <li> <p> <a>CreatePullRequestApprovalRule</a>, which creates an approval rule for a specified pull request.</p> </li> <li> <p> <a>DeletePullRequestApprovalRule</a>, which deletes an approval rule for a specified pull request.</p> </li> <li> <p> <a>DescribePullRequestEvents</a>, which returns information about one or more pull request events.</p> </li> <li> <p> <a>EvaluatePullRequestApprovalRules</a>, which evaluates whether a pull request has met all the conditions specified in its associated approval rules.</p> </li> <li> <p> <a>GetCommentsForPullRequest</a>, which returns information about comments on a specified pull request.</p> </li> <li> <p> <a>GetPullRequest</a>, which returns information about a specified pull request.</p> </li> <li> <p> <a>GetPullRequestApprovalStates</a>, which returns information about the approval states for a specified pull request.</p> </li> <li> <p> <a>GetPullRequestOverrideState</a>, which returns information about whether approval rules have been set aside (overriden) for a pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.</p> </li> <li> <p> <a>ListPullRequests</a>, which lists all pull requests for a repository.</p> </li> <li> <p> <a>MergePullRequestByFastForward</a>, which merges the source destination branch of a pull request into the specified destination branch for that pull request using the fast-forward merge option.</p> </li> <li> <p> <a>MergePullRequestBySquash</a>, which merges the source destination branch of a pull request into the specified destination branch for that pull request using the squash merge option.</p> </li> <li> <p> <a>MergePullRequestByThreeWay</a>. which merges the source destination branch of a pull request into the specified destination branch for that pull request using the three-way merge option.</p> </li> <li> <p> <a>OverridePullRequestApprovalRules</a>, which sets aside all approval rule requirements for a pull request.</p> </li> <li> <p> <a>PostCommentForPullRequest</a>, which posts a comment to a pull request at the specified line, file, or request.</p> </li> <li> <p> <a>UpdatePullRequestApprovalRuleContent</a>, which updates the structure of an approval rule for a pull request.</p> </li> <li> <p> <a>UpdatePullRequestApprovalState</a>, which updates the state of an approval on a pull request.</p> </li> <li> <p> <a>UpdatePullRequestDescription</a>, which updates the description of a pull request.</p> </li> <li> <p> <a>UpdatePullRequestStatus</a>, which updates the status of a pull request.</p> </li> <li> <p> <a>UpdatePullRequestTitle</a>, which updates the title of a pull request.</p> </li> </ul> <p>Approval rule templates, by calling the following:</p> <ul> <li> <p> <a>AssociateApprovalRuleTemplateWithRepository</a>, which associates a template with a specified repository. After the template is associated with a repository, AWS CodeCommit creates approval rules that match the template conditions on every pull request created in the specified repository.</p> </li> <li> <p> <a>BatchAssociateApprovalRuleTemplateWithRepositories</a>, which associates a template with one or more specified repositories. After the template is associated with a repository, AWS CodeCommit creates approval rules that match the template conditions on every pull request created in the specified repositories.</p> </li> <li> <p> <a>BatchDisassociateApprovalRuleTemplateFromRepositories</a>, which removes the association between a template and specified repositories so that approval rules based on the template are not automatically created when pull requests are created in those repositories.</p> </li> <li> <p> <a>CreateApprovalRuleTemplate</a>, which creates a template for approval rules that can then be associated with one or more repositories in your AWS account.</p> </li> <li> <p> <a>DeleteApprovalRuleTemplate</a>, which deletes the specified template. It does not remove approval rules on pull requests already created with the template.</p> </li> <li> <p> <a>DisassociateApprovalRuleTemplateFromRepository</a>, which removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository.</p> </li> <li> <p> <a>GetApprovalRuleTemplate</a>, which returns information about an approval rule template.</p> </li> <li> <p> <a>ListApprovalRuleTemplates</a>, which lists all approval rule templates in the AWS Region in your AWS account.</p> </li> <li> <p> <a>ListAssociatedApprovalRuleTemplatesForRepository</a>, which lists all approval rule templates that are associated with a specified repository.</p> </li> <li> <p> <a>ListRepositoriesForApprovalRuleTemplate</a>, which lists all repositories associated with the specified approval rule template.</p> </li> <li> <p> <a>UpdateApprovalRuleTemplateDescription</a>, which updates the description of an approval rule template.</p> </li> <li> <p> <a>UpdateApprovalRuleTemplateName</a>, which updates the name of an approval rule template.</p> </li> <li> <p> <a>UpdateApprovalRuleTemplateContent</a>, which updates the content of an approval rule template.</p> </li> </ul> <p>Comments in a repository, by calling the following:</p> <ul> <li> <p> <a>DeleteCommentContent</a>, which deletes the content of a comment on a commit in a repository.</p> </li> <li> <p> <a>GetComment</a>, which returns information about a comment on a commit.</p> </li> <li> <p> <a>GetCommentReactions</a>, which returns information about emoji reactions to comments.</p> </li> <li> <p> <a>GetCommentsForComparedCommit</a>, which returns information about comments on the comparison between two commit specifiers in a repository.</p> </li> <li> <p> <a>PostCommentForComparedCommit</a>, which creates a comment on the comparison between two commit specifiers in a repository.</p> </li> <li> <p> <a>PostCommentReply</a>, which creates a reply to a comment.</p> </li> <li> <p> <a>PutCommentReaction</a>, which creates or updates an emoji reaction to a comment.</p> </li> <li> <p> <a>UpdateComment</a>, which updates the content of a comment on a commit in a repository.</p> </li> </ul> <p>Tags used to tag resources in AWS CodeCommit (not Git tags), by calling the following:</p> <ul> <li> <p> <a>ListTagsForResource</a>, which gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeCommit.</p> </li> <li> <p> <a>TagResource</a>, which adds or updates tags for a resource in AWS CodeCommit.</p> </li> <li> <p> <a>UntagResource</a>, which removes tags for a resource in AWS CodeCommit.</p> </li> </ul> <p>Triggers, by calling the following:</p> <ul> <li> <p> <a>GetRepositoryTriggers</a>, which returns information about triggers configured for a repository.</p> </li> <li> <p> <a>PutRepositoryTriggers</a>, which replaces all triggers for a repository and can be used to create or delete triggers.</p> </li> <li> <p> <a>TestRepositoryTriggers</a>, which tests the functionality of a repository trigger by sending data to the trigger target.</p> </li> </ul> <p>For information about how to use AWS CodeCommit, see the <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/codecommit/>
### Available Operations

* [AssociateApprovalRuleTemplateWithRepository](#associateapprovalruletemplatewithrepository) - Creates an association between an approval rule template and a specified repository. Then, the next time a pull request is created in the repository where the destination reference (if specified) matches the destination reference (branch) for the pull request, an approval rule that matches the template conditions is automatically created for that pull request. If no destination references are specified in the template, an approval rule that matches the template contents is created for all pull requests in that repository.
* [BatchAssociateApprovalRuleTemplateWithRepositories](#batchassociateapprovalruletemplatewithrepositories) - Creates an association between an approval rule template and one or more specified repositories. 
* [BatchDescribeMergeConflicts](#batchdescribemergeconflicts) - Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy.
* [BatchDisassociateApprovalRuleTemplateFromRepositories](#batchdisassociateapprovalruletemplatefromrepositories) - Removes the association between an approval rule template and one or more specified repositories. 
* [BatchGetCommits](#batchgetcommits) - Returns information about the contents of one or more commits in a repository.
* [BatchGetRepositories](#batchgetrepositories) - <p>Returns information about one or more repositories.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
* [CreateApprovalRuleTemplate](#createapprovalruletemplate) - Creates a template for approval rules that can then be associated with one or more repositories in your AWS account. When you associate a template with a repository, AWS CodeCommit creates an approval rule that matches the conditions of the template for all pull requests that meet the conditions of the template. For more information, see <a>AssociateApprovalRuleTemplateWithRepository</a>.
* [CreateBranch](#createbranch) - <p>Creates a branch in a repository and points the branch to a commit.</p> <note> <p>Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.</p> </note>
* [CreateCommit](#createcommit) - Creates a commit for a repository on the tip of a specified branch.
* [CreatePullRequest](#createpullrequest) - Creates a pull request in the specified repository.
* [CreatePullRequestApprovalRule](#createpullrequestapprovalrule) - Creates an approval rule for a pull request.
* [CreateRepository](#createrepository) - Creates a new, empty repository.
* [CreateUnreferencedMergeCommit](#createunreferencedmergecommit) - <p>Creates an unreferenced commit that represents the result of merging two branches using a specified merge strategy. This can help you determine the outcome of a potential merge. This API cannot be used with the fast-forward merge strategy because that strategy does not create a merge commit.</p> <note> <p>This unreferenced merge commit can only be accessed using the GetCommit API or through git commands such as git fetch. To retrieve this commit, you must specify its commit ID or otherwise reference it.</p> </note>
* [DeleteApprovalRuleTemplate](#deleteapprovalruletemplate) - Deletes a specified approval rule template. Deleting a template does not remove approval rules on pull requests already created with the template.
* [DeleteBranch](#deletebranch) - Deletes a branch from a repository, unless that branch is the default branch for the repository. 
* [DeleteCommentContent](#deletecommentcontent) - Deletes the content of a comment made on a change, file, or commit in a repository.
* [DeleteFile](#deletefile) - Deletes a specified file from a specified branch. A commit is created on the branch that contains the revision. The file still exists in the commits earlier to the commit that contains the deletion.
* [DeletePullRequestApprovalRule](#deletepullrequestapprovalrule) - Deletes an approval rule from a specified pull request. Approval rules can be deleted from a pull request only if the pull request is open, and if the approval rule was created specifically for a pull request and not generated from an approval rule template associated with the repository where the pull request was created. You cannot delete an approval rule from a merged or closed pull request.
* [DeleteRepository](#deleterepository) - <p>Deletes a repository. If a specified repository was already deleted, a null repository ID is returned.</p> <important> <p>Deleting a repository also deletes all associated objects and metadata. After a repository is deleted, all future push calls to the deleted repository fail.</p> </important>
* [DescribeMergeConflicts](#describemergeconflicts) - Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy. If the merge option for the attempted merge is specified as FAST_FORWARD_MERGE, an exception is thrown.
* [DescribePullRequestEvents](#describepullrequestevents) - Returns information about one or more pull request events.
* [DisassociateApprovalRuleTemplateFromRepository](#disassociateapprovalruletemplatefromrepository) - Removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository. This does not delete any approval rules previously created for pull requests through the template association.
* [EvaluatePullRequestApprovalRules](#evaluatepullrequestapprovalrules) - Evaluates whether a pull request has met all the conditions specified in its associated approval rules.
* [GetApprovalRuleTemplate](#getapprovalruletemplate) - Returns information about a specified approval rule template.
* [GetBlob](#getblob) - Returns the base-64 encoded content of an individual blob in a repository.
* [GetBranch](#getbranch) - Returns information about a repository branch, including its name and the last commit ID.
* [GetComment](#getcomment) - <p>Returns the content of a comment made on a change, file, or commit in a repository. </p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>
* [GetCommentReactions](#getcommentreactions) - Returns information about reactions to a specified comment ID. Reactions from users who have been deleted will not be included in the count.
* [GetCommentsForComparedCommit](#getcommentsforcomparedcommit) - <p>Returns information about comments made on the comparison between two commits.</p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>
* [GetCommentsForPullRequest](#getcommentsforpullrequest) - <p>Returns comments made on a pull request.</p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>
* [GetCommit](#getcommit) - Returns information about a commit, including commit message and committer information.
* [GetDifferences](#getdifferences) - Returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference). Results can be limited to a specified path.
* [GetFile](#getfile) - Returns the base-64 encoded contents of a specified file and its metadata.
* [GetFolder](#getfolder) - Returns the contents of a specified folder in a repository.
* [GetMergeCommit](#getmergecommit) - Returns information about a specified merge commit.
* [GetMergeConflicts](#getmergeconflicts) - Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.
* [GetMergeOptions](#getmergeoptions) - Returns information about the merge options available for merging two specified branches. For details about why a merge option is not available, use GetMergeConflicts or DescribeMergeConflicts.
* [GetPullRequest](#getpullrequest) - Gets information about a pull request in a specified repository.
* [GetPullRequestApprovalStates](#getpullrequestapprovalstates) - Gets information about the approval states for a specified pull request. Approval states only apply to pull requests that have one or more approval rules applied to them.
* [GetPullRequestOverrideState](#getpullrequestoverridestate) - Returns information about whether approval rules have been set aside (overridden) for a pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.
* [GetRepository](#getrepository) - <p>Returns information about a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
* [GetRepositoryTriggers](#getrepositorytriggers) - Gets information about triggers configured for a repository.
* [ListApprovalRuleTemplates](#listapprovalruletemplates) - Lists all approval rule templates in the specified AWS Region in your AWS account. If an AWS Region is not specified, the AWS Region where you are signed in is used.
* [ListAssociatedApprovalRuleTemplatesForRepository](#listassociatedapprovalruletemplatesforrepository) - Lists all approval rule templates that are associated with a specified repository.
* [ListBranches](#listbranches) - Gets information about one or more branches in a repository.
* [ListPullRequests](#listpullrequests) - Returns a list of pull requests for a specified repository. The return list can be refined by pull request status or pull request author ARN.
* [ListRepositories](#listrepositories) - Gets information about one or more repositories.
* [ListRepositoriesForApprovalRuleTemplate](#listrepositoriesforapprovalruletemplate) - Lists all repositories associated with the specified approval rule template.
* [ListTagsForResource](#listtagsforresource) - Gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the<i> AWS CodeCommit User Guide</i>.
* [MergeBranchesByFastForward](#mergebranchesbyfastforward) - Merges two branches using the fast-forward merge strategy.
* [MergeBranchesBySquash](#mergebranchesbysquash) - Merges two branches using the squash merge strategy.
* [MergeBranchesByThreeWay](#mergebranchesbythreeway) - Merges two specified branches using the three-way merge strategy.
* [MergePullRequestByFastForward](#mergepullrequestbyfastforward) - Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the fast-forward merge strategy. If the merge is successful, it closes the pull request.
* [MergePullRequestBySquash](#mergepullrequestbysquash) - Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the squash merge strategy. If the merge is successful, it closes the pull request.
* [MergePullRequestByThreeWay](#mergepullrequestbythreeway) - Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the three-way merge strategy. If the merge is successful, it closes the pull request.
* [OverridePullRequestApprovalRules](#overridepullrequestapprovalrules) - Sets aside (overrides) all approval rule requirements for a specified pull request.
* [PostCommentForComparedCommit](#postcommentforcomparedcommit) - Posts a comment on the comparison between two commits.
* [PostCommentForPullRequest](#postcommentforpullrequest) - Posts a comment on a pull request.
* [PostCommentReply](#postcommentreply) - Posts a comment in reply to an existing comment on a comparison between commits or a pull request.
* [PutCommentReaction](#putcommentreaction) - Adds or updates a reaction to a specified comment for the user whose identity is used to make the request. You can only add or update a reaction for yourself. You cannot add, modify, or delete a reaction for another user.
* [PutFile](#putfile) - Adds or updates a file in a branch in an AWS CodeCommit repository, and generates a commit for the addition in the specified branch.
* [PutRepositoryTriggers](#putrepositorytriggers) - Replaces all triggers for a repository. Used to create or delete triggers.
* [TagResource](#tagresource) - Adds or updates tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.
* [TestRepositoryTriggers](#testrepositorytriggers) - Tests the functionality of repository triggers by sending information to the trigger target. If real data is available in the repository, the test sends data from the last commit. If no data is available, sample data is generated.
* [UntagResource](#untagresource) - Removes tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.
* [UpdateApprovalRuleTemplateContent](#updateapprovalruletemplatecontent) - Updates the content of an approval rule template. You can change the number of required approvals, the membership of the approval rule, and whether an approval pool is defined.
* [UpdateApprovalRuleTemplateDescription](#updateapprovalruletemplatedescription) - Updates the description for a specified approval rule template.
* [UpdateApprovalRuleTemplateName](#updateapprovalruletemplatename) - Updates the name of a specified approval rule template.
* [UpdateComment](#updatecomment) - Replaces the contents of a comment.
* [UpdateDefaultBranch](#updatedefaultbranch) - <p>Sets or changes the default branch name for the specified repository.</p> <note> <p>If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.</p> </note>
* [UpdatePullRequestApprovalRuleContent](#updatepullrequestapprovalrulecontent) - Updates the structure of an approval rule created specifically for a pull request. For example, you can change the number of required approvers and the approval pool for approvers. 
* [UpdatePullRequestApprovalState](#updatepullrequestapprovalstate) - Updates the state of a user's approval on a pull request. The user is derived from the signed-in account when the request is made.
* [UpdatePullRequestDescription](#updatepullrequestdescription) - Replaces the contents of the description of a pull request.
* [UpdatePullRequestStatus](#updatepullrequeststatus) - Updates the status of a pull request. 
* [UpdatePullRequestTitle](#updatepullrequesttitle) - Replaces the title of a pull request.
* [UpdateRepositoryDescription](#updaterepositorydescription) - <p>Sets or changes the comment or description for a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
* [UpdateRepositoryName](#updaterepositoryname) - Renames a repository. The repository name must be unique across the calling AWS account. Repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. The suffix .git is prohibited. For more information about the limits on repository names, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Limits</a> in the AWS CodeCommit User Guide.

## AssociateApprovalRuleTemplateWithRepository

Creates an association between an approval rule template and a specified repository. Then, the next time a pull request is created in the repository where the destination reference (if specified) matches the destination reference (branch) for the pull request, an approval rule that matches the template conditions is automatically created for that pull request. If no destination references are specified in the template, an approval rule that matches the template contents is created for all pull requests in that repository.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateApprovalRuleTemplateWithRepository(ctx, operations.AssociateApprovalRuleTemplateWithRepositoryRequest{
        AssociateApprovalRuleTemplateWithRepositoryInput: shared.AssociateApprovalRuleTemplateWithRepositoryInput{
            ApprovalRuleTemplateName: "error",
            RepositoryName: "deserunt",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.AssociateApprovalRuleTemplateWithRepositoryXAmzTargetEnumCodeCommit20150413AssociateApprovalRuleTemplateWithRepository,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## BatchAssociateApprovalRuleTemplateWithRepositories

Creates an association between an approval rule template and one or more specified repositories. 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchAssociateApprovalRuleTemplateWithRepositories(ctx, operations.BatchAssociateApprovalRuleTemplateWithRepositoriesRequest{
        BatchAssociateApprovalRuleTemplateWithRepositoriesInput: shared.BatchAssociateApprovalRuleTemplateWithRepositoriesInput{
            ApprovalRuleTemplateName: "suscipit",
            RepositoryNames: []string{
                "minus",
                "placeat",
            },
        },
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnumCodeCommit20150413BatchAssociateApprovalRuleTemplateWithRepositories,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchAssociateApprovalRuleTemplateWithRepositoriesOutput != nil {
        // handle response
    }
}
```

## BatchDescribeMergeConflicts

Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchDescribeMergeConflicts(ctx, operations.BatchDescribeMergeConflictsRequest{
        BatchDescribeMergeConflictsInput: shared.BatchDescribeMergeConflictsInput{
            ConflictDetailLevel: shared.ConflictDetailLevelTypeEnumEnumFileLevel.ToPointer(),
            ConflictResolutionStrategy: shared.ConflictResolutionStrategyTypeEnumEnumNone.ToPointer(),
            DestinationCommitSpecifier: "deserunt",
            FilePaths: []string{
                "ipsam",
            },
            MaxConflictFiles: sdk.Int64(832620),
            MaxMergeHunks: sdk.Int64(957156),
            MergeOption: shared.MergeOptionTypeEnumEnumThreeWayMerge,
            NextToken: sdk.String("odit"),
            RepositoryName: "at",
            SourceCommitSpecifier: "at",
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.BatchDescribeMergeConflictsXAmzTargetEnumCodeCommit20150413BatchDescribeMergeConflicts,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDescribeMergeConflictsOutput != nil {
        // handle response
    }
}
```

## BatchDisassociateApprovalRuleTemplateFromRepositories

Removes the association between an approval rule template and one or more specified repositories. 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchDisassociateApprovalRuleTemplateFromRepositories(ctx, operations.BatchDisassociateApprovalRuleTemplateFromRepositoriesRequest{
        BatchDisassociateApprovalRuleTemplateFromRepositoriesInput: shared.BatchDisassociateApprovalRuleTemplateFromRepositoriesInput{
            ApprovalRuleTemplateName: "dolorum",
            RepositoryNames: []string{
                "nam",
            },
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.BatchDisassociateApprovalRuleTemplateFromRepositoriesXAmzTargetEnumCodeCommit20150413BatchDisassociateApprovalRuleTemplateFromRepositories,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput != nil {
        // handle response
    }
}
```

## BatchGetCommits

Returns information about the contents of one or more commits in a repository.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchGetCommits(ctx, operations.BatchGetCommitsRequest{
        BatchGetCommitsInput: shared.BatchGetCommitsInput{
            CommitIds: []string{
                "commodi",
            },
            RepositoryName: "molestiae",
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.BatchGetCommitsXAmzTargetEnumCodeCommit20150413BatchGetCommits,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetCommitsOutput != nil {
        // handle response
    }
}
```

## BatchGetRepositories

<p>Returns information about one or more repositories.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchGetRepositories(ctx, operations.BatchGetRepositoriesRequest{
        BatchGetRepositoriesInput: shared.BatchGetRepositoriesInput{
            RepositoryNames: []string{
                "perferendis",
            },
        },
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
        XAmzTarget: operations.BatchGetRepositoriesXAmzTargetEnumCodeCommit20150413BatchGetRepositories,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetRepositoriesOutput != nil {
        // handle response
    }
}
```

## CreateApprovalRuleTemplate

Creates a template for approval rules that can then be associated with one or more repositories in your AWS account. When you associate a template with a repository, AWS CodeCommit creates an approval rule that matches the conditions of the template for all pull requests that meet the conditions of the template. For more information, see <a>AssociateApprovalRuleTemplateWithRepository</a>.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateApprovalRuleTemplate(ctx, operations.CreateApprovalRuleTemplateRequest{
        CreateApprovalRuleTemplateInput: shared.CreateApprovalRuleTemplateInput{
            ApprovalRuleTemplateContent: "hic",
            ApprovalRuleTemplateDescription: sdk.String("saepe"),
            ApprovalRuleTemplateName: "fuga",
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.CreateApprovalRuleTemplateXAmzTargetEnumCodeCommit20150413CreateApprovalRuleTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApprovalRuleTemplateOutput != nil {
        // handle response
    }
}
```

## CreateBranch

<p>Creates a branch in a repository and points the branch to a commit.</p> <note> <p>Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.</p> </note>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateBranch(ctx, operations.CreateBranchRequest{
        CreateBranchInput: shared.CreateBranchInput{
            BranchName: "ipsa",
            CommitID: "reiciendis",
            RepositoryName: "est",
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.CreateBranchXAmzTargetEnumCodeCommit20150413CreateBranch,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateCommit

Creates a commit for a repository on the tip of a specified branch.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateCommit(ctx, operations.CreateCommitRequest{
        CreateCommitInput: shared.CreateCommitInput{
            AuthorName: sdk.String("enim"),
            BranchName: "omnis",
            CommitMessage: sdk.String("nemo"),
            DeleteFiles: []shared.DeleteFileEntry{
                shared.DeleteFileEntry{
                    FilePath: "excepturi",
                },
                shared.DeleteFileEntry{
                    FilePath: "accusantium",
                },
            },
            Email: sdk.String("Lorenza.Yundt65@yahoo.com"),
            KeepEmptyFolders: sdk.Bool(false),
            ParentCommitID: sdk.String("dolorem"),
            PutFiles: []shared.PutFileEntry{
                shared.PutFileEntry{
                    FileContent: sdk.String("consequuntur"),
                    FileMode: shared.FileModeTypeEnumEnumSymlink.ToPointer(),
                    FilePath: "mollitia",
                    SourceFile: &shared.SourceFileSpecifier{
                        FilePath: "occaecati",
                        IsMove: sdk.Bool(false),
                    },
                },
                shared.PutFileEntry{
                    FileContent: sdk.String("numquam"),
                    FileMode: shared.FileModeTypeEnumEnumNormal.ToPointer(),
                    FilePath: "quam",
                    SourceFile: &shared.SourceFileSpecifier{
                        FilePath: "molestiae",
                        IsMove: sdk.Bool(false),
                    },
                },
                shared.PutFileEntry{
                    FileContent: sdk.String("velit"),
                    FileMode: shared.FileModeTypeEnumEnumNormal.ToPointer(),
                    FilePath: "quia",
                    SourceFile: &shared.SourceFileSpecifier{
                        FilePath: "quis",
                        IsMove: sdk.Bool(false),
                    },
                },
            },
            RepositoryName: "vitae",
            SetFileModes: []shared.SetFileModeEntry{
                shared.SetFileModeEntry{
                    FileMode: shared.FileModeTypeEnumEnumNormal,
                    FilePath: "enim",
                },
                shared.SetFileModeEntry{
                    FileMode: shared.FileModeTypeEnumEnumExecutable,
                    FilePath: "quo",
                },
                shared.SetFileModeEntry{
                    FileMode: shared.FileModeTypeEnumEnumExecutable,
                    FilePath: "tenetur",
                },
            },
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("temporibus"),
        XAmzTarget: operations.CreateCommitXAmzTargetEnumCodeCommit20150413CreateCommit,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCommitOutput != nil {
        // handle response
    }
}
```

## CreatePullRequest

Creates a pull request in the specified repository.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreatePullRequest(ctx, operations.CreatePullRequestRequest{
        CreatePullRequestInput: shared.CreatePullRequestInput{
            ClientRequestToken: sdk.String("laborum"),
            Description: sdk.String("quasi"),
            Targets: []shared.Target{
                shared.Target{
                    DestinationReference: sdk.String("voluptatibus"),
                    RepositoryName: "vero",
                    SourceReference: "nihil",
                },
                shared.Target{
                    DestinationReference: sdk.String("praesentium"),
                    RepositoryName: "voluptatibus",
                    SourceReference: "ipsa",
                },
                shared.Target{
                    DestinationReference: sdk.String("omnis"),
                    RepositoryName: "voluptate",
                    SourceReference: "cum",
                },
                shared.Target{
                    DestinationReference: sdk.String("perferendis"),
                    RepositoryName: "doloremque",
                    SourceReference: "reprehenderit",
                },
            },
            Title: "Mrs.",
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("harum"),
        XAmzTarget: operations.CreatePullRequestXAmzTargetEnumCodeCommit20150413CreatePullRequest,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePullRequestOutput != nil {
        // handle response
    }
}
```

## CreatePullRequestApprovalRule

Creates an approval rule for a pull request.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreatePullRequestApprovalRule(ctx, operations.CreatePullRequestApprovalRuleRequest{
        CreatePullRequestApprovalRuleInput: shared.CreatePullRequestApprovalRuleInput{
            ApprovalRuleContent: "enim",
            ApprovalRuleName: "accusamus",
            PullRequestID: "commodi",
        },
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("molestias"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.CreatePullRequestApprovalRuleXAmzTargetEnumCodeCommit20150413CreatePullRequestApprovalRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePullRequestApprovalRuleOutput != nil {
        // handle response
    }
}
```

## CreateRepository

Creates a new, empty repository.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateRepository(ctx, operations.CreateRepositoryRequest{
        CreateRepositoryInput: shared.CreateRepositoryInput{
            RepositoryDescription: sdk.String("modi"),
            RepositoryName: "praesentium",
            Tags: map[string]string{
                "voluptates": "quasi",
                "repudiandae": "sint",
                "veritatis": "itaque",
            },
        },
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.CreateRepositoryXAmzTargetEnumCodeCommit20150413CreateRepository,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRepositoryOutput != nil {
        // handle response
    }
}
```

## CreateUnreferencedMergeCommit

<p>Creates an unreferenced commit that represents the result of merging two branches using a specified merge strategy. This can help you determine the outcome of a potential merge. This API cannot be used with the fast-forward merge strategy because that strategy does not create a merge commit.</p> <note> <p>This unreferenced merge commit can only be accessed using the GetCommit API or through git commands such as git fetch. To retrieve this commit, you must specify its commit ID or otherwise reference it.</p> </note>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateUnreferencedMergeCommit(ctx, operations.CreateUnreferencedMergeCommitRequest{
        CreateUnreferencedMergeCommitInput: shared.CreateUnreferencedMergeCommitInput{
            AuthorName: sdk.String("distinctio"),
            CommitMessage: sdk.String("quibusdam"),
            ConflictDetailLevel: shared.ConflictDetailLevelTypeEnumEnumFileLevel.ToPointer(),
            ConflictResolution: &shared.ConflictResolution{
                DeleteFiles: []shared.DeleteFileEntry{
                    shared.DeleteFileEntry{
                        FilePath: "qui",
                    },
                    shared.DeleteFileEntry{
                        FilePath: "aliquid",
                    },
                },
                ReplaceContents: []shared.ReplaceContentEntry{
                    shared.ReplaceContentEntry{
                        Content: sdk.String("quos"),
                        FileMode: shared.FileModeTypeEnumEnumExecutable.ToPointer(),
                        FilePath: "magni",
                        ReplacementType: shared.ReplacementTypeEnumEnumUseNewContent,
                    },
                    shared.ReplaceContentEntry{
                        Content: sdk.String("ipsam"),
                        FileMode: shared.FileModeTypeEnumEnumExecutable.ToPointer(),
                        FilePath: "fugit",
                        ReplacementType: shared.ReplacementTypeEnumEnumKeepDestination,
                    },
                    shared.ReplaceContentEntry{
                        Content: sdk.String("excepturi"),
                        FileMode: shared.FileModeTypeEnumEnumExecutable.ToPointer(),
                        FilePath: "facilis",
                        ReplacementType: shared.ReplacementTypeEnumEnumKeepDestination,
                    },
                },
                SetFileModes: []shared.SetFileModeEntry{
                    shared.SetFileModeEntry{
                        FileMode: shared.FileModeTypeEnumEnumSymlink,
                        FilePath: "eum",
                    },
                    shared.SetFileModeEntry{
                        FileMode: shared.FileModeTypeEnumEnumExecutable,
                        FilePath: "eligendi",
                    },
                },
            },
            ConflictResolutionStrategy: shared.ConflictResolutionStrategyTypeEnumEnumAcceptDestination.ToPointer(),
            DestinationCommitSpecifier: "aliquid",
            Email: sdk.String("Sonya.Marquardt@yahoo.com"),
            KeepEmptyFolders: sdk.Bool(false),
            MergeOption: shared.MergeOptionTypeEnumEnumThreeWayMerge,
            RepositoryName: "a",
            SourceCommitSpecifier: "dolorum",
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.CreateUnreferencedMergeCommitXAmzTargetEnumCodeCommit20150413CreateUnreferencedMergeCommit,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUnreferencedMergeCommitOutput != nil {
        // handle response
    }
}
```

## DeleteApprovalRuleTemplate

Deletes a specified approval rule template. Deleting a template does not remove approval rules on pull requests already created with the template.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteApprovalRuleTemplate(ctx, operations.DeleteApprovalRuleTemplateRequest{
        DeleteApprovalRuleTemplateInput: shared.DeleteApprovalRuleTemplateInput{
            ApprovalRuleTemplateName: "cumque",
        },
        XAmzAlgorithm: sdk.String("facere"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.DeleteApprovalRuleTemplateXAmzTargetEnumCodeCommit20150413DeleteApprovalRuleTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteApprovalRuleTemplateOutput != nil {
        // handle response
    }
}
```

## DeleteBranch

Deletes a branch from a repository, unless that branch is the default branch for the repository. 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteBranch(ctx, operations.DeleteBranchRequest{
        DeleteBranchInput: shared.DeleteBranchInput{
            BranchName: "enim",
            RepositoryName: "accusamus",
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.DeleteBranchXAmzTargetEnumCodeCommit20150413DeleteBranch,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteBranchOutput != nil {
        // handle response
    }
}
```

## DeleteCommentContent

Deletes the content of a comment made on a change, file, or commit in a repository.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteCommentContent(ctx, operations.DeleteCommentContentRequest{
        DeleteCommentContentInput: shared.DeleteCommentContentInput{
            CommentID: "sapiente",
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.DeleteCommentContentXAmzTargetEnumCodeCommit20150413DeleteCommentContent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCommentContentOutput != nil {
        // handle response
    }
}
```

## DeleteFile

Deletes a specified file from a specified branch. A commit is created on the branch that contains the revision. The file still exists in the commits earlier to the commit that contains the deletion.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteFile(ctx, operations.DeleteFileRequest{
        DeleteFileInput: shared.DeleteFileInput{
            BranchName: "perferendis",
            CommitMessage: sdk.String("nihil"),
            Email: sdk.String("Michele29@gmail.com"),
            FilePath: "suscipit",
            KeepEmptyFolders: sdk.Bool(false),
            Name: sdk.String("Robin Keebler"),
            ParentCommitID: "architecto",
            RepositoryName: "magnam",
        },
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzTarget: operations.DeleteFileXAmzTargetEnumCodeCommit20150413DeleteFile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFileOutput != nil {
        // handle response
    }
}
```

## DeletePullRequestApprovalRule

Deletes an approval rule from a specified pull request. Approval rules can be deleted from a pull request only if the pull request is open, and if the approval rule was created specifically for a pull request and not generated from an approval rule template associated with the repository where the pull request was created. You cannot delete an approval rule from a merged or closed pull request.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeletePullRequestApprovalRule(ctx, operations.DeletePullRequestApprovalRuleRequest{
        DeletePullRequestApprovalRuleInput: shared.DeletePullRequestApprovalRuleInput{
            ApprovalRuleName: "mollitia",
            PullRequestID: "reiciendis",
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.DeletePullRequestApprovalRuleXAmzTargetEnumCodeCommit20150413DeletePullRequestApprovalRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePullRequestApprovalRuleOutput != nil {
        // handle response
    }
}
```

## DeleteRepository

<p>Deletes a repository. If a specified repository was already deleted, a null repository ID is returned.</p> <important> <p>Deleting a repository also deletes all associated objects and metadata. After a repository is deleted, all future push calls to the deleted repository fail.</p> </important>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteRepository(ctx, operations.DeleteRepositoryRequest{
        DeleteRepositoryInput: shared.DeleteRepositoryInput{
            RepositoryName: "quasi",
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.DeleteRepositoryXAmzTargetEnumCodeCommit20150413DeleteRepository,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRepositoryOutput != nil {
        // handle response
    }
}
```

## DescribeMergeConflicts

Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy. If the merge option for the attempted merge is specified as FAST_FORWARD_MERGE, an exception is thrown.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeMergeConflicts(ctx, operations.DescribeMergeConflictsRequest{
        DescribeMergeConflictsInput: shared.DescribeMergeConflictsInput{
            ConflictDetailLevel: shared.ConflictDetailLevelTypeEnumEnumFileLevel.ToPointer(),
            ConflictResolutionStrategy: shared.ConflictResolutionStrategyTypeEnumEnumNone.ToPointer(),
            DestinationCommitSpecifier: "architecto",
            FilePath: "repudiandae",
            MaxMergeHunks: sdk.Int64(352312),
            MergeOption: shared.MergeOptionTypeEnumEnumThreeWayMerge,
            NextToken: sdk.String("nihil"),
            RepositoryName: "repellat",
            SourceCommitSpecifier: "quibusdam",
        },
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.DescribeMergeConflictsXAmzTargetEnumCodeCommit20150413DescribeMergeConflicts,
        MaxMergeHunks: sdk.String("magni"),
        NextToken: sdk.String("sunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeMergeConflictsOutput != nil {
        // handle response
    }
}
```

## DescribePullRequestEvents

Returns information about one or more pull request events.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribePullRequestEvents(ctx, operations.DescribePullRequestEventsRequest{
        DescribePullRequestEventsInput: shared.DescribePullRequestEventsInput{
            ActorArn: sdk.String("quo"),
            MaxResults: sdk.Int64(848009),
            NextToken: sdk.String("pariatur"),
            PullRequestEventType: shared.PullRequestEventTypeEnumPullRequestApprovalRuleOverridden.ToPointer(),
            PullRequestID: "ea",
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.DescribePullRequestEventsXAmzTargetEnumCodeCommit20150413DescribePullRequestEvents,
        MaxResults: sdk.String("ipsam"),
        NextToken: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePullRequestEventsOutput != nil {
        // handle response
    }
}
```

## DisassociateApprovalRuleTemplateFromRepository

Removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository. This does not delete any approval rules previously created for pull requests through the template association.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociateApprovalRuleTemplateFromRepository(ctx, operations.DisassociateApprovalRuleTemplateFromRepositoryRequest{
        DisassociateApprovalRuleTemplateFromRepositoryInput: shared.DisassociateApprovalRuleTemplateFromRepositoryInput{
            ApprovalRuleTemplateName: "autem",
            RepositoryName: "nam",
        },
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.DisassociateApprovalRuleTemplateFromRepositoryXAmzTargetEnumCodeCommit20150413DisassociateApprovalRuleTemplateFromRepository,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EvaluatePullRequestApprovalRules

Evaluates whether a pull request has met all the conditions specified in its associated approval rules.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.EvaluatePullRequestApprovalRules(ctx, operations.EvaluatePullRequestApprovalRulesRequest{
        EvaluatePullRequestApprovalRulesInput: shared.EvaluatePullRequestApprovalRulesInput{
            PullRequestID: "aut",
            RevisionID: "cumque",
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.EvaluatePullRequestApprovalRulesXAmzTargetEnumCodeCommit20150413EvaluatePullRequestApprovalRules,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EvaluatePullRequestApprovalRulesOutput != nil {
        // handle response
    }
}
```

## GetApprovalRuleTemplate

Returns information about a specified approval rule template.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetApprovalRuleTemplate(ctx, operations.GetApprovalRuleTemplateRequest{
        GetApprovalRuleTemplateInput: shared.GetApprovalRuleTemplateInput{
            ApprovalRuleTemplateName: "dignissimos",
        },
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("nesciunt"),
        XAmzDate: sdk.String("eos"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("minus"),
        XAmzTarget: operations.GetApprovalRuleTemplateXAmzTargetEnumCodeCommit20150413GetApprovalRuleTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetApprovalRuleTemplateOutput != nil {
        // handle response
    }
}
```

## GetBlob

Returns the base-64 encoded content of an individual blob in a repository.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetBlob(ctx, operations.GetBlobRequest{
        GetBlobInput: shared.GetBlobInput{
            BlobID: "quam",
            RepositoryName: "dolor",
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("perspiciatis"),
        XAmzTarget: operations.GetBlobXAmzTargetEnumCodeCommit20150413GetBlob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBlobOutput != nil {
        // handle response
    }
}
```

## GetBranch

Returns information about a repository branch, including its name and the last commit ID.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetBranch(ctx, operations.GetBranchRequest{
        GetBranchInput: shared.GetBranchInput{
            BranchName: sdk.String("voluptatem"),
            RepositoryName: sdk.String("porro"),
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.GetBranchXAmzTargetEnumCodeCommit20150413GetBranch,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBranchOutput != nil {
        // handle response
    }
}
```

## GetComment

<p>Returns the content of a comment made on a change, file, or commit in a repository. </p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetComment(ctx, operations.GetCommentRequest{
        GetCommentInput: shared.GetCommentInput{
            CommentID: "asperiores",
        },
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.GetCommentXAmzTargetEnumCodeCommit20150413GetComment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCommentOutput != nil {
        // handle response
    }
}
```

## GetCommentReactions

Returns information about reactions to a specified comment ID. Reactions from users who have been deleted will not be included in the count.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCommentReactions(ctx, operations.GetCommentReactionsRequest{
        GetCommentReactionsInput: shared.GetCommentReactionsInput{
            CommentID: "nobis",
            MaxResults: sdk.Int64(730122),
            NextToken: sdk.String("delectus"),
            ReactionUserArn: sdk.String("quaerat"),
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.GetCommentReactionsXAmzTargetEnumCodeCommit20150413GetCommentReactions,
        MaxResults: sdk.String("hic"),
        NextToken: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCommentReactionsOutput != nil {
        // handle response
    }
}
```

## GetCommentsForComparedCommit

<p>Returns information about comments made on the comparison between two commits.</p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCommentsForComparedCommit(ctx, operations.GetCommentsForComparedCommitRequest{
        GetCommentsForComparedCommitInput: shared.GetCommentsForComparedCommitInput{
            AfterCommitID: "cum",
            BeforeCommitID: sdk.String("voluptate"),
            MaxResults: sdk.Int64(490459),
            NextToken: sdk.String("reiciendis"),
            RepositoryName: "amet",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("odio"),
        XAmzTarget: operations.GetCommentsForComparedCommitXAmzTargetEnumCodeCommit20150413GetCommentsForComparedCommit,
        MaxResults: sdk.String("quaerat"),
        NextToken: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCommentsForComparedCommitOutput != nil {
        // handle response
    }
}
```

## GetCommentsForPullRequest

<p>Returns comments made on a pull request.</p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCommentsForPullRequest(ctx, operations.GetCommentsForPullRequestRequest{
        GetCommentsForPullRequestInput: shared.GetCommentsForPullRequestInput{
            AfterCommitID: sdk.String("quidem"),
            BeforeCommitID: sdk.String("voluptatibus"),
            MaxResults: sdk.Int64(377752),
            NextToken: sdk.String("natus"),
            PullRequestID: "eos",
            RepositoryName: sdk.String("atque"),
        },
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.GetCommentsForPullRequestXAmzTargetEnumCodeCommit20150413GetCommentsForPullRequest,
        MaxResults: sdk.String("dolorum"),
        NextToken: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCommentsForPullRequestOutput != nil {
        // handle response
    }
}
```

## GetCommit

Returns information about a commit, including commit message and committer information.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCommit(ctx, operations.GetCommitRequest{
        GetCommitInput: shared.GetCommitInput{
            CommitID: "omnis",
            RepositoryName: "necessitatibus",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.GetCommitXAmzTargetEnumCodeCommit20150413GetCommit,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCommitOutput != nil {
        // handle response
    }
}
```

## GetDifferences

Returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference). Results can be limited to a specified path.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDifferences(ctx, operations.GetDifferencesRequest{
        GetDifferencesInput: shared.GetDifferencesInput{
            MaxResults: sdk.Int64(263322),
            NextToken: sdk.String("aspernatur"),
            AfterCommitSpecifier: "perferendis",
            AfterPath: sdk.String("amet"),
            BeforeCommitSpecifier: sdk.String("optio"),
            BeforePath: sdk.String("accusamus"),
            RepositoryName: "ad",
        },
        MaxResults: sdk.String("saepe"),
        NextToken: sdk.String("suscipit"),
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("similique"),
        XAmzSignedHeaders: sdk.String("alias"),
        XAmzTarget: operations.GetDifferencesXAmzTargetEnumCodeCommit20150413GetDifferences,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDifferencesOutput != nil {
        // handle response
    }
}
```

## GetFile

Returns the base-64 encoded contents of a specified file and its metadata.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetFile(ctx, operations.GetFileRequest{
        GetFileInput: shared.GetFileInput{
            CommitSpecifier: sdk.String("at"),
            FilePath: "quaerat",
            RepositoryName: "tempora",
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("officiis"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.GetFileXAmzTargetEnumCodeCommit20150413GetFile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFileOutput != nil {
        // handle response
    }
}
```

## GetFolder

Returns the contents of a specified folder in a repository.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetFolder(ctx, operations.GetFolderRequest{
        GetFolderInput: shared.GetFolderInput{
            CommitSpecifier: sdk.String("harum"),
            FolderPath: "iusto",
            RepositoryName: "ipsum",
        },
        XAmzAlgorithm: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzTarget: operations.GetFolderXAmzTargetEnumCodeCommit20150413GetFolder,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFolderOutput != nil {
        // handle response
    }
}
```

## GetMergeCommit

Returns information about a specified merge commit.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetMergeCommit(ctx, operations.GetMergeCommitRequest{
        GetMergeCommitInput: shared.GetMergeCommitInput{
            ConflictDetailLevel: shared.ConflictDetailLevelTypeEnumEnumFileLevel.ToPointer(),
            ConflictResolutionStrategy: shared.ConflictResolutionStrategyTypeEnumEnumAutomerge.ToPointer(),
            DestinationCommitSpecifier: "totam",
            RepositoryName: "nihil",
            SourceCommitSpecifier: "sit",
        },
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.GetMergeCommitXAmzTargetEnumCodeCommit20150413GetMergeCommit,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMergeCommitOutput != nil {
        // handle response
    }
}
```

## GetMergeConflicts

Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetMergeConflicts(ctx, operations.GetMergeConflictsRequest{
        GetMergeConflictsInput: shared.GetMergeConflictsInput{
            ConflictDetailLevel: shared.ConflictDetailLevelTypeEnumEnumFileLevel.ToPointer(),
            ConflictResolutionStrategy: shared.ConflictResolutionStrategyTypeEnumEnumNone.ToPointer(),
            DestinationCommitSpecifier: "incidunt",
            MaxConflictFiles: sdk.Int64(186458),
            MergeOption: shared.MergeOptionTypeEnumEnumSquashMerge,
            NextToken: sdk.String("maxime"),
            RepositoryName: "pariatur",
            SourceCommitSpecifier: "soluta",
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.GetMergeConflictsXAmzTargetEnumCodeCommit20150413GetMergeConflicts,
        MaxConflictFiles: sdk.String("facilis"),
        NextToken: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMergeConflictsOutput != nil {
        // handle response
    }
}
```

## GetMergeOptions

Returns information about the merge options available for merging two specified branches. For details about why a merge option is not available, use GetMergeConflicts or DescribeMergeConflicts.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetMergeOptions(ctx, operations.GetMergeOptionsRequest{
        GetMergeOptionsInput: shared.GetMergeOptionsInput{
            ConflictDetailLevel: shared.ConflictDetailLevelTypeEnumEnumFileLevel.ToPointer(),
            ConflictResolutionStrategy: shared.ConflictResolutionStrategyTypeEnumEnumAcceptDestination.ToPointer(),
            DestinationCommitSpecifier: "temporibus",
            RepositoryName: "qui",
            SourceCommitSpecifier: "neque",
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("sunt"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.GetMergeOptionsXAmzTargetEnumCodeCommit20150413GetMergeOptions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMergeOptionsOutput != nil {
        // handle response
    }
}
```

## GetPullRequest

Gets information about a pull request in a specified repository.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetPullRequest(ctx, operations.GetPullRequestRequest{
        GetPullRequestInput: shared.GetPullRequestInput{
            PullRequestID: "voluptatem",
        },
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        XAmzTarget: operations.GetPullRequestXAmzTargetEnumCodeCommit20150413GetPullRequest,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPullRequestOutput != nil {
        // handle response
    }
}
```

## GetPullRequestApprovalStates

Gets information about the approval states for a specified pull request. Approval states only apply to pull requests that have one or more approval rules applied to them.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetPullRequestApprovalStates(ctx, operations.GetPullRequestApprovalStatesRequest{
        GetPullRequestApprovalStatesInput: shared.GetPullRequestApprovalStatesInput{
            PullRequestID: "nobis",
            RevisionID: "quos",
        },
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("labore"),
        XAmzTarget: operations.GetPullRequestApprovalStatesXAmzTargetEnumCodeCommit20150413GetPullRequestApprovalStates,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPullRequestApprovalStatesOutput != nil {
        // handle response
    }
}
```

## GetPullRequestOverrideState

Returns information about whether approval rules have been set aside (overridden) for a pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetPullRequestOverrideState(ctx, operations.GetPullRequestOverrideStateRequest{
        GetPullRequestOverrideStateInput: shared.GetPullRequestOverrideStateInput{
            PullRequestID: "adipisci",
            RevisionID: "dolorum",
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("itaque"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("est"),
        XAmzTarget: operations.GetPullRequestOverrideStateXAmzTargetEnumCodeCommit20150413GetPullRequestOverrideState,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPullRequestOverrideStateOutput != nil {
        // handle response
    }
}
```

## GetRepository

<p>Returns information about a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetRepository(ctx, operations.GetRepositoryRequest{
        GetRepositoryInput: shared.GetRepositoryInput{
            RepositoryName: "repellendus",
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzTarget: operations.GetRepositoryXAmzTargetEnumCodeCommit20150413GetRepository,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRepositoryOutput != nil {
        // handle response
    }
}
```

## GetRepositoryTriggers

Gets information about triggers configured for a repository.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetRepositoryTriggers(ctx, operations.GetRepositoryTriggersRequest{
        GetRepositoryTriggersInput: shared.GetRepositoryTriggersInput{
            RepositoryName: "laudantium",
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.GetRepositoryTriggersXAmzTargetEnumCodeCommit20150413GetRepositoryTriggers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRepositoryTriggersOutput != nil {
        // handle response
    }
}
```

## ListApprovalRuleTemplates

Lists all approval rule templates in the specified AWS Region in your AWS account. If an AWS Region is not specified, the AWS Region where you are signed in is used.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListApprovalRuleTemplates(ctx, operations.ListApprovalRuleTemplatesRequest{
        ListApprovalRuleTemplatesInput: shared.ListApprovalRuleTemplatesInput{
            MaxResults: sdk.Int64(218403),
            NextToken: sdk.String("delectus"),
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.ListApprovalRuleTemplatesXAmzTargetEnumCodeCommit20150413ListApprovalRuleTemplates,
        MaxResults: sdk.String("quod"),
        NextToken: sdk.String("odio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListApprovalRuleTemplatesOutput != nil {
        // handle response
    }
}
```

## ListAssociatedApprovalRuleTemplatesForRepository

Lists all approval rule templates that are associated with a specified repository.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAssociatedApprovalRuleTemplatesForRepository(ctx, operations.ListAssociatedApprovalRuleTemplatesForRepositoryRequest{
        ListAssociatedApprovalRuleTemplatesForRepositoryInput: shared.ListAssociatedApprovalRuleTemplatesForRepositoryInput{
            MaxResults: sdk.Int64(630448),
            NextToken: sdk.String("facilis"),
            RepositoryName: "vero",
        },
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.ListAssociatedApprovalRuleTemplatesForRepositoryXAmzTargetEnumCodeCommit20150413ListAssociatedApprovalRuleTemplatesForRepository,
        MaxResults: sdk.String("aut"),
        NextToken: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssociatedApprovalRuleTemplatesForRepositoryOutput != nil {
        // handle response
    }
}
```

## ListBranches

Gets information about one or more branches in a repository.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListBranches(ctx, operations.ListBranchesRequest{
        ListBranchesInput: shared.ListBranchesInput{
            NextToken: sdk.String("exercitationem"),
            RepositoryName: "nulla",
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("ducimus"),
        XAmzTarget: operations.ListBranchesXAmzTargetEnumCodeCommit20150413ListBranches,
        NextToken: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBranchesOutput != nil {
        // handle response
    }
}
```

## ListPullRequests

Returns a list of pull requests for a specified repository. The return list can be refined by pull request status or pull request author ARN.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListPullRequests(ctx, operations.ListPullRequestsRequest{
        ListPullRequestsInput: shared.ListPullRequestsInput{
            AuthorArn: sdk.String("officia"),
            MaxResults: sdk.Int64(269479),
            NextToken: sdk.String("ipsam"),
            PullRequestStatus: shared.PullRequestStatusEnumEnumOpen.ToPointer(),
            RepositoryName: "aspernatur",
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("ratione"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.ListPullRequestsXAmzTargetEnumCodeCommit20150413ListPullRequests,
        MaxResults: sdk.String("dolor"),
        NextToken: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPullRequestsOutput != nil {
        // handle response
    }
}
```

## ListRepositories

Gets information about one or more repositories.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListRepositories(ctx, operations.ListRepositoriesRequest{
        ListRepositoriesInput: shared.ListRepositoriesInput{
            NextToken: sdk.String("quasi"),
            Order: shared.OrderEnumEnumAscending.ToPointer(),
            SortBy: shared.SortByEnumEnumLastModifiedDate.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.ListRepositoriesXAmzTargetEnumCodeCommit20150413ListRepositories,
        NextToken: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRepositoriesOutput != nil {
        // handle response
    }
}
```

## ListRepositoriesForApprovalRuleTemplate

Lists all repositories associated with the specified approval rule template.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListRepositoriesForApprovalRuleTemplate(ctx, operations.ListRepositoriesForApprovalRuleTemplateRequest{
        ListRepositoriesForApprovalRuleTemplateInput: shared.ListRepositoriesForApprovalRuleTemplateInput{
            ApprovalRuleTemplateName: "corporis",
            MaxResults: sdk.Int64(333145),
            NextToken: sdk.String("aliquid"),
        },
        XAmzAlgorithm: sdk.String("inventore"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.ListRepositoriesForApprovalRuleTemplateXAmzTargetEnumCodeCommit20150413ListRepositoriesForApprovalRuleTemplate,
        MaxResults: sdk.String("minima"),
        NextToken: sdk.String("eaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRepositoriesForApprovalRuleTemplateOutput != nil {
        // handle response
    }
}
```

## ListTagsForResource

Gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the<i> AWS CodeCommit User Guide</i>.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceInput: shared.ListTagsForResourceInput{
            NextToken: sdk.String("a"),
            ResourceArn: "libero",
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("aliquam"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumCodeCommit20150413ListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceOutput != nil {
        // handle response
    }
}
```

## MergeBranchesByFastForward

Merges two branches using the fast-forward merge strategy.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.MergeBranchesByFastForward(ctx, operations.MergeBranchesByFastForwardRequest{
        MergeBranchesByFastForwardInput: shared.MergeBranchesByFastForwardInput{
            DestinationCommitSpecifier: "inventore",
            RepositoryName: "non",
            SourceCommitSpecifier: "et",
            TargetBranch: sdk.String("dolorum"),
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("autem"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("quas"),
        XAmzTarget: operations.MergeBranchesByFastForwardXAmzTargetEnumCodeCommit20150413MergeBranchesByFastForward,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MergeBranchesByFastForwardOutput != nil {
        // handle response
    }
}
```

## MergeBranchesBySquash

Merges two branches using the squash merge strategy.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.MergeBranchesBySquash(ctx, operations.MergeBranchesBySquashRequest{
        MergeBranchesBySquashInput: shared.MergeBranchesBySquashInput{
            AuthorName: sdk.String("assumenda"),
            CommitMessage: sdk.String("nulla"),
            ConflictDetailLevel: shared.ConflictDetailLevelTypeEnumEnumFileLevel.ToPointer(),
            ConflictResolution: &shared.ConflictResolution{
                DeleteFiles: []shared.DeleteFileEntry{
                    shared.DeleteFileEntry{
                        FilePath: "quasi",
                    },
                    shared.DeleteFileEntry{
                        FilePath: "tempora",
                    },
                    shared.DeleteFileEntry{
                        FilePath: "numquam",
                    },
                },
                ReplaceContents: []shared.ReplaceContentEntry{
                    shared.ReplaceContentEntry{
                        Content: sdk.String("provident"),
                        FileMode: shared.FileModeTypeEnumEnumExecutable.ToPointer(),
                        FilePath: "molestiae",
                        ReplacementType: shared.ReplacementTypeEnumEnumKeepSource,
                    },
                },
                SetFileModes: []shared.SetFileModeEntry{
                    shared.SetFileModeEntry{
                        FileMode: shared.FileModeTypeEnumEnumExecutable,
                        FilePath: "esse",
                    },
                    shared.SetFileModeEntry{
                        FileMode: shared.FileModeTypeEnumEnumNormal,
                        FilePath: "rem",
                    },
                },
            },
            ConflictResolutionStrategy: shared.ConflictResolutionStrategyTypeEnumEnumAcceptDestination.ToPointer(),
            DestinationCommitSpecifier: "reprehenderit",
            Email: sdk.String("Royce.Graham@hotmail.com"),
            KeepEmptyFolders: sdk.Bool(false),
            RepositoryName: "assumenda",
            SourceCommitSpecifier: "eos",
            TargetBranch: sdk.String("praesentium"),
        },
        XAmzAlgorithm: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.MergeBranchesBySquashXAmzTargetEnumCodeCommit20150413MergeBranchesBySquash,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MergeBranchesBySquashOutput != nil {
        // handle response
    }
}
```

## MergeBranchesByThreeWay

Merges two specified branches using the three-way merge strategy.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.MergeBranchesByThreeWay(ctx, operations.MergeBranchesByThreeWayRequest{
        MergeBranchesByThreeWayInput: shared.MergeBranchesByThreeWayInput{
            AuthorName: sdk.String("illum"),
            CommitMessage: sdk.String("quo"),
            ConflictDetailLevel: shared.ConflictDetailLevelTypeEnumEnumLineLevel.ToPointer(),
            ConflictResolution: &shared.ConflictResolution{
                DeleteFiles: []shared.DeleteFileEntry{
                    shared.DeleteFileEntry{
                        FilePath: "eos",
                    },
                    shared.DeleteFileEntry{
                        FilePath: "voluptas",
                    },
                },
                ReplaceContents: []shared.ReplaceContentEntry{
                    shared.ReplaceContentEntry{
                        Content: sdk.String("cupiditate"),
                        FileMode: shared.FileModeTypeEnumEnumExecutable.ToPointer(),
                        FilePath: "tempora",
                        ReplacementType: shared.ReplacementTypeEnumEnumUseNewContent,
                    },
                },
                SetFileModes: []shared.SetFileModeEntry{
                    shared.SetFileModeEntry{
                        FileMode: shared.FileModeTypeEnumEnumExecutable,
                        FilePath: "sequi",
                    },
                    shared.SetFileModeEntry{
                        FileMode: shared.FileModeTypeEnumEnumSymlink,
                        FilePath: "esse",
                    },
                },
            },
            ConflictResolutionStrategy: shared.ConflictResolutionStrategyTypeEnumEnumAutomerge.ToPointer(),
            DestinationCommitSpecifier: "aperiam",
            Email: sdk.String("Polly46@hotmail.com"),
            KeepEmptyFolders: sdk.Bool(false),
            RepositoryName: "totam",
            SourceCommitSpecifier: "accusamus",
            TargetBranch: sdk.String("aliquam"),
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.MergeBranchesByThreeWayXAmzTargetEnumCodeCommit20150413MergeBranchesByThreeWay,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MergeBranchesByThreeWayOutput != nil {
        // handle response
    }
}
```

## MergePullRequestByFastForward

Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the fast-forward merge strategy. If the merge is successful, it closes the pull request.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.MergePullRequestByFastForward(ctx, operations.MergePullRequestByFastForwardRequest{
        MergePullRequestByFastForwardInput: shared.MergePullRequestByFastForwardInput{
            PullRequestID: "accusantium",
            RepositoryName: "porro",
            SourceCommitID: sdk.String("eum"),
        },
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.MergePullRequestByFastForwardXAmzTargetEnumCodeCommit20150413MergePullRequestByFastForward,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MergePullRequestByFastForwardOutput != nil {
        // handle response
    }
}
```

## MergePullRequestBySquash

Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the squash merge strategy. If the merge is successful, it closes the pull request.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.MergePullRequestBySquash(ctx, operations.MergePullRequestBySquashRequest{
        MergePullRequestBySquashInput: shared.MergePullRequestBySquashInput{
            AuthorName: sdk.String("incidunt"),
            CommitMessage: sdk.String("atque"),
            ConflictDetailLevel: shared.ConflictDetailLevelTypeEnumEnumFileLevel.ToPointer(),
            ConflictResolution: &shared.ConflictResolution{
                DeleteFiles: []shared.DeleteFileEntry{
                    shared.DeleteFileEntry{
                        FilePath: "nisi",
                    },
                    shared.DeleteFileEntry{
                        FilePath: "fugit",
                    },
                },
                ReplaceContents: []shared.ReplaceContentEntry{
                    shared.ReplaceContentEntry{
                        Content: sdk.String("consequuntur"),
                        FileMode: shared.FileModeTypeEnumEnumExecutable.ToPointer(),
                        FilePath: "explicabo",
                        ReplacementType: shared.ReplacementTypeEnumEnumUseNewContent,
                    },
                    shared.ReplaceContentEntry{
                        Content: sdk.String("occaecati"),
                        FileMode: shared.FileModeTypeEnumEnumNormal.ToPointer(),
                        FilePath: "et",
                        ReplacementType: shared.ReplacementTypeEnumEnumKeepSource,
                    },
                    shared.ReplaceContentEntry{
                        Content: sdk.String("eveniet"),
                        FileMode: shared.FileModeTypeEnumEnumSymlink.ToPointer(),
                        FilePath: "veritatis",
                        ReplacementType: shared.ReplacementTypeEnumEnumKeepSource,
                    },
                    shared.ReplaceContentEntry{
                        Content: sdk.String("quod"),
                        FileMode: shared.FileModeTypeEnumEnumSymlink.ToPointer(),
                        FilePath: "vero",
                        ReplacementType: shared.ReplacementTypeEnumEnumKeepSource,
                    },
                },
                SetFileModes: []shared.SetFileModeEntry{
                    shared.SetFileModeEntry{
                        FileMode: shared.FileModeTypeEnumEnumSymlink,
                        FilePath: "vel",
                    },
                },
            },
            ConflictResolutionStrategy: shared.ConflictResolutionStrategyTypeEnumEnumAcceptDestination.ToPointer(),
            Email: sdk.String("Maximus71@yahoo.com"),
            KeepEmptyFolders: sdk.Bool(false),
            PullRequestID: "eligendi",
            RepositoryName: "sit",
            SourceCommitID: sdk.String("culpa"),
        },
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        XAmzTarget: operations.MergePullRequestBySquashXAmzTargetEnumCodeCommit20150413MergePullRequestBySquash,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MergePullRequestBySquashOutput != nil {
        // handle response
    }
}
```

## MergePullRequestByThreeWay

Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the three-way merge strategy. If the merge is successful, it closes the pull request.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.MergePullRequestByThreeWay(ctx, operations.MergePullRequestByThreeWayRequest{
        MergePullRequestByThreeWayInput: shared.MergePullRequestByThreeWayInput{
            AuthorName: sdk.String("sapiente"),
            CommitMessage: sdk.String("consectetur"),
            ConflictDetailLevel: shared.ConflictDetailLevelTypeEnumEnumFileLevel.ToPointer(),
            ConflictResolution: &shared.ConflictResolution{
                DeleteFiles: []shared.DeleteFileEntry{
                    shared.DeleteFileEntry{
                        FilePath: "provident",
                    },
                    shared.DeleteFileEntry{
                        FilePath: "a",
                    },
                    shared.DeleteFileEntry{
                        FilePath: "nulla",
                    },
                },
                ReplaceContents: []shared.ReplaceContentEntry{
                    shared.ReplaceContentEntry{
                        Content: sdk.String("esse"),
                        FileMode: shared.FileModeTypeEnumEnumExecutable.ToPointer(),
                        FilePath: "a",
                        ReplacementType: shared.ReplacementTypeEnumEnumKeepDestination,
                    },
                    shared.ReplaceContentEntry{
                        Content: sdk.String("sint"),
                        FileMode: shared.FileModeTypeEnumEnumSymlink.ToPointer(),
                        FilePath: "possimus",
                        ReplacementType: shared.ReplacementTypeEnumEnumKeepBase,
                    },
                    shared.ReplaceContentEntry{
                        Content: sdk.String("eveniet"),
                        FileMode: shared.FileModeTypeEnumEnumSymlink.ToPointer(),
                        FilePath: "facere",
                        ReplacementType: shared.ReplacementTypeEnumEnumKeepBase,
                    },
                },
                SetFileModes: []shared.SetFileModeEntry{
                    shared.SetFileModeEntry{
                        FileMode: shared.FileModeTypeEnumEnumExecutable,
                        FilePath: "similique",
                    },
                },
            },
            ConflictResolutionStrategy: shared.ConflictResolutionStrategyTypeEnumEnumAcceptDestination.ToPointer(),
            Email: sdk.String("Ursula.Berge44@yahoo.com"),
            KeepEmptyFolders: sdk.Bool(false),
            PullRequestID: "eius",
            RepositoryName: "libero",
            SourceCommitID: sdk.String("illum"),
        },
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("reprehenderit"),
        XAmzTarget: operations.MergePullRequestByThreeWayXAmzTargetEnumCodeCommit20150413MergePullRequestByThreeWay,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MergePullRequestByThreeWayOutput != nil {
        // handle response
    }
}
```

## OverridePullRequestApprovalRules

Sets aside (overrides) all approval rule requirements for a specified pull request.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.OverridePullRequestApprovalRules(ctx, operations.OverridePullRequestApprovalRulesRequest{
        OverridePullRequestApprovalRulesInput: shared.OverridePullRequestApprovalRulesInput{
            OverrideStatus: shared.OverrideStatusEnumOverride,
            PullRequestID: "nisi",
            RevisionID: "aut",
        },
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.OverridePullRequestApprovalRulesXAmzTargetEnumCodeCommit20150413OverridePullRequestApprovalRules,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostCommentForComparedCommit

Posts a comment on the comparison between two commits.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PostCommentForComparedCommit(ctx, operations.PostCommentForComparedCommitRequest{
        PostCommentForComparedCommitInput: shared.PostCommentForComparedCommitInput{
            AfterCommitID: "architecto",
            BeforeCommitID: sdk.String("omnis"),
            ClientRequestToken: sdk.String("tenetur"),
            Content: "quasi",
            Location: &shared.Location{
                FilePath: sdk.String("at"),
                FilePosition: sdk.Int64(92027),
                RelativeFileVersion: shared.RelativeFileVersionEnumEnumBefore.ToPointer(),
            },
            RepositoryName: "ipsa",
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzTarget: operations.PostCommentForComparedCommitXAmzTargetEnumCodeCommit20150413PostCommentForComparedCommit,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostCommentForComparedCommitOutput != nil {
        // handle response
    }
}
```

## PostCommentForPullRequest

Posts a comment on a pull request.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PostCommentForPullRequest(ctx, operations.PostCommentForPullRequestRequest{
        PostCommentForPullRequestInput: shared.PostCommentForPullRequestInput{
            AfterCommitID: "rem",
            BeforeCommitID: "aut",
            ClientRequestToken: sdk.String("laudantium"),
            Content: "eum",
            Location: &shared.Location{
                FilePath: sdk.String("mollitia"),
                FilePosition: sdk.Int64(68074),
                RelativeFileVersion: shared.RelativeFileVersionEnumEnumAfter.ToPointer(),
            },
            PullRequestID: "non",
            RepositoryName: "voluptatem",
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.PostCommentForPullRequestXAmzTargetEnumCodeCommit20150413PostCommentForPullRequest,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostCommentForPullRequestOutput != nil {
        // handle response
    }
}
```

## PostCommentReply

Posts a comment in reply to an existing comment on a comparison between commits or a pull request.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PostCommentReply(ctx, operations.PostCommentReplyRequest{
        PostCommentReplyInput: shared.PostCommentReplyInput{
            ClientRequestToken: sdk.String("dignissimos"),
            Content: "dicta",
            InReplyTo: "maiores",
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.PostCommentReplyXAmzTargetEnumCodeCommit20150413PostCommentReply,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostCommentReplyOutput != nil {
        // handle response
    }
}
```

## PutCommentReaction

Adds or updates a reaction to a specified comment for the user whose identity is used to make the request. You can only add or update a reaction for yourself. You cannot add, modify, or delete a reaction for another user.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutCommentReaction(ctx, operations.PutCommentReactionRequest{
        PutCommentReactionInput: shared.PutCommentReactionInput{
            CommentID: "quaerat",
            ReactionValue: "consequuntur",
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.PutCommentReactionXAmzTargetEnumCodeCommit20150413PutCommentReaction,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutFile

Adds or updates a file in a branch in an AWS CodeCommit repository, and generates a commit for the addition in the specified branch.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutFile(ctx, operations.PutFileRequest{
        PutFileInput: shared.PutFileInput{
            BranchName: "quae",
            CommitMessage: sdk.String("quaerat"),
            Email: sdk.String("Prince24@hotmail.com"),
            FileContent: "fuga",
            FileMode: shared.FileModeTypeEnumEnumNormal.ToPointer(),
            FilePath: "suscipit",
            Name: sdk.String("Molly O'Reilly"),
            ParentCommitID: sdk.String("fugiat"),
            RepositoryName: "vel",
        },
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.PutFileXAmzTargetEnumCodeCommit20150413PutFile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutFileOutput != nil {
        // handle response
    }
}
```

## PutRepositoryTriggers

Replaces all triggers for a repository. Used to create or delete triggers.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutRepositoryTriggers(ctx, operations.PutRepositoryTriggersRequest{
        PutRepositoryTriggersInput: shared.PutRepositoryTriggersInput{
            RepositoryName: "commodi",
            Triggers: []shared.RepositoryTrigger{
                shared.RepositoryTrigger{
                    Branches: []string{
                        "reiciendis",
                        "assumenda",
                    },
                    CustomData: sdk.String("nemo"),
                    DestinationArn: "recusandae",
                    Events: []shared.RepositoryTriggerEventEnumEnum{
                        shared.RepositoryTriggerEventEnumEnumAll,
                        shared.RepositoryTriggerEventEnumEnumCreateReference,
                    },
                    Name: "Arlene Heidenreich",
                },
                shared.RepositoryTrigger{
                    Branches: []string{
                        "doloribus",
                        "suscipit",
                    },
                    CustomData: sdk.String("reiciendis"),
                    DestinationArn: "quidem",
                    Events: []shared.RepositoryTriggerEventEnumEnum{
                        shared.RepositoryTriggerEventEnumEnumDeleteReference,
                        shared.RepositoryTriggerEventEnumEnumUpdateReference,
                        shared.RepositoryTriggerEventEnumEnumAll,
                        shared.RepositoryTriggerEventEnumEnumDeleteReference,
                    },
                    Name: "Ms. Ethel Farrell",
                },
            },
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("harum"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("voluptates"),
        XAmzTarget: operations.PutRepositoryTriggersXAmzTargetEnumCodeCommit20150413PutRepositoryTriggers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutRepositoryTriggersOutput != nil {
        // handle response
    }
}
```

## TagResource

Adds or updates tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceInput: shared.TagResourceInput{
            ResourceArn: "libero",
            Tags: map[string]string{
                "accusamus": "similique",
            },
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumCodeCommit20150413TagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TestRepositoryTriggers

Tests the functionality of repository triggers by sending information to the trigger target. If real data is available in the repository, the test sends data from the last commit. If no data is available, sample data is generated.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TestRepositoryTriggers(ctx, operations.TestRepositoryTriggersRequest{
        TestRepositoryTriggersInput: shared.TestRepositoryTriggersInput{
            RepositoryName: "dolorum",
            Triggers: []shared.RepositoryTrigger{
                shared.RepositoryTrigger{
                    Branches: []string{
                        "dolores",
                        "blanditiis",
                        "in",
                        "dolore",
                    },
                    CustomData: sdk.String("aliquam"),
                    DestinationArn: "officiis",
                    Events: []shared.RepositoryTriggerEventEnumEnum{
                        shared.RepositoryTriggerEventEnumEnumUpdateReference,
                        shared.RepositoryTriggerEventEnumEnumAll,
                        shared.RepositoryTriggerEventEnumEnumCreateReference,
                        shared.RepositoryTriggerEventEnumEnumCreateReference,
                    },
                    Name: "Moses Douglas",
                },
            },
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("exercitationem"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("rerum"),
        XAmzTarget: operations.TestRepositoryTriggersXAmzTargetEnumCodeCommit20150413TestRepositoryTriggers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestRepositoryTriggersOutput != nil {
        // handle response
    }
}
```

## UntagResource

Removes tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceInput: shared.UntagResourceInput{
            ResourceArn: "sed",
            TagKeys: []string{
                "explicabo",
                "asperiores",
                "facilis",
                "voluptate",
            },
        },
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("in"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumCodeCommit20150413UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateApprovalRuleTemplateContent

Updates the content of an approval rule template. You can change the number of required approvals, the membership of the approval rule, and whether an approval pool is defined.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateApprovalRuleTemplateContent(ctx, operations.UpdateApprovalRuleTemplateContentRequest{
        UpdateApprovalRuleTemplateContentInput: shared.UpdateApprovalRuleTemplateContentInput{
            ApprovalRuleTemplateName: "commodi",
            ExistingRuleContentSha256: sdk.String("quidem"),
            NewRuleContent: "explicabo",
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("unde"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("illo"),
        XAmzTarget: operations.UpdateApprovalRuleTemplateContentXAmzTargetEnumCodeCommit20150413UpdateApprovalRuleTemplateContent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateApprovalRuleTemplateContentOutput != nil {
        // handle response
    }
}
```

## UpdateApprovalRuleTemplateDescription

Updates the description for a specified approval rule template.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateApprovalRuleTemplateDescription(ctx, operations.UpdateApprovalRuleTemplateDescriptionRequest{
        UpdateApprovalRuleTemplateDescriptionInput: shared.UpdateApprovalRuleTemplateDescriptionInput{
            ApprovalRuleTemplateDescription: "reiciendis",
            ApprovalRuleTemplateName: "perferendis",
        },
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmzTarget: operations.UpdateApprovalRuleTemplateDescriptionXAmzTargetEnumCodeCommit20150413UpdateApprovalRuleTemplateDescription,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateApprovalRuleTemplateDescriptionOutput != nil {
        // handle response
    }
}
```

## UpdateApprovalRuleTemplateName

Updates the name of a specified approval rule template.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateApprovalRuleTemplateName(ctx, operations.UpdateApprovalRuleTemplateNameRequest{
        UpdateApprovalRuleTemplateNameInput: shared.UpdateApprovalRuleTemplateNameInput{
            NewApprovalRuleTemplateName: "ipsum",
            OldApprovalRuleTemplateName: "ea",
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.UpdateApprovalRuleTemplateNameXAmzTargetEnumCodeCommit20150413UpdateApprovalRuleTemplateName,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateApprovalRuleTemplateNameOutput != nil {
        // handle response
    }
}
```

## UpdateComment

Replaces the contents of a comment.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateComment(ctx, operations.UpdateCommentRequest{
        UpdateCommentInput: shared.UpdateCommentInput{
            CommentID: "ex",
            Content: "sit",
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.UpdateCommentXAmzTargetEnumCodeCommit20150413UpdateComment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCommentOutput != nil {
        // handle response
    }
}
```

## UpdateDefaultBranch

<p>Sets or changes the default branch name for the specified repository.</p> <note> <p>If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.</p> </note>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateDefaultBranch(ctx, operations.UpdateDefaultBranchRequest{
        UpdateDefaultBranchInput: shared.UpdateDefaultBranchInput{
            DefaultBranchName: "debitis",
            RepositoryName: "rem",
        },
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("veniam"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.UpdateDefaultBranchXAmzTargetEnumCodeCommit20150413UpdateDefaultBranch,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdatePullRequestApprovalRuleContent

Updates the structure of an approval rule created specifically for a pull request. For example, you can change the number of required approvers and the approval pool for approvers. 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdatePullRequestApprovalRuleContent(ctx, operations.UpdatePullRequestApprovalRuleContentRequest{
        UpdatePullRequestApprovalRuleContentInput: shared.UpdatePullRequestApprovalRuleContentInput{
            ApprovalRuleName: "nulla",
            ExistingRuleContentSha256: sdk.String("magni"),
            NewRuleContent: "aperiam",
            PullRequestID: "saepe",
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("veniam"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("exercitationem"),
        XAmzTarget: operations.UpdatePullRequestApprovalRuleContentXAmzTargetEnumCodeCommit20150413UpdatePullRequestApprovalRuleContent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePullRequestApprovalRuleContentOutput != nil {
        // handle response
    }
}
```

## UpdatePullRequestApprovalState

Updates the state of a user's approval on a pull request. The user is derived from the signed-in account when the request is made.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdatePullRequestApprovalState(ctx, operations.UpdatePullRequestApprovalStateRequest{
        UpdatePullRequestApprovalStateInput: shared.UpdatePullRequestApprovalStateInput{
            ApprovalState: shared.ApprovalStateEnumRevoke,
            PullRequestID: "cum",
            RevisionID: "laboriosam",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("voluptatum"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("neque"),
        XAmzTarget: operations.UpdatePullRequestApprovalStateXAmzTargetEnumCodeCommit20150413UpdatePullRequestApprovalState,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdatePullRequestDescription

Replaces the contents of the description of a pull request.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdatePullRequestDescription(ctx, operations.UpdatePullRequestDescriptionRequest{
        UpdatePullRequestDescriptionInput: shared.UpdatePullRequestDescriptionInput{
            Description: "dolorum",
            PullRequestID: "nostrum",
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.UpdatePullRequestDescriptionXAmzTargetEnumCodeCommit20150413UpdatePullRequestDescription,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePullRequestDescriptionOutput != nil {
        // handle response
    }
}
```

## UpdatePullRequestStatus

Updates the status of a pull request. 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdatePullRequestStatus(ctx, operations.UpdatePullRequestStatusRequest{
        UpdatePullRequestStatusInput: shared.UpdatePullRequestStatusInput{
            PullRequestID: "ut",
            PullRequestStatus: shared.PullRequestStatusEnumEnumClosed,
        },
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.UpdatePullRequestStatusXAmzTargetEnumCodeCommit20150413UpdatePullRequestStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePullRequestStatusOutput != nil {
        // handle response
    }
}
```

## UpdatePullRequestTitle

Replaces the title of a pull request.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdatePullRequestTitle(ctx, operations.UpdatePullRequestTitleRequest{
        UpdatePullRequestTitleInput: shared.UpdatePullRequestTitleInput{
            PullRequestID: "sit",
            Title: "Ms.",
        },
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("sed"),
        XAmzTarget: operations.UpdatePullRequestTitleXAmzTargetEnumCodeCommit20150413UpdatePullRequestTitle,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePullRequestTitleOutput != nil {
        // handle response
    }
}
```

## UpdateRepositoryDescription

<p>Sets or changes the comment or description for a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateRepositoryDescription(ctx, operations.UpdateRepositoryDescriptionRequest{
        UpdateRepositoryDescriptionInput: shared.UpdateRepositoryDescriptionInput{
            RepositoryDescription: sdk.String("sit"),
            RepositoryName: "vel",
        },
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.UpdateRepositoryDescriptionXAmzTargetEnumCodeCommit20150413UpdateRepositoryDescription,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateRepositoryName

Renames a repository. The repository name must be unique across the calling AWS account. Repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. The suffix .git is prohibited. For more information about the limits on repository names, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Limits</a> in the AWS CodeCommit User Guide.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateRepositoryName(ctx, operations.UpdateRepositoryNameRequest{
        UpdateRepositoryNameInput: shared.UpdateRepositoryNameInput{
            NewName: "harum",
            OldName: "dicta",
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("nam"),
        XAmzTarget: operations.UpdateRepositoryNameXAmzTargetEnumCodeCommit20150413UpdateRepositoryName,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
