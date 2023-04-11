import { SpeakeasyBase } from "../../../internal/utils";
import { ArticleComplete } from "./articlecomplete";
/**
 * The status of the review.
 */
export declare enum CurationDetailStatusEnum {
    Pending = "pending",
    Approved = "approved",
    Rejected = "rejected",
    Closed = "closed"
}
/**
 * OK. A curation review.
 */
export declare class CurationDetail extends SpeakeasyBase {
    /**
     * The ID of the account of the owner of the article of this review.
     */
    accountId: number;
    /**
     * The ID of the article of this review.
     */
    articleId: number;
    /**
     * The ID of the account to which this review is assigned.
     */
    assignedTo: number;
    /**
     * The number of comments in the review.
     */
    commentsCount: number;
    /**
     * The creation date of the review.
     */
    createdDate: string;
    /**
     * The group in which the article is present.
     */
    groupId: number;
    /**
     * The review id
     */
    id: number;
    item: ArticleComplete;
    /**
     * The date the review has been modified.
     */
    modifiedDate: string;
    /**
     * The last time a comment has been added to the review.
     */
    reviewDate: string;
    /**
     * The status of the review.
     */
    status: CurationDetailStatusEnum;
    /**
     * The Version number of the article in review.
     */
    version: number;
}
