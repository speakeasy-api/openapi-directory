import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonLovLink3 } from "./beezupcommonlovlink3";



// MarketplaceChannelCatalogLovLinks
/** 
 * Indicates the List Of Values related to the marketplace
**/
export class MarketplaceChannelCatalogLovLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancelationReasonCodeLOV" })
  cancelationReasonCodeLOV?: BeezUpCommonLovLink3;

  @SpeakeasyMetadata({ data: "json, name=carrierCodeLOV" })
  carrierCodeLOV?: BeezUpCommonLovLink3;

  @SpeakeasyMetadata({ data: "json, name=marketplaceStorePropertyGroupLOV" })
  marketplaceStorePropertyGroupLOV?: BeezUpCommonLovLink3;

  @SpeakeasyMetadata({ data: "json, name=marketplaceStorePropertyLOV" })
  marketplaceStorePropertyLOV?: BeezUpCommonLovLink3;

  @SpeakeasyMetadata({ data: "json, name=refundReasonCodeLOV" })
  refundReasonCodeLOV?: BeezUpCommonLovLink3;

  @SpeakeasyMetadata({ data: "json, name=shippingMethodLOV" })
  shippingMethodLOV?: BeezUpCommonLovLink3;
}
