import { SpeakeasyBase } from "../../../internal/utils";
export declare class ItvBillingHistoryRecord extends SpeakeasyBase {
    /**
     * The card info.
     */
    card: Record<string, any>;
    /**
     * The amount charged.
     */
    charge: Record<string, any>;
    /**
     * The object with invoice details.
     */
    invoice: Record<string, any>;
    /**
     * The object with subscription payment details.
     */
    subscription: Record<string, any>;
}
