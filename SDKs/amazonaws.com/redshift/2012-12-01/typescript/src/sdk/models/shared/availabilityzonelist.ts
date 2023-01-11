import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SupportedPlatformsList } from "./supportedplatformslist";



// AvailabilityZoneList
/** 
 * Describes an availability zone.
**/
export class AvailabilityZoneList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata({ elemType: SupportedPlatformsList })
  supportedPlatforms?: SupportedPlatformsList[];
}
