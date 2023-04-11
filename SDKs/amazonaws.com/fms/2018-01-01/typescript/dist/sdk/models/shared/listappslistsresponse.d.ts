import { SpeakeasyBase } from "../../../internal/utils";
import { AppsListDataSummary } from "./appslistdatasummary";
/**
 * Success
 */
export declare class ListAppsListsResponse extends SpeakeasyBase {
    appsLists?: AppsListDataSummary[];
    nextToken?: string;
}
