import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAccountAttributesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountAttributes?: Record<string, any>;
}
