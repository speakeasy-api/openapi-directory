import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SupportedPlatformsList } from "./supportedplatformslist";



// AvailabilityZone
/** 
 * Describes an availability zone.
**/
export class AvailabilityZone extends SpeakeasyBase {
  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata({ elemType: SupportedPlatformsList })
  supportedPlatforms?: SupportedPlatformsList[];
}
