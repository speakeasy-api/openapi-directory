import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelHeaderLinks } from "./channelheaderlinks";



// ChannelHeader
/** 
 * The available channel
**/
export class ChannelHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId: string;

  @SpeakeasyMetadata({ data: "json, name=channelLogoUrl" })
  channelLogoUrl: string;

  @SpeakeasyMetadata({ data: "json, name=channelName" })
  channelName: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ChannelHeaderLinks;

  @SpeakeasyMetadata({ data: "json, name=types" })
  types: string[];
}
