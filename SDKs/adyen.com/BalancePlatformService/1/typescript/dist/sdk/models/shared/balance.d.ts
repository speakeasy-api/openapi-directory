import { SpeakeasyBase } from "../../../internal/utils";
export declare class Balance extends SpeakeasyBase {
    /**
     * The remaining amount available for spending.
     */
    available: number;
    /**
     * The total amount in the balance.
     */
    balance: number;
    /**
     * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance.
     */
    currency: string;
    /**
     * The amount reserved for payments that have been authorised, but have not been captured yet.
     */
    reserved: number;
}
