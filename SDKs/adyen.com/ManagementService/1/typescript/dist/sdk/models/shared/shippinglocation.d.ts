import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Contact } from "./contact";
/**
 * OK - the request has succeeded.
 */
export declare class ShippingLocation extends SpeakeasyBase {
    address?: Address;
    contact?: Contact;
    /**
     * The unique identifier of the shipping location, for use as `shippingLocationId` when creating an order.
     */
    id?: string;
    /**
     * The unique name of the shipping location.
     */
    name?: string;
}
