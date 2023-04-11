import { SpeakeasyBase } from "../../../internal/utils";
export declare class RefundNotPaidOutTransfersRequest extends SpeakeasyBase {
    /**
     * The code of the account from which to perform the refund(s).
     */
    accountCode: string;
    /**
     * The code of the Account Holder which owns the account from which to perform the refund(s).
     */
    accountHolderCode: string;
}
