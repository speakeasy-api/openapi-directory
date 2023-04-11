import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonInfoSummaries } from "./beezupcommoninfosummaries";
import { CreditCardInfoResponseLinks } from "./creditcardinforesponselinks";
import { CreditCardInfoWithCardType } from "./creditcardinfowithcardtype";
import { PaymentMethodEnum } from "./paymentmethodenum";
/**
 * User credit card information
 */
export declare class CreditCardInfoResponse extends SpeakeasyBase {
    creditCardInfo?: CreditCardInfoWithCardType;
    /**
     * Payment method
     */
    currentPaymentMethod: PaymentMethodEnum;
    info?: BeezUPCommonInfoSummaries;
    /**
     * The different actions you can make on this offer
     */
    links: CreditCardInfoResponseLinks;
}
