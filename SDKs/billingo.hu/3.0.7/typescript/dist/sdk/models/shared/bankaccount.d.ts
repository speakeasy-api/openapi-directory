import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
/**
 * BankAccount object that you would like to store.
 */
export declare class BankAccountInput extends SpeakeasyBase {
    accountNumber: string;
    accountNumberIban?: string;
    currency: CurrencyEnum;
    name: string;
    needQr?: boolean;
    swift?: string;
}
/**
 * BankAccount created successfully.
 */
export declare class BankAccount extends SpeakeasyBase {
    accountNumber: string;
    accountNumberIban?: string;
    currency: CurrencyEnum;
    id?: number;
    name: string;
    needQr?: boolean;
    swift?: string;
}
