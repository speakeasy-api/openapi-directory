import { SpeakeasyBase } from "../../../internal/utils";
import { RetentionIntervalUnitValuesEnum } from "./retentionintervalunitvaluesenum";
/**
 * <p> <b>[AMI policies only]</b> Specifies an AMI deprecation rule for AMIs created by an AMI lifecycle policy.</p> <p>For age-based schedules, you must specify <b>Interval</b> and <b>IntervalUnit</b>. For count-based schedules, you must specify <b>Count</b>.</p>
 */
export declare class DeprecateRule extends SpeakeasyBase {
    count?: number;
    interval?: number;
    intervalUnit?: RetentionIntervalUnitValuesEnum;
}
