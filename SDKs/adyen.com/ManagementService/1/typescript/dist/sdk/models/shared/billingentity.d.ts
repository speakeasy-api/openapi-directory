import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
export declare class BillingEntity extends SpeakeasyBase {
    address?: Address;
    /**
     * The email address of the billing entity.
     */
    email?: string;
    /**
     * The unique identifier of the billing entity, for use as `billingEntityId` when creating an order.
     */
    id?: string;
    /**
     * The unique name of the billing entity.
     */
    name?: string;
    /**
     * The tax number of the billing entity.
     */
    taxId?: string;
}
