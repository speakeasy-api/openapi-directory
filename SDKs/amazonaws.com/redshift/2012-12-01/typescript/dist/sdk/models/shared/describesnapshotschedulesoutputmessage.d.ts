import { SpeakeasyBase } from "../../../internal/utils";
import { SnapshotScheduleList } from "./snapshotschedulelist";
export declare class DescribeSnapshotSchedulesOutputMessage extends SpeakeasyBase {
    marker?: string;
    snapshotSchedules?: SnapshotScheduleList[];
}
