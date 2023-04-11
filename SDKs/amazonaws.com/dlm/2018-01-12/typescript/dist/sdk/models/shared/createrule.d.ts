import { SpeakeasyBase } from "../../../internal/utils";
import { IntervalUnitValuesEnum } from "./intervalunitvaluesenum";
import { LocationValuesEnum } from "./locationvaluesenum";
/**
 * <p> <b>[Snapshot and AMI policies only]</b> Specifies when the policy should create snapshots or AMIs.</p> <note> <ul> <li> <p>You must specify either <b>CronExpression</b>, or <b>Interval</b>, <b>IntervalUnit</b>, and <b>Times</b>.</p> </li> <li> <p>If you need to specify an <a>ArchiveRule</a> for the schedule, then you must specify a creation frequency of at least 28 days.</p> </li> </ul> </note>
 */
export declare class CreateRule extends SpeakeasyBase {
    cronExpression?: string;
    interval?: number;
    intervalUnit?: IntervalUnitValuesEnum;
    location?: LocationValuesEnum;
    times?: string[];
}
