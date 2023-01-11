import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContractClickInfo
/** 
 * Describe the click information related to the offer.
**/
export class ContractClickInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalClickPrice" })
  additionalClickPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=clickIncluded" })
  clickIncluded?: number;

  @SpeakeasyMetadata({ data: "json, name=initialOfferClickIncluded" })
  initialOfferClickIncluded?: number;
}
