import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Occupancy } from "./occupancy";



// ChannelStatus
/** 
 * A ChannelStatus instance.
**/
export class ChannelStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isActive" })
  isActive: boolean;

  @SpeakeasyMetadata({ data: "json, name=occupancy" })
  occupancy?: Occupancy;
}
