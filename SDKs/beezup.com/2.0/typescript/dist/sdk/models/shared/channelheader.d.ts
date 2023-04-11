import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelHeaderLinks } from "./channelheaderlinks";
/**
 * The available channel
 */
export declare class ChannelHeader extends SpeakeasyBase {
    /**
     * The channel identifier
     */
    channelId: string;
    /**
     * The URL <a href="https://en.wikipedia.org/wiki/URL">https://en.wikipedia.org/wiki/URL</a>
     */
    channelLogoUrl: string;
    /**
     * The channel name
     */
    channelName: string;
    /**
     * The links related to an available channel
     */
    links: ChannelHeaderLinks;
    /**
     * The type list related to a channel
     */
    types: string[];
}
