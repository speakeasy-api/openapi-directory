import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The channel catalog products counters. For each counter you will have a count.
 */
export declare class ChannelCatalogProductsCounters extends SpeakeasyBase {
    /**
     * Disabled product count EXCLUDING uncategorized products on existing products.
     */
    disabledProductCountExcludingUncategorized?: number;
    /**
     * Disabled product count INCLUDING uncategorized products on existing products.
     */
    disabledProductCountIncludingUncategorized?: number;
    /**
     * Excluded product count EXCLUDING uncategorized products AND disabled products on existing products.
     */
    excludedProductCountExcludingUncategorizedAndDisabled?: number;
    /**
     * Excluded product count INCLUDING uncategorized products AND disabled products on existing products.
     */
    excludedProductCountIncludingUncategorizedAndDisabled?: number;
    /**
     * Imported product count currently in your catalog.
     */
    existingProductCount?: number;
    /**
     * Product count WITHOUT category mapped on existing products.
     */
    uncategorizedProductCount?: number;
}
