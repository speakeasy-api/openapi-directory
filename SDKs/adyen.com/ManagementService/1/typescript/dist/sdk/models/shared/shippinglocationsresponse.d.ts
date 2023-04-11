import { SpeakeasyBase } from "../../../internal/utils";
import { ShippingLocation } from "./shippinglocation";
/**
 * OK - the request has succeeded.
 */
export declare class ShippingLocationsResponse extends SpeakeasyBase {
    /**
     * Physical locations where orders can be shipped to.
     */
    data?: ShippingLocation[];
}
