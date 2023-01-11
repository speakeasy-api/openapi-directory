import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BeezUpCommonChannelBasicInfo
/** 
 * The basic info related to a channel
**/
export class BeezUpCommonChannelBasicInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId: string;

  @SpeakeasyMetadata({ data: "json, name=channelImageUrl" })
  channelImageUrl: string;

  @SpeakeasyMetadata({ data: "json, name=channelName" })
  channelName: string;
}
