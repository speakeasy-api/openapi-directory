import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { Link } from "./link";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { ReactionRollup } from "./reactionrollup";
export declare class ReviewCommentLinks extends SpeakeasyBase {
    /**
     * Hypermedia Link
     */
    html: Link;
    /**
     * Hypermedia Link
     */
    pullRequest: Link;
    /**
     * Hypermedia Link
     */
    self: Link;
}
/**
 * The side of the first line of the range for a multi-line comment.
 */
export declare enum ReviewCommentSideEnum {
    Left = "LEFT",
    Right = "RIGHT"
}
/**
 * The side of the first line of the range for a multi-line comment.
 */
export declare enum ReviewCommentStartSideEnum {
    Left = "LEFT",
    Right = "RIGHT"
}
/**
 * Legacy Review Comment
 */
export declare class ReviewComment extends SpeakeasyBase {
    links: ReviewCommentLinks;
    /**
     * How the author is associated with the repository.
     */
    authorAssociation: AuthorAssociationEnum;
    body: string;
    bodyHtml?: string;
    bodyText?: string;
    commitId: string;
    createdAt: Date;
    diffHunk: string;
    htmlUrl: string;
    id: number;
    inReplyToId?: number;
    /**
     * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
     */
    line?: number;
    nodeId: string;
    originalCommitId: string;
    /**
     * The original line of the blob to which the comment applies. The last line of the range for a multi-line comment
     */
    originalLine?: number;
    originalPosition: number;
    /**
     * The original first line of the range for a multi-line comment.
     */
    originalStartLine?: number;
    path: string;
    position: number;
    pullRequestReviewId: number;
    pullRequestUrl: string;
    reactions?: ReactionRollup;
    /**
     * The side of the first line of the range for a multi-line comment.
     */
    side?: ReviewCommentSideEnum;
    /**
     * The first line of the range for a multi-line comment.
     */
    startLine?: number;
    /**
     * The side of the first line of the range for a multi-line comment.
     */
    startSide?: ReviewCommentStartSideEnum;
    updatedAt: Date;
    url: string;
    /**
     * Simple User
     */
    user: NullableSimpleUser;
}
