import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state to be updated.
 *
 * @remarks
 * >Permitted values are: `Processing`, `Payout`
 */
export declare enum UpdateAccountHolderStateRequestStateTypeEnum {
    LimitedPayout = "LimitedPayout",
    LimitedProcessing = "LimitedProcessing",
    LimitlessPayout = "LimitlessPayout",
    LimitlessProcessing = "LimitlessProcessing",
    Payout = "Payout",
    Processing = "Processing"
}
export declare class UpdateAccountHolderStateRequest extends SpeakeasyBase {
    /**
     * The code of the Account Holder on which to update the state.
     */
    accountHolderCode: string;
    /**
     * If true, disable the requested state.  If false, enable the requested state.
     */
    disable: boolean;
    /**
     * The reason that the state is being updated.
     *
     * @remarks
     * >Required if the state is being disabled.
     */
    reason?: string;
    /**
     * The state to be updated.
     *
     * @remarks
     * >Permitted values are: `Processing`, `Payout`
     */
    stateType: UpdateAccountHolderStateRequestStateTypeEnum;
}
