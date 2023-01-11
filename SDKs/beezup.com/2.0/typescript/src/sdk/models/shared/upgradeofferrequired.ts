import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpgradeOfferRequired
/** 
 * The message contains the offer identifier required to execute this operation
**/
export class UpgradeOfferRequired extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offerId" })
  offerId: number;
}
