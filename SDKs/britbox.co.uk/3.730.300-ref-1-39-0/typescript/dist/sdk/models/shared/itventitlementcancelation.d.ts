import { SpeakeasyBase } from "../../../internal/utils";
export declare class ItvEntitlementCancelation extends SpeakeasyBase {
    /**
     * Cancelation datetime.
     */
    cancelledAt: Date;
    /**
     * Itv internal id.
     */
    itvId: string;
    /**
     * Source platform of cancelation.
     */
    source: string;
    /**
     * Id of subscription.
     */
    subscriptionId: string;
}
