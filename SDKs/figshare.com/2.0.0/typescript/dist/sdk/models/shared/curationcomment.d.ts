import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CurationCommentTypeEnum {
    Comment = "comment",
    Approved = "approved",
    Rejected = "rejected",
    Closed = "closed"
}
export declare class CurationComment extends SpeakeasyBase {
    accountId?: number;
    id?: number;
    text?: string;
    type?: CurationCommentTypeEnum;
}
