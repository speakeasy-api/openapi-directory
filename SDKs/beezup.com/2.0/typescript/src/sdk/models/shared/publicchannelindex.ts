import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksGetPublicListOfValuesLink } from "./linksgetpubliclistofvalueslink";
import { LinksGetChannelsIndexLink } from "./linksgetchannelsindexlink";
import { LinksGetChannelsLink } from "./linksgetchannelslink";



export class PublicChannelIndexLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelCountryLov" })
  channelCountryLov?: LinksGetPublicListOfValuesLink;

  @SpeakeasyMetadata({ data: "json, name=channelTypeLov" })
  channelTypeLov?: LinksGetPublicListOfValuesLink;

  @SpeakeasyMetadata({ data: "json, name=sectorLov" })
  sectorLov?: LinksGetPublicListOfValuesLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: LinksGetChannelsIndexLink;
}


export class PublicChannelIndex extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channels", elemType: LinksGetChannelsLink })
  channels?: Record<string, LinksGetChannelsLink>;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: PublicChannelIndexLinks;
}
