import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonAdditionalProductFiltersValue } from "./beezupcommonadditionalproductfiltersvalue";
export declare class ChannelCatalogProductFilters extends SpeakeasyBase {
    additionalProductFilters?: Record<string, BeezUpCommonAdditionalProductFiltersValue>;
    catalogEans?: string[];
    catalogMpns?: string[];
    catalogSkus?: string[];
    channelEans?: string[];
    channelMpns?: string[];
    channelSkus?: string[];
    title?: string;
}
