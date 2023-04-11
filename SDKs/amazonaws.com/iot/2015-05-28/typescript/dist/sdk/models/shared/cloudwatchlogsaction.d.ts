import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an action that sends data to CloudWatch Logs.
 */
export declare class CloudwatchLogsAction extends SpeakeasyBase {
    batchMode?: boolean;
    logGroupName: string;
    roleArn: string;
}
