import { SpeakeasyBase } from "../../../internal/utils";
export declare class CloseStoresRequest extends SpeakeasyBase {
    /**
     * The code of the account holder.
     */
    accountHolderCode: string;
    /**
     * List of stores to be closed.
     */
    stores: string[];
}
