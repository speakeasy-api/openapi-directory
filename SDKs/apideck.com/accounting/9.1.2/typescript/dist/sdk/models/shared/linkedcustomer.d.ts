import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The customer this entity is linked to.
 */
export declare class LinkedCustomerInput extends SpeakeasyBase {
    /**
     * The display name of the customer.
     */
    displayName?: string;
    /**
     * The ID of the customer this entity is linked to.
     */
    id: string;
    /**
     * The name of the customer. Deprecated, use display_name instead.
     */
    name?: string;
}
/**
 * The customer this entity is linked to.
 */
export declare class LinkedCustomer extends SpeakeasyBase {
    /**
     * The company name of the customer.
     */
    companyName?: string;
    /**
     * The display ID of the customer.
     */
    displayId?: string;
    /**
     * The display name of the customer.
     */
    displayName?: string;
    /**
     * The ID of the customer this entity is linked to.
     */
    id: string;
    /**
     * The name of the customer. Deprecated, use display_name instead.
     */
    name?: string;
}
