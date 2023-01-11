import { SpeakeasyBase } from "../../../internal/utils";
import { LinksGetPublicListOfValuesLink } from "./linksgetpubliclistofvalueslink";
import { LinksGetChannelsIndexLink } from "./linksgetchannelsindexlink";
import { LinksGetChannelsLink } from "./linksgetchannelslink";
export declare class PublicChannelIndexLinks extends SpeakeasyBase {
    channelCountryLov?: LinksGetPublicListOfValuesLink;
    channelTypeLov?: LinksGetPublicListOfValuesLink;
    sectorLov?: LinksGetPublicListOfValuesLink;
    self?: LinksGetChannelsIndexLink;
}
export declare class PublicChannelIndex extends SpeakeasyBase {
    channels?: Record<string, LinksGetChannelsLink>;
    links?: PublicChannelIndexLinks;
}
