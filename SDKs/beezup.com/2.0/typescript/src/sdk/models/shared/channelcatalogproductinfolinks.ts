import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksDisableChannelCatalogProductLink } from "./linksdisablechannelcatalogproductlink";
import { LinksOverrideChannelCatalogProductValuesLink } from "./linksoverridechannelcatalogproductvalueslink";
import { LinksReenableChannelCatalogProductLink } from "./linksreenablechannelcatalogproductlink";
import { LinksGetChannelCatalogProductInfoLink } from "./linksgetchannelcatalogproductinfolink";



// ChannelCatalogProductInfoLinks
/** 
 * Indicates the differents actions you can do on a channel product
**/
export class ChannelCatalogProductInfoLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disable" })
  disable?: LinksDisableChannelCatalogProductLink;

  @SpeakeasyMetadata({ data: "json, name=override" })
  override: LinksOverrideChannelCatalogProductValuesLink;

  @SpeakeasyMetadata({ data: "json, name=reenable" })
  reenable?: LinksReenableChannelCatalogProductLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetChannelCatalogProductInfoLink;
}
