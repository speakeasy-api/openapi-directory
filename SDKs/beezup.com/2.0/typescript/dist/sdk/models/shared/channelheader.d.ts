import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelHeaderLinks } from "./channelheaderlinks";
/**
 * The available channel
**/
export declare class ChannelHeader extends SpeakeasyBase {
    channelId: string;
    channelLogoUrl: string;
    channelName: string;
    links: ChannelHeaderLinks;
    types: string[];
}
