import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentMethodEnum } from "./paymentmethodenum";
import { BeezUpCommonInfoSummaries } from "./beezupcommoninfosummaries";
import { CreditCardInfoResponseLinks } from "./creditcardinforesponselinks";



export class CreditCardInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creditCardInfo" })
  creditCardInfo?: any;

  @SpeakeasyMetadata({ data: "json, name=currentPaymentMethod" })
  currentPaymentMethod: PaymentMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: BeezUpCommonInfoSummaries;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: CreditCardInfoResponseLinks;
}
