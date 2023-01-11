import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentMethodEnum } from "./paymentmethodenum";
import { BeezUpCommonInfoSummaries } from "./beezupcommoninfosummaries";
import { CreditCardInfoResponseLinks } from "./creditcardinforesponselinks";
export declare class CreditCardInfoResponse extends SpeakeasyBase {
    creditCardInfo?: any;
    currentPaymentMethod: PaymentMethodEnum;
    info?: BeezUpCommonInfoSummaries;
    links: CreditCardInfoResponseLinks;
}
