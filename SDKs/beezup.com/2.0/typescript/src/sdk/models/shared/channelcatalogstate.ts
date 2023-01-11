import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonApiSettingsStatusEnum } from "./beezupcommonapisettingsstatusenum";
import { CategoryMappingState } from "./categorymappingstate";
import { ColumnMappingStatusEnum } from "./columnmappingstatusenum";



// ChannelCatalogState
/** 
 * Channel Catalog State
**/
export class ChannelCatalogState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiSettingsStatus" })
  apiSettingsStatus?: BeezUpCommonApiSettingsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=categoryMappingState" })
  categoryMappingState: CategoryMappingState;

  @SpeakeasyMetadata({ data: "json, name=columnMappingStatus" })
  columnMappingStatus: ColumnMappingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=exportedProductCount" })
  exportedProductCount: number;
}
