import { SpeakeasyBase } from "../../../internal/utils";
import { Launch } from "./launch";
/**
 * Success
 */
export declare class ListLaunchesResponse extends SpeakeasyBase {
    launches?: Launch[];
    nextToken?: string;
}
