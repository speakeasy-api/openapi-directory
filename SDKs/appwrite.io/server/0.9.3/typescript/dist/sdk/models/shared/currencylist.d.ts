import { SpeakeasyBase } from "../../../internal/utils";
import { Currency } from "./currency";
/**
 * Currencies List
 */
export declare class CurrencyList extends SpeakeasyBase {
    /**
     * List of currencies.
     */
    currencies: Currency[];
    /**
     * Total sum of items in the list.
     */
    sum: number;
}
