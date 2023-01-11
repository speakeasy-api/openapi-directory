import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represent a mapping between a catalog category path and a channel category path.
 * The cost on this mapping can be applied.
 *
**/
export declare class ChannelCatalogCategoryConfiguration extends SpeakeasyBase {
    autoMapNewSubCategories: boolean;
    catalogCategoryPath: string[];
    channelCategoryPath?: string[];
    costValue?: number;
}
