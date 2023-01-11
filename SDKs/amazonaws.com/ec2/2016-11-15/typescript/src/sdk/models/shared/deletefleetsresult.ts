import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteFleetsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  successfulFleetDeletions?: Record<string, any>;

  @SpeakeasyMetadata()
  unsuccessfulFleetDeletions?: Record<string, any>;
}
