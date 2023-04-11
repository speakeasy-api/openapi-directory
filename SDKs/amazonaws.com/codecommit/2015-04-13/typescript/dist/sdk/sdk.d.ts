import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://codecommit.{region}.amazonaws.com", "https://codecommit.{region}.amazonaws.com", "http://codecommit.{region}.amazonaws.com.cn", "https://codecommit.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * <fullname>AWS CodeCommit</fullname> <p>This is the <i>AWS CodeCommit API Reference</i>. This reference provides descriptions of the operations and data types for AWS CodeCommit API along with usage examples.</p> <p>You can use the AWS CodeCommit API to work with the following objects:</p> <p>Repositories, by calling the following:</p> <ul> <li> <p> <a>BatchGetRepositories</a>, which returns information about one or more repositories associated with your AWS account.</p> </li> <li> <p> <a>CreateRepository</a>, which creates an AWS CodeCommit repository.</p> </li> <li> <p> <a>DeleteRepository</a>, which deletes an AWS CodeCommit repository.</p> </li> <li> <p> <a>GetRepository</a>, which returns information about a specified repository.</p> </li> <li> <p> <a>ListRepositories</a>, which lists all AWS CodeCommit repositories associated with your AWS account.</p> </li> <li> <p> <a>UpdateRepositoryDescription</a>, which sets or updates the description of the repository.</p> </li> <li> <p> <a>UpdateRepositoryName</a>, which changes the name of the repository. If you change the name of a repository, no other users of that repository can access it until you send them the new HTTPS or SSH URL to use.</p> </li> </ul> <p>Branches, by calling the following:</p> <ul> <li> <p> <a>CreateBranch</a>, which creates a branch in a specified repository.</p> </li> <li> <p> <a>DeleteBranch</a>, which deletes the specified branch in a repository unless it is the default branch.</p> </li> <li> <p> <a>GetBranch</a>, which returns information about a specified branch.</p> </li> <li> <p> <a>ListBranches</a>, which lists all branches for a specified repository.</p> </li> <li> <p> <a>UpdateDefaultBranch</a>, which changes the default branch for a repository.</p> </li> </ul> <p>Files, by calling the following:</p> <ul> <li> <p> <a>DeleteFile</a>, which deletes the content of a specified file from a specified branch.</p> </li> <li> <p> <a>GetBlob</a>, which returns the base-64 encoded content of an individual Git blob object in a repository.</p> </li> <li> <p> <a>GetFile</a>, which returns the base-64 encoded content of a specified file.</p> </li> <li> <p> <a>GetFolder</a>, which returns the contents of a specified folder or directory.</p> </li> <li> <p> <a>PutFile</a>, which adds or modifies a single file in a specified repository and branch.</p> </li> </ul> <p>Commits, by calling the following:</p> <ul> <li> <p> <a>BatchGetCommits</a>, which returns information about one or more commits in a repository.</p> </li> <li> <p> <a>CreateCommit</a>, which creates a commit for changes to a repository.</p> </li> <li> <p> <a>GetCommit</a>, which returns information about a commit, including commit messages and author and committer information.</p> </li> <li> <p> <a>GetDifferences</a>, which returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference).</p> </li> </ul> <p>Merges, by calling the following:</p> <ul> <li> <p> <a>BatchDescribeMergeConflicts</a>, which returns information about conflicts in a merge between commits in a repository.</p> </li> <li> <p> <a>CreateUnreferencedMergeCommit</a>, which creates an unreferenced commit between two branches or commits for the purpose of comparing them and identifying any potential conflicts.</p> </li> <li> <p> <a>DescribeMergeConflicts</a>, which returns information about merge conflicts between the base, source, and destination versions of a file in a potential merge.</p> </li> <li> <p> <a>GetMergeCommit</a>, which returns information about the merge between a source and destination commit. </p> </li> <li> <p> <a>GetMergeConflicts</a>, which returns information about merge conflicts between the source and destination branch in a pull request.</p> </li> <li> <p> <a>GetMergeOptions</a>, which returns information about the available merge options between two branches or commit specifiers.</p> </li> <li> <p> <a>MergeBranchesByFastForward</a>, which merges two branches using the fast-forward merge option.</p> </li> <li> <p> <a>MergeBranchesBySquash</a>, which merges two branches using the squash merge option.</p> </li> <li> <p> <a>MergeBranchesByThreeWay</a>, which merges two branches using the three-way merge option.</p> </li> </ul> <p>Pull requests, by calling the following:</p> <ul> <li> <p> <a>CreatePullRequest</a>, which creates a pull request in a specified repository.</p> </li> <li> <p> <a>CreatePullRequestApprovalRule</a>, which creates an approval rule for a specified pull request.</p> </li> <li> <p> <a>DeletePullRequestApprovalRule</a>, which deletes an approval rule for a specified pull request.</p> </li> <li> <p> <a>DescribePullRequestEvents</a>, which returns information about one or more pull request events.</p> </li> <li> <p> <a>EvaluatePullRequestApprovalRules</a>, which evaluates whether a pull request has met all the conditions specified in its associated approval rules.</p> </li> <li> <p> <a>GetCommentsForPullRequest</a>, which returns information about comments on a specified pull request.</p> </li> <li> <p> <a>GetPullRequest</a>, which returns information about a specified pull request.</p> </li> <li> <p> <a>GetPullRequestApprovalStates</a>, which returns information about the approval states for a specified pull request.</p> </li> <li> <p> <a>GetPullRequestOverrideState</a>, which returns information about whether approval rules have been set aside (overriden) for a pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.</p> </li> <li> <p> <a>ListPullRequests</a>, which lists all pull requests for a repository.</p> </li> <li> <p> <a>MergePullRequestByFastForward</a>, which merges the source destination branch of a pull request into the specified destination branch for that pull request using the fast-forward merge option.</p> </li> <li> <p> <a>MergePullRequestBySquash</a>, which merges the source destination branch of a pull request into the specified destination branch for that pull request using the squash merge option.</p> </li> <li> <p> <a>MergePullRequestByThreeWay</a>. which merges the source destination branch of a pull request into the specified destination branch for that pull request using the three-way merge option.</p> </li> <li> <p> <a>OverridePullRequestApprovalRules</a>, which sets aside all approval rule requirements for a pull request.</p> </li> <li> <p> <a>PostCommentForPullRequest</a>, which posts a comment to a pull request at the specified line, file, or request.</p> </li> <li> <p> <a>UpdatePullRequestApprovalRuleContent</a>, which updates the structure of an approval rule for a pull request.</p> </li> <li> <p> <a>UpdatePullRequestApprovalState</a>, which updates the state of an approval on a pull request.</p> </li> <li> <p> <a>UpdatePullRequestDescription</a>, which updates the description of a pull request.</p> </li> <li> <p> <a>UpdatePullRequestStatus</a>, which updates the status of a pull request.</p> </li> <li> <p> <a>UpdatePullRequestTitle</a>, which updates the title of a pull request.</p> </li> </ul> <p>Approval rule templates, by calling the following:</p> <ul> <li> <p> <a>AssociateApprovalRuleTemplateWithRepository</a>, which associates a template with a specified repository. After the template is associated with a repository, AWS CodeCommit creates approval rules that match the template conditions on every pull request created in the specified repository.</p> </li> <li> <p> <a>BatchAssociateApprovalRuleTemplateWithRepositories</a>, which associates a template with one or more specified repositories. After the template is associated with a repository, AWS CodeCommit creates approval rules that match the template conditions on every pull request created in the specified repositories.</p> </li> <li> <p> <a>BatchDisassociateApprovalRuleTemplateFromRepositories</a>, which removes the association between a template and specified repositories so that approval rules based on the template are not automatically created when pull requests are created in those repositories.</p> </li> <li> <p> <a>CreateApprovalRuleTemplate</a>, which creates a template for approval rules that can then be associated with one or more repositories in your AWS account.</p> </li> <li> <p> <a>DeleteApprovalRuleTemplate</a>, which deletes the specified template. It does not remove approval rules on pull requests already created with the template.</p> </li> <li> <p> <a>DisassociateApprovalRuleTemplateFromRepository</a>, which removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository.</p> </li> <li> <p> <a>GetApprovalRuleTemplate</a>, which returns information about an approval rule template.</p> </li> <li> <p> <a>ListApprovalRuleTemplates</a>, which lists all approval rule templates in the AWS Region in your AWS account.</p> </li> <li> <p> <a>ListAssociatedApprovalRuleTemplatesForRepository</a>, which lists all approval rule templates that are associated with a specified repository.</p> </li> <li> <p> <a>ListRepositoriesForApprovalRuleTemplate</a>, which lists all repositories associated with the specified approval rule template.</p> </li> <li> <p> <a>UpdateApprovalRuleTemplateDescription</a>, which updates the description of an approval rule template.</p> </li> <li> <p> <a>UpdateApprovalRuleTemplateName</a>, which updates the name of an approval rule template.</p> </li> <li> <p> <a>UpdateApprovalRuleTemplateContent</a>, which updates the content of an approval rule template.</p> </li> </ul> <p>Comments in a repository, by calling the following:</p> <ul> <li> <p> <a>DeleteCommentContent</a>, which deletes the content of a comment on a commit in a repository.</p> </li> <li> <p> <a>GetComment</a>, which returns information about a comment on a commit.</p> </li> <li> <p> <a>GetCommentReactions</a>, which returns information about emoji reactions to comments.</p> </li> <li> <p> <a>GetCommentsForComparedCommit</a>, which returns information about comments on the comparison between two commit specifiers in a repository.</p> </li> <li> <p> <a>PostCommentForComparedCommit</a>, which creates a comment on the comparison between two commit specifiers in a repository.</p> </li> <li> <p> <a>PostCommentReply</a>, which creates a reply to a comment.</p> </li> <li> <p> <a>PutCommentReaction</a>, which creates or updates an emoji reaction to a comment.</p> </li> <li> <p> <a>UpdateComment</a>, which updates the content of a comment on a commit in a repository.</p> </li> </ul> <p>Tags used to tag resources in AWS CodeCommit (not Git tags), by calling the following:</p> <ul> <li> <p> <a>ListTagsForResource</a>, which gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeCommit.</p> </li> <li> <p> <a>TagResource</a>, which adds or updates tags for a resource in AWS CodeCommit.</p> </li> <li> <p> <a>UntagResource</a>, which removes tags for a resource in AWS CodeCommit.</p> </li> </ul> <p>Triggers, by calling the following:</p> <ul> <li> <p> <a>GetRepositoryTriggers</a>, which returns information about triggers configured for a repository.</p> </li> <li> <p> <a>PutRepositoryTriggers</a>, which replaces all triggers for a repository and can be used to create or delete triggers.</p> </li> <li> <p> <a>TestRepositoryTriggers</a>, which tests the functionality of a repository trigger by sending data to the trigger target.</p> </li> </ul> <p>For information about how to use AWS CodeCommit, see the <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit User Guide</a>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/codecommit/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Creates an association between an approval rule template and a specified repository. Then, the next time a pull request is created in the repository where the destination reference (if specified) matches the destination reference (branch) for the pull request, an approval rule that matches the template conditions is automatically created for that pull request. If no destination references are specified in the template, an approval rule that matches the template contents is created for all pull requests in that repository.
     */
    associateApprovalRuleTemplateWithRepository(req: operations.AssociateApprovalRuleTemplateWithRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.AssociateApprovalRuleTemplateWithRepositoryResponse>;
    /**
     * Creates an association between an approval rule template and one or more specified repositories.
     */
    batchAssociateApprovalRuleTemplateWithRepositories(req: operations.BatchAssociateApprovalRuleTemplateWithRepositoriesRequest, config?: AxiosRequestConfig): Promise<operations.BatchAssociateApprovalRuleTemplateWithRepositoriesResponse>;
    /**
     * Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy.
     */
    batchDescribeMergeConflicts(req: operations.BatchDescribeMergeConflictsRequest, config?: AxiosRequestConfig): Promise<operations.BatchDescribeMergeConflictsResponse>;
    /**
     * Removes the association between an approval rule template and one or more specified repositories.
     */
    batchDisassociateApprovalRuleTemplateFromRepositories(req: operations.BatchDisassociateApprovalRuleTemplateFromRepositoriesRequest, config?: AxiosRequestConfig): Promise<operations.BatchDisassociateApprovalRuleTemplateFromRepositoriesResponse>;
    /**
     * Returns information about the contents of one or more commits in a repository.
     */
    batchGetCommits(req: operations.BatchGetCommitsRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetCommitsResponse>;
    /**
     * <p>Returns information about one or more repositories.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
     */
    batchGetRepositories(req: operations.BatchGetRepositoriesRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetRepositoriesResponse>;
    /**
     * Creates a template for approval rules that can then be associated with one or more repositories in your AWS account. When you associate a template with a repository, AWS CodeCommit creates an approval rule that matches the conditions of the template for all pull requests that meet the conditions of the template. For more information, see <a>AssociateApprovalRuleTemplateWithRepository</a>.
     */
    createApprovalRuleTemplate(req: operations.CreateApprovalRuleTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateApprovalRuleTemplateResponse>;
    /**
     * <p>Creates a branch in a repository and points the branch to a commit.</p> <note> <p>Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.</p> </note>
     */
    createBranch(req: operations.CreateBranchRequest, config?: AxiosRequestConfig): Promise<operations.CreateBranchResponse>;
    /**
     * Creates a commit for a repository on the tip of a specified branch.
     */
    createCommit(req: operations.CreateCommitRequest, config?: AxiosRequestConfig): Promise<operations.CreateCommitResponse>;
    /**
     * Creates a pull request in the specified repository.
     */
    createPullRequest(req: operations.CreatePullRequestRequest, config?: AxiosRequestConfig): Promise<operations.CreatePullRequestResponse>;
    /**
     * Creates an approval rule for a pull request.
     */
    createPullRequestApprovalRule(req: operations.CreatePullRequestApprovalRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreatePullRequestApprovalRuleResponse>;
    /**
     * Creates a new, empty repository.
     */
    createRepository(req: operations.CreateRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.CreateRepositoryResponse>;
    /**
     * <p>Creates an unreferenced commit that represents the result of merging two branches using a specified merge strategy. This can help you determine the outcome of a potential merge. This API cannot be used with the fast-forward merge strategy because that strategy does not create a merge commit.</p> <note> <p>This unreferenced merge commit can only be accessed using the GetCommit API or through git commands such as git fetch. To retrieve this commit, you must specify its commit ID or otherwise reference it.</p> </note>
     */
    createUnreferencedMergeCommit(req: operations.CreateUnreferencedMergeCommitRequest, config?: AxiosRequestConfig): Promise<operations.CreateUnreferencedMergeCommitResponse>;
    /**
     * Deletes a specified approval rule template. Deleting a template does not remove approval rules on pull requests already created with the template.
     */
    deleteApprovalRuleTemplate(req: operations.DeleteApprovalRuleTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApprovalRuleTemplateResponse>;
    /**
     * Deletes a branch from a repository, unless that branch is the default branch for the repository.
     */
    deleteBranch(req: operations.DeleteBranchRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBranchResponse>;
    /**
     * Deletes the content of a comment made on a change, file, or commit in a repository.
     */
    deleteCommentContent(req: operations.DeleteCommentContentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCommentContentResponse>;
    /**
     * Deletes a specified file from a specified branch. A commit is created on the branch that contains the revision. The file still exists in the commits earlier to the commit that contains the deletion.
     */
    deleteFile(req: operations.DeleteFileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFileResponse>;
    /**
     * Deletes an approval rule from a specified pull request. Approval rules can be deleted from a pull request only if the pull request is open, and if the approval rule was created specifically for a pull request and not generated from an approval rule template associated with the repository where the pull request was created. You cannot delete an approval rule from a merged or closed pull request.
     */
    deletePullRequestApprovalRule(req: operations.DeletePullRequestApprovalRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeletePullRequestApprovalRuleResponse>;
    /**
     * <p>Deletes a repository. If a specified repository was already deleted, a null repository ID is returned.</p> <important> <p>Deleting a repository also deletes all associated objects and metadata. After a repository is deleted, all future push calls to the deleted repository fail.</p> </important>
     */
    deleteRepository(req: operations.DeleteRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryResponse>;
    /**
     * Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy. If the merge option for the attempted merge is specified as FAST_FORWARD_MERGE, an exception is thrown.
     */
    describeMergeConflicts(req: operations.DescribeMergeConflictsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeMergeConflictsResponse>;
    /**
     * Returns information about one or more pull request events.
     */
    describePullRequestEvents(req: operations.DescribePullRequestEventsRequest, config?: AxiosRequestConfig): Promise<operations.DescribePullRequestEventsResponse>;
    /**
     * Removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository. This does not delete any approval rules previously created for pull requests through the template association.
     */
    disassociateApprovalRuleTemplateFromRepository(req: operations.DisassociateApprovalRuleTemplateFromRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateApprovalRuleTemplateFromRepositoryResponse>;
    /**
     * Evaluates whether a pull request has met all the conditions specified in its associated approval rules.
     */
    evaluatePullRequestApprovalRules(req: operations.EvaluatePullRequestApprovalRulesRequest, config?: AxiosRequestConfig): Promise<operations.EvaluatePullRequestApprovalRulesResponse>;
    /**
     * Returns information about a specified approval rule template.
     */
    getApprovalRuleTemplate(req: operations.GetApprovalRuleTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetApprovalRuleTemplateResponse>;
    /**
     * Returns the base-64 encoded content of an individual blob in a repository.
     */
    getBlob(req: operations.GetBlobRequest, config?: AxiosRequestConfig): Promise<operations.GetBlobResponse>;
    /**
     * Returns information about a repository branch, including its name and the last commit ID.
     */
    getBranch(req: operations.GetBranchRequest, config?: AxiosRequestConfig): Promise<operations.GetBranchResponse>;
    /**
     * <p>Returns the content of a comment made on a change, file, or commit in a repository. </p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>
     */
    getComment(req: operations.GetCommentRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentResponse>;
    /**
     * Returns information about reactions to a specified comment ID. Reactions from users who have been deleted will not be included in the count.
     */
    getCommentReactions(req: operations.GetCommentReactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentReactionsResponse>;
    /**
     * <p>Returns information about comments made on the comparison between two commits.</p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>
     */
    getCommentsForComparedCommit(req: operations.GetCommentsForComparedCommitRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentsForComparedCommitResponse>;
    /**
     * <p>Returns comments made on a pull request.</p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>
     */
    getCommentsForPullRequest(req: operations.GetCommentsForPullRequestRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentsForPullRequestResponse>;
    /**
     * Returns information about a commit, including commit message and committer information.
     */
    getCommit(req: operations.GetCommitRequest, config?: AxiosRequestConfig): Promise<operations.GetCommitResponse>;
    /**
     * Returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference). Results can be limited to a specified path.
     */
    getDifferences(req: operations.GetDifferencesRequest, config?: AxiosRequestConfig): Promise<operations.GetDifferencesResponse>;
    /**
     * Returns the base-64 encoded contents of a specified file and its metadata.
     */
    getFile(req: operations.GetFileRequest, config?: AxiosRequestConfig): Promise<operations.GetFileResponse>;
    /**
     * Returns the contents of a specified folder in a repository.
     */
    getFolder(req: operations.GetFolderRequest, config?: AxiosRequestConfig): Promise<operations.GetFolderResponse>;
    /**
     * Returns information about a specified merge commit.
     */
    getMergeCommit(req: operations.GetMergeCommitRequest, config?: AxiosRequestConfig): Promise<operations.GetMergeCommitResponse>;
    /**
     * Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.
     */
    getMergeConflicts(req: operations.GetMergeConflictsRequest, config?: AxiosRequestConfig): Promise<operations.GetMergeConflictsResponse>;
    /**
     * Returns information about the merge options available for merging two specified branches. For details about why a merge option is not available, use GetMergeConflicts or DescribeMergeConflicts.
     */
    getMergeOptions(req: operations.GetMergeOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetMergeOptionsResponse>;
    /**
     * Gets information about a pull request in a specified repository.
     */
    getPullRequest(req: operations.GetPullRequestRequest, config?: AxiosRequestConfig): Promise<operations.GetPullRequestResponse>;
    /**
     * Gets information about the approval states for a specified pull request. Approval states only apply to pull requests that have one or more approval rules applied to them.
     */
    getPullRequestApprovalStates(req: operations.GetPullRequestApprovalStatesRequest, config?: AxiosRequestConfig): Promise<operations.GetPullRequestApprovalStatesResponse>;
    /**
     * Returns information about whether approval rules have been set aside (overridden) for a pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.
     */
    getPullRequestOverrideState(req: operations.GetPullRequestOverrideStateRequest, config?: AxiosRequestConfig): Promise<operations.GetPullRequestOverrideStateResponse>;
    /**
     * <p>Returns information about a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
     */
    getRepository(req: operations.GetRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryResponse>;
    /**
     * Gets information about triggers configured for a repository.
     */
    getRepositoryTriggers(req: operations.GetRepositoryTriggersRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryTriggersResponse>;
    /**
     * Lists all approval rule templates in the specified AWS Region in your AWS account. If an AWS Region is not specified, the AWS Region where you are signed in is used.
     */
    listApprovalRuleTemplates(req: operations.ListApprovalRuleTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListApprovalRuleTemplatesResponse>;
    /**
     * Lists all approval rule templates that are associated with a specified repository.
     */
    listAssociatedApprovalRuleTemplatesForRepository(req: operations.ListAssociatedApprovalRuleTemplatesForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.ListAssociatedApprovalRuleTemplatesForRepositoryResponse>;
    /**
     * Gets information about one or more branches in a repository.
     */
    listBranches(req: operations.ListBranchesRequest, config?: AxiosRequestConfig): Promise<operations.ListBranchesResponse>;
    /**
     * Returns a list of pull requests for a specified repository. The return list can be refined by pull request status or pull request author ARN.
     */
    listPullRequests(req: operations.ListPullRequestsRequest, config?: AxiosRequestConfig): Promise<operations.ListPullRequestsResponse>;
    /**
     * Gets information about one or more repositories.
     */
    listRepositories(req: operations.ListRepositoriesRequest, config?: AxiosRequestConfig): Promise<operations.ListRepositoriesResponse>;
    /**
     * Lists all repositories associated with the specified approval rule template.
     */
    listRepositoriesForApprovalRuleTemplate(req: operations.ListRepositoriesForApprovalRuleTemplateRequest, config?: AxiosRequestConfig): Promise<operations.ListRepositoriesForApprovalRuleTemplateResponse>;
    /**
     * Gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the<i> AWS CodeCommit User Guide</i>.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Merges two branches using the fast-forward merge strategy.
     */
    mergeBranchesByFastForward(req: operations.MergeBranchesByFastForwardRequest, config?: AxiosRequestConfig): Promise<operations.MergeBranchesByFastForwardResponse>;
    /**
     * Merges two branches using the squash merge strategy.
     */
    mergeBranchesBySquash(req: operations.MergeBranchesBySquashRequest, config?: AxiosRequestConfig): Promise<operations.MergeBranchesBySquashResponse>;
    /**
     * Merges two specified branches using the three-way merge strategy.
     */
    mergeBranchesByThreeWay(req: operations.MergeBranchesByThreeWayRequest, config?: AxiosRequestConfig): Promise<operations.MergeBranchesByThreeWayResponse>;
    /**
     * Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the fast-forward merge strategy. If the merge is successful, it closes the pull request.
     */
    mergePullRequestByFastForward(req: operations.MergePullRequestByFastForwardRequest, config?: AxiosRequestConfig): Promise<operations.MergePullRequestByFastForwardResponse>;
    /**
     * Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the squash merge strategy. If the merge is successful, it closes the pull request.
     */
    mergePullRequestBySquash(req: operations.MergePullRequestBySquashRequest, config?: AxiosRequestConfig): Promise<operations.MergePullRequestBySquashResponse>;
    /**
     * Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the three-way merge strategy. If the merge is successful, it closes the pull request.
     */
    mergePullRequestByThreeWay(req: operations.MergePullRequestByThreeWayRequest, config?: AxiosRequestConfig): Promise<operations.MergePullRequestByThreeWayResponse>;
    /**
     * Sets aside (overrides) all approval rule requirements for a specified pull request.
     */
    overridePullRequestApprovalRules(req: operations.OverridePullRequestApprovalRulesRequest, config?: AxiosRequestConfig): Promise<operations.OverridePullRequestApprovalRulesResponse>;
    /**
     * Posts a comment on the comparison between two commits.
     */
    postCommentForComparedCommit(req: operations.PostCommentForComparedCommitRequest, config?: AxiosRequestConfig): Promise<operations.PostCommentForComparedCommitResponse>;
    /**
     * Posts a comment on a pull request.
     */
    postCommentForPullRequest(req: operations.PostCommentForPullRequestRequest, config?: AxiosRequestConfig): Promise<operations.PostCommentForPullRequestResponse>;
    /**
     * Posts a comment in reply to an existing comment on a comparison between commits or a pull request.
     */
    postCommentReply(req: operations.PostCommentReplyRequest, config?: AxiosRequestConfig): Promise<operations.PostCommentReplyResponse>;
    /**
     * Adds or updates a reaction to a specified comment for the user whose identity is used to make the request. You can only add or update a reaction for yourself. You cannot add, modify, or delete a reaction for another user.
     */
    putCommentReaction(req: operations.PutCommentReactionRequest, config?: AxiosRequestConfig): Promise<operations.PutCommentReactionResponse>;
    /**
     * Adds or updates a file in a branch in an AWS CodeCommit repository, and generates a commit for the addition in the specified branch.
     */
    putFile(req: operations.PutFileRequest, config?: AxiosRequestConfig): Promise<operations.PutFileResponse>;
    /**
     * Replaces all triggers for a repository. Used to create or delete triggers.
     */
    putRepositoryTriggers(req: operations.PutRepositoryTriggersRequest, config?: AxiosRequestConfig): Promise<operations.PutRepositoryTriggersResponse>;
    /**
     * Adds or updates tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Tests the functionality of repository triggers by sending information to the trigger target. If real data is available in the repository, the test sends data from the last commit. If no data is available, sample data is generated.
     */
    testRepositoryTriggers(req: operations.TestRepositoryTriggersRequest, config?: AxiosRequestConfig): Promise<operations.TestRepositoryTriggersResponse>;
    /**
     * Removes tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates the content of an approval rule template. You can change the number of required approvals, the membership of the approval rule, and whether an approval pool is defined.
     */
    updateApprovalRuleTemplateContent(req: operations.UpdateApprovalRuleTemplateContentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApprovalRuleTemplateContentResponse>;
    /**
     * Updates the description for a specified approval rule template.
     */
    updateApprovalRuleTemplateDescription(req: operations.UpdateApprovalRuleTemplateDescriptionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApprovalRuleTemplateDescriptionResponse>;
    /**
     * Updates the name of a specified approval rule template.
     */
    updateApprovalRuleTemplateName(req: operations.UpdateApprovalRuleTemplateNameRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApprovalRuleTemplateNameResponse>;
    /**
     * Replaces the contents of a comment.
     */
    updateComment(req: operations.UpdateCommentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCommentResponse>;
    /**
     * <p>Sets or changes the default branch name for the specified repository.</p> <note> <p>If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.</p> </note>
     */
    updateDefaultBranch(req: operations.UpdateDefaultBranchRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDefaultBranchResponse>;
    /**
     * Updates the structure of an approval rule created specifically for a pull request. For example, you can change the number of required approvers and the approval pool for approvers.
     */
    updatePullRequestApprovalRuleContent(req: operations.UpdatePullRequestApprovalRuleContentRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePullRequestApprovalRuleContentResponse>;
    /**
     * Updates the state of a user's approval on a pull request. The user is derived from the signed-in account when the request is made.
     */
    updatePullRequestApprovalState(req: operations.UpdatePullRequestApprovalStateRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePullRequestApprovalStateResponse>;
    /**
     * Replaces the contents of the description of a pull request.
     */
    updatePullRequestDescription(req: operations.UpdatePullRequestDescriptionRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePullRequestDescriptionResponse>;
    /**
     * Updates the status of a pull request.
     */
    updatePullRequestStatus(req: operations.UpdatePullRequestStatusRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePullRequestStatusResponse>;
    /**
     * Replaces the title of a pull request.
     */
    updatePullRequestTitle(req: operations.UpdatePullRequestTitleRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePullRequestTitleResponse>;
    /**
     * <p>Sets or changes the comment or description for a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
     */
    updateRepositoryDescription(req: operations.UpdateRepositoryDescriptionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRepositoryDescriptionResponse>;
    /**
     * Renames a repository. The repository name must be unique across the calling AWS account. Repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. The suffix .git is prohibited. For more information about the limits on repository names, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Limits</a> in the AWS CodeCommit User Guide.
     */
    updateRepositoryName(req: operations.UpdateRepositoryNameRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRepositoryNameResponse>;
}
