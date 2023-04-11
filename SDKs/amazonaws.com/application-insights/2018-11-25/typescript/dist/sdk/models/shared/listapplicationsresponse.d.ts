import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationInfo } from "./applicationinfo";
/**
 * Success
 */
export declare class ListApplicationsResponse extends SpeakeasyBase {
    applicationInfoList?: ApplicationInfo[];
    nextToken?: string;
}
