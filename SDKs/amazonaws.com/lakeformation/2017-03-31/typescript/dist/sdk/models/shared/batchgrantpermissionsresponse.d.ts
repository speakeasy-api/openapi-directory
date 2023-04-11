import { SpeakeasyBase } from "../../../internal/utils";
import { BatchPermissionsFailureEntry } from "./batchpermissionsfailureentry";
/**
 * Success
 */
export declare class BatchGrantPermissionsResponse extends SpeakeasyBase {
    failures?: BatchPermissionsFailureEntry[];
}
