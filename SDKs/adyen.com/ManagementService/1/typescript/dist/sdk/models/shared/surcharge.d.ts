import { SpeakeasyBase } from "../../../internal/utils";
import { Configuration } from "./configuration";
export declare class Surcharge extends SpeakeasyBase {
    /**
     * Show the surcharge details on the terminal, so the shopper can confirm.
     */
    askConfirmation?: boolean;
    /**
     * Surcharge fees or percentages for specific payment methods, funding sources (credit or debit), and currencies.
     */
    configurations?: Configuration[];
}
