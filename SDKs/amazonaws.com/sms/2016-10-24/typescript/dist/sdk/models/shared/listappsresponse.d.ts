import { SpeakeasyBase } from "../../../internal/utils";
import { AppSummary } from "./appsummary";
/**
 * Success
 */
export declare class ListAppsResponse extends SpeakeasyBase {
    apps?: AppSummary[];
    nextToken?: string;
}
