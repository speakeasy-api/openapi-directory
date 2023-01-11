import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SnapshotScheduleList } from "./snapshotschedulelist";



export class DescribeSnapshotSchedulesOutputMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: SnapshotScheduleList })
  snapshotSchedules?: SnapshotScheduleList[];
}
