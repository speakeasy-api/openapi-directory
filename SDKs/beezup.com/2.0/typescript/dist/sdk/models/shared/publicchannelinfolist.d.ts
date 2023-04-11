import { SpeakeasyBase } from "../../../internal/utils";
import { LinksGetChannelsLink } from "./linksgetchannelslink";
import { PublicChannelInfo } from "./publicchannelinfo";
export declare class PublicChannelInfoListLinks extends SpeakeasyBase {
    self?: LinksGetChannelsLink;
}
/**
 * The channel list for one country
 */
export declare class PublicChannelInfoList extends SpeakeasyBase {
    channels?: PublicChannelInfo[];
    links?: PublicChannelInfoListLinks;
}
