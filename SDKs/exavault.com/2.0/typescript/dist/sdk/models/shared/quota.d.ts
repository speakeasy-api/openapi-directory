import { SpeakeasyBase } from "../../../internal/utils";
export declare class Quota extends SpeakeasyBase {
    bandwidthLimit?: number;
    bandwidthUsed?: number;
    diskLimit?: number;
    diskUsed?: number;
    noticeEnabled?: boolean;
    noticeThreshold?: number;
    transactionsLimit?: number;
    transactionsNoticeEnabled?: boolean;
    transactionsNoticeThreshold?: number;
}
