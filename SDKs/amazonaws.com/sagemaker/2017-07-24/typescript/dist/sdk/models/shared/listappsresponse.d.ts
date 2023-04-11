import { SpeakeasyBase } from "../../../internal/utils";
import { AppDetails } from "./appdetails";
/**
 * Success
 */
export declare class ListAppsResponse extends SpeakeasyBase {
    apps?: AppDetails[];
    nextToken?: string;
}
