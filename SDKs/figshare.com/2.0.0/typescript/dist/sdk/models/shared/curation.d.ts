import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CurationStatusEnum {
    Pending = "pending",
    Approved = "approved",
    Rejected = "rejected",
    Closed = "closed"
}
export declare class Curation extends SpeakeasyBase {
    accountId?: number;
    articleId?: number;
    assignedTo?: number;
    commentsCount?: number;
    createdDate?: string;
    groupId?: number;
    id?: number;
    modifiedDate?: string;
    reviewDate?: string;
    status?: CurationStatusEnum;
    version?: number;
}
