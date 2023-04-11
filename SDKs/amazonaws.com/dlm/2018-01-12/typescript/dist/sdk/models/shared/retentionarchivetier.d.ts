import { SpeakeasyBase } from "../../../internal/utils";
import { RetentionIntervalUnitValuesEnum } from "./retentionintervalunitvaluesenum";
/**
 * <p> <b>[Snapshot policies only]</b> Describes the retention rule for archived snapshots. Once the archive retention threshold is met, the snapshots are permanently deleted from the archive tier.</p> <note> <p>The archive retention rule must retain snapshots in the archive tier for a minimum of 90 days.</p> </note> <p>For <b>count-based schedules</b>, you must specify <b>Count</b>. For <b>age-based schedules</b>, you must specify <b>Interval</b> and <b> IntervalUnit</b>.</p> <p>For more information about using snapshot archiving, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-ami-policy.html#dlm-archive">Considerations for snapshot lifecycle policies</a>.</p>
 */
export declare class RetentionArchiveTier extends SpeakeasyBase {
    count?: number;
    interval?: number;
    intervalUnit?: RetentionIntervalUnitValuesEnum;
}
