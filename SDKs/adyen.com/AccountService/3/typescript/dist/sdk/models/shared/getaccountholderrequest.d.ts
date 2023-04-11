import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAccountHolderRequest extends SpeakeasyBase {
    /**
     * The code of the account of which to retrieve the details.
     *
     * @remarks
     * > Required if no `accountHolderCode` is provided.
     */
    accountCode?: string;
    /**
     * The code of the account holder of which to retrieve the details.
     *
     * @remarks
     * > Required if no `accountCode` is provided.
     */
    accountHolderCode?: string;
}
