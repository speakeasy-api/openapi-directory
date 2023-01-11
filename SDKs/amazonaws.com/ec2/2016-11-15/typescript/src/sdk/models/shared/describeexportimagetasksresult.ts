import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeExportImageTasksResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  exportImageTasks?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
