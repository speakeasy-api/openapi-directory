import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContractStoreInfo
/** 
 * Describe the store information related to the offer.
**/
export class ContractStoreInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalStorePrice" })
  additionalStorePrice?: number;

  @SpeakeasyMetadata({ data: "json, name=maxStoreCount" })
  maxStoreCount?: number;

  @SpeakeasyMetadata({ data: "json, name=minStoreCount" })
  minStoreCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ownedStoreCount" })
  ownedStoreCount?: number;

  @SpeakeasyMetadata({ data: "json, name=storeCount" })
  storeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=storeIncluded" })
  storeIncluded?: number;
}
