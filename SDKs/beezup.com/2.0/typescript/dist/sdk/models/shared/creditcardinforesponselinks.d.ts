import { SpeakeasyBase } from "../../../internal/utils";
import { LinksSaveCreditCardInfoLink } from "./linkssavecreditcardinfolink";
import { LinksGetCreditCardInfoLink } from "./linksgetcreditcardinfolink";
/**
 * The different actions you can make on this offer
**/
export declare class CreditCardInfoResponseLinks extends SpeakeasyBase {
    saveCreditCardInfo: LinksSaveCreditCardInfoLink;
    self: LinksGetCreditCardInfoLink;
}
