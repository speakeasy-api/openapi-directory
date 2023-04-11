import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of current subscription.
 */
export declare class ItvCurrentSubscription extends SpeakeasyBase {
    /**
     * The cancellation period end flag.
     */
    cancelAtPeriodEnd: boolean;
    /**
     * The description of payment collection method.
     */
    collectionMethod: string;
    /**
     * The creation timestamp.
     */
    created: number;
    /**
     * The end of period timestamp.
     */
    currentPeriodEnd: number;
    /**
     * The start of period timestamp.
     */
    currentPeriodStart: number;
    /**
     * The plan used during subsribing.
     */
    plan: Record<string, any>;
    /**
     * The status of subscription.
     */
    status: string;
}
