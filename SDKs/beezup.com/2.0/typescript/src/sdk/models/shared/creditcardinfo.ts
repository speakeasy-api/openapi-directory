import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreditCardInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cardNumber" })
  cardNumber: string;

  @SpeakeasyMetadata({ data: "json, name=cardVerificationCode" })
  cardVerificationCode: string;

  @SpeakeasyMetadata({ data: "json, name=expirationMonth" })
  expirationMonth: number;

  @SpeakeasyMetadata({ data: "json, name=expirationYear" })
  expirationYear: number;
}
