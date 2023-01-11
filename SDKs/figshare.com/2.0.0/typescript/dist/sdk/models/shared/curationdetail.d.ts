import { SpeakeasyBase } from "../../../internal/utils";
import { ArticleComplete } from "./articlecomplete";
export declare enum CurationDetailStatusEnum {
    Pending = "pending",
    Approved = "approved",
    Rejected = "rejected",
    Closed = "closed"
}
export declare class CurationDetail extends SpeakeasyBase {
    accountId?: number;
    articleId?: number;
    assignedTo?: number;
    commentsCount?: number;
    createdDate?: string;
    groupId?: number;
    id?: number;
    item?: ArticleComplete;
    modifiedDate?: string;
    reviewDate?: string;
    status?: CurationDetailStatusEnum;
    version?: number;
}
