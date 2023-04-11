import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  A configuration for CloudWatch monitoring. You can configure your jobs to send log information to CloudWatch Logs. This data type allows job template parameters to be specified within.
 */
export declare class ParametricCloudWatchMonitoringConfiguration extends SpeakeasyBase {
    logGroupName?: string;
    logStreamNamePrefix?: string;
}
