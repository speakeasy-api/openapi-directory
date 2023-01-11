import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Occupancy
/** 
 * An Occupancy instance indicating the occupancy of a channel. For events indicating regional activity of a channel this indicates activity in that region, not global activity.
**/
export class Occupancy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=presenceConnections" })
  presenceConnections?: number;

  @SpeakeasyMetadata({ data: "json, name=presenceMembers" })
  presenceMembers?: number;

  @SpeakeasyMetadata({ data: "json, name=presenceSubscribers" })
  presenceSubscribers?: number;

  @SpeakeasyMetadata({ data: "json, name=publishers" })
  publishers?: number;

  @SpeakeasyMetadata({ data: "json, name=subscribers" })
  subscribers?: number;
}
