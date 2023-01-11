import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScheduleStateEnum } from "./schedulestateenum";



// AssociatedClusterList
/** 
 * <p/>
**/
export class AssociatedClusterList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterIdentifier?: string;

  @SpeakeasyMetadata()
  scheduleAssociationState?: ScheduleStateEnum;
}
