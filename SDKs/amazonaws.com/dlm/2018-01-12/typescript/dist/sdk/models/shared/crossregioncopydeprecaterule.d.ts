import { SpeakeasyBase } from "../../../internal/utils";
import { RetentionIntervalUnitValuesEnum } from "./retentionintervalunitvaluesenum";
/**
 *  <b>[AMI policies only]</b> Specifies an AMI deprecation rule for cross-Region AMI copies created by an AMI policy.
 */
export declare class CrossRegionCopyDeprecateRule extends SpeakeasyBase {
    interval?: number;
    intervalUnit?: RetentionIntervalUnitValuesEnum;
}
