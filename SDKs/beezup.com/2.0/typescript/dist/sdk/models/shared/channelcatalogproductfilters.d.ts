import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonAdditionalProductFiltersValue } from "./beezupcommonadditionalproductfiltersvalue";
export declare class ChannelCatalogProductFilters extends SpeakeasyBase {
    /**
     * Describe a filter on a product's column.
     *
     * @remarks
     * The key is the column identifier of your catalog or a custom column.
     *
     */
    additionalProductFilters?: Record<string, BeezUPCommonAdditionalProductFiltersValue>;
    /**
     * The catalog product EAN filter (multiple values)
     */
    catalogEans?: string[];
    /**
     * The catalog product MPN filter (multiple values)
     */
    catalogMpns?: string[];
    /**
     * The catalog product SKU filter (multiple values)
     */
    catalogSkus?: string[];
    /**
     * The channel product EAN filter (multiple values)
     */
    channelEans?: string[];
    /**
     * The channel product MPN filter (multiple values)
     */
    channelMpns?: string[];
    /**
     * The channel product SKU filter (multiple values)
     */
    channelSkus?: string[];
    /**
     * The product title filter
     */
    title?: string;
}
