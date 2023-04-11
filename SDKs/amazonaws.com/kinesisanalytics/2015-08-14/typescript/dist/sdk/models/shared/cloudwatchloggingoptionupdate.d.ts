import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes CloudWatch logging option updates.
 */
export declare class CloudWatchLoggingOptionUpdate extends SpeakeasyBase {
    cloudWatchLoggingOptionId: string;
    logStreamARNUpdate?: string;
    roleARNUpdate?: string;
}
