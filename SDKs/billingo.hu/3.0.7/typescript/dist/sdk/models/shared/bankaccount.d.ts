import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
export declare class BankAccount extends SpeakeasyBase {
    accountNumber: string;
    accountNumberIban?: string;
    currency: CurrencyEnum;
    id?: number;
    name: string;
    needQr?: boolean;
    swift?: string;
}
export declare class BankAccountInput extends SpeakeasyBase {
    accountNumber: string;
    accountNumberIban?: string;
    currency: CurrencyEnum;
    name: string;
    needQr?: boolean;
    swift?: string;
}
