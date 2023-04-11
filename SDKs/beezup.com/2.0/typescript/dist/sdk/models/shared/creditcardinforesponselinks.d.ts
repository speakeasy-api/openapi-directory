import { SpeakeasyBase } from "../../../internal/utils";
import { LinksGetCreditCardInfoLink } from "./linksgetcreditcardinfolink";
import { LinksSaveCreditCardInfoLink } from "./linkssavecreditcardinfolink";
/**
 * The different actions you can make on this offer
 */
export declare class CreditCardInfoResponseLinks extends SpeakeasyBase {
    saveCreditCardInfo: LinksSaveCreditCardInfoLink;
    self: LinksGetCreditCardInfoLink;
}
