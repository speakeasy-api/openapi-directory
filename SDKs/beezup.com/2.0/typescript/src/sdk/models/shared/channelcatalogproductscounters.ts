import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChannelCatalogProductsCounters
/** 
 * The channel catalog products counters. For each counter you will have a count.
**/
export class ChannelCatalogProductsCounters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disabledProductCountExcludingUncategorized" })
  disabledProductCountExcludingUncategorized?: number;

  @SpeakeasyMetadata({ data: "json, name=disabledProductCountIncludingUncategorized" })
  disabledProductCountIncludingUncategorized?: number;

  @SpeakeasyMetadata({ data: "json, name=excludedProductCountExcludingUncategorizedAndDisabled" })
  excludedProductCountExcludingUncategorizedAndDisabled?: number;

  @SpeakeasyMetadata({ data: "json, name=excludedProductCountIncludingUncategorizedAndDisabled" })
  excludedProductCountIncludingUncategorizedAndDisabled?: number;

  @SpeakeasyMetadata({ data: "json, name=existingProductCount" })
  existingProductCount?: number;

  @SpeakeasyMetadata({ data: "json, name=uncategorizedProductCount" })
  uncategorizedProductCount?: number;
}
