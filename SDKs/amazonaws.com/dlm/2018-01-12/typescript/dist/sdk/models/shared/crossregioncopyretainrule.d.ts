import { SpeakeasyBase } from "../../../internal/utils";
import { RetentionIntervalUnitValuesEnum } from "./retentionintervalunitvaluesenum";
/**
 * Specifies a retention rule for cross-Region snapshot copies created by snapshot or event-based policies, or cross-Region AMI copies created by AMI policies. After the retention period expires, the cross-Region copy is deleted.
 */
export declare class CrossRegionCopyRetainRule extends SpeakeasyBase {
    interval?: number;
    intervalUnit?: RetentionIntervalUnitValuesEnum;
}
