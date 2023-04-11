import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters for DeleteLoadBalancerListeners.
 */
export declare class DeleteLoadBalancerListenerInput extends SpeakeasyBase {
    loadBalancerName: string;
    loadBalancerPorts: number[];
}
