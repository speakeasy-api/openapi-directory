import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
export declare class PayoutAccountHolderRequest extends SpeakeasyBase {
    /**
     * The code of the account from which the payout is to be made.
     */
    accountCode: string;
    /**
     * The code of the Account Holder who owns the account from which the payout is to be made.
     *
     * @remarks
     * The Account Holder is the party to which the payout will be made.
     */
    accountHolderCode: string;
    amount?: Amount;
    /**
     * The unique ID of the Bank Account held by the Account Holder to which the payout is to be made.
     *
     * @remarks
     * If left blank, a bank account is automatically selected.
     */
    bankAccountUUID?: string;
    /**
     * A description of the payout. Maximum 200 characters.
     *
     * @remarks
     * Allowed: **abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/?:().,'+ ";**
     */
    description?: string;
    /**
     * A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.
     */
    merchantReference?: string;
}
