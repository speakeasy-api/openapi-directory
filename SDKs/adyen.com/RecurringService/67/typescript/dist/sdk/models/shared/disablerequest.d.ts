import { SpeakeasyBase } from "../../../internal/utils";
export declare class DisableRequest extends SpeakeasyBase {
    /**
     * Specify the contract if you only want to disable a specific use.
     *
     * @remarks
     *
     * This field can be set to one of the following values, or to their combination (comma-separated):
     * * ONECLICK
     * * RECURRING
     * * PAYOUT
     */
    contract?: string;
    /**
     * The merchant account identifier with which you want to process the transaction.
     */
    merchantAccount: string;
    /**
     * The ID that uniquely identifies the recurring detail reference.
     *
     * @remarks
     *
     * If it is not provided, the whole recurring contract of the `shopperReference` will be disabled, which includes all recurring details.
     */
    recurringDetailReference?: string;
    /**
     * The ID that uniquely identifies the shopper.
     *
     * @remarks
     *
     * This `shopperReference` must be the same as the `shopperReference` used in the initial payment.
     */
    shopperReference: string;
}
