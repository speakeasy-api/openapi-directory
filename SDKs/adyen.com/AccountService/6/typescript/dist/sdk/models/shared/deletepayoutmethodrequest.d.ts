import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeletePayoutMethodRequest extends SpeakeasyBase {
    /**
     * The code of the account holder, from which to delete the payout methods.
     */
    accountHolderCode: string;
    /**
     * The codes of the payout methods to be deleted.
     */
    payoutMethodCodes: string[];
}
