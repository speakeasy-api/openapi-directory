import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLoggingOptionDescription } from "./cloudwatchloggingoptiondescription";
/**
 * Success
 */
export declare class DeleteApplicationCloudWatchLoggingOptionResponse extends SpeakeasyBase {
    applicationARN?: string;
    applicationVersionId?: number;
    cloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];
}
