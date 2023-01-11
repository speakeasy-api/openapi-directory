import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZoneList } from "./availabilityzonelist";



// OrderableDbInstanceOptionsList
/** 
 * The options that are available for an instance.
**/
export class OrderableDbInstanceOptionsList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AvailabilityZoneList })
  availabilityZones?: AvailabilityZoneList[];

  @SpeakeasyMetadata()
  dbInstanceClass?: string;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  licenseModel?: string;

  @SpeakeasyMetadata()
  vpc?: boolean;
}
