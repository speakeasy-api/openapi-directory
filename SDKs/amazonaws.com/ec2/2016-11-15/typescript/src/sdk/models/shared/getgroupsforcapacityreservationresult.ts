import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGroupsForCapacityReservationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  capacityReservationGroups?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
