import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksSaveCreditCardInfoLink } from "./linkssavecreditcardinfolink";
import { LinksGetCreditCardInfoLink } from "./linksgetcreditcardinfolink";



// CreditCardInfoResponseLinks
/** 
 * The different actions you can make on this offer
**/
export class CreditCardInfoResponseLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=saveCreditCardInfo" })
  saveCreditCardInfo: LinksSaveCreditCardInfoLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetCreditCardInfoLink;
}
