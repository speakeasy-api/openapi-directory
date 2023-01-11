import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";



export class ConversationRate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversation_rate" })
  conversationRate?: number;

  @SpeakeasyMetadata({ data: "json, name=from_currency" })
  fromCurrency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=to_currency" })
  toCurrency?: CurrencyEnum;
}
