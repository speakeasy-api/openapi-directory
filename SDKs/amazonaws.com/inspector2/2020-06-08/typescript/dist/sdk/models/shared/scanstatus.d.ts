import { SpeakeasyBase } from "../../../internal/utils";
import { ScanStatusCodeEnum } from "./scanstatuscodeenum";
import { ScanStatusReasonEnum } from "./scanstatusreasonenum";
/**
 * The status of the scan.
 */
export declare class ScanStatus extends SpeakeasyBase {
    reason: ScanStatusReasonEnum;
    statusCode: ScanStatusCodeEnum;
}
