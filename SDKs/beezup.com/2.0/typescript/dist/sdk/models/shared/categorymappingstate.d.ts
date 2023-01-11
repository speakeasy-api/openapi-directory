import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryMappingStatusEnum } from "./categorymappingstatusenum";
/**
 * The category mapping state of the channel catalog
**/
export declare class CategoryMappingState extends SpeakeasyBase {
    status?: CategoryMappingStatusEnum;
    uncategorizedProductCount?: number;
    withoutCategoryCostProductCount?: number;
}
