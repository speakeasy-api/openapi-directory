import { SpeakeasyBase } from "../../../internal/utils";
import { AccountEvent } from "./accountevent";
import { AccountPayoutState } from "./accountpayoutstate";
import { AccountProcessingState } from "./accountprocessingstate";
/**
 * The status of the account holder.
 *
 * @remarks
 * >Permitted values: `Active`, `Inactive`, `Suspended`, `Closed`.
 */
export declare enum AccountHolderStatusStatusEnum {
    Active = "Active",
    Closed = "Closed",
    Inactive = "Inactive",
    Suspended = "Suspended"
}
export declare class AccountHolderStatus extends SpeakeasyBase {
    /**
     * A list of events scheduled for the account holder.
     */
    events?: AccountEvent[];
    payoutState?: AccountPayoutState;
    processingState?: AccountProcessingState;
    /**
     * The status of the account holder.
     *
     * @remarks
     * >Permitted values: `Active`, `Inactive`, `Suspended`, `Closed`.
     */
    status: AccountHolderStatusStatusEnum;
    /**
     * The reason why the status was assigned to the account holder.
     */
    statusReason?: string;
}
