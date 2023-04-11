import { SpeakeasyBase } from "../../../internal/utils";
export declare class Quota extends SpeakeasyBase {
    /**
     * Total number of bytes that can be transferred per month.
     */
    bandwidthLimit?: number;
    /**
     * Number of bytes transferred this month.
     */
    bandwidthUsed?: number;
    /**
     * Amount of disk space that the account has available to it. This may be increased by upgrading to a larger plan.
     */
    diskLimit?: number;
    /**
     * Amount of disk space currently in use.
     */
    diskUsed?: number;
    /**
     * Should a quota warning be sent to the account owner when a threshold level of space utilization is reached?
     */
    noticeEnabled?: boolean;
    /**
     * Treshold that triggers a quota notification. This represents the "percent full" your account must be before the quota notification is generated.
     */
    noticeThreshold?: number;
    /**
     * Total number of transactions allowed in a 24-hour period.
     */
    transactionsLimit?: number;
    /**
     * Whether an email should be sent to the account owner up to once per day if transaction usage exceeds `transactionsNoticeThreshold` value.
     */
    transactionsNoticeEnabled?: boolean;
    /**
     * Percent of daily transactions limit that will trigger an email if activity exceeds it.
     */
    transactionsNoticeThreshold?: number;
}
