import { SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerAttributes } from "./loadbalancerattributes";
/**
 * Contains the parameters for ModifyLoadBalancerAttributes.
 */
export declare class ModifyLoadBalancerAttributesInput extends SpeakeasyBase {
    loadBalancerAttributes: LoadBalancerAttributes;
    loadBalancerName: string;
}
