import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeHostReservationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  hostReservationSet?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
