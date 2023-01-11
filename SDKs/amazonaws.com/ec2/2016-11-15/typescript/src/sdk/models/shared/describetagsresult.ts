import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeTagsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;
}
