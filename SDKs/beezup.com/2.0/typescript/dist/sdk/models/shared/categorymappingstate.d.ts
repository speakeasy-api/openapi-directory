import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryMappingStatusEnum } from "./categorymappingstatusenum";
/**
 * The category mapping state of the channel catalog
 */
export declare class CategoryMappingState extends SpeakeasyBase {
    status?: CategoryMappingStatusEnum;
    /**
     * Indicates the uncategorized product count
     */
    uncategorizedProductCount?: number;
    /**
     * Indicates the count of products without cost defined
     */
    withoutCategoryCostProductCount?: number;
}
