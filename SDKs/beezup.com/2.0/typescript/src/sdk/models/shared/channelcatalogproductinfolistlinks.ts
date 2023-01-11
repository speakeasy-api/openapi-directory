import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksExportChannelCatalogProductInfoListLink } from "./linksexportchannelcatalogproductinfolistlink";
import { LinksGetChannelCatalogProductInfoListLink } from "./linksgetchannelcatalogproductinfolistlink";



export class ChannelCatalogProductInfoListLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=export" })
  export?: LinksExportChannelCatalogProductInfoListLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetChannelCatalogProductInfoListLink;
}
