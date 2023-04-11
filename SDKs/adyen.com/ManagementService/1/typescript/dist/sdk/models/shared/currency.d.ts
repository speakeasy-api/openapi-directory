import { SpeakeasyBase } from "../../../internal/utils";
export declare class Currency extends SpeakeasyBase {
    /**
     * Surcharge amount per transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes).
     */
    amount?: number;
    /**
     * Three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). For example, **AUD**.
     */
    currencyCode: string;
    percentage?: Record<string, any>;
}
