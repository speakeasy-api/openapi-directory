import { SpeakeasyBase } from "../../../internal/utils";
import { SnapshotScheduleList } from "./snapshotschedulelist";
/**
 * Success
 */
export declare class DescribeSnapshotSchedulesOutputMessage extends SpeakeasyBase {
    marker?: string;
    snapshotSchedules?: SnapshotScheduleList[];
}
