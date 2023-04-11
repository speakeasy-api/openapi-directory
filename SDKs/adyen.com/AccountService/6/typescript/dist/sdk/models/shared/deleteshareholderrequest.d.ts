import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteShareholderRequest extends SpeakeasyBase {
    /**
     * The code of the Account Holder from which to delete the Shareholders.
     */
    accountHolderCode: string;
    /**
     * The code(s) of the Shareholders to be deleted.
     */
    shareholderCodes: string[];
}
