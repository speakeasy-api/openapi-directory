import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZoneList } from "./availabilityzonelist";



// OrderableClusterOptionsList
/** 
 * Describes an orderable cluster option.
**/
export class OrderableClusterOptionsList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AvailabilityZoneList })
  availabilityZones?: AvailabilityZoneList[];

  @SpeakeasyMetadata()
  clusterType?: string;

  @SpeakeasyMetadata()
  clusterVersion?: string;

  @SpeakeasyMetadata()
  nodeType?: string;
}
