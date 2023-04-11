import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The default value for a merge commit message.
 *
 * @remarks
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `PR_BODY` - default to the pull request's body.
 * - `BLANK` - default to a blank commit message.
 */
export declare enum ReposCreateForAuthenticatedUserRequestBodyMergeCommitMessageEnum {
    PrBody = "PR_BODY",
    PrTitle = "PR_TITLE",
    Blank = "BLANK"
}
/**
 * The default value for a merge commit title.
 *
 * @remarks
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
 */
export declare enum ReposCreateForAuthenticatedUserRequestBodyMergeCommitTitleEnum {
    PrTitle = "PR_TITLE",
    MergeMessage = "MERGE_MESSAGE"
}
/**
 * The default value for a squash merge commit message:
 *
 * @remarks
 *
 * - `PR_BODY` - default to the pull request's body.
 * - `COMMIT_MESSAGES` - default to the branch's commit messages.
 * - `BLANK` - default to a blank commit message.
 */
export declare enum ReposCreateForAuthenticatedUserRequestBodySquashMergeCommitMessageEnum {
    PrBody = "PR_BODY",
    CommitMessages = "COMMIT_MESSAGES",
    Blank = "BLANK"
}
/**
 * The default value for a squash merge commit title:
 *
 * @remarks
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
 */
export declare enum ReposCreateForAuthenticatedUserRequestBodySquashMergeCommitTitleEnum {
    PrTitle = "PR_TITLE",
    CommitOrPrTitle = "COMMIT_OR_PR_TITLE"
}
export declare class ReposCreateForAuthenticatedUserRequestBody extends SpeakeasyBase {
    /**
     * Whether to allow Auto-merge to be used on pull requests.
     */
    allowAutoMerge?: boolean;
    /**
     * Whether to allow merge commits for pull requests.
     */
    allowMergeCommit?: boolean;
    /**
     * Whether to allow rebase merges for pull requests.
     */
    allowRebaseMerge?: boolean;
    /**
     * Whether to allow squash merges for pull requests.
     */
    allowSquashMerge?: boolean;
    /**
     * Whether the repository is initialized with a minimal README.
     */
    autoInit?: boolean;
    /**
     * Whether to delete head branches when pull requests are merged
     */
    deleteBranchOnMerge?: boolean;
    /**
     * A short description of the repository.
     */
    description?: string;
    /**
     * The desired language or platform to apply to the .gitignore.
     */
    gitignoreTemplate?: string;
    /**
     * Whether discussions are enabled.
     */
    hasDiscussions?: boolean;
    /**
     * Whether downloads are enabled.
     */
    hasDownloads?: boolean;
    /**
     * Whether issues are enabled.
     */
    hasIssues?: boolean;
    /**
     * Whether projects are enabled.
     */
    hasProjects?: boolean;
    /**
     * Whether the wiki is enabled.
     */
    hasWiki?: boolean;
    /**
     * A URL with more information about the repository.
     */
    homepage?: string;
    /**
     * Whether this repository acts as a template that can be used to generate new repositories.
     */
    isTemplate?: boolean;
    /**
     * The license keyword of the open source license for this repository.
     */
    licenseTemplate?: string;
    /**
     * The default value for a merge commit message.
     *
     * @remarks
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `PR_BODY` - default to the pull request's body.
     * - `BLANK` - default to a blank commit message.
     */
    mergeCommitMessage?: ReposCreateForAuthenticatedUserRequestBodyMergeCommitMessageEnum;
    /**
     * The default value for a merge commit title.
     *
     * @remarks
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
     */
    mergeCommitTitle?: ReposCreateForAuthenticatedUserRequestBodyMergeCommitTitleEnum;
    /**
     * The name of the repository.
     */
    name: string;
    /**
     * Whether the repository is private.
     */
    private?: boolean;
    /**
     * The default value for a squash merge commit message:
     *
     * @remarks
     *
     * - `PR_BODY` - default to the pull request's body.
     * - `COMMIT_MESSAGES` - default to the branch's commit messages.
     * - `BLANK` - default to a blank commit message.
     */
    squashMergeCommitMessage?: ReposCreateForAuthenticatedUserRequestBodySquashMergeCommitMessageEnum;
    /**
     * The default value for a squash merge commit title:
     *
     * @remarks
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
     */
    squashMergeCommitTitle?: ReposCreateForAuthenticatedUserRequestBodySquashMergeCommitTitleEnum;
    /**
     * The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
     */
    teamId?: number;
}
export declare class ReposCreateForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    repository?: shared.Repository;
    /**
     * Bad Request
     */
    scimError?: shared.ScimError;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
