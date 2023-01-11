import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChannelCatalogColumnMappingWithName
/** 
 * Represent a mapping between a channel column (considering channel category mapping) and a catalog column
**/
export class ChannelCatalogColumnMappingWithName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogBeezUPColumnName" })
  catalogBeezUPColumnName?: string;

  @SpeakeasyMetadata({ data: "json, name=catalogColumnId" })
  catalogColumnId?: string;

  @SpeakeasyMetadata({ data: "json, name=catalogColumnName" })
  catalogColumnName?: string;

  @SpeakeasyMetadata({ data: "json, name=channelBeezUPColumnName" })
  channelBeezUPColumnName?: string;

  @SpeakeasyMetadata({ data: "json, name=channelCategoryPath" })
  channelCategoryPath?: string[];

  @SpeakeasyMetadata({ data: "json, name=channelColumnId" })
  channelColumnId: string;

  @SpeakeasyMetadata({ data: "json, name=channelColumnName" })
  channelColumnName: string;
}
