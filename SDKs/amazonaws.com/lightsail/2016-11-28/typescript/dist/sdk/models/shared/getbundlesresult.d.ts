import { SpeakeasyBase } from "../../../internal/utils";
import { Bundle } from "./bundle";
/**
 * Success
 */
export declare class GetBundlesResult extends SpeakeasyBase {
    bundles?: Bundle[];
    nextPageToken?: string;
}
