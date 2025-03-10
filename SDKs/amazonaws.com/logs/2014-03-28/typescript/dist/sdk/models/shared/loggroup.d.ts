import { SpeakeasyBase } from "../../../internal/utils";
import { DataProtectionStatusEnum } from "./dataprotectionstatusenum";
/**
 * Represents a log group.
 */
export declare class LogGroup extends SpeakeasyBase {
    arn?: string;
    creationTime?: number;
    dataProtectionStatus?: DataProtectionStatusEnum;
    kmsKeyId?: string;
    logGroupName?: string;
    metricFilterCount?: number;
    /**
     * <p>The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, 2192, 2557, 2922, 3288, and 3653.</p> <p>To set a log group so that its log events do not expire, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html">DeleteRetentionPolicy</a>. </p>
     */
    retentionInDays?: number;
    storedBytes?: number;
}
