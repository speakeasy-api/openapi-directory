import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state required for the account holder.
 *
 * @remarks
 * > Permitted values: `Processing`, `Payout`.
 */
export declare enum PerformVerificationRequestAccountStateTypeEnum {
    LimitedPayout = "LimitedPayout",
    LimitedProcessing = "LimitedProcessing",
    LimitlessPayout = "LimitlessPayout",
    LimitlessProcessing = "LimitlessProcessing",
    Payout = "Payout",
    Processing = "Processing"
}
export declare class PerformVerificationRequest extends SpeakeasyBase {
    /**
     * The code of the account holder to verify.
     */
    accountHolderCode: string;
    /**
     * The state required for the account holder.
     *
     * @remarks
     * > Permitted values: `Processing`, `Payout`.
     */
    accountStateType: PerformVerificationRequestAccountStateTypeEnum;
    /**
     * The tier required for the account holder.
     */
    tier: number;
}
