import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChannelCatalogColumnMapping
/** 
 * Represent a mapping between a channel column (considering channel category mapping) and a catalog column
**/
export class ChannelCatalogColumnMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogColumnId" })
  catalogColumnId?: string;

  @SpeakeasyMetadata({ data: "json, name=channelCategoryPath" })
  channelCategoryPath?: string[];

  @SpeakeasyMetadata({ data: "json, name=channelColumnId" })
  channelColumnId: string;
}
