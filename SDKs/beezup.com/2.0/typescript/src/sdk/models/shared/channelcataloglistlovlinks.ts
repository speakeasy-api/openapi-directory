import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonLovLink3 } from "./beezupcommonlovlink3";



export class ChannelCatalogListLovLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelCatalogExclusionFilterOperatorLov" })
  channelCatalogExclusionFilterOperatorLov?: BeezUpCommonLovLink3;

  @SpeakeasyMetadata({ data: "json, name=channelCatalogExportCacheStatusLov" })
  channelCatalogExportCacheStatusLov?: BeezUpCommonLovLink3;
}
