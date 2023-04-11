import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A subset of the attributes that describe a log group. In CloudWatch a log group is a group of log streams that share the same retention, monitoring, and access control settings.
 */
export declare class LogGroupSummary extends SpeakeasyBase {
    logGroupName: string;
    logType: string;
}
