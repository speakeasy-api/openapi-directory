import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonCatalogCategoryFilter } from "./beezupcommoncatalogcategoryfilter";
import { BeezUpCommonChannelCategoryFilter } from "./beezupcommonchannelcategoryfilter";
import { ProductSetVisibilityCriteria } from "./productsetvisibilitycriteria";
import { ChannelCatalogProductFilters } from "./channelcatalogproductfilters";
export declare class GetChannelCatalogProductInfoListRequest extends SpeakeasyBase {
    catalogCategoryFilter?: BeezUpCommonCatalogCategoryFilter;
    channelCategoryFilter?: BeezUpCommonChannelCategoryFilter;
    criteria: ProductSetVisibilityCriteria;
    overridden?: boolean;
    pageNumber: number;
    pageSize: number;
    productFilters?: ChannelCatalogProductFilters;
}
