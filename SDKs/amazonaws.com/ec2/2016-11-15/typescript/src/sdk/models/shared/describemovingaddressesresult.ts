import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeMovingAddressesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  movingAddressStatuses?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
