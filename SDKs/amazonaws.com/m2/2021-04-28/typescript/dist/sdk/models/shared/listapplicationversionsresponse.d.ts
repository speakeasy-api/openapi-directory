import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationVersionSummary } from "./applicationversionsummary";
/**
 * Success
 */
export declare class ListApplicationVersionsResponse extends SpeakeasyBase {
    applicationVersions: ApplicationVersionSummary[];
    nextToken?: string;
}
