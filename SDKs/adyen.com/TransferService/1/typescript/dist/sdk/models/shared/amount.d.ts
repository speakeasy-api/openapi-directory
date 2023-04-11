import { SpeakeasyBase } from "../../../internal/utils";
export declare class Amount extends SpeakeasyBase {
    /**
     * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).
     */
    currency: string;
    /**
     * The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes).
     */
    value: number;
}
