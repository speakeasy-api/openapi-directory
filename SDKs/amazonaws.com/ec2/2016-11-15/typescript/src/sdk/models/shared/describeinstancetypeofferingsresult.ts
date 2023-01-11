import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeInstanceTypeOfferingsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceTypeOfferings?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
