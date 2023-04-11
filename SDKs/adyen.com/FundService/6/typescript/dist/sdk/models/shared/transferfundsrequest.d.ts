import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
export declare class TransferFundsRequest extends SpeakeasyBase {
    amount: Amount;
    /**
     * The code of the account to which the funds are to be credited.
     *
     * @remarks
     * >The state of the Account Holder of this account must be Active.
     */
    destinationAccountCode: string;
    /**
     * A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.
     */
    merchantReference?: string;
    /**
     * The code of the account from which the funds are to be debited.
     *
     * @remarks
     * >The state of the Account Holder of this account must be Active and allow payouts.
     */
    sourceAccountCode: string;
    /**
     * The code related to the type of transfer being performed.
     *
     * @remarks
     * >The permitted codes differ for each platform account and are defined in their service level agreement.
     */
    transferCode: string;
}
