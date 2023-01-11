import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeImportSnapshotTasksResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  importSnapshotTasks?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
