import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteBankAccountRequest extends SpeakeasyBase {
    /**
     * The code of the Account Holder from which to delete the Bank Account(s).
     */
    accountHolderCode: string;
    /**
     * The code(s) of the Bank Accounts to be deleted.
     */
    bankAccountUUIDs: string[];
}
