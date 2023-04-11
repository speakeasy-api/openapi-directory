import { SpeakeasyBase } from "../../../internal/utils";
import { PlatformSummary } from "./platformsummary";
/**
 * Success
 */
export declare class ListPlatformVersionsResult extends SpeakeasyBase {
    nextToken?: string;
    platformSummaryList?: PlatformSummary[];
}
