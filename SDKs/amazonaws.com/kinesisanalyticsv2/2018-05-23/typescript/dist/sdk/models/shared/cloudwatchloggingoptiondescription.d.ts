import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the Amazon CloudWatch logging option.
 */
export declare class CloudWatchLoggingOptionDescription extends SpeakeasyBase {
    cloudWatchLoggingOptionId?: string;
    logStreamARN: string;
    roleARN?: string;
}
