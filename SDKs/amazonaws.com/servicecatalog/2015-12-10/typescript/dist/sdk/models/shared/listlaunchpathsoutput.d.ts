import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchPathSummary } from "./launchpathsummary";
/**
 * Success
 */
export declare class ListLaunchPathsOutput extends SpeakeasyBase {
    launchPathSummaries?: LaunchPathSummary[];
    nextPageToken?: string;
}
