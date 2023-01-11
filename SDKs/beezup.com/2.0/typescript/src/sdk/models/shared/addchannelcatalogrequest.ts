import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddChannelCatalogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId: string;

  @SpeakeasyMetadata({ data: "json, name=storeId" })
  storeId: string;
}
