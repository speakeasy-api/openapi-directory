import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeImportImageTasksResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  importImageTasks?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
