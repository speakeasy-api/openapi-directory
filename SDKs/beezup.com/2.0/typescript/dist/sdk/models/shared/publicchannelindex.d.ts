import { SpeakeasyBase } from "../../../internal/utils";
import { LinksGetChannelsIndexLink } from "./linksgetchannelsindexlink";
import { LinksGetChannelsLink } from "./linksgetchannelslink";
import { LinksGetPublicListOfValuesLink } from "./linksgetpubliclistofvalueslink";
export declare class PublicChannelIndexLinks extends SpeakeasyBase {
    channelCountryLov?: LinksGetPublicListOfValuesLink;
    channelTypeLov?: LinksGetPublicListOfValuesLink;
    sectorLov?: LinksGetPublicListOfValuesLink;
    self?: LinksGetChannelsIndexLink;
}
/**
 * Channel list regrouped by country and links to list of values
 */
export declare class PublicChannelIndex extends SpeakeasyBase {
    /**
     * The key is the country iso code
     */
    channels?: Record<string, LinksGetChannelsLink>;
    links?: PublicChannelIndexLinks;
}
