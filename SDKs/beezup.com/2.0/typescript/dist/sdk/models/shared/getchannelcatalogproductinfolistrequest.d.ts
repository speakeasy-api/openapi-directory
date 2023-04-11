import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonCatalogCategoryFilter } from "./beezupcommoncatalogcategoryfilter";
import { BeezUPCommonChannelCategoryFilter } from "./beezupcommonchannelcategoryfilter";
import { ChannelCatalogProductFilters } from "./channelcatalogproductfilters";
import { ProductSetVisibilityCriteria } from "./productsetvisibilitycriteria";
/**
 * The channel catalog product list filter
 */
export declare class GetChannelCatalogProductInfoListRequest extends SpeakeasyBase {
    catalogCategoryFilter?: BeezUPCommonCatalogCategoryFilter;
    channelCategoryFilter?: BeezUPCommonChannelCategoryFilter;
    criteria: ProductSetVisibilityCriteria;
    /**
     * Search overridden products. If null the filter will not be taken in account.
     */
    overridden?: boolean;
    pageNumber: number;
    pageSize: number;
    productFilters?: ChannelCatalogProductFilters;
}
