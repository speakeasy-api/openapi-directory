import { SpeakeasyBase } from "../../../internal/utils";
export declare class SplitAmount extends SpeakeasyBase {
    /**
     * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).
     *
     * @remarks
     *
     * If this value is not provided, the currency in which the payment is made will be used.
     */
    currency?: string;
    /**
     * The amount in [minor units](https://docs.adyen.com/development-resources/currency-codes).
     */
    value: number;
}
