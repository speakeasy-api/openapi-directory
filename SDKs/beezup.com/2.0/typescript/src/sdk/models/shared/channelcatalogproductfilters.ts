import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonAdditionalProductFiltersValue } from "./beezupcommonadditionalproductfiltersvalue";



export class ChannelCatalogProductFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalProductFilters", elemType: BeezUpCommonAdditionalProductFiltersValue })
  additionalProductFilters?: Record<string, BeezUpCommonAdditionalProductFiltersValue>;

  @SpeakeasyMetadata({ data: "json, name=catalogEans" })
  catalogEans?: string[];

  @SpeakeasyMetadata({ data: "json, name=catalogMpns" })
  catalogMpns?: string[];

  @SpeakeasyMetadata({ data: "json, name=catalogSkus" })
  catalogSkus?: string[];

  @SpeakeasyMetadata({ data: "json, name=channelEans" })
  channelEans?: string[];

  @SpeakeasyMetadata({ data: "json, name=channelMpns" })
  channelMpns?: string[];

  @SpeakeasyMetadata({ data: "json, name=channelSkus" })
  channelSkus?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
