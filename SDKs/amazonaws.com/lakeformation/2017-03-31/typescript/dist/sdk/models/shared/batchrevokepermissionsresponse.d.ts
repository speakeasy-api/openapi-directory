import { SpeakeasyBase } from "../../../internal/utils";
import { BatchPermissionsFailureEntry } from "./batchpermissionsfailureentry";
/**
 * Success
 */
export declare class BatchRevokePermissionsResponse extends SpeakeasyBase {
    failures?: BatchPermissionsFailureEntry[];
}
