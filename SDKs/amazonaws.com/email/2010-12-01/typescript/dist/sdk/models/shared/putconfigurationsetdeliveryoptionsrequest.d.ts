import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryOptions } from "./deliveryoptions";
/**
 * A request to modify the delivery options for a configuration set.
 */
export declare class PutConfigurationSetDeliveryOptionsRequest extends SpeakeasyBase {
    configurationSetName: string;
    deliveryOptions?: DeliveryOptions;
}
