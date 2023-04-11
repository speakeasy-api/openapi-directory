import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteSignatoriesRequest extends SpeakeasyBase {
    /**
     * The code of the account holder from which to delete the signatories.
     */
    accountHolderCode: string;
    /**
     * Array of codes of the signatories to be deleted.
     */
    signatoryCodes: string[];
}
