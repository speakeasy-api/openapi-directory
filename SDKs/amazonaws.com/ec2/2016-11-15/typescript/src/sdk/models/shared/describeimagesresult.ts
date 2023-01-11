import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeImagesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  images?: Record<string, any>;
}
