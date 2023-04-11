import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
/**
 * Currencies exchange rate returned.
 */
export declare class ConversationRate extends SpeakeasyBase {
    conversationRate?: number;
    fromCurrency?: CurrencyEnum;
    toCurrency?: CurrencyEnum;
}
