import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAddressesAttributeResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addresses?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
