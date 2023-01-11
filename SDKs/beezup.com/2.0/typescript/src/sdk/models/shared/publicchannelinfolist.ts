import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksGetChannelsLink } from "./linksgetchannelslink";
import { PublicChannelInfo } from "./publicchannelinfo";



export class PublicChannelInfoListLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: LinksGetChannelsLink;
}


export class PublicChannelInfoList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channels", elemType: PublicChannelInfo })
  channels?: PublicChannelInfo[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: PublicChannelInfoListLinks;
}
