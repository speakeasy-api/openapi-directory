import { SpeakeasyBase } from "../../../internal/utils";
import { RetentionIntervalUnitValuesEnum } from "./retentionintervalunitvaluesenum";
/**
 * <p> <b>[Snapshot and AMI policies only]</b> Specifies a retention rule for snapshots created by snapshot policies, or for AMIs created by AMI policies.</p> <note> <p>For snapshot policies that have an <a>ArchiveRule</a>, this retention rule applies to standard tier retention. When the retention threshold is met, snapshots are moved from the standard to the archive tier.</p> <p>For snapshot policies that do not have an <b>ArchiveRule</b>, snapshots are permanently deleted when this retention threshold is met.</p> </note> <p>You can retain snapshots based on either a count or a time interval.</p> <ul> <li> <p> <b>Count-based retention</b> </p> <p>You must specify <b>Count</b>. If you specify an <a>ArchiveRule</a> for the schedule, then you can specify a retention count of <code>0</code> to archive snapshots immediately after creation. If you specify a <a>FastRestoreRule</a>, <a>ShareRule</a>, or a <a>CrossRegionCopyRule</a>, then you must specify a retention count of <code>1</code> or more.</p> </li> <li> <p> <b>Age-based retention</b> </p> <p>You must specify <b>Interval</b> and <b>IntervalUnit</b>. If you specify an <a>ArchiveRule</a> for the schedule, then you can specify a retention interval of <code>0</code> days to archive snapshots immediately after creation. If you specify a <a>FastRestoreRule</a>, <a>ShareRule</a>, or a <a>CrossRegionCopyRule</a>, then you must specify a retention interval of <code>1</code> day or more.</p> </li> </ul>
 */
export declare class RetainRule extends SpeakeasyBase {
    count?: number;
    interval?: number;
    intervalUnit?: RetentionIntervalUnitValuesEnum;
}
