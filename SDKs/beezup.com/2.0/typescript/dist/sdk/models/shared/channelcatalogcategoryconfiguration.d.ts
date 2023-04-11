import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represent a mapping between a catalog category path and a channel category path.
 *
 * @remarks
 * The cost on this mapping can be applied.
 *
 */
export declare class ChannelCatalogCategoryConfiguration extends SpeakeasyBase {
    /**
     * Great feature! In case of mapping to parent catalog category, you can ask to automatically map new sub catalog category in the next importation to this channel category path.
     */
    autoMapNewSubCategories: boolean;
    /**
     * The catalog category path
     */
    catalogCategoryPath: string[];
    /**
     * The channel category path
     */
    channelCategoryPath?: string[];
    /**
     * In case of CPC_ByCategory or CPA_ByCategory cost type, you have to indicate the cost value.
     */
    costValue?: number;
}
