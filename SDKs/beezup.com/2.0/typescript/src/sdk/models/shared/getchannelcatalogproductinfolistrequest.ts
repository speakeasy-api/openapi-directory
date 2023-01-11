import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonCatalogCategoryFilter } from "./beezupcommoncatalogcategoryfilter";
import { BeezUpCommonChannelCategoryFilter } from "./beezupcommonchannelcategoryfilter";
import { ProductSetVisibilityCriteria } from "./productsetvisibilitycriteria";
import { ChannelCatalogProductFilters } from "./channelcatalogproductfilters";



export class GetChannelCatalogProductInfoListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogCategoryFilter" })
  catalogCategoryFilter?: BeezUpCommonCatalogCategoryFilter;

  @SpeakeasyMetadata({ data: "json, name=channelCategoryFilter" })
  channelCategoryFilter?: BeezUpCommonChannelCategoryFilter;

  @SpeakeasyMetadata({ data: "json, name=criteria" })
  criteria: ProductSetVisibilityCriteria;

  @SpeakeasyMetadata({ data: "json, name=overridden" })
  overridden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=productFilters" })
  productFilters?: ChannelCatalogProductFilters;
}
