import { SpeakeasyBase } from "../../../internal/utils";
import { BatchPermissionsRequestEntry } from "./batchpermissionsrequestentry";
import { ErrorDetail } from "./errordetail";
/**
 * A list of failures when performing a batch grant or batch revoke operation.
 */
export declare class BatchPermissionsFailureEntry extends SpeakeasyBase {
    error?: ErrorDetail;
    requestEntry?: BatchPermissionsRequestEntry;
}
