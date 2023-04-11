import { SpeakeasyBase } from "../../../internal/utils";
import { AppVersionSummary } from "./appversionsummary";
/**
 * Success
 */
export declare class ListAppVersionsResponse extends SpeakeasyBase {
    appVersions: AppVersionSummary[];
    nextToken?: string;
}
