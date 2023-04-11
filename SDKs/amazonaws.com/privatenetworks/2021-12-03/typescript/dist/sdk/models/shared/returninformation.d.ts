import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
/**
 * Information about a request to return a network resource.
 */
export declare class ReturnInformation extends SpeakeasyBase {
    replacementOrderArn?: string;
    returnReason?: string;
    shippingAddress?: Address;
    shippingLabel?: string;
}
