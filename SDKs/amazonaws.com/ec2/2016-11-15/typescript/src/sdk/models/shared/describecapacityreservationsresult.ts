import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeCapacityReservationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  capacityReservations?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
