import { SpeakeasyBase } from "../../../internal/utils";
import { ItvEntitlement } from "./itventitlement";
import { ItvEntitlementCancelation } from "./itventitlementcancelation";
/**
 * Details of current subscription.
 */
export declare class ItvEntitlementsHistory extends SpeakeasyBase {
    /**
     * The results of availability checks.
     */
    cancellations: ItvEntitlementCancelation[];
    /**
     * The results of availability checks.
     */
    entitlements: ItvEntitlement[];
}
