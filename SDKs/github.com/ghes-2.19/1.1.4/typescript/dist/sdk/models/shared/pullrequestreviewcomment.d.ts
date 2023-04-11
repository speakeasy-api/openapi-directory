import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { ReactionRollup } from "./reactionrollup";
import { SimpleUser } from "./simpleuser";
export declare class PullRequestReviewCommentLinksHtml extends SpeakeasyBase {
    href: string;
}
export declare class PullRequestReviewCommentLinksPullRequest extends SpeakeasyBase {
    href: string;
}
export declare class PullRequestReviewCommentLinksSelf extends SpeakeasyBase {
    href: string;
}
export declare class PullRequestReviewCommentLinks extends SpeakeasyBase {
    html: PullRequestReviewCommentLinksHtml;
    pullRequest: PullRequestReviewCommentLinksPullRequest;
    self: PullRequestReviewCommentLinksSelf;
}
/**
 * Pull Request Review Comments are comments on a portion of the Pull Request's diff.
 */
export declare class PullRequestReviewComment extends SpeakeasyBase {
    links: PullRequestReviewCommentLinks;
    /**
     * How the author is associated with the repository.
     */
    authorAssociation: AuthorAssociationEnum;
    /**
     * The text of the comment.
     */
    body: string;
    bodyHtml?: string;
    bodyText?: string;
    /**
     * The SHA of the commit to which the comment applies.
     */
    commitId: string;
    createdAt: Date;
    /**
     * The diff of the line that the comment refers to.
     */
    diffHunk: string;
    /**
     * HTML URL for the pull request review comment.
     */
    htmlUrl: string;
    /**
     * The ID of the pull request review comment.
     */
    id: number;
    /**
     * The comment ID to reply to.
     */
    inReplyToId?: number;
    /**
     * The node ID of the pull request review comment.
     */
    nodeId: string;
    /**
     * The SHA of the original commit to which the comment applies.
     */
    originalCommitId: string;
    /**
     * The index of the original line in the diff to which the comment applies.
     */
    originalPosition: number;
    /**
     * The relative path of the file to which the comment applies.
     */
    path: string;
    /**
     * The line index in the diff to which the comment applies.
     */
    position: number;
    /**
     * The ID of the pull request review to which the comment belongs.
     */
    pullRequestReviewId: number;
    /**
     * URL for the pull request that the review comment belongs to.
     */
    pullRequestUrl: string;
    reactions?: ReactionRollup;
    updatedAt: Date;
    /**
     * URL for the pull request review comment
     */
    url: string;
    /**
     * Simple User
     */
    user: SimpleUser;
}
