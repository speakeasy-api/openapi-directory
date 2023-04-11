import { SpeakeasyBase } from "../../../internal/utils";
import { BillingEntity } from "./billingentity";
/**
 * OK - the request has succeeded.
 */
export declare class BillingEntitiesResponse extends SpeakeasyBase {
    /**
     * List of legal entities that can be used for the billing of orders.
     */
    data?: BillingEntity[];
}
