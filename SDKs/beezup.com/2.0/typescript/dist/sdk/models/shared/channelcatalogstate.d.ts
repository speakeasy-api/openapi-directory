import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonApiSettingsStatusEnum } from "./beezupcommonapisettingsstatusenum";
import { CategoryMappingState } from "./categorymappingstate";
import { ColumnMappingStatusEnum } from "./columnmappingstatusenum";
/**
 * Channel Catalog State
 */
export declare class ChannelCatalogState extends SpeakeasyBase {
    apiSettingsStatus?: BeezUPCommonApiSettingsStatusEnum;
    /**
     * The category mapping state of the channel catalog
     */
    categoryMappingState: CategoryMappingState;
    columnMappingStatus: ColumnMappingStatusEnum;
    exportedProductCount: number;
}
