import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonApiSettingsStatusEnum } from "./beezupcommonapisettingsstatusenum";
import { CategoryMappingState } from "./categorymappingstate";
import { ColumnMappingStatusEnum } from "./columnmappingstatusenum";
/**
 * Channel Catalog State
**/
export declare class ChannelCatalogState extends SpeakeasyBase {
    apiSettingsStatus?: BeezUpCommonApiSettingsStatusEnum;
    categoryMappingState: CategoryMappingState;
    columnMappingStatus: ColumnMappingStatusEnum;
    exportedProductCount: number;
}
