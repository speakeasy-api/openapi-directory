import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SupportedOperationList } from "./supportedoperationlist";



// EligibleTracksToUpdateList
/** 
 * A maintenance track that you can switch the current track to.
**/
export class EligibleTracksToUpdateList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  databaseVersion?: string;

  @SpeakeasyMetadata()
  maintenanceTrackName?: string;

  @SpeakeasyMetadata({ elemType: SupportedOperationList })
  supportedOperations?: SupportedOperationList[];
}
