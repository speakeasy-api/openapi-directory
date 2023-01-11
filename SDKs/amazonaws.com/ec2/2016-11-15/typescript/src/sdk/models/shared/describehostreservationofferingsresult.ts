import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeHostReservationOfferingsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  offeringSet?: Record<string, any>;
}
