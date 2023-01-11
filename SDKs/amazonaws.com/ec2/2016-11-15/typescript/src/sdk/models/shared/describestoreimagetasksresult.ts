import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeStoreImageTasksResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  storeImageTaskResults?: Record<string, any>;
}
