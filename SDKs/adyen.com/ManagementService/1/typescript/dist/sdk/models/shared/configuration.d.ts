import { SpeakeasyBase } from "../../../internal/utils";
import { Currency } from "./currency";
export declare class Configuration extends SpeakeasyBase {
    /**
     * Payment method, like **eftpos_australia** or **mc**. See the [possible values](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api).
     */
    brand: string;
    /**
     * Currency, and surcharge percentage or amount.
     */
    currencies: Currency[];
    /**
     * Funding source. Possible values:
     *
     * @remarks
     * * **Credit**
     * * **Debit**
     */
    sources?: string[];
}
