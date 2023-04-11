import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The ID of the account which generated this comment.
 */
export declare enum CurationCommentTypeEnum {
    Comment = "comment",
    Approved = "approved",
    Rejected = "rejected",
    Closed = "closed"
}
/**
 * OK. A curation review's comments.
 */
export declare class CurationComment extends SpeakeasyBase {
    /**
     * The ID of the account which generated this comment.
     */
    accountId: number;
    /**
     * The ID of the comment.
     */
    id: number;
    /**
     * The value/content of the comment.
     */
    text: string;
    /**
     * The ID of the account which generated this comment.
     */
    type: CurationCommentTypeEnum;
}
