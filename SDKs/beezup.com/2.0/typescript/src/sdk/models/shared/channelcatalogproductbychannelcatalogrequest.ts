import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChannelCatalogProductByChannelCatalogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelCatalogIds" })
  channelCatalogIds: string[];

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId: string;

  @SpeakeasyMetadata({ data: "json, name=storeId" })
  storeId: string;
}
