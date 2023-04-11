import { SpeakeasyBase } from "../../../internal/utils";
import { Listener } from "./listener";
/**
 * Contains the parameters for CreateLoadBalancerListeners.
 */
export declare class CreateLoadBalancerListenerInput extends SpeakeasyBase {
    listeners: Listener[];
    loadBalancerName: string;
}
